import Head from 'next/head'
import { Inter } from '@next/font/google';
import { Box } from '@chakra-ui/react';
import AllStock from '../Components/MultiCarousel/AllStock';
import TopSelling from '../Components/MultiCarousel/TopSelling';
import Value from '../Components/Value';
import Hero from '../Components/Hero';
import { ProductList } from '../Components/MultiCarousel/AllStock/ProductList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box margin={'auto'}>
      <Head>
        <title>Fashion Haven</title>
        <meta name="description" content="eCommerce Fashion Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Box m={'auto'}>
        <Hero />

        <TopSelling product={undefined} />

        <AllStock product={ProductList} />

        <Value />
      </Box>
    </Box>
  )
}
