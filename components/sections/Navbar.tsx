import React from "react";
import Menu from "../shared/Menu";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      {/* Main div for large screen */}

      <div className="flex h-20 lg:bg-yellow-200 md:bg-red-300 sm:bg-green-300 bg-black text-blue-600 px-20 max-[1440px] items-center justify-between">
        <Image src={"/Logo.webp"} alt="logo" width={150} height={150} />
        <div>
          <Menu />
        </div>
        <div className="hidden lg:flex gap-1 border border-black bg-white px-2 rounded-lg">
          <SearchIcon size={20} />
          <input type="text" placeholder="What you looking for" />
        </div>
        <div className=" h-12 w-12 flex justify-center items-center bg-gray-300 rounded-full relative hover:scale-105 duration-300 ease-in">
          <ShoppingCartIcon />
          <span className="w-6 flex justify-center items-center h-6 rounded-full bg-red-500 text-white absolute bottom-7 left-8">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
