import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import KanitTTF from "./fonts/Kanit-ExtraLight.ttf";
import { colors } from "./utils/colors";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { GridItems } from "./components/GridItems";

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

const Attribution = styled.div`
  color: ${colors.greenBlack};
`;

export const App = () => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [currentSpacecrafts, setCurrentSpacecrafts] = useState("ROCKETS");

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
      <GridItems
        showModal={() => setIsModalShowing(true)}
        spacecrafts={[
          {
            id: "r123",
            name: "TEST ROCKET",
            image:
              "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
            active: false,
            firstFlight: "Sept 20th 2020",
            costPerLaunch: "$1.5M",
            successRate: "97%",
            country: "USA",
            company: "SpaceX",
          },
          {
            id: "d123",
            image:
              "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2015_-_04_crs5_dragon_orbit13.jpg?itok=9p8_l7UP",
            name: "TEST DRAGON",
            active: true,
            firstFlight: "Jan 14th 2020",
            type: "Satellite",
            crewCapacity: 0,
          },
        ]}
      />
      <Attribution>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Attribution>
    </AppWrapper>
  );
};
