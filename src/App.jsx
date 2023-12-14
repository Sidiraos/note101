import NavBar from "./components/UI/NavBar";
import ToolBar from "./components/UI/ToolBar";
import Menu from "./components/UI/Menu";

function App() {
  return (
  <div className="h-screen bg-slate-800 flex">
    <ToolBar />
    <NavBar />
    <Menu />
  </div>

  )
}

export default App
