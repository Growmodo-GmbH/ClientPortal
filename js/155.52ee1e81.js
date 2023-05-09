"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[155],{

/***/ 61155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CheckboxSelect)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/CheckboxSelect.vue?vue&type=template&id=2ea7e49b

const _hoisted_1 = {
  class: "row q-col-gutter-md q-pb-md"
};
const _hoisted_2 = {
  key: 0,
  class: "text-caption text-primary-500"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_checkbox = (0,vue_esm_bundler/* resolveComponent */.up)("q-checkbox");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.selection, opt => {
    return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      class: "col-12 col-sm-6",
      key: opt
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
      autofocus: "",
      modelValue: _ctx.modelValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.modelValue = $event),
      val: JSON.stringify(opt),
      name: _ctx.name || undefined,
      color: opt.color || 'secondary',
      class: "field-select text-body1 font-medium rounded bg-none text-primary-500 q-py-sm q-pl-sm full-width flex-label full-height",
      rules: [val => _ctx.required ? !!val || '' : true]
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(opt.label) + " ", 1), opt?.description ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(opt?.description), 1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 2
    }, 1032, ["modelValue", "val", "name", "color", "rules"])]);
  }), 128))]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/CheckboxSelect.vue?vue&type=template&id=2ea7e49b

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/CheckboxSelect.vue?vue&type=script&lang=js

/* harmony default export */ const CheckboxSelectvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CheckboxSelect',
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
    }
  },
  data() {
    return {
      modelValue: (0,vue_esm_bundler/* ref */.iH)([])
    };
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.formatModel(val);
      }
    },
    modelValue: {
      handler(val) {
        this.$emit('updated', val);
        // let model = [];
        // const mval = Array.isArray(val) ? val : [val];
        // for (const v of mval) {
        //   let formatVal = v;
        //   try {
        //     formatVal = JSON.parse(v);
        //   } catch (e) {
        //     formatVal = v;
        //   }
        //   model.push(formatVal);
        // }
        // this.$emit('updated', model);
      }
    }
  },

  mounted() {
    if (this.initModel) this.formatModel(this.initModel);
  },
  methods: {
    formatModel(val) {
      this.modelValue = val;
      // let model = [];
      // const mval = Array.isArray(val) ? val : [val];
      // for (const v of mval) {
      //   let formatVal = v;
      //   if (typeof v === 'object') {
      //     formatVal = JSON.stringify(v);
      //   } else {
      //     formatVal = v;
      //   }
      //   model.push(formatVal);
      // }
      // this.modelValue = model;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/CheckboxSelect.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__(11221);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/CheckboxSelect.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CheckboxSelectvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const CheckboxSelect = (__exports__);
;

runtime_auto_import_default()(CheckboxSelectvue_type_script_lang_js, 'components', {QCheckbox: QCheckbox/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=155.52ee1e81.js.map