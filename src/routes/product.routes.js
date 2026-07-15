const express = require("express");
const asyncWrapper = require("../utils/wrapper").asyncWrapper;
const productControllers = require("../controllers/product.controllers");
const Router = express.Router();


Router.get("/get/search", asyncWrapper(productControllers.searchProducts));


Router.get("/", asyncWrapper(productControllers.getAllProducts));


Router.get("/:id", asyncWrapper(productControllers.getProductById));






module.exports = Router;


