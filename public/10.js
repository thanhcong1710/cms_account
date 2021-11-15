(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/utility */ "./resources/coreui/src/utilities/utility.js");
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  data: function data() {
    return {
      loading: {
        text: "Đang tải dữ liệu...",
        processing: false
      }
    };
  },
  created: function created() {
    var _this = this;

    _utilities_utility__WEBPACK_IMPORTED_MODULE_0__["default"].p("/api/single-sign-on", {
      hrm_id: this.$route.params.hrm_id,
      token: this.$route.params.token
    }).then(function (response) {
      localStorage.setItem("api_token", response.data.access_token);
      localStorage.setItem('roles', response.data.roles);

      _this.$router.push({
        path: '/switch'
      });
    })["catch"](function (e) {
      _utilities_utility__WEBPACK_IMPORTED_MODULE_0__["default"].processAuthen(e);
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=template&id=6efacc8f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=template&id=6efacc8f& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/coreui/src/utilities/utility.js":
/*!***************************************************!*\
  !*** ./resources/coreui/src/utilities/utility.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./resources/coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function processAuthen(error) {
  // console.log(error.response.data);
  // console.log(error.response.status);
  // console.log(error.response.headers);
  try {
    if (error.response.status == 401) {
      window.location.href = '/#/login';
    }
  } catch (err) {}
}

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";

  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  } else {
    return uri + separator + key + "=" + value;
  }
}

var g = function g(link) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return new Promise(function (resolve, reject) {
    if (typeof link === 'string') {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(link, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem("api_token"))
        },
        params: attributes
      }).then(function (response) {
        resolve(response);
      })["catch"](function (e) {
        processAuthen(e);
      });
    } else {
      reject('Request url is not valid');
    }
  });
};

var p = function p(link) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return new Promise(function (resolve, reject) {
    if (typeof link === 'string') {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(link, params, {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem("api_token"))
        }
      }).then(function (response) {
        resolve(response);
      })["catch"](function (e) {
        processAuthen(e);
      });
    } else {
      reject('Request url is not valid');
    }
  });
};

var vld = {
  email: function email(str) {
    // const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(str);
  },
  "null": function _null(str) {
    var pattern = /\S+/;
    return pattern.test(str);
  },
  num: function num(str) {
    // const pattern = /^\d+$/
    var pattern = /^-?\d+\.?\d*$/;
    return pattern.test(str);
  },
  cc: function cc(str) {
    var pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
    return pattern.test(str);
  },
  visa: function visa(str) {
    var pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    return pattern.test(str);
  },
  master: function master(str) {
    var pattern = /^(?:5[1-5][0-9]{14})$/;
    return pattern.test(str);
  },
  amex: function amex(str) {
    var pattern = /^(?:3[47][0-9]{13})$/;
    return pattern.test(str);
  },
  discover: function discover(str) {
    var pattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    return pattern.test(str);
  },
  same: function same(str1, str2) {
    return str1 === str2;
  },
  phone: function phone(n) {
    var carriers = {
      '096': 'Viettel',
      '097': 'Viettel',
      '098': 'Viettel',
      '032': 'Viettel',
      '033': 'Viettel',
      '034': 'Viettel',
      '035': 'Viettel',
      '036': 'Viettel',
      '037': 'Viettel',
      '038': 'Viettel',
      '039': 'Viettel',
      '090': 'Mobifone',
      '093': 'Mobifone',
      '070': 'Mobifone',
      '071': 'Mobifone',
      '072': 'Mobifone',
      '076': 'Mobifone',
      '077': 'Mobifone',
      '078': 'Mobifone',
      '079': 'Mobifone',
      '091': 'Vinaphone',
      '094': 'Vinaphone',
      '081': 'Vinaphone',
      '082': 'Vinaphone',
      '083': 'Vinaphone',
      '084': 'Vinaphone',
      '085': 'Vinaphone',
      '087': 'Vinaphone',
      '089': 'Vinaphone',
      '059': 'Gmobile',
      '099': 'Gmobile',
      '092': 'Vietnamobile',
      '056': 'Vietnamobile',
      '058': 'Vietnamobile',
      '095': 'SFone'
    };
    var reg = /^(^0[1|3|5|7|8|9])+([0-9]{7,9})$/;
    var resu = isNaN(n.toString()) ? '' : 'ok';
    resu = reg.test(n) ? resu : '';
    resu = n.length > 11 ? '' : n.length < 9 ? '' : resu;
    resu = n.substr(0, 1) === '0' ? resu : '';
    var pr = n.substring(0, 3);

    if (carriers.hasOwnProperty(pr)) {
      resu = resu == 'ok' ? carriers[pr] : '';
    }

    return resu;
  }
};

function fmc(input) {
  var code = '';
  var drap = null;
  var resp = {
    s: '',
    n: 0
  };

  if (!input || input.toString() === '' || input.toString() === '0') {
    resp.n = 0;
    resp.s = '0';
  } else {
    drap = input.toString().replace(/[\D\s\._\-]+/g, "");
    drap = drap ? parseInt(drap, 10) : 0;
    resp.n = drap;
    resp.s = drap === 0 ? "0" : "".concat(drap.toLocaleString("en-US"));
  }

  return resp;
}

var is = {
  "in": function _in(obj, key) {
    return obj && Array.isArray(obj) && key ? parseInt(obj.indexOf(key), 10) > -1 : false;
  },
  obj: function obj(_obj) {
    return _typeof(_obj) === 'object' && !Array.isArray(_obj);
  },
  arr: function arr(obj) {
    return Array.isArray(obj);
  },
  has: function has(obj, key) {
    return _typeof(obj) === 'object' && !Array.isArray(obj) ? Object.hasOwnProperty.call(obj, key) : false;
  },
  "for": function _for(obj) {
    return Object.keys(obj);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  processAuthen: processAuthen,
  shuffle: shuffle,
  vld: vld,
  fmc: fmc,
  g: g,
  p: p,
  is: is
});

/***/ }),

/***/ "./resources/coreui/src/views/pages/SingleSignOn.vue":
/*!***********************************************************!*\
  !*** ./resources/coreui/src/views/pages/SingleSignOn.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleSignOn_vue_vue_type_template_id_6efacc8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleSignOn.vue?vue&type=template&id=6efacc8f& */ "./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=template&id=6efacc8f&");
/* harmony import */ var _SingleSignOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleSignOn.vue?vue&type=script&lang=js& */ "./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleSignOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleSignOn_vue_vue_type_template_id_6efacc8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleSignOn_vue_vue_type_template_id_6efacc8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/coreui/src/views/pages/SingleSignOn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSignOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleSignOn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSignOn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=template&id=6efacc8f&":
/*!******************************************************************************************!*\
  !*** ./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=template&id=6efacc8f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSignOn_vue_vue_type_template_id_6efacc8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleSignOn.vue?vue&type=template&id=6efacc8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/coreui/src/views/pages/SingleSignOn.vue?vue&type=template&id=6efacc8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSignOn_vue_vue_type_template_id_6efacc8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleSignOn_vue_vue_type_template_id_6efacc8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);