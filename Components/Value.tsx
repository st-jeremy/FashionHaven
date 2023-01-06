import { BiDollar } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsFillPeopleFill, BsCreditCard2Back } from 'react-icons/bs'
import { AiOutlineSafety } from 'react-icons/ai'
import { Box, Heading, Text } from "@chakra-ui/react";

const Value = () => {

  return ( 
    <Box display={'flex'} flexDirection={{base: 'column'}} textAlign={'center'} p={{base: '2.5', lg: '5'}} pt={'6rem'} pb={'6rem'} maxWidth={'1400px'} margin={'auto'} >

      <Box display={{base: 'block', md: 'flex'}} margin={{base: '0', lg: 'auto'}} mb={7} width={'90vw'}>
        <Box mr={3}>
          <BiDollar style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <br />
          <Heading size='md'>Great Value</Heading>
          <Text>We offer competitive prices on over 100 million items.</Text>
        </Box>

        <Box mr={3}>
          <TbTruckDelivery style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}} />
          <Heading  size='md'>Worldwide Delivery</Heading>
          <p>We ship to all continents of the world.</p>
        </Box>

        <Box>
          <BsCreditCard2Back  style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <Heading  size='md'>Safe payment</Heading>
          <p>Pay with the world’s most popular and secure payment methods.</p>
        </Box>
      </Box>

      <Box display={{base: 'block', md: 'flex'}} margin={{base: '0', lg: 'auto'}} width={'90vw'}>
        <Box >
          <AiOutlineSafety style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <Heading  size='md'>Shop with confidence</Heading>
          <p>Our Buyer Protection policy covers your entire purchase journey.</p>
        </Box>

        <Box >
          <BsFillPeopleFill style={{position: 'relative', display: 'inline-flex', fontSize: '26pt',}}/>
          <Heading  size='md'>Help center</Heading>
          <p>Round-the-clock assistance for a smooth shopping experience.</p>
        </Box>
      </Box>
    </Box>
   );
}
 
export default Value;