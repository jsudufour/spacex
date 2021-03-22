import { createSelector } from "reselect";

const rocketsState = (state) => state.rockets;

export const rocketsSelector = createSelector(rocketsState, (rockets) =>
  rockets.map(
    ({
      id,
      name,
      flickr_images,
      active,
      first_flight,
      cost_per_launch,
      success_rate_pct,
      country,
      company,
    }) => ({
      id,
      name,
      image: flickr_images.length > 0 && flickr_images[0],
      active,
      firstFlight: first_flight,
      costPerLaunch: cost_per_launch,
      successRate: success_rate_pct,
      country,
      company,
    })
  )
);

const dragonsState = (state) => state.dragons;

export const dragonsSelector = createSelector(dragonsState, (dragons) =>
  dragons.map(
    ({
      id,
      flickr_images,
      name,
      active,
      first_flight,
      type,
      crew_capacity,
    }) => ({
      id,
      image: flickr_images.length > 0 && flickr_images[0],
      name,
      active,
      firstFlight: first_flight,
      type,
      crewCapacity: crew_capacity,
    })
  )
);
