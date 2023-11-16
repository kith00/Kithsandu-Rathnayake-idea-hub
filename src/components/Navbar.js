import React from 'react'
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <div>
        <div className='header'>
            <nav>
                <ul>
                    <li><Link to="/" className='active'>Home</Link></li>
                    <li><Link to="/UpcomingMovies">Upcoming Movies</Link></li>
                    <li><Link to="/MovieDetails">Movie Details</Link></li>

                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar