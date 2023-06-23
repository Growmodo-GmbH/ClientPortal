"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[321],{

/***/ 96321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TaskOverview)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Brands/TaskOverview.vue?vue&type=template&id=ffec7104

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TaskProjectOverview = (0,vue_esm_bundler/* resolveComponent */.up)("TaskProjectOverview");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "bg-white"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_TaskProjectOverview, {
      itemType: "task",
      hashId: _ctx.hashId,
      brandId: _ctx.brandId,
      itemId: _ctx.itemId,
      noTitleClick: _ctx.noTitleClick
    }, null, 8, ["hashId", "brandId", "itemId", "noTitleClick"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/Brands/TaskOverview.vue?vue&type=template&id=ffec7104

// EXTERNAL MODULE: ./src/components/Requests/TaskProjectOverview.vue + 4 modules
var TaskProjectOverview = __webpack_require__(77077);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Brands/TaskOverview.vue?vue&type=script&lang=js


/* harmony default export */ const TaskOverviewvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'TaskOverview',
  components: {
    TaskProjectOverview: TaskProjectOverview/* default */.Z
  },
  data() {
    return {
      title: 'Task Overview',
      noTitleClick: false
    };
  },
  computed: {
    hashId() {
      return this.$route.hash.slice(1);
    },
    brandId() {
      return this.$route.params?.brandId;
    },
    itemId() {
      return this.$route.params?.taskId;
    }
  },
  async mounted() {
    this.$root.setMeta({
      title: this.title
    });
  }
}));
;// CONCATENATED MODULE: ./src/pages/Brands/TaskOverview.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(69885);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Brands/TaskOverview.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TaskOverviewvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const TaskOverview = (__exports__);
;

runtime_auto_import_default()(TaskOverviewvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=321.3d4e324c.js.map