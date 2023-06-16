"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[19],{

/***/ 73019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DynamicAnswers)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicAnswers.vue?vue&type=template&id=76edccd2

const _hoisted_1 = {
  class: "full-width"
};
const _hoisted_2 = {
  key: 0,
  class: "no-answer text-primary-400"
};
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["href"];
const _hoisted_6 = {
  class: "q-px-sm q-py-xs"
};
const _hoisted_7 = {
  key: 1
};
const _hoisted_8 = ["href"];
const _hoisted_9 = ["href"];
const _hoisted_10 = ["href"];
const _hoisted_11 = {
  class: "col-3"
};
const _hoisted_12 = {
  class: "hover-text-secondary overflow-hidden",
  style: {
    "text-overflow": "ellipsis"
  }
};
const _hoisted_13 = {
  key: 2
};
const _hoisted_14 = {
  key: 1,
  class: "row items-center q-col-gutter-lg"
};
const _hoisted_15 = ["href"];
const _hoisted_16 = {
  class: "col-3"
};
const _hoisted_17 = {
  class: "hover-text-secondary overflow-hidden",
  style: {
    "text-overflow": "ellipsis"
  }
};
const _hoisted_18 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_video = (0,vue_esm_bundler/* resolveComponent */.up)("q-video");
  const _component_ImageLoader = (0,vue_esm_bundler/* resolveComponent */.up)("ImageLoader");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  return (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [!_ctx.answer || _ctx.answer?.length < 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, " - ")) : _ctx.qtype === 'textarea1' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 1,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["raw-html", {
      ['qt-textarea1']: _ctx.qtype === 'textarea1'
    }]),
    innerHTML: _ctx.answer
  }, null, 10, _hoisted_3)) : _ctx.qtype === 'textarea2' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 2,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["raw-html", {
      ['qt-textarea2']: _ctx.qtype === 'textarea2'
    }]),
    innerHTML: _ctx.answer
  }, null, 10, _hoisted_4)) : _ctx.qtype === 'textfield' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 3,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-textarea2']: _ctx.qtype === 'textarea2'
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 3)) : _ctx.qtype === 'select_multiple' || _ctx.qtype === 'select' ? ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 4
  }, (0,vue_esm_bundler/* renderList */.Ko)(Array.isArray(_ctx.answer) ? _ctx.answer : [_ctx.answer], ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)({
        ['qt-select_multiple']: _ctx.qtype === 'select_multiple',
        ['qt-select']: _ctx.qtype === 'select'
      })
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(ans) ? ans?.label || ans?.value : _ctx.filterOptionValue(ans)?.label || ans), 3);
  }), 128)) : _ctx.qtype === 'radio' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 5,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-radio']: _ctx.qtype === 'radio'
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(_ctx.answer) ? _ctx.answer?.label || _ctx.answer?.value : _ctx.filterOptionValue(_ctx.answer)?.label || _ctx.answer), 3)) : _ctx.qtype === 'checkbox' ? ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 6
  }, (0,vue_esm_bundler/* renderList */.Ko)(Array.isArray(_ctx.answer) ? _ctx.answer : [_ctx.answer], ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)({
        ['qt-checkbox']: _ctx.qtype === 'checkbox'
      })
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.checkIfObject(ans) ? ans?.label || ans?.value : _ctx.filterOptionValue(ans)?.label || ans), 3);
  }), 128)) : _ctx.qtype === 'select_platform' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 7,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-select_platform']: _ctx.qtype === 'select_platform'
    })
  }, [(0,vue_esm_bundler/* createElementVNode */._)("a", {
    href: _ctx.platforms[_ctx.answer]?.url,
    target: "_blank"
  }, [_ctx.platforms?.[_ctx.answer] ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
    key: 0,
    class: "badge badge-blue full-height"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      name: `img:${_ctx.platforms[_ctx.answer]?.icon}`,
      size: "md",
      class: "q-pr-sm"
    }, null, 8, ["name"]), (0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.platforms[_ctx.answer]?.title), 1)])]),
    _: 1
  })) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(typeof _ctx.answer === 'string' ? _ctx.capitalize(_ctx.answer) : _ctx.answer), 1))], 8, _hoisted_5)], 2)) : _ctx.qtype === 'video_walkthrough' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_video, {
    key: 8,
    ratio: 16 / 9,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded fit", {
      ['qt-video_walkthrough']: _ctx.qtype === 'video_walkthrough'
    }]),
    src: _ctx.urlShareToEmbed(_ctx.answer)
  }, null, 8, ["src", "class"])) : _ctx.qtype === 'select_brand' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 9,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-select_brand']: _ctx.qtype === 'select_brand'
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrgBrands[_ctx.answer]?.brand_name), 3)) : _ctx.qtype === 'select_taskcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 10,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-select_taskcategory']: _ctx.qtype === 'select_taskcategory'
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 3)) : _ctx.qtype === 'select_projectcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 11,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-select_projectcategory']: _ctx.qtype === 'select_projectcategory'
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 3)) : _ctx.qtype === 'select_tasktype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 12,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-select_tasktype']: _ctx.qtype === 'select_tasktype'
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 3)) : _ctx.qtype === 'select_projecttype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 13,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-select_projecttype']: _ctx.qtype === 'select_projecttype'
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 3)) : _ctx.qtype === 'url' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 14,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-url']: _ctx.qtype === 'url'
    })
  }, [_ctx.answer ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("a", {
    key: 0,
    href: `//${_ctx.answer}`,
    target: "_blank"
  }, "https://" + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer), 9, _hoisted_8)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2)) : _ctx.qtype === 'phone' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 15,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-phone']: _ctx.qtype === 'phone'
    })
  }, [_ctx.answer ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("a", {
    key: 0,
    href: `tel:${_ctx.formatPhone(_ctx.answer)}`
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.formatPhone(_ctx.answer)), 9, _hoisted_9)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2)) : _ctx.qtype === 'upload_single' || _ctx.qtype === 'upload_multiple' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 16,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row items-center q-col-gutter-lg", {
      ['qt-upload_single']: _ctx.qtype === 'upload_single',
      ['qt-upload_multiple']: _ctx.qtype === 'upload_multiple'
    }])
  }, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(Array.isArray(_ctx.answer) ? _ctx.answer : [_ctx.answer], ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12", {
        ['col-sm-6']: _ctx.answer.length > 1
      }])
    }, [_ctx.checkIfObject(ans) && _ctx.checkFileExtensions(ans.name, _ctx.$config.supportedDisplayImage) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_ImageLoader, {
      key: 0,
      ratio: _ctx.qtype === 'upload_single' ? undefined : 1,
      file: ans
    }, null, 8, ["ratio", "file"])) : _ctx.checkIfObject(ans) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("a", {
      key: 1,
      target: "_blank",
      class: "row items-center q-col-gutter-sm cursor-pointer text-primary",
      href: ans.download_url
    }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
      icon: _ctx.getFileTypeIcon(ans.name)
    }, null, 8, ["icon"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_12, (0,vue_esm_bundler/* toDisplayString */.zw)(ans.name), 1)], 8, _hoisted_10)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_13, "File: " + (0,vue_esm_bundler/* toDisplayString */.zw)(ans), 1))], 2);
  }), 128))], 2)) : _ctx.qtype === 'website_content' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 17,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['qt-website_content']: _ctx.qtype === 'website_content'
    })
  }, [_ctx.answer?.info ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
    key: 0,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['q-pb-md']: _ctx.answer.uploads?.length
    })
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.answer.info), 3)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.answer.uploads?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_14, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.answer.uploads || [], ans => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: ans,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12", {
        ['col-sm-6']: _ctx.answer.uploads?.length > 1
      }])
    }, [_ctx.checkIfObject(ans) && _ctx.checkFileExtensions(ans.name, _ctx.$config.supportedDisplayImage) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_ImageLoader, {
      key: 0,
      file: ans
    }, null, 8, ["file"])) : _ctx.checkIfObject(ans) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("a", {
      key: 1,
      target: "_blank",
      class: "row items-center q-col-gutter-sm cursor-pointer text-primary",
      href: ans.download_url
    }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_16, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
      icon: _ctx.getFileTypeIcon(ans.name)
    }, null, 8, ["icon"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_17, (0,vue_esm_bundler/* toDisplayString */.zw)(ans.name), 1)], 8, _hoisted_15)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_18, "File: " + (0,vue_esm_bundler/* toDisplayString */.zw)(ans), 1))], 2);
  }), 128))])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 512)), [[vue_esm_bundler/* vShow */.F8, !_ctx.hideAnswerForAlternativeQuestionTypes.includes(_ctx.aqtype) && !(_ctx.qtype === 'select_platform' && _ctx.aqtype === 'textfield' && _ctx.answer === 'other')]]);
}
;// CONCATENATED MODULE: ./src/components/DynamicAnswers.vue?vue&type=template&id=76edccd2

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(16122);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__(30321);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/components/Helpers/ImageLoader.vue + 4 modules
var ImageLoader = __webpack_require__(12308);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicAnswers.vue?vue&type=script&lang=js








/* harmony default export */ const DynamicAnswersvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DynamicAnswers',
  props: {
    qid: {
      type: Number,
      default: 0,
      required: true
    },
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
    },
    question: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ImageLoader: ImageLoader/* default */.Z,
    CardIconBox: CardIconBox["default"]
  },
  data() {
    return {
      checkIfObject: functions.checkIfObject,
      urlShareToEmbed: functions.urlShareToEmbed,
      capitalize: format["default"].capitalize,
      hideAnswerForAlternativeQuestionTypes: ['url'],
      checkFileExtensions: functions.checkFileExtensions,
      getFileTypeIcon: functions.getFileTypeIcon
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['platforms']),
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgBrands'])
  },
  methods: {
    filterOptionValue(ans) {
      if (!this.question.options?.length) return;
      let val = this.question.options.filter(e => e.value === ans);
      if (!val?.length) val = this.question.options.filter(e => e.label === ans);
      return val?.length ? val[0] : val;
    },
    formatPhone(ans) {
      if (!ans) return '';
      const ar = ans.split('+');
      return `+${ar[0]} ${ar[1]}`;
    }
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
//# sourceMappingURL=19.26e93575.js.map