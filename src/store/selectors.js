import { createSelector } from "reselect";
import { ROCKETS, DRAGONS } from "../store/constants";

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

const currentSpacecraftState = (state) => state.currentSpacecraft;

export const currentSpacecraftSelector = createSelector(
  currentSpacecraftState,
  (currentSpacecraft) => {
    if (currentSpacecraft && currentSpacecraft.type === ROCKETS) {
      const {
        id,
        name,
        wikipedia,
        description,
        flickr_images,
        stages,
        boosters,
        height,
        diameter,
        mass,
        engines,
        landing_legs,
      } = currentSpacecraft.data;
      return {
        type: currentSpacecraft.type,
        id,
        name,
        wikipedia,
        description,
        image: flickr_images.length > 0 && flickr_images[0],
        stages,
        boosters,
        height: `${height.meters}m`,
        diameter: `${diameter.meters}m`,
        mass: `${mass.lb}lbs`,
        engines: engines.number,
        engineType: engines.type,
        landingLegsNumber: landing_legs.number,
        landingLegsMaterial: landing_legs.material,
      };
    } else if (currentSpacecraft && currentSpacecraft.type === DRAGONS) {
      const {
        id,
        name,
        wikipedia,
        description,
        flickr_images,
        orbit_duration_yr,
        height_w_trunk,
        diameter,
        dry_mass_lb,
        launch_payload_mass,
        return_payload_mass,
      } = currentSpacecraft.data;
      return {
        type: currentSpacecraft.type,
        id,
        name,
        wikipedia,
        description,
        image: flickr_images.length > 0 && flickr_images[0],
        orbitDuration: `${orbit_duration_yr} years`,
        heightWTrunk: `${height_w_trunk.meters}m`,
        diameter: `${diameter.meters}m`,
        dryMass: `${dry_mass_lb}lbs`,
        launchPayloadMass: `${launch_payload_mass.lb}lbs`,
        returnPayloadMass: `${return_payload_mass.lb}lbs`,
      };
    } else {
      return undefined;
    }
  }
);
