import {
  Box,
  Heading,
} from '@chakra-ui/react';
import SubCategoryCard from './subCategoryCard';

const SubCategory = () => {

  return ( 
    <Box display={'flex'} flexDirection={'column'} width={'fit-content'} bgColor={'blackAlpha.900'} ml={3} p={3}>

      <Heading fontSize={'2xl'} m={5} color={'white'}>Categories</Heading>
      <SubCategoryCard name="Top" />
      <SubCategoryCard name="Bottom" />
    </Box>
  );
}
 
export default SubCategory;