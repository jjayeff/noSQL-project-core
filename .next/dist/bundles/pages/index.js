module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reduxModules__ = __webpack_require__("./reduxModules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sagas__ = __webpack_require__("./sagas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_css__ = __webpack_require__("./css/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__css_style_css__);
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











// create the saga middleware
var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_3_redux_saga___default()();
// mount it on the Store
var store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_5__reduxModules__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(sagaMiddleware));

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_6__sagas__["a" /* default */]);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              },
              this.props.title
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://bootswatch.com/4/darkly/bootstrap.min.css', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/jpg', href: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Navbar__["a" /* default */], { type: this.props.type, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }),
          this.props.children
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__texts__ = __webpack_require__("./texts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data__ = __webpack_require__("./data.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\Navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var mapStateToProps = function mapStateToProps(state) {
  return {
    movies: state.movies.movieDb
  };
};

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault(); // หยุดการทำงาน Submit
      var name = e.target.name.value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'hendleClick',
    value: function hendleClick(group) {
      if (group && group.name != 'ข้อมูลหนังทั้งหมด' && group.name != 'เพิ่มหนัง') {
        this.props.sreachGroupMovie(group.name);
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push({
          pathname: group.link,
          query: { group: group.name }
        });
      } else if (group.name === 'ข้อมูลหนังทั้งหมด' || group.name === 'เพิ่มหนัง') {
        this.props.fetchMovie();
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push({
          pathname: group.link
        });
      } else {
        this.props.fetchMovie();
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push({
          pathname: '/'
        });
      }
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent(type) {
      var _this2 = this;

      var groups = [];
      type == 'user' ? groups = __WEBPACK_IMPORTED_MODULE_5__data__["b" /* navbarUser */] : groups = __WEBPACK_IMPORTED_MODULE_5__data__["a" /* navbarAdmin */];
      return groups.map(function (group, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'nav-item', key: i, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'nav-link', style: { cursor: 'pointer' }, onClick: _this2.hendleClick.bind(_this2, group), __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            group.name
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { className: 'navbar navbar-expand-lg fixed-top navbar-light bg-light', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'navbar-brand', style: { cursor: 'pointer' }, onClick: this.hendleClick.bind(this, ''), __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/cinema-film-movie-multimedia-video-camera-36739343a193a1ff-512x512.png', width: '30', height: '30', className: 'mr-1', __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            }),
            '\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E19\u0E31\u0E07'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarColor03', 'aria-controls': 'navbarColor03', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarColor03', __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navbar-nav mr-auto', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              this.renderComponent(this.props.type)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'form',
              { className: 'form-inline my-2 my-lg-0', onSubmit: function onSubmit(e) {
                  return handleSubmit(e);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control mr-sm-2', type: 'text', placeholder: '\u0E04\u0E49\u0E19\u0E2B\u0E32', name: 'name', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { className: 'btn btn-success my-2 my-sm-0', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                '\u0E04\u0E49\u0E19\u0E2B\u0E32'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { fetchMovie: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["v" /* fetchMovie */], sreachGroupMovie: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["w" /* sreachGroupMovie */] })(Navbar));

/***/ }),

/***/ "./components/admin/info/Info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableMovie__ = __webpack_require__("./components/admin/info/TableMovie.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\info\\Info.js';



var Info = function Info(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-lg-12 col-md-12 col-sm-12', __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'bs-component', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card border-secondary mb-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-header', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    props.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-body', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__TableMovie__["a" /* default */], { data: props.data, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'card-footer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                })
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Info);

/***/ }),

/***/ "./components/admin/info/TableMovie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\info\\TableMovie.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TableMovie = function (_React$Component) {
    _inherits(TableMovie, _React$Component);

    function TableMovie() {
        _classCallCheck(this, TableMovie);

        return _possibleConstructorReturn(this, (TableMovie.__proto__ || Object.getPrototypeOf(TableMovie)).apply(this, arguments));
    }

    _createClass(TableMovie, [{
        key: 'handleDelete',
        value: function handleDelete(id, e) {
            e.preventDefault();
            if (confirm('Are you sure ?!')) {
                this.props.data.deleteMovie(id);
            }
        }
    }, {
        key: 'renderComponent',
        value: function renderComponent(datas) {
            var _this2 = this;

            return datas.map(function (data, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    { className: 'table-active', key: data._id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: data.img, style: { width: 'auto', height: '70px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        index + 1
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            data.name
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        data.actors.map(function (x) {
                            return x.name + ' , ';
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'movie-imdb-star', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        }),
                        data.imdb
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: { pathname: '/edit', query: data }, replace: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                { type: 'button', className: 'btn btn-warning', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 25
                                    }
                                },
                                'Edit'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-danger', onClick: _this2.handleDelete.bind(_this2, data._id), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 28
                                }
                            },
                            'Delete'
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-lg-12', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'bs-component', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'table',
                        { className: 'table table-hover', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'thead',
                            { align: 'center', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'tr',
                                { className: 'table-success', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 38
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 39
                                        }
                                    },
                                    'Image'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 40
                                        }
                                    },
                                    'No'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 41
                                        }
                                    },
                                    'Name'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 42
                                        }
                                    },
                                    'Actor'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 43
                                        }
                                    },
                                    'IMDB'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 44
                                        }
                                    },
                                    'Edit'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 45
                                        }
                                    },
                                    'Delete'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'tbody',
                            { align: 'center', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48
                                }
                            },
                            this.renderComponent(this.props.data.movies)
                        )
                    )
                )
            );
        }
    }]);

    return TableMovie;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (TableMovie);

