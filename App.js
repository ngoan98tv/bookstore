import React, { useState, createContext } from 'react';
import { NativeRouter, Route, Switch } from "react-router-native";
import HomePage from './src/HomePage';
import ShoppingCart from './src/ShoppingCart';
import BookDetail from './src/BookDetailPage';
import CustomerForm from './src/CustomerForm';
import CompletePage from './src/CompletePage';

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
          <Route path="/customer" component={CustomerForm} />
          <Route path="/complete" component={CompletePage} />
        </Switch>
      </NativeRouter>
    </AppContext.Provider>
  );
};

export default App;
