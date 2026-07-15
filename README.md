# E-Commerce Backend

## Project Overview
This project is a complete backend for an E-Commerce application. It provides a RESTful API for managing users, products, categories, shopping carts, orders, coupons, and other core e-commerce features. The project is designed with scalability, maintainability, and security in mind.

## Features
- Authentication and Authorization using JWT.
- Complete Product and Category Management.
- Shopping Cart and Order Management.
- Secure Payment Gateway Integration using Paymob.
- Coupon and Discount System.
- Data validation using Zod.
- Centralized Error Handling.
- API Documentation using Swagger.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **Validation:** Zod
- **Payment Gateway:** Paymob
- **Documentation:** Swagger

## Environment Variables

Create a `.env` file in the project root and add the following variables (you can use `.env.example` as a reference):

```env
SERVER_PORT=5000
DATABASE_URL=mongodb://localhost:27017/eCommerce
JWT_ACCESS_SECRET=your_access_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key
BCRYPT_SALT_ROUNDS=10
PAYMOB_API_KEY=your_paymob_api_key
PAYMOB_INTEGRATION_ID=your_integration_id
PAYMOB_IFRAME_ID=your_iframe_id
PAYMOB_HMAC=your_paymob_hmac
```

## API Endpoints

Some of the main endpoints included in the project:

- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – Authenticate a user.
- `GET /api/products` – Retrieve all products.
- `POST /api/orders` – Create a new order.
- `POST /api/payment/paymob/pay` – Initiate a Paymob payment session.
- `POST /api/payment/paymob/webhook` – Handle Paymob transaction webhooks.

> Full API documentation (Swagger) is available at `/api-docs` when running the server.

## Project Structure

```text
Back-end/
├── src/
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Middleware (authentication, authorization, error handling, etc.)
│   ├── repositories/     # Database access layer
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── testing/          # Test files
├── .env.example          # Environment variables example
├── app.js / main.js      # Application entry point
└── package.json          # Dependencies and scripts
```