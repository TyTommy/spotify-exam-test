import { useEffect } from "react";
import SidebarRight from "./components/sidebarRight/SidebarRight";
import MainBody from "./components/mainBody/MainBody";
import Sidebar from "./components/sidebar/Sidebar";
import "./index.css";
import { getToken } from "./api";
import AudioPlayer from "./components/AudioPlayer";
import { useSelector } from "react-redux";

function App() {
  const currentMusicUrl = useSelector((state) => state.currentMusicUrl);

  useEffect(() => {
    getToken();
  }, []);

  console.log({ currentMusicUrl });

  return (
    <div className="pb-[104px] bg-[#04040A]">
      <div className="w-full flex justify-between">
        <Sidebar />
        <MainBody />
        <SidebarRight />
      </div>
      <AudioPlayer
        className="fixed bottom-0 left-0 right-0"
        src={currentMusicUrl}
        title="Play It Safe"
        artist="Julia Wolf"
      />
    </div>
  );
}

export default App;
