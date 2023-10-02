import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import Nosotros from './components/Nosotros';
import Registrarse from './components/Registrarse';// Importa el componente de la barra de navegación
import Home from './components/Home'; // Importa el componente de la página "Sobre Nosotros"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesion from './components/IniciarSesion';


function App() {

  

  return (
    <Router>
    <div className='back'>
      
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path="/nosotros" element={<Nosotros/>} />
    <Route path="/registrarse" element={<Registrarse/>}/>
    <Route path="/iniciarsesion" element={<IniciarSesion/>}/>
    </Routes>
        
    
      


      

      

    </div>
    {/* esta seccion es para el pie de pagina */}

    <footer className="bg-dark text-white py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5>Contacto</h5>
        <p>Dirección: Calle de las Tacos, Ciudad: CDMX, País: México</p>
        <p>Teléfono: +123 456 789</p>
        <p>Email: info@taqueriataconmadre.com</p>
      </div>
      <div className="col-md-6">
        <h5>Gracias por tu visita</h5>
        <ul className="list-unstyled">
        </ul>
      </div>
    </div>
  </div>
</footer>
    </Router>
    
  );
}

export default App;