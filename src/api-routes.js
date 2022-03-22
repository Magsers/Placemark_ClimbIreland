import { userApi } from "./api/user-api.js";
import { cragApi } from "./api/crag-api.js";
import { routeApi } from "./api/route-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/crags", config: cragApi.create },
  { method: "DELETE", path: "/api/crags", config: cragApi.deleteAll },
  { method: "GET", path: "/api/crags", config: cragApi.find },
  { method: "GET", path: "/api/crags/{id}", config: cragApi.findOne },
  { method: "DELETE", path: "/api/crags/{id}", config: cragApi.deleteOne },

  { method: "GET", path: "/api/routes", config: routeApi.find },
  { method: "GET", path: "/api/routes/{id}", config: routeApi.findOne },
  { method: "POST", path: "/api/crags/{id}/routes", config: routeApi.create },
  { method: "DELETE", path: "/api/routes", config: routeApi.deleteAll },
  { method: "DELETE", path: "/api/routes/{id}", config: routeApi.deleteOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];