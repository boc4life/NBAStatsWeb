import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                NBAStats
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/"
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/teams"
                            className={
                                window.location.pathname === "/teams" ? "nav-link active" : "nav-link"
                            }
                        >
                            Teams
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/players"
                            className={
                                window.location.pathname === "/players" ? "nav-link active" : "nav-link"
                            }
                        >
                            Players
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;