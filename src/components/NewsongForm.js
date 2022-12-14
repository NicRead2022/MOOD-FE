import React from 'react';
import Client from '../services/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NewSong = ({playlist}) => {
const navigate = useNavigate()
const initialState = {songName: ""}
const [formState, setFormState] = useState(initialState)
// console.log(bandleader.id)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    let newSongWithId = {...formState, playlistId: playlist.id }
    await Client.post(`/api/gigs`, newSongWithId)
      .then((res) => {
        console.log(res);
        setFormState(initialState)
        // navigate(`/bandleader/${bandleader.id}`)
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
    
    </form>
  </div>
  )}


export default NewGig

