(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _components_Login_ProtectedRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Login/ProtectedRoute */ "./src/components/Login/ProtectedRoute.js");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Cart/Cart */ "./src/components/Cart/Cart.js");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/student/dev/group-project/client/src/App.js";
//imported react requirements

 //imported external dependicies
//imported client components




function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Login",
    component: _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login_ProtectedRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: "/carts",
    component: _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/AppContext.js":
/*!***************************!*\
  !*** ./src/AppContext.js ***!
  \***************************/
/*! exports provided: AppContextProvider, withContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextProvider", function() { return AppContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/student/dev/group-project/client/src/AppContext.js";


var cartAxios = axios__WEBPACK_IMPORTED_MODULE_8___default.a.create();
cartAxios.interceptors.request.use(function (config) {
  var token = localStorage.getItem("token");
  config.headers.Authorization = "Bearer ".concat(token);
  return config;
});
var AppContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext();
var AppContextProvider =
/*#__PURE__*/
function (_Component) {
  Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AppContextProvider, _Component);

  function AppContextProvider() {
    var _this;

    Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AppContextProvider);

    _this = Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AppContextProvider).call(this));

    _this.signup = function (userInfo) {
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/auth/signup", userInfo).then(function (response) {
        var _response$data = response.data,
            user = _response$data.user,
            token = _response$data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        _this.setState({
          user: user,
          token: token
        });

        _this.getCarts();

        return response;
      });
    };

    _this.login = function (credentials) {
      return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/auth/login", credentials).then(function (response) {
        console.log(response);
        var _response$data2 = response.data,
            token = _response$data2.token,
            user = _response$data2.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        _this.setState({
          user: user,
          token: token
        });

        _this.getCarts();

        return response;
      });
    };

    _this.logout = function () {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      _this.setState({
        carts: [],
        user: {},
        token: ""
      });
    };

    _this.getCart = function () {
      return cartAxios.get("/api/cart").then(function (response) {
        _this.setState({
          carts: response.data
        });

        return response;
      });
    };

    _this.addCart = function (newCart) {
      return cartAxios.post("api/cart/", newCart).then(function (response) {
        _this.setState(function (prevState) {
          return {
            carts: Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.carts).concat([response.data])
          };
        });

        return response;
      });
    };

    _this.editCart = function (cartId, cart) {
      return cartAxios.put("/api.cart/".concat(cartId), cart).then(function (response) {
        _this.setState(function (prevState) {
          var updatedCarts = prevState.carts.map(function (cart) {
            return cart._id === response.data._id ? response.data : cart;
          });
          return {
            carts: updatedCarts
          };
        });

        return response;
      });
    };

    _this.deleteCart = function (cartId) {
      return cartAxios.delete("/api/cart/".concat(cartId)).then(function (response) {
        _this.setState(function (prevState) {
          var updatedCarts = prevState.carts.filter(function (cart) {
            return cart._id !== cartId;
          });
          return {
            carts: updatedCarts
          };
        });

        return response;
      });
    };

    _this.state = {
      carts: [],
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || ""
    };
    return _this;
  }

  Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AppContextProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCart();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AppContext.Provider, {
        value: Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          getCart: this.getCart,
          addCart: this.addCart,
          editCart: this.editCart,
          deleteCart: this.deleteCart
        }, this.state),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      });
    }
  }]);

  return AppContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
var withContext = function withContext(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AppContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, function (globalState) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object.assign({}, globalState, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
  };
};

/***/ }),

/***/ "./src/components/Cart/Cart.js":
/*!*************************************!*\
  !*** ./src/components/Cart/Cart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../AppContext */ "./src/AppContext.js");






var _jsxFileName = "/Users/student/dev/group-project/client/src/components/Login/Login.js";



var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _this;

    Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    _this = Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login).call(this));

    _this.handleChange = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    };

    _this.clearInputs = function () {
      _this.setState({
        username: "",
        password: "",
        errorMessage: ""
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();

      _this.props.login(_this.state).then(function () {
        return _this.clearInputs();
      }).catch(function (err) {
        _this.setState({
          errorMessage: err.response.data.message
        });
      });
    };

    _this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
    return _this;
  }

  Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Log In"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        onChange: this.handleChange,
        value: this.state.username,
        name: "username",
        type: "text",
        placeholder: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        onChange: this.handleChange,
        value: this.state.password,
        name: "password",
        type: "password",
        placeholder: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Submit")), this.state.errorMessage && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.state.errorMessage));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_AppContext__WEBPACK_IMPORTED_MODULE_7__["withContext"])(Login));

/***/ }),

/***/ "./src/components/Login/ProtectedRoute.js":
/*!************************************************!*\
  !*** ./src/components/Login/ProtectedRoute.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppContext */ "./src/AppContext.js");

var _jsxFileName = "/Users/student/dev/group-project/client/src/components/Login/ProtectedRoute.js";




function ProtectedRoute(props) {
  var Component = props.component,
      rest = Object(_Users_student_dev_group_project_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["component"]);

  return props.token ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    component: Component,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_AppContext__WEBPACK_IMPORTED_MODULE_3__["withContext"])(ProtectedRoute));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppContext */ "./src/AppContext.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/student/dev/group-project/client/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppContext__WEBPACK_IMPORTED_MODULE_3__["AppContextProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}))), document.getElementById("root"));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/student/dev/group-project/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/student/dev/group-project/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map