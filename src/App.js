import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import TopBar from './components/TopBar'

function App() {

  // const [animeList, SetAnimeList] =useState([])
  const [topAnime, SetTopAnime] = useState([])
  // const [search, SetSearch] =useState("")

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(response => response.json());

    SetTopAnime(temp.top.slice(0,6))
  }
  useEffect(() => {
    getTopAnime();
  },[])
  
  return (
    <div>
      <Header />
      <TopBar topAnime={topAnime} />
    </div>
  );
}

export default App;
