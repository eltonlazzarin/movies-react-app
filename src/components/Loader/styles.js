import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 13rem;
    border: 0.5rem solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--favorite);
    border-radius: 50%;
    width: 3.12rem;
    height: 3.12rem;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Container;
