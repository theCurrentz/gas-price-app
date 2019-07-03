import getGasStations from "./getGasStations.js";

const testData = {
  status: {
    error: "NO",
    code: 200,
    description: "none",
    message: "Request ok"
  },
  geoLocation: {
    country_short: null,
    lat: "33.1635744",
    lng: "-117.33628879999999",
    country_long: null,
    region_short: null,
    region_long: null,
    city_long: null,
    address: null
  },
  stations: [
    {
      country: "United States",
      zip: "92008",
      reg_price: "3.55",
      mid_price: "3.65",
      pre_price: "3.75",
      diesel_price: "3.59",
      reg_date: "4 years ago",
      mid_date: "4 years ago",
      pre_date: "4 years ago",
      diesel_date: "4 years ago",
      address: "1145 Carlsbad Village Dr",
      diesel: "1",
      id: "97111",
      lat: "33.163792",
      lng: "-117.341423",
      station: "Shell",
      region: "California",
      city: "Carlsbad",
      distance: "0.3 miles"
    }
  ]
};

describe("getGasStations", () => {
  // mock fetch
  global.fetch = () => {
    return jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(testData)
      });
    })();
  };
  // mock geolocation api
  global.navigator.geolocation = {
    getCurrentPosition: (resolve, reject) => {
      resolve({
        coords: { latitude: 33.163608, longitude: -117.336287 }
      });
    }
  };

  test("that it returns an array of gas stations", done => {
    expect.assertions(1);
    getGasStations()
      .then(response => {
        expect(response).toBe(testData);
        done();
      })
      .catch(e => {
        console.log(e);
      });
  });
});
