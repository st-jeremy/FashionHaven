import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Heading
} from '@chakra-ui/react'

const Categories = () => {
  return ( 
    <Box display={'flex'} flexDirection={'column'} width={200} bgColor={'blackAlpha.500'}>
      <Heading fontSize={'2xl'} m={5}>Categories</Heading>
      <Menu 
        gutter={0}
        matchWidth={true}
        placement={'auto-start'}
        
      >
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
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>

      <Menu 
        gutter={0}
        matchWidth={true}
        placement={'auto-start'}
        
      >
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
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>

      <Menu 
        gutter={0}
        matchWidth={true}
        placement={'auto-start'}
        
      >
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
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>

      <Menu 
        gutter={0}
        matchWidth={true}
        placement={'auto-start'}
        
      >
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
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>

      <Menu 
        gutter={0}
        matchWidth={true}
        placement={'auto-start'}
        
      >
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
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Categories;