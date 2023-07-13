import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  useDisclosure,
  MenuDivider,
  Icon
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import { BiHelpCircle } from 'react-icons/bi';

const HelpCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return ( 
    <Box margin= 'auto'>
      <Menu isOpen={isOpen}>
        <MenuButton
          as={Button}
          bgColor={'black'}
          _expanded={{bgColor: 'white', color: 'black'}}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          width={'fit-content'}
          fontSize={{base: '12pt', md: '18pt'}}
          px={{base: '1', md: 'auto'}}
        >
          <Icon as={BiHelpCircle} mb={'-7px'} fontSize={{base: '16pt', md: '22pt'}} />
          {isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
        </MenuButton>
        
        <MenuList 
          onMouseLeave={onClose} 
          onMouseEnter={onOpen}
          color={'black'}
          zIndex={'1000'}
          marginTop={'-.4rem'}
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