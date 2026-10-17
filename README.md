# Madhav Garg — Full-Stack MERN Developer Portfolio

A full-stack personal developer portfolio built with the modern **MERN** stack (**M**ongoDB, **E**xpress.js, **R**eact 19, **N**ode.js). Designed with a warm editorial aesthetic—featuring warm ivory (`#F5F0E7`), champagne gold (`#C7A052`), soft charcoal (`#252522`), and muted sand (`#D9CBB7`) in light mode, with deep slate (`#111317` / `#191C22`) in dark mode.

---

## 🚀 Key Features & Assignment Requirements Overview

| Requirement | Implementation & Architectural Details |
| :--- | :--- |
| **#1. Hero Section** | Responsive introduction with animated typography, role descriptors, coordinates, and Express-backed CV download trigger. |
| **#2. Navigation Bar** | Fixed backdrop-blur navbar with dynamic logo, anchor links, theme switcher (Light/Dark mode), and mobile menu. |
| **#3. Project Showcase** | Categorized project grid with category tabs (`All`, `Cybersecurity`, `Distributed Systems`), metrics, GitHub links, and live demo buttons. |
| **#4. About Section** | Academic and personal biography with degree, institution, and engineering philosophy. |
| **#5. Categorized Skills** | Technical proficiency meters across **Frontend**, **Backend & APIs**, and **Systems & Tools** with interactive hover cards. |
| **#6. Education & Timeline** | Interactive chronological timeline spanning academic milestones (JKLU B.Tech CSE) and practical engineering projects. |
| **#7. Certifications & Honors** | Accredited licensures, hackathon accolades, credential ID copy buttons, visual placeholders, and interactive certificate preview modal. |
| **#8. Contact Form & API** | Full-stack contact form with client validation, Express REST API, server-side sanitization, IP rate limiting, and Mongoose schema persistence. |
| **#9. Visual System & Theming** | Editorial typography (`Cormorant Garamond` serif + `Plus Jakarta Sans` + `JetBrains Mono`), dark/light theme persistence, and mobile responsiveness. |
| **#10. Deployment Readiness** | Environment-driven API endpoints, multi-origin CORS, single or split deployment compatibility, and comprehensive documentation. |

---

## 🛠️ Technology Stack

- **Frontend**:
  - **React 19** (Ultra-fast UI runtime)
  - **Vite 8** (Next-generation ES module bundler)
  - **Tailwind CSS v3** (Custom editorial design tokens, dark mode classes)
  - **Framer Motion** (Scroll-driven animations, exit transitions)
  - **Lucide React** (Accessible iconography)
- **Backend**:
  - **Node.js** (v18+ or v20+ LTS recommended)
  - **Express.js v4** (REST API framework)
  - **Mongoose v8** (Object Data Modeling for MongoDB)
  - **CORS** (Configurable multi-origin whitelist)
  - **dotenv** (Environment variable loader)
- **Database**:
  - **MongoDB** (Local instance or MongoDB Atlas cloud cluster)

---

## 📁 Repository Structure

```text
madhav-portfolio/
├── client/                               # Frontend React + Vite application
│   ├── public/                           # Static assets, favicons
│   ├── src/
│   │   ├── components/                   # Modular UI components
│   │   │   ├── AboutSection.jsx          # Biography & engineering philosophy
│   │   │   ├── CertificationsSection.jsx # Accredited qualifications & modal
│   │   │   ├── ContactSection.jsx        # Validated full-stack contact form
│   │   │   ├── Footer.jsx                # Brand signature & live API indicator
│   │   │   ├── HeroSection.jsx           # Animated landing hero & CV action
│   │   │   ├── Logo.jsx                  # Monogram vector logo
│   │   │   ├── Navbar.jsx                # Responsive navbar & dark/light toggle
│   │   │   ├── ProjectShowcase.jsx       # Categorized project showcase grid
│   │   │   └── TimelineSection.jsx       # Education & experience timeline
│   │   ├── config/
│   │   │   └── api.js                    # Centralized API & asset URL resolver
│   │   ├── data/
│   │   │   ├── credentialsData.js        # Data configuration for certs & awards
│   │   │   ├── projectsData.js           # Data configuration for showcase
│   │   │   └── timelineData.js           # Data configuration for timeline
│   │   ├── hooks/
│   │   │   └── useTheme.js               # Theme state manager with localStorage
│   │   ├── pages/
│   │   │   ├── FoundationPage.jsx        # Architecture verification screen
│   │   │   └── HomePage.jsx              # Main assembled portfolio page
│   │   ├── services/
│   │   │   └── contactService.js         # API client for POST /api/contact
│   │   ├── index.css                     # Tailwind directives & custom grain styles
│   │   └── main.jsx                      # React 19 entry point
│   ├── .env.example                      # Client environment template
│   ├── package.json                      # Client dependencies & scripts
│   └── vite.config.js                    # Vite bundler config
│
├── server/                               # Backend Express.js REST API
│   ├── public/
│   │   └── resumes/                      # Downloadable CVs (madhav-garg-resume.pdf)
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                     # MongoDB connection manager with fail-safe
│   │   │   └── env.js                    # Environment variable parser
│   │   ├── controllers/
│   │   │   ├── contactController.js      # Contact submission & DB persistence
│   │   │   └── healthController.js       # Health check & database diagnostics
│   │   ├── middleware/
│   │   │   ├── errorHandler.js           # 404 & global exception middleware
│   │   │   ├── rateLimiter.js            # In-memory IP rate limiter (anti-spam)
│   │   │   └── validateContact.js        # Server-side validation & sanitization
│   │   ├── models/
│   │   │   └── Contact.js                # Mongoose schema for contact messages
│   │   ├── routes/
│   │   │   ├── contactRoutes.js          # POST /api/contact route
│   │   │   ├── healthRoutes.js           # GET /api/health route
│   │   │   └── index.js                  # Central modular router aggregator
│   │   └── server.js                     # Express app setup, CORS & static handler
│   ├── .env.example                      # Server environment template
│   └── package.json                      # Server dependencies & scripts
│
├── .gitignore                            # Root exclusions (node_modules, .env, dist)
├── package.json                          # Root convenience & production build scripts
└── README.md                             # Comprehensive project documentation
```

