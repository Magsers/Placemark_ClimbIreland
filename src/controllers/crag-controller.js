import { db } from "../models/db.js";
import { RouteSpec } from "../models/db/joi-schemas.js";

export const cragController = {
  index: {
    handler: async function (request, h) {
      const crag = await db.cragStore.getCragById(request.params.id);
      const viewData = {
        title: "Crag",
        crag: crag,
      };
      return h.view("crag-view", viewData);
    },
  },

  addRoute: {
    validate: {
      payload: RouteSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("crag-view", { title: "Add Route error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const crag = await db.cragStore.getCragById(request.params.id);
      const newRoute = {
        name: request.payload.name,
        grade: request.payload.grade,
        height: Number(request.payload.height),
        firstascent: request.payload.firstascent,
        description: request.payload.description,
      };
      await db.routeStore.addRoute(crag._id, newRoute);
      return h.redirect(`/crag/${crag._id}`);
    },
  },

  deleteRoute: {
    handler: async function (request, h) {
    const crag = await db.cragStore.getCragById(request.params.id);
    await db.routeStore.deleteRoute(request.params.routeid);
    return h.redirect(`/crag/${ crag._id}`);
    },
  },
};