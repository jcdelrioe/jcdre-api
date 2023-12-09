"use client"

import axios, { AxiosError } from "axios"
import { FormEvent, useState } from "react"

export default function RegisterPage() {
  const [error, setError] = useState("")
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const res = await axios.post("/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullName: formData.get("fullName"),
      })
      console.log(res)
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        setError(error.response?.data.message)
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1>Signup</h1>
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Ingrese nombre"
          name="fullName"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="email"
          placeholder="Ingrese email"
          name="email"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="password"
          placeholder="Ingrese password"
          name="password"
        />
        <button className="bg-indigo-500 px-4 py-2">Register</button>
      </form>
    </div>
  )
}
