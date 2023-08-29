import { Box, Image ,Center} from '@chakra-ui/react'
import React from 'react'
import quote from "../images/quote.png"
import quote2 from "../images/quote2.png"

const Mid5Box = ({pic}) => {
  return (
    <>

    <Box ml='1rem'  mt='2rem' w='17%' pos='relative' display='flex' flexDir='column' >
         <Center w='100%' h='5rem' borderRadius='50%' zIndex='10' >
            <Image w='48%' h='100%' borderRadius='50%' src={pic} />
         </Center>

         <Box w='100%' p='3rem 1rem 2rem 1rem' mt='-2.6rem' borderRadius='0.7rem' pos='relative' textAlign='left'  fontSize={{base:"0.3rem",sm:"0.4rem",md:"0.5rem",lg:"0.7rem"}} backgroundColor='rgb(243,243,243)' >

            <Box>Mahesh, Swiggy delivery</Box>
            <Box>  partner, Bengaluru</Box>

             <Image mt='1rem'  w='1rem' src={quote} />
            <Box>The onboarding experience</Box>
            <Box>on Chhotastock was very</Box>
            <Box>simple.. I did my first</Box>
            <Box>investment in equity market</Box>
            <Box>in less than 2 minutes</Box>
            <Image pos='absolute' right='2.5rem' bottom='1.5rem' w='1rem' src={quote2} />


         </Box>



    </Box>
    
    </>
  )
}

export default Mid5Box