import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { cragController } from "./controllers/crag-controller.js";
import { adminController } from "./controllers/admin-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addcrag", config: dashboardController.addCrag },
  { method: "POST", path: "/dashboard/addnewcrag", config: dashboardController.addCrag },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/admin", config: adminController.index },
  { method: "GET", path: "/admin/{id}", config: adminController.userProfile },
  { method: "GET", path: "/admin/deleteUser/{id}", config: adminController.deleteUser },

  { method: "GET", path: "/crag/{id}", config: cragController.index },
  { method: "POST", path: "/crag/{id}/addroute", config: cragController.addRoute },
  { method: "GET", path: "/dashboard/deleteCrag/{id}", config: dashboardController.deleteCrag },
  { method: "GET", path: "/crag/{id}/deleteroute/{routeid}", config: cragController.deleteRoute },
  { method: "GET", path: "/crag/{id}/editroute/{routeid}", config: cragController.showEditRoute },
  { method: "GET", path: "/crag/{id}/updateroute/{routeid}", config: cragController.updateRoute },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },
  { method: "POST", path: "/crag/{id}/uploadimage", config: cragController.uploadImage },
]; 