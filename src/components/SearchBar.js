import React from 'react'

function SearchBar(props) {
    return (
        <aside className="search">
            <div className="search-container">
                <form  onSubmit={props.HandleSearch}>
                    <input 
                    className="search-box"
                    type="search"
                    placeholder="Search for an Anime..."
                    required
                    value = {props.search}
                    onChange={e =>props.SetSearch(e.target.value)} /> 
                </form>    
            </div> 
        </aside> 
    )
}

export default SearchBar
