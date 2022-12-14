import React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../globals";
import SongCard from "../components/SongCard";
import { Navigate } from "react-router-dom";

const Playlist = () => {
  const [songs,setSongs] = useState([])
  const getSongs = async () => {
  const res = await axios.get(`${BASE_URL}/songs/`)
  setSongs(res.data)
  console.log(res.data)
}

  useEffect(() => {
    getSongs()
  }, [])
  
  const songsRenderer = songs.map((songs,index) => { return (<SongCard id={songs.id} key={songs.id} name = {songs.name}/>)})


  return(
  <div>
    <h1>Aura Vibes</h1>
    {
      songsRenderer
    }
    
  </div>
)
}



export default Playlist
