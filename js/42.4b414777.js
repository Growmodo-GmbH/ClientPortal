"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[42],{

/***/ 72042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectOverview)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Brands/ProjectOverview.vue?vue&type=template&id=04327c86

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TaskProjectOverview = (0,vue_esm_bundler/* resolveComponent */.up)("TaskProjectOverview");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "bg-white"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_TaskProjectOverview, {
      itemType: "project",
      hashId: _ctx.hashId,
      brandId: _ctx.brandId,
      itemId: _ctx.itemId,
      noTitleClick: _ctx.noTitleClick
    }, null, 8, ["hashId", "brandId", "itemId", "noTitleClick"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/Brands/ProjectOverview.vue?vue&type=template&id=04327c86

// EXTERNAL MODULE: ./src/components/Requests/TaskProjectOverview.vue + 4 modules
var TaskProjectOverview = __webpack_require__(51626);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Brands/ProjectOverview.vue?vue&type=script&lang=js


/* harmony default export */ const ProjectOverviewvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'ProjectOverview',
  components: {
    TaskProjectOverview: TaskProjectOverview/* default */.Z
  },
  data() {
    return {
      title: 'Project Overview',
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
      return this.$route.params?.projectId;
    }
  },
  async mounted() {
    this.$root.setMeta({
      title: this.title
    });
  }
}));
;// CONCATENATED MODULE: ./src/pages/Brands/ProjectOverview.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(69885);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Brands/ProjectOverview.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ProjectOverviewvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const ProjectOverview = (__exports__);
;

runtime_auto_import_default()(ProjectOverviewvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=42.4b414777.js.map