const express = require("express");
const usersBL = require("../models/usersBL");
const router = express.Router();

router.get("/", async (req, res) => {
  let cars = await usersBL.getUsers();
  return res.json(cars);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;

  let user = await usersBL.getUser(id);

  return res.json(user);
});

router.post("/", async (req, res) => {
  let obj = req.body;
  let status = await usersBL.addUser(obj);
  return res.json(status);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let obj = req.body;

  let status = await usersBL.updateUser(id, obj);
  res.json(status);
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let status = await usersBL.deleteUser(id);
  return res.json(status);
});

module.exports = router;
