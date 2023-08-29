import { Box ,Center} from '@chakra-ui/react'
import React from 'react'

const Upper2 = () => {
  return (
    <>

     <Box w='80%' m='auto' pb='2rem' mt='2rem' >

        <Box w='100%' h='10rem'  display='flex' justifyContent="space-between"  >

            <Box pl={{base:"1rem",md:"2rem",lg:"7rem"}} w='50%'   textAlign='left' >
                <Box  color='#F3A61D' fontSize={{base:"0.8rem",sm:"1rem",md:"1.2rem"}} fontWeight='700' >INVESTMENT STACK</Box>
                <Box fontSize={{base:"0.8rem",sm:"1rem",md:"1.2rem"}} fontWeight='700' >for India</Box>
                <Box  mt='0.5rem' fontSize='0.8rem' fontWeight='600' >Elevate Your Investment Strategy</Box>
                <Box  fontSize='0.8rem' fontWeight='600' >with Our Comprehensive APIs</Box>

            </Box>


            <Box w='50%' mt='1rem'   textAlign='left' >
                <Box  fontSize='0.8rem' fontWeight='600' >Launch financial services in a matter of</Box>
                <Box  fontSize='0.8rem' fontWeight='600' >days. Take your pick from our flexible</Box>
                <Box  fontSize='0.8rem' fontWeight='600' >APIs, SDKs, or ready-to-use screens.</Box>

                <Box  fontSize='0.7rem' mt='1rem' fontWeight='600' color='gray' textDecoration='underline' >See our products</Box>

                <Box mt='1rem' fontSize={{base:"0.6rem",sm:"0.8rem",md:"0.9rem"}}   fontWeight='600'  w={{base:"45%",sm:"40%",md:"35%",lg:"23%"}} h="2rem" backgroundColor='#FEC826'   borderRadius='1.3rem' display='flex' justifyContent='space-around' alignItems='center' p='0.5rem' >
                   Contact Us
                </Box>

            </Box>




        </Box>




  {/* <------------------------------------------------------------------------------> */}







     </Box>
    
    
    
    </>
  )
}

export default Upper2