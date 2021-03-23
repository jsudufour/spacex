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
  type: "ROCKET";
  id: string;
  name: string;
  wikipedia: string;
  description: string;
  image: string;
  stages: number;
  boosters: number;
  height: string;
  diameter: string;
  mass: string;
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
  type: "DRAGON";
  id: string;
  name: string;
  wikipedia: string;
  description: string;
  image: string;
  orbitDuration: string;
  diameter: string;
  heightWTrunk: string;
  dryMass: string;
  launchPayloadMass: string;
  returnPayloadMass: string;
}
