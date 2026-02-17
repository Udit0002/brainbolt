import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now }
})

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema)