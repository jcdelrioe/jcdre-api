import mongoose from "mongoose"

const { MONGODB_USER } = process.env
const { MONGODB_PASS } = process.env

if (!MONGODB_PASS) {
  throw new Error("MONGODB_PASS must be defined")
} else if (!MONGODB_USER) {
  throw new Error("MONGODB_USER must be defined")
}
const mongoUser = encodeURIComponent(MONGODB_USER)
const mongoPass = encodeURIComponent(MONGODB_PASS)

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.ds9cisp.mongodb.net/`
    )
    if (connection.readyState === 1) {
      console.log("MongoDB connected")
      return Promise.resolve(true)
    }
  } catch (error) {
    console.error(error)
    return Promise.reject(false)
  }
}
