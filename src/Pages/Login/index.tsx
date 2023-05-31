import React from "react";
import { Button, Container, Input, Label, LogoSinsoft } from "../../Styles/styles";
import { Form } from "./styles";
import Logo from "../../Assets/Logo.png";
import {sinsoft_url} from "../../Utils/Urls";
export const Login = () => {
  return (
    <Container>
      <Form>
        <LogoSinsoft  src={Logo}   onClick={()=>window.open(sinsoft_url)} />
        <Label>
          Usuário
          <Input />
        </Label>

        <Label>
          Senha
          <Input />
        </Label>
    <br /><br />
        <Button>
            ENTRAR
        </Button>
      </Form>
    </Container>
  );
};
