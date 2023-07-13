import { Box, Text, Avatar, Heading, VStack, ListIcon, ListItem, List } from "@chakra-ui/react";
import LoginBtn from "./LoginBtn";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Point from './Point';

const Welcome = () => {
  const { data: session } = useSession();

  const userImage = session?.user.image;
  const userName = session?.user.name;

  return ( 
    <VStack p={'5'} textAlign={'center'} maxWidth={'15rem'} bgGradient='linear(to-l, white, grey)' h={385.8} display={{base:'none', xl:'flex'}}>
      { session ? 
        <Link href='/my-account'>
          <Avatar name={userName} src={userImage} /> &nbsp; &nbsp;
          My Account
        </Link>
        : <Avatar />
      }
      <Heading fontSize={"sm"}>Welcome to Fashion Haven</Heading>

      <LoginBtn />

      <Box>
        <Text  mt={'2rem'} textAlign={'center'}> Shop up to 50% off discount in all categories.</Text>
        <List textAlign={'left'}>
          <Point name="Superb Quality" />
          <Point name="Affordable Price" />
          <Point name="Fast Delivery" />
          <Point name="Top Brands" />
        </List>
      </Box>
    </VStack>
   );
}
 
export default Welcome;