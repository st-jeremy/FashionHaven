import Head from 'next/head'
import { Inter } from '@next/font/google';
import Slideshow from '../Components/Slideshow';
import Categories from '../Components/Categories';
import { Box } from '@chakra-ui/react';
import TopSelling from '../Components/MultiCarousel/TopSelling';
import Brands from '../Components/Brands';
import AllStock from '../Components/MultiCarousel/AllStock';
import Value from '../Components/Value';

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
        <Box display={'flex'} flexDirection={{base: 'column', lg: 'row'}} padding={5} m={'auto'} maxWidth={'1400px'} mt={'6rem'}>
          <Box display={'flex'} flexDirection={'row'} width={'fit-content'}>
            <Categories />

            <Slideshow />
          </Box>

          <Brands />
        </Box>

        <TopSelling product={undefined} />

        <AllStock product={undefined} />

        <Value />
      </Box>
    </Box>
  )
}
