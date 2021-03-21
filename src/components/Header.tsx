import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import logo from "../icons/spacex.jpg";

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

const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h4`
  padding: 0 ${spacings.medium};
  color: ${colors.lightPink};
`;

export const Header = () => (
  <HeaderWrapper>
    <Logo src={logo} alt="spacex logo" />
    <Pages>
      <Title>rockets</Title>
      <Title>dragons</Title>
    </Pages>
  </HeaderWrapper>
);
