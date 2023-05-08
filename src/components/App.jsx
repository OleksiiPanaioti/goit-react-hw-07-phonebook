import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './contactsList/ContactsList';
import { Filter } from './FilterPack/Filter';

import { PhoneForm } from './FormInput/FormInput';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout/Layout';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} u ve already entered it,bro`)
      : setContacts(state => [...state, newContact]);
  };

  const handleContact = contactId => {
    setContacts(s => s.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getContactOnFilter = () => {
    if (filter !== '') {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  const renderContact = getContactOnFilter();

  return (
    <Layout>
      <h2>Phonebook</h2>
      <PhoneForm onSave={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter search={filter} onSearch={changeFilter} />
      {renderContact && (
        <Contacts contacts={getContactOnFilter()} onDelete={handleContact} />
      )}
      <GlobalStyle />
    </Layout>
  );
};

export default App;
