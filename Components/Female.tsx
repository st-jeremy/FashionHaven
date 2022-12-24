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
  Center
} from '@chakra-ui/react'

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
          <MenuItem>New File</MenuItem>
          <Center height='50px'>
  <Divider orientation='vertical' />
</Center>
          <MenuItem>New Window</MenuItem>
          <MenuDivider  />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Female;