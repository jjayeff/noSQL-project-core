webpackHotUpdate(5,{

/***/ "./components/admin/edit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__ = __webpack_require__("./reduxModules/movie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Edit__ = __webpack_require__("./components/admin/edit/Edit.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\edit\\index.js';

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
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Edit__["a" /* default */], { title: this.props.title, data: this.props, __source: {
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, { editMovie: __WEBPACK_IMPORTED_MODULE_2__reduxModules_movie__["u" /* editMovie */] })(Index);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/edit/index.js');
    reactHotLoader.register(Index, 'Index', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/edit/index.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/edit/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.ca2eab938ed2c97cea4a.hot-update.js.map