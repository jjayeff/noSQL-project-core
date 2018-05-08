webpackHotUpdate(5,{

/***/ "./pages/edit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_edit__ = __webpack_require__("./components/admin/edit/index.js");
var _jsxFileName = 'C:\\Users\\ekkaw\\Desktop\\Project\\noSQL-project\\noSQL-project-core\\pages\\edit.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
    { title: '\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19 - \u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E19\u0E31\u0E07', type: 'admin', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_admin_edit__["a" /* default */], { title: '\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E19\u0E31\u0E07', data: props.url.query, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    })
  );
};

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/pages/edit.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/ekkaw/Desktop/Project/noSQL-project/noSQL-project-core/pages/edit.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/edit")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.faa15a7cc0e84a3590c1.hot-update.js.map