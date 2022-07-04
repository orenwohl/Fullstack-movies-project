const express = require("express");

const router = express.Router();
const SubscriptionBL = require("../models/subscriptionBL");

router.get("/", async (req, resp) => {
  let users = await SubscriptionBL.getAllSubscriptions();
  return resp.json(users);
});

router.get("/:id", async (req, resp) => {
  let user = await SubscriptionBL.getSubcsriptionById(req.params.id);
  return resp.json(user);
});

router.get("/movie/:id", async (req, resp) => {
  let user = await SubscriptionBL.getSubcsriptionByMoviceId(req.params.id);
  return resp.json(user);
});

router.delete("/movie/:id", async (req, resp) => {
  let user = await SubscriptionBL.deleteSubscriptionByMovieId(req.params.id);
  return resp.json(user);
});

router.post("/", async function (req, res) {
  let obj = req.body;
  let status = await SubscriptionBL.createSubscription(obj);
  return res.json(status);
});

router.put("/:id", async function (req, res) {
  let id = req.params.id;
  let obj = req.body;
  console.log(obj);
  let status = await SubscriptionBL.updatSubscription(id, obj);
  return res.json(status);
});

// router.delete("/:id", async (req, resp) => {
//   let user = await SubscriptionBL.deleteSubscriptionw(req.params.id);
//   return resp.json(user);
// });

router.delete("/:id", async (req, resp) => {
  let user = await SubscriptionBL.deleteSubscription(req.params.id);
  return resp.json(user);
});
module.exports = router;
