import { Button } from "@chakra-ui/react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session.user.image}<Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }
  return (
    <>
      <Button onClick={() => signIn('', {callbackUrl:'/Cart'})}>Sign in</Button>
    </>
  )
}