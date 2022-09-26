import { computeDistanceBetween } from 'spherical-geometry-js';

type Geolocation = {
  lat: number;
  lng: number;
};

const METERS_IN_KILOMETERS = 1000;

export const metersToKilometers = (m: number): string => {
  const converted = (m / METERS_IN_KILOMETERS).toFixed(2);

  return converted.concat('km');
};

export const calculateDistanceBetween = (locations: Geolocation[]): string => {
  const [a, b] = locations;

  const result = metersToKilometers(computeDistanceBetween(a, b));

  return result;
};
