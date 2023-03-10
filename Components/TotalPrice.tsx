import { useSelector } from 'react-redux';
import { State } from './Types';

const TotalPrice = () => {

  const cart = useSelector((state: State) => state.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return ( 
    <>
      Grand Total: &nbsp; &nbsp; $ {getTotalPrice()}
    </>
   );
}
 
export default TotalPrice;