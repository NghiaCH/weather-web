import clear_day from "../assets/image/conditionBg/clear-day.jpg";
import clear_night from "../assets/image/conditionBg/clear-night.jpg";
import cloudy from "../assets/image/conditionBg/cloudy.jpg";
import fog from "../assets/image/conditionBg/fog.jpg";
import hail from "../assets/image/conditionBg/hail.jpg";
import partly_cloudy_day from "../assets/image/conditionBg/partly-cloudy-day.jpg";
import partly_cloudy_night from "../assets/image/conditionBg/part-cloudy-night.jpg";
import rain from "../assets/image/conditionBg/rain.jpg";
import rain_snow_showers_day from "../assets/image/conditionBg/rain-snow-showers-day.jpg";
import rain_snow_showers_night from "../assets/image/conditionBg/rain-snow-showers-night.jpg";
import rain_snow from "../assets/image/conditionBg/rain-snow.webp";
import showers_day from "../assets/image/conditionBg/showers-day.jpg";
import showers_night from "../assets/image/conditionBg/showers-night.webp";
import sleet from "../assets/image/conditionBg/sleet.jpg";
import snow_showers_day from "../assets/image/conditionBg/snow-showers-day.jpg";
import snow_showers_night from "../assets/image/conditionBg/snow-showers-night.jpg";
import snow from "../assets/image/conditionBg/snow.jpg";
import thunder_rain from "../assets/image/conditionBg/thunder-rain.jpg";
import thunder_showers_day from "../assets/image/conditionBg/thunder-showers-day.jpg";
import thunder_showers_night from "../assets/image/conditionBg/thunder-showers-night.webp";
import thunder from "../assets/image/conditionBg/thunder.jpg";
import wind from "../assets/image/conditionBg/wind.jpg";

export const getBg = (icon) => {
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
