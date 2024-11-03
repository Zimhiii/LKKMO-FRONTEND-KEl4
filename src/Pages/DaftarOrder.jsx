import React, { useEffect } from "react";
import { BsSortDown } from "react-icons/bs";
import useOrderManagementStore from "../stores/orderManagementStore";
import { Link } from "react-router-dom";

export default function DaftarOrder() {
  const { ordersall, fetchOrdersAll, loading, updateOrder, deleteOrder } =
    useOrderManagementStore();
  useEffect(() => {
    fetchOrdersAll();
  }, [fetchOrdersAll]);
  useEffect(() => {
    fetchOrdersAll();
  }, [ordersall.length]);

  //   const handleUpdateOrder = (id) => {
  //     if (ordersall.status === "Belum") {
  //       updateOrder(id, { status: "Selesai" });
  //     }
  //     if (ordersall.status === "Selesai") {
  //       updateOrder(id, { status: "Belum" });
  //     }
  //     // fetchOrdersAll();
  //   };
  async function sendMessage(target, message) {
    const url = "https://api.fonnte.com/send";
    const token = "2TQsabhhruZyHNz17PRt"; // Ganti dengan token Anda

    const headers = {
      Authorization: token,
    };

    // Menyiapkan data untuk dikirim
    const data = new FormData();
    data.append("target", target);
    data.append("message", message);
    data.append("countryCode", "62"); // Kode negara, bisa disesuaikan jika perlu

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: data,
      });

      const result = await response.json();
      //   console.log("Message sent successfully:", result);
      return result;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }

  //   Contoh penggunaan:
  // const target = ;
  // const message = "Halo, ini pesan test dari Renturstyle!";

  const handleUpdateOrder = (id) => {
    const order = ordersall.find((order) => order.id === id);
    if (order) {
      const newStatus = order.status === "Belum" ? "Selesai" : "Belum";
      updateOrder(id, { ...order, status: newStatus });
    }
    // if (newStatus === "Selesai") {
    const targetphone = order.user.phone;
    const message = `Halo ${order.user.name},
Terimakasih telah membayar pesanan Anda, jangan lupa untuk mengambil produk yang anda sewa di Renturstyle pada tanggal *${order.rental_start}*.
Jika ada pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami! Terima kasih sudah mempercayakan kami untuk kebutuhan Anda.!`;
    sendMessage(targetphone, message);
    // console.log(targetphone, message);
    // }
  };

  const handleDeleteOrder = (id) => {
    deleteOrder(id);
  };

  return (
    <div>
      <div>Daftar Order</div>
      <div className="w-full h-full px-[67px] py-[80px]">
        <table className="text-[16px] mt-[80px] font-inter font-normal w-full">
          <thead className="w-full flex">
            <tr className="flex w-full text-white bg-[#BB8360]">
              <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center max-w-[50px]">
                <span>No</span>
              </th>
              <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[150px]">
                <span>Nama Pengguna</span> <BsSortDown className="w-5 h-5" />
              </th>
              <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[150px]">
                <span>Nama Barang</span> <BsSortDown className="w-5 h-5" />
              </th>
              <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[150px]">
                <span>Rental Start</span> <BsSortDown className="w-5 h-5" />
              </th>
              <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[150px]">
                <span>Rental End</span> <BsSortDown className="w-5 h-5" />
              </th>
              <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center max-w-[100px]">
                <span>Status</span> <BsSortDown className="w-5 h-5" />
              </th>
              <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[150px]">
                <span>Aksi</span> <BsSortDown className="w-5 h-5" />
              </th>
            </tr>
          </thead>
          <tbody className="w-full flex flex-col">
            {ordersall && ordersall.length > 0 ? (
              ordersall.map((order, index) => (
                <tr key={order.id} className="flex w-full ">
                  <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center max-w-[50px] text-center">
                    {index + 1}
                  </td>
                  <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[150px]">
                    {order.user.name}
                  </td>
                  <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[150px]">
                    {order.product !== null
                      ? order.product.name
                      : "Telah di Hapus"}
                  </td>
                  <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[200px]">
                    {order.rental_start}
                  </td>
                  <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[200px]">
                    {order.rental_end}
                  </td>
                  <td className="flex-1 py-[10px]  ring-1 text-[14px] ring-slate-200 flex justify-center items-center max-w-[100px]">
                    {order.status}
                  </td>
                  <td className="flex-1 py-[10px] px-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center gap-3 min-w-[100px]">
                    <button
                      onClick={() => handleUpdateOrder(order.id)}
                      //   to={`/admin/editakun/${order.id}`} // Ubah ke rute edit yang sesuai
                      className="bg-[#BB8360] text-[10px] px-4 text-white py-2 rounded"
                    >
                      {order.status === "Belum"
                        ? "Tandai Sebagai Selesai"
                        : "Tandai Sebagai Belum"}
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="ring-1 ring-red-500 px-4 text-red-500 py-2 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading....
                </td>
              </tr>
            )}
          </tbody>

          {/* <tbody className="w-full flex flex-col">
          {users.data[0].map((user, index) => (
            <tr key={user.id} className="flex w-full ">
              <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center max-w-[90px] text-center">
                {index + 1}
              </td>
              <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[150px]">
                {user.name}
              </td>
              <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[200px]">
                {user.email}
              </td>
              <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[150px]">
                {user.password}
              </td>
              <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center gap-3 min-w-[100px]">
                <Link
                  to={`/admin/editakun/${user.id}`} // Ubah ke rute edit yang sesuai
                  className="bg-[#BB8360] px-4 text-white py-2 rounded"
                >
                  Edit
                </Link>
                <button
                  // onClick={() => handleDeleteUser(user.id)}
                  className="ring-1 ring-red-500 px-4 text-red-500 py-2 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
        </table>
      </div>

      {/* <div>
        <button
          onClick={() => console.log(ordersall)}
          className="bg-[#BB8360] px-4 text-white py-2 rounded"
        >
          debugging
        </button>
      </div> */}
    </div>
  );
}
