import IError from "../interfaces/IError";
import { IWeather } from "../interfaces/IWeather";
import { fetchData, fetchInitialData } from "./fetch";

export const getWeatherData = async (
  content: string,
  queryStringCity: string,
  queryStringCountry: string,
  callbackData: React.Dispatch<React.SetStateAction<IWeather | null>>,
  callbackError: React.Dispatch<React.SetStateAction<IError | null>>,
  callbackLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const data = await fetchData(
    content,
    queryStringCity,
    queryStringCountry,
    callbackError,
    callbackLoading
  );
  callbackData(data);
  callbackLoading(false);
};

export const getInitialWeatherData = async (
  content: string,
  lat: number,
  lon: number,
  callbackData: React.Dispatch<React.SetStateAction<IWeather | null>>,
  callbackError: React.Dispatch<React.SetStateAction<IError | null>>,
  callbackLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const data = await fetchInitialData(
    content,
    lat,
    lon,
    callbackError,
    callbackLoading
  );
  console.log("OTHER", data);
  callbackData(data);
  callbackLoading(false);
};

export const formatApiData = (content: string, data: any): IWeather => {
  if (content === "weather") {
    return {
      city: data.name,
      country: data.sys.country,
      items: [
        {
          date: "Today",
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        },
      ],
    };
  } else {
    const items = data.list.filter(
      (item: any) =>
        item.dt_txt.slice(11, 19) === data.list[39].dt_txt.slice(11, 19)
    );

    const formatted: IWeather = {
      city: data.city.name,
      country: data.city.country,
      items: items.map((item: any) => ({
        date: item.dt_txt,
        maxTemp: item.main.temp_max,
        minTemp: item.main.temp_min,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      })),
    };
    return formatted;
  }
};
