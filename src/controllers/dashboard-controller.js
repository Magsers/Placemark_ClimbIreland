import { db } from "../models/db.js";
import { cragMemStore } from "../models/mem/crag-mem-store.js";
import { CragSpec } from "../models/db/joi-schemas.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const crags = await db.cragStore.getUserCrags(loggedInUser._id);
      const viewData = {
        title: "Placemark Dashboard",
        user: loggedInUser,
        crags: crags,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addCrag: {
    validate: {
      payload: CragSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("dashboard-view", { title: "Add Crag error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newCrag = {
        userid: loggedInUser._id,
        title: request.payload.title,
        lat: Number(request.payload.lat),
        lng: Number(request.payload.lng),
        approach: request.payload.approach,
      };
      await db.cragStore.addCrag(newCrag);
      return h.redirect("/dashboard");
    },
  },

  deleteCrag: {
    handler: async function (request, h) {
    const crag = await db.cragStore.getCragById(request.params.id);
    await db.cragStore.deleteCragById(crag._id);
    return h.redirect("/dashboard");
    },
  },
};