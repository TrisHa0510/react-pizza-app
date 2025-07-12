# 🍕 React Pizza Delivery App

A full-stack **Pizza Delivery Web Application** built using **React (frontend)**, **Node.js/Express (backend)**, and **MongoDB (database)**. This app allows users to browse, customize, and order pizzas while providing an admin dashboard to manage inventory and track orders in real time.

---

## 🧑‍🍳 How It Works

### 🔸 USER JOURNEY (Step-by-Step)

1. **Login**
   - User logs in with their username and password.

2. **Dashboard**
   - User sees a list of available pizzas with images and descriptions.

3. **Customize Pizza**
   - User selects base, sauce, cheese, and toppings.
   - Real-time price calculation is shown.

4. **Add to Cart**
   - Customized pizza is added to the shopping cart.

5. **View Cart & Order Summary**
   - User can view items, change quantities, or remove pizzas.

6. **Place Order**
   - User enters delivery address and submits the order.
   - A success page is shown with estimated cooking/delivery time.

7. **Download Receipt**
   - User can download a PDF receipt of the order.

8. **Track Order**
   - User can check real-time status (Cooking → Out for Delivery → Delivered).

---

### 🔸 ADMIN JOURNEY (Step-by-Step)

1. **Admin Login**
   - Admin logs in via a dedicated admin panel.

2. **View Orders**
   - Admin can view a list of all customer orders with real-time status.

3. **Track Inventory**
   - Admin can view current stock of:
     - Pizza Base
     - Sauces
     - Cheese
     - Veggies

4. **Inventory Auto-Update**
   - Whenever an order is placed, the corresponding stock reduces automatically.

5. **Low Stock Notification**
   - If any ingredient goes below threshold, admin receives an email alert via Nodemailer.

6. **Update Order Status**
   - Admin can manually update order progress (e.g., from "Cooking" to "Delivered").

---

## 🚀 Features

### 👨‍🍳 User Side
- 🔐 Login system
- 🍕 Pizza customization
- 🛒 Shopping cart
- 📦 Order summary
- 💵 Payment-ready integration
- 📄 PDF receipt
- 📍 Order tracking

### 🛠 Admin Side
- 👤 Admin login
- 📃 View all orders
- 🧮 Inventory management
- ✉️ Email alerts for low stock
- ✅ Update order status

---

## 🧑‍💻 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | React, Tailwind CSS |
| Backend     | Node.js, Express    |
| Database    | MongoDB (Mongoose)  |
| Email       | Nodemailer          |
| Payment     | Razorpay (optional) |
| PDF Export  | pdf-lib or jspdf    |

---



