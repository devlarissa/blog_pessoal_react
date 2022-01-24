import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import './App.css';


let nome = "Larissa";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <div style={{ minHeight: '100vh' }}>

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cadastrousuario">
              <CadastroUsuario />
            </Route>

            <Route path="/temas">
              <ListaTema />
            </Route>

            <Route path="/posts">
              <ListaPostagem />
            </Route>

          </div>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
