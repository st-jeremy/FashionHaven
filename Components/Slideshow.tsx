import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "../public/milo.png";
import image2 from "../public/milo.png";
import image3 from "../public/milo.png";
import image4 from "../public/milo.png";
import image5 from "../public/milo.png";
import Image from "next/image";
// style was imported in index.css

import 'react-slideshow-image/dist/styles.css'
import { Box } from "@chakra-ui/react";
const images = [image1, image2, image3, image4, image5];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <Box 
      width={{base: '90%', md: '70%', lg: '750px', xl: '800px'}}
      margin={5}
    >
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <Image key={index} width={'1024'} height={700} src={each} alt='slide show'/>
        ))}
      </Zoom>
    </Box>
  );
};

export default Slideshow;