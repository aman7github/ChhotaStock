import { Box ,Image,Center} from '@chakra-ui/react'
import React from 'react'
import bulb from  '../images/bulb.png'

const Mid2 = () => {
  return (
    <>
    
    <Box w={{base:"90%",sm:"85%",md:"80%",lg:"75%"}} m='auto' h='20rem' display='flex' borderRadius='2rem' backgroundColor='black' >


        {/* <--------------------------left part-----------------------------------------------> */}

             <Box w='70%'  pl='5rem'  textAlign='left' color='white' >
                  <Box mt='2rem' fontSize={{base:"0.6rem",sm:"0.8rem",md:"1.1rem",lg:"1.3rem"}}  fontWeight='700'  >
                  Essential Features for the Super
                  </Box>
                  <Box   fontSize={{base:"0.6rem",sm:"0.8rem",md:"1.1rem",lg:"1.3rem"}}  fontWeight='700' >
                  Trader in You - All in One Platform
                  </Box>

                  <Box  mt='2rem'  fontSize={{base:"0.6rem",sm:"0.7rem",md:"0.9rem"}} color='gray.300' fontWeight='500' >
                    Save hours of research by using our readymade
                  </Box>
                  <Box fontSize={{base:"0.6rem",sm:"0.7rem",md:"0.9rem"}} color='gray.300' fontWeight='500'  >screens to find your next investment</Box>


                  <Box ml='-1rem' display='flex' mt='2rem' fontSize={{base:"0.6rem",sm:"0.7rem",md:"0.9rem"}} color='gray.300' >
                        <Center w='10%' >
                         <Image w='50%' h='2rem' src={bulb} />
                        </Center>
                        
                         <Box w='90%'>
                            <Box> 30+ ANALYTICAL TOOLS & CHARTING + LIVE</Box>
                            <Box>TRADES + STOCK PICKS & MUCH MORE</Box>
                         </Box>
                  </Box>
                 
                  <Box   w='100%' h='2rem' textAlign='left' mt='2rem' display='flex' gap='2rem' color='black' >
                    <Center  w={{base:"75%",sm:"50%",md:"35%",lg:"24%"}} fontSize={{base:"0.6rem",sm:"0.7rem"}} fontWeight='600' border='1px' borderRadius='1rem' backgroundColor='#FEC826'  >
                       Get started now
                    </Center>
                    <Center color='white'  fontSize='0.7rem' fontWeight='600'  textDecoration='underline' >
                      see all features
                    </Center>
                 </Box>

             </Box>


         {/* <--------------------------right part-----------------------------------------------> */}

            <Box w='30%' border='1px' position='relative' mt='2rem' display='flex' >

                <Box  w={{base:"50%",sm:"60%",md:"70%",lg:"90%"}} h='11rem' pos='absolute' right={{base:"2rem",lg:"5rem"}} >
                    <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/d9ab/f633/e2f587029e5b9d5b33a60832b6c92f00?Expires=1694390400&Signature=C0f3tcilCZ8LYEnmvn6NxWPQqKO~MdP7cHZXml7I889H579wA1klBA1mjT7lrUaybCJ0m7VfgBwkk~ayeHoJWu6flxbNMM0C9B3edNuqQrWGRcKjS-nRWm89YTK1uOqzVd2vzkwNVlEnzPuMWq8x1DCr32yJlhU7oUjcgDY1ot5MXf1r0mmrhQtHCH82ghQ51yugCQrwRCKv7JjU5HH4wxI0toV9iBg~-k~pfoHaTHmljqYqMQ-HyVzM1uLxrSbvNqLKpXMvH0izFKwN45c~s9fr9iGctDREowLeD3JUSUUUtB0UTDaCVOotKNvDrixmI~fbPPCdpufZJoJkExpegQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                </Box>
                <Box  w={{base:"50%",sm:"60%",md:"70%",lg:"90%"}} h='11rem' pos='absolute' right={{base:"4rem",lg:"7rem"}} mt='3rem' >
                    <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/b067/3bbd/c969169581625466c0e8765f678308fa?Expires=1694390400&Signature=fdurrqLMkh4aoVmK1uDxXEszvn0sHQQIRqBjEasQuT2Qak0yApyaGLfEgR-GBZYYfr8cE5uwMIjM4wpup5SJNFqsVEZGIZtM7cfgLBoYANCc~5-MrAswahsS6mN6yqYG6PWpRabAhmrx1tS5pAlqMqQOikN1S5rN8YBw7pRYhmr-ALyg2XOfA3vX0XwGB7jfrJ~JvlYRB4KwQ0nRwV7zT-KOIlBT9STjZ-HpTIxuHbDIoYdMOgBnCPhXNoeopQZiokxaBtiPmK5aF~ObU0foUa8-z4OXx~XAGrPuMAlDUy7lHjDjCcUwyGB12QGovsnoYJd2gw3nkoLhCzHD~vtS0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                </Box>
                <Box  w={{base:"50%",sm:"60%",md:"70%",lg:"90%"}} h='11rem' pos='absolute'  right={{base:"6rem",lg:"9rem"}} mt='6rem' >
                   <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/5766/82f2/83885e28ced26d5b596ded24c2ec0db8?Expires=1694390400&Signature=qolUO5NS3caX5xa6BtlE5ZhpjnSzORTcgS4Fr~UKwjE-3wHcbMzRyyuHCS-mhQwSaXxlRNp0sTT4MG96qBFGplD3ckYuXusYJSRM94lhcnyP4lASdn2MJWGW~6JBf9sQevIsPVidYNtTkH1nLd1g1N8b43GhvR63thIkxzhsrRRyqIKLo5a3-KhLpeC3TCSbfLtEF~2Q1eVGxA~yKXXBHd8surhaGl~Zmzagw7sGAdR8amxieLJHr6k5VXS5-eZmp1gC85dIlvURzG5QDYfWls9rq88slu7TQOTjnJ7MEr5Pur6d-6NEWuFlfn19fHoqrXNDcP28o5tRPshuoMHilQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                </Box>
                
            </Box>

    </Box>
    
    
    
    
    
    </>
  )
}

export default Mid2