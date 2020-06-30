import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from'./Components/NavBar/Navbar'
import Cart from './Components/Cart'
import ProductList from './Components/Product/ProductList'
import Default from './Components/Default'
import Details from './Components/Details'
import Modal from './Components/Modal/Modal'


function App() {
  return (
       
    <React.Fragment>
      <Navbar />
      <Switch>
          <Route exact path ="/" component={ProductList}/>
          <Route path ="/cart" component={Cart}/>
          <Route path ="/details" component={Details}/>
          <Route path ="/default" component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
