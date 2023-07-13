import { 
  Heading,
  List,
  Divider,
  VStack, 
} from '@chakra-ui/react';
import Point from './Point';


const Brands = () => {
  return ( 
    <VStack p={5} display={{base: 'none', lg: 'flex'}} bgGradient='linear(to-r, white, grey)' width={'fit-content'}>
      <Heading fontSize={'2xl'} p={3}>Top Brands</Heading>
      <Divider />

      <List spacing={3}>
        <Point name={'Nike'} />
        <Point name={'Louis Vuitton '} />
        <Point name={'Hermes'} />
        <Point name={'Gucci'} />
        <Point name={'Adidas'} />
        <Point name={'Zara'} />
        <Point name={'Cartier'} />
        <Point name={'Moncler'} />
      </List> 
    </VStack>
   );
}
 
export default Brands;