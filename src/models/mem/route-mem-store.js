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
    const list = routes.find((route) => route._id === id);
    if (list) {
      list.routes = await routeMemStore.getRoutesByCragId(list._id);
      return list;
    }
    return null;
  },

  async getCragRoutes(cragId) {
    return routes.filter((route) => route.cragid === cragId);
  },

  async deleteRoute(id) {
    const index = routes.findIndex((route) => route._id === id);
    if (index !== -1) routes.splice(index, 1);
  },    

  async deleteAllRoutes() {
    routes = [];
  },

  async updateRoute(updatedRoute) {
    const updatedroute = routes.find((route) => route._id === updatedRoute._id);
    updatedroute.name = updatedRoute.name;
    updatedroute.grade = updatedRoute.grade;
    updatedroute.height = updatedRoute.height;
    updatedroute.firstascent = updatedRoute.firstascent;
    updatedroute.description = updatedRoute.description;
    updatedroute.datedone = updatedRoute.datedone;
    return updatedroute;
  },
};