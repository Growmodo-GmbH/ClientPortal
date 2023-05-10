"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[966],{

/***/ 91966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CheckoutPage)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Misc/CheckoutPage.vue?vue&type=template&id=4a62a280

const _hoisted_1 = {
  class: "fit flex flex-center q-pl-xl"
};
const _hoisted_2 = {
  class: "absolute-top-left q-mt-lg q-pl-md"
};
const _hoisted_3 = {
  class: "text-h3 font-medium"
};
const _hoisted_4 = {
  class: "text-subtitle1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_img = (0,vue_esm_bundler/* resolveComponent */.up)("q-img");
  const _component_q_drawer = (0,vue_esm_bundler/* resolveComponent */.up)("q-drawer");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_spinner_hourglass = (0,vue_esm_bundler/* resolveComponent */.up)("q-spinner-hourglass");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  return _ctx.isValidStatus ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    key: 0,
    view: "LHh lpR lFf"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      "show-if-above": "",
      modelValue: _ctx.rightDrawer,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.rightDrawer = $event),
      side: "right",
      class: "bg-color text-primary",
      width: 630,
      breakpoint: 1080
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_img, {
        src: "/images/ScreenMockup.png",
        class: "q-ml-xl overflow-hidden",
        "img-class": "border-add border-primary border-xl rounded-left",
        "img-style": {
          borderWidth: '5px',
          borderRight: '0'
        },
        loading: "lazy",
        style: {
          "height": "80vh"
        },
        "spinner-color": "secondary",
        position: "0 50%"
      })])]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: "",
        class: "container flex flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          outline: "",
          "no-caps": "",
          unelevated: "",
          ripple: {
            color: 'accent'
          },
          color: "primary",
          class: "rounded slide-hover full-width text-body1 font-medium button-lg",
          to: "/",
          onClick: (0,vue_esm_bundler/* withModifiers */.iM)(_ctx.back2home, ["prevent"])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "sm",
            name: "icon-arrow-narrow-left",
            class: "q-pr-xs"
          }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Back to Growmodo ")]),
          _: 1
        }, 8, ["onClick"])]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.isCanceledStatus ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
              key: 0,
              size: "5em",
              name: "icon-alert-triangle",
              color: "negative"
            })) : _ctx.tokenFailed ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
              key: 1,
              size: "5em",
              name: "icon-alert-circle",
              color: "negative"
            })) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_spinner_hourglass, {
              key: 2,
              color: "secondary",
              size: "5em"
            }))]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.isCanceledStatus ? 'Checkout cancelled' : _ctx.tokenFailed ? 'Token Expired' : 'Verifying status...'), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.message), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true);
}
;// CONCATENATED MODULE: ./src/pages/Misc/CheckoutPage.vue?vue&type=template&id=4a62a280

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Misc/CheckoutPage.vue?vue&type=script&lang=js





/* harmony default export */ const CheckoutPagevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CheckoutStatus',
  data() {
    return {
      rightDrawer: false,
      tokenFailed: false,
      message: `Checking your account's subscription status.`
    };
  },
  computed: {
    checkoutStatus() {
      return this.$route.params?.status;
    },
    isSuccessStatus() {
      return this.checkoutStatus.toLowerCase() == 'success';
    },
    isCanceledStatus() {
      return this.checkoutStatus.toLowerCase() == 'cancelled';
    },
    isValidStatus() {
      return this.isSuccessStatus || this.isCanceledStatus;
    },
    paymentToken() {
      return this.$route.query?.token;
    }
  },
  mounted() {
    if (!this.isValidStatus) {
      this.$router.replace('/');
    } else {
      if (this.isSuccessStatus && this.paymentToken) {
        this.testLoginToken();
      } else {
        this.message = 'Checkout has been cancelled.';
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['loginWithPaymentToken']),
    async testLoginToken() {
      if (!this.paymentToken) return;
      const response = await this.loginWithPaymentToken(this.paymentToken);
      let message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        if (!message) message = 'Payment token has been verified.';
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message
        });
        this.$router.push('/');
      } else {
        if (!message) message = 'Invalid payment token!';
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message
        });
        this.tokenFailed = true;
      }
      this.message = message;
    },
    back2home() {
      window.location.href = '/';
    }
  }
}));
;// CONCATENATED MODULE: ./src/pages/Misc/CheckoutPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(20249);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(10906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js
var QImg = __webpack_require__(91487);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(12133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(69885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerHourglass.js
var QSpinnerHourglass = __webpack_require__(96335);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Misc/CheckoutPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CheckoutPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const CheckoutPage = (__exports__);
;










runtime_auto_import_default()(CheckoutPagevue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QDrawer: QDrawer/* default */.Z,QImg: QImg/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QSpinnerHourglass: QSpinnerHourglass/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=966.a7a028d1.js.map