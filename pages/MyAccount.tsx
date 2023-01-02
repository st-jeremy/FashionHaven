import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Box, Text } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react"
import Image from "next/image";
import ItemCount from '../Components/ItemCount';
import TotalPrice from '../Components/TotalPrice';


const MyAccount = () => {

  const { data: session } = useSession();

  const userEmail = session?.user.email;
  const userName = session?.user.name;
  const userImage = session?.user.image;

  const style ={
    borderRadius: '50px'
  }

  return ( 
    <Box p={5} maxWidth={'1400px'} margin={'auto'} pt={'9rem'}>
      <Image src={userImage} alt={userName} width={500} height={500} style={style} />
      <Text>{userName}</Text>
      <Text>{userEmail}</Text>

      <Box>
        <TableContainer>
          <Table variant='striped' colorScheme='blackAlpha'>
            <TableCaption>My Orders</TableCaption>
            <Thead>
              <Tr>
                <Th>Property</Th>
                <Th isNumeric>Value</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>Item Count</Td>
                <Td isNumeric><ItemCount /></Td>
              </Tr>
              <Tr>
                <Td>Total Order Price </Td>
                <Td isNumeric><TotalPrice /> </Td>
              </Tr>
            </Tbody>

          </Table>
        </TableContainer>
      </Box>
        
    </Box>
   );
}
 
export default MyAccount;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session){
    return{
      redirect:{
        destination: '/api/auth/signin',
      }
    }
  }
  return{
    props: {session}
  }
}