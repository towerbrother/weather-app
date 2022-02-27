import IError from "../interfaces/IError";
import { IWeather } from "../interfaces/IWeather";
import { formatApiData } from "./utils";
import { API_KEY } from "./constants";

export const fetchData = async (
  content: string,
  queryStringCity: string,
  queryStringCountry: string,
  callbackError: React.Dispatch<React.SetStateAction<IError | null>>,
  callbackLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<IWeather> => {
  try {
    const response = await fetch(
      `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?q=${queryStringCity},${queryStringCountry}&APPID=${API_KEY}`
    );
    const data = await response.json();
    return formatApiData(content, data);
  } catch (error: any) {
    callbackError(error);
    callbackLoading(false);
    return {} as IWeather;
  }
};

export const fetchInitialData = async (
  content: string,
  lat: number,
  lon: number,
  callbackError: React.Dispatch<React.SetStateAction<IError | null>>,
  callbackLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<IWeather> => {
  try {
    const response = await fetch(
      `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    );
    const data = await response.json();
    return formatApiData(content, data);
  } catch (error: any) {
    callbackError(error);
    callbackLoading(false);
    return {} as IWeather;
  }
};
