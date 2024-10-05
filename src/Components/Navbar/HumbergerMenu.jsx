import React, { useState, useEffect, useRef } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../../Assets/RuSLogoWhite.png";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function HumbergerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const menuRef = useRef(null); // Reference untuk menu
  const navigate = useNavigate();

  const navigateTo = (url) => {
    toggleMenu();
    navigate(url);
  };

  // Toggle Menu
  const toggleMenu = () => {
    setIsCategory(false);
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const toggleNavCategory = () => {
    setIsCategory(!isCategory);
  };

  // Close menu saat klik di luar menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, [isMenuOpen]);

  return (
    <div>
      <button
        className="md:hidden sm:hidden group cursor-pointer"
        onClick={toggleMenu}
      >
        <MdMenu className="relative text-[#736455] text-2xl" type="button" />
      </button>

      {/* Navbar Menu */}
      <div
        ref={menuRef} // Reference untuk mendeteksi klik di luar menu
        className={`h-full fixed z-50 top-0 right-0 bg-[#BB8360] font-montserrat text-[#ffffff] px-[40px] py-[64px] transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-between `}
      >
        <button onClick={toggleMenu} className="absolute top-3 right-7">
          <MdClose className="text-white text-2xl" />
        </button>

        <div className="flex flex-col justify-between items-center">
          <img src={logo} alt="RUS" className="w-[150px]" />
          {/* Button "X" untuk menutup menu */}
          <h1 className="text-[15px] text-[#ffffff] ">
            Your Style Your Choice
          </h1>
        </div>
        <div className="text-[20px] text-[#ffffff] flex flex-col items-center text-center justify-center gap-[60px]">
          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:bg-[#96694d] px-6 py-2"
          >
            Beranda{" "}
          </Link>
          <button className="cursor-pointer  group" onClick={toggleNavCategory}>
            <div className="flex justify-center items-center">
              <p>Kategori </p>
              <div>{isCategory ? <FaCaretUp /> : <FaCaretDown />}</div>
            </div>

            {isCategory && (
              <div className=" flex flex-col">
                <Link
                  to={"category/cosplay"}
                  className="hover:bg-[#96694d] px-6 py-2"
                  onClick={toggleMenu}
                >
                  Cosplay
                </Link>
                <Link
                  to={"category/carnaval"}
                  className="hover:bg-[#96694d] px-6 py-2"
                  onClick={toggleMenu}
                >
                  Carnaval
                </Link>
                <Link
                  to={"category/game"}
                  className="hover:bg-[#96694d] px-6 py-2"
                  onClick={toggleMenu}
                >
                  Game
                </Link>
              </div>
            )}
          </button>
          <Link
            to="/aboutme"
            onClick={toggleMenu}
            className="hover:bg-[#96694d] px-6 py-2"
          >
            Tentang Kami{" "}
          </Link>
        </div>
        <div className="font-montserrat flex flex-col  items-center">
          <Link
            to={"/login"}
            className="text-[25px] text-[#BB8360] bg-[#ffffff] rounded-[10px] px-[70px] py-[10px] text-center hover:bg-[#96694d] hover:text-white"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="text-[25px] italic font-light text-[#ffffff] rounded-[10px] px-[60px] py-[10px] text-center hover:bg-[#96694d] hover:text-white"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
