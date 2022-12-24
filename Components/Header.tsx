import Search from './Search';
import { Box, Heading } from '@chakra-ui/react';
import Account from './Account';
import Help from './Help';
import { GiShoppingCart } from 'react-icons/gi';
import { useRouter } from 'next/router';


const Header = () => {

  const router = useRouter();
  const handleHomeClick =() =>{
    router.push('/')
  }
  const handleCartClick =() =>{
    router.push('/')
  }

  return ( 
    <>
      <Box display='flex' bgColor='pink.50' p='1rem 2rem' >
        
        <Heading fontSize={30} onClick={handleHomeClick} cursor='pointer' width='550px'>Fashion Haven<sup>®</sup></Heading>

        <Search />

        <Account />

        <Help />

        <GiShoppingCart 
          style={{
            width: '70px', 
            height: '50px', 
            cursor: 'pointer',
            marginLeft: '5px'
          }} 
          onClick={handleCartClick}
        />

      </Box>
    </>
   );
}
 
export default Header;