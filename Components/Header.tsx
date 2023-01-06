import Search from './Search';
import Account from './Account';
import Help from './Help';
import Hamburger from './Hamburger';
import { Box, Heading  } from '@chakra-ui/react';
import CartIcon from './CartIcon';
import Logo from './Logo';



const Header = () => {

  return ( 
    <Box bgColor= 'black' position={'fixed'} zIndex={'1000'} width={'100%'}>

      <Heading 
        fontSize={12} 
        bgColor={'grey'}
        color={'white'}
        textAlign='center' 
        p={1}
        zIndex={'1000'}
      >
        Welcome to Fashion Haven. Shop now!
      </Heading>

      <Box display='flex' flexDirection={{base: 'column', md: 'row'}} p={{base: '2px', md: '1rem 2rem'}} color={'white'}  maxWidth={'1400px'} >

        <Logo />

        <Box display='flex' flexDirection={'row'} margin={'auto'} width={'90%'} p={1} bgColor={'black'}>
          <Hamburger />

          <Search products={undefined} />

          <Help />

          <Account />
    
          <CartIcon />
        </Box>
      </Box>

    </Box>

   );
}
 
export default Header;