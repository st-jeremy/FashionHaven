import { useRouter } from 'next/router';
import { AvatarBadge, Avatar  } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { State } from './Types';

const CartIcon = () => {

  const router = useRouter();
  const handleCartClick =() =>{
    router.push('/Cart')
  };

   // Selecting cart from global state
   const cart = useSelector((state: State) => state.cart);

   // Getting the count of items
  const getItemsCount = () => {
    return (
      cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    )
   };
  return ( 
  <>
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
  </> 
  );
}
 
export default CartIcon;