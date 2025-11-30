# Tripleten web_project_api_full
![Project Banner](https://github.com/user-attachments/assets/0a104bfd-b418-4dae-9954-a68002c3a517)



A complete **full-stack web application** featuring **user authentication**, **card management**, and seamless deployment with modern DevOps practices.

---

## 🚀 About the Project

This project delivers a fully functional web application that allows users to:

* Register and log in using email and password
* Update profile information (name, about, avatar)
* Create and delete image-based cards
* Like and unlike cards
* View cards created by all users

The project follows clean architecture, modular code organization, and secure development practices.

---

## 🛠️ Tech Stack

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* CORS
* validator
* celebrate / joi

### **Frontend**

* React
* Vite
* CSS3
* JavaScript ES6+

### **DevOps & Deployment**

* PM2
* NGINX
* Let’s Encrypt SSL
* Google Cloud Platform

---

## 📁 Project Structure

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

## 🔧 Installation & Setup

### **Prerequisites**

* Node.js (v14+)
* MongoDB
* npm or yarn

---

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/web_project_api_full.git
cd web_project_api_full
```

---

### **2. Set Up the Backend**

```bash
cd backend
npm install
```

Create a **.env** file inside `backend/`:

```
NODE_ENV=development
JWT_SECRET=your_super_secure_secret_key
MONGODB_URI=mongodb://localhost:27017/aroundb
```

---

### **3. Set Up the Frontend**

```bash
cd ../frontend
npm install
```

---

## 🚀 Running the Project

### **Local Development**

#### Backend:

```bash
cd backend
npm run dev
```

#### Frontend:

```bash
cd frontend
npm run dev
```

---

## 🟩 Production with PM2

### Install PM2 globally:

```bash
npm install -g pm2
```

### Start the app:

```bash
pm2 start ecosystem.config.js
```

### Check status:

```bash
pm2 status
```

### View logs:

```bash
pm2 logs
```

---

## 🌐 Production Deployment

### **1. Cloud Server**

Hosted on Google Cloud Platform with:

* Ubuntu 20.04
* Node.js
* MongoDB
* NGINX reverse proxy

---

### **2. Domain & SSL**

* Frontend: **[https://mayzaynara.com](https://mayzaynara.com)**
* API: **[https://api.mayzaynara.com](https://api.mayzaynara.com)**
* SSL Certificates: Let’s Encrypt (auto-renewal)

---

### **3. Example NGINX Configuration**

```nginx
server {
  server_name api.mayzaynara.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

---

## 📎 License

Licensed under the **MIT License**.

---

