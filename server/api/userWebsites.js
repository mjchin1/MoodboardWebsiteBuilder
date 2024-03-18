const express = require("express");
const router = express.Router();

const {
  getAllUserWebsites,
  getUserWebsiteById,
  addToSavedWebsites,
  deleteSavedWebsite,
  getSavedWebsitesByUserId,
} = require("../db/sqlHelperFunctions/websiteContent");

router.get("/", async (req, res, next) => {
  try {
    const websites = await getAllUserWebsites();
    res.send(websites);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const website = await addToSavedWebsites();
    res.send(website);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const website = await getUserWebsiteById(req.params.id);
    res.send(website);
  } catch (error) {
    next(error);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const website = await getSavedWebsiteByUserId(req.params.id);
    res.send(website);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const website = await deleteSavedWebsite(req.params.id);
    res.send(website);
  } catch (error) {
    next(error);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    const website = await getSavedWebsitesByUserId(req.params.id);
    res.send(website);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
