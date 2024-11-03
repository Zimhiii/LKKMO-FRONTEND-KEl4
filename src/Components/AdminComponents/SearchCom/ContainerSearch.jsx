import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductManagementStore from "../../../stores/productManagementStore";
import CardItem from "../../All/CardItem";

export default function ContainerSearch() {
  const { search } = useParams();
  const { searchProducts, loading, productsBySearch } =
    useProductManagementStore();

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
      ) : (
        <>
          {productsBySearch.length > 0 ? (
            <div>
              <h2 className="text-center text-2xl font-bold my-6">
                Search Results for "{search}"
              </h2>
              <div className="flex justify-center flex-wrap gap-[40px]">
                {productsBySearch.map((product) => (
                  <div className="min-w-[200px]">
                    <CardItem
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      image={product.image}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                {/* <button
                  onClick={() => console.log(productsBySearch)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
                >
                  DEBUGGING
                </button> */}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 font-semibold mt-8">
              No data found for "{search}"
            </div>
          )}
        </>
      )}
    </div>
  );
}
