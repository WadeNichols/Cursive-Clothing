//imported react requirements
import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";

//imported client components
import Login from './components/Auth/Login';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import CartList from "./components/Cart/CartList"

//my components 
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import MensClothing from './MensClothing';
import WomensClothing from './WomensClothing';
import SwitchPage from './SwitchPage'


export default function App() {
  return (
    <div>
      <Navbar />
      <SwitchPage />
    </div>
  )
}