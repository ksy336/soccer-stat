import React from 'react';
import axios from "axios";

const FetchingPosts = () => {
    async function fetchPost() {
        const response = await axios.get("https://api.football-data.org/v2/competitions/CL/matches");
        console.log(response.data);
    }
    return (
        <div>
           <button onClick={fetchPost}>Get posts</button>
        </div>
    );
};

export default FetchingPosts;