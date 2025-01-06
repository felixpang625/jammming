import React, { useState } from 'react'
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import './App.css';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([])

  //Add track to playlist
  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  }

  // Remove track from playlist
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  // Update playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  //Handle search
  const search = (searchTerm) => {
    //Connect to spotify API later
    setSearchResults([
      {id: 1, name: "Song 1", artist: "Artist 1", album: "Album 1"},
      {id: 2, name: "Song 2", artist: "Artist 2", album: "Album 2"}
    ]);
  };

  // Save playlist to spotify
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    //connect to spotify api later
    console.log("Saving Playlist:", playlistName, trackURIs);
    // Reset playlist after saving
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);

  }
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <div className="App-playlist">
        <SearchResults 
          searchResults={searchResults} 
          onAdd={addTrack} 
        />
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;