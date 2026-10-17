# madhav-portfolio

A full-stack personal developer portfolio built with the modern **MERN** stack (MongoDB, Express, React, Node.js), styled with a futuristic bento-grid aesthetic using **Tailwind CSS** and **Framer Motion**.

---

## 🚀 Architecture & Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React 19 + Vite 8 | Ultra-fast client build with ES modules and React Router 7 |
| **Styling** | Tailwind CSS v3 + PostCSS | Dark mode first, custom electric accents, glassmorphic bento cards |
| **Motion** | Framer Motion | Smooth entry transitions, interactive micro-animations |
| **Icons** | Lucide React | Lightweight, accessible SVG icon library |
| **Backend** | Node.js + Express.js | Modular REST API engine with CORS and structured error handling |
| **Database** | MongoDB + Mongoose | Pre-configured schema directory ready for Step 2 integration |

---

## 🎨 Design Direction

- **Near-Black Canvas**: Sleek `#060913` dark canvas baseline with layered surface elevations (`#0c1222`, `#111827`).
- **Restrained Accents**: Electric Blue (`#38bdf8`) and Electric Violet (`#a855f7`) providing purposeful contrast without visual clutter.
- **Bento Grid Layout**: High-density, structured component grid with subtle borders (`rgba(255, 255, 255, 0.08)`) and ambient glow shadows.
- **Typography**: Clean modern type hierarchy using `Plus Jakarta Sans` for headings and body, paired with `JetBrains Mono` for developer tags and metrics.
- **Theme Flexibility**: Dark mode configured via Tailwind's `darkMode: 'class'`, enabling seamless light/dark toggling.

---

## 📁 Repository Structure

```text
madhav-portfolio/
├── client/                     # Frontend React + Vite application
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── assets/             # Brand logos & static media
│   │   ├── components/         # Reusable UI components & Bento tiles
│   │   ├── hooks/              # Custom React hooks (e.g., useDarkMode)
│   │   ├── pages/              # Routed pages (FoundationPage.jsx, etc.)
│   │   ├── services/           # API interaction layer
│   │   ├── utils/              # Helper functions & formatting utilities
│   │   ├── App.jsx             # React Router routing tree
│   │   ├── index.css           # Tailwind base, utilities & scrollbar styles
│   │   └── main.jsx            # React root with BrowserRouter
│   ├── index.html              # HTML shell with Google Fonts & SEO meta
│   ├── package.json            # Client dependencies & scripts
│   ├── postcss.config.js       # PostCSS config with Tailwind and Autoprefixer
│   ├── tailwind.config.js      # Color tokens, glow shadows, and bento themes
│   └── vite.config.js          # Vite bundler configuration
│
├── server/                     # Backend Express.js REST API
│   ├── public/
│   │   └── resumes/            # Static assets (PDF & DOCX CV downloads)
│   ├── src/
│   │   ├── config/             # Environment configuration (env.js)
│   │   ├── controllers/        # Request handlers (healthController.js)
│   │   ├── middleware/         # 404 & global error handling middleware
│   │   ├── models/             # Mongoose schemas (Contact, Project, etc.)
│   │   ├── routes/             # Modular routers (healthRoutes, index.js)
│   │   └── server.js           # Server entry point & CORS configuration
│   ├── .env.example            # Template for environment variables
│   └── package.json            # Server dependencies & scripts
│
├── .gitignore                  # Root exclusions for dependencies, builds, & secrets
├── package.json                # Root convenience scripts
└── README.md                   # Project overview & documentation
```

---

## ⚙️ Prerequisites

- **Node.js**: v18.0.0 or higher (Tested on Node v26)
- **npm**: v9.0.0 or higher (Tested on npm v11)

---

## 🛠️ Local Setup & Getting Started

### 1. Clone & Install Dependencies

You can install dependencies for both `client` and `server` independently, or using the root helper:

```bash
# Option A: Install both using root script
npm run install:all

# Option B: Install manually in each directory
cd client && npm install
cd ../server && npm install
```

### 2. Configure Environment Variables

Create your local server configuration from the provided example:

```bash
# In the /server directory
cp .env.example .env
```

Default variables inside `server/.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/madhav_portfolio
```

---

## 🏃‍♂️ Running the Project

Open two terminal windows (or use the root scripts):

### Terminal 1 — Start the Backend Server:
```bash
cd server
npm run dev
```
- Server URL: `http://localhost:5000`
- Health Endpoint: `http://localhost:5000/api/health`

### Terminal 2 — Start the Frontend Client:
```bash
cd client
npm run dev
```
- Client URL: `http://localhost:5173`

---

## 🔍 Available Scripts

### Root Helper Scripts
- `npm run client`: Runs the Vite frontend development server.
- `npm run server`: Runs the Express backend with hot-reload (`nodemon`).
- `npm run server:start`: Starts the Express backend in production mode (`node`).
- `npm run build:client`: Compiles the production build of the React client.
- `npm run install:all`: Installs dependencies for both client and server.

### Client Scripts (`/client`)
- `npm run dev`: Launches Vite dev server at `http://localhost:5173`.
- `npm run build`: Bundles the React application for production.
- `npm run preview`: Locally previews the production build.

### Server Scripts (`/server`)
- `npm run dev`: Starts Express server with `nodemon` auto-reload.
- `npm start`: Starts Express server directly with `node src/server.js`.

---

## 🧪 Verification & Health Check

The Express server includes a dedicated health endpoint at `GET /api/health`:

**Sample Response:**
```json
{
  "success": true,
  "status": "healthy",
  "service": "madhav-portfolio-api",
  "message": "Backend server is active and responding",
  "timestamp": "2026-10-17T08:46:37.300Z",
  "uptime": 12,
  "environment": "development"
}
```

The frontend foundation screen includes live polling against this endpoint to verify seamless cross-origin connectivity.

---

## 🗺️ Roadmap (Step 2 Implementation)

- [ ] **Hero Section**: Animated introduction, dynamic role switcher, and Express-backed CV downloads (PDF & DOCX).
- [ ] **About Me**: Interactive biography and core philosophy bento card.
- [ ] **Categorized Skills**: Visual proficiency grid spanning Frontend, Backend, Database, and DevOps.
- [ ] **Project Showcase**: Rich cards with live demo links, GitHub repositories, and tech tags.
- [ ] **Experience & Education Timeline**: Interactive chronological milestones.
- [ ] **Contact Form**: Connected to Express and MongoDB with schema validation and sanitization.
