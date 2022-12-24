import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box
} from '@chakra-ui/react'
import {
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


import { ChevronDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const Male = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return ( 
    <Box>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          borderWidth='1px'
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.400' }}
          _focus={{ boxShadow: 'outline' }}
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
        >
          Male<ChevronDownIcon />
        </MenuButton>

        <MenuList>
          <TableContainer display='flex' p={2}>
            <Image src= '/milo.png' width={450} height={500} alt='can' />

            <Table variant='unstyled'>
              <TableCaption color={'red'}>Fashion Haven!  &nbsp; &nbsp; &nbsp; <i>Everything fashion...</i></TableCaption>

              <Thead>
                <Tr >
                  <Th></Th>
                  <Th textAlign={'center'}>Male Fashion</Th>
                </Tr>

                <Tr>
                  <Th>Clothing</Th>
                  <Th>Foot Wear</Th>
                  <Th>Head Wear</Th>
                  <Th>Accessories</Th>
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