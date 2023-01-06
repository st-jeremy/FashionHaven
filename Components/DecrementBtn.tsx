import { Button, useToast, Tooltip } from '@chakra-ui/react';
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
    <Tooltip label="Decrease" aria-label='A tooltip' closeDelay={600} hasArrow arrowSize={15} bgColor='black' > 
      <Button 
        width={'35px'} 
        height={'35px'}  
        onClick={handleItemDecrement}
      >
        -
      </Button>
    </Tooltip>

   );
}
 
export default DecrementBtn;