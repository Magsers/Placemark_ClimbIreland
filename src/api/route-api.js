import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, RouteSpec, RouteSpecPlus, RouteArraySpec } from "../models/db/joi-schemas.js";
import { validationError } from "../logger.js";

export const routeApi = {
    find: {
      auth: false,
      handler: async function (request, h) {
       try {
        const routes = await db.routeStore.getAllRoutes();
        return routes;
       } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: RouteArraySpec, failAction: validationError },
    description: "Get all routeApi",
    notes: "Returns all routeApi",
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const route = await db.routeStore.getRouteById(request.params.id);
        if (!route) {
          return Boom.notFound("No route with this id");
        }
        return route;
      } catch (err) {
        return Boom.serverUnavailable("No route with this id");
      }
    },
    tags: ["api"],
    description: "Find a Route",
    notes: "Returns a route",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: RouteSpecPlus, failAction: validationError },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const route = await db.routeStore.addRoute(request.params.id, request.payload);
        if (route) {
          return h.response(route).code(201);
        }
        return Boom.badImplementation("error creating route");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a route",
    notes: "Returns the newly created route",
    validate: { payload: RouteSpec },
    response: { schema: RouteSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.routeStore.deleteAllRoutes();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all routeApi",
  },

   deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const route = await db.routeStore.getRouteById(request.params.id);
        if (!route) {
          return Boom.notFound("No Route with this id");
        }
        await db.routeStore.deleteRoute(route._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Route with this id");
      }
     },
    tags: ["api"],
    description: "Delete a route",
    validate: { params: { id: IdSpec }, failAction: validationError },
   },
};