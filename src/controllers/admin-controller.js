import { db } from "../models/db.js";

export const adminController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        const users = await db.userStore.getAllUsers();
        const crags = await db.cragStore.getAllCrags();
        const routes = await db.routeStore.getAllRoutes();
        const usercrags = await db.cragStore.getUserCrags(request.params.id).length;
        const viewData = {
          title: "Placemark Admin Dashboard",
          user: loggedInUser,
          users: users,
          usercrags: usercrags,
          cragCount: crags.length,
          routeCount: routes.length,
        };
        return h.view("admin-view", viewData);
      },
    },
 
    userProfile: {
      handler: async function (request, h) {
      const user = await db.userStore.getUserById(request.params.id);
      return h.view("/user");
      },
    },

    deleteUser: {
      handler: async function (request, h) {
      const user = await db.userStore.getUserById(request.params.id);
      await db.userStore.deleteUserById(user._id);
      return h.redirect("/admin");
      },
    },
  };    