import { useState, useId, useEffect } from 'react'
import './App.css'
import ContactForm from '../ContactForm/ContactForm.jsx';
import '../ContactForm/ContactForm.module.css';
import ContactList from '../ContactList/Contacts/Contacts.jsx';
import '../ContactList/Contacts/Contacts.module.css';
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


  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App
