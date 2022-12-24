import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Divider,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Image from 'next/image';

import { ChevronDownIcon } from '@chakra-ui/icons';

const Female = () => {
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
        >
          Female <ChevronDownIcon />
        </MenuButton>

        <MenuList>
        <TableContainer display='flex' p={2}>
            <Image src= '/milo.png' width={450} height={500} alt='can' />

            <Table variant='simple'>
              <TableCaption color={'red'}>Fashion Haven!  &nbsp; &nbsp; &nbsp; <i>Everything fashion...</i></TableCaption>
              <Thead>
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
                  <Td>Dresses</Td>
                  <Td>Heels</Td>
                  <Td>Kagol Cap</Td>
                  <Td>Sunglasses</Td>
                </Tr>
                <Tr>
                  <Td>Tops</Td>
                  <Td>Flats</Td>
                  <Td>Dresses</Td>
                  <Td>Loafers</Td>
                </Tr>
                <Tr>
                  <Td>Trousers</Td>
                  <Td>Black Tie</Td>
                  <Td>Dresses</Td>
                  <Td>Loafers</Td>
                </Tr>
                <Tr>
                  <Td>Hoodies & Sweatshirts</Td>
                  <Td>Loafers</Td>
                  <Td>Kagol Cap</Td>
                  <Td>Sunglasses</Td>
                </Tr>
                <Tr>
                  <Td>Skirts</Td>
                  <Td>Loafers</Td>
                </Tr>
                <Tr>
                  <Td>Jackets & Blazers</Td>
                  
                </Tr>
                <Tr>
                  <Td>Jumpsuits</Td>
                  <Td>Loafers</Td>
                  
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
 
export default Female;