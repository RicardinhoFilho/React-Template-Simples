import React from "react";
import { X } from "react-feather";
import Modal from "react-modal";
import theme from "../../../Styles/theme";
import { DivX } from "../styles";
import { Container, Message, Title } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "30%",
    maxHeight: "80vh",
  },
};

interface Props {
  open: boolean;
  onClose(): void;
  alert: { titulo: string; mensagem: string };
}
export const Alert = ({ open, onClose, alert }: Props) => {
  return (
    <Modal isOpen={open} onRequestClose={onClose} style={customStyles}>
      <Container>
        <DivX>
          <X
            color={theme.colors.dark}
            size={"max(1.5vw,15px)"}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </DivX>

        <Title>{alert.titulo}</Title>

        <Message>{alert.mensagem}</Message>
      </Container>
    </Modal>
  );
};
