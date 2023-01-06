import { GiShoppingCart } from 'react-icons/gi';
import { AvatarBadge, Button, Box, Avatar  } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { useRouter } from 'next/router';

const CartIcon = () => {

  const router = useRouter();
  const handleCartClick =() =>{
    router.push('/Cart')
  }

  return ( 
    <Button 
      bgColor={'black'}
      color={'white'}
      _hover={{bgColor: 'white', color: 'black'}} 
      onClick={handleCartClick}
    >
      <GiShoppingCart  fontSize='26pt'/>
      <Box 
        boxSize='1em' 
        color={'white'} 
        position={'absolute'} 
        top={'0'} 
        right={'2'} 
        border={'none'} 
        fontSize='13pt'
        _hover={{bgColor:}}
      >
        < ItemCount/>
      </Box>
    </Button>
   );
}
 
export default CartIcon;