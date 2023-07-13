import { BiDollar } from 'react-icons/bi'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsFillPeopleFill, BsCreditCard2Back } from 'react-icons/bs'
import { AiOutlineSafety } from 'react-icons/ai'
import { Box, Heading, Icon, Text } from "@chakra-ui/react";

const ValueCard = ({name, text, icon}) => {
  return ( 
    <Box p={2} maxW={300} m={'auto'} textAlign={'center'}>
      <Icon as={icon} fontSize={26} />
      <br />
      <Heading size='md'>{name}</Heading>
      <Text>{text}</Text>
    </Box> 
  );
};
const Value = () => {

  return ( 
    <Box display={{base:'block', md:'grid', lg:'flex'}} justifyContent={'center'} alignItems={'center'} flexDirection={{base:'column', lg:'row'}} gridTemplateColumns={'auto auto'} py={5} bgColor={'blackAlpha.100'} maxWidth={'1400px'}>
      <ValueCard name={"Great Value"} text={"We offer competitive prices on over 100 million items."} icon={BiDollar} />
      <ValueCard name={"Safe payment"} text={"Pay with the world’s most popular and secure payment methods."} icon={BsCreditCard2Back} />
      <ValueCard name={"Shop with confidence"} text={"Our Buyer Protection policy covers your entire purchase journey."} icon={AiOutlineSafety} />
      <ValueCard name={"Help center"} text={"Round-the-clock assistance for a smooth shopping experience."} icon={BsFillPeopleFill} />
    </Box>
   );
}
 
export default Value;