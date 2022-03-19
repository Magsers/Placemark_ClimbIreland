import Mongoose from "mongoose";

const { Schema } = Mongoose;

const routeSchema = new Schema({
  name: String,
  grade: String,
  height: Number,
  firstascent: String,
  description: String,
  cragid: {
    type: Schema.Types.ObjectId,
    ref: "Crag",
  },
});

export const Route = Mongoose.model("Route", routeSchema);