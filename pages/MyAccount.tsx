import { Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react"
import Image from "next/image";

const MyAccount = () => {

  const { data: session } = useSession();
  
  return ( 
    <Box>
      <Image src={session.user.image} alt={session.user.name} width={200} height={200}  />
      <Text>{session.user.name}</Text>
      <Text>{session.user.email}</Text>
    </Box>
   );
}
 
export default MyAccount;