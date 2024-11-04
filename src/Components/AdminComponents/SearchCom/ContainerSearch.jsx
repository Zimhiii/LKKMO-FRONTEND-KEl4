import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProductManagementStore from "../../../stores/productManagementStore";
import CardItem from "../../All/CardItem";

export default function ContainerSearch() {
  const { search } = useParams();
  const { searchProducts, loading, productsBySearch } =
    useProductManagementStore();
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.title = `Search Category - ${search}`;
  }, [search]);

  useEffect(() => {
    searchProducts(search);
  }, [search, searchProducts]);

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center text-4xl font-cerotta">
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px] ">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#BB8360]"></div>
          <span className="ml-2 text-[#BB8360] text-lg font-semibold">
            Loading...
          </span>
        </div>
      ) : productsBySearch.length > 0 ? (
        <div>
          <h2 className="text-center text-2xl font-bold my-6">
            Search Results for "{search}"
          </h2>
          <div className="flex justify-center flex-wrap gap-[40px]">
            {productsBySearch.map((product) => (
              <div key={product.id} className="min-w-[200px]">
                <CardItem
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
      ) : token ? (
        <div className="text-center text-gray-500 font-semibold mt-8">
          No data found for "{search}"
        </div>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2Xl font-semibold mb-4">
            Login First to See Products Search
          </h2>
          <Link
            to="/login"
            className="px-4 py-2 bg-[#BB8360] text-white rounded-md shadow hover:bg-[#a07051] hover:text-white active:bg-[#BB8360] active:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
