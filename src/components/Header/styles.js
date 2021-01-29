import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 76.25rem;
  margin: 2rem auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    border-bottom-right-radius: 2rem 2rem;
  }

  img {
    height: 3.31rem;
  }

  a {
    margin-right: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--gray);
    text-decoration: none;
  }

  @media (max-width: 46rem) {
    width: 90vw;
  }
`;

export default Container;
