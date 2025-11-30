# Tripleten web_project_api_full
![Project Banner](https://github.com/user-attachments/assets/0a104bfd-b418-4dae-9954-a68002c3a517)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Deployment](https://img.shields.io/badge/Deployed-GCP-orange?logo=googlecloud)
![Status](https://img.shields.io/badge/Status-Active-success)






A complete **full-stack web application** featuring **authentication**, **card management**, **REST API**, and **production-ready deployment**.

> ✔️ **Upcoming improvement:** Automated tests will be implemented to increase reliability and maintainability.

---

# 🚀 About the Project

This application allows users to:

* Register and log in with email and password
* Update profile (name, about, avatar)
* Create and delete cards with images
* Like and unlike cards
* View all cards from all users

Built with a clean architecture, secure practices, and a scalable structure.

---

# 🛠️ Technologies Used

---

## 🟦 Backend (Node.js)

### **Framework & Runtime**

* Node.js
* Express.js

### **Database**

* MongoDB
* Mongoose

### **Authentication & Security**

* JWT (jsonwebtoken)
* bcryptjs
* validator
* celebrate / joi

### **Middleware & Utilities**

* cors
* helmet
* express-rate-limit
* dotenv

---

## 🟩 Frontend (React)

### **Framework & Build Tools**

* React
* Vite
* JavaScript ES6+

### **Styling**

* CSS3
* CSS Modules

### **State Management**

* React Hooks
* Context API

---

## ⚙️ DevOps & Deployment

### **Server & Hosting**

* Google Cloud Platform
* Ubuntu 20.04

### **Web Server & Proxy**

* NGINX
* Let’s Encrypt
* Certbot

### **Process Management**

* PM2
* PM2 Ecosystem

### **Domain & DNS**

* FreeDNS
* HTTPS enabled

---

## 🧰 Development Tools

### **Version Control**

* Git
* GitHub

### **Package Management**

* npm

### **Development Environment**

* VS Code
* ESLint
* Prettier

---

## 🧪 Testing & Debug Tools

*(Automated tests coming soon)*

### **API Testing**

* Postman
* curl

### **Monitoring**

* PM2 Logs
* NGINX Logs
* journalctl

---

## 🌐 Protocols & Standards

### **Web Standards**

* HTTP / HTTPS
* RESTful API
* JSON

### **Security**

* CORS
* JWT
* SSL / TLS

---

# 🔑 Environment Variables

| Variable      | Description               |
| ------------- | ------------------------- |
| `NODE_ENV`    | Execution environment     |
| `JWT_SECRET`  | Secret key for JWT        |
| `MONGODB_URI` | MongoDB connection string |

---

# 📁 Project Structure

```
web_project_api_full/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

# 🔧 Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/web_project_api_full.git
cd web_project_api_full
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a **.env** file:

```
NODE_ENV=development
JWT_SECRET=your_super_secure_secret_key
MONGODB_URI=mongodb://localhost:27017/aroundb
```

---

## 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

# 🏃 Running the Project

## Backend

```bash
cd backend
npm run dev
```

## Frontend

```bash
cd frontend
npm run dev
```

---

# 🟩 Production with PM2

```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 status
pm2 logs
```

---

# 🌐 Deployment

### Cloud Server

* Google Cloud Platform
* Ubuntu 20.04
* Node.js
* MongoDB
* NGINX

### Domain & SSL

* [https://mayzaynara.com](https://mayzaynara.com)
* [https://api.mayzaynara.com](https://api.mayzaynara.com)
* Automatic SSL with Let’s Encrypt

---

# 📎 License

This project is licensed under the **MIT License**.

---

Quer que eu gere também:
✅ uma **versão com screenshots**,
✅ uma **versão com GIF** mostrando o app,
ou
✅ uma **versão com tabela de endpoints da API**?
