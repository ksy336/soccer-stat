import React, {useEffect, useMemo, useState} from 'react';
import PostFilter from "../components/PostFilter";

import Team from "../components/Team";
import {api} from "../api";

const ListOfTeams = () => {
    const [team, setTeam] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPost = useMemo(() => {
        if(filter.sort) {
            return [...team].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return team;
    }, [filter.sort, team]);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPost.filter(team => team.name.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPost]);

    async function fetchPost() {
        try {
            const response = await api.getCompetitionTeams("2000");
            setTeam(response.teams);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter} />
            <Team
                team={team}
                team={searchedAndSortedPosts}
            />
        </div>

    );
};

export default ListOfTeams;