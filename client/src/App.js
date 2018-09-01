import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'

import AppNavbar from './components/template/AppNavBar';
import ShoppingList from './components/ShoppingList';
import store from './store';
import ItemModal from './components/itemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
          
        </div>
      </Provider>
    );
  }
}

export default App;
