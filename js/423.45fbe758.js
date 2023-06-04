"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[423],{

/***/ 98423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RadioSelect)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/RadioSelect.vue?vue&type=template&id=040cf2ae

const _hoisted_1 = {
  class: "row q-col-gutter-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.selection, opt => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      class: "col-12 col-sm-6",
      key: opt
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
      dense: _ctx.dense,
      modelValue: _ctx.modelValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.modelValue = $event),
      val: opt.value,
      label: opt.label,
      "hide-bottom-space": "",
      name: _ctx.name || undefined,
      color: opt.color || 'secondary',
      class: "field-select text-body1 font-medium rounded bg-none text-primary-500 q-py-sm q-pl-sm flex-label full-width full-height",
      rules: [val => _ctx.required ? !!val || '' : true]
    }, null, 8, ["dense", "modelValue", "val", "label", "name", "color", "rules"])]);
  }), 128))]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/RadioSelect.vue?vue&type=template&id=040cf2ae

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/RadioSelect.vue?vue&type=script&lang=js

/* harmony default export */ const RadioSelectvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'RadioSelect',
  emits: ['updated'],
  props: {
    initModel: {},
    selection: {
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
        if (val) this.formatModel(val);
      }
    },
    modelValue: {
      async handler(val) {
        let model = null;
        try {
          model = JSON.parse(val);
        } catch (e) {
          model = val;
        }
        this.$emit('updated', model);
      }
    }
  },
  mounted() {
    if (this.initModel) this.formatModel(this.initModel);
  },
  methods: {
    formatModel(val) {
      if (typeof val === 'object') {
        this.modelValue = JSON.stringify(val);
      } else {
        this.modelValue = val;
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/RadioSelect.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/radio/QRadio.js
var QRadio = __webpack_require__(11480);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/RadioSelect.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RadioSelectvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const RadioSelect = (__exports__);
;

runtime_auto_import_default()(RadioSelectvue_type_script_lang_js, 'components', {QRadio: QRadio/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=423.45fbe758.js.map