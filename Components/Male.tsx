import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure
} from '@chakra-ui/react'
import { useRouter } from 'next/router';


import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const Male = () => {

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
    <Box ml={'9'}>
      <Menu isOpen={isOpen}>
        <MenuButton
          px={3}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          border= 'none'
          width={120}
          _hover={{ bg: 'white' }}
          _expanded={{ bg: 'black', color: 'white' }}
          _focus={{ boxShadow: 'none' }}
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
        >
          Male &nbsp;
          {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          zIndex={1000}
          color={'black'}
        >
          <TableContainer display='flex' p={3}>
            <Image src= '/download.jpeg' width={300} height={300} alt='can' />

            <Table variant='unstyled' size="sm" ml={3}>
              <TableCaption color={'white'} bgColor={'black'} fontSize={'18pt'} placement={'top'} mb={5}>Male Fashion</TableCaption>

              <Thead>
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
                  <Td>Slides</Td>
                  <Td>Face Caps</Td>
                  <Td>Luggages & Bags</Td>
                </Tr>
                <Tr>
                  <Td>Suits</Td>
                  <Td>Loafers</Td>
                  <Td>Kagol Cap</Td>
                  <Td>Sunglasses</Td>
                </Tr>
                <Tr>
                  <Td>Blazers</Td>
                  <Td>Mules</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Hoodies & Sweatshirts</Td>
                  <Td>Black Tie</Td>
                </Tr>
              </Tbody>

              <TableCaption color={'red'}>Fashion Haven!  &nbsp; &nbsp; &nbsp; <i>Everything fashion...</i></TableCaption>
            </Table>
            
          </TableContainer>
         
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Male;