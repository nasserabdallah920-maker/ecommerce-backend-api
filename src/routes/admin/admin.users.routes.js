const express = require("express");
const Router = express.Router();

const {adminUsersControllers} = require("../../controllers/index.controllers");
const { asyncWrapper } = require("../../utils/wrapper");
const { adminOnly } = require("../../middlewares/role.middleware");
const { protect } = require("../../middlewares/auth.middleware");

Router.use(protect, adminOnly);
Router.get("/get/:id", asyncWrapper(adminUsersControllers.getUser));
Router.get("/getall", asyncWrapper(adminUsersControllers.getAllUsers));
Router.get("/search/user", asyncWrapper(adminUsersControllers.searchForUser));
Router.delete("/delete/user/:id", asyncWrapper(adminUsersControllers.deleteUser));

module.exports = Router;
