import React from 'react'

function AnimeCard({anime}) {
    return (
        <article className="anime-card">
            <a 
                href={anime.url}
                target="_blank"
                rel="noreferrer">
                <figure>
                    <img className="cover-img"src={anime.image_url} alt="cover" />
                </figure>
                <h3 id="anime-title">{anime.title}</h3>
            </a>
                
        </article>
    )
}

export default AnimeCard
