import { 
  Box, 
  Heading, 
  Input, 
  InputGroup, 
  InputRightAddon, 
  Text, 
  Button, 
  VStack, 
  HStack,
  Stack
} from "@chakra-ui/react";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl';
import { FaTwitter, FaTiktok, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return ( 
    <Box bgColor={'black'} color={'white'} p={10}>
      <Box maxWidth={'1400px'} margin={'auto'} >
        <Logo />
        <Stack direction={{base:'column', md: 'row'}} spacing={10} justifyContent={'space-between'}>
          <Stack direction={{base:'row', md: 'column'}} fontSize={{base: 'sm', sm: 'md'}} mt={10}>
            <Link href='/'>Help Center</Link>
            <Link href='/'>Customer Care</Link>
            <Link href='/my-account'>My Account</Link>
          </Stack>

          <VStack my={5} justifyContent={'center'} m={'auto'} maxW={270}>
            <Text fontSize={{base: '10pt', md: '14pt'}} textAlign={'center'}>Subscribe to our newsletter to get updates on our latest offers!</Text>
            <InputGroup>
              <Input type={'email'} placeholder={'Enter your email address'} width={215} />
              <InputRightAddon as={Button} color={'black'} bgColor={'white'}> &rarr;</InputRightAddon>
            </InputGroup>
          </VStack>

          <VStack my={5} justifyContent={'center'}>
            <Heading size={{base: 'sm', md: 'md'}}>Stay Connected</Heading>
            <HStack spacing={5}>
              <SlSocialInstagram/>
              <SlSocialLinkedin />
              <SlSocialFacebook />
              <FaTiktok />
              <FaTwitter />
              <FaTwitch />
              <FaWhatsapp />
            </HStack>
          </VStack>
        </Stack>

        <Box bgColor={'black'} color={'white'} textAlign={'center'} p={5} fontSize={{base: '12pt', md: '14pt'}}>
          All Rights Reserved. Copyright © {new Date().getFullYear()}
        </Box>
      </Box>  
    </Box>
   );
}
 
export default Footer;