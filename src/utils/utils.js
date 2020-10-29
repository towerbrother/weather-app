import { fetchData } from "./fetch";

export const getWeatherData = (
  content,
  queryStringCity,
  queryStringCountry,
  callback
) => {
  return fetchData(
    content,
    queryStringCity,
    queryStringCountry
  ).then((extractedData) => callback(extractedData));
};
