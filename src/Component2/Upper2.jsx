import { Box ,Center,Image, Text} from '@chakra-ui/react'
import React from 'react'

const Upper2 = () => {
  return (
    <>

     <Box w='90%' m='auto' pb='2rem' mt='2rem' >

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


           <Box  display='flex' w='40%' m='auto' mt='3rem' >

                <Center w='33%' h='6rem'  mt='3rem' display='flex' flexDir='column' backgroundColor='rgb(90,227,178)' >
                     <Image w='2rem' h='2rem' src='https://s3-alpha-sig.figma.com/img/904b/fc2c/3974029ca205ce9b2085b7dcbd04a4c0?Expires=1694390400&Signature=Z6DsUrDuLR7JPh~KnTu5Y36-iJmj58lIiKt6jnqMCnGMFvH8TBWSsqSxr21mmPCBVeSAAxELfbD3UMtliHQ0Fp69i-BEuLZI7jmpNd7lRLWe2--17P74N40CcpiBw-HM6rk9DyTEw5WChh6evOLpWXM8AkjjeU223UEsbHr~5SetncgySsyqIETgO7rREspIHFkGyOCPiHmA66lCM6SdueFJnetSSNlh2CD0W1xJdjUfrxbKffTUlbm7cv7VD1MAV8hONbs-fSUZ~bHrh5GCxubeHayOnb2Dqz9f9BM83JZyihin~8zGoRs3oAmWl-5aiv3-UkvNfJXISsBmbekJsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  />
                     <Box fontSize='1.1rem' fontWeight='500' >Stocks</Box>
                </Center>
                <Center w='36%' h='9rem' backgroundColor='rgb(250,97,73)' display='flex' flexDir='column'  >
                     <Image w='2rem' h='2rem'  mt='-4rem' src='https://s3-alpha-sig.figma.com/img/904b/fc2c/3974029ca205ce9b2085b7dcbd04a4c0?Expires=1694390400&Signature=Z6DsUrDuLR7JPh~KnTu5Y36-iJmj58lIiKt6jnqMCnGMFvH8TBWSsqSxr21mmPCBVeSAAxELfbD3UMtliHQ0Fp69i-BEuLZI7jmpNd7lRLWe2--17P74N40CcpiBw-HM6rk9DyTEw5WChh6evOLpWXM8AkjjeU223UEsbHr~5SetncgySsyqIETgO7rREspIHFkGyOCPiHmA66lCM6SdueFJnetSSNlh2CD0W1xJdjUfrxbKffTUlbm7cv7VD1MAV8hONbs-fSUZ~bHrh5GCxubeHayOnb2Dqz9f9BM83JZyihin~8zGoRs3oAmWl-5aiv3-UkvNfJXISsBmbekJsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  />
                     <Box fontSize='1.1rem' fontWeight='500' >Mitual Fund</Box>
                </Center>
                <Center  w='33%' h='7rem' mt='2rem' backgroundColor='rgb(255,170,5)' display='flex' flexDir='column'  >
                     <Image w='2rem' h='2rem' mt='-2rem' src='https://s3-alpha-sig.figma.com/img/904b/fc2c/3974029ca205ce9b2085b7dcbd04a4c0?Expires=1694390400&Signature=Z6DsUrDuLR7JPh~KnTu5Y36-iJmj58lIiKt6jnqMCnGMFvH8TBWSsqSxr21mmPCBVeSAAxELfbD3UMtliHQ0Fp69i-BEuLZI7jmpNd7lRLWe2--17P74N40CcpiBw-HM6rk9DyTEw5WChh6evOLpWXM8AkjjeU223UEsbHr~5SetncgySsyqIETgO7rREspIHFkGyOCPiHmA66lCM6SdueFJnetSSNlh2CD0W1xJdjUfrxbKffTUlbm7cv7VD1MAV8hONbs-fSUZ~bHrh5GCxubeHayOnb2Dqz9f9BM83JZyihin~8zGoRs3oAmWl-5aiv3-UkvNfJXISsBmbekJsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  />
                     <Box fontSize='1.1rem' fontWeight='500' >Digital Goal</Box>
                </Center>


           </Box>




     </Box>
    
    
    
    </>
  )
}

export default Upper2