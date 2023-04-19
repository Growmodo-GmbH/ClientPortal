"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[806],{

/***/ 97806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Form_ServerConfig)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_ServerConfig.vue?vue&type=template&id=745950e2

const _hoisted_1 = {
  class: "row q-pt-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_slide_transition = (0,vue_esm_bundler/* resolveComponent */.up)("q-slide-transition");
  const _component_q_space = (0,vue_esm_bundler/* resolveComponent */.up)("q-space");
  const _component_q_spinner_ball = (0,vue_esm_bundler/* resolveComponent */.up)("q-spinner-ball");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_form = (0,vue_esm_bundler/* resolveComponent */.up)("q-form");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    style: {
      "width": "500px",
      "max-width": "80vw",
      "border-radius": "15px"
    }
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
      class: "bg-secondary text-white padding-3y padding-6x"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        size: "md",
        name: "icon-settings-02"
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Server Configuration")]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_form, {
      onSubmit: _ctx.submitSettings,
      ref: _ctx.form_conf.ref,
      class: "card-padding q-gutter-xs"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        outlined: "",
        autofocus: "",
        clearable: "",
        color: "secondary",
        placeholder: "API Base URL",
        "input-class": _ctx.form_conf.inputclass,
        modelValue: _ctx.server.host,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.server.host = $event),
        rules: [val => _ctx.checker.input({
          type: 'url',
          value: val,
          nomsg: true
        }, 500)]
      }, {
        prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-server-05",
          class: "hover-text-secondary"
        })]),
        _: 1
      }, 8, ["input-class", "modelValue", "rules"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_slide_transition, {
        duration: 1000
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
          class: "q-pt-md"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            class: "q-my-sm hover-text-secondary"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "icon-shield-tick",
                size: "sm"
              })]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Secure Server (HTTPS)")]),
                _: 1
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                caption: "",
                lines: "1"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("All requests are encrypted")]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 512), [[vue_esm_bundler/* vShow */.F8, _ctx.input_host_info.api.withSSL]]), (0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            class: "q-my-sm hover-text-secondary"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "icon-server-01",
                size: "sm"
              })]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.input_host_info.api.host), 1)]),
                _: 1
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                caption: "",
                lines: "1"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Hostname")]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 512), [[vue_esm_bundler/* vShow */.F8, _ctx.input_host_info.api.host]]), (0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            class: "q-my-sm hover-text-secondary"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "icon-cube-01",
                size: "sm"
              })]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.input_host_info.api.port), 1)]),
                _: 1
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                caption: "",
                lines: "1"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Port")]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 512), [[vue_esm_bundler/* vShow */.F8, _ctx.input_host_info.api.port]])]),
          _: 1
        }, 512), [[vue_esm_bundler/* vShow */.F8, _ctx.input_host_info.success]])]),
        _: 1
      }), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "secondary",
        class: "rounded slide-hover text-body1 font-medium button-md q-px-md",
        loading: _ctx.validating.status,
        disable: !_ctx.input_host_info.success || _ctx.validating.status,
        percentage: _ctx.validating.percentage,
        onClick: _ctx.submitValidation,
        style: {
          "width": "150px"
        }
      }, {
        loading: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_spinner_ball, {
          size: "xs",
          class: "on-left",
          style: {
            "animation-play-state": "paused"
          }
        }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Verifying ")]),
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Validate ")]),
        _: 1
      }, 8, ["loading", "disable", "percentage", "onClick"])])]),
      _: 1
    }, 8, ["onSubmit"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Forms/Form_ServerConfig.vue?vue&type=template&id=745950e2

// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(19302);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_ServerConfig.vue?vue&type=script&lang=js




/* harmony default export */ const Form_ServerConfigvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'ServerSetting',
  data() {
    return {
      $q: (0,use_quasar/* default */.Z)(),
      checker: functions.checker,
      server: {
        host: null
      },
      loginAnimate: null,
      interval: null,
      request_response: null,
      validating: {
        status: false,
        percentage: 0
      },
      form_conf: {
        ref: 'update_server_form',
        inputclass: 'form_active_input'
      }
    };
  },
  emits: ['success', 'failed', 'close'],
  watch: {
    request_response: {
      async handler(val) {
        if (val) {
          (0,functions.tryClearInterval)(this.loginAnimate);
          setTimeout(() => {
            this.validating.status = false;
          }, 500);
        }
      }
    }
  },
  computed: {
    input_host_info() {
      // Analyze Server
      try {
        const url = new URL(this.server.host);
        const withSSL = Boolean(url.protocol.includes('https') || 0);
        const api = {
          withSSL,
          protocol: url.protocol,
          host: url.hostname,
          port: url.port ? Number(url.port) : ''
        };
        return {
          success: api.host ? 1 : 0,
          api,
          url
        };
      } catch (e) {
        return {
          success: 0,
          api: {},
          url: {}
        };
      }
    }
  },
  methods: {
    submitValidation() {
      const elem = this.$refs?.[this.form_conf.ref];
      if (elem) elem.submit();
    },
    async submitSettings() {
      this.processAnimation();
      this.request_response = null;
      // Send Request to API
      const response = await this.testServerHost();
      this.request_response = response?.data || {};
      const success = this.request_response.success;
      if (success) {
        if (this.server.host?.endsWith('/')) this.server.host = this.server.host.slice(0, -1);
        try {
          const {
            success,
            api,
            url
          } = this.input_host_info;
          if (success) {
            // Save Settings
            fn_store/* default.setAPIHost */.Z.setAPIHost(this.server.host);
          } else {
            // unexpected error
            this.$emit('failed', this.request_response, this.server);
            return;
          }
        } catch (e) {
          if (true) console.error('Failed Saving Settings:', e.message);
          this.request_response = {
            success: 0,
            error: {
              message: 'Failed Saving Settings'
            }
          };
        }
      }
      // Emit Response
      if (true) console[success ? 'info' : 'error']('API Test', success ? 'Success' : 'Failed', ':', this.request_response, this.server);
      this.$emit(success ? 'success' : 'failed', this.request_response, this.server);
    },
    async testServerHost() {
      try {
        const url = `${this.server.host}/test-connect`;
        return await this.$api.get(url, {
          withCredentials: false
        });
      } catch (e) {
        if (true) console.error('Server Error:', e.message);
        return {
          success: 0,
          message: e.message
        };
      }
    },
    async processAnimation(callback) {
      this.validating.status = true;
      this.loginAnimate = setInterval(() => {
        this.validating.percentage += Math.floor(Math.random() * 8 + 10);
        if (this.validating.percentage >= 100) {
          if (callback) callback();
          this.validating.status = false;
          (0,functions.tryClearInterval)(this.loginAnimate);
        }
      }, 100000);
    }
  },
  beforeUnmount() {
    (0,functions.tryClearInterval)(this.loginAnimate);
    this.$emit('close');
  }
}));
;// CONCATENATED MODULE: ./src/components/Forms/Form_ServerConfig.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(81973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8326);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-transition/QSlideTransition.js
var QSlideTransition = __webpack_require__(69003);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(13246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(90136);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerBall.js
var QSpinnerBall = __webpack_require__(25304);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Forms/Form_ServerConfig.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Form_ServerConfigvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Form_ServerConfig = (__exports__);
;














runtime_auto_import_default()(Form_ServerConfigvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QToolbar: QToolbar/* default */.Z,QIcon: QIcon/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QSlideTransition: QSlideTransition/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QSpace: QSpace/* default */.Z,QBtn: QBtn/* default */.Z,QSpinnerBall: QSpinnerBall/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=806.93694515.js.map