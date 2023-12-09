import { NextResponse } from "next/server"
import User from "@/models/user"
import bcrypt from "bcryptjs"
import { connectDB } from "@/libs/mongodb"

export async function POST(request: Request) {
  const { fullName, email, password } = await request.json()

  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: "password must be at least 6 characters",
      },
      {
        status: 400,
      }
    )

  try {
    await connectDB()
    const userFound = await User.findOne({ email })

    if (userFound)
      return NextResponse.json(
        {
          message: "user already exists",
        },
        {
          status: 409,
        }
      )

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({ fullName, email, password: hashedPassword })

    const savedUser = await user.save()

    console.log(savedUser)

    return NextResponse.json(savedUser)
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
