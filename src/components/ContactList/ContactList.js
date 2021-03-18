import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import style from './ContactList.module.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
const ContactList = ({ contacts, filterCallback, deletedContacts }) => {
  return (
    <TransitionGroup component="ul" className={style.list}>
      {contacts
        .filter(
          (contact) =>
          filterCallback(contact.name)
        )
        .map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames={style}><ContactListItem
          id={contact.id}
            name={contact.name}
            number={contact.number}
            deletedContacts={deletedContacts}
          /></CSSTransition>
          
        ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  cotacts: PropTypes.array,
  deletedContacts: PropTypes.func,
};

export default ContactList;
