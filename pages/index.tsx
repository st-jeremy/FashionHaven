import { Box } from '@chakra-ui/react';
import AllStock from '../Components/MultiCarousel/AllStock';
import TopSelling from '../Components/MultiCarousel/TopSelling';
import Value from '../Components/Value';
import Hero from '../Components/Hero';

export default function Home() {
  return (
    <Box m={'auto'}>
      <Hero />

      <TopSelling />

      <AllStock />

      <Value />
    </Box>
  )
};
