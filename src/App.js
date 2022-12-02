import './App.css';
import Home from './components/home/Home';
import Navbar from './components/Navbar2/navbar2';
import Footer from './components/footer/Footer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Empresa from './components/empresa/Empresa';
import Trabajos from './components/trabajos/Trabajo';
import Contacto from './components/contacto/Contacto';
import Legales from './components/legales/Legales';
/* import SimpleMap from './components/trabajos/Empresa2' */

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/empresa' element={<Empresa/>}></Route>
          <Route path='/trabajos' element={<Trabajos/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='/avisos-legales' element={<Legales/>}></Route>
          <Route path='/test'></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
