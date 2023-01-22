import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIsLoading } from '../redux/contacts/selectors';
import { ContactsList } from 'components/Contacts/ContactsList';
import ContactForm from '../Form/Form';
import { Section } from '../Section/Section';
import Filter from '../Filter/Filter';
import { GlobalStyle } from 'GlobalStyle';
import { CommonBox } from '../Form/Form.styled';
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
