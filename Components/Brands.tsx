import { 
  Box, 
  Heading,
  List,
  ListItem,
  ListIcon,
  Divider, 
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const Brands = () => {
  return ( 
    <Box bgColor={'black'} color={'white'} p={5} display={{base: 'none', lg: 'block'}} width={'10rem'} mt={5} ml={6}>
      <Heading fontSize={'2xl'} p={3}>Top Brands</Heading>

      <Divider />
      <br />

      <List spacing={3} >
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Nike
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Louis Vuitton 
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Hermes
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Gucci
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Adidas
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Zara
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Cartier
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Moncler
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='white.500' />
          Chanel
        </ListItem>
        
      </List> 
    </Box>
   );
}
 
export default Brands;