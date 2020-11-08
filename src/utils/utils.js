import { fetchData } from "./fetch";

export const getWeatherData = async (
  content,
  queryStringCity,
  queryStringCountry,
  callbackData,
  callbackError,
  callbackLoading
) => {
  const response = await fetchData(
    content,
    queryStringCity,
    queryStringCountry
  );
  if (!response.ok) {
    callbackError(response);
    callbackLoading(false);
  } else {
    const data = await response.json();
    callbackData(data);
    callbackLoading(false);
  }
};
