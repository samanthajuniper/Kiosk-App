import asyncHandler from "express-async-handler";

// @desc Get all menu items
// @route Get api/menu
// @access public (until I add authentication)

const getMenuItems = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all menu items" });
});

const createMenuItem = asyncHandler(async (req, res) => {
  console.log("req body", req.body);
  const { title, description, cost } = req.body;
  if (!title || !description || !cost) {
    res.status(400);
    throw new Error("Missing required menu item fields");
  }
  res.status(201).json({ message: req.body });
});

const updateMenuItemById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update menu item" });
});

const deleteMenuItemById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete menu item" });
});

export { getMenuItems, createMenuItem, updateMenuItemById, deleteMenuItemById };
