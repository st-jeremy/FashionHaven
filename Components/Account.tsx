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
    <Box>
      <Menu  isOpen={isOpen}>
        <MenuButton 
          as={Button}
          leftIcon={<BiUser />} 
          bgColor='black'
          _hover={{bgColor:'white', color: 'black'}}
          _expanded={{ bgColor: 'white', color: 'black' }}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '12pt', md: '30pt'}}
        >
          Account
          &nbsp; {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList 
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          color={'black'}
          zIndex={'1000'}
        >
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Account;