import React from "react";
import Logosm from "../../assets/Logo.svg";
import Logomd from "../../assets/LogoMD.png";
import { Link } from "react-router-dom";

export default function Logo({ width, height, responsive }) {
  return (
    <Link to="/">
      <div className={`${responsive} md:hidden`}>
        <img src={Logosm} alt="RENTURSTYLE" width={width} height={height} />
      </div>

      <div className={`${responsive} hidden md:block`}>
        <img src={Logomd} alt="RENTURSTYLE" width={width} height={height} />
      </div>
    </Link>
  );
}