/***/ }),

/***/ "./components/admin/info/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Info__ = __webpack_require__("./components/admin/info/Info.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\info\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var mapStateToProps = function mapStateToProps(state) {
    return {
        movies: state.movies.movieDb
    };
};

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchMovie();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container', style: { paddingTop: '80px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Info__["a" /* default */], { title: this.props.title, data: this.props, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    })
                )
            );
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { fetchMovie: __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__["v" /* fetchMovie */], deleteMovie: __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__["u" /* deleteMovie */] })(Index));

/***/ }),

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_SERVER; });
var API_SERVER = 'http://localhost:3000';

/***/ }),

/***/ "./css/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return navbarUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navbarAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return types; });
/* unused harmony export groups */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return years; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texts__ = __webpack_require__("./texts.js");


var navbarUser = [{
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["r" /* LATEST */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["d" /* ASIAN */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["A" /* US */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["k" /* EPISODE */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["f" /* CARTOON */],
    link: '/'
}, {
    name: __WEBPACK_IMPORTED_MODULE_0__texts__["q" /* IMDB */],
    link: '/'
}];

var navbarAdmin = [{
    name: 'ข้อมูลหนังทั้งหมด',
    link: '/'
}, {
    name: 'เพิ่มหนัง',
    link: '/add'
}];

var types = [__WEBPACK_IMPORTED_MODULE_0__texts__["a" /* ACTION */], __WEBPACK_IMPORTED_MODULE_0__texts__["b" /* ADVENTURE */], __WEBPACK_IMPORTED_MODULE_0__texts__["c" /* ANIMATION */], __WEBPACK_IMPORTED_MODULE_0__texts__["e" /* BIOGRAPHY */], __WEBPACK_IMPORTED_MODULE_0__texts__["g" /* COMEDY */], __WEBPACK_IMPORTED_MODULE_0__texts__["h" /* CRIME */], __WEBPACK_IMPORTED_MODULE_0__texts__["i" /* DOCUMENTARY */], __WEBPACK_IMPORTED_MODULE_0__texts__["j" /* DRAMA */], __WEBPACK_IMPORTED_MODULE_0__texts__["l" /* FAMILY */], __WEBPACK_IMPORTED_MODULE_0__texts__["m" /* FANTASY */], __WEBPACK_IMPORTED_MODULE_0__texts__["n" /* FILM_NOIR */], __WEBPACK_IMPORTED_MODULE_0__texts__["o" /* HISTORY */], __WEBPACK_IMPORTED_MODULE_0__texts__["p" /* HORROR */], __WEBPACK_IMPORTED_MODULE_0__texts__["s" /* MUSICAL */], __WEBPACK_IMPORTED_MODULE_0__texts__["t" /* MYSTERY */], __WEBPACK_IMPORTED_MODULE_0__texts__["v" /* ROMANCE */], __WEBPACK_IMPORTED_MODULE_0__texts__["w" /* SCI_FI */], __WEBPACK_IMPORTED_MODULE_0__texts__["x" /* SPORT */], __WEBPACK_IMPORTED_MODULE_0__texts__["z" /* THRILLER */], __WEBPACK_IMPORTED_MODULE_0__texts__["B" /* WAR */], __WEBPACK_IMPORTED_MODULE_0__texts__["C" /* WESTRN */], __WEBPACK_IMPORTED_MODULE_0__texts__["u" /* NONE_TYPE */]];

var groups = [__WEBPACK_IMPORTED_MODULE_0__texts__["f" /* CARTOON */], __WEBPACK_IMPORTED_MODULE_0__texts__["A" /* US */], __WEBPACK_IMPORTED_MODULE_0__texts__["d" /* ASIAN */], __WEBPACK_IMPORTED_MODULE_0__texts__["k" /* EPISODE */], __WEBPACK_IMPORTED_MODULE_0__texts__["r" /* LATEST */], __WEBPACK_IMPORTED_MODULE_0__texts__["y" /* THAI */]];

var years = [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1899, 1898, 1897, 1896, 1895, 1894, 1893, 1892, 1891, 1890, 1799, 1798, 1797, 1796, 1795, 1794, 1793, 1792, 1791, 1790];

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_info__ = __webpack_require__("./components/admin/info/index.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\pages\\index.js';




var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
    { title: '\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19 - \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E19\u0E31\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14', type: 'admin', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_admin_info__["a" /* default */], { title: '\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E19\u0E31\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./reduxModules/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie__ = __webpack_require__("./reduxModules/movie.js");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  movies: __WEBPACK_IMPORTED_MODULE_1__movie__["t" /* default */]
}));

/***/ }),

/***/ "./reduxModules/movie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FETCH_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EDIT_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EDIT_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return EDIT_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SREACH_TYPE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SREACH_TYPE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SREACH_TYPE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SREACH_GROUP_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SREACH_GROUP_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SREACH_GROUP_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return fetchMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return createMovie; });
/* unused harmony export editMovie */
/* unused harmony export sreachTypeMovie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return sreachGroupMovie; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FETCH_MOVIE = 'alex/FETCH_MOVIE';
var FETCH_MOVIE_SUCCESS = 'alex/FETCH_MOVIE_SUCCESS';
var FETCH_MOVIE_FAILED = 'alex/FETCH_MOVIE_FAILED';
var DELETE_MOVIE = 'alex/DELETE_MOVIE';
var DELETE_MOVIE_SUCCESS = 'alex/DELETE_MOVIE_SUCCESS';
var DELETE_MOVIE_FAILED = 'alex/DELETE_MOVIE_FAILED';
var CREATE_MOVIE = 'alex/CREATE_MOVIE';
var CREATE_MOVIE_SUCCESS = 'alex/CREATE_MOVIE_SUCCESS';
var CREATE_MOVIE_FAILED = 'alex/CREATE_MOVIE_FAILED';
var EDIT_MOVIE = 'alex/EDIT_MOVIE';
var EDIT_MOVIE_SUCCESS = 'alex/EDIT_MOVIE_SUCCESS';
var EDIT_MOVIE_FAILED = 'alex/EDIT_MOVIE_FAILED';
var SREACH_TYPE_MOVIE = 'alex/SREACH_TYPE_MOVIE';
var SREACH_TYPE_MOVIE_SUCCESS = 'alex/SREACH_TYPE_MOVIE_SUCCESS';
var SREACH_TYPE_MOVIE_FAILED = 'alex/SREACH_TYPE_MOVIE_FAILED';
var SREACH_GROUP_MOVIE = 'alex/SREACH_GROUP_MOVIE';
var SREACH_GROUP_MOVIE_SUCCESS = 'alex/SREACH_GROUP_MOVIE_SUCCESS';
var SREACH_GROUP_MOVIE_FAILED = 'alex/SREACH_GROUP_MOVIE_FAILED';

var fetchMovie = function fetchMovie() {
  return {
    type: FETCH_MOVIE
  };
};

var deleteMovie = function deleteMovie(id) {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};

var createMovie = function createMovie(json) {
  return {
    type: CREATE_MOVIE,
    payload: json
  };
};

var editMovie = function editMovie(id, json) {
  return {
    type: EDIT_MOVIE,
    id: id,
    payload: json
  };
};

var sreachTypeMovie = function sreachTypeMovie(type) {
  return {
    type: SREACH_TYPE_MOVIE,
    payload: type
  };
};

var sreachGroupMovie = function sreachGroupMovie(group) {
  return {
    type: SREACH_GROUP_MOVIE,
    payload: group
  };
};

var initialState = {
  movieDb: [],
  error: '',
  loading: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case FETCH_MOVIE:
      return _extends({}, state, {
        movieDb: []
      });
    case FETCH_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case FETCH_MOVIE_FAILED:
    case DELETE_MOVIE:
      return _extends({}, state);
    case DELETE_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case DELETE_MOVIE_FAILED:
    case CREATE_MOVIE:
      return _extends({}, state, {
        movieDb: [],
        error: ''
      });
    case CREATE_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case CREATE_MOVIE_FAILED:
    case EDIT_MOVIE:
      return _extends({}, state, {
        movieDb: [],
        error: ''
      });
    case EDIT_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case EDIT_MOVIE_FAILED:
    case SREACH_TYPE_MOVIE:
      return _extends({}, state, {
        movieDb: []
      });
    case SREACH_TYPE_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case SREACH_TYPE_MOVIE_FAILED:
    case SREACH_GROUP_MOVIE:
      return _extends({}, state, {
        movieDb: []
      });
    case SREACH_GROUP_MOVIE_SUCCESS:
      {
        return _extends({}, state, {
          movieDb: action.payload,
          error: ''
        });
      }
    case SREACH_GROUP_MOVIE_FAILED:
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["t"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movieSagas__ = __webpack_require__("./sagas/movieSagas.js");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(rootSaga);



function rootSaga() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function rootSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('[API] using movie-api');
                    _context.next = 3;
                    return [Object(__WEBPACK_IMPORTED_MODULE_1__movieSagas__["a" /* default */])()];

                case 3:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

