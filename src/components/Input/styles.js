import styled from 'styled-components';

const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  padding: 0 0.62rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: var(--gray);
  border: 0;
  border-radius: 0.3rem;
  &::placeholder {
    color: var(--light-gray);
  }
`;

export default Input;
