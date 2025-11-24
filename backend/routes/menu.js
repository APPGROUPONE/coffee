const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  //   console.log(mongoose.connections[0].useDb("coffe").collection("menu_items"));
  const items = await mongoose.connections[0]
    .useDb("coffe")
    .collection("menu_items")
    .find({})
    .toArray();

  console.log(items);
  return res.json(items);
});

module.exports = router;
