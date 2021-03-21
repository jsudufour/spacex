import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import { SummaryRocket, SummaryDragon } from "../domain/types";

const CardWrapper = styled.div`
  padding: ${spacings.small};
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  width: 250px;
  cursor: pointer;
`;

const Title = styled.h4``;

const LineItem = styled.div`
  display: flex;
`;

const BoldText = styled.p`
  color: ${colors.greenBlack};
  font-weight: 400;
`;

const Label = styled.p`
  color: ${colors.darkGrey};
  font-weight: 200;
`;

type Props = {
  spacecraft: SummaryRocket | SummaryDragon;
  showModal: (arg0: boolean) => void;
};

export const SummaryCard = ({ spacecraft, showModal }: Props) => {
  const { id, name, image, ...otherProps } = spacecraft;
  console.log("name, image, other props: ", name, image, otherProps);
  return (
    <CardWrapper onClick={() => showModal(true)}>
      <Title>{name}</Title>
      {Object.keys(otherProps).map((propertyName) => (
        <LineItem>
          {/* TODO : use lodash to get sentence case */}
          <BoldText>{propertyName}: </BoldText>
          {/* <Label>{spacecraft[propertyName]}</Label> */}
        </LineItem>
      ))}
    </CardWrapper>
  );
};
