import React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../globals";
import PlaylistCard from "../components/PlaylistCard";
import { useParams } from "react-router-dom";



const Playlist = () => {
  const [playlists,setPlaylists] = useState([])
  const [mood, setMood] = useState("Happy")
  const {moodId} = useParams()
  console.log(moodId)
  const getPlaylists = async () => {
  const res = await axios.get(`${BASE_URL}/playlist/${moodId}`)
  setPlaylists(res.data)
  console.log(res.data)
}
const getMood = async () => {
  const res = await axios.get(`${BASE_URL}/mood/${moodId}`)
  setMood(res.data[0].feelings)
  console.log(res.data[0].feelings)
}




  useEffect(() => {
    getPlaylists()
    getMood()
  }, [])
  const playlistRenderer = playlists.map((playlist,index) => { return (<PlaylistCard feeling={mood} id={playlist.id} key={playlist.id} name = {playlist.name}/>)})
return(
  <div>
    <h1>{mood} Vibes Playlist</h1>
    {
      playlistRenderer
    }
  </div>
)
}



export default Playlist