const express = require("express");
const mongoose = require("mongoose");
const gradesRouter = require("./routes/grades");
const userController = require("./controllers/userController");

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PASSWORD = "admin123";
const JWT_SECRET = "jwt-secret-educativa";
app.set("env", "development");
app.use(express.json());
app.get("/api/users", userController.list);
app.use("/api/grades", gradesRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok", environment: app.get("env") });
});

mongoose.connect(process.env.DB_URI || "mongodb://127.0.0.1:27017/plataforma_educativa")
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => {
    console.error("No se pudo conectar a MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
  console.log("JWT_SECRET:", JWT_SECRET);
});

module.exports = app;
