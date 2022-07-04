const express = require("express");
const permissionsBL = require("../models/permissionsBL");
const router = express.Router();

router.get("/", async (req, res) => {
  let cars = await permissionsBL.getPermissions();
  return res.json(cars);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;

  let user = await permissionsBL.getPemissionByUserId(id);

  return res.json(user);
});

router.post("/", async (req, res) => {
  let obj = req.body;
  let status = await permissionsBL.addPermission(obj);
  return res.json(status);
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let obj = req.body;

  let status = await permissionsBL.updatePemissionByUserId(id, obj);
  return res.json(status);
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let status = await permissionsBL.deletePermissions(id);
  return res.json(status);
});

module.exports = router;
