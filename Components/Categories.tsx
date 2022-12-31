import {
  Box,
  Divider,
  Heading,
} from '@chakra-ui/react';
import CategoryCard from './CategoryCard';

const Categories = () => {

  return ( 
    <Box display={{base: 'none', md: 'flex'}} flexDirection={'column'} width={'fit-content'} bgColor={'blackAlpha.900'} ml={3} p={3}>

      <Heading fontSize={'2xl'} m={5} color={'white'}>Categories</Heading>
      <Divider />
      <br />
      <CategoryCard name="Clothing" />
      <CategoryCard name="HeadWear" />
      <CategoryCard name="FootWear" /> 
      <CategoryCard name="Accessories" />
    </Box>
  );
}
 
export default Categories;