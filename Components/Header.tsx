import Search from './Search';
import { Box, Heading } from '@chakra-ui/react';
import Account from './Account';
import Help from './Help';
import { GiShoppingCart } from 'react-icons/gi';
import { useRouter } from 'next/router';
import Female from './Female';


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
      <Box >
        <Heading fontSize={15} bgColor={'blackAlpha.100'} textAlign='center' p={2}>Welcome to Fashion Haven. Shop now!</Heading>

        <Box display='flex' bgColor= 'white' p='1rem 2rem' >
          <Heading fontSize={30} onClick={handleHomeClick} cursor='pointer' width='550px'>Fashion Haven<sup>®</sup></Heading>

          <Female />
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

      </Box>
    </>
   );
}
 
export default Header;