
import Home from './paginas/home/Home';

import Navbar from './components/estaticos/navbar/Navbar';


import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';



import Login from './paginas/Login/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';




function App() {
  return (
    <>



          <Navbar />
          <Home/>



    </>


  );
}

export default App;

