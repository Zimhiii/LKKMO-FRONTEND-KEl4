import React from "react";

export default function Logo({ width, height, responsive }) {
  return (
    <div>
      <div className={`${responsive} md:hidden`}>
        <img src="Logo.svg" alt="RENTURSTYLE" width={width} height={height} />
      </div>

      <div className={`${responsive} hidden md:block`}>
        <img src="LogoMD.png" alt="RENTURSTYLE" width={width} height={height} />
      </div>
    </div>
  );
}
