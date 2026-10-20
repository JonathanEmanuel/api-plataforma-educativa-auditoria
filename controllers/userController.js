const users = [
  { id: 1, nombre: "Josefina Perez", email: "josefina@example.test", rol: "estudiante" },
  { id: 2, nombre: "Luis Gomez", email: "luis@example.test", rol: "docente" },
  { id: 3, nombre: "Maria Ruiz", email: "maria@example.test", rol: "administrador" }
];

exports.list = async (req, res) => {
  try {
    // HALLAZGO INTENCIONAL 6: Se devuelve toda la colección de usuarios,sin filtrar campos ni comprobar qué información puede ver el solicitante.
    res.json({ data: users });
  } catch (error) {
    // HALLAZGO INTENCIONAL 7: Se devuelve información interna al cliente.
    res.status(500).json({
      message: "Error al consultar usuarios",
      error: error.stack
    });
  }
};
