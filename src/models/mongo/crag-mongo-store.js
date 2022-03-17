import { Crag } from "./crag.js";
import { routeMongoStore } from "./route-mongo-store.js";

export const cragMongoStore = {
  async getAllCrags() {
    const crags = await Crag.find().lean();
    return crags;
  },

  async getCragById(id) {
    if (id) {
      const crag = await Crag.findOne({ _id: id }).lean();
      if (crag) {
        crag.routes = await routeMongoStore.getRoutesByCragId(crag._id);
      }
      return crag;
    }
    return null;
  },

  async addCrag(crag) {
    const newCrag = new Crag(crag);
    const cragObj = await newCrag.save();
    return this.getCragById(cragObj._id);
  },

  async getUserCrags(id) {
    const crag = await Crag.find({ userid: id }).lean();
    return crag;
  },

  async deleteCragById(id) {
    try {
      await Crag.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllCrags() {
    await Crag.deleteMany({});
  }
};