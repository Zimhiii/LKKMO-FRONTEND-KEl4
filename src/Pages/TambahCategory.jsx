import React, { useState } from 'react';
import useCategoryManagementStore from '../stores/categoryManagementStore';

export default function TambahCategory() {
    const { addCategory, loading, error } = useCategoryManagementStore();
    const [name, setName] = useState(''); // State untuk nama kategori

    const handleSubmit = async (e) => {
        e.preventDefault();

        const categoryData = {
            name, // Data yang dikirim hanya berisi field `name`
        };

        await addCategory(categoryData); // Panggil fungsi `addCategory`

        // Clear input field setelah submit
        setName('');
        window.location.href = '/admin/daftarcategory';
    };

    return (
        <form className="w-full p-5" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Nama Kategori
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan nama kategori"
                    required
                />
            </div>

            {error && <p className="text-red-500 text-xs italic">{error}</p>}

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={loading} // Disabled button saat loading
                >
                    {loading ? 'Menambahkan...' : 'Tambahkan Kategori'}
                </button>
            </div>
        </form>
    );
}
