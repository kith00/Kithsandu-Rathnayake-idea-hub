import React, { useEffect, useState } from 'react'


function Movie() {

    const [movieList, setMovieList] = useState([]);

    const getMovie =() =>{
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=52d3072891e7bb60b61d98794c2bf868")
            .then(res=>res.json())
            .then(json=>setMovieList(json.results))
    }

    useEffect(() =>{
        getMovie()

    },[])

    console.log(movieList)

  return (
    
    <>

        <h1 style={{ textAlign:'center', marginTop:'50px', marginBottom:'50px'}}> Trending movie</h1>

        <div>

            <div style={{marginLeft:"30px"}}>
                {movieList.map((movie) =>(
                    <button style={{border:'none', backgroundColor:'white', cursor:"pointer"}}><img style={{width:"300px", height:"400px", marginLeft:"10px", marginTop:"10px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></button>
            
                ))}
            </div>

            <div>        
                {movieList.map((movie) =>(
                    <p>{movieList.title}</p>
                ))}
            </div>

        </div>

    </>
  )
}

export default Movie