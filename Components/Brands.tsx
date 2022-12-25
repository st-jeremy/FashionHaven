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
          Bedspoke
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Suit
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Blazers and Jackets
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Hoodie and Sweatshirt
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Skirts
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Trousers
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color='green.500' />
          Swim and Lounge Wears
        </ListItem>
      </List>
      
    </Box>
   );
}
 
export default Brands;