---

## ⚙️ Environment Variables

The project uses separate `.env` configurations for client and server. Templates with safe example values are provided in `.env.example` files.

### 1. Backend (`server/.env`)
Create `server/.env` based on `server/.env.example`:

```env
# Server Network Port (Hosting platforms like Render will inject this automatically)
PORT=5000

# Environment Mode
NODE_ENV=development

# Allowed Origins for CORS (comma-separated list for production)
CLIENT_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,https://madhav-portfolio.vercel.app

# MongoDB Connection String
# Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/madhav_portfolio
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/madhav_portfolio?retryWrites=true&w=majority
```

### 2. Frontend (`client/.env`)
Optional. The frontend automatically defaults to relative same-origin API URLs (`''`), working seamlessly with Express unified hosting and the Vite development proxy.

When hosting the frontend separately from the backend (e.g., Vercel + Render split deployment), create `client/.env` based on `client/.env.example`:

```env
# Set when frontend is hosted separately from backend (e.g. Vercel)
VITE_API_BASE_URL=https://madhav-portfolio-rpef.onrender.com
```

---

## 🛠️ Local Installation & Startup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB** (Optional for local testing; the app handles offline database states gracefully)

### 1. Install Dependencies
Install dependencies for both client and server from the root directory:
```bash
npm run install:all
```
*(Or run `npm install` inside `/client` and `/server` respectively).*

### 2. Configure Environment Files
```bash
# In the /server directory
cp .env.example .env

# In the /client directory (optional, defaults to localhost:5000 in dev)
cp .env.example .env
```

### 3. Run the Development Servers
Open two terminal windows:

**Terminal 1 — Backend Express Server:**
```bash
npm run server
```
- Server URL: `http://localhost:5000`
- Health Endpoint: `http://localhost:5000/api/health`

**Terminal 2 — Frontend Client:**
```bash
npm run client
```
- Client URL: `http://localhost:5173`

---

## 📡 API Endpoints & Contracts

### 1. Health & Diagnostics
- **Method**: `GET /api/health`
- **Description**: Returns server uptime, operational status, and MongoDB connection status.
- **Sample 200 OK Response**:
  ```json
  {
    "success": true,
    "status": "healthy",
    "service": "madhav-portfolio-api",
    "uptime": 226,
    "environment": "development",
    "database": {
      "status": "connected",
      "configured": true
    }
  }
  ```

