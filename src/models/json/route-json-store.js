import { v4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import { JSONFile, Low } from "lowdb";

const db = new Low(new JSONFile("./src/models/json/routes.json"));
db.data = { routes: [] };

export const routeJsonStore = {
  async getAllRoutes() {
    await db.read();
    return db.data.routes;
  }, 
  
  async addRoute(cragId, route) {
    await db.read();
    route._id = v4();
    route.cragid = cragId;
    db.data.routes.push(route);
    await db.write();
    return route;
  },

  async getRoutesByCragId(id) {
    await db.read();
    return db.data.routes.filter((route) => route.cragid === id);
  },

  async getRouteById(id) {
    await db.read();
    return db.data.routes.find((route) => route._id === id);
  },

  async deleteRoute(id) {
    await db.read();
    const index = db.data.routes.findIndex((route) => route._id === id);
    db.data.routes.splice(index, 1);
    await db.write();
  },

  async deleteAllRoutes() {
    db.data.routes = [];
    await db.write();
  },

  async updateRoute(route, updatedRoute) {
    route.title = updatedRoute.title;
    route.artist = updatedRoute.artist;
    route.duration = updatedRoute.duration;
    await db.write();
  },
};