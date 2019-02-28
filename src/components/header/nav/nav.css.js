import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      color: #0358aa;

      & a {
        color: #0358aa;
      }

      &:hover {
        color: #24ffe3;
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
