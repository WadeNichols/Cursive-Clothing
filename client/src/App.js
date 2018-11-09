//imported react requirements
import React from 'react';
import { Switch, Route } from "react-router-dom";
//imported external dependicies

//imported client components
import Login from './components/Login/Login';
import ProtectedRoute from "./components/Login/ProtectedRoute";
import Cart from "./components/Cart/Cart"

export default function App() {
  return (
    <div>
      
    <Switch> 
      <Route path ="/Login" component={Login} />
      <ProtectedRoute path ="/carts" component={Cart} />
    </Switch>
      
    </div>
  )
}