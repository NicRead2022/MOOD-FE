import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
// import '../CSS/Home.css'


const MoodCard = ({feeling, indexKey}) => {
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
const moodstyle = {
  backgroundColor: backgroundColor,
  height: '200px',
  width: 'calc(100vw-16px)',
  maxWidth: '400px',
  borderRadius: '25px',
  margin: '8px'



}


  return(
    <div key= {indexKey}style={
      moodstyle
    }
  ></div>
  )
}


export default MoodCard