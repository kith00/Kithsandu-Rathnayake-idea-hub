import React from 'react'
import MainLayout from '../layout/MainLayout'


function MovieDetails() {
  return (
    <MainLayout>
        <div style={{backgroundImage:`url("https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg")`, height:"550px",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}> 
            <div style={{backgroundImage:`url("https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg")`, height:"500px",backgroundRepeat:"no-repeat",  display: "block",marginLeft:"auto",marginRight:"auto",width: "25%"}}></div>
        </div>
        <div style={{backgroundColor:"lightgreen", height:"186px"}}>
          <div style={{backgroundColor:"lightblue", height:"60px"}}>
            
          </div>
        </div>
    </MainLayout>
  )
}

export default MovieDetails