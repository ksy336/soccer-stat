import React, {useState} from 'react';
import {apiKey} from "../apiKey";
import Articles from "./Articles";

export const FootballDataAPI = require('footballdata-api-js');
const FetchingPosts = () => {
        const [competitions, setCompetitions] = useState([]);
    async function fetchPost() {
        const api = FootballDataAPI.getAPIWrapper(apiKey);
        try {
            const standings = await api.getCompetitionStandings('FL1', {standingType: 'TOTAL'});
            const response = await api.getCompetitions(); // список лиг, соревнований
            setCompetitions(response.competitions);
            console.log(response);
            console.table(standings.standings[0].table);
            // console.log(matchesOfLeague);
            // console.log(teams);
            // console.log(matchesOfTeam);
            console.log(response.competitions[0].area.name);

        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>

            <button onClick={fetchPost}>Get list of leagues</button>
            <Articles competitions={competitions}/>
        </div>
    );
};

export default FetchingPosts;