import { Box } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  MenuDivider
} from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return ( 
    <Box margin= 'auto'>
      <Menu  isOpen={isOpen}>
        <MenuButton 
          _hover={{ color: 'white'}}
          _expanded={{fontSize: '18pt' }}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '12pt', md: '30pt'}}
          width={'fit-content'}
        ><BiUser />
          {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList 
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          color={'black'}
          zIndex={'1000'}
        >
          <MenuItem fontWeight={'600'} >Account</MenuItem>
          <MenuDivider/>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Account;