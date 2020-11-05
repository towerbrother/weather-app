import { getWeatherData } from "./utils";

jest.mock("./fetch"); // no need for path as jest.mock will look for the __mock__ folder

describe("getWeatherData", () => {
  const callbackDataTest = (e) => e;
  const callbackErrorTest = (e) => e;
  const callbackLoadingTest = (e) => e;

  it("returns an object", () => {
    getWeatherData(
      "content",
      "city name",
      "Test country name",
      callbackDataTest,
      callbackErrorTest,
      callbackLoadingTest
    ).then((data) => {
      expect(typeof data == "object").toBeTruthy();
    });
  });

  it("has three object keys", () => {
    getWeatherData(
      "content",
      "Test city name",
      "Test country name",
      callbackDataTest,
      callbackErrorTest,
      callbackLoadingTest
    ).then((data) => {
      expect(Object.keys(data).length).toBe(3);
    });
  });

  it("handles data correctly", () => {
    getWeatherData(
      "content",
      "Test city name",
      "Test country name",
      callbackDataTest,
      callbackErrorTest,
      callbackLoadingTest
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

  it("handles error correctly", () => {
    getWeatherData(
      "content",
      "Test city name",
      "Test country name",
      callbackDataTest,
      callbackErrorTest,
      callbackLoadingTest
    ).catch((error) => {
      expect(error).toEqual({ error: "Test error" });
    });
  });
});
