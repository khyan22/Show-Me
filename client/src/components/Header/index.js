import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

export default function Header() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <div>
                <Link to="/">
                <h1>Show Me</h1>
                </Link>

                <nav>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/profile">My Profile</Link>
                            <a href="/" onClick={logout}>Logout</a>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};