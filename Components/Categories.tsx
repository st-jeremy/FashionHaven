import {
  Box,
  Divider,
  Heading,
} from '@chakra-ui/react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return ( 
    <Box display={{base: 'none', md: 'flex'}} flexDirection={'column'} width={'fit-content'}  mr={6} p={1.5}>

      <Heading fontSize={'2xl'} m={5}>Categories</Heading>
      <Divider />
      <br />
      <CategoryCard name="Clothing" link={"Clothing"} />
      <CategoryCard name="Head Wear" link={"HeadWear"} />
      <CategoryCard name="Foot Wear" link={"FootWear"} /> 
      <CategoryCard name="Accessories" link={"Accessories"} />
    </Box>
  );
}
 
export default Categories;