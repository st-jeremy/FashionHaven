import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
} from '@chakra-ui/react'
import { Box, Text } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react"
import Head from 'next/head';
import ItemCount from '../Components/ItemCount';
import TotalPrice from '../Components/TotalPrice';


const MyAccount = () => {

  const { data: session } = useSession();

  const userEmail = session?.user.email;
  const userName = session?.user.name;
  const userImage = session?.user.image;

  return ( 
    <>
      <Head>
        <title>Account | Fashion Haven</title>
      </Head>

      <Box p={5} maxWidth={'1400px'} margin={'auto'} pt={'5rem'}>
        <Avatar src={userImage} name={userName}  size='full'/>
        <Text>Name: {userName}</Text>
        <Text>Email: {userEmail}</Text>

        <Box mt={3}>
          <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha'>
              <TableCaption placement='top'>My Orders</TableCaption>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th isNumeric>Value</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>Total Item Count</Td>
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
    </>
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