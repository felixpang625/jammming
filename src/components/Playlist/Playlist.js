// src/components/Playlist/Playlist.js
import React from 'react';
import './Playlist.css';

function Playlist({ playlistName, playlistTracks, onNameChange, onRemove, onSave }) {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input 
        value={playlistName}
        onChange={handleNameChange}
        placeholder="New Playlist"
      />
      <div className="TrackList">
        {playlistTracks.map(track => (
          <div key={track.id} className="Track">
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
            </div>
            <button 
              className="Track-action"
              onClick={() => onRemove(track)}
            >
              -
            </button>
          </div>
        ))}
      </div>
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;