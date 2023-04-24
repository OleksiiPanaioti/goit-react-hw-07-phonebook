import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ButtonSubmitDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  /* width: 120px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #454242;
    color: #ffffff;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: #fffbfb;
`;
