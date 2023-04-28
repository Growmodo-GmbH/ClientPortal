"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[259],{

/***/ 25978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BrandsPage)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Brands/BrandsPage.vue?vue&type=template&id=4ccc85b8

const _hoisted_1 = {
  class: "font-medium text-h5 text-primary-700"
};
const _hoisted_2 = {
  class: "row q-col-gutter-md items-center justify-between"
};
const _hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-md-6 q-pa-none"
}, null, -1);
const _hoisted_4 = {
  class: "col-12 col-md-6"
};
const _hoisted_5 = {
  class: "row q-col-gutter-md items-center text-right justify-end"
};
const _hoisted_6 = {
  class: "col-12 col-sm-7 col-md-9"
};
const _hoisted_7 = {
  class: "col-auto"
};
const _hoisted_8 = {
  class: "scroll fit card-px card-pt-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_BrandsList = (0,vue_esm_bundler/* resolveComponent */.up)("BrandsList");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: "",
    class: "container"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      flat: "",
      bordered: "",
      class: "rounded card-padding-title"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-none no-min-height"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.title), 1)]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      flat: "",
      bordered: "",
      class: "rounded q-mt-lg overflow-hidden"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
        class: "card-pt card-px"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [_hoisted_3, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          modelValue: _ctx.searchQuery,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.searchQuery = $event),
          dense: "",
          outlined: "",
          clearable: "",
          debounce: "500",
          "input-class": "text-body1 font-medium text-primary",
          placeholder: "Search...",
          "clear-icon": "icon-x-close"
        }, {
          prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "icon-search-lg",
            class: "hover-text-secondary"
          })]),
          _: 1
        }, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_select, {
          dense: "",
          outlined: "",
          "emit-value": "",
          "map-options": "",
          color: "primary",
          "hide-dropdown-icon": "",
          options: _ctx.filters,
          "options-dense": false,
          modelValue: _ctx.activeFilter,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.activeFilter = $event),
          "display-value": "Filters",
          "option-value": (val, row) => val ? val.value : null,
          class: "hover-text-secondary table-select-filter",
          "transition-show": "jump-up",
          "transition-hide": "jump-down"
        }, {
          prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "icon-filter-lines",
            size: "sm",
            color: "primary",
            class: "hover-text-secondary"
          })]),
          option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)(scope.itemProps, {
            disable: scope.opt.required,
            class: ["hover-text-secondary", {
              ['hover-bg-accent']: !scope.opt.required
            }]
          }), {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(scope.opt.required || scope.selected ? 'text-secondary' : '')
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.label), 1)]),
                _: 2
              }, 1032, ["class"])]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1040, ["disable", "class"])]),
          _: 1
        }, 8, ["options", "modelValue", "option-value"])])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
        class: "q-pa-none",
        style: {
          "max-width": "100%",
          "height": "70vh",
          "max-height": "70vh",
          "min-height": "300px"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_BrandsList, {
          class: "card-pb",
          status: _ctx.activeFilter,
          search: _ctx.searchQuery,
          reverseList: true
        }, null, 8, ["status", "search"])])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/Brands/BrandsPage.vue?vue&type=template&id=4ccc85b8

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./src/components/Brands/BrandsList.vue + 4 modules
var BrandsList = __webpack_require__(73912);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Brands/BrandsPage.vue?vue&type=script&lang=js




/* harmony default export */ const BrandsPagevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'BrandsPage',
  components: {
    BrandsList: BrandsList/* default */.Z
  },
  data() {
    return {
      title: 'Brands',
      searchQuery: '',
      activeFilter: ''
    };
  },
  computed: {
    filters() {
      return [{
        label: 'All',
        value: ''
      }, {
        label: 'Archived',
        value: 'archived'
      }, {
        label: 'Active',
        value: 'active'
      }];
    },
    route_filter() {
      return this.$route.query.filter || '';
    },
    route_search() {
      return this.$route.query.search || '';
    }
  },
  watch: {
    searchQuery: {
      async handler(val) {
        const query = (0,functions.objectCopy)(this.$route.query);
        query.search = val || undefined;
        this.$router.push({
          query
        });
      }
    },
    activeFilter: {
      async handler(val) {
        const query = (0,functions.objectCopy)(this.$route.query);
        query.filter = val || undefined;
        this.$router.push({
          query
        });
      }
    }
  },
  async mounted() {
    this.$root.setMeta({
      title: this.title
    });
    if (this.route_filter && Object.values(this.filters).map(e => e.value).includes(this.route_filter)) this.activeFilter = this.route_filter;
    if (this.route_search) this.searchQuery = this.route_search;
  }
}));
;// CONCATENATED MODULE: ./src/pages/Brands/BrandsPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(69885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(81973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Brands/BrandsPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(BrandsPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const BrandsPage = (__exports__);
;











runtime_auto_import_default()(BrandsPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QCardSection: QCardSection/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=259.d290fd51.js.map