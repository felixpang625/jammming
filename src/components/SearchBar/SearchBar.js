import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar ({onSearch}) {
    const [term, setTerm] = useState('')

    const search = () => {
        onSearch(term);
    };

    return (
        <div className="SearchBar">
            <input 
            placeholder="Enter a Song, Album, or Artist"
            onChange={(e) => setTerm(e.target.value)}
            />
            <button className="SearchButton" onclick={search}>
                SEARCH
            </button>
        </div>
    );
}

export default SearchBar;
