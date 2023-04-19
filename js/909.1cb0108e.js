"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[909],{

/***/ 66909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SelectPlatforms)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectPlatforms.vue?vue&type=template&id=6715ddb4

const _hoisted_1 = {
  class: "row q-col-gutter-md"
};
const _hoisted_2 = {
  class: "col-12 col-sm-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.platforms, (platform, i) => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      class: "col-12 col-sm-6",
      key: platform
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
      dense: _ctx.dense,
      "hide-bottom-space": "",
      modelValue: _ctx.modelValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.modelValue = $event),
      val: platform,
      color: "secondary",
      name: _ctx.name || undefined,
      class: "field-select bg-none text-body1 font-medium text-primary-500 rounded q-py-sm q-pl-sm full-width flex-label",
      rules: [val => _ctx.required ? !!val || '' : true]
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: _ctx.formatPlatformIconSrc(platform),
        size: "xs",
        class: "q-pr-sm"
      }, null, 8, ["name"]), (0,vue_esm_bundler/* createTextVNode */.Uk)(" " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.getPlatformInfo(platform, 'title')) + " ", 1), i === 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
        key: 0,
        rounded: "",
        class: "text-secondary bg-accent text-caption font-medium q-px-sm q-ml-sm letter-space-normal"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Recommended ")]),
        _: 1
      })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 2
    }, 1032, ["dense", "modelValue", "val", "name", "rules"])]);
  }), 128)), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
    dense: _ctx.dense,
    "hide-bottom-space": "",
    modelValue: _ctx.modelValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.modelValue = $event),
    val: "no-preference",
    label: "No Preference",
    color: "secondary",
    name: _ctx.name || undefined,
    class: "field-select bg-none text-body1 font-medium text-primary-500 rounded q-py-sm q-pl-sm full-width",
    rules: [val => _ctx.required ? !!val || '' : true]
  }, null, 8, ["dense", "modelValue", "name", "rules"])])]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectPlatforms.vue?vue&type=template&id=6715ddb4

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectPlatforms.vue?vue&type=script&lang=js



/* harmony default export */ const SelectPlatformsvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectPlatforms',
  emits: ['updated'],
  props: {
    initModel: {},
    platforms: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
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
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['getPlatformInfo', 'formatPlatformIconSrc'])
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectPlatforms.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/radio/QRadio.js
var QRadio = __webpack_require__(11480);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/SelectPlatforms.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectPlatformsvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectPlatforms = (__exports__);
;



runtime_auto_import_default()(SelectPlatformsvue_type_script_lang_js, 'components', {QRadio: QRadio/* default */.Z,QIcon: QIcon/* default */.Z,QBadge: QBadge/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=909.1cb0108e.js.map