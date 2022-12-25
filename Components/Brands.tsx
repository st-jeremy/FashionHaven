import { 
  Box, 
  Heading,
  List,
  ListItem,
  ListIcon, 
} from '@chakra-ui/react';
import {MdCheckCircle} from 'react-icons/md'

const Brands = () => {
  return ( 
    <Box bgColor={'black'} color={'white'} p={5}>
      <Heading>Top Brands</Heading>
      <br />

      <List spacing={3}>
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
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Rolex
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Prada
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Burberry
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Polo Ralph Lauren
        </ListItem>
      </List>
      
    </Box>
   );
}
 
export default Brands;