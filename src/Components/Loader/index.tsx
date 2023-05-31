import React from "react";
import { Thermometer, X } from "react-feather";
import Modal from "react-modal";
import theme from "../../Styles/theme";
import { Container, Img } from "./styles";
import { Oval } from "react-loader-spinner";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    minWidth: "40%",
    maxWidth: "80%",
    borderRadius: "0.25rem",
    background: "transparent",
    border: "none",
  },
};

interface Props {
  loading: boolean;
}
import LogoSinsoft from "../../Assets/Logo.png";
export function Loader({ loading }: Props) {
  return (
    <Modal isOpen={loading} onRequestClose={() => {}} style={customStyles}>
      <Container>
          <Img src={LogoSinsoft} alt="Logo Sinsoft" />
        <Oval
          width={"max(3vw, 30px)"}
          height={"max(3vw, 30px)"}
          color={theme.colors.primary}
          secondaryColor={theme.colors.dark}
        />
      </Container>
    </Modal>
  );
}