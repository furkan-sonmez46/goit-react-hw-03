import { useState, useId, useEffect } from 'react'
import './App.css'
import ContactForm from '../ContactForm/ContactForm.jsx';
import '../ContactForm/ContactForm.module.css';
import ContactList from '../ContactList/ContactList.jsx';
import '../ContactList/ContactList.module.css';
import SearchBox from '../SearchBox/SearchBox.jsx';
import '../SearchBox/SearchBox.module.css';

function App() {
  const [contacts, setContacts] = useState(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  );

const [searchTerm, setSearchTerm] = useState("");

  const addContact = (newContact) => {
    setContacts([...contacts, { id: Date.now(), ...newContact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App
