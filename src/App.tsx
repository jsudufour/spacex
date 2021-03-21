import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { GridItems } from "./components/GridItems";

const AppWrapper = styled.div``;

export const App = () => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <AppWrapper className="App">
      <Modal
        isModalShowing={isModalShowing}
        closeModal={() => setIsModalShowing(false)}
      />
      <Header />
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
    </AppWrapper>
  );
};
