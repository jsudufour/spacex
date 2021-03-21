import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import { DetailedRocket, DetailedDragon } from "../domain/types";

const CardWrapper = styled.div`
  padding: ${spacings.small};
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  width: 250px;
`;

const Title = styled.h4``;

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

const Image = styled.img`
  border-radius: ${spacings.radius};
`;

const Description = styled.p``;

const Link = styled.a``;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type Props = {
  spacecraft: DetailedRocket | DetailedDragon;
};

export const DetailedCard = ({ spacecraft }: Props) => {
  const { id, name, image, description, wikipedia, ...otherProps } = spacecraft;

  return (
    <CardWrapper>
      <Title>{name}</Title>
      <LineItem>
        <Image src={image}></Image>
        <Description>{description}</Description>
      </LineItem>
      {Object.keys(otherProps).map((element) => (
        <LineItem>
          {/* TODO : use lodash to get sentence case */}
          <BoldText>{element}: </BoldText>
          {/* <Label>{spacecraft[element]}</Label> */}
        </LineItem>
      ))}
      <Footer>
        <Link href={wikipedia}>Learn more</Link>
      </Footer>
    </CardWrapper>
  );
};
