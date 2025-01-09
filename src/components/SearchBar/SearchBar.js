// src/components/SearchBar/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');

    const search = () => {
        onSearch(term);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        search();
    };

    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Enter A Song, Album, or Artist" 
                    onChange={handleTermChange}
                    value={term}
                />
                <button className="SearchButton" type="submit">
                    SEARCH
                </button>
            </form>
        </div>
    );
}

export default SearchBar;