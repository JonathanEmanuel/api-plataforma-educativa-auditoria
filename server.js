const express = require("express");
const mongoose = require("mongoose");
const gradesRouter = require("./routes/grades");
const userController = require("./controllers/userController");

const app = express();
const PORT = process.env.PORT || 3000;

// HALLAZGO INTENCIONAL 1: Secretos codificados directamente en el código.
const DB_PASSWORD = "admin123";
const JWT_SECRET = "jwt-secret-educativa";

// HALLAZGO INTENCIONAL 2: Configuración de depuracion activada sin distinguir adecuadamente entre desarrollo y producción.
app.set("env", "development");
app.use(express.json());

// HALLAZGO INTENCIONAL 3: Se permite consultar todos los registros sin un control de autenticación/autorización en este punto de la API.
app.get("/api/users", userController.list);

// Las rutas de calificaciones también deben auditarse.
app.use("/api/grades", gradesRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok", environment: app.get("env") });
});

mongoose.connect(process.env.DB_URI || "mongodb://127.0.0.1:27017/plataforma_educativa")
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => {
    // HALLAZGO INTENCIONAL 4: Se expone el error completo en consola.
    console.error("No se pudo conectar a MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
  console.log("JWT_SECRET:", JWT_SECRET); // HALLAZGO INTENCIONAL 5: Secreto en logs.
});

module.exports = app;
