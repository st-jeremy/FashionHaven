import {
  Table,
  Tr,
  Th
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';

const TotalPrice = () => {

  const cart = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return ( 
    <Table>
      <Tr>
        <Th width={900}></Th>
        <Th isNumeric fontWeight={'700'} fontSize={'20pt'}  p={1}>Grand Total: $ {getTotalPrice()}</Th>
      </Tr>
    </Table>
   );
}
 
export default TotalPrice;