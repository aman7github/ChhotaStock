import { Box ,Button, Center, Image, Input,InputLeftElement,InputGroup} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {MdSendToMobile} from 'react-icons/md'
import {Link as RouteLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    

    <Box w="90%" m='auto' h="3.5rem"  display='flex' justifyContent='space-around' alignItems='center' backgroundColor='black'  >

        <Box  w={{base:"30%",sm:"23%",md:"16%"}}  h="3.5rem"  >
            <Center w="70%" h="3rem"   >
                <Image  w='100%' h="4rem" src='https://s3-alpha-sig.figma.com/img/6416/8f46/5708df7b8f70d3ce8182d0a23c0a9a34?Expires=1694390400&Signature=MXJjxZlvlCbASF~qrg2DSqHjAi8hGlLawvKQtP1tNSsGOZ7hG8Ix3vw6KtWsv1OuogK1fIZOLDJyKYu3YcIGrxn8UvrtvNKwasHT5gDZoCR1zb91ni5H8xaazaRA55ppRpRtZb5oJIEyDpOt3Ke1RNzmG~H7IB8sVLxj~gTIDUNSaEL3jjGr5WDWz~AZcZZpLYPSS6XeZpGvNFDlPk5CBaStq2OqDT-GJkxZQHF5zOzyugVVoL4dGv0LOV5EzuCC8HhKkqV5J4dfhPV-G21HxTBFoTF6GrZ9TTkuBaa17wMVimsoywdjJJQ8RKyRM6423kBeLMZ8D6LPPKL76aXz2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />   
            </Center>
          
               
                <Center  fontSize={{base:"0.3rem",sm:"0.4rem",md:"0.5rem"}} h="1rem" color='white' mt='-1rem' textAlign='right' >
                   Invest to pay invest to spend
                </Center>

          
           
        </Box>


        <Box  w="30%" h="2rem"  >
        <InputGroup  >
            <InputLeftElement children={<AiOutlineSearch color="white" />} />
            <Input
              type="text"
              width="350px"
              h='2rem'
              outline="none"
              placeholder="Search stocks, ETFs, Indices"
              backgroundColor='#81878C'
              color='white'
              border='0'
        
              
              _focus={{
                boxShadow: "none",
                border: "0px solid ",
                outline: "none",
              }}
            />
            </InputGroup>
        </Box>


        <Box w={{base:"20%",sm:"15%",md:"10%",lg:"7%"}} h="2.3rem" backgroundColor='#FEC826'   borderRadius='1.3rem' display='flex' justifyContent='space-around' alignItems='center' p='0.5rem' >
           <Box fontSize='1.1rem'  >
              <MdSendToMobile  />
           </Box>
           <RouteLink to='/gate' >
           <Box  fontWeight='600' >
             Login
           </Box>

           </RouteLink>
         

        </Box>


    </Box>
    
    
    
    
    
    </>
  )
}

export default Navbar