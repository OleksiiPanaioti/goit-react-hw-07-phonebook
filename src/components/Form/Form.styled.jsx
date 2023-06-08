import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 300px;
  padding: 8px;

  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FormField = styled.label`
  color: rgb(25, 25, 112);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;
export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 140px;
  margin-top: 16px;
  padding: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #2082a0;
  }
`;
