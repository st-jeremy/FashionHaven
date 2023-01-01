import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { IncomingMessage, ServerResponse } from "http"
import { NextApiRequest, NextApiResponse } from "next"
import { OAuthConfig } from "next-auth/providers"
import { FacebookProfile } from "next-auth/providers/facebook"
import { GoogleProfile } from "next-auth/providers/google"

export default async (req: (IncomingMessage & { cookies: Partial<{ [key: string]: string }> }) | NextApiRequest | { providers: (OAuthConfig<GoogleProfile> | OAuthConfig<FacebookProfile>)[]; secret: string }, res: ServerResponse<IncomingMessage> | NextApiResponse | { providers: (OAuthConfig<GoogleProfile> | OAuthConfig<FacebookProfile>)[]; secret: string }) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}