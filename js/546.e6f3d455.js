"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[546],{

/***/ 4546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SelectOption)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(6646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectOption.vue?vue&type=template&id=66b2bac6

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    dense: _ctx.dense,
    outlined: "",
    "hide-bottom-space": "",
    multiple: _ctx.multiple,
    "use-chips": _ctx.multiple,
    "option-value": "value",
    "option-label": "label",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.selection,
    modelValue: _ctx.modelValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.modelValue = $event),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, (0,vue_esm_bundler/* createSlots */.Nv)({
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
      onClick: scope.opt?.action
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [scope.opt?.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        avatar: "",
        style: {
          "min-width": "unset"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: scope.opt?.icon
        }, null, 8, ["name"])]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt?.label || scope.opt), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    _: 2
  }, [!_ctx.multiple ? {
    name: "selected",
    fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.modelValue ? '' : 'text-placeholder')
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.multiple && _ctx.modelValue?.length ? `Selected ${_ctx.modelValue?.length} option${_ctx.modelValue?.length > 1 ? 's' : ''}` : _ctx.modelValue && typeof _ctx.modelValue !== 'object' ? _ctx.modelValue : _ctx.modelValue?.label || _ctx.placeholder), 3)]),
    key: "0"
  } : undefined]), 1032, ["dense", "multiple", "use-chips", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectOption.vue?vue&type=template&id=66b2bac6

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectOption.vue?vue&type=script&lang=js

/* harmony default export */ const SelectOptionvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectOption',
  props: {
    placeholder: {
      type: String,
      default: 'Select option'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Array,
      default: () => []
    },
    dense: {
      type: Boolean,
      default: true
    },
    initModel: {},
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modelValue: null
    };
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.modelValue = val;
      }
    }
  },
  mounted() {
    this.modelValue = this.initModel;
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectOption.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(1233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(2857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/SelectOption.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectOptionvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectOption = (__exports__);
;





runtime_auto_import_default()(SelectOptionvue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=546.e6f3d455.js.map