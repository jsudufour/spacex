import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 500px;
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
`;

const ModalHeader = styled.div`
  padding: ${spacings.small};
`;

const ModalTitle = styled.h3``;

const ModalBody = styled.div`
  padding: ${spacings.small};
`;

const ModalControls = styled.div`
  padding: ${spacings.small};
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  border: none;
  color: ${colors.grey};
  background-color: ${colors.darkTeal};
  padding: ${spacings.small};
  border-radius: ${spacings.radius};
  cursor: pointer;
`;

// props
// {  children }
type Props = {
  isModalShowing: boolean;
  closeModal: () => void;
};

export const Modal = ({ isModalShowing, closeModal }: Props) =>
  isModalShowing ? (
    <ModalWrapper onClick={closeModal}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <ModalTitle></ModalTitle>
        </ModalHeader>
        <ModalBody>{/* {children} */}</ModalBody>
        <ModalControls>
          <CloseButton onClick={closeModal}>close</CloseButton>
        </ModalControls>
      </ModalContent>
    </ModalWrapper>
  ) : null;
