import { userMemStore } from "./mem/user-mem-store.js";
import { cragMemStore } from "./mem/crag-mem-store.js";
import { routeMemStore } from "./mem/route-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { cragJsonStore } from "./json/crag-json-store.js";
import { routeJsonStore } from "./json/route-json-store.js";

export const db = {
  userStore: null,
  cragStore: null,
  routeStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.cragStore = cragJsonStore;
        this.routeStore = routeJsonStore;
        break;
      default:
        this.userStore = userMemStore;
        this.cragStore = cragMemStore;
        this.routeStore = routeMemStore;
    }
  },
};