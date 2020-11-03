import { getWeatherData } from "./utils";

jest.mock("./fetch"); // no need for path as jest.mock will look for the __mock__ folder

describe("getWeatherData", () => {
  const callbackTest = (e) => e;
  test("it returns an object", () => {
    getWeatherData(
      "content",
      "Test city name",
      "Test country name",
      callbackTest
    ).then((data) => {
      expect(typeof data == "object").toBeTruthy();
    });
  });
  test("it has three object keys", () => {
    getWeatherData(
      "content",
      "Test city name",
      "Test country name",
      callbackTest
    ).then((data) => {
      expect(Object.keys(data).length).toBe(3);
    });
  });
  test("it handles data correctly", () => {
    getWeatherData(
      "content",
      "Test city name",
      "Test country name",
      callbackTest
    ).then((data) => {
      expect(data).toEqual({
        main: {
          temp: 20,
        },
        name: "Test city name",
        sys: {
          country: "Test country name",
        },
      });
    });
  });
  test("it handles error correctly", () => {
    getWeatherData(
      "content",
      "Test city name",
      "Test country name",
      callbackTest
    ).catch((error) => {
      expect(error).toEqual({ error: "Test error" });
    });
  });
});
