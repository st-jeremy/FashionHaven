import { 
  Box,
  Button,
} from "@chakra-ui/react";
import Link from 'next/link';

const CategoryCard = ({ name }) => {
  return ( 
    <Box>
      <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        variant='solid'
      >
        <Link href={`/category/${name}`}>{name}</Link>
      </Button>
    </Box>
   );
}

export default CategoryCard;
