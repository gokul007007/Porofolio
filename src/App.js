import Navigator from "./components/Navigator";
import About from "./pages/About";
import Contact from "./pages/ContactMe";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";


function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className="App">
      <Router>
      <Navigator mode={setMode}  />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={ <About /> }></Route>
          <Route path="/contact" element={ <Contact /> }></Route>
          <Route path="/skills" element={ <Skills /> }></Route>
          <Route path="/work" element={ <Work /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

