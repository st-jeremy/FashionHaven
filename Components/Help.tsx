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
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'

const HelpCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return ( 
    <Box>
      <Menu isOpen={isOpen}>
        <MenuButton 
          as={Button} 
          leftIcon={<BiHelpCircle />}
          bgColor='black'
          border= 'none'
          _hover={{ bgColor: 'white', color: 'red' }}
          _expanded={{ bgColor: 'white', color: 'black' }}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '12pt', md: '30pt'}}
          paddingTop={0}
        >
          Help
          &nbsp; {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>
        
        <MenuList 
          onMouseLeave={onClose} 
          onMouseEnter={onOpen}
          color={'black'}
          zIndex={'1000'}
        >
          <MenuItem>Help Center</MenuItem>
          <MenuItem>Customer Care</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default HelpCenter;