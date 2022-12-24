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

const Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return ( 
    <Box marginLeft={5}>
      <Menu  isOpen={isOpen}>
        <MenuButton 
          as={Button}
          leftIcon={<BiUser />} 
          bgColor='blue.50'
          _hover={{bgColor:'blue'}}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          Account &nbsp; {isOpen ? <AiOutlineUp style={{display: 'inline-grid'}}/> : <AiOutlineDown  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList 
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
        >
          <MenuItem>Sign In</MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Account;