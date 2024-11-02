import React, { useState } from "react";

function RedirectToWA() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState("");

  const handleWhatsAppOrder = () => {
    const message = `
      Halo! 😊

      Kami senang Anda tertarik dengan produk kami! Berikut detail pesanan Anda:
      
      🛍️ *Nama Produk*: ${product}
      📏 *Ukuran*: ${size}
      📅 *Tanggal Sewa*: ${startDate} - ${endDate}
      🔢 *Jumlah*: ${quantity}
      💵 *Total Harga*: Rp ${totalPrice.toLocaleString("id-ID")}

      Kami akan segera memproses pesanan Anda. Jika ada pertanyaan lebih lanjut atau jika ada perubahan, jangan ragu untuk menghubungi kami! Terima kasih sudah mempercayakan kami untuk kebutuhan Anda. ✨😊
      
      Salam hangat,
      [Nama Toko/Tim Anda]
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/6285341929161?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Form Pesanan</h2>

      <label className="block mb-2">
        Nama Produk:
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Nama Produk"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-2">
        Jumlah:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-2">
        Ukuran:
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Ukuran"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-2">
        Tanggal Mulai:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-2">
        Tanggal Akhir:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>

      <label className="block mb-2">
        Total Harga:
        <input
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          placeholder="Total Harga"
          className="w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </label>

      <button
        onClick={handleWhatsAppOrder}
        className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Kirim Pesan
      </button>

      {message && (
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded whitespace-pre-wrap">
          <h3 className="text-lg font-semibold">Pesan WhatsApp:</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default RedirectToWA;
