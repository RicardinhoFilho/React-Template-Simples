import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Label,
  LogoSinsoft,
} from "../../Styles/styles";
import { Form } from "./styles";
import Logo from "../../Assets/Logo.png";
import { sinsoft_url } from "../../Utils/Urls";
export const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Container>
      <Form>
        <LogoSinsoft src={Logo} onClick={() => window.open(sinsoft_url)} />
        <Label>
          Usuário
          <Input
            value={usuario}
            onChange={(ev) => setUsuario(ev.target.value)}
          />
        </Label>

        <Label>
          Senha
          <Input
            type={"password"}
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
          />
        </Label>
        <br />
        <br />
        <Button>ENTRAR</Button>
      </Form>
    </Container>
  );
};
