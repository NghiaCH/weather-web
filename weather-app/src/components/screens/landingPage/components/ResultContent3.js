import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Hourly from "./Hourly";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ResultContent3 = ({ curTemp }) => {
  const hourlyRef = useRef(null);

  const handleLeft = () => {
    hourlyRef.current.scrollLeft -= 250;
  };

  const handleRight = () => {
    hourlyRef.current.scrollLeft += 250;
  };

  console.log("result 3");

  return (
    <div className="result-current-3 result-current-box">
      <div className="result-current-3-head">
        <span>Hourly</span>
      </div>
      <div className="result-current-3-body">
        <div className="result-current-3-body-btnBox">
          <Button
            variant="light"
            className="result-current-3-body-btn"
            onClick={handleLeft}
          >
            <BsArrowLeftCircle
              style={{
                width: "100%",
              }}
            />
          </Button>
        </div>
        <div ref={hourlyRef} className="result-current-hourlyBox">
          {curTemp?.days[0]?.hours.map((data, index) => (
            <Hourly index={index} data={data} key={data.datetime} />
          ))}
        </div>
        <div className="result-current-3-body-btnBox">
          <Button
            variant="light"
            className="result-current-3-body-btn"
            onClick={handleRight}
          >
            <BsArrowRightCircle
              style={{
                width: "100%",
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultContent3;
