import { Box, Heading, Input, InputGroup, InputRightAddon} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl'

const Footer = () => {
  const router = useRouter();
  const handleHomeClick =() =>{
    router.push('/')
  }

  return ( 
    <Box  bgColor={'black'}>
      <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} p={'3rem 3rem 4rem'} bgColor={'blackAlpha.900'}  color={'white'} maxWidth={'1400px'} margin={'auto'}>

        <Heading 
          fontSize={30} 
          onClick={handleHomeClick} 
          cursor='pointer' 
          width={'fit-content'} 
          mb={10}
        >
          Fashion Haven<sup>®</sup>
        </Heading>

        <Box position={{base: 'relative', md: 'relative', lg: 'absolute'}} right={{base:'0', md: '0', lg: '30%'}} mb={10} mr={10}>
          <Heading size={'md'}>Subscribe</Heading>
          <p>Subscribe to our newsletter to get updates on our latest offers!</p>
          <br />
          <InputGroup>
            <Input type={'email'} placeholder={'Enter your email address'} />
            <InputRightAddon color={'black'} bgColor={'white'}> &rarr;</InputRightAddon>
          </InputGroup>
        </Box>

        <Box position={{base: 'relative', md: 'relative', lg: 'absolute'}} right={{base: 0, md: '0', lg: '10%' }}>
          <Heading size={'md'}>Stay Connected</Heading>
          <br />
          <Box display={'flex'} >
            <SlSocialInstagram style={{marginRight:'20px'}}/>
            <SlSocialLinkedin  style={{marginRight:'20px'}}/>
            <SlSocialFacebook />
          </Box>
        </Box>
      </Box>

      <Box bgColor={'black'} color={'white'} textAlign={'center'} p={5} >
        All Rights Reserved. Copyright © {new Date().getFullYear()}
      </Box>
    </Box>
   );
}
 
export default Footer;