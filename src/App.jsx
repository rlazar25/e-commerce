import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import axios from "axios";
import FooterComponent from "./components/FooterComponent";

function App() {

  axios.defaults.baseURL = 'https://dummyjson.com'

  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App;
