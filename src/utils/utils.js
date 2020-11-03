import { fetchData } from "./fetch";

export const getWeatherData = async (
  content,
  queryStringCity,
  queryStringCountry,
  callback
) => {
  const data = await fetchData(content, queryStringCity, queryStringCountry);
  callback(data);
};
