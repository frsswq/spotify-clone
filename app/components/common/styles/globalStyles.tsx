import styled, { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  /* classic */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* colours */
  :root {
    /* gray */
    --gray-100: #f5f5f5;
    --gray-200: #eeeeee;
    --gray-300: #e0e0e0;
    --gray-400: #bdbdbd;
    --gray-500: #9e9e9e;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-900: #212121;
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
`;

// const prettierFix = styled.div``;
