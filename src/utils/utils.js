import { fetchData, fetchInitialData } from "./fetch";

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

export const getInitialWeatherData = async (
  content,
  lat,
  lon,
  callbackData,
  callbackError,
  callbackLoading
) => {
  const response = await fetchInitialData(
    content,
    lat,
    lon
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
