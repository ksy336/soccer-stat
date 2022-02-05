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
            <h2 style={{color: 'brown'}}>Name of League:</h2>

            {competitions.map(( { name, area }, index) => {
                return (
                    <table className="list__leagues" key={index}>
                       <tbody>
                       <tr>
                           <td>
                               <a className="td-link" href="">{name}</a>
                               <p>{area.name}</p>
                           </td>
                       </tr>
                       </tbody>
                    </table>
                );
            })}
        </div>
    );
};

export default Articles;