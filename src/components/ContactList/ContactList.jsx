import { BtnDelete, List, Name } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhone } from 'redux/contactListReducer';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();


  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter)

    const filterContactsByName = () => {
        const ff = filter.toLowerCase() ?? '';
        return contacts.filter(contact => contact.name.toLowerCase().includes(ff))
    }

    const list = filterContactsByName();

  

  return (
    <ul>
      {list.map(item => (
        <List key={item.id}>
          <Name>
            {item.name}: <span>{item.number}</span>
          </Name>
          <BtnDelete onClick={() => dispatch(deletePhone(item.id))}>
            Delete
          </BtnDelete>
        </List>
      ))}
    </ul>
  );
};
