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
  Heading
} from '@chakra-ui/react'
import Link from 'next/link';

const Categories = () => {
  return ( 
    <Box display={'flex'} flexDirection={'column'} width={200} bgColor={'blackAlpha.500'}>
      <Heading fontSize={'2xl'} m={5}>Categories</Heading>

      <Link href='/Categories/Clothing'>Clothing</Link>
      <Link href='/Categories/FootWear'>FootWear</Link>
      <Link href='/Categories/HeadWear'>HeadWear</Link>
      <Link href='/Categories/Accessories'>Accessories</Link>
    </Box>
   );
}
 
export default Categories;