import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, burren, testCrags, testRoutes, jugcity } from "../fixtures.js";

suite("Route API tests", () => {
  let user = null;
  let ballyryan = null;

  setup(async () => {
    // placemarkService.clearAuth();
    // user = await placemarkService.createUser(maggie);
    // await placemarkService.authenticate(maggie);
     await placemarkService.deleteAllCrags();
     await placemarkService.deleteAllUsers();
     await placemarkService.deleteAllRoutes();
     user = await placemarkService.createUser(maggie);
    // await placemarkService.authenticate(maggie);
     burren.userid = user._id;
     ballyryan = await placemarkService.createCrag(burren);
  });
  teardown(async () => {});

  test("create route", async () => {
    const returnedRoute = await placemarkService.createRoute(ballyryan._id, jugcity);
    assertSubset(jugcity, returnedRoute);
  });

  test("create Multiple routes", async () => {
    for (let i = 0; i < testRoutes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createRoute(ballyryan._id, testRoutes[i]);
    }
    const returnedRoutes = await placemarkService.getAllRoutes();
    assert.equal(returnedRoutes.length, testRoutes.length);
    for (let i = 0; i < returnedRoutes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const route = await placemarkService.getRoute(returnedRoutes[i]._id);
      assertSubset(route, returnedRoutes[i]);
    }
  });

  test("Delete RouteApi", async () => {
    for (let i = 0; i < testRoutes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createRoute(ballyryan._id, testRoutes[i]);
    }
    let returnedRoutes = await placemarkService.getAllRoutes();
    assert.equal(returnedRoutes.length, testRoutes.length);
    for (let i = 0; i < returnedRoutes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const route = await placemarkService.deleteRoute(returnedRoutes[i]._id);
    }
    returnedRoutes = await placemarkService.getAllRoutes();
    assert.equal(returnedRoutes.length, 0);
  });

  test("denormalised crag", async () => {
    for (let i = 0; i < testRoutes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createRoute(ballyryan._id, testRoutes[i]);
    }
    const returnedCrag = await placemarkService.getCrag(ballyryan._id);
    assert.equal(returnedCrag.routes.length, testRoutes.length);
    for (let i = 0; i < testRoutes.length; i += 1) {
      assertSubset(testRoutes[i], returnedCrag.routes[i]);
    }
  });
});
