webpackHotUpdate(3,{

/***/ "./components/admin/info/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Info__ = __webpack_require__("./components/admin/info/Info.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\info\\index.js';

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
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, { fetchMovie: __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__["s" /* fetchMovie */], deleteMovie: __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__["r" /* deleteMovie */] })(Index);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/info/index.js');
    reactHotLoader.register(Index, 'Index', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/info/index.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/info/index.js');
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
/* unused harmony export sreachGroupMovie */
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
//# sourceMappingURL=3.28743b985c02af38df66.hot-update.js.map