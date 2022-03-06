import { v4 } from "uuid";

let routes = [];

export const routeMemStore = {
  async getAllRoutes() {
    return routes;
  },

  async addRoute(cragId, route) {
    route._id = v4();
    route.cragid = cragId;
    routes.push(route);
    return route;
  },

  async getRoutesByCragId(id) {
    return routes.filter((route) => route.cragid === id);
  },

  async getRouteById(id) {
    return routes.find((route) => route._id === id);
  },

  async getCragRoutes(cragId) {
    return routes.filter((route) => route.cragid === cragId);
  },

  async deleteRoute(id) {
    const index = routes.findIndex((route) => route._id === id);
    routes.splice(index, 1);
  },

  async deleteAllRoutes() {
    routes = [];
  },

  async updateRoute(route, updatedRoute) {
    route.title = updatedRoute.title;
    route.grade = updatedRoute.grade;
    route.height = updatedRoute.height;
    route.firstascent = updatedRoute.firstascent;
  },
};