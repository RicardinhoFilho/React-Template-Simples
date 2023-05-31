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

export const Label = styled.label`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;

    padding:12px;
    font-size:16px;

    color:${theme.colors.dark};
    


`;


export const LogoSinsoft = styled.img`
     width:135px;
`;

export const Input = styled.input`
    border:none;
    background-color:${theme.colors.light};
    border-radius:0.25rem ;
    padding:12px;
    min-width:30vw;
    width:200px;
    font-size:14px;

    color:${theme.colors.dark};

`;


export const Button = styled.button`
   background-color:${theme.colors.darkGrey};
    padding:12px;
    font-size:14px;
    font-weight:bold;

   
    width:150px;
    min-width:20vw;

    color:${theme.colors.dark} ;


`;