"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[620],{

/***/ 26620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RedirectConfirmation)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/RedirectConfirmation.vue?vue&type=template&id=37109247

const _hoisted_1 = {
  key: 0,
  class: "absolute-top-right"
};
const _hoisted_2 = {
  class: "text-h5 font-demi-bold letter-space-normal"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "rounded q-pa-sm"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "bg-transparent q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: _ctx.formatPlatformIconSrc(_ctx.options?.icon),
          size: "xl"
        }, null, 8, ["name"]), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-pt-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.options?.message), 1)]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "row q-gutter-sm q-py-md"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        outline: "",
        "no-caps": "",
        class: "col button-gm-outline-dark text-body1 font-medium"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Cancel ")]),
        _: 1
      })), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "col slide-hover text-body1 font-medium",
        href: _ctx.options?.url
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Okay "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "icon-arrow-narrow-right",
          size: "20px",
          class: "q-pl-xs"
        })]),
        _: 1
      }, 8, ["href"])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/RedirectConfirmation.vue?vue&type=template&id=37109247

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/RedirectConfirmation.vue?vue&type=script&lang=js



/* harmony default export */ const RedirectConfirmationvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'RedirectConfirmation',
  props: {
    noclose: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      goHome: false,
      prevTitle: document.title
    };
  },
  async mounted() {
    this.prevTitle = this.$root?.config?.metaData?.title;
    if (this.options?.title) this.$root.setMeta({
      title: this.options?.title
    });
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['formatPlatformIconSrc'])
  },
  beforeUnmount() {
    if (!this.goHome) {
      this.$root.setMeta({
        title: this.prevTitle
      });
    } else {
      this.$root.setMeta({
        title: 'Home'
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Dialogs/RedirectConfirmation.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(62146);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Dialogs/RedirectConfirmation.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RedirectConfirmationvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const RedirectConfirmation = (__exports__);
;





runtime_auto_import_default()(RedirectConfirmationvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(RedirectConfirmationvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=620.b4ce45b0.js.map