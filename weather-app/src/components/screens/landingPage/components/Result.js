import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTLAL, setLoading } from "../../../../store/actions";
import { getDate } from "../../../../utils/covert";
import { getBg } from "../../../../utils/getBg";

import ResultContent1 from "./ResultContent1";
import ResultContent2 from "./ResultContent2";
import ResultContent3 from "./ResultContent3";
import ResultContent4 from "./ResultContent4";
import BlurSkeleton from "../../../common/BlurSkeleton";

const Result = ({ location }) => {
  const dispatch = useDispatch();
  const curTemp = useSelector((state) => state.curTemp);
  const airPolution = useSelector((state) => state.airPollution);
  const isLoading = useSelector((state) => state.loading);
  const firstTime = useRef(true);
  const [result, setResult] = useState({
    curTemp: null,
    airPollution: null,
    locationInfo: null,
    fifthteenDays: null,
    hasData: false,
  });

  const getTemp = async (searchLocation) => {
    //console.log(searchLocation);
    let curTemp;
    let locationInfo;
    let airPollution;
    let fifthteenDays;

    await axios
      .get(
        `https://us1.locationiq.com/v1/reverse?key=pk.493833025b0ec92e26a2a472202cb840&lat=${searchLocation.lat}&lon=${searchLocation.long}&format=json`
      )
      .then((response) => {
        locationInfo = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
          searchLocation.lat
        },${searchLocation.long}/${getDate()}?key=YSZD9WTD6N2H7MTUUFGHJ3MLH`
        //`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8c1041acb2eb070a85a93734293d214a`
      )
      .then((response) => {
        curTemp = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${searchLocation.lat}&lon=${searchLocation.long}&appid=8c1041acb2eb070a85a93734293d214a`
      )
      .then((response) => {
        airPollution = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation.lat},${searchLocation.long}?key=YSZD9WTD6N2H7MTUUFGHJ3MLH`
      )
      .then((response) => {
        fifthteenDays = response.data.days;
      });

    setResult({
      ...result,
      curTemp,
      locationInfo,
      airPollution,
      fifthteenDays,
      hasData: true,
    });
    dispatch(setLoading(false));
    // dispatch(setTLAL(curTemp, locationInfo, airPollution, false));
    firstTime.current = false;
  };

  useEffect(() => {
    dispatch(setLoading(true));
    getTemp(location);
  }, [location]);

  return (
    <React.Fragment>
      <div
        className="landingPage-bg"
        style={{
          backgroundImage: `url(${getBg(
            result?.curTemp?.currentConditions?.icon
          )})`,
        }}
      ></div>
      <div
        className="result"
        // style={{
        //   backgroundImage: `url(${getBg(curTemp?.currentConditions?.icon)})`,
        // }}
      >
        <div className="result-current">
          {isLoading || !result.hasData ? (
            <>
              <BlurSkeleton
                className="result-current-box"
                skeletonStyles={{
                  width: "100%",
                  height: "203.88px",
                  margin: "0 0 32px",
                }}
              />

              <BlurSkeleton
                className="result-current-box"
                skeletonStyles={{
                  width: "100%",
                  height: "174.66px",
                  margin: "0 0 32px",
                }}
              />

              <BlurSkeleton
                className="result-current-box"
                skeletonStyles={{
                  width: "100%",
                  height: "274px",
                  margin: "0 0 32px",
                }}
              />
            </>
          ) : (
            <>
              <ResultContent1
                location={location}
                curTemp={result.curTemp}
                locationInfo={result.locationInfo}
              />

              <ResultContent3 curTemp={result.curTemp} />

              <ResultContent2
                curTemp={result.curTemp}
                airPollution={result.airPollution}
              />

              <ResultContent4 fifthteenDays={result.fifthteenDays} />
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Result;
/*
await axios
      .get(
        `https://us1.locationiq.com/v1/reverse?key=pk.493833025b0ec92e26a2a472202cb840&lat=${searchLocation.lat}&lon=${searchLocation.long}&format=json`
      )
      .then((response) => {
        locationInfo = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
*/
