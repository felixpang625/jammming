// src/components/SearchResults/SearchResults.js
import React from 'react';
import './SearchResults.css';

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <div className="TrackList">
        {searchResults.map(track => (
          <div key={track.id} className="Track">
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
            </div>
            <button 
              className="Track-action"
              onClick={() => onAdd(track)}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;