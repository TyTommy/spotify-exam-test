import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarRight from "./components/sidebarRight/SidebarRight";
import MainBody from "./components/mainBody/MainBody";
import Sidebar from "./components/sidebar/Sidebar";
import "./index.css";
import { getToken } from "./api";
import AudioPlayer from "./components/AudioPlayer";
import { useSelector } from "react-redux";
import PlaylistPage from "./pages/PlaylistPage";

function App() {
  const currentMusicUrl = useSelector((state) => state.currentMusicUrl);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Router>
      <div className="bg-[#04040A] min-h-screen">
        <div className="w-full flex justify-between">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<MainBody />}
            />
            <Route
              path="/playlist/:id"
              element={<PlaylistPage />}
            />
          </Routes>
          <SidebarRight />
        </div>
        <AudioPlayer
          className="fixed bottom-0 left-0 right-0"
          src={currentMusicUrl}
          title="Play It Safe"
          artist="Julia Wolf"
        />
      </div>
    </Router>
  );
}

export default App;
