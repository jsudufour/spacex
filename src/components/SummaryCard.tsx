import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../utils/colors";
import { spacings } from "../utils/spacings";
import { SummaryRocket, SummaryDragon } from "../domain/types";
import { PropertiesList } from "./PropertiesList";
import { Loading } from "./Loading";
import type { RootState } from "../store";
import {
  fetchRocketDetailsRequest,
  fetchDragonDetailsRequest,
} from "../store/actions";
import { ROCKETS, DRAGONS } from "../store/constants";

const CardWrapper = styled.div`
  padding: ${spacings.small};
  background-color: ${colors.grey};
  border-radius: ${spacings.radius};
  width: 250px;
  cursor: pointer;
`;

const Title = styled.h3`
  color: ${colors.darkTeal};
`;

type Props = {
  spacecraft: SummaryRocket | SummaryDragon;
  type: string;
  showModal: (arg0: boolean) => void;
};

export const SummaryCard = ({ spacecraft, showModal, type }: Props) => {
  const { isLoading } = useSelector((state: RootState) => ({
    isLoading: state.isLoading,
  }));

  const dispatch = useDispatch();

  const { id, name, image, active, ...otherProps } = spacecraft;
  return isLoading ? (
    <Loading />
  ) : (
    <CardWrapper
      onClick={() => {
        if (type === ROCKETS) {
          dispatch(fetchRocketDetailsRequest(id, type));
        } else if (type === DRAGONS) {
          dispatch(fetchDragonDetailsRequest(id, type));
        }
        showModal(true);
      }}
    >
      <Title>{name}</Title>
      <PropertiesList otherProps={otherProps} />
    </CardWrapper>
  );
};
