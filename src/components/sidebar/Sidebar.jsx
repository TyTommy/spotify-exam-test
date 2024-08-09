import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="max-w-[310px] w-full bg-black h-screen">
      <div>
        <ul className="flex flex-col pl-[30px] pt-[70px]">
          <li className="text-white">
            <a className=" flex items-center gap-[20px]" href="/">
              <IoHomeOutline size={32} />
              Home
            </a>
          </li>
          <li className="text-white pt-[20px]">
            <a className="flex items-center gap-[20px]" href="#">
            <CiSearch size={32} />
              Search
            </a>
          </li>
          <li className="text-white pt-[20px]">
            <a className="flex items-center gap-[20px]" href="#">
            <BiLibrary size={32} />
              Library
            </a>
          </li>
          <li className="text-white pt-[50px]">
            <a className="flex items-center gap-[20px]" href="#">
            <MdOutlineLibraryAdd size={32} />
              Create Playlist
            </a>
          </li>
          <li className="text-white pt-[20px]">
            <a className="flex items-center gap-[20px]" href="#">
            <FaRegHeart size={32} />
              Liked Song
            </a>
          </li>
        </ul>
        <div className="w-[250px] h-[1px] bg-gray-600 mr-[30px] ml-[30px] mt-[20px]"></div>
      </div>
      <ul className="flex flex-col pl-[30px] pt-[20px] text-[#B3B3B3] text-lg">
        <li><a href="#">Chill Mix</a></li>
        <li className="mt-[18px]"><a href="#">Insta Hits</a></li>
        <li className="mt-[18px]"><a href="#">Your Top Songs 2021</a></li>
        <li className="mt-[18px]"><a href="#">Mellow Songs</a></li>
        <li className="mt-[18px]"><a href="#">Anime Lofi & Chillhop Music</a></li>
        <li className="mt-[18px]"><a href="#">BG Afro “Select” Vibes</a></li>
        <li className="mt-[18px]"><a href="#">Happy Hits!</a></li>
        <li className="mt-[18px]"><a href="#">Deep Focus</a></li>
        <li className="mt-[18px]"><a href="#">Instrumental Study</a></li>
        <li className="mt-[18px]"><a href="#">OST Compilations</a></li>
        <li className="mt-[18px]"><a href="#">Nostalgia for old souled mill...</a></li>
        <li className="mt-[18px]"><a href="#">Mixed Feelings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
