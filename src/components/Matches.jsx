import React from 'react';

const Matches = ({matches}) => {
    return (
        <div>
            <table className="table-content">
                <tbody>
                     <tr>
                        <th style={{color: 'brown'}}>List of matches:</th>
                    </tr>
                </tbody>
                {matches.map(( { awayTeam, homeTeam, score, season}, index) => {
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
                            <td className="table-td__item">{score.fullTime.awayTeam}</td>
                            <td className="table-td">{score.fullTime.homeTeam}</td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};

export default Matches;