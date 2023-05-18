

import InputForm from "./components/InputForm/InputForm";


//import { Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import SecondPage from "./components/SecondPage/SecondPage";
import Sidebar from "./components/MFP/SideBar/Sidebar";
import Trial5 from "./components/MFP/SideBar/trial/Trial5";
import RegisterProduct from "./components/MFP/SideBar/MFP_Components/RegisterProduct/RegisterProduct";
import FindSimilarCustomers from "./components/MFP/SideBar/MFP_Components/RegisterProduct/FindSimilarCustomers/FindSimilarCustomers";

//import InputForm from "./components/InputForm/InputForm";

function App() {

  return (


    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/sp' element={<SecondPage />} />
          <Route exact path='/mp' element={<Sidebar />} />
          <Route exact path='/dashboard' element={<Trial5 />} />
          <Route exact path='/reg_product' element={<RegisterProduct />} />
          <Route exact path='/find_sim_cust' element={<FindSimilarCustomers />} />
        </Routes>

      </Router>

    </>


  );
}

export default App;
