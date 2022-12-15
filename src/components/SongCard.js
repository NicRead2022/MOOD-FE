import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import React from 'react'
import Playlist from '../Pages/Mood'
import { TextField, Card, CardMedia } from '@mui/material'
import NewSong from './NewSongForm'

const SongCard = ({ songName, indexKey, id, playlistId, getSongs }) => {
  const [playId, setPlayId] = useState(playlistId)
  const [song, setSong] = useState(songName)
  let navigate = useNavigate()

  const deleteSong = async () => {
    await axios.delete(`${BASE_URL}/song/${id}`)
    getSongs()
  }

  const updateSong = async () => {
    await axios.put(`${BASE_URL}/song/${id}`, {
      songName: song,
      playlistId: playlistId
    })
    getSongs()
    // navigate('/playlist')
  }

  let backgroundColor = '#ff7d00ff'
  if (songName === 'When the Partys Over') {
    backgroundColor = '#15616dff'
  }
  if (songName === 'Someone You Loved') {
    backgroundColor = '#78290fff'
  }
  if (songName === 'Misery Business') {
    backgroundColor = '#78290fff'
  }
  if (songName === 'Mothers Daughter') {
    backgroundColor = '#78290fff'
  }
  if (songName === 'Church') {
    backgroundColor = '#78290fff'
  }
  if (songName === 'Strut') {
    backgroundColor = '#78290fff'
  }
  const songstyle = {
    backgroundColor: backgroundColor,
    height: '200px',
    width: 'calc(100vw-16px)',
    maxWidth: '400px',
    borderRadius: '25px',
    margin: '8px'
  }
  const handleSongChange = (event) => {
     setSong(event.target.value)
  }

  return (
    <Card key={indexKey} style={songstyle}>
      <TextField margin="normal" value={song} onChange={handleSongChange} label="Song Name"/>
      <div>
        <button onClick={updateSong} className="update-song-btn">
          Update Song
        </button>
      </div>
      <button onClick={() => deleteSong()} className="delete-song-btn">
        Delete Song
      </button>
    </Card>
  )
}
export default SongCard
