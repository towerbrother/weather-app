import { fetchData, fetchInitialData } from "./fetch";

export const getWeatherData = async (
  content: string,
  queryStringCity: string,
  queryStringCountry: string,
  callbackData: React.Dispatch<React.SetStateAction<null>>,
  callbackError: React.Dispatch<React.SetStateAction<boolean | null | Response>>,
  callbackLoading: React.Dispatch<React.SetStateAction<boolean>>
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
  content: string,
  lat: number,
  lon: number,
  callbackData: React.Dispatch<React.SetStateAction<null>>,
  callbackError: React.Dispatch<React.SetStateAction<boolean | null | Response>>,
  callbackLoading: React.Dispatch<React.SetStateAction<boolean>>
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
