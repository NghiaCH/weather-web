import { getHour } from "../../../../utils/covert";
import { getWeatherIcon } from "../../../../utils/getIcon";
import { convertTempFToC } from "../../../../utils/covert";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hourly = ({ index, data }) => {
  useEffect(() => {
    AOS.init({
      duration: 100,
    });
  }, []);
  return (
    <div
      className="hourly"
      // data-aos="zoom-in-right"
      // data-aos-once={true}
      // data-aos-delay={index * 100}
    >
      <div className="hourly-content">
        <span className="hourly-content-hour">
          {getHour(data?.datetimeEpoch)}
        </span>
        <img
          className="hourly-content-img"
          src={getWeatherIcon(data?.icon)}
          alt="condition"
          width={"64"}
        />

        <div className="hourly-content-container">
          <div className="hourly-content-info">
            {convertTempFToC(data?.temp)}°
          </div>
          {/* <div className="hourly-content-realfeel">
            RealFeel® {convertTempFToC(data?.feelslike)}°
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hourly;
