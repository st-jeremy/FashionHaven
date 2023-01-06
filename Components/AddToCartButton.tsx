import { 
  Box,
  Button,
  useToast
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';

const AddtoCartButton = ({ product }) => {

  const toast = useToast();
  const dispatch = useDispatch();

  const handleClick =() =>{
    dispatch(addToCart(product));
    toast({
      title: 'Cart.',
      description: "Item added successfully to cart.",
      status: 'success',
      duration: 900,
      isClosable: true,
    })
  };

  return ( 
    <Box textAlign={'center'}>
      <Button
        fontSize='sm' 
        onClick={handleClick}
        _hover={{bgColor: 'black', color: 'white'}}
      >
        Add to cart
      </Button>
    </Box>

   );
}
 
export default AddtoCartButton;