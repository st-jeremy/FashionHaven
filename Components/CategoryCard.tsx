import { Box, Heading } from "@chakra-ui/react";
import Link from 'next/link';
import Image from 'next/image';

const CategoryCard = ({ image, name }) => {
  return ( 
    <Box>
      <Image src={image} height={700} width={1300} alt='image'/>
      <Link href={`/category/${name.toLowerCase()}`}>
        <Box>
          <Heading>{name}</Heading>
          <p>SHOP NOW</p>
        </Box>
      </Link>
      
    </Box>
   );
}
 
export default CategoryCard;