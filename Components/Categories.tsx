import {
  Box,
  Divider,
  Heading,
  VStack,
} from '@chakra-ui/react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return ( 
    <Box display={{base: 'none', md: 'flex'}} width={'fit-content'} p={1.5} h={385.8} >
      <Box bgColor={"black"} w={'5rem'}  display={{base:'none', xl:'flex'}} mr={5}></Box>

      <VStack justifyContent={'center'}>
        <Heading fontSize={'2xl'}>Categories</Heading>
        <Divider />
        <br />
        <CategoryCard name="Clothing" link={"Clothing"} />
        <CategoryCard name="Head Wear" link={"HeadWear"} />
        <CategoryCard name="Foot Wear" link={"FootWear"} /> 
        <CategoryCard name="Accessories" link={"Accessories"} />
      </VStack>
    </Box>
  );
}
 
export default Categories;