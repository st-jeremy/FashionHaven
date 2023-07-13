import { 
  Box, 
  Card, 
  Heading, 
  Text, 
  Button,
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';
import { ProductList } from './ProductList';
import AddtoCartButton from '../../AddToCartButton';

const AllStock = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 1536, min: 1440 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1439, min: 1280 },
      items: 5
    },
    miniDesktop: {
      breakpoint: { max: 1279, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 3
    },
    miniTablet:{
      breakpoint: { max: 767, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 425 },
      items: 2
    },
    miniMobile: {
      breakpoint: { max: 424, min: 0 },
      items: 1
    }
  };

  return ( 
    <Box m={'auto'} mt={5} bgColor={'black.200'} maxW={1400} p={0}>
      <Box bgColor={'black'} display={'flex'} color={'white'}  width={'100vw'} maxW={1440} p={0} py={2.5} position={'relative'}>
        <Heading fontSize={'24pt'} color={'white'} px={10}>All Stock</Heading>
        <Link href='/shop'>
          <Button bgColor={'black'} position={'absolute'} right={5} _hover={{textDecoration:'underline', bgColor: 'white', color: 'black'}}>
            View All
          </Button>
        </Link>
      </Box>

      <Box width={'100vw'} maxW={1440} mt={5}>
        <Carousel 
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 1.5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {
            ProductList && ProductList.map(product =>{
              return(
                <Box key={product.id} borderRadius={'md'} width={200} maxWidth={220} margin={'auto'} mb={10}>

                  <Card width={200} height={325} boxShadow={'lg'}>
                    <Box maxHeight={200} minHeight={200} width={"200"} height={"auto"}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={200} 
                        height={250}
                        loading={'lazy'}
                        style={{ objectFit: 'cover', width:"auto", height: "auto" }}
                      />
                    </Box>

                    <Box bgColor={'white'} borderRadius={'0  0 13px 13px'} height={125}>
                      <Text bgColor={'white'} textAlign={'center'} pt={1}>{product.name}</Text>

                      <Text fontWeight={'bold'}textAlign={'center'}>${product.price}</Text>
                      
                      <AddtoCartButton product={product} />
                    </Box>
                  </Card>

                </Box>
              )
            })
          } 
        </Carousel>
      </Box>
    </Box>
   );
}
 
export default AllStock;
