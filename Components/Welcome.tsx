import { Box, Text, Avatar } from "@chakra-ui/react";
import LoginBtn from "./LoginBtn";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Welcome = () => {
  const { data: session } = useSession();

  const userImage = session?.user.image;
  const userName = session?.user.name;

  return ( 
    <Box borderRadius={30} p={'5'} textAlign={'center'} maxWidth={'20rem'}>
      { session ? 
        <Link href='/my-account'>
          <Avatar name={userName} src={userImage} /> &nbsp; &nbsp;
          My Account
        </Link>
        : <Avatar />
      }
      <Text >Welcome to Fashion Haven</Text>
      <Text> Shop up to 50% off discount in all categories.</Text>
      
      <LoginBtn />
      
    </Box>
   );
}
 
export default Welcome;