import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';


//imported client components
import Login from './components/Auth/Login';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import CartList from "./components/Cart/CartList"
import AdminList from './components/Admin/AdminList'


//my components 
import MensClothing from './MensClothing';
import WomensClothing from './WomensClothing';
import Home from './Home';


function SwitchPage() {
    return (
        <Switch>  
        <Route path ="/login" component={Login} />
        <Route path ="/home" component={Home} /> 
        <Route path ="/men" component={MensClothing} />
        <Route path ="/woman" component={WomensClothing} />
        <ProtectedRoute path ="/carts" component={CartList}/>
        <Route exact path ="/" render={() => <Redirect to="/carts" />} />
        <Route path ="/admin" component={AdminList}/>
        </Switch>
    )
}

export default SwitchPage;