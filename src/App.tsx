import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";

const AppWrapper = styled.div``;

export const App = () => (
  <AppWrapper className="App">
    <Header />
    <Modal isShowingModal={isShowingModal} />
  </AppWrapper>
);
