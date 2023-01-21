import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';
import { InnerWrap, SectionForm, CommonButton, Input } from './Form.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  let contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const saved = saveContact({ name, phone });
    if (saved) {
      form.reset();
    }
  };

  const saveContact = item => {
    const checkName = contacts

      .map(item => item.name.toLowerCase())
      .some(item => item === name.toLowerCase());

    if (checkName) {
      window.alert(`This contact ${name} already excist `);
      return false;
    } else {
      dispatch(addContact({ name, phone }));
      return true;
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <SectionForm>
        <InnerWrap>
          <label>
            Name
            <Input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Add your name..."
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </InnerWrap>
      </SectionForm>
      <SectionForm>
        <InnerWrap>
          <label>
            Number
            <Input
              onChange={handleChange}
              type="tel"
              name="number"
              placeholder="Add your number..."
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </InnerWrap>
      </SectionForm>
      <CommonButton type="submit">Add contact</CommonButton>
      <div />
    </form>
  );
}
