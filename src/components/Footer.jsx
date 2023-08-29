import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import img from "../images/Group.png"

const Footer = () => {
  return (
    <>
    <Box w='90%' m='auto' border='1px' pb='2rem'  backgroundColor='black'  >

        <Box w='30%' h='8rem' >
            <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/6416/8f46/5708df7b8f70d3ce8182d0a23c0a9a34?Expires=1694390400&Signature=MXJjxZlvlCbASF~qrg2DSqHjAi8hGlLawvKQtP1tNSsGOZ7hG8Ix3vw6KtWsv1OuogK1fIZOLDJyKYu3YcIGrxn8UvrtvNKwasHT5gDZoCR1zb91ni5H8xaazaRA55ppRpRtZb5oJIEyDpOt3Ke1RNzmG~H7IB8sVLxj~gTIDUNSaEL3jjGr5WDWz~AZcZZpLYPSS6XeZpGvNFDlPk5CBaStq2OqDT-GJkxZQHF5zOzyugVVoL4dGv0LOV5EzuCC8HhKkqV5J4dfhPV-G21HxTBFoTF6GrZ9TTkuBaa17wMVimsoywdjJJQ8RKyRM6423kBeLMZ8D6LPPKL76aXz2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'  />
        </Box>
      {/* <-------------------------------------------------------------------------------------------------> */}

        <Box w='100%' display='flex' justifyContent='space-between' >

            <Box color='white' pl='2rem' >
                <Box fontWeight='500' fontSize={{base:"0.4rem",sm:"0.7rem",md:"0.9rem"}}  textAlign='left' >Contact Us</Box>
                <Box fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >5403805808030</Box>
                <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >contact@chhot.com</Box>
            </Box>
            <Box>
            <Box fontWeight='500' fontSize={{base:"0.4rem",sm:"0.7rem",md:"0.9rem"}} color='white' textAlign='left' >Company</Box>
                <Box fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >About Us</Box>
                <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Privacy policy</Box>
                <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Tems and Conditions</Box>
            </Box>
            <Box>
                <Box fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left'  color='white' >Quick Links</Box>
                <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Home</Box>
                <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Category</Box>
                <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Blog</Box>
       
            </Box>
            <Box>
                <Box fontSize={{base:"0.6rem",sm:"0.7rem"}}  textAlign='left' color='white' >Download the App Now !</Box>
                 <Image w={{base:"5rem",sm:"7rem",md:"10rem"}} h='2.5rem' src={img}  />
             
            </Box>
        </Box>



      {/* <-------------------------------------------------------------------------------------------------> */}

      <Box pl='2rem' mt='0.5rem' fontWeight='500' fontSize={{base:"0.4rem",sm:"0.7rem",md:"0.8rem"}}  textAlign='left'  color='white' >Find Us On</Box>


       <Box pl='2rem' mt='0.5rem' w='100%' display='flex' justifyContent='left' gap='1rem' >
          <Box w='2rem' h='2rem'>
            <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/0d4d/0891/a71e927e194e6ecd5afebedc83d09335?Expires=1694390400&Signature=KEQCMYsDT3OxmzxCdKvTfgIQ-CnVqcLPnhVy-YHXmP5~C5pi9Z3btbbrSIdZW3ZoQCqd~1Hnr4hUDcaFj7BGUUoUudGVPOc5GdkKYTIh8oGvpz4JRulBEV8zQH8BzFtN~iTP9O5BwBRHTkF5UuJI5fKmK6fzXv773eTdQd7ObRc4vF~HBADDiMtqZnTxwhk3zOS89g7aD2IP99y36wltP3dMjIFMGMeo0VMgUCPJKqRS-cyCK5s9BgBrYyb11yRshDe4cIYATfF56va55KhKxm-tnJez1Wmh5RImxrKE2~oW7da-gTUujGwQ9ZTQp8lUn13Zi1LpsK8CgmI2XC5IEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          </Box>

          <Box w='2rem' h='2rem'>
            <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/dd9c/1ab6/27fcab307c3eacab050043528515a43e?Expires=1694390400&Signature=IS2RT9lZ4itzaJQz0YemE6KLnfRJ~F9blE4ARX8rx9Zny42Z~pG~kX2Jp0Da7knn5GWtLW8nfmgLu3uQp8rrawSAt4mJWkuOrN~JRtEYtWxrkWWR1Ro7J8~ceyILHwmfRfr97kiV~UFVor259pa5qrxnuixCfBy9AD1m1DX3fUBhCommC5Ch-b48v6rRueE6Mf5uRjzLo0~4RocxJE5VZUTn9k0wRhdznWazAq2Mmu4Uv6ehOShYNWe-3jaeLadTaQq-sAB~PqQCbcfSjH0DoU1jkUI1qI~zFJruiBvj0KDgyhMINsKH9bo9rzK5qndJ1KUHpCBZVeau4AU0~KgY2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          </Box>

          <Box w='2rem' h='2rem'>
            <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/b28c/020a/da22862a8fda3e3ff35bad4889d829fa?Expires=1694390400&Signature=JHtyu359ROMyuTec5TPfJ~yxif4jLxMZIXa9wqbEsckDU6nZ4heZo7ZGI5uhz693h6tYy2MpPtPk0jQYBWDIGodoR14L5A-4Rov5sTa~AbIu0DSyyRog747nvXnVTCvIfzn8DwOD5t0EUfn0mSxnA53lTm0RtWSGAl1mf2riXMRnH2y1-dAAebF1~glb4nu-rr3TzvNzXCQUB5sM9TnhoH8B5x1ugjVRhdPFl0jkoCl35vjE3k1fmYiQgSK4aVWN5rwWABTKHA2x6bPfBU4k7ML~HzDOFqKsuqxl61K1Aw9Dcx-8DhhctIgZFDG4kUTn0KQjvYve-4Dp3~Z28g-TrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          </Box>

          <Box w='2rem' h='2rem'>
            <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/0784/6b84/cd0600e6b9982dfa0ee69d5caee5f8fa?Expires=1694390400&Signature=FyT-5h2krS770f3yQyMHAuQHiNxOlNeCiKYcQDyVlxmxelnM9tJpxxoE1iSWXlLwGkLZ9YuV2IWud-rRqdK~dGcWNwBreFR75qAayMVqEUFajj-9safpDjFWMoeD47nGXgaFc7hAGFU90MY7sVDlNjZbqpwCjNmXWVOlXE2ZyEZm6OFlf1q2fq9QRcXE~-XqBuI56mbCiBYZZDCffXUgNc7z6tv0BVnFDYcOSFsL-9ecLdFIe7z48qgucoHyS7qgwrex791SIqm1UxsEx4cnSu6hmfYCOIxnGgehZ1l~mfbKGVy4ELOORx~pZHgr~ZpMRdOrjvDGevzSLdWMmAir5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          </Box>

       </Box>



        {/* <-------------------------------------------------------------------------------------------------> */}

        <Box  pl='2rem' mt='2rem' >
            <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >© 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited</Box>
            <Box mt='0.5rem' fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.</Box>
            <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing</Box>
            <Box mt='0.5rem' fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >Investors should consider all risk factors and consult their financial advisor before investing Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India</Box>
            <Box mt='0.5rem' fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >For any query / feedback / clarifications, email at contact@chhotastock.com</Box>
            <Box mt='0.5rem' fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only facilitates investments</Box>
            <Box  fontSize={{base:"0.4rem",sm:"0.7rem"}}  textAlign='left' color='gray' >in such baskets, portfolios.</Box>
            
        </Box>


    </Box>
    
    </>
  )
}

export default Footer