const { MongoClient } = require("mongodb");

let database;

const initDb = async (callback) => {
	if (database) {
		console.log("Database is already initialized.");
		return callback(null, database);
	}

	try {
		const client = await MongoClient.connect(process.env.MONGODB_URI, {
			serverSelectionTimeoutMS: 5000
		});

		database = client.db("cse341");

		console.log("Connected to MongoDB");

		callback(null, database);
	} catch (err) {

		console.log("ERROR COMPLETO:");
		console.log(err);
		callback(err);
	}
};

const getDb = () => {
	if (!database) {
		throw Error("Database not initialized");
	}

	return database;
};

module.exports = {
	initDb,
	getDb,
};