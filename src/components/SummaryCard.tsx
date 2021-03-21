import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";

const CardWrapper = styled.div`
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  width: 250px;
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
  rocketName: string;
  active: boolean;
  firstFlight: string;
  costPerLaunch: string;
  country: string;
};

export const SummaryCard = ({
  rocketName,
  active,
  firstFlight,
  costPerLaunch,
  country,
}: Props) => {
  <CardWrapper>
    <Title>{rocketName}</Title>
    <LineItem>
      <BoldText>active: </BoldText>
      <Label>{active}</Label>
    </LineItem>
    <LineItem>
      <BoldText>first flight: </BoldText>
      <Label>{firstFlight}</Label>
    </LineItem>
    <LineItem>
      <BoldText>cost per launch: </BoldText>
      <Label>{costPerLaunch}</Label>
    </LineItem>
    <LineItem>
      <BoldText>country: </BoldText>
      <Label>{country}</Label>
    </LineItem>
  </CardWrapper>;
};
