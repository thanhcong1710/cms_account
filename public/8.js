(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/pages/Switch.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./resources/coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/utility */ "./resources/coreui/src/utilities/utility.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loading */ "./resources/coreui/src/components/Loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Switch",
  components: {
    loader: _components_Loading__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      roleCameraAI: false,
      roleCCall: false,
      email: "",
      password: "",
      showMessage: false,
      message: "",
      loading: {
        text: "Đang xử lý dữ liệu...",
        processing: false
      },
      message_error: ""
    };
  },
  created: function created() {
    this.roleCameraAI = localStorage.getItem("roles").indexOf("CM") != -1 || localStorage.getItem("roles").indexOf("admin") != -1 ? true : false;
    this.roleCCall = localStorage.getItem("roles").indexOf("CM") == -1 ? true : false;
  },
  methods: {
    loginCRM: function loginCRM() {
      var _this = this;

      this.loading.processing = true;
      _utilities_utility__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/users/login/crm").then(function (response) {
        if (response.data.status == 1) {
          window.location.href = response.data.link_redirect;
        } else {
          _this.loading.processing = false;
          _this.message_error = response.data.message;
        }
      })["catch"](function (e) {
        _utilities_utility__WEBPACK_IMPORTED_MODULE_1__["default"].processAuthen(e);
      });
    },
    loginLeads: function loginLeads(type) {
      var _this2 = this;

      this.loading.processing = true;
      _utilities_utility__WEBPACK_IMPORTED_MODULE_1__["default"].g("/api/users/login/leads?type=" + type).then(function (response) {
        if (response.data.status == 1) {
          window.location.href = response.data.link_redirect;
        } else {
          _this2.loading.processing = false;
          _this2.message_error = response.data.message;
        }
      })["catch"](function (e) {
        _utilities_utility__WEBPACK_IMPORTED_MODULE_1__["default"].processAuthen(e);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.box-switch{\n  height:146px;\n  cursor: pointer;\n}\n.box-switch:hover{\n  -webkit-box-shadow: 0px 2px 3px 3px #bfbcbc;\n          box-shadow: 0px 2px 3px 3px #bfbcbc;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=template&id=518141c2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/pages/Switch.vue?vue&type=template&id=518141c2& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex content-center min-vh-100" },
    [
      _c("loader", {
        attrs: { active: _vm.loading.processing, text: _vm.loading.text }
      }),
      _vm._v(" "),
      _c(
        "CContainer",
        { attrs: { fluid: "" } },
        [
          _c(
            "CRow",
            { staticClass: "justify-content-center" },
            [
              _c(
                "CCol",
                { attrs: { md: "6" } },
                [
                  _c(
                    "CCard",
                    { staticClass: "mx-4 mb-0" },
                    [
                      _c("CCardBody", { staticClass: "p-4" }, [
                        _c(
                          "svg",
                          {
                            staticStyle: { margin: "20px" },
                            attrs: {
                              version: "1.0",
                              id: "cms-logo",
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "200px",
                              viewBox: "0 0 1020.000000 418.000000",
                              preserveAspectRatio: "xMidYMid meet"
                            }
                          },
                          [
                            _c(
                              "g",
                              {
                                attrs: {
                                  transform:
                                    "translate(0.000000,418.000000) scale(0.100000,-0.100000)",
                                  fill: "#cd0118",
                                  stroke: "none"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M6463 4169 c-74 -14 -132 -46 -192 -106 -80 -80 -105 -147 -98 -261\n                      11 -185 124 -308 314 -342 147 -26 323 68 384 205 19 41 23 68 23 145 -1 103\n                      -15 156 -60 222 -67 97 -245 162 -371 137z"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M3585 4157 c-65 -22 -99 -43 -142 -90 -61 -66 -86 -141 -87 -257 -1\n                      -83 2 -102 26 -153 59 -125 175 -199 314 -199 194 1 320 99 369 288 13 49 13\n                      66 1 124 -28 132 -93 221 -195 268 -45 21 -74 27 -151 29 -59 2 -110 -2 -135\n                      -10z"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M6357 3240 c-184 -11 -249 -29 -298 -80 -71 -74 -829 -1136 -829\n                      -1160 0 -6 164 -10 440 -10 l440 0 0 -980 0 -980 385 0 385 0 0 1605 0 1605\n                      -92 0 c-51 0 -136 2 -188 4 -52 3 -162 0 -243 -4z"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M8345 3241 c-420 -9 -474 -18 -648 -108 -53 -27 -98 -62 -168 -132\n                      -83 -84 -102 -109 -147 -201 -155 -314 -163 -761 -17 -1050 94 -186 246 -317\n                      448 -386 157 -54 199 -57 782 -59 594 -2 608 -3 692 -64 87 -63 125 -212 88\n                      -349 -15 -54 -27 -75 -65 -113 -87 -87 -47 -83 -865 -89 -712 -5 -721 -5 -779\n                      -27 -91 -35 -116 -60 -178 -179 -71 -139 -212 -463 -204 -471 3 -3 473 -6\n                      1043 -6 1147 -1 1138 -1 1317 64 304 111 492 369 541 745 72 552 -136 952\n                      -568 1094 -149 49 -190 52 -747 56 -329 3 -546 8 -580 15 -149 30 -219 118\n                      -220 276 0 107 26 179 80 226 74 63 45 60 860 67 491 5 758 10 784 18 22 6 51\n                      19 65 30 36 26 106 154 226 416 l104 226 -373 0 c-205 0 -541 2 -747 4 -206 2\n                      -531 0 -724 -3z"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M1390 3229 c-958 -108 -1482 -803 -1375 -1826 61 -581 275 -984 631\n                      -1194 157 -93 312 -138 565 -166 189 -20 824 -25 1402 -9 l327 8 0 323 0 323\n                      -717 5 c-774 5 -821 8 -974 61 -271 94 -384 354 -383 876 1 531 148 797 492\n                      892 72 20 110 22 607 28 324 4 542 11 560 17 107 37 127 58 210 224 47 91 205\n                      436 205 445 0 8 -1475 1 -1550 -7z"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M3370 1630 l0 -1610 385 0 385 0 0 985 c0 578 4 985 9 985 14 0 139\n                      -137 279 -305 69 -82 164 -189 211 -238 l85 -87 373 0 c205 0 373 2 373 4 0 5\n                      -491 699 -949 1340 -168 237 -323 447 -343 467 -63 65 -94 69 -475 69 l-333 0\n                      0 -1610z"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("h1", { staticStyle: { padding: "20px" } }, [
                          _vm._v("CHỌN HỆ THỐNG")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6 col-md-4" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card text-white bg-gradient-danger box-switch",
                                on: { click: _vm.loginCRM }
                              },
                              [
                                _c("div", { staticClass: "card-body " }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "text-value-lg",
                                      staticStyle: { "font-size": "38px" }
                                    },
                                    [_c("i", { staticClass: "fas fa-school" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    {
                                      staticClass:
                                        "text-muted text-uppercase font-weight-bold",
                                      staticStyle: { "font-size": "16px" }
                                    },
                                    [_vm._v("VẬN HÀNH")]
                                  )
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.roleCCall
                            ? _c("div", { staticClass: "col-sm-6 col-md-4" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card text-white bg-gradient-success box-switch",
                                    on: {
                                      click: function($event) {
                                        return _vm.loginLeads(0)
                                      }
                                    }
                                  },
                                  [
                                    _c("div", { staticClass: "card-body" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "text-value-lg",
                                          staticStyle: { "font-size": "38px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-phone-volume"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        {
                                          staticClass:
                                            "text-muted text-uppercase font-weight-bold",
                                          staticStyle: { "font-size": "16px" }
                                        },
                                        [_vm._v("C-CALL")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-6 col-md-4" },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/user_detail" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "card text-white bg-gradient-primary box-switch"
                                    },
                                    [
                                      _c("div", { staticClass: "card-body" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "text-value-lg",
                                            staticStyle: { "font-size": "38px" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-user-alt"
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          {
                                            staticClass:
                                              "text-muted text-uppercase font-weight-bold",
                                            staticStyle: { "font-size": "16px" }
                                          },
                                          [_vm._v("TÀI KHOẢN")]
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.roleCameraAI
                            ? _c("div", { staticClass: "col-sm-6 col-md-4" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "card text-white bg-gradient-warning box-switch",
                                    on: {
                                      click: function($event) {
                                        return _vm.loginLeads(1)
                                      }
                                    }
                                  },
                                  [
                                    _c("div", { staticClass: "card-body" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "text-value-lg",
                                          staticStyle: { "font-size": "38px" }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-camera"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        {
                                          staticClass:
                                            "text-muted text-uppercase font-weight-bold",
                                          staticStyle: { "font-size": "16px" }
                                        },
                                        [_vm._v("CAMERA AI")]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", {
                            staticStyle: {
                              color: "red",
                              "text-align": "center",
                              width: "100%"
                            },
                            domProps: { innerHTML: _vm._s(_vm.message_error) }
                          })
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/coreui/src/views/pages/Switch.vue":
/*!*****************************************************!*\
  !*** ./resources/coreui/src/views/pages/Switch.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch_vue_vue_type_template_id_518141c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch.vue?vue&type=template&id=518141c2& */ "./resources/coreui/src/views/pages/Switch.vue?vue&type=template&id=518141c2&");
/* harmony import */ var _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch.vue?vue&type=script&lang=js& */ "./resources/coreui/src/views/pages/Switch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Switch_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Switch.vue?vue&type=style&index=0&lang=css& */ "./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Switch_vue_vue_type_template_id_518141c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Switch_vue_vue_type_template_id_518141c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/coreui/src/views/pages/Switch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/coreui/src/views/pages/Switch.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/coreui/src/views/pages/Switch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/coreui/src/views/pages/Switch.vue?vue&type=template&id=518141c2&":
/*!************************************************************************************!*\
  !*** ./resources/coreui/src/views/pages/Switch.vue?vue&type=template&id=518141c2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_518141c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=template&id=518141c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/Switch.vue?vue&type=template&id=518141c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_518141c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_518141c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);