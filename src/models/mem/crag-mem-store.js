import { v4 } from "uuid";
import { routeMemStore } from "./route-mem-store.js";

let crags = [];

export const cragMemStore = {
  async getAllCrags() {
    return crags;
  },

  async addCrag(crag) {
    crag._id = v4();
    crags.push(crag);
    return crag;
  },

  async getCragById(id) {
    const list = crags.find((crag) => crag._id === id);
    if (list) {
      list.routes = await routeMemStore.getRoutesByCragId(list._id);
      return list;
    }
    return null;
  },

  async deleteCragById(id) {
    const index = crags.findIndex((crag) => crag._id === id);
    if (index !== -1) crags.splice(index, 1);
  },

  async deleteAllCrags() {
    crags = [];
  },

  async getUserCrags(userid) {
    return crags.filter((crag) => crag.userid === userid);
  }, 

  async updateCrag(updatedCrag) {
    const crag = await Crag.findOne({ _id: updatedCrag._id });
    crag.title = updatedCrag.title;
    crag.lat = updatedCrag.lat;
    crag.lng = updatedCrag.lng;
    crag.approach = updatedCrag.approach;
    crag.img = updatedCrag.img;
    await crag.save();
  },

};