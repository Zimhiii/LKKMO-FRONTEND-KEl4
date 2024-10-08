import React from "react";
import Content from "./Content";

export default function ContainerContent() {
  return (
    <div className="md:px-[116px]">
      <Content subcategory="anime" />
      <Content subcategory="comic" />
      <Content subcategory="game" />
    </div>
  );
}
