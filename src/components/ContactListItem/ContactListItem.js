import PropTypes from "prop-types";
import style from './ContactListItem.module.css';

const ContactListItem = ({id, number, name, deletedContacts}) => {
  return (
    <li key={id} className={style.listitem}>
      {name}: {number}
      <button type="button" id={id} onClick={deletedContacts} className={style.btlist}>
            Delete
          </button>
    </li>
  );
};

ContactListItem.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  deletedContacts: PropTypes.func,
};

export default ContactListItem;
