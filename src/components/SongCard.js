import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import React from 'react'

const SongCard = ({songName, indexKey, id}) => {
let Navigate = useNavigate()
  const deleteSong = async () => {
    await axios.delete(`${BASE_URL}/song/${id}`)
  }
  
  const updateSong = async () => {
    await axios.put(`${BASE_URL}/song/${id}`)
    Navigate('/playlist')
  }

  let backgroundColor = '#ff7d00ff'
  if (
  songName === 'When the Partys Over'
  ) {
  backgroundColor = '#15616dff'
  }
  if (
  songName === 'Someone You Loved'
  ) {
  backgroundColor = '#78290fff'
  }
  if (
    songName === 'Misery Business'
  ) {
    backgroundColor = '#78290fff'
  }
  if (
    songName === 'Mothers Daughter'
  ) {
    backgroundColor = '#78290fff'
  }
  if (
    songName === 'Church'
  ) {
    backgroundColor = '#78290fff'
  }
  if (
    songName === 'Strut'
  ) {
    backgroundColor = '#78290fff'
  }
const songstyle = {
  backgroundColor: backgroundColor,
  height: '200px',
  width: 'calc(100vw-16px)',
  maxWidth: '400px',
  borderRadius: '25px',
  margin: '8px'
}
return(
    <div key= {indexKey} style={
    songstyle
  }>
    <div>
      <button onClick={() => updateSong()} 
      className="update-song-btn"></button>
    </div>
    <button onClick={() => deleteSong()}
      className="delete-song-btn">
    </button>
  </div>
  )
}
export default SongCard