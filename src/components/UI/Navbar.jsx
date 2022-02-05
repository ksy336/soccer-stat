import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <Link to="/leagues" className="navbar__link">Список лиг</Link>
               <Link to="/teams" className="navbar__link">Список команд</Link>
                <Link to="/matches" className="navbar__link">Календарь лиги</Link>
                <Link to="/list" className="navbar__link">Календарь одной команды</Link>
            </div>
        </nav>
    );
};

export default Navbar;