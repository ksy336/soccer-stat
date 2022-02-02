import React, {useEffect, useMemo, useState} from 'react';
import {apiKey} from "../apiKey";
import Articles from "./Articles";
import PostList from "./PostList";
import Input from "./MyInput";
import Select from "./UI/Select";
import PostFilter from "./PostFilter";

export const FootballDataAPI = require('footballdata-api-js');
const api = FootballDataAPI.getAPIWrapper(apiKey);

const FetchingPosts = () => {
    const [competitions, setCompetitions] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [page, setPage] = useState(1);

    const sortedPost = useMemo(() => {
        if(filter.sort) {
            return [...competitions].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return competitions;
    }, [filter.sort, competitions]);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPost.filter(competition => competition.name.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPost]);

    async function fetchPost() {
        try {
            const response = await api.getCompetitions(); // список лиг, соревнований
            setCompetitions(response.competitions);
            console.log(response);

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
            <Articles
                page={page}
                competitions={competitions}
                competitions={searchedAndSortedPosts}
                onChangePage={(pageFromInput) => setPage(pageFromInput)}/>
        </div>
    );
};

export default FetchingPosts;