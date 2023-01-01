import {
  Table,
  Tr,
  Th
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { State } from '../pages/Cart';

const TotalPrice = () => {

  const cart = useSelector((state: State) => state.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return ( 
    <Box>
    {/* <Table>
      <Tr>
        <Th width={900}></Th>
        
        <Th isNumeric fontWeight={'700'} fontSize={'20pt'}  p={1}>Grand Total: $ {getTotalPrice()}</Th>
      </Tr>
    </Table> */}
    {/* <Table>Grand Total: $ {getTotalPrice()}</Table> */}
    Grand Total: $ {getTotalPrice()}
    </Box>
   );
}
 
export default TotalPrice;