import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Objective from "./components/Objective";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Objective />} >
        </Route>
      </Routes>

      <Routes>
        <Route path="/education" element={<Education />} >
        </Route>
      </Routes>

      <Routes>
        <Route path="/skills" element={<Skills />} >
        </Route>
      </Routes>

      <Routes>
        <Route path="/certificate" element={<Certificates />} >
        </Route>
      </Routes>

      <Routes>
        <Route path="/contact" element={<Contact />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;