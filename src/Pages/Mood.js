import React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../globals";
import PlaylistCard from "../components/PlaylistCard";



const Playlist = () => {
  const [playlists,setPlaylists] = useState([])
  const getPlaylists = async () => {
  const res = await axios.get(`${BASE_URL}/playlist/`)
  setPlaylists(res.data)
  console.log(res.data)
}
  useEffect(() => {
    getPlaylists()
  }, [])
  const playlistRenderer = playlists.map((playlist,index) => { return (<PlaylistCard key={playlist.id} name = {playlist.name}/>)})
return(
  <div>
    <h1>Aura Vibes</h1>
    {
      playlistRenderer
    }
  </div>
)
}



export default Playlist