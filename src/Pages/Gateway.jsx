import React from 'react'
import Navbar2 from '../Component2/Navbar2'
import Upper2 from '../Component2/Upper2'
import Middle from '../Component2/Middle'
import Mid4 from '../components/Mid4'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'
import Middle2 from '../Component2/Middle2'

const Gateway = () => {
  return (
    <>

    <Navbar2 />
    <Upper2 />
    <Middle2 />
 
    <Box display='flex' flexDir='column' gap='2rem' >
    <Middle />
    <Mid4 />
    <Footer />

    </Box>



   
    
    
    </>
  )
}

export default Gateway