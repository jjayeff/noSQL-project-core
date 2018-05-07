webpackHotUpdate(4,{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga__ = __webpack_require__("./node_modules/redux-saga/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reduxModules__ = __webpack_require__("./reduxModules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sagas__ = __webpack_require__("./sagas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Navbar__ = __webpack_require__("./components/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_css__ = __webpack_require__("./css/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__css_style_css__);
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











// create the saga middleware
var sagaMiddleware = Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga__["a" /* default */])();
// mount it on the Store
var store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["d" /* createStore */])(__WEBPACK_IMPORTED_MODULE_5__reduxModules__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* applyMiddleware */])(sagaMiddleware));

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
        __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Navbar__["a" /* default */], { type: this.props.type, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }),
          this.props.children
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaMiddleware, 'sagaMiddleware', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/Layout.js');
  reactHotLoader.register(store, 'store', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/Layout.js');
  reactHotLoader.register(Layout, 'Layout', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/Layout.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/Layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__texts__ = __webpack_require__("./texts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data__ = __webpack_require__("./data.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\Navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
            '\u0E15\u0E32\u0E41\u0E09\u0E30'
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
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, { fetchMovie: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["s" /* fetchMovie */], sreachGroupMovie: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["t" /* sreachGroupMovie */] })(Navbar);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/Navbar.js');
  reactHotLoader.register(Navbar, 'Navbar', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/Navbar.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/Navbar.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/admin/add/FormMovie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__("./data.js");

var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\add\\FormMovie.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FormMovie = function (_React$Component) {
    _inherits(FormMovie, _React$Component);

    function FormMovie(props) {
        _classCallCheck(this, FormMovie);

        var _this = _possibleConstructorReturn(this, (FormMovie.__proto__ || Object.getPrototypeOf(FormMovie)).call(this, props));

        _this.state = {
            name: 'Iron Man 3 มหาประลัย คนเกราะเหล็ก 3',
            imdb: '7.2',
            img: 'https://www.movie2free.com/wp-content/uploads/thumb/ironman3-230x300.jpg',
            year: '2018',
            type: ["Action บู๊", "Adventure ผจญภัย", "Sci-Fi วิทยาศาสตร์"],
            actors: [],
            actorName1: 'โรเบิร์ต ดาวนีย์ จูเนียร์',
            actorName2: 'กวินเน็ธ พัลโทรว์',
            actorName3: 'ดอน ชีเดล',
            actorName4: 'กาย เพียร์ซ',
            actorAge1: '53',
            actorAge2: '45',
            actorAge3: '42',
            actorAge4: '50'
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChangeType = _this.handleChangeType.bind(_this);
        _this.handleChangeGroup = _this.handleChangeGroup.bind(_this);
        return _this;
    }

    _createClass(FormMovie, [{
        key: 'handleChange',
        value: function handleChange(type, e) {
            var myobj = JSON.parse('{ "' + type + '":"' + e.target.value + '" }');
            this.setState(myobj);
        }
    }, {
        key: 'handleChangeType',
        value: function handleChangeType(e) {
            this.setState({
                type: [].concat(_toConsumableArray(this.state.type), [e.target.value])
            });
        }
    }, {
        key: 'handleChangeGroup',
        value: function handleChangeGroup(e) {
            this.setState({
                group: [].concat(_toConsumableArray(this.state.group), [e.target.value])
            });
        }
    }, {
        key: 'handleSubmit',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(e) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                if (!(this.state.actorName1 != '')) {
                                    _context.next = 4;
                                    break;
                                }

                                _context.next = 4;
                                return this.setState({ actors: [].concat(_toConsumableArray(this.state.actors), [{ name: this.state.actorName1, age: this.state.actorAge1 }]) });

                            case 4:
                                if (!(this.state.actorName2 != '')) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 7;
                                return this.setState({ actors: [].concat(_toConsumableArray(this.state.actors), [{ name: this.state.actorName2, age: this.state.actorAge2 }]) });

                            case 7:
                                if (!(this.state.actorName3 != '')) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 10;
                                return this.setState({ actors: [].concat(_toConsumableArray(this.state.actors), [{ name: this.state.actorName3, age: this.state.actorAge3 }]) });

                            case 10:
                                if (!(this.state.actorName4 != '')) {
                                    _context.next = 13;
                                    break;
                                }

                                _context.next = 13;
                                return this.setState({ actors: [].concat(_toConsumableArray(this.state.actors), [{ name: this.state.actorName4, age: this.state.actorAge4 }]) });

                            case 13:
                                if (!(this.state.type.length === 0)) {
                                    _context.next = 16;
                                    break;
                                }

                                _context.next = 16;
                                return this.setState({ type: [].concat(_toConsumableArray(this.state.type), ['ไม่มีหมวดหมู่']) });

                            case 16:
                                if (confirm('Are you sure ?!')) {
                                    __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.reload();
                                    this.props.data.createMovie(this.state);
                                    __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/');
                                }

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function handleSubmit(_x) {
                return _ref.apply(this, arguments);
            }

            return handleSubmit;
        }()
    }, {
        key: 'renderComponentRadioType',
        value: function renderComponentRadioType(datas) {
            var _this2 = this;

            return datas.map(function (data, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-4', key: index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { className: 'form-check-label', style: { paddingLeft: '25px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'radio', className: 'form-check-input', value: data, onChange: _this2.handleChangeType, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            }
                        }),
                        data
                    )
                );
            });
        }
    }, {
        key: 'renderComponentRadioGroup',
        value: function renderComponentRadioGroup(datas) {
            var _this3 = this;

            return datas.map(function (data, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-4', key: index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { className: 'form-check-label', style: { paddingLeft: '25px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'radio', className: 'form-check-input', value: data, onChange: _this3.handleChangeGroup, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            }
                        }),
                        data
                    )
                );
            });
        }
    }, {
        key: 'renderComponentYears',
        value: function renderComponentYears(datas) {
            return datas.map(function (data, index) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'option',
                    { key: index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        }
                    },
                    data
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { className: 'bs-component', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'fieldset',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'form-group', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 85
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'label',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 86
                                    }
                                },
                                '* \u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E31\u0E07\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 + \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29', value: this.state.name, onChange: this.handleChange.bind(this, 'name'), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 87
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'form-group row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 89
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 90
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 91
                                        }
                                    },
                                    '* IMDB'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'number', className: 'form-control', placeholder: '\u0E04\u0E30\u0E41\u0E19\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02', min: '0', max: '10', step: '0.1', value: this.state.imdb, onChange: this.handleChange.bind(this, 'imdb'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 92
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 94
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 95
                                        }
                                    },
                                    '* \u0E1B\u0E35'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'select',
                                    { className: 'form-control', value: this.state.year, onChange: this.handleChange.bind(this, 'year'), __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 96
                                        }
                                    },
                                    this.renderComponentYears(__WEBPACK_IMPORTED_MODULE_3__data__["d" /* years */])
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-6', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 100
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 101
                                        }
                                    },
                                    '* \u0E25\u0E34\u0E07\u0E04\u0E4C\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: 'https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg', value: this.state.img, onChange: this.handleChange.bind(this, 'img'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 102
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'col-lg-6 ', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 104
                                }
                            }),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'label',
                                { className: 'col-lg-12 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 107
                                    }
                                },
                                '* \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            this.renderComponentRadioType(__WEBPACK_IMPORTED_MODULE_3__data__["c" /* types */])
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'form-group row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 110
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-7 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 111
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 112
                                        }
                                    },
                                    '* \u0E19\u0E31\u0E01\u0E41\u0E2A\u0E14\u0E07'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-2 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 114
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 115
                                        }
                                    },
                                    '* \u0E2D\u0E32\u0E22\u0E38'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-7 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 117
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E41\u0E2A\u0E14\u0E07', value: this.state.actorName1, onChange: this.handleChange.bind(this, 'actorName1'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 118
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-2 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 120
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E2D\u0E32\u0E22\u0E38', value: this.state.actorAge1, onChange: this.handleChange.bind(this, 'actorAge1'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 121
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-7 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 123
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E41\u0E2A\u0E14\u0E07', value: this.state.actorName2, onChange: this.handleChange.bind(this, 'actorName2'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 124
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-2 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 126
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E2D\u0E32\u0E22\u0E38', value: this.state.actorAge2, onChange: this.handleChange.bind(this, 'actorAge2'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 127
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-7 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 129
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E41\u0E2A\u0E14\u0E07', value: this.state.actorName3, onChange: this.handleChange.bind(this, 'actorName3'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 130
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-2 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 132
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E2D\u0E32\u0E22\u0E38', value: this.state.actorAge3, onChange: this.handleChange.bind(this, 'actorAge3'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 133
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-7 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 135
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E19\u0E31\u0E01\u0E41\u0E2A\u0E14\u0E07', value: this.state.actorName4, onChange: this.handleChange.bind(this, 'actorName4'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 136
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-2 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 138
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E2D\u0E32\u0E22\u0E38', value: this.state.actorAge4, onChange: this.handleChange.bind(this, 'actorAge4'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 139
                                    }
                                })
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-success', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 142
                                }
                            },
                            'Submit'
                        )
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return FormMovie;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = FormMovie;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(FormMovie, 'FormMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/add/FormMovie.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/add/FormMovie.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/admin/add/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Add__ = __webpack_require__("./components/admin/add/Add.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\add\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var mapStateToProps = function mapStateToProps(state) {
    return {
        loading: state.movies.loading
    };
};

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container', style: { paddingTop: '80px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Add__["a" /* default */], { title: this.props.title, data: this.props, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    })
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, { createMovie: __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__["p" /* createMovie */] })(Index);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/add/index.js');
    reactHotLoader.register(Index, 'Index', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/add/index.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/add/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return navbarUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navbarAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return types; });
