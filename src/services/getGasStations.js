let isRetrieving = false;

/**
 * Retrieves the closest gas stations within 25 miles of the user
 * Uses mygasfeed.com geolocation API
 * @param {number} latitude of the user
 * @param {number} longitude of the user
 * @returns {Object} data - an array of station info objects
 */
const getGasStations = async (selectedDistance = 5) => {
  if (!isRetrieving) {
    isRetrieving = true;
    if (!navigator.geolocation) {
      isRetrieving = false;
      new Error("Location is unavailable");
    }

    const position = await new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(
      `http://api.mygasfeed.com/stations/radius/${latitude}/${longitude}/${selectedDistance}/reg/distance/5btl1yk9az.json`
    );

    isRetrieving = false;
    return await response.json();
  }
};

export default getGasStations;
