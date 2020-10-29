import { API_KEY } from "./constants";

export const fetchData = ({
  content,
  queryStringCity,
  queryStringCountry,
  key = API_KEY,
}) => {
  fetch(
    `${window.location.protocol}//api.openweathermap.org/data/2.5/${content}?q=${queryStringCity},${queryStringCountry}&APPID=${key}`
  )
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
