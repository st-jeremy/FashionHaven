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
import { MdCheckCircle } from 'react-icons/md'

const CategoryCard = ({ name }) => {
  return ( 
    <Box>
      <Accordion  
        // defaultIndex={[0]}  
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
              <AccordionIcon  style={{position:'absolute', right: '10'}}/>
            </Button>
            </AccordionButton>
          </Heading>

          <AccordionPanel pb={4} pl={6} color={'white'}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Male
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Female
              </ListItem>
              </List>
            </AccordionPanel>

          </AccordionItem>
        </Accordion>
      
    </Box>
   );
}

export default CategoryCard;
