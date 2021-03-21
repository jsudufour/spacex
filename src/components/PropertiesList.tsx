import React from "react";
import styled from "styled-components";
import { startCase } from "lodash-es";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";

const LineItem = styled.div`
  display: flex;
`;

const BoldText = styled.p`
  color: ${colors.greenBlack};
  font-weight: 400;
  margin-right: ${spacings.smallest};
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
        <BoldText>{startCase(label)}: </BoldText>
        <Label>{value}</Label>
      </LineItem>
    ))}
  </React.Fragment>
);
