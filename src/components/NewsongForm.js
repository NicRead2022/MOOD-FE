import axios from 'axios';
import React from 'react';
// import Client from '../services/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material';
import { BASE_URL } from '../globals';


const NewSong = ({playlistId}) => {
const navigate = useNavigate()
const initialState = {songName: ""}
const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    let newSongWithId = {...formState, playlistId: playlistId }
    console.log(newSongWithId)
    await axios.post(`${BASE_URL}/song/all`, newSongWithId)
      .then((res) => {
        console.log(res);
        setFormState(initialState)
        // navigate(`/playlists/${playlistId}`)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
          <h3>Add New Song:</h3>
    <form onSubmit={handleSubmit}>
    <div className='new-song-input-wrapper'>
          <label htmlFor='songName'>Song:</label>
          <input
            onChange={handleChange}
            name="songName"
            type="text"
            value={formState.songName} required
          />
        </div>
    <button type="submit">Submit</button>
    </form>
  </div>
  )}


export default NewSong

