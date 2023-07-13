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
  Avatar,
  Icon, 
  Text
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
          bgColor={'black'}
          _hover={{ color: 'white'}}
          _expanded={{bgColor: 'white', color: 'black'}}
          _focus={{ boxShadow: 'none' }}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={{base: '12pt', md: '18pt'}}
          width={'fit-content'}
          px={{base: '1', md: 'auto'}}
          display={'flex'}
        >
          <Icon as={BiUser} mb={'-7px'} fontSize={{base: '16pt', md: '22pt'}} />
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
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

          { session && 
            <MenuItem>
              <Link href='/MyAccount'>
                <Avatar name={userName} src={userImage} /> &nbsp; &nbsp;
                My Account
              </Link>
            </MenuItem>
}
        </MenuList>
      </Menu>
    </Box>
   );
}
 
export default Account;

