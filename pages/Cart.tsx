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
  useToast
} from '@chakra-ui/react'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import Link from 'next/link';
import React from 'react';


const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const toast = useToast();
  const toastIdRef = React.useRef()

  const handleIncrement =() => {
    toast({
      title: 'Add Item',
      description: "Item added successfully.",
      status: 'success',
      duration: 700,
      isClosable: true,
    })
  };

  const handleDecrement =() => {
    toast({
      title: 'Subtract Item',
      description: "Item subtracted successfully.",
      status: 'warning',
      duration: 700,
      isClosable: true,
    })
  }
  const handleRemoval =() => {
    toast({
      title: 'Remove Item',
      description: "Item removed successfully.",
      status: 'error',
      duration: 700,
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
                          <Button 
                            width={'35px'} 
                            height={'35px'} 
                            bgColor={'blue'} 
                            onClick={() => {dispatch(incrementQuantity(item.id)); handleIncrement() }}
                          >
                            +
                          </Button>&nbsp;

                          <Button 
                            width={'35px'} 
                            height={'35px'}  
                            bgColor={'yellow'} 
                            onClick={() => {dispatch(decrementQuantity(item.id)); handleDecrement()}}
                          >
                            -
                          </Button>&nbsp;

                          <Button 
                            width={'35px'} 
                            height={'35px'}  
                            bgColor={'red'}  
                            onClick={() => {dispatch(removeFromCart(item.id)); handleRemoval() }}
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
                <Th isNumeric fontWeight={'700'} fontSize={'20pt'}  p={1}>Grand Total: $ {getTotalPrice()}</Th>
              </Tr>
            </Table>
          </Box>
      )}
      <Box mt={5}>
        <Link href='/Shop'><Button bgColor={"black"} color={'white'}>Continue Shopping</Button></Link>
      </Box>
    </Box>
  );
};

export default Cart;