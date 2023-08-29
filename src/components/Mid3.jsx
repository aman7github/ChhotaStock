import { Box } from '@chakra-ui/react'
import React from 'react'
import Mid3Box from './Mid3Box'
import ValueDeals from "../images/ValueDeals.png"
import EV from '../images/EV.png'
import Out from '../images/Out.png'
import v from '../images/v.png'

const Mid3 = () => {
  return (
    <>

     <Box w='80%' m='auto' h='26rem'  mt='2rem' >

        <Box pl='2rem' fontSize={{base:"0.6rem",sm:"0.8rem",md:"1rem",lg:"1.2rem"}}  fontWeight='700' textAlign='left' mt='2rem' >
           STOCK INVESTING, SIMPLIFIED
        </Box>


        <Box pl='2rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='1rem' color='gray'>
        Online trading and investing in the market

        </Box>

        
        <Box pl='2rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left'  color='gray' >
        does not have to be boring.
        </Box>

        <Box pl='2rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='1rem' color='gray'>
        While we adopt a technology-led approach in

        </Box>

        <Box pl='2rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' color='gray'>
        building our product, we are keeping our users-investors

        </Box>

        <Box pl='2rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left'  color='gray'>
        and traders even before that

        </Box>



        <Box  w='100%' display='flex' justifyContent='space-between' mt='2rem' >


        <Mid3Box pic={ValueDeals}  title={'Value Deals'} p1={'For the people who would love to risk'} p2={'huge to get rewarded. People who'} p3={'would love to risk huge to get rewarded'} />

        <Mid3Box pic={EV} title={'EV Revolution'} p1={'For the people who would love to risk'} p2={'huge to get rewarded. People who'} p3={'would love to risk huge to get rewarded'} />

        <Mid3Box pic={Out} title={'Hidden Gems'} p1={'For the people who would love to risk'} p2={'huge to get rewarded. People who'} p3={'would love to risk huge to get rewarded'} />

        <Mid3Box pic={v} title={'Hidden Gems'} p1={'For the people who would love to risk'} p2={'huge to get rewarded. People who'} p3={'would love to risk huge to get rewarded'} />


        </Box>
       





     </Box>
    
    
    
    
    </>
  )
}

export default Mid3