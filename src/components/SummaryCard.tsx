import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import { SummaryRocket, SummaryDragon } from "../domain/types";
import { PropertiesList } from "./PropertiesList";

const CardWrapper = styled.div`
  padding: ${spacings.small};
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  width: 250px;
  cursor: pointer;
`;

const Title = styled.h3`
  color: ${colors.darkTeal};
`;

type Props = {
  spacecraft: SummaryRocket | SummaryDragon;
  showModal: (arg0: boolean) => void;
};

export const SummaryCard = ({ spacecraft, showModal }: Props) => {
  const { id, name, image, active, ...otherProps } = spacecraft;
  return (
    <CardWrapper onClick={() => showModal(true)}>
      <Title>{name}</Title>
      <PropertiesList otherProps={otherProps} />
    </CardWrapper>
  );
};
