import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import { DetailedRocket, DetailedDragon } from "../domain/types";
import { PropertiesList } from "./PropertiesList";
import { Loading } from "./Loading";

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
  isLoading: boolean;
  hasError: boolean;
};

export const DetailedCard = ({ spacecraft, isLoading, hasError }: Props) => {
  const {
    type,
    id,
    name,
    image,
    description,
    wikipedia,
    ...otherProps
  } = spacecraft;

  return isLoading && !spacecraft ? (
    <Loading />
  ) : (
    <CardWrapper>
      <Title>{name}</Title>
      <LineItem>
        <Image src={image}></Image>
        <Description>{description}</Description>
      </LineItem>
      <PropertiesList otherProps={otherProps} />
      <Footer>
        <Link href={wikipedia}>Learn more</Link>
      </Footer>
    </CardWrapper>
  );
};
