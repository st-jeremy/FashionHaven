import { Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react"
import Image from "next/image";


const MyAccount = () => {

  const { data: session } = useSession();

  const userEmail = session?.user.email;
  const userName = session?.user.name;
  const userImage = session?.user.image

  return ( 
    <Box>
      <Image src={userImage} alt={userName} width={200} height={200}  />
      <Text>{userName}</Text>
      <Text>{userEmail}</Text>
    </Box>
   );
}
 
export default MyAccount;