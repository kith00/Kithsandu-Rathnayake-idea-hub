import React from 'react'
import Movie from './components/Movie'
import'./styles/Navbar.css'
import MainLayout from './layout/MainLayout'
import searchForm from './components/searchForm'

function App() {
  return (

    <MainLayout>
          <div>
            <searchForm/>
            <Movie/>
          </div>

    </MainLayout>

  )
}

export default App