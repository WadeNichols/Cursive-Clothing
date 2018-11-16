//imported react requirements
import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";

//imported client components
import Login from './components/Auth/Login';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import CartList from "./components/Cart/CartList"

//my components 
import Navbar from './components/Navbar/Navbar';
import AdminList from './components/Admin/AdminList'
import Home from './Home';
import MensClothing from './MensClothing';
import WomensClothing from './WomensClothing';


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
      <Home />
      <MensClothing />
      <WomensClothing />
    </div>
  )
}