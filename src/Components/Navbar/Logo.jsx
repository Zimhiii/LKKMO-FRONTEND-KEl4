import React from "react";

export default function Logo({ width, height, responsive }) {
  return (
    <div className={`${responsive}`}>
      <img src="Logo.svg" alt="RENTURSTYLE" width={width} height={height} />
    </div>
  );
}
