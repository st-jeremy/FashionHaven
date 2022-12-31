import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  MenuDivider,
  Box
} from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter;
  const handleSignIn = () => {
    router.push('/Authentication/SignIn')
  }
  
  return ( 
    <Box margin= 'auto'>
      <Menu  isOpen={isOpen}>
        <MenuButton 
          as={Button}
          leftIcon={<BiUser />}
          bgColor={'black'}
          _hover={{ color: 'white'}}
          _expanded={{fontSize: '18pt' }}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '20pt', md: '25pt'}}
          width={'fit-content'}
        >
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
          <MenuItem><Button onClick={handleSignIn}>Sign In</Button> </MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Account;