import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import { BiHelpCircle } from 'react-icons/bi'
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'

const HelpCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return ( 
    <Box marginLeft={5}>
      <Menu isOpen={isOpen}>
        <MenuButton 
          as={Button} 
          leftIcon={<BiHelpCircle />}
          bgColor='blue.50'
          _hover={{bgColor:'blue'}}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          Help
          &nbsp; {isOpen ? <AiOutlineUp style={{display: 'inline-grid'}}/> : <AiOutlineDown  style={{display: 'inline-grid'}}/>}
        </MenuButton>
        
        <MenuList 
          onMouseLeave={onClose} 
          onMouseEnter={onOpen}
        >
          <MenuItem>Help Center</MenuItem>
          <MenuItem>Customer Care</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default HelpCenter;