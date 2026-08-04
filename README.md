# 🍿 Liz Pleasure Delight

> A modern full-stack e-commerce snack ordering platform for premium peanuts and popcorn, built with **Django REST Framework** and **React (Vite)**.

---

## 📖 About the Project

Liz Pleasure Delight is an online snack ordering platform designed to make it easy for customers to browse, order, and pay for delicious varieties of peanuts and popcorn.

The project is being developed using a modern full-stack architecture:

- **Backend:** Django + Django REST Framework
- **Frontend:** React + Vite
- **Database:** SQLite (Development)
- **Authentication:** Django Authentication & DRF
- **Version Control:** Git & GitHub

The goal is to build a scalable, responsive, and production-ready e-commerce application.

---

# 🚀 Project Status

**Current Stage:** 🚧 In Development

### Backend

✅ Project initialized

✅ Django configured

✅ Django REST Framework installed

✅ Products app created

✅ Products model created

✅ Product serializer implemented

✅ Product API endpoints created

✅ Product filtering implemented

✅ Database migrations completed

✅ API testing started

### Frontend

✅ React project initialized using Vite

✅ ESLint configured

✅ Project structure created

🚧 React components currently being developed

---

# 🏗️ Tech Stack

## Backend

- Python
- Django
- Django REST Framework
- SQLite

## Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

## Tools

- Git
- GitHub
- VS Code

---

# 📂 Project Structure

```
liz-pleasure-delight/

│
├── backend/
│   ├── products/
│   ├── orders/
│   ├── users/
│   ├── reviews/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ✨ Planned Features

## Customer Features

- Home page
- Featured products
- Product categories
- Search products
- Product filtering
- Product details
- Shopping cart
- Checkout
- Customer authentication
- Order history
- Reviews and ratings
- Contact page
- About page

---

## Admin Features

- Manage products
- Manage categories
- Manage inventory
- Manage orders
- Manage customers
- View analytics
- Manage reviews

---

# 🥜 Product Categories

### Peanuts

- Honey Roasted Peanuts
- Salted Peanuts
- Spicy Peanuts
- Dry Roasted Peanuts
- Mixed Peanuts

### Popcorn

- Butter Popcorn
- Caramel Popcorn
- Cheese Popcorn
- Sweet Popcorn
- Spicy Popcorn

### Snack Mixes

- Peanut & Popcorn Mix
- Premium Snack Mix
- Family Combo
- Party Pack

---

# 📡 API Development

## Completed Endpoints

### Products

| Method | Endpoint | Status |
|---------|----------|--------|
| GET | `/api/products/` | ✅ |
| POST | `/api/products/` | ✅ |
| GET | `/api/products/?category=` | ✅ Filtering |

---

# 🗄️ Database

Current model includes:

### Product

- Name
- Description
- Price
- Stock
- Category
- Image
- Created Date

---

# 🧪 Testing

Testing currently includes:

- API endpoint testing
- Product creation
- Product retrieval
- Product filtering

Additional testing will be added as development progresses.

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/liz-pleasure-delight.git
```

## Navigate to Backend

```bash
cd liz-pleasure-delight/backend
```

## Create Virtual Environment

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Migrations

```bash
python manage.py migrate
```

## Start Development Server

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

# Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173/
```

---

# 📸 Future Improvements

- JWT Authentication
- Wishlist
- Coupons
- Email Notifications
- Payment Integration (Paystack)
- Order Tracking
- Responsive UI
- Admin Dashboard
- Image Uploads
- Search Suggestions
- Product Recommendations
- Pagination
- Docker Deployment
- PostgreSQL Migration
- Redis Caching
- CI/CD Pipeline

---

# 📅 Development Roadmap

### Phase 1

- [x] Django Setup
- [x] DRF Setup
- [x] Product Model
- [x] Product API
- [x] API Testing

### Phase 2

- [x] React Setup
- [ ] Home Page
- [ ] Navigation
- [ ] Product Cards
- [ ] Product Details

### Phase 3

- [ ] Shopping Cart
- [ ] Checkout
- [ ] Authentication
- [ ] Orders

### Phase 4

- [ ] Payment Integration (Paystack)
- [ ] Reviews
- [ ] Deployment

---

# 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Emmanuel Ushie Omagu**

- GitHub: https://github.com/Omagujr8

---

# 📄 License

This project is licensed under the MIT License.

---

## 🎯 Vision

The long-term vision of **Liz Pleasure Delight** is to become a complete, production-ready snack ordering platform with a clean user experience, secure online payments, efficient inventory management, and a scalable architecture that can support business growth.
