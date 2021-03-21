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
  background-color: rgba(0, 0, 0, 0.5);
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
  justify-content: flex-end;
`;

const CloseButton = styled.button``;

// props
// { handleClose, show, children }
type Props = {
  isShowingModal: boolean;
};

export const Modal = ({ isShowingModal }: Props) =>
  isShowingModal ? (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <ModalTitle></ModalTitle>
        </ModalHeader>
        <ModalBody>{/* {children} */}</ModalBody>
        <ModalControls>
          <CloseButton>Close</CloseButton>
        </ModalControls>
      </ModalContent>
    </ModalWrapper>
  ) : null;
