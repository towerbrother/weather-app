import { API_KEY } from "./constants";

export const fetchData = async (
  content: string,
  queryStringCity: string,
  queryStringCountry: string
) => {
  const response = await fetch(
    `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?q=${queryStringCity},${queryStringCountry}&APPID=${API_KEY}`
  );
  return response;
};

export const fetchInitialData = async (
  content: string,
  lat: number,
  lon: number
) => {
  const response = await fetch(
    `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
  );
  return response;
};