/* unused harmony export groups */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return years; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texts__ = __webpack_require__("./texts.js");
(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



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
    link: '/admin/info'
}, {
    name: 'เพิ่มหนัง',
    link: '/admin/add'
}];

var types = [__WEBPACK_IMPORTED_MODULE_0__texts__["a" /* ACTION */], __WEBPACK_IMPORTED_MODULE_0__texts__["b" /* ADVENTURE */], __WEBPACK_IMPORTED_MODULE_0__texts__["c" /* ANIMATION */], __WEBPACK_IMPORTED_MODULE_0__texts__["e" /* BIOGRAPHY */], __WEBPACK_IMPORTED_MODULE_0__texts__["g" /* COMEDY */], __WEBPACK_IMPORTED_MODULE_0__texts__["h" /* CRIME */], __WEBPACK_IMPORTED_MODULE_0__texts__["i" /* DOCUMENTARY */], __WEBPACK_IMPORTED_MODULE_0__texts__["j" /* DRAMA */], __WEBPACK_IMPORTED_MODULE_0__texts__["l" /* FAMILY */], __WEBPACK_IMPORTED_MODULE_0__texts__["m" /* FANTASY */], __WEBPACK_IMPORTED_MODULE_0__texts__["n" /* FILM_NOIR */], __WEBPACK_IMPORTED_MODULE_0__texts__["o" /* HISTORY */], __WEBPACK_IMPORTED_MODULE_0__texts__["p" /* HORROR */], __WEBPACK_IMPORTED_MODULE_0__texts__["s" /* MUSICAL */], __WEBPACK_IMPORTED_MODULE_0__texts__["t" /* MYSTERY */], __WEBPACK_IMPORTED_MODULE_0__texts__["v" /* ROMANCE */], __WEBPACK_IMPORTED_MODULE_0__texts__["w" /* SCI_FI */], __WEBPACK_IMPORTED_MODULE_0__texts__["x" /* SPORT */], __WEBPACK_IMPORTED_MODULE_0__texts__["z" /* THRILLER */], __WEBPACK_IMPORTED_MODULE_0__texts__["B" /* WAR */], __WEBPACK_IMPORTED_MODULE_0__texts__["C" /* WESTRN */], __WEBPACK_IMPORTED_MODULE_0__texts__["u" /* NONE_TYPE */]];

