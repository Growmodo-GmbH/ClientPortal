"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[287],{

/***/ 94287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SelectTaskProjectType)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectTaskProjectType.vue?vue&type=template&id=6a7b5d7c

const _hoisted_1 = {
  key: 0,
  class: "row items-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "emit-value": "",
    "use-input": "",
    "option-value": "id",
    "hide-bottom-space": "",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.filteredOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    onFilter: _ctx.filterBrandsFn,
    onInputValue: _cache[1] || (_cache[1] = val => _ctx.inputModel = val),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
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
          name: scope.opt?.icon,
          class: "hover-text-secondary"
        }, null, 8, ["name"])]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt?.title || scope.opt), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.inputModel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [_ctx.requestOptions[_ctx.selectModel]?.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
      key: 0,
      name: _ctx.requestOptions[_ctx.selectModel]?.icon,
      size: "sm",
      class: "hover-text-secondary"
    }, null, 8, ["name"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.selectModel ? 'q-pl-sm' : 'text-placeholder')
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.requestOptions[_ctx.selectModel]?.title || _ctx.placeholder), 3)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  }, 8, ["autofocus", "dense", "options", "modelValue", "onFilter", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectTaskProjectType.vue?vue&type=template&id=6a7b5d7c

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectTaskProjectType.vue?vue&type=script&lang=js




/* harmony default export */ const SelectTaskProjectTypevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectTaskProjectType',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select type'
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'task'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.selectModel = val;
      }
    }
  },
  data() {
    return {
      filteredOptions: [],
      selectModel: '',
      inputModel: ''
    };
  },
  async mounted() {
    if (this.initModel) this.selectModel = this.initModel;
    this.isTask ? await this.getTaskDirectory() : await this.getProjectDirectory();
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['taskDirectory', 'projectDirectory']),
    isTask() {
      return this.type.toLowerCase() === 'task' ? true : false;
    },
    requestOptions() {
      return this[this.isTask ? 'taskDirectory' : 'projectDirectory'];
    },
    listOptions() {
      return Object.values(this.requestOptions);
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['getTaskDirectory', 'getProjectDirectory']),
    filterBrandsFn(val, update) {
      update(() => {
        if (val === '') {
          this.filteredOptions = this.listOptions;
        } else {
          const query_result = (0,functions.searchInObjectArray)(this.filteredOptions.slice(0, -1), val, ['title']);
          this.filteredOptions = query_result;
        }
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectTaskProjectType.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/SelectTaskProjectType.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectTaskProjectTypevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectTaskProjectType = (__exports__);
;





runtime_auto_import_default()(SelectTaskProjectTypevue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=287.d2140953.js.map