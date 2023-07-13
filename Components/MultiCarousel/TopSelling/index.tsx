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
      breakpoint: { max: 1023, min: 768 },
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
    <Box m={'auto'} maxWidth={'1400px'} bgColor={'black.200'}  p={0}>
      <Heading  fontSize={'24pt'} bg={'black'} color={'white'} py={2.5} px={10}>Top Selling</Heading>
      <Box width={{base: '100vw', md: '95vw', lg: '1400px'}} mt={5}>
        <Carousel 
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all 1.5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["miniTablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {
            ProductList && ProductList.map(product =>{
              return(
                <Box key={product.id} borderRadius={'md'} width={200} maxWidth={220} margin={'auto'} mb={10}>

                  <Card width={200} height={325} boxShadow={'lg'}>
                    <Box maxHeight={200} minHeight={200}>
                      <Image src={product.image} alt={product.name} width={200} height={250} loading={'lazy'} />

                      <Text borderRadius={'none'} fontSize='10pt' position={'absolute'} top={'0'} right={'0'} bgColor={'yellow'} color={'black'} width={'fit-content'} p={1}>
                        50% Off
                      </Text>
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
    </Box>
   );
}
 
export default MultiCarousel;



