import * as React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { airCondition } from "../../../../utils/airCondition";
import { mPerStoKmPerH, convertTime } from "../../../../utils/covert";
import { getWindDir } from "../../../../utils/get";

const ResultContent2 = ({ curTemp, airPollution }) => {
  console.log("result 2");

  return (
    <div className="result-current-2 result-current-box">
      <div className="result-current-2-box">
        <div className="result-current-2-item">
          <p className="result-current-info">
            Visibility <span>{curTemp?.currentConditions?.visibility} Km</span>
          </p>
          <p className="result-current-info">
            Wind speed{" "}
            <span>
              {mPerStoKmPerH(curTemp?.currentConditions?.windspeed)} Km/h
            </span>
          </p>
          <p className="result-current-info">
            Wind direction{" "}
            <span>{getWindDir(curTemp?.currentConditions?.winddir)} </span>
          </p>
          <p className="result-current-info">
            Air
            <span>{airCondition(airPollution?.list?.main?.aqi)} </span>
          </p>
          <p className="result-current-info">
            UV Index
            <span>{curTemp?.currentConditions?.uvindex} </span>
          </p>
        </div>
        <div className="result-current-2-item">
          <p className="result-current-info">
            Atmospheric pressure{" "}
            <span>{curTemp?.currentConditions?.pressure} hPa</span>
          </p>
          <p className="result-current-info">
            Humidity
            <span>{curTemp?.currentConditions?.humidity}%</span>
          </p>
          <p className="result-current-info">
            Sun rise
            <span>
              {convertTime(curTemp?.currentConditions?.sunriseEpoch)} am
            </span>
          </p>
          <p className="result-current-info">
            Sun set
            <span>
              {convertTime(curTemp?.currentConditions?.sunsetEpoch)} pm
            </span>
          </p>
          <p className="result-current-info">
            Solar Radiation
            <span>{curTemp?.currentConditions?.solarradiation} W/m2</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResultContent2;
