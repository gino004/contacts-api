const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "Contacts API",
		description: "API documentation for the Contacts project"
	},
	host: "contacts-api-uif8.onrender.com",
	schemes: ["https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);