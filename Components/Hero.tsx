import { Box } from "@chakra-ui/react";
import Brands from "./Brands";
import Categories from "./Categories";
import Slideshow from "./Slideshow";

const Hero = () => {
  return ( 
    <Box display={'flex'} flexDirection={{base: 'column', lg: 'row'}} padding={5} m={'auto'} maxWidth={'1400px'} mt={'6rem'}>
      <Box display={'flex'} flexDirection={'row'} width={'100vw'} >
        <Categories />
        <Slideshow />
      </Box>
      

      <Brands />
    </Box>
   );
}
 
export default Hero;