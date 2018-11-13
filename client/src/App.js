//imported react requirements
import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";

//imported client components
import Login from './components/Auth/Login';
import ProtectedRoute from "./components/Auth/ProtectedRoute";

import CartList from "./components/Cart/CartList"
import Navbar from './Navbar';




export default function App() {
  return (
    <div>
    <Switch> 
      <Route path ="/login" component={Login} />
      <ProtectedRoute path ="/carts" component={CartList}/>
      <Route exact path ="/" render={() => <Redirect to="/carts" />} />
    </Switch>
    </div>
  )
}