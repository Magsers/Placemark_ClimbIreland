import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";
import { routeJsonStore } from "./route-json-store.js";

const db = new Low(new JSONFile("./src/models/json/crags.json"));
db.data = { crags: [] };

export const cragJsonStore = {
  async getAllCrags() {
    await db.read();
    return db.data.crags;
  },

  async addCrag(crag) {
    await db.read();
    crag._id = v4();
    db.data.crags.push(crag);
    await db.write();
    return crag;
  },

  async getCragById(id) {
    await db.read();
    let list = db.data.crags.find((crag) => crag._id === id);
    if (list) {
      list.routes = await routeJsonStore.getRoutesByCragId(list._id);
    } else {
      list = null;
    }
    return list;
  },

  async getUserCrags(userid) {
    await db.read();
    return db.data.crags.filter((crag) => crag.userid === userid);
  },

  async deleteCragById(id) {
    await db.read();
    const index = db.data.crags.findIndex((crag) => crag._id === id);
    if (index !== -1) db.data.crags.splice(index, 1);
    await db.write();
  },

  async deleteAllCrags() {
    db.data.crags = [];
    await db.write();
  },

  async updateCrag(updatedCrag) {
    await db.read();
    const crag = await Crag.findOne({ _id: updatedCrag._id });
    crag.title = updatedCrag.title;
    crag.lat = updatedCrag.lat;
    crag.lng = updatedCrag.lng;
    crag.approach = updatedCrag.approach;
    crag.img = updatedCrag.img;
    await crag.save();
  },
};