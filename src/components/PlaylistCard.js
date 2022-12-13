import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import React from 'react'

const PlaylistCard = ({feeling, indexKey}) => {
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
     <div key= {indexKey}style={
       playliststyle
     }
   ></div>
   )
 }
 
 
 export default PlaylistCard