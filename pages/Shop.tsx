import ProductCard from '../Components/ProductCard';
import { getProducts } from './api/Products/index';
import Link from 'next/link';
import { Box, Heading, Button } from '@chakra-ui/react';

interface product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
}

const ShopPage = ({ products }) => {
  return (
    <Box maxWidth={'1400px'} margin={'auto'} p={5}>

      <Heading>All Results</Heading>

      <Link href='/'><Button bgColor={"black"} color={'white'}>Back to Home</Button></Link>

      <div style={{display: 'grid', flexDirection: 'column', columnCount: '4', width: '95%', gridTemplateColumns: 'auto auto auto auto'}}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Box>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}