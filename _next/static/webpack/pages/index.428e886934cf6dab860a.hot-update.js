self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "D:\\personalsite\\personalsite\\src\\components\\Navbar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //todo: move these to module.css

var menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  background: 'white'
};
var fixedMenuStyle = {
  border: '1px solid',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  marginBottom: '1em',
  background: 'white'
};
var leftItems = [// { as: 'a', key:'jeffsmap', content: "Jeff's Map", href: "https://mapsbyjeff.com/"},
{
  as: 'a',
  key: 'resume',
  content: "Resume",
  href: "/resume"
}, {
  as: 'a',
  key: 'contact',
  content: "Contact",
  href: "/contact"
}];
var rightItems = [{
  as: 'a',
  key: 'github',
  content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Icon, {
    link: true,
    name: "github",
    size: "large"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 39
  }, undefined),
  target: "_blank",
  href: "https://github.com/sunrisebanana"
}, {
  as: 'a',
  key: 'linkedin',
  content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Icon, {
    link: true,
    name: "linkedin",
    size: "large"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 41
  }, undefined),
  target: "_blank",
  href: "https://www.linkedin.com/in/jaime-herzog-75826713b"
}, {
  as: 'a',
  key: 'chess',
  content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Icon, {
    link: true,
    name: "chess",
    size: "large"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 38
  }, undefined),
  target: "_blank",
  href: "https://lichess.org/@/sunrisebanana"
}];

