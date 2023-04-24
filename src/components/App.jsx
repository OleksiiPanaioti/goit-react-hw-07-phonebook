import React, { Component } from 'react';
import { Contacts } from './contactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './form/FromInput';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout/Layout';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state.contacts;
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  showContact = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  searchContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterHandler = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const showContact = this.showContact();
    return (
      <Layout>
        <h2>Phonebook</h2>
        <PhonebookForm onSave={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter search={filter} onSearch={this.searchContact} />
        {showContact && (
          <Contacts contacts={showContact} onDelete={this.deleteContact} />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;
