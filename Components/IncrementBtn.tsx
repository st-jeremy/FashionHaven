import { Button, useToast } from '@chakra-ui/react'
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
    <Button 
      width={'35px'} 
      height={'35px'} 
      bgColor={'blue'} 
      onClick={handleIncrement}
    >
      +
    </Button>
   );
}
 
export default IncrementBtn;