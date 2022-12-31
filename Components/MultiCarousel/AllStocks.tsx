import { 
  Box, 
  CardBody, 
  CardFooter, 
  Card, 
  Stack, 
  Divider, 
  Heading, 
  Text, 
  Button,
  useToast
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';
import { ProductList } from './ProductList';
import AddtoCartButton from '../AddToCartButton';

const AllStock = ({product}) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return ( 
    <Box bgColor={'blackAlpha.100'} maxWidth={'1400px'} m={'auto'} p={5}>

      <Box  bgColor={'red.700'} display={'flex'} color={'white'}>
        <Heading pl={5} color={'white'}>All Stock</Heading>
        <Link href='/Shop'>
          <Button  bgColor={'red.700'} position={'absolute'} right={'13rem'} p={1}>View All</Button>
        </Link>
      </Box>

      <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          ProductList && ProductList.map(product =>{
            return(
              <Box key={product.id} borderRadius={'md'} >
                <Card m={5} width={250} height={490} mb={35}>

                  <Image src={product.image} alt={product.name} width={700} height={300} />

                  <Divider />

                  <Heading size='md' bgColor={'white'} textAlign={'center'}>{product.name}</Heading>
                  <CardFooter bgColor={'white'} borderRadius={'0  0 13px 13px'}>
                    <Text color='blue.600' fontSize='xl'>
                      <b>${product.price}</b>
                    </Text>

                    <AddtoCartButton product={product} />
                  </CardFooter>
                </Card>

              </Box>
            )
          })
        } 
      </Carousel>
    </Box>
   );
}
 
export default AllStock;
