import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

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
  otherProps: { [key: string]: any };
};

export const PropertiesList = ({ otherProps }: Props) => (
  <React.Fragment>
    {Object.entries(otherProps).map(([label, value]) => (
      <LineItem>
        {/* TODO : use lodash to get sentence case */}
        <BoldText>{label}: </BoldText>
        <Label>{value}</Label>
      </LineItem>
    ))}
  </React.Fragment>
);
