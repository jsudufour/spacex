import React from "react";
import styled from "styled-components";
import { startCase } from "lodash-es";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";

const LineItem = styled.div`
  display: flex;
  align-items: center;
`;

const BoldText = styled.p`
  color: ${colors.darkTeal};
  font-weight: 500;
  margin-right: ${spacings.smallest};
  margin: ${spacings.smallest};
`;

const Label = styled.p`
  color: ${colors.darkGrey};
  font-weight: 200;
  margin: ${spacings.smallest};
`;

type Props = {
  otherProps: { [key: string]: any };
};

export const PropertiesList = ({ otherProps }: Props) => (
  <React.Fragment>
    {Object.entries(otherProps).map(([label, value]) => (
      <LineItem key={label}>
        <BoldText>{startCase(label)}: </BoldText>
        <Label>{value}</Label>
      </LineItem>
    ))}
  </React.Fragment>
);
