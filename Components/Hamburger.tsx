import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ImMenu3, ImMenu4 } from 'react-icons/im';

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
          fontSize={'30pt'}
        >
          {isOpen ? <ImMenu4 /> : <ImMenu3 />}
        </MenuButton>

        <MenuList
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          zIndex={1000}
          color={'black'}
        >
          <TableContainer display='flex' p={5}>
            <Box display={{base: 'none', lg: 'block'}}>
              <Image src= '/beach-hoodie.jpeg' width={450} height={500} alt='can' />
            </Box>

            <Table variant='unstyled' size='sm' ml={3} width={'90%'}>
              <TableCaption color={'white'} bgColor={'black'} fontSize={'18pt'} placement={'top'} mb={5}>Fashion Haven</TableCaption>
              
              <Thead >
                <Tr cursor={'pointer'}>
                  <Th onClick={ClothingClick} fontSize={'13pt'} _hover={{fontSize: '20pt'}}>Clothing</Th>
                  <Th onClick={FootWearClick} fontSize={'13pt'} _hover={{fontSize: '20pt'}}>Foot Wear</Th>
                  <Th onClick={HeadWearClick} fontSize={'13pt'} _hover={{fontSize: '20pt'}}>Head Wear</Th>
                  <Th onClick={AccessoriesClick} fontSize={'13pt'} _hover={{fontSize: '20pt'}}>Accessories</Th>
                </Tr>
              </Thead>

              <Tbody>

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
                  <Td>Swim Wear</Td>
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