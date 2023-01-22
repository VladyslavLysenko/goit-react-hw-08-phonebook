import React from 'react';
import { ContactItem } from './ContactItem';
import { InnerWrap } from '../Form/Form.styled';
import { ContactList, Item } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'components/redux/contacts/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  console.log('visibleContacts', visibleContacts);

  return (
    <InnerWrap>
      <ContactList>
        {visibleContacts.map(item => (
          <Item key={item.id}>
            <ContactItem contact={item} />
          </Item>
        ))}
      </ContactList>
    </InnerWrap>
  );
};
