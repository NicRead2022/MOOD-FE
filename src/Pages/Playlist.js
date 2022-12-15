import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import SongCard from '../components/SongCard'
import NewSong from '../components/NewSongForm'
import { Navigate, useParams } from 'react-router-dom'

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
      <h1>Enjoy your songs!</h1>
      {songs.map((songs) => {
        return (
          <SongCard
            playlistId={songs.playlistId}
            id={songs.id}
            key={songs.id}
            songName={songs.songName}
          />
        )
      })}
    </div>
  )
}

export default Playlist
