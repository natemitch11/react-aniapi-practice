import React from 'react'

function TopBar({ topAnime }) {
    return (
        <nav className ='topBar'>
            {topAnime.map( anime => (
            <a 
                href={anime.url} 
                key={anime.mal_id}
                target="_blank"
                rel="noreferrer">
                {anime.title}  
            </a>   
            ))}
        </nav>
    )
}

export default TopBar
