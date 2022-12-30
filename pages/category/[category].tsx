import { useRouter } from 'next/router';
import ProductCard from '../../Components/ProductCard';
import { getProductsByCategory } from '../api/Products/[category]';
import { Heading, Box } from '@chakra-ui/react';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <Box p={5} maxWidth={'1400px'} margin={'auto'}>
      <Heading p={5}>Results for {router.query.category}</Heading>

      <div style={{display: 'grid', flexDirection: 'column', columnCount: '4', width: '95%', gridTemplateColumns: 'auto auto auto auto'}}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Box>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}