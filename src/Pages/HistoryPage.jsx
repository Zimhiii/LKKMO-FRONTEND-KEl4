import React, { useEffect, useState } from "react";
import CardHistory from "../Components/All/CardHistory";
import CardKeranjang from "../Components/All/CardKeranjang";
import useOrderManagementStore from "../stores/orderManagementStore";

export default function HistoryPage() {
  const [isHistory, setIsHistory] = useState(true);
  const { fetchOrders, orders, deleteOrder } = useOrderManagementStore();

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    document.title = "History";
  });
  // useEffect(() => {
  //   fetchOrderHistory();
  // }, [fetchOrderHistory]);

  const orderfilter = orders.filter((order) => order.status === "Belum");
  const orderHistoryfilter = orders.filter(
    (order) => order.status === "Selesai"
  );

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
          {orderHistoryfilter.length > 0 ? (
            orderHistoryfilter.map((order) => (
              <CardHistory
                product_id={order.product_id}
                price={order.price}
                size={order.size}
                total_price={order.total_price}
                key={order.id}
                order_id={order.id}
                rental_start={order.rental_start}
                rental_end={order.rental_end}
                date={order.created_at}
                status={order.status}
              />
            ))
          ) : (
            <div className="flex justify-center text-2xl items-center font-cerotta">
              <h1>Belum ada History</h1>
            </div>
          )}
          {/* <CardHistory />
          <CardHistory />
          <CardHistory /> */}

          {/* <button
            onClick={() => {
              console.log(orders);
              console.log(orderHistory);
            }}
            className="bg-[#BB8360] px-4 py-2  text-[20px] rounded-[6px] text-white"
          >
            Debugging
          </button> */}
        </div>
      )}
      {!isHistory && (
        <div className="flex flex-col gap-5 mb-8">
          {orderfilter.length > 0 ? (
            orderfilter.map((order) => (
              <CardKeranjang
                product_id={order.product_id}
                price={order.price}
                size={order.size}
                total_price={order.total_price}
                key={order.id}
                order_id={order.id}
                rental_start={order.rental_start}
                rental_end={order.rental_end}
                date={order.created_at}
                status={order.status}
              />
              // <CardKeranjang />
            ))
          ) : (
            <div className="flex justify-center text-2xl items-center font-cerotta">
              <h1>Belum ada order</h1>
            </div>
          )}

          {/* <CardHistory />
          <CardHistory />
          <CardHistory /> */}

          {/* <button
            onClick={() => {
              console.log(orders);
              console.log(orderHistory);
            }}
            className="bg-[#BB8360] px-4 py-2  text-[20px] rounded-[6px] text-white"
          >
            Debugging
          </button> */}
        </div>
      )}
    </div>
  );
}
