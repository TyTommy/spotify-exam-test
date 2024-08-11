import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="max-w-[310px] w-full h-full">
      <div>
        <ul className="flex flex-col pl-[30px] pt-[70px]">
          <li className="text-white">
            <Link
              className=" flex items-center gap-[20px]"
              to="/"
            >
              <IoHomeOutline size={32} />
              Home
            </Link>
          </li>
          <li className="text-white pt-[20px]">
            <Link
              className="flex items-center gap-[20px]"
              to="#"
            >
              <CiSearch size={32} />
              Search
            </Link>
          </li>
          <li className="text-white pt-[20px]">
            <Link
              className="flex items-center gap-[20px]"
              to="#"
            >
              <BiLibrary size={32} />
              Library
            </Link>
          </li>
          <li className="text-white pt-[50px]">
            <Link
              className="flex items-center gap-[20px]"
              to="#"
            >
              <MdOutlineLibraryAdd size={32} />
              Create Playlist
            </Link>
          </li>
          <li className="text-white pt-[20px]">
            <Link
              className="flex items-center gap-[20px]"
              to="#"
            >
              <FaRegHeart size={32} />
              Liked Song
            </Link>
          </li>
        </ul>
        <div className="w-[250px] h-[1px] bg-gray-600 mr-[30px] ml-[30px] mt-[20px]"></div>
      </div>
      <ul className="flex flex-col pl-[30px] pt-[20px] text-[#B3B3B3] text-lg">
        <li>
          <Link to="#">Chill Mix</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Insta Hits</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Your Top Songs 2021</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Mellow Songs</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Anime Lofi & Chillhop Music</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">BG Afro “Select” Vibes</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Happy Hits!</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Deep Focus</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Instrumental Study</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">OST Compilations</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Nostalgia for old souled mill...</Link>
        </li>
        <li className="mt-[18px]">
          <Link to="#">Mixed Feelings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
