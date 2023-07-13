import { Box, HStack } from "@chakra-ui/react";
import Brands from "./Brands";
import Categories from "./Categories";
import Slideshow from "./Slideshow";
import Welcome from "./Welcome";

const Hero = () => {
  return ( 
    <HStack padding={5} m={'auto'} justifyContent={'center'} alignItems={'center'} maxWidth={'1400px'} mt={'6rem'}>
      <Categories />
      <Slideshow />
      <Brands />
      <Welcome />
    </HStack>
   );
}
 
export default Hero;