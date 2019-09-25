import React, { useState, createContext } from 'react';
import { NativeRouter, Route, Switch } from "react-router-native";
import HomePage from './src/HomePage';
import ShoppingCart from './src/ShoppingCart';
import BookDetail from './src/BookDetailPage';

export const AppContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{cart, setCart}}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          
        </Switch>
      </NativeRouter>
    </AppContext.Provider>
  );
};

export default App;
