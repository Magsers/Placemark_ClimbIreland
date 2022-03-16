import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testCrags, testRoutes, burren, fairhead, jugcity, testUsers } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Route Model tests", () => {

  let burrenList = null;

  setup(async () => {
    db.init("mongo");
    await db.cragStore.deleteAllCrags();
    await db.routeStore.deleteAllRoutes();
    burrenList = await db.cragStore.addCrag(burren);
    for (let i = 0; i < testRoutes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testRoutes[i] = await db.routeStore.addRoute(burrenList._id, testRoutes[i]);
    }
  });

  test("create single route", async () => {
    const fairheadList = await db.cragStore.addCrag(burren);
    const route = await db.routeStore.addRoute(fairheadList._id, jugcity)
    assert.isNotNull(route._id);
    assertSubset (jugcity, route);
  });

  test("create multiple routes", async () => {
    const routes = await db.cragStore.getCragById(burrenList._id);
    assert.equal(testRoutes.length, testRoutes.length)
  });

  test("delete all routes", async () => {
    const routes = await db.routeStore.getAllRoutes();
    assert.equal(testRoutes.length, routes.length);
    await db.routeStore.deleteAllRoutes();
    const newRoutes = await db.routeStore.getAllRoutes();
    assert.equal(0, newRoutes.length);
  });

  test("get a route - success", async () => {
    const fairheadList = await db.cragStore.addCrag(burren);
    const route = await db.routeStore.addRoute(burrenList._id, jugcity)
    const newRoute = await db.routeStore.getRouteById(route._id);
    assertSubset (jugcity, newRoute);
  });

  test("delete One Route - success", async () => {
    const id = testRoutes[0]._id;
    await db.routeStore.deleteRoute(id);
    const routes = await db.routeStore.getAllRoutes();
    assert.equal(routes.length, testCrags.length - 1);
    const deletedRoute = await db.routeStore.getRouteById(id);
    assert.isNull(deletedRoute);
  });

  test("get a crag - bad params", async () => {
    assert.isNull(await db.routeStore.getRouteById(""));
    assert.isNull(await db.routeStore.getRouteById());
  });

  test("delete One User - fail", async () => {
    await db.routeStore.deleteRoute("bad-id");
    const routes = await db.routeStore.getAllRoutes();
    assert.equal(routes.length, testCrags.length);
  });
});