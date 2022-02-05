import React, {useEffect, useMemo, useState} from 'react';
import Articles from "../components/Articles";
import PostFilter from "../components/PostFilter";
import {api} from "../api";


const Leagues = () => {
    const [competitions, setCompetitions] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);


    const sortedPost = useMemo(() => {
        if(filter.sort) {
            return [...competitions].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return competitions;
    }, [filter.sort, competitions]);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPost.filter(competition => competition.name.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPost]);

    async function fetchPost(limit, page) {
        try {
            const response = await api.getCompetitions(
                {
               params: {
                   _limit: limit,
                   _page: page
               }
            })

            setCompetitions(response.competitions);
            console.log(response);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPost(10, 1)
    }, [page]);

    const getPageCount = (totalPages) => {
        return Math.ceil(totalPages / limit);
    }

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

export default Leagues;