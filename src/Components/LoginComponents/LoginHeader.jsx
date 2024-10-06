import React from "react";

// import classname from "classnames";

const HeaderLogin = ({
  title,
  body,
  content,
  image,
  onClick,
  classname,
  classnameimg,
}) => {
  const addClassname = classname ? classname : "";
  const addClassnameimg = classnameimg ? classnameimg : "";
  return (
    <div
      className={`relative w-full bg-[#BB8360] px-6 py-8 text-center rounded-b-[74px] md:w-1/2 ${addClassname} overflow-hidden `}
    >
      <img
        src={image}
        alt="img"
        className={`absolute z-0  h-3/4 
        ${addClassnameimg} `}
      />
      <div className="relative md:mt-28">
        <h1 className="text-[25px] font-black text-white mx-auto mb-3 md:text-[40px] xl:text-[50px]">
          {title}
        </h1>

        <h3 className="text-white mb-3 md:text-[20px] font-normal">{body}</h3>
        <button
          className="px-6 py-1 border border-white rounded-lg text-white font-medium text-[18px] mb-8 md:py-3 md:px-6 hover:bg-white hover:text-[#BB8360] active:bg-white active:text-[#BB8360] md:mt-5"
          onClick={onClick}
        >
          {content}
        </button>
      </div>
    </div>
  );
};

export default HeaderLogin;
