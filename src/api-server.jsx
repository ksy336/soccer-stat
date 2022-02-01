// import {apiKey} from "./apiKey";
//
// export const FootballDataAPI = require('footballdata-api-js');
//
// (async () => {
//     const api = FootballDataAPI.getAPIWrapper(apiKey);
//
//     try {
//         const standings = await api.getCompetitionStandings('FL1', {standingType: 'TOTAL'});
//         const competitions = await api.getCompetitions(); // список лиг, соревнований
//         const matchesOfLeague = await api.getCompetitionMatches(2000); // список матчей лиги
//         const teams = await api.getCompetitionTeams(2000); // список команд
//         const matchesOfTeam = await api.getTeamMatches(86); // список матчей команды
//
//         console.log(standings.season);
//         console.table(standings.standings[0].table);
//         console.log(competitions);
//         console.log(matchesOfLeague);
//         console.log(teams);
//         console.log(matchesOfTeam);
//         return competitions.data;
//     } catch (e) {
//         console.log(e);
//
//     }
// })();