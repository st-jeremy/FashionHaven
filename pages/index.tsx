import Head from 'next/head'
import { Inter } from '@next/font/google';
import Slideshow from '../Components/Slideshow';
import Categories from '../Components/Categories';
import { Box } from '@chakra-ui/react';
import TopSelling from '../Components/MultiCarousel/TopSelling';
import Brands from '../Components/Brands';
import AllStock from '../Components/MultiCarousel/AllStock';
import Value from '../Components/Value';
import Hero from '../Components/Hero';

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

      <Box >
        <Hero />

        <TopSelling product={undefined} />

        <AllStock product={undefined} />

        <Value />
      </Box>
    </Box>
  )
}
