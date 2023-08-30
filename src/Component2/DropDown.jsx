import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import file from "../images/file.png"
import files from "../images/files.png"
import files3 from "../images/files3.png"
import files4 from "../images/files4.png"
import files5 from "../images/files5.png"
import files6 from "../images/files6.png"

const DropDown = () => {
  return (
    <>

<Box w='100%' pb='2rem' display='flex' box-shadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' m='auto' color='black' >

<Box w='100%'   pl='2rem' >

    <Box  textAlign='left' fontWeight='500'  fontSize='0.7rem' color='#28B570' mt='1rem' >
     INVESTMENTS
    </Box>

    <Box  w='100%'   h='2.5rem'  display='flex' justifyContent='space-between' mt='1rem' >
        <Box w='11%'  >
            <Image  w='80%' h='100%' src={file} />
        </Box>
        <Box  w='86%'  textAlign='left' >
            <Box fontSize='0.9rem' fontWeight='500' >Mutual Funds</Box>
            <Box  fontSize='0.7rem'  >E2E infrastructure for mutual fund investing</Box>
        </Box>
    </Box>

    <Box  w='100%'  mt='1.5rem'  h='2.5rem'  display='flex' justifyContent='space-between' >
        <Box w='11%'  >
            <Image  w='80%' h='100%' src={files} />
        </Box>
        <Box  w='86%'  textAlign='left' >
            <Box fontSize='0.9rem' fontWeight='500' >Indian Equity</Box>
            <Box  fontSize='0.7rem'  >E2E infrastructure for mutual fund investing</Box>
        </Box>
    </Box>


    <Box  w='100%'   mt='1.5rem'   h='2.5rem'  display='flex' justifyContent='space-between' >
        <Box w='11%'  >
            <Image  w='80%' h='100%' src={files3} />
        </Box>
        <Box  w='86%'  textAlign='left' >
            <Box fontSize='0.9rem' fontWeight='500' >Digital Gold</Box>
            <Box  fontSize='0.7rem'  >E2E infrastructure for mutual fund investing</Box>
        </Box>
    </Box>


    <Box  w='100%'  mt='1.5rem'  h='2.5rem'  display='flex' justifyContent='space-between' >
        <Box w='11%'  >
            <Image  w='80%' h='100%' src={files4} />
        </Box>
        <Box  w='86%'  textAlign='left' >
            <Box fontSize='0.9rem' fontWeight='500' >Fixed Deposits</Box>
            <Box  fontSize='0.7rem'  >E2E infrastructure for mutual fund investing</Box>
        </Box>
    </Box>




</Box>




<Box  w='100%'   pl='1rem' >

<Box  textAlign='left' fontWeight='500'  fontSize='0.7rem' color='#28B570' mt='1rem' >
      Data
    </Box>

    <Box  w='100%'   h='2.5rem'  display='flex' justifyContent='space-between' mt='1rem' >
        <Box w='11%'  >
            <Image  w='80%' h='100%' src={files5} />
        </Box>
        <Box  w='86%'  textAlign='left' >
            <Box fontSize='0.9rem' fontWeight='500' >Market Research</Box>
            <Box  fontSize='0.7rem'  >Deep-tech stock research & analysis</Box>
        </Box>
    </Box>

    <Box  w='100%'  mt='1.5rem'  h='2.5rem'  display='flex' justifyContent='space-between' >
        <Box w='11%'  >
            <Image  w='80%' h='100%' src={files6} />
        </Box>
        <Box  w='86%'  textAlign='left' >
            <Box fontSize='0.9rem' fontWeight='500' >Historical Performance</Box>
            <Box  fontSize='0.7rem'  >E2E infrastructure for mutual fund investing</Box>
        </Box>
    </Box>






</Box>






</Box>

    
    
    
    
    </>
  )
}

export default DropDown