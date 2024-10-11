import React, { useEffect } from "react";
import { BsSortDown } from "react-icons/bs";
import { Await, Link } from "react-router-dom";
import { useUserManagementStore } from "../stores/userManagementStore";
import { useAuthUserStore } from "../stores/authstore";

export default function ManagementUser() {
  const { users, fetchUsers, deleteUser, setAdminStatus } =
    useUserManagementStore();
  const { token } = useAuthUserStore(); // Ambil token dari auth store

  useEffect(() => {
    fetchUsers(token);
    console.log("users:", users);

    // Ambil daftar pengguna saat komponen dimuat
  }, [fetchUsers, token]);

  // Fungsi untuk menghapus pengguna
  const handleDeleteUser = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) {
      await deleteUser(id, token);
    }
  };

  return (
    <div className="w-full h-full px-[67px] py-[80px]">
      <header className="flex justify-between font-inter">
        <h1 className="font-cerotta text-[31px]">MANAJEMEN AKUN</h1>

        <form action="" className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("users:", users);
            }}
            className="bg-[#BB8360] px-[8px] rounded-[6px] text-[14px] text-white"
          >
            Filter
          </button>
          <input
            type="search"
            placeholder="Cari akun"
            className="ring-1 ring-[#CBD5E1] px-2 py-2 rounded-[6px]"
          />
          <button className="bg-[#A6680C] px-[8px] rounded-[6px] text-[14px] text-white">
            Cari
          </button>
        </form>
      </header>

      <table className="text-[16px] mt-[80px] font-inter font-normal w-full">
        <thead className="w-full flex">
          <tr className="flex w-full text-white bg-[#BB8360]">
            <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center max-w-[90px]">
              <span>No</span>
            </th>
            <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[150px]">
              <span>Nama</span> <BsSortDown className="w-5 h-5" />
            </th>
            <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[200px]">
              <span>Email</span> <BsSortDown className="w-5 h-5" />
            </th>
            <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[150px]">
              <span>Password</span> <BsSortDown className="w-5 h-5" />
            </th>
            <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center min-w-[100px]">
              <span>Aksi</span> <BsSortDown className="w-5 h-5" />
            </th>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col">
          {users?.data && users.data.length > 0 ? (
            users.data[0].map((user, index) => (
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
  );
}
