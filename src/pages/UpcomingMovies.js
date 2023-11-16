import React from 'react'
import MainLayout from '../layout/MainLayout'
import UpcomingMovie from '../components/UpcomingMovie'
// import '../styles/UpcomingMovies.css'

function UpcomingMovies() {
  return (

    <MainLayout>
        <div style={{backgroundColor:"black", height:"600px"}}> 
            <div style={{backgroundColor:"blue",padding:"50px 50px 50px 50px",backgroundImage:`url("https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg")`, height:"500px",backgroundRepeat:"no-repeat",  display: "block",marginLeft:"auto",marginRight:"auto",width: "25%"}}>Upcoming Movies</div>
        </div>
        <UpcomingMovie/>
        
    </MainLayout>

  )
}

export default UpcomingMovies