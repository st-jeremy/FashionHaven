import Search from './Search';
import Account from './Account';
import Help from './Help';
import { GiShoppingCart } from 'react-icons/gi';
import { useRouter } from 'next/router';
import Female from './Female';
import Male from './Male';
import { Icon, AvatarBadge, Box, Heading, Avatar  } from '@chakra-ui/react'

import { useSelector } from 'react-redux';

const Header = () => {

  const router = useRouter();
  const handleHomeClick =() =>{
    router.push('/')
  }
  const handleCartClick =() =>{
    router.push('/Cart')
  }

   // Selecting cart from global state
   const cart = useSelector((state) => state.cart);

   // Getting the count of items
   const getItemsCount = () => {
     return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
   };

  return ( 
    <>
      <Box>
        <Heading fontSize={15} bgColor={'blackAlpha.100'} textAlign='center' p={2}>Welcome to Fashion Haven. Shop now!</Heading>

        <Box display='flex' bgColor= 'black' p='1rem 2rem' color={'white'}>
          <Heading fontSize={30} onClick={handleHomeClick} cursor='pointer' width={'fit-content'}>Fashion Haven<sup>®</sup></Heading>

          <Male />

          <Female />

          <Search />

          <Help />

          <Account />
    
          <Avatar icon={<GiShoppingCart  fontSize='2.5rem'/>}
            style={{
              width: '70px', 
              height: '50px', 
              cursor: 'pointer',
              marginLeft: '85px'
            }} 
            bgColor={'black'}
            onClick={handleCartClick}
          >
            <AvatarBadge boxSize='1.1em' bg='white' color={'black'} position={'absolute'} top={'0'}>{getItemsCount()} </AvatarBadge>
         
          </Avatar>
        </Box>

      </Box>
    </>
   );
}
 
export default Header;