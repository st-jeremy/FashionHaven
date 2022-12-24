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
    <Box>
      <Menu isOpen={isOpen}>
        <MenuButton
          px={3}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          border= 'none'
          width={120}
          // borderWidth='1px'
          _hover={{ bg: 'black' }}
          _expanded={{ bg: 'black', color: 'white' }}
          _focus={{ boxShadow: 'outline' }}
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
        >
          Male &nbsp;
          {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
        >
          <TableContainer display='flex' p={2}>
            <Image src= '/milo.png' width={300} height={300} alt='can' />

            <Table variant='unstyled' size="sm">
              <TableCaption color={'red'}>Fashion Haven!  &nbsp; &nbsp; &nbsp; <i>Everything fashion...</i></TableCaption>

              <Thead>
                <Tr >
                  <Th></Th>
                  <Th textAlign={'center'}>Male Fashion</Th>
                </Tr>

                <Tr>
                  <Th onClick={ClothingClick}>Clothing</Th>
                  <Th onClick={AccessoriesClick}>Foot Wear</Th>
                  <Th onClick={HeadWearClick}>Head Wear</Th>
                  <Th onClick={FootWearClick}>Accessories</Th>
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
              <Tfoot>
               
              </Tfoot>
            </Table>
            
          </TableContainer>
         
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Male;