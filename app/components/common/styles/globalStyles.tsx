import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* classic */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* focus */
  *:focus-visible {
    outline: 2px solid var(--gray-500);
    outline-offset: 4px;
    border-radius: 1px;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  button {
    border: none;
    box-shadow: none;
  }
`;

// const prettierFix = styled.div``;
