import { useSelector } from 'react-redux';
import { State } from './Types';

const ItemCount = () => {
  
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
 
export default ItemCount;