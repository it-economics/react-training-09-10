export type PlanetsResponse = {
  next: string | null;
  previous: string | null;
  results: PlanetResponse[];
};

export type PlanetResponse = {
  name: string;
  terrain: string;
  diameter: number;
  climate: string;
  gravity: string;
  url: string;
};
