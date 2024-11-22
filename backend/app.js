// app.js
require("dotenv").config();

const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();

// Настройка CORS
const cors = require("cors");
const corsOptions = {
  origin: [
    "http://62.3.58.57", // IP фронтенда
    "http://localhost:3000", // Локальная разработка
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};
app.use(cors(corsOptions));

// Проксирование запросов Next.js (SSR)
app.use(
  "/_next",
  createProxyMiddleware({
    target: "http://localhost:3000", // Порт Next.js
    changeOrigin: true,
  })
);

// Статическая папка, если нужна
const staticPath = path.join(__dirname, "../frontend/public");
app.use("/static", express.static(staticPath));

// Роуты API
const employersRoutes = require("./routes/employersRoutes");
const departmentsRoutes = require("./routes/departmentsRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/api/employers", employersRoutes);
app.use("/api/departments", departmentsRoutes);
app.use("/api/feedbacks", feedbackRoutes);

// Все остальные запросы перенаправляем в Next.js
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/.next/server/pages", "index.html"));
});

// Запуск сервера
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});



// const allowedOrigins =
//   process.env.NODE_ENV === "production"
//     ? ["http://gkb-24.ru", "http://www.gkb-24.ru", "https://gkb-24.ru", "https://www.gkb-24.ru"]
//     : ["http://localhost:5173"];
