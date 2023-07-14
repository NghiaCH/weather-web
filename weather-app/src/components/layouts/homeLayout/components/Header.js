import Logo from "../../../../assets/image/svg/logo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="header"
      style={{
        background: `${
          scroll
            ? "#000000"
            : "linear-gradient(180deg, #000c, rgba(255, 255, 255, 0))"
        }`,
        transition: "0.5s",
      }}
    >
      <Link to="/" className="header-content">
        <img src={Logo} alt="React Logo" className="header-content-logo" />
        <span className="header-content-name">Fatk1d's Weather</span>
      </Link>
    </div>
  );
};

export default Header;
