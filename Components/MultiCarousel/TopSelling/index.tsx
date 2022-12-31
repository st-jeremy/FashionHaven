import { 
  Box, 
  CardFooter, 
  Card, 
  Divider, 
  Heading, 
  Text, 
  AvatarBadge,
  Avatar
} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { ProductList } from '../TopSelling/ProductList'
import AddtoCartButton from '../../AddToCartButton';


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

  return ( 
    <Box m={'auto'} mt={5} maxWidth={'1400px'} bgColor={'red'} p={5}>
      <Heading bg={'black'} color={'white'} pl={5}>Top Selling</Heading>

      <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
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
              <Box key={product.id} borderRadius={'md'}>

                <Card m={5} width={250} height={490}>
                  <Box minHeight={365} bgColor={'white'} margin={'auto'}>
                    <Image src={product.image} alt={product.name} width={700} height={365} />
                    <Text borderRadius={'none'} fontSize='12pt' position={'absolute'} top={'0'} bgColor={'yellow'} color={'black'} width={'fit-content'} p={2}>50% Off</Text>
                  </Box>

                  <Divider />

                  <Heading size='md' bgColor={'white'} textAlign={'center'}>{product.name}</Heading>
                  <CardFooter bgColor={'white'} borderRadius={'0  0 13px 13px'}>
                    <Text color='blue.600' fontSize='xl'>
                      <b>${product.price}</b> <br />
                      <Text color={'red'} fontSize={'sm'}><s>${~~product.price * 2}</s></Text>
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
 
export default MultiCarousel;



