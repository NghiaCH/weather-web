export const GetPosition = () => {
  let latitude;
  let longitude;
  const getPosition = navigator.geolocation.getCurrentPosition(function (
    position
  ) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });
  getPosition();
  return `${latitude}-${longitude}`;
};

export const getWindDir = (winddir) => {
  if (winddir > 348.75 || winddir <= 11.25) {
    return "N";
  }

  if (winddir > 11.25 && winddir <= 33.75) {
    return "NNE";
  }

  if (winddir > 33.75 && winddir <= 56.25) {
    return "NE";
  }

  if (winddir > 56.25 && winddir <= 78.75) {
    return "ENE";
  }

  if (winddir > 78.75 && winddir <= 101.25) {
    return "E";
  }

  if (winddir > 101.25 && winddir <= 123.75) {
    return "ESE";
  }

  if (winddir > 123.75 && winddir <= 146.25) {
    return "SE";
  }

  if (winddir > 146.25 && winddir <= 168.75) {
    return "SSE";
  }

  if (winddir > 168.75 && winddir <= 191.25) {
    return "S";
  }

  if (winddir > 191.25 && winddir <= 213.75) {
    return "SSW";
  }

  if (winddir > 213.75 && winddir <= 236.25) {
    return "SW";
  }

  if (winddir > 236.25 && winddir <= 258.75) {
    return "WSW";
  }

  if (winddir > 258.75 && winddir <= 281.25) {
    return "W";
  }

  if (winddir > 281.25 && winddir <= 303.75) {
    return "WNW";
  }

  if (winddir > 303.75 && winddir <= 33.75) {
    return "NW";
  }

  if (winddir > 11.25 && winddir <= 326.25) {
    return "NNW";
  }

  if (winddir > 326.25 && winddir <= 348.75) {
    return "N";
  }
};
