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
} from '@chakra-ui/react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  return (
    <div>
      <Card m={5} width={250} height={490} mb={35}>

        <Image src={product.image} alt={product.name} width={700} height={300} />

        <Divider />

        <Heading size='md' bgColor={'white'} textAlign={'center'}>{product.name}</Heading>
        <CardFooter bgColor={'white'} borderRadius={'0  0 13px 13px'}>
          <Text color='blue.600' fontSize='xl'>
            <b>${product.price}</b>
          </Text>

          <Button colorScheme='red' position={'absolute'} right={'2.5'} p={1} fontSize='sm' onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;