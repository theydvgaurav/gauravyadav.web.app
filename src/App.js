
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
       <Router>
      <Navbar/>
      <Switch>           
         <Route path='/Home' component={Home} />
         <Route path='/About' component={About} />
         <Route path='/Projects' component={Projects} />
         <Route path='/Blog' component={Blog} />
         <Route path='/Contact' component={Contact} />
         <Route  component={Home} />
       </Switch>
      </Router>

    </div>
  );
}

export default App;
