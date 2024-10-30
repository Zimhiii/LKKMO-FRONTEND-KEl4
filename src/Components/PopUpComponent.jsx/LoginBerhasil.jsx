import React from "react";

export default function LoginBerhasil({ boolean, setPop }) {
  return (
    boolean && (
      <div
        id="pop"
        className="fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-[#000000] opacity-20 flex justify-center items-center"
        onClick={() => setPop(false)}
      >
        <div className="w-[300px] h-[300px] bg-white flex justify-center items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPop(false);
            }}
            className="text-center font-cerotta ring-1 ring-slate-900 p-4"
          >
            Test
          </button>
        </div>
      </div>
    )
  );
}
