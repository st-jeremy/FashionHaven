import { Button, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cart.slice';
import React from 'react';

const RemovalBtn = ({item}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleRemoval =() => {
    dispatch(removeFromCart(item.id)); 
    toast({
      title: 'Remove Item',
      description: "Item removed successfully.",
      status: 'error',
      duration: 700,
      isClosable: true,
    })
  }

  return ( 
    <Button 
      width={'35px'} 
      height={'35px'}  
      bgColor={'red'}  
      onClick={handleRemoval}
    >
      x
    </Button>
   );
}
 
export default RemovalBtn;