import { Button } from "@chakra-ui/react";
import Link from 'next/link';

const CategoryCard = ({ name, link }: { name: string, link:any }) => {
  return ( 
    <Button
      size='md'
      height='48px'
      width='200px'
      border='2px'
      variant='solid'
      mb={[2, 4]}
    >
      <Link href={`/category/${link}`}>{name}</Link>
    </Button>
   );
}

export default CategoryCard;
