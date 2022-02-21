const { Schema, model } = require("mongoose");

const InvitadoSchema = Schema({
	invitado: { type: String, require: true },
	cantidadPersonas: {
		type: Number,
		require: true,
	},
	personasConfirmadas: {
		type: Number,
		require: true,
		default: 0,
	},
	rsvpRomance: {
		type: Boolean,
		default: false,
	},
	confirmado: {
		type: Boolean,
		default: false,
	},
});

module.exports = model("Invitado", InvitadoSchema);
