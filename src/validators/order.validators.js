const { z } = require("zod");

const createOrderSchema = z.object({
  shippingAddress: z.object({
    city: z.string(),
    street: z.string(),
    phone: z.string(),
  }),
  paymentMethod: z.enum(["cash", "card"]),
  coupon: z.string().optional().nullable(),
});

const updateOrderStatusSchema = z.object({
  newStatus: z.enum([
    "pending",
    "confirmed",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ]),
});

module.exports = { createOrderSchema, updateOrderStatusSchema };
