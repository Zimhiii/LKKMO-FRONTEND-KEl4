import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/DashboardCom/Hero";
import HeroBody from "../Components/DashboardCom/HeroBody";
import Content from "../Components/DashboardCom/Content";

export default function Dashboard() {
  document.title = "Dashboard";
  return (
    <div>
      <Hero />
      <Content category="Cosplay" />
      <Content category="Carnaval" />
    </div>
  );
}
