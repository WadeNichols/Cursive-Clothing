import React from "react";
import { Link, Route } from "react-router-dom";
import { withContext } from "../../AppContext";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Login from "../Auth/Login";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Navbar(props) {
  return (
    
      <div>{!props.token ? (
        <React.Fragment>
          <Route render={Login} />
        </React.Fragment>
      ) : (
        <React.Fragment>
        <AppBar>
        <Toolbar>
              <Button componet={Link} to="/home">
                Home
              </Button>
              <Button componet={Link} to="/men">
                Men
              </Button>
              <Button componet={Link} to="/woman">
                Women
              </Button>
              <IconButton componet={Link} to="/cart">
                  <AddShoppingCartIcon/>
              </IconButton>
              <Button onClick={() => props.logout()}>Logout</Button>
              </Toolbar>
          </AppBar>
        </React.Fragment>
      )}
      </div>
     
  );
}

export default withContext(Navbar);