/***/ }),

/***/ "./sagas/movieSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__("./utils/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(fetchMovie),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(deleteMovie),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(createMovie),
    _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(editMovie),
    _marked5 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(sreachTypeMovie),
    _marked6 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(sreachGroupMovie),
    _marked7 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(watchMovieSagas);





// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function fetchMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/');

        case 3:
          json = _context.sent;
          _context.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["l" /* FETCH_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["k" /* FETCH_MOVIE_FAILED */],
            message: _context.t0.message
          });

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function deleteMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function deleteMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/delete/' + action.payload);

        case 3:
          json = _context2.sent;
          _context2.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["f" /* DELETE_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["e" /* DELETE_MOVIE_FAILED */],
            message: _context2.t0.message
          });

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}

function createMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function createMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["c" /* postJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/create', action.payload);

        case 3:
          json = _context3.sent;
          _context3.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["c" /* CREATE_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["b" /* CREATE_MOVIE_FAILED */],
            message: _context3.t0.message
          });

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 8]]);
}

function editMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function editMovie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["c" /* postJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/edit/' + action.id, action.payload);

        case 3:
          json = _context4.sent;
          _context4.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["i" /* EDIT_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["h" /* EDIT_MOVIE_FAILED */],
            message: _context4.t0.message
          });

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 8]]);
}

function sreachTypeMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function sreachTypeMovie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/sreach/type/' + action.payload);

        case 3:
          json = _context5.sent;
          _context5.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["r" /* SREACH_TYPE_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["q" /* SREACH_TYPE_MOVIE_FAILED */],
            message: _context5.t0.message
          });

        case 12:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 8]]);
}

function sreachGroupMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function sreachGroupMovie$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/sreach/group/' + action.payload);

        case 3:
          json = _context6.sent;
          _context6.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["o" /* SREACH_GROUP_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6['catch'](0);
          _context6.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["n" /* SREACH_GROUP_MOVIE_FAILED */],
            message: _context6.t0.message
          });

        case 12:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[0, 8]]);
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function watchMovieSagas() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function watchMovieSagas$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["j" /* FETCH_MOVIE */], fetchMovie);

        case 2:
          _context7.next = 4;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["d" /* DELETE_MOVIE */], deleteMovie);

        case 4:
          _context7.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["a" /* CREATE_MOVIE */], createMovie);

        case 6:
          _context7.next = 8;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["g" /* EDIT_MOVIE */], editMovie);

        case 8:
          _context7.next = 10;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["p" /* SREACH_TYPE_MOVIE */], sreachTypeMovie);

        case 10:
          _context7.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["m" /* SREACH_GROUP_MOVIE */], sreachGroupMovie);

        case 12:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

