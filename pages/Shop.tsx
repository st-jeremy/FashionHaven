import ProductCard from '../Components/ProductCard';
import { getProducts } from './api/Products/index';
import Link from 'next/link';
import { Box, Heading } from '@chakra-ui/react';

interface product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
}

const ShopPage = ({ products }) => {
  return (
    <Box>
      <Heading>All Results</Heading>

      <Link href='/'>Home</Link>

      <div>
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