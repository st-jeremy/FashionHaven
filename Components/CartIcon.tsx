import { GiShoppingCart } from 'react-icons/gi';
import { AvatarBadge, Box, Avatar  } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { useRouter } from 'next/router';

const CartIcon = () => {

  const router = useRouter();
  const handleCartClick =() =>{
    router.push('/Cart')
  }

  return ( 
    <Box _hover={{bgColor}}>
      <Avatar 
        icon={<GiShoppingCart  fontSize='25pt'/>}
        style={{
          width: '30px', 
          height: '50px', 
          cursor: 'pointer',
          margin: 'auto'
        }} 
        bgColor={'white'}
        onClick={handleCartClick}
      >
          <AvatarBadge boxSize='1em' bgColor={'red'} color={'white'} position={'absolute'} top={'0'} border={'none'} fontSize='12pt'>< ItemCount/></AvatarBadge>
        </Avatar>
    </Box>
   );
}
 
export default CartIcon;