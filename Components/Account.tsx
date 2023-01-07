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
import LoginBtn from './LoginBtn';
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
          _expanded={{bgColor: 'white', color: 'black'}}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '19pt', md: '25pt'}}
          width={'fit-content'}
          padding={{base: '1', md: 'auto'}}
        >
          {isOpen ? <ChevronUpIcon style={{display: 'inline-grid'}}/> : <ChevronDownIcon  style={{display: 'inline-grid'}}/>}
        </MenuButton>

        <MenuList 
          onMouseLeave={onClose}
          onMouseEnter={onOpen}
          color={'black'}
          zIndex={'1000'}
          marginTop={'-.4rem'}
        >
          <MenuItem fontWeight={'600'}>Account</MenuItem>
          <MenuDivider/>

          <MenuItem display={'block'}><LoginBtn /></MenuItem>
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

