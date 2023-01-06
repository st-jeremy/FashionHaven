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
    <Box bgColor={'black'} color={'white'} p={5} m={'auto'} display={{base: 'none', lg: 'block'}} width={'20rem'}>
      <Heading fontSize={'2xl'} p={3}>Top Brands</Heading>

      <Divider />
      <br />

      <List spacing={3} >
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Nike
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Louis Vuitton 
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Hermes
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Gucci
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Zalando
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Adidas
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Zara
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Cartier
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Moncler
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Chanel
        </ListItem>
        
      </List> 
    </Box>
   );
}
 
export default Brands;