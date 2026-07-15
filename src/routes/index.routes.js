const express = require("express");
const Router = express.Router();
const userRouter = require("./user.routes");
const productRouter = require("./product.routes");
const categoryRouter = require("./categories.routes");
const authRouter = require("./auth.routes");
const adminUsersRouter = require("./admin/admin.users.routes");
const adminProductsRouter = require("./admin/admin.products.routes");
const adminCategoriesRouter = require("./admin/admin.categories.routes");
const adminOrdersRouter = require("./admin/admin.orders.routes");
const adminCouponsRouter = require("./admin/admin.coupons.routes");
const cartRouter = require("./cart.routes");
const orderRouter = require("./order.routes");
const paymobRouter = require("./paymob.routes")
Router.use("/users", userRouter);
Router.use("/products", productRouter);
Router.use("/categories", categoryRouter);
Router.use("/cart", cartRouter);
Router.use("/auth", authRouter);
Router.use("/order", orderRouter);
Router.use("/admin/orders", adminOrdersRouter);
Router.use("/admin/coupons", adminCouponsRouter);
Router.use("/admin/users", adminUsersRouter);
Router.use("/admin/products", adminProductsRouter);
Router.use("/admin/categories", adminCategoriesRouter);
Router.use('/paymob',paymobRouter)

module.exports = Router;
