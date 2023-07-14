import clear_day from "../assets/image/svg/icon/clear-day.svg";
import clear_night from "../assets/image/svg/icon/clear-night.svg";
import cloudy from "../assets/image/svg/icon/cloudy.svg";
import fog from "../assets/image/svg/icon/fog.svg";
import hail from "../assets/image/svg/icon/hail.svg";
import partly_cloudy_day from "../assets/image/svg/icon/partly-cloudy-day.svg";
import partly_cloudy_night from "../assets/image/svg/icon/partly-cloudy-night.svg";
import rain from "../assets/image/svg/icon/rain.svg";
import rain_snow_showers_day from "../assets/image/svg/icon/rain-snow-showers-day.svg";
import rain_snow_showers_night from "../assets/image/svg/icon/rain-snow-showers-night.svg";
import rain_snow from "../assets/image/svg/icon/rain-snow.svg";
import showers_day from "../assets/image/svg/icon/showers-day.svg";
import showers_night from "../assets/image/svg/icon/showers-night.svg";
import sleet from "../assets/image/svg/icon/sleet.svg";
import snow_showers_day from "../assets/image/svg/icon/snow-showers-day.svg";
import snow_showers_night from "../assets/image/svg/icon/snow-showers-night.svg";
import snow from "../assets/image/svg/icon/snow.svg";
import thunder_rain from "../assets/image/svg/icon/thunder-rain.svg";
import thunder_showers_day from "../assets/image/svg/icon/thunder-showers-day.svg";
import thunder_showers_night from "../assets/image/svg/icon/thunder-showers-night.svg";
import thunder from "../assets/image/svg/icon/thunder.svg";
import wind from "../assets/image/svg/icon/wind.svg";

export const getWeatherIcon = (icon) => {
  switch (icon) {
    case "clear-day":
      return clear_day;

    case "clear-night":
      return clear_night;

    case "cloudy":
      return cloudy;

    case "fog":
      return fog;

    case "hail":
      return hail;

    case "partly-cloudy-day":
      return partly_cloudy_day;

    case "partly-cloudy-night":
      return partly_cloudy_night;

    case "rain":
      return rain;

    case "rain-snow-showers-day":
      return rain_snow_showers_day;

    case "rain-snow-showers-night":
      return rain_snow_showers_night;

    case "rain-snow":
      return rain_snow;

    case "showers-day":
      return showers_day;

    case "showers-night":
      return showers_night;

    case "sleet":
      return sleet;

    case "snow-showers-day":
      return snow_showers_day;

    case "snow-showers-night":
      return snow_showers_night;

    case "snow":
      return snow;

    case "thunder-rain":
      return thunder_rain;

    case "thunder-showers-day":
      return thunder_showers_day;

    case "thunder-showers-night":
      return thunder_showers_night;

    case "thunder":
      return thunder;

    default:
      return wind;
  }
};
