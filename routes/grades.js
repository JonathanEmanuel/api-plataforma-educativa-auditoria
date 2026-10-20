const express = require("express");
const router = express.Router();

const grades = [
  { id: 101, studentId: 1, materia: "Seguridad e Integridad", nota: 8 },
  { id: 102, studentId: 2, materia: "Programación I", nota: 9 },
  { id: 103, studentId: 3, materia: "Bases de Datos", nota: 7 }
];

router.get("/student/:studentId", (req, res) => {
  const studentId = Number(req.params.studentId);
  const result = grades.filter((grade) => grade.studentId === studentId);
  res.json({ data: result });
});

module.exports = router;
