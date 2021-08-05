import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { Navbar } from './components/index';
import './App.scss';

const Aboutme = lazy(() => import('./pages/Aboutme/Aboutme'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Cv = lazy(() => import('./pages/Cv/Cv'))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'))


function App() {





  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <Suspense fallback={<div>Cargando...</div>} >
          <Switch>
            <Route exact path="/about" component={(props) => <Aboutme {...props} />} />
            <Route exact path="/contact" component={(props) => <Contact {...props} />} />
            <Route exact path="/cv" component={(props) => <Cv {...props} />} />
            <Route exact path="/portfolio" component={(props) => <Portfolio {...props} />} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
