import { useRouter } from 'next/router';
import ProductCard from '../../Components/ProductCard';
import { getProductsByCategory } from '../api/products/[category]';
import { Heading, Box } from '@chakra-ui/react';
import Head from 'next/head';

const CategoryPage = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.category} | Fashion Haven</title>
      </Head>

      <Box p={5} maxWidth={'1440px'} margin={'auto'} mt={'5rem'} mb={'3rem'} width={{base: '100vw'}}>
        <Heading textAlign={'center'} p={5}>Results for {router.query.category}</Heading>

        <Box display= 'grid' gridTemplateColumns={{base: 'auto', sm: 'auto auto auto', md: 'auto auto auto auto', lg: 'auto auto auto auto auto' }}>
          {products.map((product) => (
            <Box key={product.id} margin={'auto'} p={0}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CategoryPage;


// Here, Server-side Rendering: The HTML is generated on each request; is used, not static generation.
export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);

  return { props: { products } };
}