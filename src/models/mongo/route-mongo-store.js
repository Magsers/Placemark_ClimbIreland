import { Route } from "./route.js";
import { Crag } from "./crag.js";

export const routeMongoStore = {
  async getAllRoutes(id) {
    const routes = await Route.find().lean();
    return routes;
  },

  async addRoute(cragId, route) {
    route.cragid = cragId;
    const newRoute = new Route(route);
    const routeObj = await newRoute.save();
    return this.getRouteById(routeObj._id);
  },

  async getRoutesByCragId(id) {
    const routes = await Route.find({ cragid: id }).lean();
    return routes;
  },

  async getRouteById(id) {
    if (id) {
      const route = await Route.findOne({ _id: id }).lean();
      return route;
    }
    return null;
  },

  async deleteRoute(id) {
    try {
      await Route.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllRoutes() {
    await Route.deleteMany({});
  },

  async updateRoute(route, updatedRoute) {
    route.name = updatedRoute.name;
    route.grade = updatedRoute.grade;
    route.height = updatedRoute.height;
    route.firstascent = updatedRoute.firstascent;
    route.description = updatedRoute.description;
    await route.save();
  },
};