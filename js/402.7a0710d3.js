"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[402],{

/***/ 15402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DynamicAnswers)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicAnswers.vue?vue&type=template&id=b97a2838

const _hoisted_1 = {
  class: "full-width"
};
const _hoisted_2 = {
  key: 0,
  class: "no-answer text-primary-400"
};
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = {
  key: 3
};
const _hoisted_6 = {
  key: 4
};
const _hoisted_7 = {
  key: 1
};
const _hoisted_8 = {
  key: 6
};
const _hoisted_9 = {
  key: 1
};
const _hoisted_10 = {
  class: "q-px-sm q-py-xs"
};
const _hoisted_11 = {
  key: 1
};
const _hoisted_12 = {
  key: 10
};
const _hoisted_13 = {
  key: 11
};
const _hoisted_14 = {
  key: 12
};
const _hoisted_15 = {
  key: 13
};
const _hoisted_16 = {
  key: 14
};
const _hoisted_17 = {
  key: 15
};
const _hoisted_18 = ["href"];
const _hoisted_19 = {
  key: 16
};
const _hoisted_20 = {
  key: 1
};
const _hoisted_21 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_video = (0,vue_esm_bundler/* resolveComponent */.up)("q-video");
  return (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [!_ctx.answer || _ctx.answer?.length < 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, " - ")) : _ctx.qtype === 'textarea1' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 1,
    class: "raw-html",
    innerHTML: _ctx.answer
  }, null, 8, _hoisted_3)) : _ctx.qtype === 'textarea2' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 2,
    class: "raw-html",
    innerHTML: _ctx.answer
  }, null, 8, _hoisted_4)) : _ctx.qtype === 'textfield' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_5, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 1)) : _ctx.qtype === 'select' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_6, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(_ctx.answer) ? _ctx.answer?.label || _ctx.answer?.value : _ctx.answer), 1)) : _ctx.qtype === 'select_multiple' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 5
  }, [Array.isArray(_ctx.answer) ? ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 0
  }, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.answer, ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(ans) ? ans?.label || ans?.value : ans), 1);
  }), 128)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(_ctx.answer) ? _ctx.answer?.label || _ctx.answer?.value : _ctx.answer), 1))], 64)) : _ctx.qtype === 'radio' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_8, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(_ctx.answer) ? _ctx.answer?.label || _ctx.answer?.value : _ctx.answer), 1)) : _ctx.qtype === 'checkbox' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 7
  }, [Array.isArray(_ctx.answer) ? ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 0
  }, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.answer, ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(ans) ? ans?.label || ans?.value : ans), 1);
  }), 128)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_9, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(_ctx.answer) ? _ctx.answer?.label || _ctx.answer?.value : _ctx.answer), 1))], 64)) : _ctx.qtype === 'select_platform' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 8
  }, [_ctx.platforms?.[_ctx.answer] ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
    key: 0,
    class: "badge badge-blue full-height"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      name: `img:${_ctx.platforms[_ctx.answer]?.icon}`,
      size: "md",
      class: "q-pr-sm"
    }, null, 8, ["name"]), (0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.platforms[_ctx.answer]?.title), 1)])]),
    _: 1
  })) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_11, (0,vue_esm_bundler/* toDisplayString */.zw)(typeof _ctx.answer === 'string' ? _ctx.capitalize(_ctx.answer) : _ctx.answer), 1))], 64)) : _ctx.qtype === 'video_walkthrough' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_video, {
    key: 9,
    ratio: 16 / 9,
    class: "rounded fit",
    src: _ctx.loomURLShare2Embed(_ctx.answer)
  }, null, 8, ["src"])) : _ctx.qtype === 'select_brand' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_12, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrgBrands[_ctx.answer]?.brand_name), 1)) : _ctx.qtype === 'select_taskcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_13, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 1)) : _ctx.qtype === 'select_projectcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_14, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 1)) : _ctx.qtype === 'select_tasktype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_15, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 1)) : _ctx.qtype === 'select_projecttype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_16, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 1)) : _ctx.qtype === 'url' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_17, [(0,vue_esm_bundler/* createElementVNode */._)("a", {
    href: `//${_ctx.answer}`,
    target: "_blank"
  }, "https://" + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 9, _hoisted_18)])) : _ctx.qtype === 'phone' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_19, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer ? `+${_ctx.answer.split('+')[0]} ${_ctx.answer.split('+')[1]}` : ''), 1)) : _ctx.qtype === 'upload_single' || _ctx.qtype === 'upload_multiple' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 17
  }, [_ctx.qtype === 'upload_multiple' && Array.isArray(_ctx.answer) ? ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 0
  }, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.answer, ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(ans), 1);
  }), 128)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_20, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 1))], 64)) : _ctx.qtype === 'website_content' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 18
  }, [_ctx.answer?.info ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_21, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer.info), 1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.answer.uploads ? ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 1
  }, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.answer.uploads, ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(ans), 1);
  }), 128)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 64)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 512)), [[vue_esm_bundler/* vShow */.F8, !_ctx.hideAnswerForAlternativeQuestionTypes.includes(_ctx.aqtype) && !(_ctx.qtype === 'select_platform' && _ctx.aqtype === 'textfield' && _ctx.answer === 'other')]]);
}
;// CONCATENATED MODULE: ./src/components/DynamicAnswers.vue?vue&type=template&id=b97a2838

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__(30321);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicAnswers.vue?vue&type=script&lang=js






/* harmony default export */ const DynamicAnswersvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DynamicAnswers',
  props: {
    qtype: {
      type: String,
      default: ''
    },
    answer: {
      default: null
    },
    aqtype: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checkIfObject: functions.checkIfObject,
      loomURLShare2Embed: functions.loomURLShare2Embed,
      capitalize: format["default"].capitalize,
      hideAnswerForAlternativeQuestionTypes: ['url']
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['platforms']),
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgBrands'])
  }
}));
;// CONCATENATED MODULE: ./src/components/DynamicAnswers.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/video/QVideo.js
var QVideo = __webpack_require__(31005);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/DynamicAnswers.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DynamicAnswersvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const DynamicAnswers = (__exports__);
;



runtime_auto_import_default()(DynamicAnswersvue_type_script_lang_js, 'components', {QBadge: QBadge/* default */.Z,QIcon: QIcon/* default */.Z,QVideo: QVideo/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=402.7a0710d3.js.map