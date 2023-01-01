import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  Heading,
  TableContainer,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import IncrementBtn from '../Components/IncrementBtn';
import DecrementBtn from '../Components/DecrementBtn';
import RemovalBtn from '../Components/RemovalBtn';
import TotalPrice from '../Components/TotalPrice';
import { State } from '../Components/Types';

const Cart = ({ item }) => {

  const cart = useSelector((state: State) => state.cart);


  return (
    <Box p={5} maxWidth={'1400px'} margin={'auto'} mt={'6rem'}>
      {cart.length === 0 ? (
        <Heading textAlign={'center'}> Your Cart is Empty! </Heading>
      ) : (
          <Box >
            <Heading textAlign={'center'}> Your Cart</Heading>
            <TableContainer>
              <Table >
                <Thead fontWeight={'extrabold'}>
                  <Tr>
                    <Th  p={15} width={70}>Image</Th>
                    <Th  p={15} width={270}>Name</Th>
                    <Th isNumeric p={15} width={150}>Price</Th>
                    <Th isNumeric p={15} width={145}>Quantity</Th>
                    <Th textAlign={'center'} p={15} width={250}>Action</Th>
                    <Th isNumeric p={15} width={150}>Total</Th>
                  </Tr>
                </Thead>
                </Table>
            </TableContainer>
          
            {cart.map((item) => (
              <Box key={item.id} display={'flex'}>
                <Table>
                    <Tbody fontSize={'sm'}>
                      <Tr>
                        <Td p={15} width={70}><Image src={item.image} height="90" width="65" alt='cart'/></Td>
                        <Td  p={15} width={270}>{item.name}</Td>
                        <Td  p={15} isNumeric width={150}>$ {item.price}</Td>
                        <Td  p={15} textAlign={'center'} width={145}>{item.quantity}</Td>
                        <Td textAlign={'center'} p={15} width={225}>
                          <IncrementBtn item={item} /> &nbsp;
                          <DecrementBtn item={item} /> &nbsp;
                          <RemovalBtn item={item} />
                        </Td>
                        <Td isNumeric p={15} width={150}>$ {item.quantity * item.price}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
              </Box>
            ))}

            <Table> 
              <Tr textAlign={'right'}>
                <TotalPrice />
              </Tr>
            </Table>
            
          </Box>
      )}
      <Box mt={15} textAlign={'center'}>
        <Link href='/Shop'><Button bgColor={"black"} color={'white'}>Continue Shopping</Button></Link>
      </Box>
    </Box>
  );
};

export default Cart;