// import { Box } from "@chakra-ui/react";

// const Cart = () => {
//   return ( 
//     <Box>
//       Cart
//     </Box>
//    );
// }
 
// export default Cart;

import Image from 'next/image';
// Importing hooks from react-redux
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import { Box } from '@chakra-ui/react';


const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <Box  >
         
          {cart.map((item) => (
            <Box key={item.id} display={'flex'}>
              <Box>
                <Image src={item.image} height="90" width="65" alt='cart'/>
              </Box>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              

              <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              
              
              <p>$ {item.quantity * item.price}</p>
            </Box>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </Box>
      )}
    </div>
  );
};

export default Cart;