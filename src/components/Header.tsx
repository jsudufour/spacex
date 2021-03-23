import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import logo from "../assets/spacex.jpg";
import { DRAGONS, ROCKETS } from "../store/constants";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const AlignedItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${spacings.medium};
`;

type StylingProps = {
  isActive: boolean;
};

const Chip = styled.div<StylingProps>`
  display: flex;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? colors.darkTeal : colors.grey};
  border-radius: ${spacings.radius};
  padding: ${spacings.smallest};
  cursor: pointer;
  margin: ${spacings.medium};
`;

const Title = styled.h2<StylingProps>`
  padding: ${spacings.small} ${spacings.medium};
  color: ${({ isActive }) => (isActive ? colors.grey : colors.darkTeal)};
  margin: 0;
`;

type Props = {
  toggleSpacecrafts: (arg0: string) => void;
  currentSpacecrafts: string;
};

export const Header = ({ toggleSpacecrafts, currentSpacecrafts }: Props) => (
  <HeaderWrapper>
    <Logo src={logo} alt="spacex logo" />
    <AlignedItems>
      <Chip
        isActive={currentSpacecrafts === ROCKETS}
        onClick={() => toggleSpacecrafts(ROCKETS)}
      >
        <Title isActive={currentSpacecrafts === ROCKETS}>rockets</Title>
      </Chip>
      <Chip
        isActive={currentSpacecrafts === DRAGONS}
        onClick={() => toggleSpacecrafts(DRAGONS)}
      >
        <Title isActive={currentSpacecrafts === DRAGONS}>dragons</Title>
      </Chip>
    </AlignedItems>
  </HeaderWrapper>
);
