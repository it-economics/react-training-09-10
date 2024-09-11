import { useEffect, useState } from 'react';
import { Planet } from '../model';
import { PlanetResponse, PlanetsResponse } from './planet';

const SWAPI_URL = 'https://swapi.dev/api';
const SWAPI_PLANETS_URL = `${SWAPI_URL}/planets`;

const fetchPlanets = (url: string) =>
  fetch(url).then((response) => response.json() as unknown as PlanetsResponse);

type UsePlanets = {
  loading: boolean;
  error: boolean;
  planets: Planet[];
  next?: () => void;
  previous?: () => void;
};

export const usePlanets = (): UsePlanets => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState(SWAPI_PLANETS_URL);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);
  const [planets, setPlanets] = useState<Planet[]>();

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchPlanets(url)
      .then((response) => {
        setNextUrl(response.next);
        setPreviousUrl(response.previous);
        setPlanets(response.results.map(mapToModel));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]); // Refetch when URL changes

  const next = nextUrl ? () => setUrl(nextUrl) : undefined;
  const previous = previousUrl ? () => setUrl(previousUrl) : undefined;

  return {
    loading,
    error,
    planets: planets ?? [],
    next,
    previous,
  };
};

const mapToModel = ({ terrain, ...planet }: PlanetResponse): Planet => ({
  ...planet,
  terrain: terrain.split(',').map((t) => t.trim()),
});

const fetchPlanet = (id: string) =>
  fetch(`${SWAPI_PLANETS_URL}/${id}`).then(
    (response) => response.json() as unknown as PlanetResponse
  );

export const usePlanet = (
  id?: string
): { loading: boolean; error: boolean; planet?: Planet } => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [planet, setPlanet] = useState<Planet>();

  useEffect(() => {
    if (!id) return; // Nothing to fetch!

    setLoading(true);
    fetchPlanet(id)
      .then(mapToModel)
      .then(setPlanet)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, error, planet };
};
