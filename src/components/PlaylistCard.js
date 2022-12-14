import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import React from 'react'
import { Card } from '@mui/material'

const PlaylistCard = ({feeling, indexKey, id}) => {
  let navigate = useNavigate()
  const navigateToPlaylists = () => {navigate(`/playlists/${id}`)}

  let backgroundColor = '#ff7d00ff'
  if (
  feeling === 'Sad'
  ) {
  backgroundColor = '#15616dff'
  }
  if (
  feeling === 'Rage'
  ) {
  backgroundColor = '#78290fff'
  }
const playliststyle = {
  backgroundColor: backgroundColor,
  height: '200px',
  width: 'calc(100vw-16px)',
  maxWidth: '400px',
  borderRadius: '25px',
  margin: '8px'
}
return(
    <Card key= {indexKey}style={
      playliststyle 
    }
    onClick={navigateToPlaylists}
  ></Card>
  )
}
export default PlaylistCard