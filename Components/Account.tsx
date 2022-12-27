import { Box } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return ( 
    <Box marginLeft={5}>
      <Menu  isOpen={isOpen}>
        <MenuButton 
          as={Button}
          leftIcon={<BiUser />} 
          bgColor='black'
          _hover={{bgColor:'white'}}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          Account
          &nbsp; {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList 
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          color={'black'}
        >
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Account;