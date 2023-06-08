import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const Input = styled.input`
  width: 320px;
  border-radius: 4px;
  &:hover,
  &:focus {
    border: 3px solid #2620a0;
    color: #211761;
  }
`;
