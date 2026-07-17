const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");


/**
	* #swagger.tags = ['Contacts']
	* #swagger.summary = 'Get all contacts'
	*/
router.get("/", contactsController.getAll);

/**
	* #swagger.tags = ['Contacts']
	* #swagger.summary = 'Get a contact by ID'
	*/
router.get("/:id", contactsController.getSingle);

/**
	* #swagger.tags = ['Contacts']
	* #swagger.summary = 'Create a new contact'
	*/
router.post("/", contactsController.createContact);

/**
	* #swagger.tags = ['Contacts']
	* #swagger.summary = 'Update an existing contact'
	*/
router.put("/:id", contactsController.updateContact);

/**
	* #swagger.tags = ['Contacts']
	* #swagger.summary = 'Delete a contact'
	*/
router.delete("/:id", contactsController.deleteContact);

module.exports = router;