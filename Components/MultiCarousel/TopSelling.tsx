import { 
  Box, 
  CardFooter, 
  Card, 
  Divider, 
  Heading, 
  Text, 
  Button,
  useToast
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { ProductList } from './ProductList'


const MultiCarousel = ({ product }) => {

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

  const dispatch = useDispatch();
  const toast = useToast();

  const handleClick =() =>{
    dispatch(addToCart(product));
    toast({
      title: 'Cart.',
      description: "Item added successfully to cart.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  };

  return ( 
    <Box m={'auto'} mt={5} maxWidth={'1400px'} bgColor={'blackAlpha.100'} p={5}>
      <Heading bg={'red.700'} color={'white'} pl={5}>Top Selling</Heading>
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
              <Box key={product.id} borderRadius={'md'} mb={'5rem'}>

                <Card m={5} width={250} height={490}>
                  <Image src={product.image} alt={product.name} width={700} height={300} />

                  <Divider />

                  <Heading size='md' bgColor={'white'} textAlign={'center'}>{product.name}</Heading>
                  <CardFooter bgColor={'white'} borderRadius={'0  0 13px 13px'}>
                    <Text color='blue.600' fontSize='xl'>
                      <b>${product.price}</b> <br />
                      <s>${~~product.price * 1.5}</s>
                    </Text>

                    <Button onClick={handleClick} colorScheme='red' position={'absolute'} right={'2.5'} p={1} fontSize='sm'>
                      Add to cart
                    </Button>
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
 
export default MultiCarousel;