var Navbar = /*#__PURE__*/function (_Component) {
  (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    var _this;

    (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "state", {
      menuFixed: false
    });

    (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "stickNavbar", function () {
      return _this.setState({
        menuFixed: true
      });
    });

    (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.default)((0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), "unStickNavbar", function () {
      return _this.setState({
        menuFixed: false
      });
    });

    return _this;
  }

  (0,D_personalsite_personalsite_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Navbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var menuFixed = this.state.menuFixed;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Visibility, {
        onBottomPassed: this.stickNavbar,
        onBottomVisible: this.unStickNavbar,
        offset: [0, -50],
        once: false,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Row, {
            only: "computer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {
              secondary: true,
              fixed: 'top',
              style: menuFixed ? fixedMenuStyle : menuStyle,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {
                text: true,
                "aria-label": "Navbar",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {
                  "aria-label": "Home",
                  href: "/",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Image, {
                    alt: "me",
                    size: "mini",
                    src: "/logo.png",
                    style: {
                      marginRight: '1.5em'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 25
                  }, this), "It's My Website"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Dropdown, {
                    floating: true,
                    className: "icon",
                    text: "Menu",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Dropdown.Menu, {
                      children: underscore__WEBPACK_IMPORTED_MODULE_9__.default.map(leftItems, function (item) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, _objectSpread({}, item), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 64,
                          columnNumber: 55
                        }, _this2);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Menu, {
                  position: "right",
                  children: underscore__WEBPACK_IMPORTED_MODULE_9__.default.map(rightItems, function (item) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, _objectSpread({}, item), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 52
                    }, _this2);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Row, {
            only: "mobile tablet",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {
              widths: 2,
              borderless: true,
              position: "middle",
              fixed: 'top',
              style: menuFixed ? fixedMenuStyle : menuStyle,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {
                "aria-label": "Navbar",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {
                  "aria-label": "Home",
                  href: "/",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Image, {
                    alt: "me",
                    size: "mini",
                    src: "/logo.png",
                    style: {
                      marginRight: '1.5em'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 25
                  }, this), "It's My Website"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Dropdown, {
                    floating: true,
                    className: "icon",
                    text: "Menu",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Dropdown.Menu, {
                      children: underscore__WEBPACK_IMPORTED_MODULE_9__.default.map(leftItems, function (item) {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, _objectSpread({}, item), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 55
                        }, _this2);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this);
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJtZW51U3R5bGUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtYXJnaW5Cb3R0b20iLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZCIsImZpeGVkTWVudVN0eWxlIiwibGVmdEl0ZW1zIiwiYXMiLCJrZXkiLCJjb250ZW50IiwiaHJlZiIsInJpZ2h0SXRlbXMiLCJ0YXJnZXQiLCJOYXZiYXIiLCJtZW51Rml4ZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwic3RpY2tOYXZiYXIiLCJ1blN0aWNrTmF2YmFyIiwibWFyZ2luUmlnaHQiLCJfIiwiaXRlbSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQVdBOztBQUNDLElBQU1BLFNBQVMsR0FBRztBQUNmQyxRQUFNLEVBQUUsTUFETztBQUVmQyxjQUFZLEVBQUUsQ0FGQztBQUdmQyxXQUFTLEVBQUUsTUFISTtBQUlmQyxjQUFZLEVBQUUsS0FKQztBQUtmQyxZQUFVLEVBQUUseUNBTEc7QUFNZkMsWUFBVSxFQUFFO0FBTkcsQ0FBbEI7QUFTRCxJQUFNQyxjQUFjLEdBQUc7QUFDbkJOLFFBQU0sRUFBRSxXQURXO0FBRW5CRSxXQUFTLEVBQUUsZ0NBRlE7QUFHbkJDLGNBQVksRUFBRSxLQUhLO0FBSW5CRSxZQUFVLEVBQUU7QUFKTyxDQUF2QjtBQU1BLElBQU1FLFNBQVMsR0FBRyxDQUNkO0FBQ0E7QUFBRUMsSUFBRSxFQUFFLEdBQU47QUFBV0MsS0FBRyxFQUFDLFFBQWY7QUFBeUJDLFNBQU8sRUFBRSxRQUFsQztBQUE0Q0MsTUFBSSxFQUFFO0FBQWxELENBRmMsRUFHZDtBQUFFSCxJQUFFLEVBQUUsR0FBTjtBQUFXQyxLQUFHLEVBQUMsU0FBZjtBQUEwQkMsU0FBTyxFQUFFLFNBQW5DO0FBQThDQyxN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QUE7QUFBQTtBQUFBLHdCQURKLGVBS0ksOERBQUMseURBQUQ7QUFBQSx5Q0FDQSw4REFBQyx3REFBRDtBQUFVLDRCQUFRLE1BQWxCO0FBQW1CLDZCQUFTLEVBQUMsTUFBN0I7QUFBb0Msd0JBQUksRUFBQyxNQUF6QztBQUFBLDJDQUNJLDhEQUFDLDZEQUFEO0FBQUEsZ0NBQ0tDLG1EQUFBLENBQU1kLFNBQU4sRUFBaUIsVUFBQWUsSUFBSTtBQUFBLDRDQUFJLDhEQUFDLHlEQUFELG9CQUFlQSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQUo7QUFBQSx1QkFBckI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQWtESDs7OztFQTFEK0JDLDRDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyOGU4ODY5MzRjZjZkYWI4NjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIE1lbnUsXHJcbiAgSW1hZ2UsXHJcbiAgVmlzaWJpbGl0eSxcclxuICBJY29uLFxyXG4gIEdyaWQsXHJcbiAgRHJvcGRvd25cclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcclxuXHJcbi8vdG9kbzogbW92ZSB0aGVzZSB0byBtb2R1bGUuY3NzXHJcbiBjb25zdCBtZW51U3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMWVtJyxcclxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuNXMgZWFzZSwgcGFkZGluZyAwLjVzIGVhc2UnLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxufVxyXG5cclxuY29uc3QgZml4ZWRNZW51U3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzFlbScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG59XHJcbmNvbnN0IGxlZnRJdGVtcyA9IFtcclxuICAgIC8vIHsgYXM6ICdhJywga2V5OidqZWZmc21hcCcsIGNvbnRlbnQ6IFwiSmVmZidzIE1hcFwiLCBocmVmOiBcImh0dHBzOi8vbWFwc2J5amVmZi5jb20vXCJ9LFxyXG4gICAgeyBhczogJ2EnLCBrZXk6J3Jlc3VtZScsIGNvbnRlbnQ6IFwiUmVzdW1lXCIsIGhyZWY6IFwiL3Jlc3VtZVwifSxcclxuICAgIHsgYXM6ICdhJywga2V5Oidjb250YWN0JywgY29udGVudDogXCJDb250YWN0XCIsIGhyZWY6IFwiL2NvbnRhY3RcIn0sXHJcblxyXG5dXHJcbmNvbnN0IHJpZ2h0SXRlbXMgPSBbXHJcbiAgICB7IGFzOiAnYScsIGtleTonZ2l0aHViJywgY29udGVudDogPEljb24gbGluayBuYW1lPSdnaXRodWInIHNpemU9J2xhcmdlJy8+LCB0YXJnZXQ6XCJfYmxhbmtcIiwgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vc3VucmlzZWJhbmFuYVwifSxcclxuICAgIHsgYXM6ICdhJywga2V5OidsaW5rZWRpbicsIGNvbnRlbnQ6IDxJY29uIGxpbmsgbmFtZT0nbGlua2VkaW4nIHNpemU9J2xhcmdlJy8+LCB0YXJnZXQ6XCJfYmxhbmtcIiwgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamFpbWUtaGVyem9nLTc1ODI2NzEzYlwifSxcclxuICAgIHsgYXM6ICdhJywga2V5OidjaGVzcycsIGNvbnRlbnQ6IDxJY29uIGxpbmsgbmFtZT0nY2hlc3MnIHNpemU9J2xhcmdlJy8+LCB0YXJnZXQ6XCJfYmxhbmtcIiwgaHJlZjogXCJodHRwczovL2xpY2hlc3Mub3JnL0Avc3VucmlzZWJhbmFuYVwifVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbWVudUZpeGVkOiBmYWxzZSxcclxuICAgIH1cclxuICAgIHN0aWNrTmF2YmFyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lbnVGaXhlZDogdHJ1ZSB9KVxyXG4gICAgdW5TdGlja05hdmJhciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtZW51Rml4ZWQ6IGZhbHNlIH0pXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtZW51Rml4ZWQgfSA9IHRoaXMuc3RhdGUgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICBcclxuICAgICAgICA8VmlzaWJpbGl0eSBvbkJvdHRvbVBhc3NlZD17dGhpcy5zdGlja05hdmJhcn0gb25Cb3R0b21WaXNpYmxlPXt0aGlzLnVuU3RpY2tOYXZiYXJ9ICBvZmZzZXQ9e1swLCAtNTBdfSBvbmNlPXtmYWxzZX0+XHJcblxyXG4gICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgPEdyaWQuUm93IG9ubHk9J2NvbXB1dGVyJz5cclxuICAgICAgICAgICAgPE1lbnUgc2Vjb25kYXJ5IGZpeGVkPXsndG9wJ30gc3R5bGU9e21lbnVGaXhlZCA/IGZpeGVkTWVudVN0eWxlIDogbWVudVN0eWxlfSAgPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0IGFyaWEtbGFiZWw9XCJOYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFyaWEtbGFiZWw9XCJIb21lXCIgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgYWx0PSdtZScgc2l6ZT0nbWluaScgc3JjPScvbG9nby5wbmcnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMS41ZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEl0J3MgTXkgV2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGZsb2F0aW5nIGNsYXNzTmFtZT0naWNvbicgdGV4dD0nTWVudScgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLm1hcChsZWZ0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge18ubWFwKHJpZ2h0SXRlbXMsIGl0ZW0gPT4gPE1lbnUuSXRlbSB7Li4uaXRlbX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3cgb25seT0nbW9iaWxlIHRhYmxldCc+XHJcbiAgICAgICAgICAgIDxNZW51IHdpZHRocz17Mn0gYm9yZGVybGVzcyBwb3NpdGlvbj1cIm1pZGRsZVwiIGZpeGVkPXsndG9wJ30gc3R5bGU9e21lbnVGaXhlZCA/IGZpeGVkTWVudVN0eWxlIDogbWVudVN0eWxlfSA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGFyaWEtbGFiZWw9XCJOYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFyaWEtbGFiZWw9XCJIb21lXCIgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgYWx0PSdtZScgc2l6ZT0nbWluaScgc3JjPScvbG9nby5wbmcnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMS41ZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEl0J3MgTXkgV2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGZsb2F0aW5nIGNsYXNzTmFtZT0naWNvbicgdGV4dD0nTWVudSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge18ubWFwKGxlZnRJdGVtcywgaXRlbSA9PiA8TWVudS5JdGVtIHsuLi5pdGVtfSAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==