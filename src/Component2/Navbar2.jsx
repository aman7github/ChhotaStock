import { Box ,Button, Center, Image, Input,InputLeftElement,InputGroup} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {MdSendToMobile} from 'react-icons/md'
import {Link as RouteLink } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import DropDown from './DropDown'



const Navbar2 = () => {
  return (
    <>
    

    <Box w="95%" m='auto' h="3.5rem"  display='flex'  justifyContent='space-between' alignItems='center' backgroundColor='black'  >

        <Box ml={{base:"0",md:"4rem",lg:"5rem"}} w={{base:"30%",sm:"23%",md:"16%"}}  h="3.5rem" display='flex'  justifyContent='space-around' alignItems='center' >
            <Center w="70%" h="3rem"   >
                <Image  w='100%' h="4rem" src='https://s3-alpha-sig.figma.com/img/6416/8f46/5708df7b8f70d3ce8182d0a23c0a9a34?Expires=1694390400&Signature=MXJjxZlvlCbASF~qrg2DSqHjAi8hGlLawvKQtP1tNSsGOZ7hG8Ix3vw6KtWsv1OuogK1fIZOLDJyKYu3YcIGrxn8UvrtvNKwasHT5gDZoCR1zb91ni5H8xaazaRA55ppRpRtZb5oJIEyDpOt3Ke1RNzmG~H7IB8sVLxj~gTIDUNSaEL3jjGr5WDWz~AZcZZpLYPSS6XeZpGvNFDlPk5CBaStq2OqDT-GJkxZQHF5zOzyugVVoL4dGv0LOV5EzuCC8HhKkqV5J4dfhPV-G21HxTBFoTF6GrZ9TTkuBaa17wMVimsoywdjJJQ8RKyRM6423kBeLMZ8D6LPPKL76aXz2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />   
            </Center>
            
            <Box  display='flex' w={{base:"90%",sm:"90%",md:"80%",lg:"70%"}}  justifyContent='space-around' borderRadius='1.3rem' alignItems='center' backgroundColor='rgb(253,236,236)' >
              <Box  fontSize='0.7rem'  fontWeight='600'  h="2.3rem"  color='rgb(240,86,86)'    display='flex' justifyContent='space-around' alignItems='center' p='0.5rem'   >
              Gateway
             </Box>
             <Box w='0.7rem' h='0.7rem' borderRadius='50%' backgroundColor='rgb(240,86,86)' >

             </Box>

            </Box>
         
 
        </Box>


      
      
   


        <Box mr={{base:"0",md:"4rem",lg:"5rem"}}  w={{base:"50%",sm:"40%",md:"23%"}} color='white' display='flex'  justifyContent='space-between' alignItems='center' >
           <Box fontSize='1rem'  >
           <Menu>
             {({ isOpen }) => (
              <>
               <MenuButton isActive={isOpen} as={Button} backgroundColor='black' color='white' _hover={{backgroundColor:"black"}} >
                 {isOpen ? 'Products' : 'Products'}
               </MenuButton>
              <MenuList  >
               
                  <DropDown  />
               
               
             </MenuList>
            </>
           )}
          </Menu>
               
           </Box>

           <Box fontSize='1rem'  >
               AboutUs
           </Box>
        
         

           
         

        </Box>


    </Box>
    
    
    
    
    
    </>
  )
}

export default Navbar2