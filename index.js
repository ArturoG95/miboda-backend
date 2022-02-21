const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

//crear el servidor de express
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());
//Directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//rutas
app.use("/api", require("./routes/auth"));

//escuchar peticiones
app.listen(process.env.PORT, () => {
	console.log(`servidor en puerto ${process.env.PORT}`);
});
