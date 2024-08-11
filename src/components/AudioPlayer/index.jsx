import { useState, useRef, useEffect } from "react";
import {
  FaRegHeart,
  FaShuffle,
  FaRepeat,
  FaCirclePlay,
  FaCirclePause,
  FaVolumeHigh,
} from "react-icons/fa6";

const AudioPlayer = ({ src, title, artist, className }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    if (src) {
      setCurrentTime(0);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [src]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      className={
        "flex items-center justify-between bg-[#181818] p-4 rounded-lg w-full " +
        className
      }
    >
      <div className="flex items-center gap-12">
        <div className="text-white flex flex-col">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-xs">{artist}</p>
        </div>
        <button className="text-white text-xl">
          <FaRegHeart />
        </button>
      </div>
      <div className="flex flex-col items-center w-full mx-4 max-w-2xl">
        <div className="flex items-center justify-center mb-2 gap-16">
          <button className="text-white text-2xl">
            <FaShuffle />
          </button>
          <button
            onClick={togglePlayPause}
            className="text-white text-5xl"
          >
            {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
          </button>
          <button className="text-white text-2xl">
            <FaRepeat />
          </button>
        </div>
        <div className="flex items-center space-x-2 w-full">
          <span className="text-white text-xs">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-600 rounded-full appearance-none"
            style={{
              background: `linear-gradient(to right, white ${
                (currentTime / duration) * 100 || 0
              }%, #4a5568 0%)`,
            }}
          />
          <span className="text-white text-xs">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <FaVolumeHigh className="text-white text-2xl" />
          <input
            type="range"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="h-1 w-20 bg-gray-600 rounded-full appearance-none"
            style={{
              background: `linear-gradient(to right, white ${
                volume * 100
              }%, #4a5568 0%)`,
            }}
          />
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default AudioPlayer;
