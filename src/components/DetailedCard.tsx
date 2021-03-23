import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import { DetailedRocket, DetailedDragon } from "../domain/types";
import { PropertiesList } from "./PropertiesList";
import { Loading } from "./Loading";

const Title = styled.h2`
  margin: 0;
  color: ${colors.darkTeal};
`;

const Subtitle = styled.h4`
  margin: 0;
  font-weight: 800;
  margin: ${spacings.medium} 0 ${spacings.small} 0;
  color: ${colors.darkTeal};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  padding: ${spacings.small} 0;
  border-radius: ${spacings.radius};
  height: 350px;
  width: 350px;
  object-fit: scale-down;
`;

const Description = styled.p`
  color: ${colors.darkGrey};
  padding: ${spacings.small} ${spacings.small} ${spacings.small} 0;
`;

const Link = styled.a`
  p {
    color: ${colors.darkTeal};
    font-weight: 500;
  }
  text-decoration: none;
  :visited {
    text-decoration: none;
  }
`;

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

  return isLoading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Subtitle>Quick facts</Subtitle>
      <PropertiesList otherProps={otherProps} />
      <ImageWrapper>
        <Image alt={`image of ${name}`} src={image} />
      </ImageWrapper>
      <Footer>
        <Link href={wikipedia} target="_blank">
          <p>Learn more</p>
        </Link>
      </Footer>
    </React.Fragment>
  );
};
