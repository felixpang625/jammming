import React, { useState } from 'react'
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import './App.css';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([])
  return (
    <div className="App">
      <h1>Jammming</h1>
    </div>
  );
}

export default App;
