import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import type { RootState } from "../store";
import { currentSpacecraftSelector } from "../store/selectors";
import { DetailedCard } from "./DetailedCard";
import { Loading } from "./Loading";

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

type Props = {
  isModalShowing: boolean;
  closeModal: () => void;
};

export const Modal = ({ isModalShowing, closeModal }: Props) => {
  const { spacecraft, isLoading, hasError } = useSelector(
    (state: RootState) => ({
      spacecraft: currentSpacecraftSelector(state),
      isLoading: state.isLoading,
      hasError: state.hasError,
    })
  );

  if (isModalShowing) {
    return spacecraft !== undefined && !isLoading ? (
      <ModalWrapper onClick={closeModal}>
        <ModalContent onClick={(event) => event.stopPropagation()}>
          <ModalHeader>
            <ModalTitle></ModalTitle>
          </ModalHeader>
          <ModalBody>
            <DetailedCard
              spacecraft={spacecraft}
              isLoading={isLoading}
              hasError={hasError}
            />
          </ModalBody>
          <ModalControls>
            <CloseButton onClick={closeModal}>close</CloseButton>
          </ModalControls>
        </ModalContent>
      </ModalWrapper>
    ) : (
      <Loading />
    );
  }
  return null;
};
