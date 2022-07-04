const express = require("express");

const router = express.Router();
const usersBL = require("../models/usersDbBL copy");

router.get("/", async (req, resp) => {
  let users = await usersBL.getAllUsers();
  return resp.json(users);
});

router.get("/:id", async (req, resp) => {
  let user = await usersBL.getUser(req.params.id);
  return resp.json(user);
});

router.post("/", async function (req, res) {
  let obj = req.body;
  let status = await usersBL.createUser(obj);
  return res.json(status);
});

router.put("/:id", async function (req, res) {
  let id = req.params.id;
  let obj = req.body;
  console.log(obj);
  let status = await usersBL.updateUser(id, obj);
  return res.json(status);
});

router.delete("/:id", async (req, resp) => {
  let user = await usersBL.deleteUser(req.params.id);
  return resp.json(user);
});
module.exports = router;
