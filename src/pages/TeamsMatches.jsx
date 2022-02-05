import React, {useEffect, useMemo, useState} from 'react';
import {api} from "../api";
import PostFilter from "../components/PostFilter";
import TeamCalendar from "../components/TeamCalendar";

const TeamsMatches = () => {
    const [team, setTeam] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...team].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return team;
    }, [filter.sort, team]);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPost.filter(team => team.awayTeam.name.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPost]);

    async function fetchPost() {
        try {
            const response = await api.getTeamMatches(527 );
            console.log(response);
            setTeam(response.matches);
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
                setFilter={setFilter}/>
            < TeamCalendar
                team={team}
                team={searchedAndSortedPosts}
            />
        </div>
    );
};

export default TeamsMatches;