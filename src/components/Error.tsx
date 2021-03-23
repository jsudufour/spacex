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
  width: 200px;
  height: 200px;
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Text = styled.h2`
  padding: ${spacings.smallest};
  color: ${colors.darkTeal};
  font-weight: 800;
`;

const Paragraph = styled.p`
  color: ${colors.darkTeal};
  font-weight: 200;
`;

export const Error = () => (
  <Wrapper>
    <TextWrapper>
      <Text>Oops!</Text>
      <Paragraph> Something went wrong, better call Elon!</Paragraph>
    </TextWrapper>
  </Wrapper>
);
