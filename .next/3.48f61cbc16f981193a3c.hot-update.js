webpackHotUpdate(3,{

/***/ "./components/admin/info/TableMovie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\components\\admin\\info\\TableMovie.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: { pathname: '/movie', query: data }, replace: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                { href: '#', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 18
                                    }
                                },
                                data.name
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'movie-imdb-star', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        }),
                        data.imdb
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        data.actors.map(function (x) {
                            return x.name + ' ';
                        })
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
                            'button',
                            { type: 'button', className: 'btn btn-warning', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            'Edit'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-danger', onClick: _this2.handleDelete.bind(_this2, data._id), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
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
                        lineNumber: 30
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'bs-component', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'table',
                        { className: 'table table-hover', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'thead',
                            { align: 'center', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 33
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'tr',
                                { className: 'table-success', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 34
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    },
                                    'Image'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 36
                                        }
                                    },
                                    'No'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 37
                                        }
                                    },
                                    'Name'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 38
                                        }
                                    },
                                    'IMDB'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 39
                                        }
                                    },
                                    'Actor'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 40
                                        }
                                    },
                                    'Edit'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'th',
                                    { scope: 'col', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 41
                                        }
                                    },
                                    'Delete'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'tbody',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            this.renderComponent(this.props.data.movies)
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

    return TableMovie;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = TableMovie;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(TableMovie, 'TableMovie', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/info/TableMovie.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/components/admin/info/TableMovie.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.48f61cbc16f981193a3c.hot-update.js.map