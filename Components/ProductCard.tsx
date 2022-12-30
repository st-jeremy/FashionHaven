import { 
  Box, 
  CardBody, 
  CardFooter, 
  Card, 
  Stack, 
  Divider, 
  Heading, 
  Text, 
  Button,
  useToast
} from '@chakra-ui/react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';

const ProductCard = ({ product }) => {

  const toast = useToast();

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

  const dispatch = useDispatch();
  return (
    <Box>
      <Card m={5} width={250} height={450} mb={50} boxShadow={'lg'}>

        <Box maxHeight={300} minHeight={300} >
          <Image src={product.image} alt={product.name} width={700} height={300} />
        </Box>
        <Divider />

        <Heading size='md' bgColor={'white'} textAlign={'center'}  pt={5}>{product.name}</Heading>

        <CardFooter bgColor={'white'} borderRadius={'0  0 13px 13px'}>
          <Text color='blue.600' fontSize='xl' >
            <b>${product.price}</b>
          </Text>

          <Button colorScheme='red' position={'absolute'} right={'2.5'} p={1} fontSize='sm' onClick={handleClick}>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProductCard;