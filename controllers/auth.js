const { response } = require("express");
const { validationResult } = require("express-validator");
const Invitado = require("../models/Invitado");

const invitados = async (req, res = response) => {
	const todosLosInvitados = await Invitado.find();
	res.json({
		ok: true,
		invitados: todosLosInvitados,
	});
};

const crearRegistro = async (req, res = response) => {
	const invitado = new Invitado(req.body);

	await invitado.save();

	res.status(201).json({
		ok: true,
		message: "Registro creado con exito",
	});
};

const actualizarConfirmacion = async (req, res = response) => {
	const invitadoId = req.body._id;
	try {
		const invitado = await Invitado.findById(invitadoId);
		if (!invitado) {
			res.status(404).json({
				ok: false,
				msg: "Invitado no existe en la lista",
			});
		}
		const confirmacion = { ...req.body };
		const actualizar = await Invitado.findByIdAndUpdate(
			invitadoId,
			confirmacion,
			{
				new: true,
			}
		);
		res.json({
			ok: true,
			invitacion: actualizar,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Hable con el administrador",
		});
	}
};

module.exports = {
	invitados,
	crearRegistro,
	actualizarConfirmacion,
};
