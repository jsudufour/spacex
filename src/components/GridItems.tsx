import React from "react";
import styled from "styled-components";

import { spacings } from "../utils/spacings";
import { SummaryRocket, SummaryDragon } from "../domain/types";
import { SummaryCard } from "./SummaryCard";

const GridWrapper = styled.div`
  padding: ${spacings.large};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${spacings.small};
  row-gap: ${spacings.small};
`;

type Props = {
  spacecrafts: Array<SummaryRocket | SummaryDragon>;
  showModal: () => void;
  type: string;
};

export const GridItems = ({ spacecrafts, showModal, type }: Props) => (
  <GridWrapper>
    {spacecrafts.map((spacecraft) => (
      <SummaryCard
        key={spacecraft.id}
        spacecraft={spacecraft}
        showModal={showModal}
        type={type}
      />
    ))}
  </GridWrapper>
);
