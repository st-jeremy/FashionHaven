import { Box } from "@chakra-ui/react";
import Brands from "./Brands";
import Categories from "./Categories";
import Slideshow from "./Slideshow";

const Hero = () => {
  return ( 
    <Box display={'flex'} flexDirection={'row'} padding={5} m={'auto'} justifyContent={'center'} alignItems={'center'} maxWidth={'1400px'} mt={'6rem'}>
      <Categories />
      <Slideshow />
      <Brands />
    </Box>
   );
}
 
export default Hero;