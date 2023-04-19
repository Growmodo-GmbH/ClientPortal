"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[722],{

/***/ 84722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=3b4e43b9


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DrawerMain = (0,vue_esm_bundler/* resolveComponent */.up)("DrawerMain");
  const _component_q_pull_to_refresh = (0,vue_esm_bundler/* resolveComponent */.up)("q-pull-to-refresh");
  const _component_q_fab_action = (0,vue_esm_bundler/* resolveComponent */.up)("q-fab-action");
  const _component_q_fab = (0,vue_esm_bundler/* resolveComponent */.up)("q-fab");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_page_sticky = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-sticky");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_router_view = (0,vue_esm_bundler/* resolveComponent */.up)("router-view");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_OnBoarding = (0,vue_esm_bundler/* resolveComponent */.up)("OnBoarding");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_Dialog_UpgradeYourPlan = (0,vue_esm_bundler/* resolveComponent */.up)("Dialog_UpgradeYourPlan");
  const _component_RedirectConfirmation = (0,vue_esm_bundler/* resolveComponent */.up)("RedirectConfirmation");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "LHh lpR lFf"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DrawerMain), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, {
      class: "bg-color"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_router_view, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(({
          Component
        }) => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_pull_to_refresh, {
          onRefresh: _ctx.$root.refresh,
          color: "secondary",
          icon: "icon-refresh-cw-01",
          "bg-color": "translucent-light shadows-lg"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)((0,vue_esm_bundler/* resolveDynamicComponent */.LL)(Component)))]),
          _: 2
        }, 1032, ["onRefresh"]), _ctx.$DEV_MODE ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page_sticky, {
          key: 0,
          style: {
            "z-index": "10"
          },
          offset: [10, 25],
          position: "bottom-right"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_fab, {
            flat: "",
            unelevated: "",
            direction: "up",
            modelValue: _ctx.devTools,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.devTools = $event),
            padding: "sm",
            color: "primary",
            icon: "icon-growmodo",
            "vertical-actions-align": "right",
            class: "hover-bg-accent"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.$DEV ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_fab_action, {
              key: 0,
              "label-position": "left",
              color: "primary",
              onClick: _ctx.sendTestNotif,
              label: "Test Notif",
              class: "rounded"
            }, null, 8, ["onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$DEV ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_fab_action, {
              key: 1,
              "label-position": "left",
              color: "primary",
              onClick: _cache[0] || (_cache[0] = $event => _ctx.$router.push('/404')),
              label: "404 Page",
              class: "rounded"
            })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_fab_action, {
              "label-position": "left",
              color: "primary",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.userNotOnBoard = true),
              label: "Onboarding",
              class: "rounded"
            })]),
            _: 1
          }, 8, ["modelValue"])), [[_directive_ripple, {
            color: 'accent'
          }]]), !_ctx.devTools ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_tooltip_pro, {
            key: 0,
            anchor: "center left",
            self: "center right"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Test Views ")]),
            _: 1
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 1
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$q.screen.width <= 600 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page_sticky, {
          key: 1,
          position: "bottom-left",
          offset: [10, 25],
          style: {
            "z-index": "9"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "sm",
            icon: "icon-grid-01",
            ripple: {
              color: 'accent'
            },
            class: "bg-primary text-white hover-bg-secondary q-pa-sm",
            onClick: _cache[3] || (_cache[3] = $event => _ctx.$root.toggleMainDrawer())
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
            delay: 150,
            offset: [10, 10],
            self: "center right",
            anchor: "center left"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.$root.mainDrawer ? 'Hide' : 'Show') + " Menu ", 1)]),
            _: 1
          })]),
          _: 1
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: _ctx.startOnBoarding,
      maximized: _ctx.startOnBoarding,
      modelValue: _ctx.userNotOnBoard,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.userNotOnBoard = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_OnBoarding, {
        noclose: "",
        onStart: _ctx.initializeOnBoarding,
        class: "rounded",
        style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.startOnBoarding ? '' : 'width: 980px; max-width: 80vw'),
        onExit: _cache[4] || (_cache[4] = () => {
          _ctx.userNotOnBoard = false;
          _ctx.startOnBoarding = false;
        })
      }, null, 8, ["onStart", "style"])]),
      _: 1
    }, 8, ["persistent", "maximized", "modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.$root.dialogRequestUpgrade,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.$root.dialogRequestUpgrade = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)({
        width: "375px"
      }, _ctx.$root.messagesDialogs?.requestUpgrade), null, 16)]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.$root.upgradePlan,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.$root.upgradePlan = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_Dialog_UpgradeYourPlan, {
        noclose: "",
        style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
          "width": "700px"
        }, _ctx.$q.screen.xs && _ctx.$q.screen.lt.sm ? 'max-width: 95vw;' : 'max-width: 80vw']),
        onRequestChanges: _cache[7] || (_cache[7] = $event => _ctx.$root.upgradePlan = false)
      }, null, 8, ["style"])]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.$root.redirect.confirmation,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.$root.redirect.confirmation = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_RedirectConfirmation, (0,vue_esm_bundler/* mergeProps */.dG)({
        options: _ctx.$root.redirect
      }, {
        style: {
          "width": "350px"
        }
      }), null, 16)]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=template&id=3b4e43b9

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__(5917);
// EXTERNAL MODULE: ./src/assets/scripts/notification.js
var notification = __webpack_require__(2641);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/stores/app/index.js + 3 modules
var app = __webpack_require__(39);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js






