import React from "react"
import MoodCard from "../components/MoodCard";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../globals";
import '../CSS/Home.css'



const Home = () => {
  const [moods,setMoods] = useState([])
  const getMood = async () => {
  const res = await axios.get(`${BASE_URL}/mood`)
  setMoods(res.data)
  console.log(res.data)
}
  useEffect(() => {
    getMood()
  }, [])
  const moodRenderer = moods.map((mood,index) => { return (<MoodCard id={mood.id} key={mood.id} feeling = {mood.feelings}/>)})
return(
  <div>
    <h3 className="home-description" >SELECT A MOOD TO SEE CURATED PLAYLISTS.</h3>
    {
      moodRenderer
    }
  </div>
)
}



export default Home