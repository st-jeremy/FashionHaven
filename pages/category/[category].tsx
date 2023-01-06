import { useRouter } from 'next/router';
import ProductCard from '../../Components/ProductCard';
import { getProductsByCategory } from '../api/Products/[category]';
import { Heading, Box } from '@chakra-ui/react';
import Head from 'next/head';

const CategoryPage = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Fashion Haven</title>
        <meta name="description" content="eCommerce Fashion Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Box p={5} maxWidth={'1440px'} margin={'auto'} mt={'5rem'}>
        <Heading p={5}>Results for {router.query.category}</Heading>

        <div style={{display: 'grid', flexDirection: 'column', columnCount: '5', width: '100%', gridTemplateColumns: 'auto auto auto auto auto', margin: '0'}}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Box>
    </>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}