/* harmony default export */ __webpack_exports__["a"] = (watchMovieSagas);

/***/ }),

/***/ "./texts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GROUP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CARTOON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return US; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ASIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LATEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return THAI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return IMDB; });
/* unused harmony export TYPE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADVENTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BIOGRAPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COMEDY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CRIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DOCUMENTARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DRAMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FAMILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FANTASY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FILM_NOIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return HORROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MUSICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MYSTERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ROMANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SCI_FI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return THRILLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return WAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return WESTRN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return NONE_TYPE; });
//หมวดหมู่
var GROUP = 'หมวดหมู่';
var CARTOON = 'หนังการ์ตูน';
var US = 'หนังฝรั่ง';
var ASIAN = 'หนังเอเชีย';
var EPISODE = 'หนังภาคต่อ';
var LATEST = 'หนังออกใหม่';
var THAI = 'หนังไทย';
var IMDB = 'IMDB';

//ประเภท
var TYPE = 'ประเภท';
var ACTION = 'Action บู๊';
var ADVENTURE = 'Adventure ผจญภัย';
var ANIMATION = 'Animation การ์ตูน';
var BIOGRAPHY = 'Biography ชีวิตจริง';
var COMEDY = 'Comedy ตลก';
var CRIME = 'Crime อาชญากรรม';
var DOCUMENTARY = 'Documentary สารคดี';
var DRAMA = 'Drama ชีวิต';
var FAMILY = 'Family ครอบครัว';
var FANTASY = 'Fantasy เทพนิยาย';
var FILM_NOIR = 'Film-Noir ด้านมืดของสังคม';
var HISTORY = 'History ประวัติศาสตร์';
var HORROR = 'Horror สยองขวัญ';
var MUSICAL = 'Musical เพลง';
var MYSTERY = 'Mystery ลึกลับซ่อนเงื่อน';
var ROMANCE = 'Romance โรแมนติก';
var SCI_FI = 'Sci-Fi วิทยาศาสตร์';
var SPORT = 'Sport กีฬา';
var THRILLER = 'Thriller ระทึกขวัญ';
var WAR = 'War สงคราม';
var WESTRN = 'Western คาวบอยตะวันตก';
var NONE_TYPE = 'ไม่มีหมวดหมู่';

/***/ }),

/***/ "./utils/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postJSON; });
/* unused harmony export patchJSON */
/* unused harmony export deleteJSON */
/* unused harmony export postLogout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__config__["a"]; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var getJSON = function getJSON(url) {
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });
};

var postJSON = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(url, jsonBody) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(jsonBody)
            }).then(function (response) {
              return response.json();
            }).then(function (json) {
              if (json.error) {
                throw Error(json.error.message);
              }
              return json;
            });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function postJSON(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var patchJSON = function patchJSON(url, jsonBody) {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });
};

var deleteJSON = function deleteJSON(url) {
  var jsonBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(jsonBody)
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });
};

var postLogout = function postLogout(url, json) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(json)
  });
};



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map