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


import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Female = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          _focus={{ boxShadow: 'outline' }}
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
        >
          Female &nbsp;
          {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList>
          <TableContainer display='flex' p={5}>
              <Image src= '/milo.png' width={450} height={500} alt='can' />

              <Table variant='unstyled' size='sm'>
                <TableCaption color={'red'}>Fashion Haven!  &nbsp; &nbsp; <i>Everything fashion...</i></TableCaption>
                
                <Thead>
                  <Tr>
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