import Contact from '../Contact/Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
