const { nanoid } = require("nanoid");
const { join } = require("path");
const fs = require("fs").promises;

const contactsPath = join(__dirname, "contacts.json");

const listContacts = async () => {
  return await JSON.parse(fs.readFile(contactsPath));
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (index === -1) {
    return;
  }
  const updatedContacts = contacts.splice(contactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const updatedContacts = contacts.push({
    id: nanoid,
    name,
    email,
    phone,
  });
  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
