import mongoose, { Schema, model, models } from "mongoose";

interface Iuser {
  name: string;
  email: string;
  password: string;
  image: string;
}

const userSchema = new Schema<Iuser>({
  name: {
    type: String,
    requied: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,

    minlength: 5,
  },
  image: {
    type: String,
  },
});

const User =
  (models.User as mongoose.Model<Iuser>) || model<Iuser>("User", userSchema);
export default User;
