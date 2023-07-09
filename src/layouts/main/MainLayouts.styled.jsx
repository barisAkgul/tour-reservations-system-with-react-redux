import styled from "styled-components";

export const MainLayout = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: 85px 100vh auto;
`;
