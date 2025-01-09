// src/components/TrackList/TrackList.js
import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
    return (
        <div className="TrackList">
            {tracks.map(track => {
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoval={isRemoval}
                    />
                );
            })}
        </div>
    );
}

export default TrackList;