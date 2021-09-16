import React from 'react'

function TopBar({ topAnime }) {
    return (
        <nav className ='topBar'>
            <div className="btn-container">
            <button className='hvr-backward btn'>
            <ion-icon name="arrow-round-back"></ion-icon>
            </button>
            </div>
            {topAnime.map( anime => (
            <a 
                className ='top-container'
                href={anime.url} 
                key={anime.mal_id}
                target="_blank"
                rel="noreferrer">
                <img className="top-img" src={anime.image_url} alt="cover"/> {anime.title} 
            </a>   
            ))}
            <div className="btn-container">
            <button className='hvr-forward btn'>
                <ion-icon name="arrow-round-forward"></ion-icon>
            </button>
            </div>
        </nav>
    )
}

export default TopBar
