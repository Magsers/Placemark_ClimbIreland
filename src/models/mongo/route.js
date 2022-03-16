import Mongoose from "mongoose";

const { Schema } = Mongoose;

const routeSchema = new Schema({
  route: String,
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