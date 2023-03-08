import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import SongCard from '../components/SongCard'
import NewSongForm from '../components/NewSongForm'
import { Navigate, useParams } from 'react-router-dom'
import '../CSS/Home.css'

const Playlist = () => {
  const { playlistId } = useParams()
  const [songs, setSongs] = useState([])

  const getSongs = async () => {
    const res = await axios.get(`${BASE_URL}/song/playlist/${playlistId}`)
    setSongs(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getSongs()
  }, [])

  return (
    <div>
      <h2 className="enjoy-songs">Enjoy your songs!</h2>
      <NewSongForm playlistId={playlistId} />
      {songs.map((songs) => {
        return (
          <SongCard
            playlistId={songs.playlistId}
            id={songs.id}
            key={songs.id}
            songName={songs.songName}
            getSongs={getSongs}
          />
        )
      })}
    </div>
  )
}

export default Playlist
