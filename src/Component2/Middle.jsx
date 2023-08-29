import { Box ,Image,Center} from '@chakra-ui/react'
import React from 'react'
import bulb from  '../images/bulb.png'


const Middle = () => {
  return (
    <> 
    <Box w={{base:"90%",sm:"85%",md:"80%",lg:"75%"}} m='auto' h='20rem' display='flex' borderRadius='2rem' backgroundColor='black' mt='2rem' >


{/* <--------------------------left part-----------------------------------------------> */}

     <Box w='70%'  pl='5rem'  textAlign='left' color='white' >
          <Box mt='2rem' fontSize={{base:"0.6rem",sm:"0.8rem",md:"1.1rem",lg:"1.3rem"}}  fontWeight='700'  >
          Connect your platform finances 
          </Box>
          <Box   fontSize={{base:"0.6rem",sm:"0.8rem",md:"1.1rem",lg:"1.3rem"}}  fontWeight='700' >
          now with InvestPe Gateway
          </Box>

          <Box  mt='2rem'  fontSize={{base:"0.6rem",sm:"0.7rem",md:"0.9rem"}} color='gray.300' fontWeight='500' >
          We help brokers, wealth managers, fund managers & other
          </Box>
          <Box fontSize={{base:"0.6rem",sm:"0.7rem",md:"0.9rem"}} color='gray.300' fontWeight='500'  >businesses / startups server their customers better with our</Box>
          <Box fontSize={{base:"0.6rem",sm:"0.7rem",md:"0.9rem"}} color='gray.300' fontWeight='500'  >suite of modern digital investment stack</Box>


          <Box   w='100%' h='2rem' textAlign='left' mt='2rem' display='flex' gap='2rem' color='black' >
            <Center  w={{base:"75%",sm:"50%",md:"35%",lg:"24%"}} fontSize={{base:"0.6rem",sm:"0.7rem"}} fontWeight='600' border='1px' borderRadius='1rem' backgroundColor='#FEC826'  >
               Get started now
            </Center>
         
         </Box>

     </Box>


 {/* <--------------------------right part-----------------------------------------------> */}

    <Box w='30%' border='1px' position='relative' mt='2rem' display='flex' >

        <Box  w={{base:"50%",sm:"60%",md:"70%",lg:"90%"}} h='8rem' pos='absolute' bottom='1rem' right={{base:"2rem",lg:"5rem"}} >
            <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/e451/33a6/a5a2d967bdef6aabb8b80ba1a3795a2b?Expires=1694390400&Signature=eoiaHDc-H0lpmR6vIk5bhv8UKPHDYTzO93hY2NMbLfranan8fyCP2AFYpOpXtl5rsFEEbcqHAEAa5Wl6VdxJOoVV13leK2i0MtEg6g1P~AXhvjJN9SJqt9p9RXW1M3ZtdGXayNKWxf78WGWHOJDZOExJMg8dQE65~v5sNqbm2OHSV4v9YwVwr6SVSzqFuUWp8ryh0DN~rWGYtoP5DU8E3QVYFzZPIIrdqEjimaFBSXry8kCDvDtfHhE2WdV8WG1yCGDsppgk0FlejxAkPdXfAKpCLXR2QKc9iv7eKe16M7ROuImy8vExZlHijwr9bzmNbQlxV-Guc1Nq3wFF32YBZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </Box>
       
        
    </Box>

</Box>
    
    
    
    
    </>
  )
}

export default Middle