import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Nav from './components/Nav';
import axios from 'axios';
import Mood from './Pages/Mood';
import Playlist from './Pages/Playlist';

function App() {



return(
  <div className='="'>
   <header>
    <Nav/>
   </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/moods/:moodId" element={<Mood/>} />
        <Route path="/playlists/:playlistId" element={<Playlist/>}/>
      </Routes>
    </main>
  </div>
)} 


export default App
