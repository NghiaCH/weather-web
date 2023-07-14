const initState = {
  favourite: [],
  curTemp: {},
  locationInfo: {},
  airPollution: {},
  loading: true,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "favourite/addFavourite":
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };

    case "favourite/removeFavourite":
      return {
        ...state,
        favourite: [...action.payload],
      };

    case "curTemp/setCurTemp":
      return {
        ...state,
        curTemp: action.payload,
      };

    case "locationInfo/setLocationInfo":
      return {
        ...state,
        locationInfo: action.payload,
      };

    case "setTAL":
      return {
        ...state,
        curTemp: action.payload.temp,
        airPollution: action.payload.airPollution,
        loading: action.payload.loading,
      };

    case "setTLAL":
      return {
        ...state,
        curTemp: action.payload.temp,
        locationInfo: action.payload.location,
        airPollution: action.payload.airPollution,
        loading: action.payload.loading,
      };

    case "loading/setLoading":
      return {
        ...state,
        loading: action.payload,
      };

    case "setLL":
      return {
        ...state,
        locationInfo: action.payload.location,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
};

export default rootReducer;
