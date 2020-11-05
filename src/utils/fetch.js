import { API_KEY } from "./constants";

export const fetchData = async (
  content,
  queryStringCity,
  queryStringCountry,
  key = API_KEY
) => {
  const response = await fetch(
    `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?q=${queryStringCity},${queryStringCountry}&APPID=${key}`
  );
  return response;
};
