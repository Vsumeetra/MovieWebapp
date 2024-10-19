import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MovieApp</Link>
                <form className="d-flex" onSubmit={handleSearch}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
