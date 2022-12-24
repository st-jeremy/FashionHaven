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
          <TableContainer display='flex' p={5}>
              <Image src= '/milo.png' width={450} height={500} alt='can' />

              <Table variant='unstyled'>
                <TableCaption color={'red'}>Fashion Haven!  &nbsp; &nbsp; <i>Everything fashion...</i></TableCaption>
                <Thead>
                  <Tr >
                    <Th></Th>
                    <Th>Female Fashion</Th>
                  </Tr>
                  <Tr>
                    <Th>Clothing</Th>
                    <Th>Foot Wear</Th>
                    <Th>Accessories</Th>
                  </Tr>
                </Thead>

                <Tbody>

                  <Tr>
                    <Td>Bespoke</Td>
                    <Td>Heels</Td>
                    <Td>Sunglasses</Td>
                  </Tr>
                  <Tr>
                    <Td>Tops</Td>
                    <Td>Flat</Td>
                    <Td>Wristwatches</Td>
                  </Tr>
                  <Tr>
                    <Td>Trousers</Td>
                    <Td>Sneakers</Td>
                    <Td>Bags</Td>
                  </Tr>
                  <Tr>
                    <Td>Skirts</Td>
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
              </Table>
              
          </TableContainer>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Female;