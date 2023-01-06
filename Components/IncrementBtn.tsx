import { Button, useToast, Tooltip } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { incrementQuantity } from '../redux/cart.slice';


const IncrementBtn = ({item}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleIncrement =() => {
    dispatch(incrementQuantity(item.id));
    toast({
      title: 'Add Item',
      description: "Item added successfully.",
      status: 'success',
      duration: 700,
      isClosable: true,
    })
  };

  return ( 
    <Tooltip label="Increase" aria-label='A tooltip' closeDelay={600} hasArrow arrowSize={15} bgColor='black' > 
      <Button 
        width={'35px'} 
        height={'35px'} 
        onClick={handleIncrement}
      >
        +
      </Button>
    </Tooltip>
   );
}
 
export default IncrementBtn;