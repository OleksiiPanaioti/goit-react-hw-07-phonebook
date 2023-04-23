import React from 'react';
import { Form, FormField, ButtonSubmit } from './FormInput.styled';

export const NameInput = () => {
  return (
    <div>
      <Form>
        <h1>Phonebook</h1>
        <FormField>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormField>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    </div>
  );
};
