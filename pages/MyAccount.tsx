import { Box, Text } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react"
import Image from "next/image";


const MyAccount = () => {

  const { data: session } = useSession();

  const userEmail = session?.user.email;
  const userName = session?.user.name;
  const userImage = session?.user.image

  return ( 
    <Box p={5}>
      <Image src={userImage} alt={userName} width={200} height={200}  />
      <Text>{userName}</Text>
      <Text>{userEmail}</Text>
    </Box>
   );
}
 
export default MyAccount;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session){
    return{
      redirect:{
        destination: '/auth/signin',
      }
    }
  }
  return{
    props: {session}
  }
}