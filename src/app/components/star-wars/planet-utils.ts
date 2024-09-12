const planetIdRegExp = /^.*\/(\d+)\/?$/; // Matches SWAPI URL with or without trailing slash

export const extractPlanetIdFromUrl = (planetUrl: string) =>
  planetIdRegExp.exec(planetUrl)?.[1];
