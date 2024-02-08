import express from "express";
import {
  createMenuItem,
  deleteMenuItemById,
  getMenuItems,
  updateMenuItemById,
} from "../controllers/menu/menuController";
const router = express.Router();

// biz requirements
// kiosk user needs
//  get all menu items
//  get all categories
//  get menu item by category
// admin user needs -- in reality, this should be a separate app
//  create, update, delete menu item
//  create, update, delete category

router.route("/").get(getMenuItems).post(createMenuItem);

router.route("/:id").post(updateMenuItemById).delete(deleteMenuItemById);

export = router;
