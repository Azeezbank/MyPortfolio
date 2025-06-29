import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import LandingPage from "./Components/LandingPage.js";
import LoadingAbout from "./Components/LoadingAbout.js";
import Skills from "./Components/Skill.js";
import Awards from "./Components/Awards.js";
import Progress from './Components/Progress.js';
import Testimonial from "./Components/Testimonial.js";
import LetsTalk from "./Components/LetsTalk.js";
import Contact from "./Components/Contact.js";


// root file consist of all components
const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <LandingPage />
                <LoadingAbout />
                <Skills />
                <Awards />
                <Progress />
                <Testimonial />
                <LetsTalk />
              </>
            }
          />
          <Route path="/LoadingAbout" element={<LoadingAbout />} /> 
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
