import SidebarRight from "./components/sidebarRight/SidebarRight";
import MainBody from "./components/mainBody/MainBody";
import Sidebar from "./components/sidebar/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div className="w-full  flex justify-between">
        <div>
          <Sidebar />
        </div>
        <MainBody />
        <SidebarRight />
      </div>
    </>
  );
}

export default App;
