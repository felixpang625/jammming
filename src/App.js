import React, { useState } from 'react'
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import Spotify from './util/Spotify'
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term) => {
      Spotify.search(term).then(searchResults => {
          setSearchResults(searchResults);
      });
  };

  const addTrack = (track) => {
      if (playlistTracks.some(savedTrack => savedTrack.id === track.id))
          return;

      setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
      setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const updatePlaylistName = (name) => {
      setPlaylistName(name);
  };

  const savePlaylist = () => {
      const trackUris = playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
          setPlaylistName('New Playlist');
          setPlaylistTracks([]);
      });
  };

  return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
              <SearchBar onSearch={search} />
              <div className="App-playlist">
                  <SearchResults 
                      searchResults={searchResults} 
                      onAdd={addTrack} 
                  />
                  <Playlist 
                      playlistName={playlistName} 
                      playlistTracks={playlistTracks}
                      onRemove={removeTrack}
                      onNameChange={updatePlaylistName}
                      onSave={savePlaylist}
                  />
              </div>
          </div>
      </div>
  );
}

export default App;