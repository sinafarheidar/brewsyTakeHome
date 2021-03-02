import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';

import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <Container maxWidth="xl">
    <Router>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/cart' component={Cart}/> 
    </Router>
    </Container>
  );
}

export default App;
