import { Box, Heading, Input, InputGroup, InputRightAddon, Text} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl'
import Logo from "./Logo";

const Footer = () => {
  const router = useRouter();
  const handleHomeClick =() =>{
    router.push('/')
  }

  return ( 
    <Box  bgColor={'black'}>
      <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} p={{base: '3rem 1.5rem 4rem', md: '3rem 3rem 4rem'}} bgColor={'blackAlpha.900'}  color={'white'} maxWidth={'1400px'} margin={'auto'}>

        <Box mb={10}>
          <Logo />
        </Box>

        <Box position={{base: 'relative', md: 'relative', lg: 'absolute'}} right={{base:'0', md: '0', lg: '30%'}} mb={10} mr={10}>
          <Heading size={{base: 'sm', md: 'md'}}>Subscribe</Heading>
          <Text fontSize={{base: '12pt', md: '14pt'}}>Subscribe to our newsletter to get updates on our latest offers!</Text>
          <br />
          <InputGroup>
            <Input type={'email'} placeholder={'Enter your email address'} width={{base: '400px', md: 'fit-content'}} />
            <InputRightAddon color={'black'} bgColor={'white'}> &rarr;</InputRightAddon>
          </InputGroup>
        </Box>

        <Box position={{base: 'relative', md: 'relative', lg: 'absolute'}} right={{base: 0, md: '0', lg: '10%' }}>
          <Heading size={{base: 'sm', md: 'md'}}>Stay Connected</Heading>
          <br />
          <Box display={'flex'} >
            <SlSocialInstagram style={{marginRight:'20px'}}/>
            <SlSocialLinkedin  style={{marginRight:'20px'}}/>
            <SlSocialFacebook />
          </Box>
        </Box>
      </Box>

      <Box bgColor={'black'} color={'white'} textAlign={'center'} p={5} fontSize={{base: }}>
        All Rights Reserved. Copyright © {new Date().getFullYear()}
      </Box>
    </Box>
   );
}
 
export default Footer;