export const addFavouriteAction = (data) => {
  return {
    type: "favourite/addFavourite",
    payload: data,
  };
};

export const removeFavourite = (data) => {
  return {
    type: "favourite/removeFavourite",
    payload: data,
  };
};

export const setCurTemp = (data) => {
  return {
    type: "curTemp/setCurTemp",
    payload: data,
  };
};

export const setLocationInfo = (data) => {
  return {
    type: "locationInfo/setLocationInfo",
    payload: data,
  };
};

export const setTAL = (temp, airPollution, loading) => {
  return {
    type: "setTAL",
    payload: {
      temp,
      airPollution,
      loading,
    },
  };
};

export const setTLAL = (temp, location, airPollution, loading) => {
  return {
    type: "setTLAL",
    payload: {
      temp,
      location,
      airPollution,
      loading,
    },
  };
};

export const setLoading = (data) => {
  return {
    type: "loading/setLoading",
    payload: data,
  };
};

export const setLL = (location, loading) => {
  return {
    type: "setLL",
    payload: {
      location,
      loading,
    },
  };
};
