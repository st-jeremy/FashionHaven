import { 
  Box, 
  Heading,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Link from 'next/link';
import Image from 'next/image';

import {MdCheckCircle} from 'react-icons/md'
import HeadWear from '../pages/Categories/HeadWear';
import Clothing from '../pages/Categories/Clothing';

const CategoryCard = ({ name }) => {
  return ( 
    <Box>
      <Accordion  
        defaultIndex={[0]}  
        allowToggle 
      >
        <AccordionItem>
          <Heading>
            <AccordionButton>
            <Button
              size='md'
              height='48px'
              width='200px'
              border='2px'
              variant='solid'
            >
              <Link href={`/category/${name}`}>{name}</Link>
            </Button>
            </AccordionButton>
          </Heading>

          </AccordionItem>
        </Accordion>
      
    </Box>
   );
}

export default CategoryCard;
