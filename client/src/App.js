//imported react requirements
import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";

//imported client components
import Login from './components/Auth/Login';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import CartList from "./components/Cart/CartList"
import Navbar from './components/Navbar/Navbar';
import AdminList from './components/Admin/AdminList'



export default function App() {
  return (
    <div>
      <Navbar />
      <Switch> 
        <Route path ="/login" component={Login} />
        <ProtectedRoute path ="/carts" component={CartList}/>
        <Route exact path ="/" render={() => <Redirect to="/carts" />} />
        <Route path ="/admin" component={AdminList}/>
      </Switch>
    </div>
  )
}