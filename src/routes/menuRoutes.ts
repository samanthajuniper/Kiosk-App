import express from "express";
const router = express.Router();

// biz requirements
// kiosk user needs
//  get all menu items
//  get all categories
//  get menu item by category
// admin user needs
//  create, update, delete menu item
//  create, update, delete category

router.route("/").get((req, res) => {
  res.status(200).json({ message: "get all menu items" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "create menu item" });
});

router.route("/:id").post((req, res) => {
  res.status(200).json({ message: "update menu item" });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: "delete menu item" });
});

export = router;
