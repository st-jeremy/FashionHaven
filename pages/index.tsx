import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Slideshow from '../Components/Slideshow';
import Categories from '../Components/Categories';
import { Box } from '@chakra-ui/react';

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

      <main>
        <Box display={'flex'} padding={10}>
          <Categories />
          <Slideshow />
        </Box>
      </main>
    </>
  )
}
