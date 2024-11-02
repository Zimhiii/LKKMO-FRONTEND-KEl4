import React, { useEffect } from "react";
import useProductManagementStore from "../stores/productManagementStore";
import CardItem from "../Components/All/CardItem";
import { Link } from "react-router-dom";

export default function AllProduct() {
  useEffect(() => {
    document.title = "All Product";
  }, []); // Tambahkan [] di sini

  const { products, fetchProducts, loading } = useProductManagementStore();

  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  }, [products, fetchProducts]); // Tambahkan dependensi

  return (
    <div className="flex justify-center items-center flex-col py-[50px]">
      <h1 className="font-cerotta text-[20px] md:text-[36px] mb-[30px]">
        All Product
      </h1>
      {/* <button onClick={() => console.log(products)}>test</button> */}
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <div className="flex py-[100px] flex-col font-bold gap-5 justify-center items-center font-center font-cerotta text-[18px] md:text-[35px]">
          <h1>No Products found</h1>
          <div className="flex flex-col gap-7 items-center">
            <h2>Login First to See Products</h2>
            <Link
              to="/login"
              className="bg-[#BB8360] text-center shadow-[0px_5px_10px_rgba(0,0,0,0.25)] text-[16px] md:text-[30px]  font-normal font-montserrat text-white px-3 py-1 md:px-6 md:py-2 rounded-md hover:bg-[#9c6d50] active:text-[#BB8360] active:bg-transparent active:ring-1 active:ring-[#BB8360]"
            >
              Login
            </Link>
          </div>
        </div>
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
