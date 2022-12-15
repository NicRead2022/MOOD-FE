import React from 'react';
import Client from '../services/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UpdateSong = ({selectedSong, playlist}) => {
const navigate = useNavigate()
const initialState = {songName:""}
const [formState, setFormState] = useState(initialState)
console.log(selectedSong)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    let updateSong = {...formState, playlistId: playlist.Id} 
    await Client.put(`/api/song/`, updateSong)
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
          <h3>Update Your Song:</h3>
    <form onSubmit={handleSubmit}>
    <div className='update-song-input-wrapper'>
          <label htmlFor='updateSongName'>Updated Song:</label>
          <input
            onChange={handleChange}
            placeholder={selectedSong[0].songName}
            name="updateSongName"
            type="text"
            value={formState.songName} 
          />
        </div>
  <button type="submit">Submit</button>
    </form>
  </div>
  )}
  
  
  export default UpdateSong