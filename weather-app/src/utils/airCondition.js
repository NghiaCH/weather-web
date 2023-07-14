export const airCondition = (aqi) => {
  switch (aqi) {
    case 1:
      return "very good";
    case 2:
      return "Good";
    case 3:
      return "Poor";
    default:
      return "Very poor";
  }
};
