import React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../globals";
import SongCard from "../components/SongCard";


const Songs = () => {
  const [songs,setSongs] = useState([])
  const getSongs = async () => {
  const res = await axios.get(`${BASE_URL}/songs/`)
  setSongs(res.data)
  console.log(res.data)
}
const deleteSong = async () => {
  await axios.delete(`${BASE_URL}/song_id/${id}`)
  navigate(-1)
}
  useEffect(() => {
    getSongs()
  }, [])
  
  const songsRenderer = songs.map((songs,index) => { return (<SongCard key={songs.id} name = {songs.name}/>)})


  return(
  <div>
    <h1>Aura Vibes</h1>
    {
      songsRenderer
    }
    <button onClick={() => deleteSong()}
    className="delete-song-btn">
    </button>
  </div>
)
}



export default 
Songs