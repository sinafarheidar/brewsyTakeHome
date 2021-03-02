import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';

import Nav from './components/Nav'
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <Container maxWidth="xl">
    <Nav />
    <Router>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/cart' component={Cart}/> 
    </Router>
    </Container>
  );
}

export default App;
