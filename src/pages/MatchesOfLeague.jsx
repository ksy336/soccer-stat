import React, {useEffect, useMemo, useState} from 'react';
import PostFilter from "../components/PostFilter";
import Matches from "../components/Matches";
import {api} from "../api";

const MatchesOfLeague = () => {
    const [matches, setMatches] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedByDataPost = useMemo(() => {
        if (filter.sort) {
            return [...matches].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return matches;
    }, [filter.sort, matches]);

    const filterData = useMemo(() => {
        return sortedByDataPost.filter(match => match.awayTeam.name.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedByDataPost]);

    async function fetchPost(limit = 10, page = 1) {
        try {
            const response = await api.getCompetitionMatches("FL1", {
                params: {
                    _limit: limit,
                    _page: page,
                }
                });
            console.log(response.matches);
            setMatches(response.matches);
        } catch (e) {
            console.log(e);
        }
    }
        useEffect(() => {
            fetchPost(10, 1)
        }, [])

        return (
            <div>
                <hr style={{margin: '15px 0'}}/>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}/>
                <Matches
                    matches={matches}
                    matches={filterData}
                />
            </div>
        );
    };

export default MatchesOfLeague;