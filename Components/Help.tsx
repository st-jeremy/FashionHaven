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
          width={120}
          _hover={{ bg: 'black' }}
          _expanded={{ bg: 'black', color: 'white' }}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '8pt', md: '30pt'}}
        >
          Help
          &nbsp; {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>
        
        <MenuList 
          onMouseLeave={onClose} 
          onMouseEnter={onOpen}
          color={'black'}
        >
          <MenuItem>Help Center</MenuItem>
          <MenuItem>Customer Care</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default HelpCenter;