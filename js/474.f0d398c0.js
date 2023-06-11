"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[474],{

/***/ 66474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InputVideoWalkthrough)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputVideoWalkthrough.vue?vue&type=template&id=5e129621

const _hoisted_1 = {
  class: "q-pb-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", null, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    flat: "",
    "no-caps": "",
    rounded: "",
    dense: _ctx.dense,
    class: "text-primary bg-primary-100 text-caption font-medium q-px-md cursor-pointer letter-space-normal hover-text-secondary",
    href: _ctx.url,
    onClick: _cache[0] || (_cache[0] = (0,vue_esm_bundler/* withModifiers */.iM)($event => _ctx.openURL(_ctx.url), ["prevent"]))
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      name: _ctx.formatPlatformIconSrc('Loom'),
      size: "xs",
      class: "q-pr-sm"
    }, null, 8, ["name"]), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Create with Loom ")]),
    _: 1
  }, 8, ["dense", "href"])]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
    outlined: "",
    autofocus: _ctx.autofocus,
    "hide-bottom-space": "",
    modelValue: _ctx.modelValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.modelValue = $event),
    placeholder: _ctx.placeholder,
    name: _ctx.name || undefined,
    class: "rounded text-body2 input-white",
    rules: [val => _ctx.checker.input({
      value: val,
      nomsg: true,
      type: 'url'
    }, 500, _ctx.required)]
  }, null, 8, ["autofocus", "modelValue", "placeholder", "name", "rules"])]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputVideoWalkthrough.vue?vue&type=template&id=5e129621

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/open-url.js
var open_url = __webpack_require__(33752);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputVideoWalkthrough.vue?vue&type=script&lang=js





/* harmony default export */ const InputVideoWalkthroughvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputVideoWalkthrough',
  emits: ['updated'],
  props: {
    initModel: {},
    autofocus: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Your video walkthrough link'
    },
    required: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      checker: functions.checker,
      openURL: open_url/* default */.Z,
      url: 'https://www.loom.com',
      modelValue: ''
    };
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.modelValue = val;
      }
    },
    modelValue: {
      async handler(val) {
        this.$emit('updated', val);
      }
    }
  },
  mounted() {
    if (this.initModel) this.modelValue = this.initModel;
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['formatPlatformIconSrc'])
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/InputVideoWalkthrough.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/InputVideoWalkthrough.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InputVideoWalkthroughvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const InputVideoWalkthrough = (__exports__);
;



runtime_auto_import_default()(InputVideoWalkthroughvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QInput: QInput/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=474.f0d398c0.js.map