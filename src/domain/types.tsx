export interface SummaryRocket {
  id: string;
  name: string;
  image: string;
  active: boolean;
  firstFlight: string;
  costPerLaunch: string;
  successRate: string;
  country: string;
  company: string;
}

export interface DetailedRocket {
  id: string;
  name: string;
  wikipedia: string;
  description: string;
  image: string; // flickr_images[0]
  stages: number;
  boosters: number;
  height: number; // meters
  diameter: number; // meters
  mass: number; // lb
  engines: number;
  engineType: string;
  landingLegsNumber: number;
  landingLegsMaterial: string;
}

export interface SummaryDragon {
  id: string;
  image: string;
  name: string;
  active: boolean;
  firstFlight: string;
  type: string;
  crewCapacity: number;
}

export interface DetailedDragon {
  id: string;
  name: string;
  wikipedia: string;
  description: string;
  image: string; // flickr_images
  orbitDuration: number;
  diameter: number; // meters
  heightWTrunk: number; // meters
  dryMass: number; // lb,
  launchPayloadMass: number; // lb
  returnPayloadMass: number; // lb
}
