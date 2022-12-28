import { Box, Heading, Input, InputGroup, InputRightAddon, List, ListItem } from "@chakra-ui/react";
import { BiDollar } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsFillPeopleFill, BsCreditCard2Back } from 'react-icons/bs'
import { AiOutlineSafety } from 'react-icons/ai'
import { useRouter } from "next/router";
import { SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl'

const Footer = () => {
  const router = useRouter();
  const handleHomeClick =() =>{
    router.push('/')
  }

  return ( 
    <Box >
      <Box display={'flex'} textAlign={'center'} bgColor={'blackAlpha.400'} p={5} mt={20}>
        <Box >
          <BiDollar style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <br />
          <Heading size='md'>Great Value</Heading>
          <p>We offer competitive prices on over 100 million items.</p>
        </Box>
        <Box>
          <TbTruckDelivery style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}} />
          <Heading  size='md'>Worldwide Delivery</Heading>
          <p>We ship to all continents of the world.</p>
        </Box>
        <Box>
          <BsCreditCard2Back  style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <Heading  size='md'>Safe payment</Heading>
          <p>Pay with the world’s most popular and secure payment methods.</p>
        </Box>
        <Box>
          <AiOutlineSafety style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <Heading  size='md'>Shop with confidence</Heading>
          <p>Our Buyer Protection policy covers your entire purchase journey.</p>
        </Box>
        <Box>
          <BsFillPeopleFill style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <Heading  size='md'>Help center</Heading>
          <p>Round-the-clock assistance for a smooth shopping experience.</p>
        </Box>
      </Box>

      <Box display={'flex'} p={'5rem 3rem 6rem'} bgColor={'blackAlpha.900'}  color={'white'}>
        <Heading fontSize={30} onClick={handleHomeClick} cursor='pointer' width={'fit-content'}>Fashion Haven<sup>®</sup></Heading>

        <Box position={'absolute'} right={'25%'}>
          <Heading size={'md'}>Subscribe</Heading>
          <p>Subscribe to our newsletter to get updates on our latest offers!</p>
          <br />
          <InputGroup>
            <Input type={'email'} placeholder={'Enter your email address'} />
            <InputRightAddon color={'black'} bgColor={'white'}> &rarr;</InputRightAddon>
          </InputGroup>
        </Box>

        <Box position={'absolute'} right={10}>
          <Heading size={'md'}>Stay Connected</Heading>
          <br />
          <Box display={'flex'} >
            <SlSocialInstagram style={{marginRight:'20px'}}/>
            <SlSocialLinkedin  style={{marginRight:'20px'}}/>
            <SlSocialFacebook />
          </Box>
        </Box>
      </Box>

      <Box bgColor={'black'} color={'white'} textAlign={'center'} pt={10}>
        All Rights Reserved. Copyright © {new Date().getFullYear()}
      </Box>
    </Box>
   );
}
 
export default Footer;