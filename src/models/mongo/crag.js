import Mongoose from "mongoose";

const { Schema } = Mongoose;

const cragSchema = new Schema({
  title: String,
  lat: Number,
  lng: Number,
  approach: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Crag = Mongoose.model("Crag", cragSchema);