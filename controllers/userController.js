const users = [
  { id: 1, nombre: "Josefina Perez", email: "josefina@example.test", rol: "estudiante" },
  { id: 2, nombre: "Luis Ruiz", email: "luis@example.test", rol: "docente" },
  { id: 3, nombre: "Maria Ruiz", email: "maria@example.test", rol: "administrador" }
];

exports.list = async (req, res) => {
  try {
    if (req.query.simulateError === "true") {
      throw new Error("Error de prueba: detalle interno simulado");
    }
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({
      message: "Error al consultar usuarios",
      error: error.stack
    });
  }
};

