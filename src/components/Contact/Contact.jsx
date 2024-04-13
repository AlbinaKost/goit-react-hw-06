import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from 'react-icons/fa6';
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ Contact }) => {
const dispatch = useDispatch();
const handleDelete = () => {
  dispatch(deleteContact(Contact.id));
}
  return (
    <div className={css.contactBox}>
      <div>
        <p>
          <span className={css.icon}>
            <FaPhone />
          </span>
          {name}
        </p>
        <p>
          <span className={css.icon}>
            <FaUserLarge />
          </span>
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={{handleDelete}}>
        Delete
      </button>
    </div>
  );
};


export default Contact