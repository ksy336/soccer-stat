import React from 'react';

const TeamCalendar = ({team}) => {
    return (
        <div>
            <table className="table-content">
                <tbody>
                <tr>
                    <th style={{color: 'brown'}}>List of team's matches:</th>
                </tr>
                </tbody>
                {team.map(( {awayTeam, homeTeam, season, score}, index) => {
                    return (
                        <tbody key={index}>
                        <tr className="table-row">
                            <th>Команда 1</th>
                            <td className="table-td">{awayTeam.name}</td>
                            <th>Команда 2</th>
                            <td className="table-td">{homeTeam.name}</td>
                            <th>Дата проведения</th>
                            <td className="table-td">{season.startDate}</td>
                            <td className="table-td">{season.endDate}</td>
                        </tr>
                        <tr className="table-row">
                            <th>Счет</th>
                            <td className="table-td">{score.fullTime.awayTeam}</td>
                            <td className="table-td">{score.fullTime.homeTeam}</td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};

export default TeamCalendar;