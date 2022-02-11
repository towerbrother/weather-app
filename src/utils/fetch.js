import { API_KEY } from "./constants";

export const fetchData = async (
  content,
  queryStringCity,
  queryStringCountry
) => {
  const response = await fetch(
    `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?q=${queryStringCity},${queryStringCountry}&APPID=${API_KEY}`
  );
  return response;
};

export const fetchInitialData = async (
  content,
  lat,
  lon
) => {
  const response = await fetch(
    `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
  );
  return response;
};