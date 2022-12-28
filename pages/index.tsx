import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Slideshow from '../Components/Slideshow';
import Categories from '../Components/Categories';
import { Box } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import MultiCarousel from '../Components/MultiCarousel/MultiCarousel';
import Brands from '../Components/Brands';
import LimitedStock from '../Components/MultiCarousel/LimitedStocks';
import Link from 'next/link';
import SubCategory from '../Components/SubCategory';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fashion Haven</title>
        <meta name="description" content="eCommerce Fashion Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bgColor={'blackAlpha.300'} >
        <Box display={'flex'} paddingTop={4} m={'auto'}>
          <Categories />

          <Slideshow />

          <Brands />
        </Box>

        <SubCategory />

        <MultiCarousel />

        <LimitedStock />
      </Box>
    </>
  )
}
