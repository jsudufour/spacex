import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  padding: ${spacings.smallest};
  width: 150px;
  height: 100px;
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  color: ${colors.darkTeal};
  font-weight: 800;
`;

export const Loading = () => (
  <Wrapper>
    <TextWrapper>
      <Text>Loading...</Text>
    </TextWrapper>
  </Wrapper>
);
