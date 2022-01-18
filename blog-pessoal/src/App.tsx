import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


let nome = "Larissa";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
      
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
