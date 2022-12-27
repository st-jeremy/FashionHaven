import ProductCard from '../Components/ProductCard';
import { getProducts } from './api/Products/index';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

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
      <h1>All Results</h1>

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