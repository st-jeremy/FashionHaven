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
} from '@chakra-ui/react'
import {GiTravelDress, GiConverseShoe, GiBilledCap} from 'react-icons/gi'
import { FiWatch } from 'react-icons/fi'
import {MdCheckCircle} from 'react-icons/md'
import Link from 'next/link';

const Categories = () => {

  return ( 
    <Box display={'flex'} flexDirection={'column'} width={'fit-content'} bgColor={'blackAlpha.900'} ml={3} p={3}>

      <Heading fontSize={'2xl'} m={5} color={'white'}>Categories</Heading>

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
                leftIcon={ <GiTravelDress />}
                variant='solid'
              >
                <Link href='/Categories/Clothing'>Clothing</Link>
                &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 
                <AccordionIcon  style={{position:'absolute', right: '10'}}/>
              </Button>
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} pl={6} color={'white'}>
              <List spacing={3}>
                <ListItem>
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
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
              <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                leftIcon={<GiConverseShoe />} 
                variant='solid'
              >
                <Link href='/Categories/FootWear'>FootWear</Link>
                &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
                <AccordionIcon  style={{position:'absolute', right: '10'}}/>
              </Button>
              </AccordionButton>
            </h2>
            
            <AccordionPanel pb={4} pl={6}  color={'white'}>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Heels
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Flats
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Sneakers
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Slides
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Loafers
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Mules
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Black Tie
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Button
                  size='md'
                  height='48px'
                  width='200px'
                  border='2px'
                  leftIcon={<GiBilledCap />} 
                  variant='solid'
                >
                  <Link href='/Categories/HeadWear'>HeadWear</Link>
                  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; 
                  <AccordionIcon  style={{position:'absolute', right: '10'}}/>
                </Button>
              </AccordionButton>
            </h2>
            
            <AccordionPanel pb={4} pl={6}  color={'white'}>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Hats
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Scarfs
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Kagol Caps
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Face Caps
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
              <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                leftIcon={<FiWatch />} 
                variant='solid'
              >
                <Link href='/Categories/Accessories'>Accessories</Link>
                &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
                <AccordionIcon style={{position:'absolute', right: '10'}}/>
              </Button>
              </AccordionButton>
            </h2>
            
            <AccordionPanel pb={4} pl={6}  color={'white'}>
            <List spacing={2}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Sunglasses
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Wristwatches
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Bags and Luggages
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Purses
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Box>
   );
}
 
export default Categories;