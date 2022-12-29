import {
  Box,
  Heading,
} from '@chakra-ui/react';
import CategoryCard from './CategoryCard';

const Categories = () => {

  return ( 
    <Box display={'flex'} flexDirection={'column'} width={'fit-content'} bgColor={'blackAlpha.900'} ml={3} p={3}>

      <Heading fontSize={'2xl'} m={5} color={'white'}>Categories</Heading>

      <CategoryCard name="Clothing" />
      <CategoryCard name="HeadWear" />
      <CategoryCard name="FootWear" /> 
      <CategoryCard name="Accessories" />
    </Box>
  );
}
 
export default Categories;