import React from "react";
import { BsSortDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ManagementUser() {
  return (
    <div className="w-full h-full px-[67px] py-[80px]">
      <header className="flex justify-between  font-inter">
        <h1 className="font-cerotta text-[31px]">MANAJEMEN AKUN</h1>

        <form action="" className="flex gap-2">
          <button className="bg-[#BB8360] px-[8px] rounded-[6px] text-[14px] text-white">
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
            <th className="flex-1 font-bold text-[16px] px-[16px] py-[14px] flex justify-between items-center  max-w-[90px]">
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
          <tr className="flex w-full ">
            <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center  max-w-[90px] text-center">
              1
            </td>
            <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[150px]">
              John Doe
            </td>
            <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[200px]">
              john.doe@example.com
            </td>
            <td className="flex-1 py-[10px] ring-1 text-[14px] ring-slate-200 flex justify-center items-center min-w-[150px]">
              *******
            </td>
            <td className="flex-1 py-[10px] ring-1 text-[14px]  ring-slate-200 flex justify-center items-center gap-3 min-w-[100px]">
              <Link
                to={"/admin/editakun"}
                className="bg-[#BB8360] px-4 text-white py-2  rounded"
              >
                Edit
              </Link>
              <button className="ring-1 ring-red-500 px-4 text-red-500 py-2  rounded">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
