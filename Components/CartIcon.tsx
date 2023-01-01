import { useRouter } from 'next/router';
import { AvatarBadge, Avatar  } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { State } from './Types';

const CartIcon = () => {
  
  const cart = useSelector((state: State) => state.cart);

  const getItemsCount = () => {
    return (
      cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    )
   };
  return ( 
  <>
    {getItemsCount()}
  </> 
  );
}
 
export default CartIcon;