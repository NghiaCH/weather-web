import { format } from "date-fns";

export const convertTempFToC = (temp) => {
  return Math.round((temp - 32) / 1.8);
};

export const convertTempKToC = (temp) => {
  return Math.round(temp - 273.15);
};

export const getDate = () => {
  let date = new Date();
  return format(date, "yyyy-MM-dd");
};

export const getHour = (epoch) => {
  let date = new Date(epoch * 1000);
  return format(date, "HH");
};

export const getDay = (epoch) => {
  let date = new Date(epoch * 1000);
  return format(date, "cccc");
};

export const convertTime = (epoch) => {
  let date = new Date(epoch * 1000);
  return format(date, "HH:mm"); //HH:mm MM/dd/yyyy
};

export const mPerStoKmPerH = (speed) => {
  return Math.round((speed * 60 ** 2) / 1000);
};
