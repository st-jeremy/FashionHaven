import { ChevronDownIcon } from '@chakra-ui/icons';
import FootWear from '../pages/Categories/FootWear';
import HeadWear from '../pages/Categories/HeadWear';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Heading,
  Button
} from '@chakra-ui/react'

import Link from 'next/link';

const Categories = () => {
  return ( 
    <Box display={'flex'} flexDirection={'column'} width={200} bgColor={'blackAlpha.500'}>
      <Heading fontSize={'2xl'} m={5}>Categories</Heading>
        <Button
          size='md'
          height='48px'
          width='200px'
          border='2px'
          borderColor='green.500'
          leftIcon={<MdBuild />} colorScheme='pink' variant='solid'
        >
          <Link href='/Categories/Clothing'>Clothing</Link>
        </Button>
      <Link href='/Categories/FootWear'>FootWear</Link>
      <Link href='/Categories/HeadWear'>HeadWear</Link>
      <Link href='/Categories/Accessories'>Accessories</Link>
    </Box>
   );
}
 
export default Categories;