### 2. Submit Contact Message
- **Method**: `POST /api/contact`
- **Rate Limit**: 30 requests per 15-minute window per IP.
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "Prof. Ananya Sen",
    "email": "ananya.sen@jklu.edu.in",
    "message": "Hello Madhav, I would like to invite you for an academic interview."
  }
  ```
- **Validation Rules**:
  - `name`: Required string, 2–100 characters.
  - `email`: Required string, RFC 5322 regex format, max 254 characters.
  - `message`: Required string, 10–3000 characters.
- **Success Response (`201 Created`)**:
  ```json
  {
    "success": true,
    "message": "Thank you! Your message has been received and saved successfully.",
    "data": {
      "id": "67b34e89291fa1203",
      "name": "Prof. Ananya Sen",
      "email": "ananya.sen@jklu.edu.in",
      "createdAt": "2026-10-17T11:00:00.000Z"
    }
  }
  ```
- **Database Offline Fallback (`503 Service Unavailable`)**:
  If MongoDB is not reachable, the server returns HTTP 503 without falsely reporting success, and the frontend retains the message so no user data is lost.

### 3. Resume Asset Download
- **Method**: `GET /public/resumes/madhav-garg-resume.pdf`
- **Description**: Serves the PDF resume directly from `server/public/resumes/`.

---

## 🍃 MongoDB Setup Instructions

### Option A: MongoDB Atlas (Recommended for Cloud Deployment)
1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free M0 Shared Cluster.
3. Under **Database Access**, create a database user (e.g., `portfolio_user`) and record the password.
4. Under **Network Access**, add IP `0.0.0.0/0` (Allow access from anywhere, standard for serverless/cloud hosting).
5. Click **Connect** &rarr; **Drivers** (Node.js) and copy the connection string.
6. Replace `<db_password>` with your database password and append the database name `/madhav_portfolio`:
   ```env
   MONGODB_URI=mongodb+srv://portfolio_user:<db_password>@cluster0.abcde.mongodb.net/madhav_portfolio?retryWrites=true&w=majority
   ```
7. Set this value in your hosting environment variables or `server/.env`.

### Option B: Local MongoDB
1. Ensure MongoDB Community Server is installed.
2. Start the service: `mongod --dbpath <data-path>`.
3. In `server/.env`, keep:
   ```env
   MONGODB_URI=mongodb://localhost:27017/madhav_portfolio
   ```

---

## 🚢 Deployment Options

The codebase is engineered to support both **Unified Full-Stack Deployment** and **Split Deployment**.

### Option 1: Unified Deployment (Render / Railway / Single Container)
The Express backend is pre-configured to automatically serve the compiled Vite frontend from `client/dist` when available.

1. **Build Command**:
   ```bash
   npm run build
   ```
   *(Executes `npm --prefix client run build`, compiling React into `client/dist`).*
2. **Start Command**:
   ```bash
   npm start
   ```
   *(Executes `npm --prefix server run start`).*
3. **Environment Variables on Hosting Provider**:
   - `NODE_ENV=production`
   - `PORT=5000` (or leave default if provider injects `PORT`)
   - `MONGODB_URI=<your-atlas-uri>`
4. **Result**: Both the React client and Express API run together on a single domain.

---

### Option 2: Split Deployment (Vercel Frontend + Render Backend)

#### A. Backend (Render / Railway)
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `NODE_ENV=production`
  - `ALLOWED_ORIGINS=https://your-frontend.vercel.app`
  - `MONGODB_URI=<your-atlas-uri>`

#### B. Frontend (Vercel)
- **Root Directory**: `client`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_BASE_URL=https://your-backend.onrender.com`

---

## 📝 Updating Real Portfolio Content Later

All content is cleanly decoupled into centralized configuration files so you can update details without touching JSX logic:

| Content Item | Configuration File |
| :--- | :--- |
| **Project Showcase & GitHub Links** | [`client/src/data/projectsData.js`](client/src/data/projectsData.js) |
| **Certifications & Achievements** | [`client/src/data/credentialsData.js`](client/src/data/credentialsData.js) |
| **Education & Experience Timeline** | [`client/src/data/timelineData.js`](client/src/data/timelineData.js) |
| **Technical Proficiencies & Progress** | [`client/src/components/AboutSection.jsx`](client/src/components/AboutSection.jsx) |
| **Resume PDF File** | [`server/public/resumes/madhav-garg-resume.pdf`](server/public/resumes/madhav-garg-resume.pdf) |

---

## 🧪 Verification & Build Results

1. **Client Production Bundle Build**:
   ```bash
   npm run build:client
   ```
   - Status: **`✓ built in 1.42s`** (Exit Code `0`).
   - Bundle Assets: `dist/index.html`, `dist/assets/index-DV2Q8QXh.css`, `dist/assets/index-DmB89Y-i.js`.
2. **Backend API Health Check**:
   - Verified active and responding with `GET /api/health` (`200 OK`).
3. **Unified SPA Serving Check**:
   - Verified Express serves `client/dist/index.html` on `http://localhost:5000/`.
4. **Static PDF Asset Check**:
   - Verified `GET /public/resumes/madhav-garg-resume.pdf` returns `200 OK` (`application/pdf`).
5. **Contact Route Validation & Offline Database Fallback Check**:
   - Verified input sanitization and inline validation for Name, Email, and Message.
   - Verified graceful 503 fallback when MongoDB is not running locally, retaining form input so no student data is lost.

---

## ⚖️ License & Academic Integrity

Developed by **Madhav Garg** for the **Full Stack Web Development (Semester 5)** academic coursework at **JK Lakshmipat University, Jaipur**. MIT License.
