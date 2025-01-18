import { styled } from "styled-components";

export const SidebarSection = styled.section`
  display: flex;
  height: 100vh;
  width: 25vw;
  background-color: var(--gray-300);

  @media (width <= 768px) {
    display: none;
  }
`;
