import React, {useEffect, useState} from 'react';
import "../styles/App.css";

const Articles = ({competitions, page, onChangePage}) => {
    const [numberOfPage, setNumberOfPage] = useState("");

    useEffect(() => {
        setNumberOfPage(page);
    }, [page]);

    const handleChange = (e) => {
        const { value } = e.target;
        const regexp = /\d+/;
        const matchedValue = value.match(regexp);
        if(matchedValue) {
            const newValue = +matchedValue[0];
            onChangePage(newValue);
            setNumberOfPage(newValue);
        } else {
            setNumberOfPage("");
        }

    }
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
            <input type="text" value={numberOfPage} onChange={handleChange}/>
        </div>
    );
};

export default Articles;