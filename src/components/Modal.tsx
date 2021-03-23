import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import type { RootState } from "../store";
import { currentSpacecraftSelector } from "../store/selectors";
import { DetailedCard } from "./DetailedCard";
import { Loading } from "./Loading";
import { Error } from "./Error";

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
  padding: ${spacings.smallest};
  width: 500px;
  height: 500px;
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  overflow: auto;
`;

const ModalHeader = styled.div`
  padding: ${spacings.small};
`;

const ModalTitle = styled.h3`
  margin: 0;
`;

const ModalBody = styled.div`
  padding: ${spacings.small};
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

  if (hasError) {
    return <Error />;
  }

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
        </ModalContent>
      </ModalWrapper>
    ) : (
      <Loading />
    );
  }
  return null;
};
