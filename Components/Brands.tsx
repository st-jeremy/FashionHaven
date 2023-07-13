import { 
  Box, 
  Heading,
  List,
  ListItem,
  ListIcon,
  Divider,
  VStack, 
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const Brand = ({name}: {name:string}) => {
  return ( 
    <ListItem>
      <ListIcon as={MdCheckCircle} color='white.500' />
      {name}
    </ListItem> 
  );
};
const Brands = () => {
  return ( 
    <VStack p={5} display={{base: 'none', lg: 'block'}} bgGradient='linear(to-r, white, grey)' width={'fit-content'} ml={6}>
      <Heading fontSize={'2xl'} p={3}>Top Brands</Heading>
      <Divider />

      <List spacing={3}>
        <Brand name={'Nike'} />
        <Brand name={'Louis Vuitton '} />
        <Brand name={'Hermes'} />
        <Brand name={'Gucci'} />
        <Brand name={'Adidas'} />
        <Brand name={'Zara'} />
        <Brand name={'Cartier'} />
        <Brand name={'Moncler'} />
        {/* <Brand name={'Chanel'} /> */}
      </List> 
    </VStack>
   );
}
 
export default Brands;