import React, { Component } from 'react'

//material ui components
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton, Typography } from "@material-ui/core";
import {withContext} from "../../AppContext"


const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};


class Navbar extends Component (props) {
    constructor(){
        super();
        state = {
            top: true
        }
    }
    render(){
        return(
            <div>
                <button />
            </div>
        )
    }
}

export default withContext(Navbar)