import { 
  Box, 
  Heading,
  List,
  ListItem,
  ListIcon, 
} from '@chakra-ui/react';
import {MdCheckCircle} from 'react-icons/md';
import { getBrands } from '../pages/api/Brands';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const Brands = ({ brands }) => {
  return ( 
    <Box bgColor={'black'} color={'white'} p={5} m={'auto'} display={{base: 'none', lg: 'block'}}>
      <Heading>Top Brands</Heading>
      <br />

      {/* <List spacing={3} >
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
        
      </List> */}
      
      <div>
        {brands && !brands.map((brand: { id: Key; name: string })=>( 
          <div key={brand.id}>
            <li>{brand.name}</li>
          </div>
        ))}
      </div>


    </Box>
   );
}
 
export default Brands;

export async function getStaticProps() {
  const brands = await getBrands();
  return { props: { brands } };
}