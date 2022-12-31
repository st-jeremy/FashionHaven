import { Button, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { decrementQuantity } from '../redux/cart.slice';
import React from 'react';


const DecrementBtn = ({item}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDecrement =() => {
    dispatch(decrementQuantity(item.id)); 
    toast({
      title: 'Subtract Item',
      description: "Item subtracted successfully.",
      status: 'warning',
      duration: 700,
      isClosable: true,
    })
  }

  return ( 
    <Button 
      width={'35px'} 
      height={'35px'}  
      bgColor={'yellow'} 
      onClick={handleDecrement}
    >
      -
    </Button>

   );
}
 
export default DecrementBtn;