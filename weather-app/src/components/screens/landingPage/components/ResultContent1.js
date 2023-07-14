import { useDispatch, useSelector } from "react-redux";
import { addFavouriteAction, removeFavourite } from "../../../../store/actions";

import { BsHeartFill, BsHeart } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { upperCaseFirstLetter } from "../../../../utils/upperCase";

import { convertTempFToC } from "../../../../utils/covert";
import { getWeatherIcon } from "../../../../utils/getIcon";

const ResultContent1 = ({ location, curTemp, locationInfo }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite);

  const checkFavourite = () => {
    return favourite.some((location) => {
      return Number(location.id) === Number(locationInfo?.place_id);
    });
  };

  const handleFavouriteClick = () => {
    if (checkFavourite()) {
      let favArr = favourite.filter(
        (location) => Number(location.id) !== Number(locationInfo?.place_id)
      );
      dispatch(removeFavourite(favArr));
    } else {
      let newLocation = {
        id: locationInfo?.place_id,
        lat: location?.lat,
        long: location?.long,
        value: locationInfo,
      };

      dispatch(addFavouriteAction(newLocation));
    }
  };

  return (
    <div className="result-current-1 result-current-box">
      <div className="result-current-1-head">
        <span>
          Location:
          {locationInfo?.address?.city_district ||
            locationInfo?.address?.county ||
            locationInfo?.address?.city ||
            locationInfo?.address?.name ||
            locationInfo?.address?.suburb}
        </span>
        <Button
          variant="light"
          onClick={handleFavouriteClick}
          className="result-current-1-head-btn"
        >
          {checkFavourite() ? <BsHeartFill /> : <BsHeart />}
        </Button>
      </div>
      <div className="result-current-temp">
        {/* <img
              src={`http://openweathermap.org/img/wn/${curTemp?.weather[0]?.icon}@2x.png`}
              //   width="32"
              //   height={"32"}
            /> */}
        <img
          src={getWeatherIcon(curTemp?.currentConditions?.icon)}
          alt="condition"
          width={"100"}
        />
        <div className="result-current-temp-container ">
          <div className="result-current-temp-info">
            {convertTempFToC(curTemp?.currentConditions?.temp)}°
          </div>
          <div className="result-current-temp-realfeel">
            RealFeel® {convertTempFToC(curTemp?.currentConditions?.feelslike)}°
          </div>
        </div>
      </div>
      <span>
        {upperCaseFirstLetter(curTemp?.currentConditions?.conditions)}
      </span>
    </div>
  );
};

export default ResultContent1;
