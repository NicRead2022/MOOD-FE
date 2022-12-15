import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import '../CSS/Home.css'
import {Card, CardHeader, CardContent, CardMedia} from '@mui/material'


const MoodCard = ({feeling, indexKey, id }) => {

  
let navigate = useNavigate()
const navigateToMood = () => {navigate(`/moods/${id}`)}
let backgroundColor = '#ff7d00ff'
let img = "happy image"
  if (
  feeling === 'Sad'
) {
  backgroundColor = '#15616dff'
  img = 'sad image'
}
  if (
  feeling === 'Rage'
) {
  backgroundColor = '#78290fff'
  img = ' rage image'
}
const moodstyle = {
  backgroundColor: backgroundColor,
  height: '200px',
  width: 'calc(100vw-16px)',
  maxWidth: '400px',
  borderRadius: '25px',
  margin: '8px'



}


  return(
    <Card key= {indexKey}style={
      moodstyle
    } onClick={navigateToMood}
  >
    <CardHeader title={feeling}>
      {feeling}
    </CardHeader>
    <CardContent image={img}></CardContent>
  </Card>
  )
}


export default MoodCard