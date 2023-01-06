import { Button, useToast, Tooltip } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cart.slice';
import React from 'react';

const RemovalBtn = ({item}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleItemRemoval =() => {
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
    <Tooltip label="Remove" aria-label='A tooltip' closeDelay={600} hasArrow arrowSize={15} bgColor='black' > 
      <Button 
        width={'35px'} 
        height={'35px'}  
        onClick={handleItemRemoval}
      >
        x
      </Button>
    </Tooltip>
   );
}
 
export default RemovalBtn;