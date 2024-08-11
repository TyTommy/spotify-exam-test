import { useEffect, useState } from "react";
import { fetchPlaylist } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMusicUrl } from "../../redux/action/playerActions";
import { useParams } from "react-router-dom";
import {
  FaPlay,
  FaHeart,
  FaDownload,
  FaEllipsisH,
  FaPause,
} from "react-icons/fa";
import moment from "moment";
import LoadingSpinner from "../../components/LoadingSpinner";

const PlaylistPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentMusicUrl = useSelector((state) => state.currentMusicUrl);
  const [playlist, setPlaylist] = useState();

  const fetchTracks = async (tracksUrl) => {
    const playlist = await fetchPlaylist(tracksUrl);

    setPlaylist(playlist);
  };

  useEffect(() => {
    fetchTracks(id);
  }, [id]);

  const handleTrackSelect = (url) => {
    dispatch(setCurrentMusicUrl(url));
  };

  if (!playlist) return <LoadingSpinner />;

  return (
    <div className="text-white bg-[#121212]">
      <div className="bg-gradient-to-t from-[#121212] to-[#DDF628] p-8">
        <div className="flex items-center space-x-6">
          <img
            className="w-96 h-96 rounded shadow-lg"
            src={playlist?.images?.[0]?.url} // replace with actual image url
            alt="Chill Mix"
          />
          <div>
            <p className="text-sm font-semibold uppercase">Public Playlist</p>
            <h1 className="text-6xl font-bold">{playlist?.name}</h1>
            <p className="text-sm mt-2">Julia Wolf, ayokay, Khalid and more</p>
            <p className="text-sm mt-1">{playlist?.description}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center space-x-6 mb-6">
          <button className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
            <FaPlay className="w-10 h-10" />
          </button>
          <button className="text-green-500">
            <FaHeart className="w-8 h-8" />
          </button>
          <button className="text-green-500">
            <FaDownload className="w-8 h-8" />
          </button>
          <button className="text-green-500">
            <FaEllipsisH className="w-8 h-8" />
          </button>
        </div>
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Album</th>
              <th className="py-2 px-4">Release Date</th>
              <th className="py-2 px-4 text-right">Duration</th>
            </tr>
          </thead>
          <tbody>
            {playlist?.tracks?.items
              .filter((item) => !!item.track.preview_url)
              .map(
                (
                  {
                    track: {
                      id,
                      name,
                      album,
                      artists,
                      duration_ms,
                      preview_url,
                    },
                  },
                  index
                ) => (
                  <tr
                    key={id}
                    className="hover:bg-gray-800 cursor-pointer"
                    onClick={() => handleTrackSelect(preview_url)}
                  >
                    <td className="py-2 px-4">
                      {currentMusicUrl !== preview_url ? (
                        index + 1
                      ) : (
                        <FaPause className="text-green-400" />
                      )}
                    </td>
                    <td className="py-2 px-4 flex items-center space-x-4">
                      <img
                        className="w-10 h-10"
                        src={
                          (
                            album.images.find((i) => i.width === 64) ||
                            album.images[0]
                          )?.url
                        } // replace with actual image url
                        alt="Album Cover"
                      />
                      <div className="flex flex-col w-full">
                        <span
                          className={
                            "text-ellipsis whitespace-nowrap overflow-hidden w-full " +
                            (currentMusicUrl === preview_url
                              ? "text-green-400"
                              : "")
                          }
                        >
                          {name}
                        </span>
                        <span className="text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden w-full">
                          {artists.map((i) => i.name).join(", ")}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden">
                      {album.name}
                    </td>
                    <td className="py-2 px-4">
                      {moment(album.release_date).format("ll")}
                    </td>
                    <td className="py-2 px-4 text-right">
                      {moment.utc(duration_ms).format("mm:ss")}
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistPage;
