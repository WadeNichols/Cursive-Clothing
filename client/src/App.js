//imported react requirements
import React from 'react';
import { Switch, Route } from "react-router-dom";

//imported client components
import Login from './components/Login/Login';
import ProtectedRoute from "./components/Login/ProtectedRoute";
import Cart from "./components/Cart/Cart"
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div>
    <Switch> 
      <Route path ="/" component={Login} />
      <ProtectedRoute path ="/" component={Navbar}/>
      <ProtectedRoute path ="/carts" component={Cart} />
    </Switch>
      
    </div>
  )
}