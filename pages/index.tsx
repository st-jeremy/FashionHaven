import Head from 'next/head'
import { Inter } from '@next/font/google';
import Slideshow from '../Components/Slideshow';
import Categories from '../Components/Categories';
import { Box } from '@chakra-ui/react';
import MultiCarousel from '../Components/MultiCarousel/TopSelling';
import Brands from '../Components/Brands';
import LimitedStock from '../Components/MultiCarousel/AllStocks';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box margin={'auto'}>
      <Head>
        <title>Fashion Haven</title>
        <meta name="description" content="eCommerce Fashion Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Box display={'flex'} flexDirection={{base: 'column', lg: 'row'}} paddingTop={4} m={'auto'} maxWidth={'1400px'}>
          <Box display={'flex'} flexDirection={'row'} >
            <Categories />

            <Slideshow />
          </Box>

          <Brands />
        </Box>

        <MultiCarousel />

        <LimitedStock />
      </Box>
    </Box>
  )
}
