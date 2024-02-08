// @desc Get all menu items
// @route Get api/menu
// @access public (until I add authentication)

const getMenuItems = (req, res) => {
  res.status(200).json({ message: "get all menu items" });
};

const createMenuItem = (req, res) => {
  res.status(201).json({ message: "create menu item" });
};

const updateMenuItemById = (req, res) => {
  res.status(200).json({ message: "update menu item" });
};

const deleteMenuItemById = (req, res) => {
  res.status(200).json({ message: "delete menu item" });
};

export { getMenuItems, createMenuItem, updateMenuItemById, deleteMenuItemById };
