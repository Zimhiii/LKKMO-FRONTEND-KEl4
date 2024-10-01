import React from "react";

const ButtonLogin = ({ img, children }) => {
  return (
    <div>
      <button className="border border-[#BB8360] w-full rounded-lg px-6 py-2 flex justify-center items-center gap-2 mb-4">
        <div>
          <img src={img} alt={children} />
        </div>
        Daftar dengan {children}
      </button>
    </div>
  );
};

export default ButtonLogin;
