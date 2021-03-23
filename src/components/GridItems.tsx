import React from "react";
import styled from "styled-components";

import { spacings } from "../utils/spacings";
import { SummaryRocket, SummaryDragon } from "../domain/types";
import { SummaryCard } from "./SummaryCard";

const GridWrapper = styled.div`
  margin: ${spacings.largest};
  padding: ${spacings.largest};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-column-gap: ${spacings.smallest};
  grid-row-gap: ${spacings.medium};
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
