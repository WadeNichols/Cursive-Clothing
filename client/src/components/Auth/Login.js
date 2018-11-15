import React, { Component } from "react";
import { withContext } from "../../AppContext.js";
//material ui components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//other imports

class Login extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      username: "",
      password: "",
      errMessage: ""
    };
  }

  handleCloseLogin = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "username" ? target.username : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
      errorMessage: ""
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state)

      .then(() => this.props.history.push("/Navbar"))
      .then(() => this.clearInputs())
      .then(() => this.handleCloseLogin())
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  handleSignup = e => {
    e.preventDefault();
    this.props
      .signup(this.state)
      .then(() => this.props.history.push("/carts"))
      .then(() => this.clearInputs())
      .then(() => this.handleCloseLogin())
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Welcome to C.C.C</DialogTitle>
          <DialogContent>
            <DialogContentText>Please login or signup</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="username"
              label="username"
              type="username"
              onChange={this.handleChange}
              value={this.state.username}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              name="password"
              label="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSignup} color="primary">
              Sing-Up
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withContext(Login);
