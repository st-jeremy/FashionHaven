import Search from './Search';
import Account from './Account';
import Help from './Help';
import { GiShoppingCart } from 'react-icons/gi';
import { useRouter } from 'next/router';
import Hamburger from './Hamburger';
import { AvatarBadge, Box, Heading, Avatar  } from '@chakra-ui/react'

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
    <Box bgColor= 'black' position={'fixed'} zIndex={'1000'} margin={'auto'} width={'100%'}>
      <Heading fontSize={12} bgColor={'red'} textAlign='center' p={1}>
        Welcome to Fashion Haven. Shop now!
      </Heading>

      <Box display='flex' flexDirection={{base: 'column', md: 'row'}} p={{base: '5px', md: '1rem 2rem'}} color={'white'}  maxWidth={'1400px'} margin={'auto'}>

        <Box textAlign={'center'} m={'auto'}>
          <Heading fontSize={{base: '16pt', md: '30pt'}} onClick={handleHomeClick} cursor='pointer' width={{base: 'fit-content', md: '300px'}} >Fashion Haven<sup>®</sup></Heading>
        </Box>

        <Box display='flex' flexDirection={'row'} margin={'auto'} width={'90%'} p={1} bgColor={'black'}>
          <Hamburger />

          <Search />

          <Help />

          <Account />
    
          <Avatar 
            icon={<GiShoppingCart  fontSize='25pt'/>}
            style={{
              width: '30px', 
              height: '50px', 
              cursor: 'pointer',
              margin: 'auto'
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