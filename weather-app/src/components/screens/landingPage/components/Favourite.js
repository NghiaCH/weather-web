import { useSelector } from "react-redux";
import FavouriteInfo from "./FavouriteInfo";
import BlurSkeleton from "../../../common/BlurSkeleton";
import Button from "react-bootstrap/Button";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useRef } from "react";

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite);
  const isLoading = useSelector((state) => state.loading);
  const favouriteRef = useRef(null);

  const toLeft = () => {
    favouriteRef.current.scrollLeft -= 250;
  };

  const toRight = () => {
    favouriteRef.current.scrollLeft += 250;
  };

  return (
    <div className="favourite">
      <div className="favourite-head">
        <span>Favourite</span>
      </div>
      <div className="favourite-main">
        <div className="favourite-main-btnBox favourite-main-btnBox-btn1">
          <Button
            variant="light"
            className="favourite-main-btnBox-btn"
            onClick={toLeft}
          >
            <BsArrowLeftCircle
              style={{
                width: "1.5em",
                height: "1.5em",
                color: "#000",
              }}
            />
          </Button>
        </div>
        <div ref={favouriteRef} className="favourite-main-content">
          {favourite.map((data, index) => {
            return isLoading ? (
              <BlurSkeleton
                key={index}
                className="favourite-main-content-item-common borRa10px"
              />
            ) : (
              <FavouriteInfo key={index} data={data} />
            );
          })}
        </div>
        <div className="favourite-main-btnBox favourite-main-btnBox-btn2">
          <Button
            variant="light"
            className="favourite-main-btnBox-btn"
            onClick={toRight}
          >
            <BsArrowRightCircle
              style={{
                width: "1.5em",
                height: "1.5em",
                color: "#000",
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
