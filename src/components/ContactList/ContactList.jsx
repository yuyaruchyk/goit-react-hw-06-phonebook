import { BtnDelete, List, Name } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deletePhone } from 'redux/contactListReducer';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactList.contacts);
  const filter = useSelector(state => state.contactList.filter);

  const filteredContacts = contacts.filter(contact => {
  const contactName = contact.name.toLowerCase();
  const contactNumber = contact.number;
    return (
      contactName.includes(filter.toLowerCase()) ||
      contactNumber.includes(filter)
    );
  });

  const numbersList = filteredContacts;

  return (
    <ul>
      {numbersList.map(item => {
        return (
          <List key={item.id}>
            <Name>
              {item.name}: <span>{item.number}</span>
            </Name>
            <BtnDelete onClick={() => dispatch(deletePhone(item.id))}>
              Delete
            </BtnDelete>
          </List>
        );
      })}
    </ul>
  );
};
