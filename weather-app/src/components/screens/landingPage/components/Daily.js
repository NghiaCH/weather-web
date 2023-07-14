import Accordion from "react-bootstrap/Accordion";
import { getWeatherIcon } from "../../../../utils/getIcon";
import { convertTempFToC, getDay, convertTime } from "../../../../utils/covert";
import { getWindDir } from "../../../../utils/get";

const Daily = ({ index, data }) => {
  return (
    <Accordion.Item className="accordionItem" eventKey={`${index}`}>
      <Accordion.Header>
        <div className="accordionItem-head">
          <span className="accordionItem-head-day">
            {getDay(data?.datetimeEpoch)}
          </span>
          <img
            className="accordionItem-head-img"
            src={getWeatherIcon(data?.icon)}
            alt="condition"
            width={"64"}
          />
          <span className="accordionItem-head-temp">
            {convertTempFToC(data?.temp)}°
          </span>
          <span className="accordionItem-head-realfeel">
            RealFeel® {convertTempFToC(data?.feelslike)}°
          </span>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="accordionItem-body">
          <div className="accordionItem-body-col">
            <p className="accordionItem-body-col-info">
              Visibility <span>{data?.visibility} Km</span>
            </p>
            <p className="accordionItem-body-col-info">
              Temp max <span>{convertTempFToC(data?.tempmax)}°</span>
            </p>
            <p className="accordionItem-body-col-info">
              Temp min <span>{convertTempFToC(data?.tempmin)}°</span>
            </p>
            <p className="accordionItem-body-col-info">
              UV Index <span>{data?.uvindex}</span>
            </p>
          </div>
          <div className="accordionItem-body-col">
            <p className="accordionItem-body-col-info">
              Wind speed <span>{data?.windspeed} Km/h</span>
            </p>
            <p className="accordionItem-body-col-info">
              Wind direction <span>{getWindDir(data?.winddir)}</span>
            </p>
            <p className="accordionItem-body-col-info">
              Sun rise <span>{convertTime(data?.sunriseEpoch)} am</span>
            </p>
            <p className="accordionItem-body-col-info">
              Sun set <span>{convertTime(data?.sunsetEpoch)} pm</span>
            </p>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Daily;
