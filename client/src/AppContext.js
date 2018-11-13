import React, { Component } from "react";
import axios from "axios";
const cartAxios = axios.create();
cartAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
const AppContext = React.createContext();

export class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      carts: [],
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || ""
    };
  }
  componentDidMount() {
    this.getCarts();
  }
  getCarts = () => {
    return cartAxios.get("/api/cart").then(response => {
      this.setState({ carts: response.data });
      return response;
    });
  };

  addCart = newCart => {
    return cartAxios.post("api/cart/", newCart).then(response => {
      this.setState(prevState => {
        return { carts: [...prevState.carts, response.data] };
      });
      return response;
    });
  };

  editCart = (cartId, cart) => {
    return cartAxios.put(`/api.cart/${cartId}`, cart).then(response => {
      this.setState(prevState => {
        const updatedCarts = prevState.carts.map(cart => {
          return cart._id === response.data._id ? response.data : cart;
        });
        return { carts: updatedCarts };
      });
      return response;
    });
  };

  deleteCart = cartId => {
    return cartAxios.delete(`/api/cart/${cartId}`).then(response => {
      this.setState(prevState => {
        const updatedCarts = prevState.carts.filter(cart => {
          return cart._id !== cartId;
        });
        return { carts: updatedCarts };
      });
      return response;
    });
  };
  signup = userInfo => {
    return cartAxios.post("/auth/signup", userInfo).then(response => {
      console.log(response);
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token
      });
      this.getCarts();
      return response;
    });
  };
  login = credentials => {
    return cartAxios.post("/auth/login", credentials).then(response => {
      console.log(response);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({
        user,
        token
      });
      this.getCarts();
      return response;
    });
  };
  addUserProfile = credentials => {
    return cartAxios.post("/profile", credentials).then(response => {
      console.log(response);
    });
  };

  logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({
      carts: [],
      user: {},
      token: ""
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          getCarts: this.getCarts,
          addCart: this.addCart,
          editCart: this.editCart,
          deleteCart: this.deleteCart,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          ...this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const withContext = Component => {
  return props => {
    return (
      <AppContext.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />;
        }}
      </AppContext.Consumer>
    );
  };
};
