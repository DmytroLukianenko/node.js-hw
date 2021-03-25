const fs = require("fs");
const path = require("path");
const { nanoid } = require('nanoid');
const { promises: fsPromises } = fs;

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
    return JSON.parse(await fsPromises.readFile(contactsPath, "utf-8"));
}

async function getContactById(contactId) {
    try {
        const list = await listContacts();
        return list.find((item) => item.id === contactId);
    } catch (error) {
        console.log(error);
    }
}

async function removeContact(contactId) {
    try {
        const list = await listContacts();
        const result = list.filter((item) => item.id !== contactId);
        await fsPromises.writeFile(contactsPath, JSON.stringify(result));
    } catch (error) {
        console.log(error);
    }
}

async function addContact(name, email, phone) {
    try {
        const list = await listContacts()
        const newUser = { id: nanoid(), ...body }
        await fsPromises.writeFile(contacts, JSON.stringify([...list, ...newUser]))
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};