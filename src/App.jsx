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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Getter from "./component/Getter"
import DetailSrvice from './component/DetailSrvice';
import Main from './component/Main';

// import ''
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}> </Route>
          <Route path='/detail' element={<DetailSrvice />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
