import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';


const ContactList = () =>{
const contacts = selectContacts();
const filters = selectNameFilter();

const filterContacts =
filters.trim() === ''
  ? contacts.slice()
  : contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );

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