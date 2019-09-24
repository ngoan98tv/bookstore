import React from 'react';
import { NativeRouter, Route, Switch } from "react-router-native";
import HomePage from './src/HomePage';
import ShoppingCart from './src/ShoppingCart';
import BookDetail from './src/BookDetail';

const App = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/book/:id" component={BookDetail} />
      </Switch>
    </NativeRouter>
  );
};

export default App;
