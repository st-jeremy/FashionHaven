import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  useDisclosure,
  MenuDivider
} from '@chakra-ui/react'
import { BiHelpCircle } from 'react-icons/bi'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'

const HelpCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return ( 
    <Box margin= 'auto'>
      <Menu isOpen={isOpen}>
        <MenuButton
          border= 'none'
          _hover={{ color: 'white'}}
          _expanded={{fontSize: '14pt'}}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '12pt', md: '30pt'}}
          paddingTop={0}
          width={'fit-content'}
        >
          <BiHelpCircle />
          {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>
        
        <MenuList 
          onMouseLeave={onClose} 
          onMouseEnter={onOpen}
          color={'black'}
          zIndex={'1000'}
        >
          <MenuItem fontWeight={'600'} >Help</MenuItem>
          <MenuDivider />
          <MenuItem>Help Center</MenuItem>
          <MenuItem>Customer Care</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default HelpCenter;