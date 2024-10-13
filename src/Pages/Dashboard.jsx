import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/DashboardCom/Hero";
import HeroBody from "../Components/DashboardCom/HeroBody";
import Content from "../Components/DashboardCom/Content";
import useProductManagementStore from "../stores/productManagementStore";

export default function Dashboard() {
  document.title = "Dashboard";
  const { products } = useProductManagementStore();

  console.log(products);

  // mappedProduct = products.map((product) => (
  //   <Content category="Carnaval" product={product} />
  // ));
  return (
    <div>
      <Hero />
      <Content category="Carnaval" products={products} id="2" />
      <Content category="Cosplay" products={products} id="1" />
    </div>
  );
}
