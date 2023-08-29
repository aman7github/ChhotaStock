import { Box ,Center} from '@chakra-ui/react'
import React from 'react'
import Mid5Box from './Mid5Box'
import Mid5Box2 from './Mid5Box2'

const Mid5 = () => {
  return (
    <>
    
    <Box w='84%'  m='auto' >

             <Box w='100%'  mt='4rem' display='flex' justifyContent='space-around' >
                 <Box w='40%' fontSize={{base:"0.6rem",sm:"0.8rem",md:"1.1rem",lg:"1.4rem"}}  fontWeight='700' textAlign='left' >
                    <Box>Reviews From Early</Box>
                    <Box>Adopters</Box>
                 </Box>


                 <Center w='16%' display='flex' flexDir='column' h='4rem'  backgroundColor='rgb(243,243,243)' borderRadius='1.1rem' >
                    <Box w='70%' textAlign='left' fontSize={{base:"0.6rem",sm:"0.8rem",md:"1.1rem",lg:"1.3rem"}}  fontWeight='700' >156k+</Box>
                    <Box w='70%' textAlign='left' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.7rem",lg:"0.9rem"}}  >Registered Users</Box>
                 </Center>

                 <Center w='19%' display='flex' flexDir='column' h='4rem'  backgroundColor='rgb(243,243,243)' borderRadius='1.1rem' >
                    <Box w='70%' textAlign='left' fontSize={{base:"0.6rem",sm:"0.8rem",md:"1.1rem",lg:"1.3rem"}}  fontWeight='700' >$1.5Mn+</Box>
                    <Box w='70%' textAlign='left' fontSize={{base:"0.4rem",sm:"0.5rem",md:"0.7rem",lg:"0.9rem"}}  >Worth investing done</Box>
                 </Center>

             </Box>



             <Box  mt='2rem' w='100%' pb='2rem'  display='flex' justifyContent='space-between' >
                <Mid5Box  pic='https://s3-alpha-sig.figma.com/img/f25f/11a5/398d62f379451c585ca424d6158fe704?Expires=1694390400&Signature=ArhTKIshePXZTXketvme9FJTY-EpuJk0wjGhdeWY6bGzfW~uYXIWVDV4MF2E8aZ5YUuii1Xy3t4~j4LFQRpfMfeWsKdrLru2iYQTMkxpUZ2~HtXC-udxY5cSjdaTZSn8oWdPHFpYiP8O0~9l4i9DjDI0bzTcGG00zIIzmuXBCm90R3dlGaUxczhuSRe2Gon2Dg2HWLY82TSttDuq3h3x56WHJlWsUR4n7EZnx9gTuVEuz4m93loVhHPwGKheQaVjoc5InOb8UElHDTyiAQTPBsnsmybHbl54uvorHkwNL4X32cgwvFDY~D7al6VjZV0YxMW4A70jtotY9F1~qTVkBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                <Mid5Box2 pic='https://s3-alpha-sig.figma.com/img/c953/2eec/e9b41723f1e27c287f2bee11db4a4598?Expires=1694390400&Signature=Zl~vOsiuLLDQjMISjeJ9EQevqH4c2vEFoctmaSYB5SWWQ5nJxYwXx97ARsCrBgzM0bqkYu5rwadPEGJ5YOgEy7asHP4HkgBgZFTL9TqWdrXNv7PawrnIgGsbTG15Y~pvY9QJHbicp3p6HAmPCfPFwDGvM7djPpbbdbVFT-GjqDZ0Ng-3xkjKV2phh2WDcAWrThN~W80-VzK3q9Plnrgy2ajVmXNMF6-7cojYA4T9ig24~71ajg5DT1lmU7aMgTd8Ki-PA8oDf-t01Rc9o9v83egphRkZK2BxyzFquyATc1mbA1IbC0XWIA5vQVsnFpmYTqJUWFQ6EI6W7wAGLqRj0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                 
                 <Mid5Box pic='https://s3-alpha-sig.figma.com/img/9532/ab14/6bf713cc33aba2ea1e125d769575bff1?Expires=1694390400&Signature=Mqq6JhlTFc0rcuZJsveuzEK~CfVNKdSSB5rAmM0sw45uKqblNqYRkDC09bJaLpY8mraQQ~wWelcpyng-mpKmzruiWe5ubw8yQOOXn7Z~HehO4jVmouC0oOJBuxPPVbBkwRjjqe5TYE-Ap~N-0P6ao4G3aWYxfPLm2-MM3dE4AEO0y6uuYZLV4K~HA00h7vhGn4LdnANkIe4~FRUg4abUDjJsyQhSpO1Bb4F5xYaLlkwdHG-IhsPI4CGJ1gEgH8HHLrrC2yLW3kshNMWsg9d-mCl6Ic1vdBkcWeSeO88fUqCwUtdNTWlL72Z2xXViAX7zpEAvfheV9FdL-vL1JjKYcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />

                 <Mid5Box2 pic='https://s3-alpha-sig.figma.com/img/a341/0edf/b9f331989e6a37272656d74dcc1fa564?Expires=1694390400&Signature=EaTpN1Nh5whtDoA7OJqCvkRB4odDsR3YOHc9-oMQetzhrwiu52o7k5bCXuLdjZ8JU9Lai5UwET5G0~ccs5-oeVIGuO4TLtXvCT5HC173jsGV7BN31zanUB1W6KieKz2pOFK-69YB5MguC0Tfo8PsC-P8YETTeCxp3O2l5jBseEqTPllgtw1MkQzqm5Z40P7xFGYCenmdFxkLj50l4NJxo6HWXeeDTKJimxePHYwebVB9V5E9L4s~AXtO6CPxVYNPdwbMoHFZM6bnUfEDSf4f64iAeg163UQhxobYmZJ0lCXB3tq26oeqi5-PHEiTd4fJCTm2xBiUyy67bFYI5loQjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />

                 <Mid5Box pic='https://s3-alpha-sig.figma.com/img/f25f/11a5/398d62f379451c585ca424d6158fe704?Expires=1694390400&Signature=ArhTKIshePXZTXketvme9FJTY-EpuJk0wjGhdeWY6bGzfW~uYXIWVDV4MF2E8aZ5YUuii1Xy3t4~j4LFQRpfMfeWsKdrLru2iYQTMkxpUZ2~HtXC-udxY5cSjdaTZSn8oWdPHFpYiP8O0~9l4i9DjDI0bzTcGG00zIIzmuXBCm90R3dlGaUxczhuSRe2Gon2Dg2HWLY82TSttDuq3h3x56WHJlWsUR4n7EZnx9gTuVEuz4m93loVhHPwGKheQaVjoc5InOb8UElHDTyiAQTPBsnsmybHbl54uvorHkwNL4X32cgwvFDY~D7al6VjZV0YxMW4A70jtotY9F1~qTVkBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
             
    
             </Box>





    </Box>
    
    
    </>
  )
}

export default Mid5