import { TiShoppingCart } from 'react-icons/ti';
import { Button, Box, Text, Icon  } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { useRouter } from 'next/router';

const CartIcon = () => {
  const router = useRouter();

  const handleCartClick =() =>{
    router.push('/cart')
  };

  return ( 
    <Button 
      bgColor={'black'}
      color={'white'}
      _hover={{bgColor: 'white', color: 'black'}} 
      onClick={handleCartClick}
      width={'fit-content'}
      px={{base: '1', md: '2'}}
    >
      <Text display={{base:'none', xl:'flex'}} mb={'-7px'}>Cart &nbsp;&nbsp;</Text>
      <Icon as={TiShoppingCart}  mb={'-7px'} fontSize={{base: '16pt', md: '22pt'}}/>
      <Box 
        boxSize='1em'
        position={'absolute'} 
        top={'0'} 
        right={'0'} 
        border={'none'} 
        fontSize='13pt'
      >
        < ItemCount/>
      </Box>
    </Button>
   );
}
 
export default CartIcon;