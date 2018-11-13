//imported react requirements
import React from 'react';
import { Switch, Route } from "react-router-dom";

//imported client components
import Login from './components/Auth/Login';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Cart from "./components/Cart/Cart"
import Navbar from './Navbar'



export default function App() {
  return (
    <div>
      <Navbar />
    <Switch> 
      <Route path ="/" component={Login} />
      <ProtectedRoute path ="/carts" component={Cart} />
    </Switch>
    </div>
  )
}