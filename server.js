const express = require("express");
require("dotenv").config();
const mongodb = require("./data/db");
const contactsRoutes = require("./routes/contacts");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Contacts API is running");
});

app.use("/contacts", contactsRoutes);

mongodb.initDb((err) => {
	if (err) {
		console.error(err);
	} else {
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	}
});