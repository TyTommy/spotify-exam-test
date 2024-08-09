import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const MainBody = () => {
  return (
    <div className="bg-[#121212] h-screen w-full">
      <div className="w-full h-[80px] bg-header-gradient flex gap-4 pl-[40px]">
        <button>
          <IoIosArrowDropleft size={40} color="white" />
        </button>
        <button>
          <IoIosArrowDropright size={40} color="white" />
        </button>
      </div>
      <div className="pl-[40px] pt-[30px] bg-custom-gradient mb-[50px]">
        <h1 className="text-white text-[39px] leading-[49px] font-[700]">
          Good Afternoon
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-[30px]">
          <div className="flex gap-4 items-center w-[480px] h-[82px] bg-[#3D3D80] rounded-[6px] text-[20px]">
            <div>
              <img
                className="w-[82px] h-[82px] rounded-[6px]"
                src="https://marketplace.canva.com/EAE25MFy9wQ/1/0/1600w/canva-music-logo-design-S0x32skUQb4.jpg"
                alt=""
              />
            </div>
            <p className="text-white ">Chill Mix</p>
          </div>
          <div className="flex gap-4 items-center w-[480px] h-[82px] bg-[#3D3D80] rounded-[6px] text-[20px]">
            <div>
              <img
                className="w-[82px] h-[82px] rounded-[6px]"
                src="https://marketplace.canva.com/EAE25MFy9wQ/1/0/1600w/canva-music-logo-design-S0x32skUQb4.jpg"
                alt=""
              />
            </div>
            <p className="text-white">Daily Mix 1</p>
          </div>
          <div className="flex gap-4 items-center w-[480px] h-[82px] bg-[#3D3D80] rounded-[6px] text-[20px]">
            <div>
              <img
                className="w-[82px] h-[82px] rounded-[6px]"
                src="https://marketplace.canva.com/EAE25MFy9wQ/1/0/1600w/canva-music-logo-design-S0x32skUQb4.jpg"
                alt=""
              />
            </div>
            <p className="text-white">Folk & Acoustic Mix</p>
          </div>
          <div className="flex gap-4 items-center w-[480px] h-[82px] bg-[#3D3D80] rounded-[6px] text-[20px]">
            <div>
              <img
                className="w-[82px] h-[82px] rounded-[6px]"
                src="https://marketplace.canva.com/EAE25MFy9wQ/1/0/1600w/canva-music-logo-design-S0x32skUQb4.jpg"
                alt=""
              />
            </div>
            <p className="text-white">Pop Mix</p>
          </div>
          <div className="flex gap-4 items-center w-[480px] h-[82px] bg-[#3D3D80] rounded-[6px] text-[20px]">
            <div>
              <img
                className="w-[82px] h-[82px] rounded-[6px]"
                src="https://marketplace.canva.com/EAE25MFy9wQ/1/0/1600w/canva-music-logo-design-S0x32skUQb4.jpg"
                alt=""
              />
            </div>
            <p className="text-white">Daily Mix 5</p>
          </div>
          <div className="flex gap-4 items-center w-[480px] h-[82px] bg-[#3D3D80] rounded-[6px] text-[20px]">
            <div>
              <img
                className="w-[82px] h-[82px] rounded-[6px]"
                src="https://marketplace.canva.com/EAE25MFy9wQ/1/0/1600w/canva-music-logo-design-S0x32skUQb4.jpg"
                alt=""
              />
            </div>
            <p className="text-white">Daily Mix 4</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-[25px] mx-[40px]">
          <h2 className="text-white text-[30px] font-bold">Your top mixes</h2>
          <button className="text-[#ADADAD] text-[18px] font-[600] uppercase leading-5">See all</button>
        </div>
        <div className="flex justify-between mx-[40px]">
          <div className="flex flex-col gap-4 items-center pt-[20px] w-[224px] h-[324px] bg-[#1B1B1B] rounded-[6px]">
            <div>
              <img className="rounded-[6px]" width={182} src="https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg.jpg" alt="#" />
            </div>
            <div className="text-white ml-[20px] max-w-[182px]">
              <h3 className="text-[20px] font-bold leading-7">Chill Mix</h3>
              <p className="text-[#B3B3B3] text-[18px] font-[450] leading-6 pt-[8px]">Julia Wolf, Khalid, ayokay and more</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center pt-[20px] w-[224px] h-[324px] bg-[#1B1B1B] rounded-[6px]">
            <div>
              <img className="rounded-[6px]" width={182} src="https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg.jpg" alt="#" />
            </div>
            <div className="text-white ml-[20px] max-w-[182px]">
              <h3 className="text-[20px] font-bold leading-7">Chill Mix</h3>
              <p className="text-[#B3B3B3] text-[18px] font-[450] leading-6 pt-[8px]">Julia Wolf, Khalid, ayokay and more</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center pt-[20px] w-[224px] h-[324px] bg-[#1B1B1B] rounded-[6px]">
            <div>
              <img className="rounded-[6px]" width={182} src="https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg.jpg" alt="#" />
            </div>
            <div className="text-white ml-[20px] max-w-[182px]">
              <h3 className="text-[20px] font-bold leading-7">Chill Mix</h3>
              <p className="text-[#B3B3B3] text-[18px] font-[450] leading-6 pt-[8px]">Julia Wolf, Khalid, ayokay and more</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center pt-[20px] w-[224px] h-[324px] bg-[#1B1B1B] rounded-[6px]">
            <div>
              <img className="rounded-[6px]" width={182} src="https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg.jpg" alt="#" />
            </div>
            <div className="text-white ml-[20px] max-w-[182px]">
              <h3 className="text-[20px] font-bold leading-7">Chill Mix</h3>
              <p className="text-[#B3B3B3] text-[18px] font-[450] leading-6 pt-[8px]">Julia Wolf, Khalid, ayokay and more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
