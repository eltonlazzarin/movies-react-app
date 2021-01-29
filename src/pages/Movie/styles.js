import styled from 'styled-components';

export const Container = styled.div`
  max-width: 66.25rem;
  margin: 4.5rem auto;

  main {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  section {
    width: 38rem;
  }

  header {
    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 0.3rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--white);
    margin-bottom: 4rem;
    font-size: 4rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-items: center;
    color: var(--white);

    div {
      margin: 0 1rem 1rem 0;
    }

    div + div {
      margin-left: 5rem;
    }
  }

  em {
    padding: 0 0.3rem 0 0;
    font-weight: bold;
    background: var(--favorite);
  }

  i {
    margin-left: 0.4rem;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.3rem;
    font-size: 1rem;
    background: none;
    color: var(--white);
    border: 0.1rem solid var(--white);
    margin: 2rem 0 2rem;
    cursor: pointer;
  }

  h4 {
    margin-top: 1.24rem;
    color: var(--gray);
  }

  p {
    margin-top: 0.5rem;
    color: var(--white);
  }

  img {
    width: 26.8rem;
    height: 34.2rem;
    border-radius: 0.3rem;
    opacity: 1;
    transition: 0.6s ease;
  }

  @media (max-width: 46rem) {
    width: 90vw;

    main {
      display: flex;
      flex-direction: column;
    }

    section,
    img {
      width: 90vw;
      margin-bottom: 2rem;
    }

    span {
      div + div {
        margin-left: 0;
      }
    }

    em,
    i,
    p {
      font-size: 0.8rem;
    }

    h2 {
      font-size: 2.3rem;
    }
  }
`;
