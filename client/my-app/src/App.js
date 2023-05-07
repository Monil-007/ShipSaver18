import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import InputForm from "./components/InputForm/InputForm";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
//import { Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import LandingPage from "./components/LandingPage/LandingPage";
import SecondPage from "./components/SecondPage/SecondPage";


//import InputForm from "./components/InputForm/InputForm";

function App() {

  return (

    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/sp' element={<SecondPage />} />
          </Routes>

        </Router>

      </>
    </ThemeProvider>

  );
}

export default App;
