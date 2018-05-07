webpackHotUpdate(4,{

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
            quality: 'HD',
            sound: 'Thai+Soundtrack(FULL)',
            year: '2018',
            trailer: 'https://www.youtube.com/embed/Ke1Y3P9D0Bc',
            synopsis: 'โทนี่ สตาร์ค/ไอรอน แมน อัจฉริยะนักอุตสาหกรรมสุดเกรียน ตกอยู่ภายใต้หลุมพรางของศัตรูผู้ไม่รู้จักขอบเขตของคำว่าโหดร้าย เมื่อสตาร์คพบว่าโลกส่วนตัวของเขาได้ถูกทำลายลงด้วยเงื้อมมือของศัตรูเหล่านั้น เขาจึงออกตามล่าคนที่ต้องรับผิดชอบกับเหตุการณ์ที่เกิดขึ้นแบบพลิกแผ่นดิน ในทุกย่างก้าวของการเดินทางครั้งนี้ คือการทดสอบความเข้มแข็งของเขา เมื่อหลังชนฝา สตาร์คเอาตัวรอดมาได้โดยอุปกรณ์ต่าง ๆ ของเขาเอง สิ่งที่พึ่งพาได้ในตอนนี้ก็คือความเป็นนักประดิษฐ์และสัญชาตญาณ เพื่อจะปกป้องคนที่เขารัก เมื่อเขาลุกขึ้นสู้อีกครั้ง สตาร์คจึงได้พบกับคำตอบของคำถามที่คอยหลอกหลอนเขามาโดยตลอดว่า คนสร้างชุดเกราะหรือชุดเกราะสร้างคนกันแน่?',
            videosThai: [],
            videosEng: [],
            type: [],
            group: [],
            videoThai1: 'https://oload.site/stream/5A6qWBstfvo~1522574638~184.22.0.0~1LxhqLtd?mime=true',
            videoThai2: '',
            videoThai3: '',
            videoEng1: 'https://oload.site/stream/5A6qWBstfvo~1522574638~184.22.0.0~1LxhqLtd?mime=true',
            videoEng2: '',
            videoEng3: ''
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

                                if (!(this.state.videoThai1 != '')) {
                                    _context.next = 4;
                                    break;
                                }

                                _context.next = 4;
                                return this.setState({ videosThai: [].concat(_toConsumableArray(this.state.videosThai), [this.state.videoThai1]) });

                            case 4:
                                if (!(this.state.videoThai2 != '')) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 7;
                                return this.setState({ videosThai: [].concat(_toConsumableArray(this.state.videosThai), [this.state.videoThai2]) });

                            case 7:
                                if (!(this.state.videoThai3 != '')) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 10;
                                return this.setState({ videosThai: [].concat(_toConsumableArray(this.state.videosThai), [this.state.videoThai3]) });

                            case 10:
                                if (!(this.state.videoEng1 != '')) {
                                    _context.next = 13;
                                    break;
                                }

                                _context.next = 13;
                                return this.setState({ videosEng: [].concat(_toConsumableArray(this.state.videosEng), [this.state.videoEng1]) });

                            case 13:
                                if (!(this.state.videoEng2 != '')) {
                                    _context.next = 16;
                                    break;
                                }

                                _context.next = 16;
                                return this.setState({ videosEng: [].concat(_toConsumableArray(this.state.videosEng), [this.state.videoEng2]) });

                            case 16:
                                if (!(this.state.videoEng3 != '')) {
                                    _context.next = 19;
                                    break;
                                }

                                _context.next = 19;
                                return this.setState({ videosEng: [].concat(_toConsumableArray(this.state.videosEng), [this.state.videoEng3]) });

                            case 19:
                                if (!(this.state.type.length === 0)) {
                                    _context.next = 22;
                                    break;
                                }

                                _context.next = 22;
                                return this.setState({ type: [].concat(_toConsumableArray(this.state.type), ['ไม่มีหมวดหมู่']) });

                            case 22:
                                if (!(this.state.group.length === 0)) {
                                    _context.next = 25;
                                    break;
                                }

                                _context.next = 25;
                                return this.setState({ group: [].concat(_toConsumableArray(this.state.group), ['หนังฝรั่ง']) });

                            case 25:
                                if (confirm('Are you sure ?!')) {
                                    __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.reload();
                                    this.props.data.createMovie(this.state);
                                    __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/admin/info');
                                }

                            case 26:
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
                            lineNumber: 68
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { className: 'form-check-label', style: { paddingLeft: '25px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 69
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'radio', className: 'form-check-input', value: data, onChange: _this2.handleChangeType, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
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
                            lineNumber: 77
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'label',
                        { className: 'form-check-label', style: { paddingLeft: '25px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'radio', className: 'form-check-input', value: data, onChange: _this3.handleChangeGroup, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
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
                            lineNumber: 85
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
                        lineNumber: 89
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'fieldset',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'form-group', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'label',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 93
                                    }
                                },
                                '* \u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E31\u0E07\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 + \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29', value: this.state.name, onChange: this.handleChange.bind(this, 'name'), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 94
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'form-group row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 96
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 97
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 98
                                        }
                                    },
                                    '* IMDB'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'number', className: 'form-control', placeholder: '\u0E04\u0E30\u0E41\u0E19\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02', min: '0', max: '10', step: '0.1', value: this.state.imdb, onChange: this.handleChange.bind(this, 'imdb'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 99
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 101
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 102
                                        }
                                    },
                                    '* \u0E40\u0E2A\u0E35\u0E22\u0E07'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'select',
                                    { className: 'form-control', value: this.state.sound, onChange: this.handleChange.bind(this, 'sound'), __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 103
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'option',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 104
                                            }
                                        },
                                        'Thai+Soundtrack(FULL)'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'option',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 105
                                            }
                                        },
                                        'Thai(T)'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'option',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 106
                                            }
                                        },
                                        'Soundtrack(S)'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 109
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 110
                                        }
                                    },
                                    '* \u0E04\u0E27\u0E32\u0E21\u0E0A\u0E31\u0E14'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'select',
                                    { className: 'form-control', value: this.state.quality, onChange: this.handleChange.bind(this, 'quality'), __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 111
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'option',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 112
                                            }
                                        },
                                        'HD'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'option',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 113
                                            }
                                        },
                                        'SD'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                        'option',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 114
                                            }
                                        },
                                        'ZM'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 117
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 118
                                        }
                                    },
                                    '* \u0E1B\u0E35'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'select',
                                    { className: 'form-control', value: this.state.year, onChange: this.handleChange.bind(this, 'year'), __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 119
                                        }
                                    },
                                    this.renderComponentYears(__WEBPACK_IMPORTED_MODULE_3__data__["c" /* years */])
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-6', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 123
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 124
                                        }
                                    },
                                    '* \u0E25\u0E34\u0E07\u0E04\u0E4C\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: 'https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg', value: this.state.img, onChange: this.handleChange.bind(this, 'img'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 125
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-6 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 127
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 128
                                        }
                                    },
                                    '* \u0E25\u0E34\u0E07\u0E04\u0E4C\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07'
                                ),
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'text', className: 'form-control', placeholder: 'https://www.movie2free.com/wp-content/uploads/thumb/PercyJackson1-230x300.jpg', value: this.state.trailer, onChange: this.handleChange.bind(this, 'trailer'), __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 129
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'label',
                                { className: 'col-lg-12 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 131
                                    }
                                },
                                '* \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            this.renderComponentRadioType(__WEBPACK_IMPORTED_MODULE_3__data__["b" /* types */]),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'label',
                                { className: 'col-lg-12 ', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 133
                                    }
                                },
                                '* \u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\u0E2B\u0E19\u0E31\u0E07'
                            ),
                            this.renderComponentRadioGroup(__WEBPACK_IMPORTED_MODULE_3__data__["a" /* groups */])
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'button',
                            { type: 'submit', className: 'btn btn-success', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 136
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

/***/ })

})
//# sourceMappingURL=4.75a71f1a9d832ac287c5.hot-update.js.map