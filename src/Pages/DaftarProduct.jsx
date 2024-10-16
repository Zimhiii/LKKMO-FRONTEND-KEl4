import React, { useEffect } from 'react';
import useProductManagementStore from '../stores/productManagementStore';
import { Link } from 'react-router-dom';

const DaftarProduct = () => {
    const { products, deleteProduct, loading, error } = useProductManagementStore();

    const baseUrl = 'https://lkkmo-backend-production.up.railway.app/api/v1';

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(id);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="overflow-x-auto p-5">
            <div className="flex justify-between items-center ">
                <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
                <Link
                    to="/admin/tambahproduk"
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-700">
                    Tambah Produk
                </Link>
            </div>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Price</th>
                        <th className="border border-gray-300 p-2">Stock</th>
                        <th className="border border-gray-300 p-2">Description</th>
                        <th className="border border-gray-300 p-2">Size</th>
                        <th className="border border-gray-300 p-2">Image</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                            <td className="border border-gray-300 p-2">{product.id}</td>
                            <td className="border border-gray-300 p-2">{product.name}</td>
                            <td className="border border-gray-300 p-2">{product.price}</td>
                            <td className="border border-gray-300 p-2">{product.stock}</td>
                            <td className="border border-gray-300 p-2">{product.description}</td>
                            <td className="border border-gray-300 p-2">{product.size}</td>
                            <td className="border border-gray-300 p-2">
                                <img
                                    src={`http://lkkmo-backend-production.up.railway.app/storage/${product.image}`}
                                    alt={product.name}
                                    className="h-16 w-16 object-cover"
                                />
                            </td>
                            <td className="border border-gray-300 p-2 ">
                                <div className="flex justify-evenly items-center">
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                                        Delete
                                    </button>
                                    <Link
                                        to={'/admin/editproduk/' + product.id}
                                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-700">
                                        Edit
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DaftarProduct;
