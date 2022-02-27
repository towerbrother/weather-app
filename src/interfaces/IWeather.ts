export interface IWeather {
  city: string;
  country: string;
  items: IWeatherItem[];
}

export interface IWeatherItem {
  date: string;
  maxTemp: number;
  minTemp: number;
  description: string;
  icon: string;
}
