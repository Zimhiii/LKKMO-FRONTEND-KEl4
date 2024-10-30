import React, { useEffect, useState } from "react";
import CardHistory from "../Components/All/CardHistory";
import CardKeranjang from "../Components/All/CardKeranjang";
import useOrderManagementStore from "../stores/orderManagementStore";

export default function HistoryPage() {
  const [isHistory, setIsHistory] = useState(true);
  const { fetchOrders, orders } = useOrderManagementStore();

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="mx-[20px]">
      <div className=" flex font-montserrat text-[10px] md:text-[31px] justify-center py-[25px]">
        {isHistory && (
          <div className="flex bg-[#BB8360] rounded-[10px] cursor-pointer w-fit ">
            <div
              className=" py-[9px] px-[39px]   bg-[#BB8360] rounded-[10px] text-white"
              onClick={() => setIsHistory(true)}
            >
              History
            </div>
            <div
              className="py-[9px]  px-[39px] border-[2px] border-[#BB8360] bg-white rounded-[10px]"
              onClick={() => setIsHistory(false)}
            >
              Orders
            </div>
          </div>
        )}

        {!isHistory && (
          <div className="flex bg-[#BB8360] rounded-[10px]  cursor-pointer">
            <div
              className=" py-[9px] px-[39px]   bg-white 0] border-[2px] border-[#BB8360] rounded-[10px]"
              onClick={() => setIsHistory(true)}
            >
              History
            </div>
            <div
              className="py-[9px]  px-[39px]  bg-[#BB836rounded-[10px] text-white"
              onClick={() => setIsHistory(false)}
            >
              Orders
            </div>
          </div>
        )}
      </div>
      {isHistory && (
        <div className="flex flex-col gap-5 mb-8">
          {orders.length > 0 ? (
            orders.map((order) => (
              <CardHistory
                product_id={order.product_id}
                price={order.price}
                size={order.size}
                total_price={order.total_price}
                key={order.id}
              />
            ))
          ) : (
            <div>
              <h1>Belum ada history</h1>
            </div>
          )}
          {/* <CardHistory />
          <CardHistory />
          <CardHistory /> */}

          <button
            onClick={() => console.log(orders)}
            className="bg-[#BB8360] px-4 py-2  text-[20px] rounded-[6px] text-white"
          >
            Debugging
          </button>
        </div>
      )}
      {!isHistory && (
        <div className="flex flex-col gap-5 mb-8">
          <CardKeranjang />
          <CardKeranjang />
          <CardKeranjang />
        </div>
      )}
    </div>
  );
}
