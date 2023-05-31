import styled from "styled-components";
import theme from "./theme";

export const TitlePage = styled.h1`
  font-size: max(1.5vw, 25px);
  color: ${theme.colors.primary};
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

`;