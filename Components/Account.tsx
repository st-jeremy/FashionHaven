import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  MenuDivider,
  Box,
  Divider,
  Avatar
} from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import LoginBtn from '../pages/Authentication/LoginBtn';
import { useSession, getSession } from 'next-auth/react';

const Account = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();

  const userImage = session?.user.image;
  const userName = session?.user.name;

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
          <MenuItem fontWeight={'600'}>Account</MenuItem>
          <MenuDivider/>

          <MenuItem><LoginBtn /></MenuItem>
          <Divider />
          <MenuItem>
            <Link href='/MyAccount'>
              <Avatar name={userName} src={userImage} /> &nbsp; &nbsp;
              My Account
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Account;

