const contactService = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      return console.log(allContacts);

    case "get":
      const foundedBook = await contactService.getContactById(id);
      return console.log(foundedBook);

    case "add":
      const addedContact = await contactService.addContact(name, email, phone);
    // return console.log(addedContact);

    case "remove":
      // ... id
      const removedContact = await contactService.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "remove", id: "AeHIrLTr6JkxGE6SN-0Rw" });
invokeAction({
  action: "add",
  name: "test",
  email: "test@gmail.com",
  phone: 1,
});
