"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[539],{

/***/ 87539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuthenticationPage)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Misc/AuthenticationPage.vue?vue&type=template&id=0d1cd12d

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AuthenticationForm = (0,vue_esm_bundler/* resolveComponent */.up)("AuthenticationForm");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: "",
    class: "flex flex-center"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_AuthenticationForm, {
      onSuccess: _ctx.loginSuccess,
      onFailed: _ctx.loginFailed
    }, null, 8, ["onSuccess", "onFailed"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/Misc/AuthenticationPage.vue?vue&type=template&id=0d1cd12d

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_Authentication.vue?vue&type=template&id=6a844a98

const _hoisted_1 = {
  class: "text-h5 font-medium q-ma-none"
};
const _hoisted_2 = {
  class: "row q-col-gutter-lg"
};
const _hoisted_3 = {
  class: "col-12"
};
const _hoisted_4 = {
  class: "col-12"
};
const _hoisted_5 = {
  class: "col-12"
};
const _hoisted_6 = {
  class: "row q-col-gutter-md justify-end"
};
function Form_Authenticationvue_type_template_id_6a844a98_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GrowmodoTextIcon = (0,vue_esm_bundler/* resolveComponent */.up)("GrowmodoTextIcon");
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_InputPassword = (0,vue_esm_bundler/* resolveComponent */.up)("InputPassword");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_spinner = (0,vue_esm_bundler/* resolveComponent */.up)("q-spinner");
  const _component_q_form = (0,vue_esm_bundler/* resolveComponent */.up)("q-form");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    class: "rounded shadows-md",
    style: {
      "width": "560px",
      "max-width": "90vw"
    }
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
      class: "bg-primary text-white padding-3y padding-6x"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_GrowmodoTextIcon, {
        size: "32px",
        text: false,
        dark: true
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("h1", _hoisted_1, " Login to " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.$config?.pkjson?.productName || 'Growmodo Hub'), 1)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_form, {
      onSubmit: _ctx.loginWithPwd,
      ref: "authorization_form",
      class: "card-padding"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        outlined: "",
        autofocus: "",
        clearable: "",
        "lazy-rules": "",
        autocomplete: "",
        "hide-bottom-space": "",
        tabindex: "1",
        "clear-icon": "icon-x-close",
        placeholder: "Username or email",
        modelValue: _ctx.u_useridentity,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.u_useridentity = $event),
        "input-class": _ctx.$config?.class?.activeInput,
        rules: [val => _ctx.checker.input(!!val || '', 250)],
        onKeyup: _ctx.modKey,
        class: "rounded input-lg format-bold format-border-normal"
      }, {
        prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "sm",
          name: "icon-user-03",
          class: "hover-text-secondary"
        })]),
        _: 1
      }, 8, ["modelValue", "input-class", "rules", "onKeyup"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputPassword, {
        dense: false,
        withicon: "",
        outlined: "",
        clearable: "",
        "lazy-rules": "",
        autocomplete: "",
        "hide-bottom-space": "",
        tabindex: "2",
        placeholder: "Password",
        "clear-icon": "icon-x-close",
        modelValue: _ctx.u_password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.u_password = $event),
        "input-class": _ctx.$config?.class?.activeInput,
        rules: [val => _ctx.checker.input(!!val || '', 250)],
        onKeyup: _ctx.modKey,
        class: "rounded input-lg format-bold format-border-normal"
      }, null, 8, ["modelValue", "input-class", "rules", "onKeyup"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)({
          ['full-width']: _ctx.$q.screen.lt.sm
        })
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        outline: "",
        "no-caps": "",
        unelevated: "",
        tabindex: "3",
        ripple: {
          color: 'accent'
        },
        color: "primary",
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded button-gm-outline-dark button-lg text-body1 font-medium q-px-lg", {
          ['full-width']: _ctx.$q.screen.lt.sm
        }]),
        to: "/signup",
        disable: _ctx.decrypting.status
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Sign Up ")]),
        _: 1
      }, 8, ["class", "disable"])], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)({
          ['full-width']: _ctx.$q.screen.lt.sm
        })
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        tabindex: "3",
        ripple: {
          color: 'accent'
        },
        color: "primary",
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded slide-hover button-lg text-body1 font-medium q-px-lg", {
          ['full-width']: _ctx.$q.screen.lt.sm
        }]),
        disable: _ctx.decrypting.status,
        percentage: _ctx.decrypting.percentage,
        onClick: _ctx.submitValidation
      }, {
        loading: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.decrypting.status ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_spinner, {
          key: 0,
          size: "sm",
          class: "on-left"
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Verifying ")]),
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Log In "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "20px",
          name: "icon-arrow-narrow-right",
          class: "q-pl-xs"
        })]),
        _: 1
      }, 8, ["class", "disable", "percentage", "onClick"])], 2)])])])]),
      _: 1
    }, 8, ["onSubmit"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Forms/Form_Authentication.vue?vue&type=template&id=6a844a98

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/GrowmodoTextIcon.vue + 4 modules
var GrowmodoTextIcon = __webpack_require__(2788);
// EXTERNAL MODULE: ./src/components/Helpers/InputPassword.vue + 4 modules
var InputPassword = __webpack_require__(41620);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_Authentication.vue?vue&type=script&lang=js






/* harmony default export */ const Form_Authenticationvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'AuthenticationForm',
  components: {
    GrowmodoTextIcon: GrowmodoTextIcon/* default */.Z,
    InputPassword: InputPassword/* default */.Z
  },
  props: {
    allowSignup: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      checker: functions.checker,
      loginAnimate: null,
      u_useridentity: null,
      u_password: null,
      interval: null,
      login_response: null,
      decrypting: {
        status: false,
        percentage: 0
      }
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgAccountPending', 'selectedOrgIsCancelled'])
  },
  watch: {
    login_response: {
      async handler(val) {
        if (val) {
          (0,functions.tryClearInterval)(this.loginAnimate);
          setTimeout(() => {
            this.decrypting.status = false;
          }, 500);
        }
      }
    }
  },
  emits: ['verify_email', 'success', 'failed', 'loading', 'pending', 'onSignup', 'cancelled', 'expired'],
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['loginWithPassword', 'isEmailVerified', 'onSignupStep']),
    submitValidation() {
      this.$refs?.authorization_form?.submit?.();
    },
    async loginWithPwd() {
      this.loginLoading();
      this.login_response = null;
      const data = {
        username: this.u_useridentity,
        password: this.u_password
      };
      this.$emit('loading', data);
      // Send Request to API
      const response = await this.loginWithPassword(data);
      this.login_response = response || {};
      // Emit Login Response
      const email_verified = this.isEmailVerified(this.login_response);
      const onSignup = this.onSignupStep(this.login_response.data?.user?.signup_step);
      if (this.login_response?.success) {
        if (this.selectedOrgIsCancelled) {
          this.$emit('cancelled', this.login_response?.data);
        } else if (this.$root.selectedOrgIsExpired) {
          this.$emit('expired', this.login_response?.data);
        } else if (this.selectedOrgAccountPending) {
          this.$emit('pending', this.login_response?.data);
        } else if (!email_verified) {
          this.$emit('verify_email', this.login_response?.data?.user);
        } else if (onSignup) {
          this.$emit('onSignup', onSignup);
        } else {
          this.$emit('success', this.login_response || {});
        }
      } else {
        this.$emit('failed', this.login_response || {});
      }
    },
    async loginLoading(callback) {
      this.decrypting.status = true;
      this.loginAnimate = setInterval(() => {
        this.decrypting.percentage += Math.floor(Math.random() * 8 + 10);
        if (this.decrypting.percentage >= 100) {
          if (callback) callback();
          this.decrypting.status = false;
          (0,functions.tryClearInterval)(this.loginAnimate);
        }
      }, 1000);
    },
    /**
     * Modify Enter Key for Inputs
     * @param {KeyboardEvent} evt event object
     */
    async modKey(evt) {
      (0,functions.defaultModKey)(evt, this.submitValidation);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Forms/Form_Authentication.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(81973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8326);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(13902);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Forms/Form_Authentication.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Form_Authenticationvue_type_script_lang_js, [['render',Form_Authenticationvue_type_template_id_6a844a98_render]])

