import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import KanitTTF from "./fonts/Kanit-ExtraLight.ttf";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { GridItems } from "./components/GridItems";
import { Loading } from "./components/Loading";
import { fetchRocketsRequest, fetchDragonsRequest } from "./store/actions";
import type { RootState } from "./store";
import { dragonsSelector, rocketsSelector } from "./store/selectors";
import { ROCKETS } from "./store/constants";

const GlobalStyle = createGlobalStyle`
body {
  background-color: black;
  margin: 0;
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  @font-face {
   font-family: 'Kanit';
    src: url(${KanitTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
`;

const AppWrapper = styled.div``;

export const App = () => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [currentSpacecrafts, setCurrentSpacecrafts] = useState(ROCKETS);

  const { rockets, dragons, isLoading } = useSelector((state: RootState) => ({
    rockets: rocketsSelector(state),
    dragons: dragonsSelector(state),
    isLoading: state.isLoading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsRequest());
    dispatch(fetchDragonsRequest());
  }, [dispatch]);

  return (
    <AppWrapper className="App">
      <GlobalStyle />
      <Modal
        isModalShowing={isModalShowing}
        closeModal={() => setIsModalShowing(false)}
      />
      <Header
        toggleSpacecrafts={setCurrentSpacecrafts}
        currentSpacecrafts={currentSpacecrafts}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <GridItems
          showModal={() => setIsModalShowing(true)}
          spacecrafts={currentSpacecrafts === ROCKETS ? rockets : dragons}
          type={currentSpacecrafts}
        />
      )}
    </AppWrapper>
  );
};
