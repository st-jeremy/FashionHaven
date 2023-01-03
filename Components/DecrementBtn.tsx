import { Button, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { decrementQuantity } from '../redux/cart.slice';
import React from 'react';


const DecrementBtn = ({item}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleItemDecrement =() => {
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
      onClick={handleItemDecrement}
    >
      -
    </Button>

   );
}
 
export default DecrementBtn;