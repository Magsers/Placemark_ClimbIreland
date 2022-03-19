import { db } from "../models/db.js";
import { UserSpec, UserCredentialsSpec } from "../models/db/joi-schemas.js";

export const adminController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        const users = await db.userStore.getAllUsers();
        const viewData = {
          title: "Placemark Admin Dashboard",
          user: loggedInUser,
          users: users,
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