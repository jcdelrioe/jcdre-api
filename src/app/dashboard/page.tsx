"use client"
import { useSession } from "next-auth/react"

export default function DashboardPage() {
  const { data: session, status } = useSession()

  console.log(session, status)

  return <div>DashboardPage</div>
}
