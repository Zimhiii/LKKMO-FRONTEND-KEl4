import React, { useEffect } from "react";
import useProductManagementStore from "../stores/productManagementStore";
import CardItem from "../Components/All/CardItem";

export default function AllProduct() {
  const { products, fetchProducts, loading } = useProductManagementStore();
  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  });

  return (
    <div className="flex justify-center items-center flex-col py-[50px]">
      <h1 className="font-cerotta text-[20px] md:text-[36px] mb-[30px]">
        All Product
      </h1>
      {/* <button onClick={() => console.log(products)}>test</button> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[40px] md:gap-[100px]">
          {products.map((product) => (
            <CardItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
