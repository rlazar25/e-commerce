import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {

  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default App;
