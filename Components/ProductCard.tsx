import { 
  Box, 
  CardFooter, 
  Card, 
  Divider, 
  Heading, 
  Text
} from '@chakra-ui/react';
import Image from 'next/image';
import AddtoCartButton from './AddToCartButton';

const ProductCard = ({ product }) => {

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

          <AddtoCartButton product={product} />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ProductCard;