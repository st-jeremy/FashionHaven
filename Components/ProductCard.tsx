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
import { BiBox } from 'react-icons/bi';

const ProductCard = ({ product }) => {

  return (
    <Card m={5} width={200} height={325} mb={10} boxShadow={'lg'}>

      <Box maxHeight={200} minHeight={200} >
        <Image src={product.image} alt={product.name} width={200} height={250} priority />
      </Box>

      <Divider />

      <Box bgColor={'white'} borderRadius={'0  0 13px 13px'}>

        <Text bgColor={'white'} textAlign={'center'} pt={1}>{product.name}</Text>
        <Text fontWeight={'bold'}  textAlign={'center'} >${product.price}</Text>

        <AddtoCartButton product={product} />
      </Box>
    </Card>
  );
};

export default ProductCard;