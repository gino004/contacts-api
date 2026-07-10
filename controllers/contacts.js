const mongodb = require("../data/db");
const { ObjectId } = require("mongodb");

const getAll = async (req, res) => {
	try {
		const result = await mongodb
			.getDb()
			.collection("contacts")
			.find();

		const contacts = await result.toArray();

		res.setHeader("Content-Type", "application/json");
		res.status(200).json(contacts);
	} catch (err) {
		res.status(500).json({
			message: err.message
		});
	}
};

const getSingle = async (req, res) => {
	try {
		const contactId = new ObjectId(req.params.id);

		const result = await mongodb
			.getDb()
			.collection("contacts")
			.findOne({ _id: contactId });

		if (!result) {
			return res.status(404).json({
				message: "Contact not found"
			});
		}

		res.status(200).json(result);

	} catch (err) {
		res.status(500).json({
			message: err.message
		});
	}
};

module.exports = {
	getAll, 
	getSingle
};