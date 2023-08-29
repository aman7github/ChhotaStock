import { Box,Center,Image } from '@chakra-ui/react'
import React from 'react'


const Mid3Box = ({pic,title,p1,p2,p3}) => {
  return (
    <>
      
      <Box w='22%' h='11rem' border='1px' backgroundColor='black' borderRadius='0.7rem' pt='0.9rem' >

         <Box display='flex'   justifyContent='center' color='white' >
            <Box w='25%'   >
                <Image w='60%' h='1.7rem' src={pic} />

            </Box>

            <Center w='60%' fontSize='0.8rem' fontWeight='700' >
                {title}
            </Center>

         </Box>

         <Box  pl='1rem' fontSize={{base:"0.3rem",sm:"0.4rem",md:"0.5rem",lg:"0.6rem"}}  textAlign='left' color='gray' mt='1rem'>{p1}</Box>
         <Box pl='1rem' fontSize={{base:"0.3rem",sm:"0.4rem",md:"0.5rem",lg:"0.6rem"}}  textAlign='left' color='gray'  >{p2}</Box>
         <Box pl='1rem' fontSize={{base:"0.3rem",sm:"0.4rem",md:"0.5rem",lg:"0.6rem"}}  textAlign='left' color='gray'  >{p3}</Box>

         <Box w='80%' display='flex' mt='1rem'  pl='1rem' justifyContent='space-between' >

            <Box   fontSize={{base:"0.3rem",sm:"0.4rem",md:"0.7rem"}}  textAlign='left' color='gray' >CAGR</Box>
            <Box  fontSize={{base:"0.3rem",sm:"0.4rem",md:"0.7rem"}}  textAlign='left' color='gray'  >Min Amount</Box>

         </Box>
         <Box w={{base:"100%",lg:"80%"}} display='flex'   pl='1rem' justifyContent='space-between' >

           <Box   fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.7rem",lg:"0.9rem"}} fontWeight='700' textAlign='left' color='gray.100' >17.80%</Box>
           <Box  w='39%' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.7rem",lg:"0.9rem"}} fontWeight='700'  textAlign='left' color='gray.100'   >120</Box>

        </Box>


      </Box>
    
    
    </>
  )
}

export default Mid3Box