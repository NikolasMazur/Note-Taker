const router = require("express").Router();
let data = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

// Get router
router.get("/notes", (req, res) => {
  console.log({ data });
  res.json(data);
});

