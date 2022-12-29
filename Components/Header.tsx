import Search from './Search';
import Account from './Account';
import Help from './Help';
import { GiShoppingCart } from 'react-icons/gi';
import { useRouter } from 'next/router';
import Hamburger from './Hamburger';
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
    return (
      cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    )
   };

  return ( 
    <Box>
      <Heading fontSize={15} bgColor={'blackAlpha.100'} textAlign='center' p={2}>
        Welcome to Fashion Haven. Shop now!
      </Heading>

      <Box display='flex' flexDirection={{base: 'column', md: 'row'}} bgColor= 'black' p={{base: '5px', md: '1rem 2rem'}} color={'white'}>
        <Box textAlign={'center'} m={'auto'}>
          <Heading fontSize={{base: '16pt', md: '30pt'}} onClick={handleHomeClick} cursor='pointer' width={'fit-content'} >Fashion Haven<sup>®</sup></Heading>
        </Box>

        <Box display='flex' flexDirection={'row'} >
          <Hamburger />

          <Search />
        </Box>

        <Box  display='flex' flexDirection={'row'} >

          <Help />

          <Account />
    
          <Avatar 
            icon={<GiShoppingCart  fontSize='2.1rem'/>}
            style={{
              width: '30px', 
              height: '50px', 
              cursor: 'pointer',
            }} 
            bgColor={'black'}
            onClick={handleCartClick}
          >
            <AvatarBadge boxSize='1em' bgColor={'red'} color={'white'} position={'absolute'} top={'0'} border={'none'} fontSize='12pt'>{getItemsCount()} </AvatarBadge>
          </Avatar>
        </Box>
      </Box>

    </Box>

   );
}
 
export default Header;