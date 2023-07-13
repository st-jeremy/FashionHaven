import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Heading,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  Divider,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ImMenu3, ImMenu4 } from 'react-icons/im';

const CatBtn = ({name, onClick}: { name:string, onClick:any }) => {
  return ( 
    <Button width={'10rem'} mb={3} bgColor={'black'} color={'white'} _hover={{ border: '1px solid black', bgColor: 'white', color: 'black'}}  onClick={onClick}>
      {name}
    </Button> 
  );
};
 
const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const ClothingClick =() =>{
    router.push('/category/Clothing')
  };

  const AccessoriesClick =() =>{
    router.push('/category/Accessories')
  };

  const FootWearClick =() =>{
    router.push('/category/FootWear')
  };

  const HeadWearClick =() =>{
    router.push('/category/HeadWear')
  }

  return ( 
    <Box margin={'auto'}>
      <Menu  isOpen={isOpen}>
        <MenuButton
          as={Button}
          bgColor={'black'}
          transition='all 0.2s'
          borderRadius='md'
          border= 'none'
          _hover={{ bgColor: 'black', color: 'white'}}
          _expanded={{ bgColor: 'white', color: 'black'}}
          _focus={{ boxShadow: 'none' }}
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          fontSize={{base: '18pt', md:'22pt', lg: '30pt'}}
          padding={{base: '2', md: 'auto'}}
        >
          {isOpen ? <ImMenu4 /> : <ImMenu3 />}
        </MenuButton>

        <MenuList
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          zIndex={1000}
          color={'black'}
          marginTop={'-.4rem'}
        >
          <VStack display={{base: 'flex', lg: 'none'}} p={5}>
            <Heading fontSize={{base:'16pt', lg:'unset'}}>Categories</Heading>
            <Divider />

            <CatBtn name='Clothing' onClick={ClothingClick} />
            <CatBtn name='Foot Wear' onClick={FootWearClick} />
            <CatBtn name='Head Wear' onClick={HeadWearClick} />
            <CatBtn name='Accessories' onClick={AccessoriesClick} />
          </VStack>


          <TableContainer display={{base: 'none', lg: 'flex'}} p={5} maxW={{lg:'87%', xl:'unset'}}>
            <Box display={{base: 'none', lg: 'flex'}}>
              <Image src= '/beach-hoodie.jpeg' width={450} height={500} alt='Category image' />
            </Box>

            <Table variant='unstyled' size='sm' ml={3} width={'90%'}>
              <TableCaption color={'white'} bgColor={'black'} fontSize={'18pt'} placement={'top'} mb={5}>Fashion Haven</TableCaption>
              
              <Thead >
                <Tr cursor={'pointer'}>
                  <Th onClick={ClothingClick}>
                    <Button variant={'ghost'} border={'1px solid black'}>
                      Clothing
                    </Button>
                  </Th>
                  <Th onClick={FootWearClick}>
                    <Button variant={'ghost'} border={'1px solid black'}>
                      Foot Wear
                    </Button>
                  </Th>
                  <Th onClick={HeadWearClick}>
                    <Button variant={'ghost'} border={'1px solid black'}>
                      Head Wear
                    </Button>
                  </Th>
                  <Th onClick={AccessoriesClick}>
                    <Button variant={'ghost'} border={'1px solid black'}>
                      Accessories
                    </Button>
                  </Th>
                </Tr>
              </Thead>

              <Tbody fontSize={'10pt'}>

                <Tr>
                  <Td>Bespoke</Td>
                  <Td>Heels</Td>
                  <Td>Hats</Td>
                  <Td>Sunglasses</Td>
                </Tr>
                <Tr>
                  <Td>Tops</Td>
                  <Td>Flat</Td>
                  <Td>Scarfs</Td>
                  <Td>Wristwatches</Td>
                </Tr>
                <Tr>
                  <Td>Trousers</Td>
                  <Td>Sneakers</Td>
                  <Td></Td>
                  <Td>Bags</Td>
                </Tr>
                <Tr>
                  <Td>Skirts</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>Purses</Td>
                </Tr>
                <Tr>
                  <Td>Hoodies & Sweatshirts</Td>
                </Tr>
                <Tr>
                  <Td>Jackets & Blazers</Td>
                </Tr>
                <Tr>
                  <Td>Lounge Wear</Td>
                </Tr>
              
              </Tbody>

              <TableCaption color={'red'} >Fashion Haven!  &nbsp; &nbsp; <i>Everything fashion...</i></TableCaption>
            </Table>
              
          </TableContainer>


        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Hamburger;