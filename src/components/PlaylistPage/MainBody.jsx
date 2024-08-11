import { useEffect, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { fetchCategory, fetchCategory, CATEGORIES } from "../../api";
import { useDispatch } from "react-redux";
import { setCurrentMusicUrl } from "../../redux/action/playerActions";

const MainBody = () => {
  const dispatch = useDispatch();
  const [allCategories, setAllCategories] = useState([]);
  const queryPlaylists = async () => {
    const playlists = await Promise.all([
      fetchCategory(CATEGORIES.TOP_MIXES),
      fetchCategory(CATEGORIES.MADE_FOR_YOU),
      fetchCategory(CATEGORIES.RECENT_PLAYED),
      fetchCategory(CATEGORIES.JUMP_BACK_IN),
      fetchCategory(CATEGORIES.UNIQUELY_YOURS),
    ]);

    console.log({ playlists });
    setAllCategories(playlists);
  };

  const fetchTracks = async (tracksUrl) => {
    const tracks = await fetchCategory(tracksUrl);

    console.log({ tracks });

    dispatch(
      setCurrentMusicUrl(
        tracks?.items.find((item) => !!item.track.preview_url)?.track
          .preview_url
      )
    );
  };

  useEffect(() => {
    queryPlaylists();

    fetchCategory("https://api.spotify.com/v1/tracks/67smGwuPEtA6GAfeweAVNO");
  }, []);

  return (
    <div className="bg-[#121212] w-full pb-40">
      <div className="w-full h-[80px] bg-header-gradient flex gap-4 pl-[40px]">
        <button>
          <IoIosArrowDropleft
            size={40}
            color="white"
          />
        </button>
        <button>
          <IoIosArrowDropright
            size={40}
            color="white"
          />
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
      {allCategories.map(({ message, playlists }, index) => (
        <div
          key={index}
          className="mt-[30px]"
        >
          <div className="flex justify-between mb-[25px] mx-[40px]">
            <h2 className="text-white text-[30px] font-bold">{message}</h2>
            <button className="text-[#ADADAD] text-[18px] font-[600] uppercase leading-5">
              See all
            </button>
          </div>
          <div className="flex justify-between mx-[40px]">
            {playlists?.items.map(
              ({ id, name, description, images, tracks }) => (
                <div
                  key={id}
                  className="flex flex-col gap-4 items-center pt-[20px] w-[254px] bg-[#1B1B1B] rounded-[6px]"
                >
                  <div>
                    <img
                      className="rounded-[6px] px-5"
                      src={images[0].url}
                      alt="#"
                    />
                  </div>
                  <div className="text-white ml-[20px] max-w-[182px]">
                    <button
                      className="text-[20px] font-bold leading-7 text-left"
                      onClick={() => fetchTracks(tracks.href)}
                    >
                      {name}
                    </button>
                    <p className="text-[#B3B3B3] text-[18px] font-[450] leading-6 pt-[8px]">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBody;
