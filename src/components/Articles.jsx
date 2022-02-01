import React from 'react';
import "../styles/App.css";

const Articles = ({competitions}) => {
    return (
        <div>
            <table className="table-content">
                <tbody>
                    <tr className="table-tr">
                        <td style={{color: 'brown'}}>Name of League:</td>
                    </tr>
                </tbody>
            {competitions.map(( { name, area }, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td className="table-td">{name}</td>
                            <td className="table-td">{area.name}</td>
                        </tr>
                    </tbody>
                );
            })}

            </table>
        </div>
    );
};

export default Articles;