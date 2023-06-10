"use client";

import CalendarApp from "@/components/calendar";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  //console.log(session);

  

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase text-center">
        Calendar using Google
      </h1>
      <div className="flex gap-6 p-6">
        <button
          className="p-2 border-2 rounded-md"
          onClick={() => signIn("google")}
        >
          Login with Google
        </button>
        <button className="p-2 border-2 rounded-md" onClick={() => signOut()}>
          Log out
        </button>
      </div>

      <div>
        {session.data && (
          <div className="p-6 bg-neutral-200">
            <p>Welcome, {session.data.user.name}</p>
            <CalendarApp />
          </div>
        )}
      </div>
    </div>
  );
}
