import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIsLoading } from '../components/redux/contacts/selectors';
import { ContactsList } from 'components/Contacts/ContactsList';
import ContactForm from '../components/Form/Form';
import { Section } from '../components/Section/Section';
import Filter from '../components/Filter/Filter';
import { GlobalStyle } from 'GlobalStyle';
import { CommonBox } from '../components/Form/Form.styled';
import { fetchContacts } from 'components/redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <CommonBox>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      </CommonBox>
      <CommonBox>
        <Section title="Contacts">
          <Filter />
          {isLoading && <b>Request in progress...</b>}
          <ContactsList />
        </Section>
      </CommonBox>
      <GlobalStyle />
    </>
  );
}
