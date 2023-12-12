"use client"
import { useSession, signOut } from "next-auth/react"

export default function ProfilePage() {
  const { data: session, status } = useSession()

  console.log(session, status)

  return (
    <div className="flex flex-col gap-y-5 justify-center items-center h-[calc(100vh-4rem)]">
      <h1 className="font-bold text-3xl">Profile Page</h1>
      <pre className="bg-zinc-800 p-4">
        {JSON.stringify(
          {
            session,
            status,
          },
          null,
          2
        )}
      </pre>
      <button
        className="bg-zinc-800 px-4 py-2 block mb-2"
        onClick={() => {
          signOut()
        }}
      >
        Logout
      </button>
    </div>
  )
}