var groups = [__WEBPACK_IMPORTED_MODULE_0__texts__["f" /* CARTOON */], __WEBPACK_IMPORTED_MODULE_0__texts__["A" /* US */], __WEBPACK_IMPORTED_MODULE_0__texts__["d" /* ASIAN */], __WEBPACK_IMPORTED_MODULE_0__texts__["k" /* EPISODE */], __WEBPACK_IMPORTED_MODULE_0__texts__["r" /* LATEST */], __WEBPACK_IMPORTED_MODULE_0__texts__["y" /* THAI */]];

var years = [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1899, 1898, 1897, 1896, 1895, 1894, 1893, 1892, 1891, 1890, 1799, 1798, 1797, 1796, 1795, 1794, 1793, 1792, 1791, 1790];
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(navbarUser, 'navbarUser', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/data.js');
    reactHotLoader.register(navbarAdmin, 'navbarAdmin', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/data.js');
    reactHotLoader.register(types, 'types', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/data.js');
    reactHotLoader.register(groups, 'groups', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/data.js');
    reactHotLoader.register(years, 'years', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/data.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reduxModules/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie__ = __webpack_require__("./reduxModules/movie.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({
  movies: __WEBPACK_IMPORTED_MODULE_1__movie__["q" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reduxModules/movie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SREACH_TYPE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SREACH_TYPE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SREACH_TYPE_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SREACH_GROUP_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SREACH_GROUP_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SREACH_GROUP_MOVIE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return fetchMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return createMovie; });
/* unused harmony export sreachTypeMovie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sreachGroupMovie; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var FETCH_MOVIE = 'alex/FETCH_MOVIE';
var FETCH_MOVIE_SUCCESS = 'alex/FETCH_MOVIE_SUCCESS';
var FETCH_MOVIE_FAILED = 'alex/FETCH_MOVIE_FAILED';
var DELETE_MOVIE = 'alex/DELETE_MOVIE';
var DELETE_MOVIE_SUCCESS = 'alex/DELETE_MOVIE_SUCCESS';
var DELETE_MOVIE_FAILED = 'alex/DELETE_MOVIE_FAILED';
var CREATE_MOVIE = 'alex/CREATE_MOVIE';
var CREATE_MOVIE_SUCCESS = 'alex/CREATE_MOVIE_SUCCESS';
var CREATE_MOVIE_FAILED = 'alex/CREATE_MOVIE_FAILED';
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

var _default = reducer;
/* harmony default export */ __webpack_exports__["q"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_MOVIE, 'FETCH_MOVIE', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(FETCH_MOVIE_SUCCESS, 'FETCH_MOVIE_SUCCESS', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(FETCH_MOVIE_FAILED, 'FETCH_MOVIE_FAILED', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(DELETE_MOVIE, 'DELETE_MOVIE', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(DELETE_MOVIE_SUCCESS, 'DELETE_MOVIE_SUCCESS', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(DELETE_MOVIE_FAILED, 'DELETE_MOVIE_FAILED', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(CREATE_MOVIE, 'CREATE_MOVIE', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(CREATE_MOVIE_SUCCESS, 'CREATE_MOVIE_SUCCESS', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(CREATE_MOVIE_FAILED, 'CREATE_MOVIE_FAILED', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(SREACH_TYPE_MOVIE, 'SREACH_TYPE_MOVIE', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(SREACH_TYPE_MOVIE_SUCCESS, 'SREACH_TYPE_MOVIE_SUCCESS', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(SREACH_TYPE_MOVIE_FAILED, 'SREACH_TYPE_MOVIE_FAILED', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(SREACH_GROUP_MOVIE, 'SREACH_GROUP_MOVIE', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(SREACH_GROUP_MOVIE_SUCCESS, 'SREACH_GROUP_MOVIE_SUCCESS', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(SREACH_GROUP_MOVIE_FAILED, 'SREACH_GROUP_MOVIE_FAILED', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(fetchMovie, 'fetchMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(deleteMovie, 'deleteMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(createMovie, 'createMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(sreachTypeMovie, 'sreachTypeMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(sreachGroupMovie, 'sreachGroupMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(initialState, 'initialState', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(reducer, 'reducer', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/reduxModules/movie.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/movieSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api__ = __webpack_require__("./utils/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(fetchMovie),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(deleteMovie),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(createMovie),
    _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(sreachTypeMovie),
    _marked5 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(sreachGroupMovie),
    _marked6 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(watchMovieSagas);





// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function fetchMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function fetchMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/');

        case 3:
          json = _context.sent;
          _context.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["i" /* FETCH_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["h" /* FETCH_MOVIE_FAILED */],
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
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/delete/' + action.payload);

        case 3:
          json = _context2.sent;
          _context2.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
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
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
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
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["c" /* postJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/create', action.payload);

        case 3:
          json = _context3.sent;
          _context3.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
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
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
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

function sreachTypeMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function sreachTypeMovie$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/sreach/type/' + action.payload);

        case 3:
          json = _context4.sent;
          _context4.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["o" /* SREACH_TYPE_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["n" /* SREACH_TYPE_MOVIE_FAILED */],
            message: _context4.t0.message
          });

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 8]]);
}

function sreachGroupMovie(action) {
  var json;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function sreachGroupMovie$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_2__utils_api__["b" /* getJSON */], __WEBPACK_IMPORTED_MODULE_2__utils_api__["a" /* API_SERVER */] + '/api/movies/sreach/group/' + action.payload);

        case 3:
          json = _context5.sent;
          _context5.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["l" /* SREACH_GROUP_MOVIE_SUCCESS */],
            payload: json
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])({
            type: __WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["k" /* SREACH_GROUP_MOVIE_FAILED */],
            message: _context5.t0.message
          });

        case 12:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 8]]);
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function watchMovieSagas() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function watchMovieSagas$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["g" /* FETCH_MOVIE */], fetchMovie);

        case 2:
          _context6.next = 4;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["d" /* DELETE_MOVIE */], deleteMovie);

        case 4:
          _context6.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["a" /* CREATE_MOVIE */], createMovie);

        case 6:
          _context6.next = 8;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["m" /* SREACH_TYPE_MOVIE */], sreachTypeMovie);

        case 8:
          _context6.next = 10;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_3__reduxModules_movie__["j" /* SREACH_GROUP_MOVIE */], sreachGroupMovie);

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

var _default = watchMovieSagas;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchMovie, 'fetchMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/sagas/movieSagas.js');
  reactHotLoader.register(deleteMovie, 'deleteMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/sagas/movieSagas.js');
  reactHotLoader.register(createMovie, 'createMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/sagas/movieSagas.js');
  reactHotLoader.register(sreachTypeMovie, 'sreachTypeMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/sagas/movieSagas.js');
  reactHotLoader.register(sreachGroupMovie, 'sreachGroupMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/sagas/movieSagas.js');
  reactHotLoader.register(watchMovieSagas, 'watchMovieSagas', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/sagas/movieSagas.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/sagas/movieSagas.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f49d688a79362df37070.hot-update.js.map