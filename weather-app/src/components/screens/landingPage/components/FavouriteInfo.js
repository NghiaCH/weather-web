import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { convertTempFToC, getDate } from "../../../../utils/covert";
import { getWeatherIcon } from "../../../../utils/getIcon";
import BlurSkeleton from "../../../common/BlurSkeleton";

const FavouriteInfo = ({ data }) => {
  const [favouriteTemp, setFavouriteTemp] = useState(null);

  const getFavouriteTemp = async () => {
    await axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
          data.lat
        },${data.long}/${getDate()}?key=YSZD9WTD6N2H7MTUUFGHJ3MLH`
      )
      .then((response) => {
        setFavouriteTemp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFavouriteTemp();
  }, []);

  return favouriteTemp ? (
    <Link
      to={`/?location=${data.lat}_${data.long}`}
      className="favourite-main-content-item favourite-main-content-item-common"
    >
      <span className="favourite-main-content-item-location">
        {data.value?.address?.city_district ||
          data.value?.address?.county ||
          data.value?.address?.city ||
          data.value?.address?.name ||
          data.value?.address?.suburb}
      </span>
      <div className="favourite-main-content-item-temp">
        <img
          src={getWeatherIcon(favouriteTemp?.currentConditions?.icon)}
          width={"32"}
        />
        <span>{convertTempFToC(favouriteTemp?.currentConditions?.temp)}°</span>
      </div>
      <span className="favourite-main-content-item-realfeel">
        RealFeel®{convertTempFToC(favouriteTemp?.currentConditions?.feelslike)}°
      </span>
    </Link>
  ) : (
    <BlurSkeleton className="favourite-main-content-item-common borRa10px" />
  );
};

export default FavouriteInfo;
