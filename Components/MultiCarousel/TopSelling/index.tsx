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
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1025, min: 768 },
      items: 4
    },
    miniTablet:{
      breakpoint: { max: 767, min: 465 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return ( 
    <Box m={'auto'} mt={5} maxWidth={'1400px'} bgColor={'black.200'}>
      <Heading  fontSize={'24pt'} bg={'black'} color={'white'} p={2.5}>Top Selling</Heading>

      <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        customTransition="all 4.5"
        transitionDuration={50000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          ProductList && ProductList.map(product =>{
            return(
              <Box key={product.id} borderRadius={'md'}>

                <Card m={5} width={200} height={325} mb={10} boxShadow={'lg'}>
                   <Box maxHeight={200} minHeight={200} >
                      <Image src={product.image} alt={product.name} width={200} height={250} loading={'lazy'} />
                      <Text borderRadius={'none'} fontSize='10pt' position={'absolute'} top={'0'} right={'0'} bgColor={'yellow'} color={'black'} width={'fit-content'} p={1}>50% Off</Text>
                  </Box>

                  <Box bgColor={'white'} borderRadius={'0  0 13px 13px'} height={125}>
                    <Text bgColor={'white'} textAlign={'center'} pt={1}>{product.name}</Text>

                    <Box display={'inline-flex'} margin={'auto'} textAlign={'center'}>
                      <Text fontWeight={'bold'} ml={7} mr={2}>${product.price}</Text>
                      <Text color={'red'} fontSize={'sm'} mt={.5}><s>${~~product.price * 2}</s></Text>
                    </Box>
                    
                    <AddtoCartButton product={product} />
                  </Box>
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



