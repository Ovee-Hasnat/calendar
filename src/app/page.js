"use client"

import { signIn, useSession } from "next-auth/react"

export default function Home() {
  const session = useSession()
  console.log(session)

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase text-center">Calendar using Google</h1>

      <button className="p-2" onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}
