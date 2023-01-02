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
        <Text>Signed in as {userName}</Text>
        <Button bgColor={'red'} color={'white'} onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      <Text>Not signed in yet.</Text>  &nbsp; &nbsp;
      <Button  bgColor={'black'} color={'white'} onClick={() => signIn('', {callbackUrl:'/Cart'})}>Sign in</Button>
    </>
  )
}