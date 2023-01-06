import ProductCard from '../Components/ProductCard';
import { getProducts } from './api/Products/index';
import Link from 'next/link';
import Head from 'next/head';
import { Box, Heading, Button } from '@chakra-ui/react';

const ShopPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Fashion Haven</title>
        <meta name="description" content="eCommerce Fashion Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
    
      <Box 
        maxWidth={'1400px'} 
        margin={'auto'} 
        p={5}  
        pt={'9rem'}
      >

        <Heading>All Results</Heading>

        <Link href='/'>
          <Button  
            bgColor={"black"} 
            color={'white'}
          >
            Back to Home
          </Button>
        </Link>

        <div 
          style={{
            display: 'grid', 
            flexDirection: 'column', 
            columnCount: '4', 
            width: '95%', 
            gridTemplateColumns: 'auto auto auto auto'
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Box>
    </>
  );
};
export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}