import InputForm from "./components/InputForm/InputForm";
//import { Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import SecondPage from "./components/SecondPage/SecondPage";
import Sidebar from "./components/MFP/SideBar/Sidebar";
import Trial5 from "./components/MFP/SideBar/trial/Trial5";
import RegisterProduct from "./components/MFP/SideBar/MFP_Components/RegisterProduct/RegisterProduct";
import FindSimilarCustomers from "./components/MFP/SideBar/MFP_Components/RegisterProduct/FindSimilarCustomers/FindSimilarCustomers";
import Login from "./components/Authentication/Login/Login.jsx";
import dummyImage from '../src/assets/icons/dummyImage.png'
import Signup from "./components/Authentication/Signup/Signup.jsx";
//import InputForm from "./components/InputForm/InputForm";

function App() {

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          setUsername(resObject.user.firstName);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/login18' element={<Login />}></Route>
          <Route exact path='/Signup' element={<Signup />}></Route>
          <Route exact path='/login1' element={user ? <Navigate to="/" /> : <Login />}></Route>
          <Route exact path='/sp' element={<SecondPage />} />
          <Route exact path='/mp' element={<Sidebar />} />
          <Route exact path='/dashboard' element={<Trial5 />} />
          <Route exact path='/reg_product' element={<RegisterProduct />} />
          <Route exact path='/find_sim_cust' element={<FindSimilarCustomers />} />
        </Routes>

      </Router>
      {user && (
        <div className="profile-info">
          <img src={dummyImage} alt="Profile" className="profile-pic" />
          <p className="username">Hello, {username}</p>
        </div>)}
    </>


  );
}

export default App;
