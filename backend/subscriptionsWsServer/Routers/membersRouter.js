const express = require("express");

const router = express.Router();
const membersBL = require("../models/membersBL copy");

router.get("/", async (req, resp) => {
  let members = await membersBL.getAllMembers();
  return resp.json(members);
});

router.get("/:id", async (req, resp) => {
  let movie = await membersBL.getMember(req.params.id);
  return resp.json(movie);
});

router.post("/", async function (req, res) {
  let obj = req.body;
  let status = await membersBL.createMember(obj);
  res.json(status);
});

router.put("/:id", async function (req, res) {
  let id = req.params.id;
  let obj = req.body;
  console.log(obj);
  let status = await membersBL.updateMember(id, obj);
  return res.json(status);
});

router.delete("/:id", async (req, resp) => {
  let member = await membersBL.deleteMember(req.params.id);
  return resp.json(member);
});
module.exports = router;
