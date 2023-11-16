import React from 'react'

function searchForm() {
  return (
    <div>
        <h1> 
            <i className = "fa fa-search"/> Search for a movie
        </h1>
        <form>
            <input type='text' name='searchText' placeholder='Search Movie...'/>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default searchForm