
import React, { useEffect, useState } from 'react'

function UpcomingMovie() {

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
            <div>

                <div style={{display:"flex"}}>
                    
                        {movieList.map((movie) =>(
                                 <img style={{width:"80px", height:"100px", marginLeft:"10px", marginTop:"10px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>

                    ))}
                </div>

            </div>
    </>
  )
}

export default UpcomingMovie