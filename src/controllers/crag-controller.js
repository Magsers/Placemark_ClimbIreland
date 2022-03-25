import { db } from "../models/db.js";
import { RouteSpec } from "../models/db/joi-schemas.js";
import { imageStore } from "../models/image-store.js";

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
      const date = new Date();
      const timestamp = date.toLocaleDateString();
      const crag = await db.cragStore.getCragById(request.params.id);
      const newRoute = {
        name: request.payload.name,
        grade: request.payload.grade,
        height: Number(request.payload.height),
        firstascent: request.payload.firstascent,
        description: request.payload.description,
        datedone: timestamp,
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

  showEditRoute: {
    handler: async function (request, h) {
    // const loggedInUser = request.auth.credentials;
    const crag = await db.cragStore.getCragById(request.params.id);
    const route = await db.routeStore.getRouteById(request.params.routeid);
        const viewData = {
          title: "Edit Route",
          crag: crag,
          route: route,
        };
        return h.view("edit-route", viewData);
      },
    },
  
  updateRoute: {
    handler: async function (request, h) {
    const crag = await db.cragStore.getCragById(request.params.id);
    const route = await db.routeStore.getRouteById(request.params.routeid);
    const updatedRoute = {
      _id: route._id,
      name: request.payload.name,
      grade: request.payload.grade,
      height: Number(request.payload.height),
      firstascent: request.payload.firstascent,
      description: request.payload.description,
      datedone: request.payload.datedone,
    };
    await db.routeStore.updateRoute(updatedRoute);
    return h.redirect(`/crag/${crag._id}`);
    },
  },

  uploadImage: {
    handler: async function(request, h) {
      try {
        const crag = await db.cragStore.getCragById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          crag.img = url;
          db.cragStore.updateCrag(crag);
        }
        return h.redirect(`/crag/${crag._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/crag/${crag._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true
    }
  }

};