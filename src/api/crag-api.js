import Boom from "@hapi/boom";
import { CragSpec } from "../models/db/joi-schemas.js";
// import { validationError } from "../logger.js";
import { db } from "../models/db.js";

export const cragApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const crags = await db.cragStore.getAllCrags();
        return crags;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    // tags: ["api"],
    // response: { schema: CragArraySpec, failAction: validationError },
    // description: "Get all crags",
    // notes: "Returns all crags",
  },

  findOne: {
    auth: false,
    async handler(request, h) {
      try {
        const crag = await db.cragStore.getCragById(request.params.id);
        if (!crag) {
          return Boom.notFound("No Crag with this id");
        }
        return crag;
      } catch (err) {
        return Boom.serverUnavailable("No Crag with this id");
      }
    },
    // tags: ["api"],
    // description: "Find a Crag",
    // notes: "Returns a crag",
    // validate: { params: { id: IdSpec }, failAction: validationError },
    // response: { schema: CragSpecPlus, failAction: validationError },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const crag = request.payload;
        const newCrag = await db.cragStore.addCrag(crag);
        if (newCrag) {
          return h.response(newCrag).code(201);
        }
        return Boom.badImplementation("error creating crag");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    // tags: ["api"],
    // description: "Create a Crag",
    // notes: "Returns the newly created crag",
    // validate: { payload: CragSpec, failAction: validationError },
    // response: { schema: CragSpecPlus, failAction: validationError },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const crag = await db.cragStore.getCragById(request.params.id);
        if (!crag) {
          return Boom.notFound("No Crag with this id");
        }
        await db.cragStore.deleteCragById(crag._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Crag with this id");
      }
    },
//     tags: ["api"],
//     description: "Delete a crag",
//     validate: { params: { id: IdSpec }, failAction: validationError },
},

deleteAll: {
  auth: false,
  handler: async function (request, h) {
    try {
      await db.placemarkStore.deleteAllCrags();
      return h.response().code(204);
    } catch (err) {
      return Boom.serverUnavailable("Database Error");
    }
  },
 },
} 
