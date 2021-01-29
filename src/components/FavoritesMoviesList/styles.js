import styled from 'styled-components';

export const Container = styled.div`
  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding: 2rem 0 2rem;
  }

  article {
    width: 14.8rem;
    background: var(--white);
    border-bottom-right-radius: 2rem 2rem;
    position: relative;
    transition: 0.6s ease;
    cursor: pointer;

    background: var(--white);
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    backdrop-filter: blur(2rem);
    -webkit-backdrop-filter: blur(2rem);

    svg {
      transition: 0.6s ease;
      opacity: 0;
      position: absolute;
      top: 3.5%;
      left: 80%;
      text-align: center;
    }
  }

  article:hover {
    opacity: 0.7;
  }

  article:hover svg {
    opacity: 1;
  }

  img {
    width: 14.8rem;
    height: 22rem;
    object-fit: cover;
    opacity: 1;
    transition: 0.6s ease;
  }

  footer {
    padding: 0.7rem;
  }

  p + p {
    margin-top: 0.5rem;
  }

  @media (max-width: 46rem) {
    main {
      display: grid;
      grid-template-columns: 1fr;
      padding-top: 2rem;
    }

    article,
    img {
      width: 90vw;
    }
  }
`;
