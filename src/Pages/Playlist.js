import React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../globals";
import SongCard from "../components/SongCard";
import { Navigate, useParams } from "react-router-dom";

const Playlist = () => {
  const {playlistId} = useParams()
  console.log(playlistId)
  const [songs,setSongs] = useState([])
  const getSongs = async () => {
  const res = await axios.get(`${BASE_URL}/songs/${playlistId}`)
  setSongs(res.data)
  console.log(res.data)
}

  useEffect(() => {
    getSongs()
  }, [])
  
  const songsRenderer = songs.map((songs,index) => { return (<SongCard playlistId={songs.playlistId} id={songs.id} key={songs.id} name = {songs.name}/>)})


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
