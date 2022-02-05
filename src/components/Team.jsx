import React from 'react';

const Team = ({team}) => {
    return (
        <div className="table-responsive">
            <table className="table-content">
                <tbody>
                <tr className="table-tr">
                    <td style={{color: 'brown'}}>Name of Teams:</td>
                </tr>
                </tbody>
                {team.map(( { name, crestUrl, website }, index) => {
                    return (
                        <tbody key={index}>
                        <tr className="table-row">
                            <td className="table-td">{name}</td>
                            <td className="table-td">{website}</td>
                            <td><img width={200} src={crestUrl} alt={name}/></td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
};

export default Team;