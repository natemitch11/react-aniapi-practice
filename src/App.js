import './App.css'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import MainContent from './components/MainContent'

function App() {

  const [animeList, SetAnimeList] =useState([])
  const [topAnime, SetTopAnime] = useState([])
  const [search, SetSearch] =useState("")

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(response => response.json());

    SetTopAnime(temp.top.slice(0,6))
  }

  const HandleSearch = e => {
    e.preventDefault();

    FetchAnime(search)
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=15`)
      .then(res => res.json());
    
    SetAnimeList(temp.results);
  }

  useEffect(() => {
    getTopAnime();
  },[])
  
  return (
    <div>
      <Header />
      <TopBar topAnime={topAnime} />
      <div className="container">
        <SearchBar 
          HandleSearch={HandleSearch}
          search={search}
          animeList={animeList}
          SetSearch={SetSearch}/>
      <MainContent
          animeList={animeList}/>
        </div>
    </div>
  );
}

export default App;
