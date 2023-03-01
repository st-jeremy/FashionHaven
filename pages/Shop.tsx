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
            _hover={{bgColor: 'grey', color: 'black', border: '1px solid black'}}
          >
            Back to Home
          </Button>
        </Link>

        <Box 
          display= 'grid' 
          gridTemplateColumns={{base: 'auto', sm: 'auto auto auto', md: 'auto auto auto auto', lg: 'auto auto auto auto auto' }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </>
  );
};
export default ShopPage;

// Here, static generation where page content depends on the data, therefore getStaticProps() was used instead of getStaticPaths() because it was not a dynamic one. 
export async function getStaticProps() {

  // This, const res = await fetch('https://.../posts') was not used as we're not fetching from an external API.
  const products = await getProducts();


// Here, ShopPage receives products as prop as build time, used for pre-rendering.
  return { props: { products } };
}