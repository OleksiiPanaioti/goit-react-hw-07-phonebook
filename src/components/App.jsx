import React from 'react';
import { Contacts } from './ContactsList';
import { NameInput } from './Form/FromInput';

export const App = () => {
  return (
    <div>
      <NameInput />
      <Contacts />
    </div>
  );
};
