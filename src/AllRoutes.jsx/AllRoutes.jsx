import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../Pages/LandingPage'
import Gateway from '../Pages/Gateway'


const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<LandingPage />}  />

        <Route path='/gate' element={<Gateway />}  />

  
    
    
    </Routes>
  )
}

export default AllRoutes