/* harmony default export */ const Form_Authentication = (__exports__);
;








runtime_auto_import_default()(Form_Authenticationvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z,QSpinner: QSpinner/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Misc/AuthenticationPage.vue?vue&type=script&lang=js



/* harmony default export */ const AuthenticationPagevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'AuthenticationPage',
  data() {
    return {
      title: 'Authentication'
    };
  },
  components: {
    AuthenticationForm: Form_Authentication
  },
  async mounted() {
    this.$root.setMeta({
      title: this.title
    });
  },
  methods: {
    loginSuccess(res) {
      // Success
      this.redirectOnLogin();
      this.$q.notify({
        icon: 'icon-check-circle-broken',
        message: 'Login Success',
        timeout: 500
      });
    },
    loginFailed(res) {
      // Failed
      this.$q.notify({
        message: 'Login Failed',
        icon: 'icon-alert-circle',
        iconColor: 'negative',
        timeout: 1000
      });
    },
    redirectOnLogin() {
      this.$router.push(this.$route.query.redirect || '/');
    }
  }
}));
;// CONCATENATED MODULE: ./src/pages/Misc/AuthenticationPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(69885);
;// CONCATENATED MODULE: ./src/pages/Misc/AuthenticationPage.vue




;
const AuthenticationPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AuthenticationPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const AuthenticationPage = (AuthenticationPage_exports_);
;

runtime_auto_import_default()(AuthenticationPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=539.b1290077.js.map