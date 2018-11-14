import React from "react";
import { Link, Route } from "react-router-dom";
import { withContext } from "../../AppContext";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Login from "../Auth/Login";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ExitIcon from "@material-ui/icons/ExitToAppTwoTone";

function Navbar(props) {
  return (
    <div>
      {!props.token ? (
        <React.Fragment>
          <Route render={Login} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <AppBar>
            <Toolbar>
              <Button component={Link} to="/home">
                Home
              </Button>
              <Button component={Link} to="/men">
                Men's
              </Button>
              <Button component={Link} to="/woman">
                Women's
              </Button>
              <IconButton component={Link} to="/carts">
                <AddShoppingCartIcon />
              </IconButton>
              <ExitIcon onClick={() => props.logout()} aria-label="logout" />
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )}
    </div>
  );
}

export default withContext(Navbar);
