import {
  Menu,
  MenuButton,
  MenuList,
  Box,
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


import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Female = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const ClothingClick =() =>{
    router.push('./Categories/Clothing')
  };
  const AccessoriesClick =() =>{
    router.push('./Categories/Accessories')
  };
  const FootWearClick =() =>{
    router.push('./Categories/FootWear')
  };
  const HeadWearClick =() =>{
    router.push('./Categories/HeadWear')
  }

  return ( 
    <Box>
      <Menu  isOpen={isOpen}>
        <MenuButton
          px={4}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          border= 'none'
          width={150}
          // borderWidth='1px'
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'black', color: 'white' }}
          _focus={{ boxShadow: 'none' }}
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
        >
          Female &nbsp;
          {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          zIndex={1000}
          color={'black'}
        >
          <TableContainer display='flex' p={5}>
              <Image src= '/download.jpeg' width={450} height={500} alt='can' />

              <Table variant='unstyled' size='sm' ml={3}>
                <TableCaption color={'white'} bgColor={'black'} fontSize={'18pt'} placement={'top'} mb={5}>Female Fashion</TableCaption>
                
                <Thead >
                  <Tr>
                    <Th onClick={ClothingClick} fontSize={'13pt'}>Clothing</Th>
                    <Th onClick={AccessoriesClick} fontSize={'13pt'}>Foot Wear</Th>
                    <Th onClick={HeadWearClick} fontSize={'13pt'}>Head Wear</Th>
                    <Th onClick={FootWearClick} fontSize={'13pt'}>Accessories</Th>
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
 
export default Female;