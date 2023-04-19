"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[94],{

/***/ 51758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SelectBrand)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/SelectBrand.vue?vue&type=template&id=27f016cc

const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = {
  key: 2
};
const _hoisted_3 = {
  key: 0,
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_4 = {
  key: 0,
  avatar: ""
};
const _hoisted_5 = ["src", "alt"];
const _hoisted_6 = {
  key: 2
};
const _hoisted_7 = {
  key: 0
};
const _hoisted_8 = {
  key: 1,
  class: "text-placeholder q-pr-sm"
};
const _hoisted_9 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_CreateNewBrand = (0,vue_esm_bundler/* resolveComponent */.up)("CreateNewBrand");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    outlined: "",
    autofocus: "",
    "use-input": "",
    "emit-value": "",
    dense: _ctx.dense,
    "hide-bottom-space": "",
    "option-value": "id",
    onFilter: _ctx.filterBrandsFn,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.selectModel = $event),
    options: _ctx.filteredBrandsOptions,
    class: "rounded text-body2 input-white",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    onInputValue: _cache[6] || (_cache[6] = val => _ctx.inputModel = val),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
      onClick: scope.opt.action
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        avatar: "",
        style: {
          "min-width": "unset"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          square: "",
          size: "md",
          color: "accent",
          class: "rounded",
          "text-color": "secondary font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [scope.opt.avatar ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("img", {
            key: 0,
            src: `${_ctx.$cdn_host}/${_ctx.avatars[scope.opt.avatar]?.path}`,
            alt: _ctx.avatars[scope.opt.avatar]?.file || _ctx.avatarNameAbbr(scope.opt.brand_name),
            class: "q-pa-xs"
          }, null, 8, _hoisted_1)) : scope.opt.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 1,
            size: "xs",
            name: scope.opt.icon
          }, null, 8, ["name"])) : scope.opt.brand_name ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.avatarNameAbbr(scope.opt.brand_name)), 1)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 3,
            name: "icon-star-asterisk"
          }))]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.brand_name), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.inputModel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, [_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_name ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
      square: "",
      size: "md",
      color: "accent",
      class: "rounded",
      "text-color": "secondary font-medium"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.selectedOrgBrands[_ctx.selectModel]?.avatar ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("img", {
        key: 0,
        src: `${_ctx.$cdn_host}/${_ctx.avatars[_ctx.selectedOrgBrands[_ctx.selectModel]?.avatar]?.path}`,
        alt: _ctx.avatars[_ctx.selectedOrgBrands[_ctx.selectModel]?.avatar]?.file || _ctx.avatarNameAbbr(_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_name),
        class: "q-pa-xs"
      }, null, 8, _hoisted_5)) : _ctx.selectedOrgBrands[_ctx.selectModel]?.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
        key: 1,
        size: "xs",
        name: _ctx.selectedOrgBrands[_ctx.selectModel]?.icon
      }, null, 8, ["name"])) : _ctx.selectedOrgBrands[_ctx.selectModel]?.brand_name ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_6, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.avatarNameAbbr(_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_name)), 1)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
        key: 3,
        name: "icon-star-asterisk"
      }))]),
      _: 1
    })])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", null, [_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_name ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_name), 1)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_8, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.placeholder), 1))]), _ctx.brandCategories?.[_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_type]?.label ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_9, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["badge", {
        'badge-bg-disable': !_ctx.brandCategories?.[_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_type]?.bg_color,
        'badge-text-disable': !_ctx.brandCategories?.[_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_type]?.color
      }]),
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)({
        color: _ctx.brandCategories?.[_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_type]?.color,
        background: _ctx.brandCategories?.[_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_type]?.bg_color
      })
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.brandCategories?.[_ctx.selectedOrgBrands[_ctx.selectModel]?.brand_type]?.label), 1)]),
      _: 1
    }, 8, ["class", "style"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: "",
      modelValue: _ctx.addBrand,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.addBrand = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CreateNewBrand, {
        style: {
          "max-width": "90vw",
          "width": "640px"
        },
        onAdded: _cache[0] || (_cache[0] = id => {
          // Set Selected Task
          _ctx.$emit('brand-added', id);
        }),
        onUpdated: _cache[1] || (_cache[1] = id => {
          _ctx.$emit('brand-updated', id);
        }),
        onFinished: _cache[2] || (_cache[2] = id => {
          _ctx.addBrand = false;
          // Finished
          _ctx.$emit('brand-finished', id);
        }),
        onClose: _cache[3] || (_cache[3] = () => {
          _ctx.addBrand = false;
          // Set Selected Task
          _ctx.$emit('brand-form-closed');
        })
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  }, 8, ["dense", "onFilter", "modelValue", "options", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Brands/SelectBrand.vue?vue&type=template&id=27f016cc

// EXTERNAL MODULE: ./src/components/Brands/CreateNewBrand.vue + 4 modules
var CreateNewBrand = __webpack_require__(83811);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/SelectBrand.vue?vue&type=script&lang=js







/* harmony default export */ const SelectBrandvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectBrand',
  components: {
    CreateNewBrand: CreateNewBrand/* default */.Z
  },
  emits: ['brand-added', 'brand-updated', 'brand-finished', 'brand-form-closed'],
  props: {
    placeholder: {
      type: String,
      default: 'Select or add a brand'
    },
    required: {
      type: Boolean,
      default: false
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      filteredBrandsOptions: [],
      selectModel: null,
      inputModel: '',
      addBrand: false,
      avatars: (0,vue_esm_bundler/* ref */.iH)({}),
      avatarNameAbbr: functions.avatarNameAbbr
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgBrands']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['brandCategories'])
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.selectModel = val;
      }
    },
    selectedOrgBrands: {
      async handler(val) {
        this.getBrandAvatars();
      },
      deep: true
    }
  },
  mounted() {
    if (this.initModel) this.selectModel = this.initModel;
    this.getBrandAvatars();
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getSingleFile']),
    addNewBrand() {
      this.addBrand = true;
    },
    async getBrandAvatars() {
      Object.values(this.selectedOrgBrands).forEach(async brand => {
        const response = brand.avatar ? await this.getSingleFile(brand.avatar, true) : null;
        if (response?.success) this.avatars[brand.avatar] = response.data;
      });
    },
    filterBrandsFn(val, update) {
      update(() => {
        const newOpt = {
          id: 0,
          brand_name: 'Add New Brand',
          icon: 'icon-plus',
          action: () => this.addNewBrand()
        };
        if (val === '') {
          this.filteredBrandsOptions = Object.values(this.selectedOrgBrands).concat(newOpt);
        } else {
          const query_result = (0,functions.searchInObjectArray)(this.filteredBrandsOptions.slice(0, -1), val, ['brand_name', 'website']);
          this.filteredBrandsOptions = query_result.concat(newOpt);
        }
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Brands/SelectBrand.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(61357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(32074);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Brands/SelectBrand.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectBrandvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectBrand = (__exports__);
;








runtime_auto_import_default()(SelectBrandvue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QBadge: QBadge/* default */.Z,QDialog: QDialog/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=94.98bf89f2.js.map