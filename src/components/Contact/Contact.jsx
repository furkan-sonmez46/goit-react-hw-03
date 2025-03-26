import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.contact}>
      <span>{contact.name}: {contact.number}</span>
      <button className={styles.contactButton} onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
