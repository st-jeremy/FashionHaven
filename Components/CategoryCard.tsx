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

const CategoryCard = ({ name }) => {
  return ( 
    <Box>
      {/* <Image src={image} height={700} width={1300} alt='image'/>
      <Link href={`/category/${name.toLowerCase()}`}>
        <Box>
          <Heading>{name}</Heading>
          <p>SHOP NOW</p>
        </Box>
      </Link> */}
      
      <Accordion  
          defaultIndex={[0]}  
          allowToggle 
        >
      <AccordionItem>
            <h2>
              <AccordionButton>
              <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                // leftIcon={ <GiTravelDress />}
                variant='solid'
              >
                <Link href={`/category/${name}`}>{name}</Link>

                &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 

                <AccordionIcon  style={{position:'absolute', right: '10'}}/>
              </Button>
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} pl={6} color={'white'}>
              <List spacing={3}>
                if ({name} === Clothing){
                  <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Bedspoke
                  </ListItem>
                }else if ({name} === HeadWear){
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Suit
                </ListItem>
                } else{
                  'nothing'
                }


                {/* <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Bedspoke
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Suit
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Blazers and Jackets
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Hoodie and Sweatshirt
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Skirts
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Trousers
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Swim and Lounge Wears
                </ListItem>
                } */}
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      
    </Box>
   );
}
 
export default CategoryCard;