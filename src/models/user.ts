import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "El email is required"],
    match: [
      /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/,
      "Email is not valid",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    minLenght: [3, "Full name must be at least 3 characters"],
    maxLength: [50, "Full name must be at most 50 characters"],
  },
})

const User = models.User || model("User", userSchema)
export default User
