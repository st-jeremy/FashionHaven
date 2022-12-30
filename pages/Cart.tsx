import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  TableContainer,
  Box,
  Tfoot,
  useToast
} from '@chakra-ui/react'

import Image from 'next/image';
// Importing hooks from react-redux
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import { GiShoppingCart } from 'react-icons/gi'
import { title } from 'process';


const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const toast = useToast();

  const handleIncrement =() => {
    toast({
      title: 'Add Item',
      description: "Item added successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  const handleDecrement =() => {
    toast({
      title: 'Subtract Item',
      description: "Item subtracted successfully.",
      status: 'warning',
      duration: 3000,
      isClosable: true,
    })
  }
  const handleRemoval =() => {
    toast({
      title: 'Add Item',
      description: "Item removed successfully.",
      status: 'danger',
      duration: 3000,
      isClosable: true,
    })
  }

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <Box p={5} maxWidth={'1400px'} margin={'auto'}>
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
                        <Td  p={15} width={225}>
                          <Button 
                            width={'35px'} 
                            height={'35px'} 
                            bgColor={'blue'} 
                            onClick={() => {dispatch(incrementQuantity(item.id)); increment() }}
                          >
                            +
                          </Button>&nbsp;

                          <Button 
                            width={'35px'} 
                            height={'35px'}  
                            bgColor={'yellow'} 
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </Button>&nbsp;

                          <Button 
                            width={'35px'} 
                            height={'35px'}  
                            bgColor={'red'}  
                            onClick={() => dispatch(removeFromCart(item.id)) }
                          >
                            x
                          </Button>
                        </Td>
                        <Td isNumeric p={15} width={150}>$ {item.quantity * item.price}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
              </Box>
            ))}

            <Table>
              <Tr>
                <Th width={900}></Th>
                <Th isNumeric fontWeight={'700'} fontSize={'20pt'}>Grand Total: $ {getTotalPrice()}</Th>
              </Tr>
            </Table>
          </Box>
      )}
    </Box>
  );
};

export default Cart;