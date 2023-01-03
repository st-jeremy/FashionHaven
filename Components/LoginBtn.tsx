import { Button, Text } from "@chakra-ui/react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session, status } = useSession();
  const userName = session?.user.name;

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (session) {
    return (
      <>
        <Text>Signed in as {userName}.</Text>
        <Button 
          bgColor={'red'} 
          color={'white'} 
          onClick={() => signOut()} 
          _hover={{ color: 'red', bgColor: 'white', border: '1px solid red'}}
        >
          Sign out
        </Button>
      </>
    )
  }

  return (
    <>
      <Text>Not signed in yet.</Text> 
      <Button  
        bgColor={'black'} 
        color={'white'} 
        onClick={() => signIn('', {callbackUrl:'/'})} 
        _hover={{ color: 'black', bgColor:'white', border: '1px solid black'}}
      >
        Sign in
      </Button>
    </>
  )
}