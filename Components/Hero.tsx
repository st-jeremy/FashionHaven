import { Box, HStack } from "@chakra-ui/react";
import Brands from "./Brands";
import Categories from "./Categories";
import Slideshow from "./Slideshow";
import Welcome from "./Welcome";

const Hero = () => {
  return ( 
    <HStack py={5} px={6} spacing={4} justifyContent={{base:'unset', xl:'center'}} maxWidth={'1400px'}>
      <Categories />
      <Slideshow />
      <Brands />
      <Welcome />
    </HStack>
   );
}
 
export default Hero;