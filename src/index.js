import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UpcomingMovies from './pages/UpcomingMovies';

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MovieDetails from './pages/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "UpcomingMovies",
    element: <UpcomingMovies/>,
  },

  {
    path: "MovieDetails",
    element: <MovieDetails/>,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router}/>
);