/* harmony default export */ const MainLayoutvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'MainLayout',
  components: {
    DrawerMain: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(386)]).then(__webpack_require__.bind(__webpack_require__, 82386))),
    RedirectConfirmation: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 620).then(__webpack_require__.bind(__webpack_require__, 26620))),
    Dialog_UpgradeYourPlan: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(634)]).then(__webpack_require__.bind(__webpack_require__, 86634))),
    OnBoarding: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(175)]).then(__webpack_require__.bind(__webpack_require__, 92175)))
  },
  data() {
    return {
      devTools: false,
      userNotOnBoard: false,
      startOnBoarding: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'activeOrgID']),
    clientOnboarded() {
      return this.user?.onboarded ? true : false;
    }
  },
  async created() {
    this.$router.beforeEach((to, from, next) => {
      next();
      LoadingBar/* default.start */.Z.start();
    });
    this.$router.afterEach((to, from, failure) => {
      setTimeout(() => {
        LoadingBar/* default.stop */.Z.stop();
      }, 500);
    });

    // Check if user is onboarded
    setTimeout(() => {
      this.userNotOnBoard = this.isOrgOwner() && !this.clientOnboarded ? true : false;
    }, 1500);
  },
  async mounted() {
    await this.init_LoggedIn();
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(app/* default */.Z, ['init_LoggedIn']),
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['updateAccount', 'isOrgOwner']),
    onBoarded() {
      this.updateAccount({
        onBoard: true
      });
    },
    initializeOnBoarding() {
      this.startOnBoarding = true;
    },
    sendTestNotif() {
      (0,notification/* displayNotification */.d)('Test Notification', {
        body: 'Notif click event will refresh the page.'
      }).then(notif => {
        notif.onclick = () => {
          window.location.href = window.location.href;
        };
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(20249);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(12133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/pull-to-refresh/QPullToRefresh.js
var QPullToRefresh = __webpack_require__(90699);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page-sticky/QPageSticky.js + 1 modules
var QPageSticky = __webpack_require__(30627);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js
var QFab = __webpack_require__(19361);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFabAction.js
var QFabAction = __webpack_require__(10935);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(32074);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__(51722);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (__exports__);
;








runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPullToRefresh: QPullToRefresh/* default */.Z,QPageSticky: QPageSticky/* default */.Z,QFab: QFab/* default */.Z,QFabAction: QFabAction/* default */.Z,QBtn: QBtn/* default */.Z,QDialog: QDialog/* default */.Z});runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=722.cb27a808.js.map