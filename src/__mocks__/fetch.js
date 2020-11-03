export const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve({
      main: {
        temp: 20,
      },
      name: "Test city name",
      sys: {
        country: "Test country name",
      },
    });
    reject({ error: "Test error" });
  });
};
