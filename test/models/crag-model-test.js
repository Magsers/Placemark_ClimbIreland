import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { burren, testCrags } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Crag Model tests", () => {

  setup(async () => {
    db.init("mongo");
    await db.cragStore.deleteAllCrags();
    for (let i = 0; i < testCrags.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testCrags[i] = await db.cragStore.addCrag(testCrags[i]);
    }
  });

  test("create a crag", async () => {
    const crag = await db.cragStore.addCrag(burren);
    assertSubset(burren, crag);
    assert.isDefined(crag._id);
  }); 

  test("delete all crags", async () => {
    let returnedCrags = await db.cragStore.getAllCrags();
    assert.equal(returnedCrags.length, 3);
    await db.cragStore.deleteAllCrags();
    returnedCrags = await db.cragStore.getAllCrags();
    assert.equal(returnedCrags.length, 0);
  });

  test("get a crag - success", async () => {
    const crag = await db.cragStore.addCrag(burren);
    const returnedCrag = await db.cragStore.getCragById(crag._id);
    assertSubset(burren, crag);
  });

  test("delete One Crag - success", async () => {
    const id = testCrags[0]._id;
    await db.cragStore.deleteCragById(id);
    const returnedCrags = await db.cragStore.getAllCrags();
    assert.equal(returnedCrags.length, testCrags.length - 1);
    const deletedCrag = await db.cragStore.getCragById(id);
    assert.isNull(deletedCrag);
  });

  test("get a crag - bad params", async () => {
    assert.isNull(await db.cragStore.getCragById(""));
    assert.isNull(await db.cragStore.getCragById());
  });

  test("delete One Crag - fail", async () => {
    await db.cragStore.deleteCragById("bad-id");
    const allCrags = await db.cragStore.getAllCrags();
    assert.equal(testCrags.length, allCrags.length);
  });
});