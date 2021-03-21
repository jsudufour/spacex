import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import logo from "../assets/spacex.jpg";

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

const Chip = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  padding: ${spacings.smallest};
  cursor: pointer;
  margin: ${spacings.medium};
`;

const Title = styled.h2`
  padding: ${spacings.small} ${spacings.medium};
  color: ${colors.darkTeal};
  margin: 0;
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo src={logo} alt="spacex logo" />
    <AlignedItems>
      <Chip>
        <Title>rockets</Title>
      </Chip>
      <Chip>
        <Title>dragons</Title>
      </Chip>
    </AlignedItems>
  </HeaderWrapper>
);
