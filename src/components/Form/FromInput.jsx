import React from 'react';
import {
  Form,
  FormField,
  ErrorMessage,
  ButtonSubmitDelete,
} from './FormInput.styled';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(6, 'too short')
    .max(16, 'too long')
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required field!'),
  number: yup
    .string()
    .trim()
    .min(6, 'too short!')
    .max(16, 'too long!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required field!'),
});

export const PhonebookForm = ({ onSave }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
    onSave({ ...values, id: nanoid() });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField htmlFor="name">
          Name
          <Field name="name" required />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField htmlFor="number">
          Number
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <ButtonSubmitDelete type="submit">Add contact</ButtonSubmitDelete>
      </Form>
    </Formik>
  );
};
