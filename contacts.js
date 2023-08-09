const { join } = require("path");
const fs = require("fs").promises;

const contactsPath = fs.readFile(join(__dirname, "contacts.json"));

const listContacts = () => {};

const getContactById = (contactId) => {};

const removeContact = (contactId) => {};

const addContact = (name, email, phone) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
