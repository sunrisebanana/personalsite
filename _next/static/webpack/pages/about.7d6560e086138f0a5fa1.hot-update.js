webpackHotUpdate_N_E("pages/about",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var _home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/jaime/Projects/personalsite/personalsite/personalsite/src/components/Navbar.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n //todo: move these to module.css\n\nvar menuStyle = {\n  border: 'none',\n  borderRadius: 0,\n  boxShadow: 'none',\n  marginBottom: '1em',\n  transition: 'box-shadow 0.5s ease, padding 0.5s ease'\n};\nvar fixedMenuStyle = {\n  border: '1px solid',\n  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'\n};\n\nvar Navbar = /*#__PURE__*/function (_Component) {\n  Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navbar, _Component);\n\n  var _super = _createSuper(Navbar);\n\n  function Navbar() {\n    var _this;\n\n    Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navbar);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      menuFixed: false\n    });\n\n    return _this;\n  }\n\n  Object(_home_jaime_Projects_personalsite_personalsite_personalsite_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navbar, [{\n    key: \"render\",\n    // stickNavbar = () => this.setState({ menuFixed: true })\n    // unStickNavbar = () => this.setState({ menuFixed: false })\n    value: function render() {\n      var menuFixed = this.state.menuFixed;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Visibility\"]\n      /* onBottomPassed={this.stickNavbar} onBottomVisible={this.unStickNavbar} */\n      , {\n        once: false,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"], {\n          fixed: menuFixed\n          /* fixed={menuFixed ? 'top' : undefined} style={menuFixed ? fixedMenuStyle : menuStyle} */\n          ,\n          inverted: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n            \"aria-label\": \"Navbar\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n              \"aria-label\": \"Home\",\n              href: \"/\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Image\"], {\n                alt: \"me\",\n                size: \"mini\",\n                src: \"/logo.png\",\n                style: {\n                  marginRight: '1.5em'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 25\n              }, this), \"It's My Website\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n              \"aria-label\": \"About\",\n              href: \"/about\",\n              children: \"About\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n              \"aria-label\": \"Github\",\n              href: \"https://github.com/sunrisebanana\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Icon\"], {\n                link: true,\n                name: \"github\",\n                size: \"large\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n              \"aria-label\": \"Linkedin\",\n              href: \"https://www.linkedin.com/in/jaime-herzog-75826713b/\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Icon\"], {\n                link: true,\n                name: \"linkedin\",\n                size: \"large\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n              \"aria-label\": \"Lichess\",\n              href: \"https://lichess.org/@/sunrisebanana\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Icon\"], {\n                link: true,\n                name: \"chess\",\n                size: \"large\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 25\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD84MDVmIl0sIm5hbWVzIjpbIm1lbnVTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsInRyYW5zaXRpb24iLCJmaXhlZE1lbnVTdHlsZSIsIk5hdmJhciIsIm1lbnVGaXhlZCIsInN0YXRlIiwibWFyZ2luUmlnaHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQVNBOztBQUNBLElBQU1BLFNBQVMsR0FBRztBQUNkQyxRQUFNLEVBQUUsTUFETTtBQUVkQyxjQUFZLEVBQUUsQ0FGQTtBQUdkQyxXQUFTLEVBQUUsTUFIRztBQUlkQyxjQUFZLEVBQUUsS0FKQTtBQUtkQyxZQUFVLEVBQUU7QUFMRSxDQUFsQjtBQVNBLElBQU1DLGNBQWMsR0FBRztBQUNuQkwsUUFBTSxFQUFFLFdBRFc7QUFFbkJFLFdBQVMsRUFBRTtBQUZRLENBQXZCOztJQUtxQkksTTs7Ozs7Ozs7Ozs7Ozs7OztnV0FDVDtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLOzs7Ozs7O0FBR1I7QUFDQTs2QkFDUztBQUFBLFVBQ0dBLFNBREgsR0FDaUIsS0FBS0MsS0FEdEIsQ0FDR0QsU0FESDtBQUVMLDBCQUNBLHFFQUFDLDREQUFVO0FBQUM7QUFBWjtBQUF5RixZQUFJLEVBQUUsS0FBL0Y7QUFBQSwrQkFDSSxxRUFBQyxzREFBRDtBQUFNLGVBQUssRUFBRUE7QUFBVTtBQUF2QjtBQUFrSCxrQkFBUSxFQUFFLElBQTVIO0FBQUEsaUNBQ0kscUVBQUMsMkRBQUQ7QUFBVywwQkFBVyxRQUF0QjtBQUFBLG9DQUNJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLDRCQUFXLE1BQXRCO0FBQTZCLGtCQUFJLEVBQUMsR0FBbEM7QUFBQSxzQ0FDSSxxRUFBQyx1REFBRDtBQUFRLG1CQUFHLEVBQUMsSUFBWjtBQUFpQixvQkFBSSxFQUFDLE1BQXRCO0FBQTZCLG1CQUFHLEVBQUMsV0FBakM7QUFBNkMscUJBQUssRUFBRTtBQUFFRSw2QkFBVyxFQUFFO0FBQWY7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFLSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyw0QkFBVyxPQUF0QjtBQUE4QixrQkFBSSxFQUFDLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBUUkscUVBQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsNEJBQVcsUUFBdEI7QUFBK0Isa0JBQUksRUFBQyxrQ0FBcEM7QUFBQSxxQ0FDSSxxRUFBQyxzREFBRDtBQUFNLG9CQUFJLE1BQVY7QUFBVyxvQkFBSSxFQUFDLFFBQWhCO0FBQXlCLG9CQUFJLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkosZUFXSSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyw0QkFBVyxVQUF0QjtBQUFpQyxrQkFBSSxFQUFDLHFEQUF0QztBQUFBLHFDQUNJLHFFQUFDLHNEQUFEO0FBQU0sb0JBQUksTUFBVjtBQUFXLG9CQUFJLEVBQUMsVUFBaEI7QUFBMkIsb0JBQUksRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYSixlQWNJLHFFQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLDRCQUFXLFNBQXRCO0FBQWdDLGtCQUFJLEVBQUMscUNBQXJDO0FBQUEscUNBQ0kscUVBQUMsc0RBQUQ7QUFBTSxvQkFBSSxNQUFWO0FBQVcsb0JBQUksRUFBQyxPQUFoQjtBQUF3QixvQkFBSSxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUF5Qkg7Ozs7RUFqQytCQywrQyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIE1lbnUsXG4gIEltYWdlLFxuICBWaXNpYmlsaXR5LFxuICBJY29uXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG4vL3RvZG86IG1vdmUgdGhlc2UgdG8gbW9kdWxlLmNzc1xuY29uc3QgbWVudVN0eWxlID0ge1xuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxZW0nLFxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuNXMgZWFzZSwgcGFkZGluZyAwLjVzIGVhc2UnLFxuICAgIFxufVxuXG5jb25zdCBmaXhlZE1lbnVTdHlsZSA9IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgIGJveFNoYWRvdzogJzBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG1lbnVGaXhlZDogZmFsc2UsXG4gICAgfVxuICAgIC8vIHN0aWNrTmF2YmFyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lbnVGaXhlZDogdHJ1ZSB9KVxuICAgIC8vIHVuU3RpY2tOYXZiYXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVudUZpeGVkOiBmYWxzZSB9KVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBtZW51Rml4ZWQgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPFZpc2liaWxpdHkgLyogb25Cb3R0b21QYXNzZWQ9e3RoaXMuc3RpY2tOYXZiYXJ9IG9uQm90dG9tVmlzaWJsZT17dGhpcy51blN0aWNrTmF2YmFyfSAqLyBvbmNlPXtmYWxzZX0+XG4gICAgICAgICAgICA8TWVudSBmaXhlZD17bWVudUZpeGVkfS8qIGZpeGVkPXttZW51Rml4ZWQgPyAndG9wJyA6IHVuZGVmaW5lZH0gc3R5bGU9e21lbnVGaXhlZCA/IGZpeGVkTWVudVN0eWxlIDogbWVudVN0eWxlfSAqLyBpbnZlcnRlZD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBhcmlhLWxhYmVsPVwiTmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXJpYS1sYWJlbD1cIkhvbWVcIiBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgYWx0PSdtZScgc2l6ZT0nbWluaScgc3JjPScvbG9nby5wbmcnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMS41ZW0nIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBJdCdzIE15IFdlYnNpdGVcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXJpYS1sYWJlbD1cIkFib3V0XCIgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFyaWEtbGFiZWw9XCJHaXRodWJcIiBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vc3VucmlzZWJhbmFuYSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBsaW5rIG5hbWU9J2dpdGh1Yicgc2l6ZT0nbGFyZ2UnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXJpYS1sYWJlbD1cIkxpbmtlZGluXCIgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2phaW1lLWhlcnpvZy03NTgyNjcxM2IvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGxpbmsgbmFtZT0nbGlua2VkaW4nIHNpemU9J2xhcmdlJy8+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFyaWEtbGFiZWw9XCJMaWNoZXNzXCIgaHJlZj0naHR0cHM6Ly9saWNoZXNzLm9yZy9AL3N1bnJpc2ViYW5hbmEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbGluayBuYW1lPSdjaGVzcycgc2l6ZT0nbGFyZ2UnLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvVmlzaWJpbGl0eT5cbiAgICAgICAgKVxuICAgICAgICBcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ })

})