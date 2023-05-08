import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './contactsList/ContactsList';
import { Filter } from './FilterPack/Filter';

import { PhoneForm } from './FormInput/FormInput';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout/Layout';
import Massage from './massage/massage';

// class App extends Component {
//   state = {
//     contacts: [],

//     filter: '',
//   };

//   componentDidMount() {
//     const savedPhones = localStorage.getItem('contacts');
//     if (savedPhones !== null) {
//       this.setState({
//         contacts: JSON.parse(savedPhones),
//       });
//     } else {
//       this.setState({
//         contacts: [],
//       });
//     }
//     console.log(savedPhones);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = newContact => {
//     const { contacts } = this.state;
//     contacts.find(contact => contact.name === newContact.name)
//       ? alert(`${newContact.name} is already in contacts`)
//       : this.setState(prevState => ({
//           contacts: [...prevState.contacts, newContact],
//         }));
//   };

//   searchContact = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   renderContact = () => {
//     return [...this.state.contacts].filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
//     );
//   };

//   deleteContact = id => {
//     this.setState(state => ({
//       contacts: state.contacts.filter(contact => contact.id !== id),
//     }));
//   };

// render() {
//   const { contacts, filter } = this.state;
//   const renderContact = this.renderContact();
//   return (
//     <Layout>
//       <h2>Phonebook</h2>
//       <PhoneForm onSave={this.addContact} contacts={contacts} />
//       <h2>Contacts</h2>
//       <Filter search={filter} onSearch={this.searchContact} />
//       {renderContact && (
//         <Contacts contacts={renderContact} onDelete={this.deleteContact} />
//       )}
//       <GlobalStyle />
//     </Layout>
//   );
// }
// }

// export default App;

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
