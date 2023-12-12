import Link from "next/link"
import { getServerSession } from "next-auth"

export default async function Navbar() {
  const session = await getServerSession()
  return (
    <nav className="bg-zinc-900 p-4">
      <div className="flex justify-between container mx-auto">
        <Link href="/">
          <h1 className="font-bold text-xl">NextAuth</h1>
        </Link>

        <ul className="flex gap-x-2">
          {session ? (
            <li className="px-3 py-1">
              <Link href="/dashboard/profile">Perfil</Link>
            </li>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/login">Login</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/register">Registro</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/about">About</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
