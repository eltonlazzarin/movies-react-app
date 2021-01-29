import styled from 'styled-components';

export const Container = styled.div`
  max-width: 66.25rem;
  margin: 4.5rem auto;

  header {
    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 0.3rem;
  }

  h1 {
    font-size: 2rem;
    margin-left: 1.2rem;
    color: var(--white);
  }

  @media (max-width: 46rem) {
    width: 90vw;
  }
`;
