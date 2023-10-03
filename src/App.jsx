import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Bnner from './component/Bnner';
import Nav from './component/Nav';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import Service from './component/Service';
// import { Link } from 'react-scroll';
import { Route, Routes } from 'react-router-dom';
import Getter from "./component/Getter"

// import ''
function App() {
  return (
    <>
      <div class="bg-blue-900 overflow-y-scroll bg-no- bg-cover text-white h-screen bg-[url('./bg-images/blured-2.jpg')]">
        <div>
          {/* <Header /> */}

          <div>
            {/* <Getter/> */}
          </div>
          <div id='l'>

            <Bnner />
            </div>
          <Nav />
          <About />
          <Service />
          <Work />
          <Contact />
          {/* <div class='h-400'></div> */}
        </div>
      </div>
      {/* <Routes>
          <Route path="/" element={<Bnner/>} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
       </Routes> */}
    </>
  )
}

export default App;
