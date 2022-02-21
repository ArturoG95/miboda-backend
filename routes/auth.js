const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const {
	invitados,
	crearRegistro,
	actualizarConfirmacion,
} = require("../controllers/auth");

router.get("/guests", invitados);

router.post(
	"/register",
	[
		check("invitado", "Invitado es un campo obligatorio").not().isEmpty(),
		check(
			"cantidadPersonas",
			"cantidadPersonas es un campo obligatorio y debe de ser numerico"
		).isNumeric(),
	],
	crearRegistro
);

router.put(
	"/update-confirmation",
	[
		check("invitado", "Invitado es un campo obligatorio").not().isEmpty(),
		check(
			"cantidadPersonas",
			"cantidadPersonas es un campo obligatorio y debe de ser numerico"
		).isNumeric(),
		check(
			"personasConfirmadas",
			"personasConfirmadas es un campo obligatorio y debe de ser numerico"
		).isNumeric(),
	],
	actualizarConfirmacion
);

module.exports = router;
