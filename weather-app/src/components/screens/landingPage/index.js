import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Result from "./components/Result";
import Search from "./components/Search";

const LandingPage = () => {
  const { search } = useLocation();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    console.log("index...", search);
    if (search) {
      let newSearch = search;
      let latlong = newSearch.slice(10).split("_");
      setLocation({
        lat: Number(latlong[0]),
        long: Number(latlong[1]),
      });
    } else {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            setLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });
          },
          function (error) {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
        );
      } else {
        console.log("Not Available");
      }
    }
  }, [search]);

  return location ? (
    <div className="landingPage">
      <div className="landingPage-bg"></div>
      <Search setLocation={setLocation} />
      <Result location={location} />
    </div>
  ) : null;
};

export default LandingPage;
