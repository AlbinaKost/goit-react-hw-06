import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList