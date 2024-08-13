import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import axios from "axios";

function App() {

  axios.defaults.baseURL = 'https://dummyjson.com'

  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default App;
