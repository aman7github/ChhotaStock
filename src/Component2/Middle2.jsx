import React from 'react'
import { Box, Image ,Center, Text} from '@chakra-ui/react'
import cir from '../images/cir.png'
import fire from '../images/fire.png'
import act from '../images/act.png'

const Middle2 = () => {
  return (
    <>
          
          <Box w='90%' m='auto'  display='flex' justifyContent='center'   >

<Box  w='60%'  pt='6rem'  pl={{base:"1rem",sm:"2rem",lg:"5rem"}}  >

        <Box  w='50%' h='1rem'  fontSize='0.8rem' color='green' textAlign='left' >
              FEATURES
        </Box>
        <Box  w='100%' h='1.6rem'  fontSize={{base:"0.6rem",sm:"0.8rem",md:"1rem",lg:"1.2rem"}}  fontWeight='700' textAlign='left' mt='1rem'>
        Launch the most Engaging
        </Box>
        <Box  w='100%' h='1.6rem'  fontSize={{base:"0.6rem",sm:"0.8rem",md:"1rem",lg:"1.2rem"}}  fontWeight='700' textAlign='left' mt='0rem'>
        Invest-Tech Solutions
        </Box>
        <Box   w='100%' h='0.9rem'  fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='1rem' color='gray' >
        We help brokers, wealth managers, fund managers & other
        </Box>
        <Box   w='100%' h='0.9rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='0rem' color='gray' >
        businesses / startups server their customers better with our
        </Box>
        <Box   w='100%' h='0.9rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='0rem' color='gray' >
        suite of modern digital investment stack
        </Box>


        <Box   w='100%' h='2rem' textAlign='left' mt='3rem' display='flex' gap='2rem' >

            <Center  w={{base:"75%",sm:"55%",md:"35%",lg:"26%"}} fontSize={{base:"0.6rem",sm:"0.7rem"}} fontWeight='600' border='1px' borderRadius='1rem' backgroundColor='#FEC826'  >
            Get Started
            </Center>
          
        </Box>



</Box>







<Box    w='27%' pt='6rem' >

      

  <Box w='70%' h='5rem'  display='flex' justifyContent='space-around' alignItems='center'>

    <Box w='40%' border='1px'h='5rem' backgroundColor='rgb(243,243,243)' borderRadius='0.7rem' display='flex' flexDir='column' justifyContent='center' alignItems='center' >
        <Box   fontSize='0.5rem' color='gray' >protection</Box>
        <Box>
            <Image w='2rem' h='2rem'  src='https://s3-alpha-sig.figma.com/img/dea7/3959/20d06e2718b399baeca965059234454a?Expires=1694390400&Signature=MI02XMlFbJcYQ2hhZN9dPtnvzxEF4nLlqe305w9Tm9iZOSF8OqZ9aWfBkRLLKvmjMbBx~cvSBIhurUhBmqgIM5njHx0FC-VHYDZ1xNqyFqFT6AZRerhoIjYJUDJvNGmS0QDBzKFttYhX02xC1YFFdujutC6q7toGvSVDwRy~s9Q45uvtiKr6MXYg2OeCuSEyTYNDhPgwtXUEWklSvzHMxXEey2CSeg9QfUwL8nwlSYXiMohB2WUTnzh5tClJ2aEDdvMAIeAgKGRo8HvhSw4S2O7P-Ln8z3tUQBxqPSAIUPsjlJbDpLfyNywMUCta7KGdmTaHOuDzjdBbYZZrvbqjzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </Box>
        <Box  fontSize='0.5rem' color='gray' >Data protection</Box>
        <Box  fontSize='0.5rem' color='gray' >guarentees</Box>

    </Box>

    <Box w='40%' border='1px' h='5rem' borderRadius='0.7rem'  display='flex' flexDir='column' justifyContent='center' alignItems='center' backgroundColor='black' >
        <Box   fontSize='0.5rem' color='white' >Tracking</Box>
        <Box >
            <Image w='2rem' h='2rem'  src={act} />
        </Box>
        <Box  fontSize='0.5rem' color='white' >Data protection</Box>
        <Box  fontSize='0.5rem' color='white' >guarentees</Box>
    </Box>

  



  </Box>


  <Box w='70%' mt='1rem' h='5rem' display='flex' justifyContent='space-around' alignItems='center'  >

    <Box w='40%' border='1px'h='5rem' borderRadius='0.7rem' display='flex' flexDir='column' justifyContent='center' alignItems='center' backgroundColor='rgb(243,243,243)' >
         <Box   fontSize='0.5rem' color='gray' >Flexibility</Box>
        <Box>
            <Image w='2rem' h='2rem'  src={cir} />
        </Box>
        <Box  fontSize='0.5rem' color='gray' >Data protection</Box>
        <Box  fontSize='0.5rem' color='gray' >guarentees</Box>

    </Box>

    <Box w='40%' border='1px' h='5rem' borderRadius='0.7rem' display='flex' flexDir='column' justifyContent='center' alignItems='center' backgroundColor='rgb(243,243,243)' >
        <Box   fontSize='0.5rem' color='gray' >Easiness</Box>
        <Box>
            <Image w='2rem' h='2rem'  src={fire} />
        </Box>
        <Box  fontSize='0.5rem' color='gray' >Data protection</Box>
        <Box  fontSize='0.5rem' color='gray' >guarentees</Box>     

    </Box>

  



  </Box>






</Box>


</Box>
    
    </>
  )
}

export default Middle2