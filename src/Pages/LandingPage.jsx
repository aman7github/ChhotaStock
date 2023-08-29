import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Image ,Center, Text} from '@chakra-ui/react'
import Mid2 from '../components/Mid2'
import Mid3 from '../components/Mid3'
import Mid4 from '../components/Mid4'
import Mid5 from '../components/Mid5'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
    <Navbar />

{/* <--------------------------------upper section----------------------------------------------> */}
    <Box m='auto' w='90%' h='39rem'  display='flex' flexDir='column'  alignItems='center' backgroundColor='black' >

        <Box w={{base:"90%",sm:"80%",md:"50%",lg:"28%"}} h='5rem'  mt='3rem' >
            <Box fontSize={{base:"1.2rem",sm:"1.8rem"}} fontWeight='700' color='white' >
                Knowledge Based
            </Box>
            <Box fontSize={{base:"1.2rem",sm:"1.8rem"}} fontWeight='700' color='white' >
               Investing & Trading
            </Box>

        </Box>



        <Box w={{base:"99%",sm:"95%",md:"89%",lg:"64%"}} fontSize={{base:"0.7rem",sm:"0.8rem",md:"1rem"}} h='3rem'  mt='2rem' color='white' >
          Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools
        </Box>


        <Box w={{base:"90%",sm:"80%",md:"60%",lg:"45%"}} h='26rem'  mt='2rem'  >
           <Image w='100%' h={{base:"80%",sm:"100%"}} src='https://s3-alpha-sig.figma.com/img/0a9c/acc2/80afd24b59f7c10d1a270caeb6b35045?Expires=1694390400&Signature=LmxclayzP48eKpQLTr5gNME8XiFnwk7rgkkWBeHvpAnG5AFG2ZIeZJkAcYLemrXpDvFMQ7jL84XZ5CWlE8140Nc2pPN54kAFFwKCkDSO6iPS8cSbelp9ZErterwtn0n809baE9oxFeHZtl7GZK~lDO45quWB2u3wb7UJ0W~xbSGyGUg31CFnP9NoQGt9crmMe5Y6oS32TbcZ8ZIljYR7qwq4iYDo9FeuJe~tUc31jm3cwRJY~khx3VYPAcNpWUV~Xx2ak21o~bqFI4VuKtHuKVnAq0G2N48MnaBBDKjeu4oEOl762dWYdR~Z7bp8gRvStM-peDDvmr-4zq9Eu9kksw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </Box>

    </Box>






    {/* <--------------------------------mid section----------------------------------------------> */}


      <Box w='90%' m='auto' h='30rem'  display='flex' justifyContent='center'   >

         <Box  w='50%' h='39rem'  pt='6rem'  pl={{base:"1rem",sm:"2rem",lg:"5rem"}}  >

                 <Box  w='50%' h='1rem'  fontSize='0.8rem' color='green' textAlign='left' >
                       FEATURES
                 </Box>
                 <Box  w='100%' h='1.6rem'  fontSize={{base:"0.6rem",sm:"0.8rem",md:"1rem",lg:"1.2rem"}}  fontWeight='700' textAlign='left' mt='1rem'>
                    SAVE NOW. BUY LETTER
                 </Box>
                 <Box  w='100%' h='1.6rem'  fontSize={{base:"0.6rem",sm:"0.8rem",md:"1rem",lg:"1.2rem"}}  fontWeight='700' textAlign='left' mt='0rem'>
                    SIMPLE & REALISTIC
                 </Box>
                 <Box   w='100%' h='0.9rem'  fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='1rem' color='gray' >
                   Get what you love and save up over weeks or
                 </Box>
                 <Box   w='100%' h='0.9rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='0rem' color='gray' >
                   months to achieve it much lower price. Time & 
                 </Box>
                 <Box   w='100%' h='0.9rem' fontSize={{base:"0.5rem",sm:"0.6rem",md:"0.8rem"}}  textAlign='left' mt='0rem' color='gray' >
                   Flexibility on your side.
                 </Box>


                 <Box   w='100%' h='2rem' textAlign='left' mt='3rem' display='flex' gap='2rem' >

                     <Center  w={{base:"55%",sm:"35%",md:"25%",lg:"16%"}} fontSize={{base:"0.6rem",sm:"0.7rem"}} fontWeight='600' border='1px' borderRadius='1rem' backgroundColor='#FEC826'  >
                        Get the App
                     </Center>
                     <Center   fontSize='0.7rem' fontWeight='600'  textDecoration='underline' >
                       Learn more
                     </Center>
                 </Box>



         </Box>







         <Box    w='50%' h='39rem' display='flex' flexDir='column' alignItems='center' >

                 <Box mt='3rem' w={{base:"90%",sm:"70%",md:"50%"}} h='7.5rem' border='1px' backgroundColor='rgb(66,67,67)'borderRadius='0.7rem' >
                    <Box display='flex' h='5.5rem' justifyContent='space-between' >
                        <Image w='30%' src='https://s3-alpha-sig.figma.com/img/55ce/b4fc/9f600d7f6a7d23912f3a273c73e531fe?Expires=1694390400&Signature=Swie3uPOyzdmgxUYAdZXqo3z7iXcMiQxk~VtnQwtdiUHtg5BdHrhaeiFfyCXSixIj6UUY12SKDtUeH2N7N10inmpMB2Vt47AZnBOFiPoj3trfLEwLTLmMQRv4AOYSdw3Hs~tLWh9kIbGoSs3QPZ2NKBzPVqjeqUNjGG05KcaBcn9-q~zfDdPjh0z3ZzNRE4p~-QaFbEfYPxncg3NqcKjXO7K2AMd34zdxgj8oqXuZ10DC6lUB0Cf4ALgSZVNtMpF-Uv1b2~EmP2dElusJ3H-xI1ZTZYweNW~gluLNgpbus2hlP5Mk-f27-NGALI7jkn1uYZ55LC3Gx0kJiX7E9VvEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Box w='70%' color='white'>
                            <Text color='gray' textAlign='left' fontSize={{base:"0.5rem",sm:"0.7rem",md:"1rem"}} >Bounce Infinity EV</Text>
                            <Text fontSize={{base:"0.4rem",sm:"0.6rem",md:"0.9rem",lg:"1.1rem"}} fontWeight='600' textAlign='left' >Save up for your next</Text>
                            <Text fontSize={{base:"0.4rem",sm:"0.6rem",md:"0.9rem",lg:"1.1rem"}} fontWeight='600' textAlign='left' > Bike</Text>
                        </Box>
                    </Box>
                    <Box display='flex' h='2rem' gap='1rem' justifyContent='right' borderTop='1px' borderBottom='1px'  borderTopColor='gray' backgroundColor='black' pr='1rem'  borderBottomRadius='0.7rem' >

                        <Box  color='rgb(4,174,129)' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.7rem",lg:"1rem"}} fontWeight='500' >10% returns+ </Box>
                        <Center fontWeight='500' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.8rem",lg:"1rem"}}  mt='-1rem' h='2.5rem' color='black' backgroundColor='rgb(4,174,129)' p='0 1rem ' borderBottomRadius='0.5rem' >Flat ₹400 off</Center>

                    </Box>
                 </Box>




                 <Box mt='1rem' w={{base:"90%",sm:"70%",md:"60%"}} h='7.5rem' border='1px' backgroundColor='rgb(66,67,67)'borderRadius='0.7rem' >
                    <Box display='flex' h='5.5rem' justifyContent='space-between' >
                        <Image w='30%' src='https://s3-alpha-sig.figma.com/img/208e/2f84/e3376aeef8bb5e44f45efb820fb803a5?Expires=1694390400&Signature=FHncYf3e5bJTaEDd71A-6XfqzznSQ-ZQASWcUTY6mLAtnlhdWAKYPiEyDaDQqb3SmvdZkpjdmIcv3y5TKcutAI-ubtp6uuagIF1VAzakf16Y69s9g~T1YJnaXQRNDD-lmtW03GOvB4PnjcJvmsAMp2jLN5Ngdlvjunl3X9eHk-7NzjsrjcjzZ4wjZi7Qvw~WZA4cYYvjUOmR1DMARZbqc-eMJki-vNdMJTX7kGoXw1fD9VME4g1FJzttl6ckgEnlkR2NX8Nv~JVHzKh2mSBSZN1VOqKNo-PIAB2EnKQvx2pIkq-N-oAE1lxjdxzxQJmQzq5FlnIg5o~ou35LtMfL-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Box w='70%' color='white'>
                            <Text color='gray' textAlign='left' fontSize={{base:"0.5rem",sm:"0.7rem",md:"1rem"}} >Lenovo EV</Text>
                            <Text fontSize={{base:"0.4rem",sm:"0.6rem",md:"0.9rem",lg:"1.1rem"}} fontWeight='600' textAlign='left' >Save up for your next</Text>
                            <Text fontSize={{base:"0.4rem",sm:"0.6rem",md:"0.9rem",lg:"1.1rem"}} fontWeight='600' textAlign='left' > Laptop</Text>
                        </Box>
                    </Box>
                    <Box display='flex' h='2rem' gap='1rem' justifyContent='right' borderTop='1px' borderBottom='1px'  borderTopColor='gray' backgroundColor='black' pr='1rem'  borderBottomRadius='0.7rem' >

                        <Box  color='rgb(4,174,129)' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.7rem",lg:"1rem"}} fontWeight='500' >10% returns+ </Box>
                        <Center fontWeight='500' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.8rem",lg:"1rem"}}  mt='-1rem' h='2.5rem' color='black' backgroundColor='rgb(4,174,129)' p='0 1rem ' borderBottomRadius='0.5rem' >Flat ₹400 off</Center>

                    </Box>
                 </Box>





                 <Box mt='1rem' w={{base:"90%",sm:"70%",md:"50%"}} h='7.5rem' border='1px' backgroundColor='rgb(66,67,67)'borderRadius='0.7rem' >
                    <Box display='flex' h='5.5rem' justifyContent='space-between' >
                        <Image w='30%' src='https://s3-alpha-sig.figma.com/img/410a/b53f/85b177039165602e75a464f7b367dfeb?Expires=1694390400&Signature=NGvDV9Nmb-yDRl2HP5M4h1J7P8J0GjJvsL8ieSQ1vX~gn2sB24Be3d47HvnXSrOfq-~dyaRpgt9rjvmmW0PLwaz5FjbNql8tch9gGZhCNMxsu2MwVtvgWgtcBPRlaeLqG2UMoa4f7xqxHqG4JonoKr7q4pFkCPqwgspEbwnOCHeGYtlleF8cKCU4oXraN6ZucAhpXdVKdq9TUKbU2u~o6KXIuTNwIdJkECwF9xRjT~M57gw6g-1Z~u03goyBK3Lp~AfsYw9xOSzNUarkzFaYXyNXTbfia9YX7MXNxbvMfHHzG~XvnF~Mesx7X7j4Ailk~3xnYjl2yVyL84omRuuHpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Box w='70%' color='white'>
                            <Text color='gray' textAlign='left' fontSize={{base:"0.5rem",sm:"0.7rem",md:"1rem"}} >Apple</Text>
                            <Text fontSize={{base:"0.4rem",sm:"0.6rem",md:"0.9rem",lg:"1.1rem"}} fontWeight='600' textAlign='left' >Save up for your next</Text>
                            <Text fontSize={{base:"0.4rem",sm:"0.6rem",md:"0.9rem",lg:"1.1rem"}} fontWeight='600' textAlign='left' > Iphone</Text>
                        </Box>
                    </Box>
                    <Box display='flex' h='2rem' gap='1rem' justifyContent='right' borderTop='1px' borderBottom='1px'  borderTopColor='gray' backgroundColor='black' pr='1rem'  borderBottomRadius='0.7rem' >

                        <Box  color='rgb(4,174,129)' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.7rem",lg:"1rem"}} fontWeight='500' >10% returns+ </Box>
                        <Center fontWeight='500' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.8rem",lg:"1rem"}}  mt='-1rem' h='2.5rem' color='black' backgroundColor='rgb(4,174,129)' p='0 1rem ' borderBottomRadius='0.5rem' >Flat ₹400 off</Center>

                    </Box>
                 </Box>


         </Box>

    
      </Box>


        {/* <---------------------------------------------------mid2--------------------------------------------> */}

        <Mid2 />

        <Mid3 />

        <Mid4 />

        <Mid5 />

        <Footer />





    
    </>
  )
}

export default LandingPage