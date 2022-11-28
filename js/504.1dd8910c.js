"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[504],{

/***/ 52942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=6d754066

const _hoisted_1 = {
  class: "text-caption text-grey-9 no-pointer-events"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DrawerMain = (0,vue_esm_bundler/* resolveComponent */.up)("DrawerMain");
  const _component_q_pull_to_refresh = (0,vue_esm_bundler/* resolveComponent */.up)("q-pull-to-refresh");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_page_sticky = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-sticky");
  const _component_router_view = (0,vue_esm_bundler/* resolveComponent */.up)("router-view");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_OnBoarding = (0,vue_esm_bundler/* resolveComponent */.up)("OnBoarding");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_RequestOptions = (0,vue_esm_bundler/* resolveComponent */.up)("RequestOptions");
  const _component_DirectoryLayout = (0,vue_esm_bundler/* resolveComponent */.up)("DirectoryLayout");
  const _component_FormTaskCreate = (0,vue_esm_bundler/* resolveComponent */.up)("FormTaskCreate");
  const _component_FormProjectCreate = (0,vue_esm_bundler/* resolveComponent */.up)("FormProjectCreate");
  const _component_Dialog_UpgradeYourPlan = (0,vue_esm_bundler/* resolveComponent */.up)("Dialog_UpgradeYourPlan");
  const _component_RedirectConfirmation = (0,vue_esm_bundler/* resolveComponent */.up)("RedirectConfirmation");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
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
          onRefresh: _ctx.refresh,
          color: "secondary",
          icon: "icon-refresh-cw-01",
          "bg-color": "translucent-light shadow-ui"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)((0,vue_esm_bundler/* resolveDynamicComponent */.LL)(Component)))]),
          _: 2
        }, 1032, ["onRefresh"]), _ctx.$q.screen.width <= 600 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page_sticky, {
          key: 0,
          position: "bottom-right",
          offset: [18, 18],
          style: {
            "z-index": "9"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            fab: "",
            flat: "",
            icon: "icon-grid-01",
            ripple: {
              color: 'accent'
            },
            class: "bg-primary text-white hover-bg-secondary",
            onClick: _cache[0] || (_cache[0] = $event => _ctx.$root.toggleMainDrawer())
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
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.isDebugging ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page_sticky, {
          key: 1,
          position: "bottom-right",
          offset: [5, 2],
          style: {
            "z-index": "9"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.$config.pkjson?.productName) + " v" + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.$config.pkjson?.version), 1)]),
          _: 1
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: _ctx.startOnBoarding,
      maximized: _ctx.startOnBoarding,
      modelValue: _ctx.userNotOnBoard,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.userNotOnBoard = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_OnBoarding, {
        noclose: "",
        onStart: _ctx.initializeOnBoarding,
        class: "rounded",
        style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.startOnBoarding ? '' : 'width: 980px; max-width: 80vw'),
        onExit: _cache[1] || (_cache[1] = () => {
          _ctx.userNotOnBoard = false;
          _ctx.startOnBoarding = false;
        })
      }, null, 8, ["onStart", "style"])]),
      _: 1
    }, 8, ["persistent", "maximized", "modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.$root.dialogRequestUpgrade,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.$root.dialogRequestUpgrade = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)({
        width: "375px"
      }, _ctx.$root.messagesDialogs?.requestUpgrade), null, 16)]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      "full-width": "",
      "full-height": "",
      maximized: false,
      modelValue: _ctx.$root.request.new,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.$root.request.new = $event),
      "transition-show": "fade",
      "transition-hide": "fade",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_RequestOptions, {
        class: "rounded",
        noclose: false
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      "full-width": "",
      "full-height": "",
      modelValue: _ctx.$root.request.task,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.$root.request.task = $event),
      "transition-show": "fade",
      "transition-hide": "fade",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DirectoryLayout, {
        class: "rounded",
        title: "Task Directory",
        directoryType: "task"
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      "full-width": "",
      "full-height": "",
      modelValue: _ctx.$root.request.project,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.$root.request.project = $event),
      "transition-show": "fade",
      "transition-hide": "fade",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DirectoryLayout, {
        class: "rounded",
        title: "Project Directory",
        directoryType: "project"
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      maximized: "",
      persistent: "",
      "full-width": "",
      "full-height": "",
      modelValue: _ctx.$root.task.new,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.$root.task.new = $event),
      "transition-show": "fade",
      "transition-hide": "fade",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FormTaskCreate, {
        noclose: ""
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      maximized: "",
      persistent: "",
      "full-width": "",
      "full-height": "",
      modelValue: _ctx.$root.project.new,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.$root.project.new = $event),
      "transition-show": "fade",
      "transition-hide": "fade",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FormProjectCreate, {
        noclose: ""
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.$root.upgradePlan,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => _ctx.$root.upgradePlan = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_Dialog_UpgradeYourPlan, {
        noclose: "",
        style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
          "width": "640px"
        }, _ctx.$q.screen.xs && _ctx.$q.screen.lt.sm ? 'max-width: 95vw;' : 'max-width: 80vw']),
        onNextBtnClick: _cache[9] || (_cache[9] = $event => _ctx.$root.upgradePlan = false)
      }, null, 8, ["style"])]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.$root.redirect.confirmation,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.$root.redirect.confirmation = $event),
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
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=template&id=6d754066

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__(5917);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Drawer_Main.vue?vue&type=template&id=63ebe9f8

const Drawer_Mainvue_type_template_id_63ebe9f8_hoisted_1 = {
  class: "flex flex-center q-mt-lg"
};
const _hoisted_2 = {
  class: "flex flex-center q-pt-lg q-pb-sm"
};
const _hoisted_3 = {
  class: "flex flex-center q-my-md"
};
function Drawer_Mainvue_type_template_id_63ebe9f8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GrowmodoTextIcon = (0,vue_esm_bundler/* resolveComponent */.up)("GrowmodoTextIcon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_scroll_area = (0,vue_esm_bundler/* resolveComponent */.up)("q-scroll-area");
  const _component_q_drawer = (0,vue_esm_bundler/* resolveComponent */.up)("q-drawer");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_drawer, {
    mini: "",
    bordered: "",
    "show-if-above": "",
    side: "left",
    behavior: "desktop",
    class: "drawer-main",
    modelValue: _ctx.$root.mainDrawer,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.$root.mainDrawer = $event),
    breakpoint: _ctx.mainDrawerBreakpoint,
    "mini-width": _ctx.$root.mainDrawerCfg.mini,
    width: _ctx.$root.mainDrawerCfg.width
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
      class: "fit"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Drawer_Mainvue_type_template_id_63ebe9f8_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          clickable: "",
          to: "/",
          class: "bg-none text-primary rounded bg-transparent"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
            avatar: ""
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_GrowmodoTextIcon, {
              size: "32px",
              text: false
            })]),
            _: 1
          })]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          clickable: "",
          class: "menu-item cursor-pointer text-primary bg-none",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.$root.toggleRequest())
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
            avatar: ""
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
              rounded: "",
              size: "44px",
              class: "rounded text-white bg-primary"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "icon-plus",
                color: "white",
                size: "sm",
                class: "q-pa-xs",
                style: {
                  "color": "white !important"
                }
              })]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
              offset: [8, 8],
              self: "center left",
              anchor: "center right"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Add a Request ")]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.essentialLinks, item => {
          return (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: "",
            key: item,
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["menu-item q-my-sm", item.class]),
            to: item.link,
            href: item.href,
            onClick: item.action
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [item.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
              key: 0,
              avatar: ""
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "sm",
                name: item.icon,
                class: "color-primary2"
              }, null, 8, ["name"])]),
              _: 2
            }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.title), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
              offset: [8, 8],
              self: "center left",
              anchor: "center right"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.title), 1)]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1032, ["class", "to", "href", "onClick"])), [[_directive_ripple, void 0, "secondary"]]);
        }), 128))]), (0,vue_esm_bundler/* createElementVNode */._)("div", {
          class: "flex flex-center q-mb-md",
          style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`padding-top: calc(100vh - ${_ctx.settingsPaddingTop}px)`)
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          clickable: "",
          class: "menu-item settings",
          to: _ctx.$route.params?.settingsTab ? undefined : '/settings',
          onClick: _cache[1] || (_cache[1] = $event => _ctx.$root.toggleSettingsDrawer())
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
            avatar: ""
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              size: "sm",
              name: "icon-settings-02",
              class: "color-primary2"
            })]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Account Settings")]),
            _: 1
          })]),
          _: 1
        }, 8, ["to"])], 4)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "breakpoint", "mini-width", "width"]);
}
;// CONCATENATED MODULE: ./src/components/Drawer_Main.vue?vue&type=template&id=63ebe9f8

// EXTERNAL MODULE: ./src/components/GrowmodoTextIcon.vue + 4 modules
var GrowmodoTextIcon = __webpack_require__(70683);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/open-url.js
var open_url = __webpack_require__(33752);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Drawer_Main.vue?vue&type=script&lang=js





/* harmony default export */ const Drawer_Mainvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DrawerMain',
  components: {
    GrowmodoTextIcon: GrowmodoTextIcon/* default */.Z
  },
  setup() {
    return {
      openURL: open_url/* default */.Z,
      mainDrawerBreakpoint: 600,
      essentialLinks: []
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['externalLinks']),
    settingsPaddingTop() {
      return 58 * this.essentialLinks.length + 550;
    }
  },
  mounted() {
    this.essentialLinks = [{
      title: 'Home',
      icon: 'icon-home-line',
      link: '/',
      class: 'home'
    }, {
      title: 'Workspace',
      icon: 'icon-grid-01',
      link: '/workspace'
    }, {
      title: 'Files',
      icon: 'icon-folder',
      link: '/files'
    }, {
      title: 'Help Center',
      icon: 'icon-message-question-square',
      action: () => (0,open_url/* default */.Z)(this.externalLinks?.help_link)
    },
    // {
    //   title: 'Discover',
    //   icon: 'icon-compass-03',
    //   link: '/discover',
    // },
    {
      title: 'Get a Gift',
      icon: 'icon-gift-01',
      link: '/gift'
    }];
  },
  watch: {
    ['$root.$q.screen.width']: {
      async handler(val) {
        if (val <= this.mainDrawerBreakpoint && this.$root.mainDrawer) this.$root.toggleMainDrawer(false);else if (val > this.mainDrawerBreakpoint && !this.$root.mainDrawer) this.$root.toggleMainDrawer(true);
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Drawer_Main.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(10906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(66663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(13246);
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
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__(51722);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Drawer_Main.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Drawer_Mainvue_type_script_lang_js, [['render',Drawer_Mainvue_type_template_id_63ebe9f8_render]])

/* harmony default export */ const Drawer_Main = (__exports__);
;








runtime_auto_import_default()(Drawer_Mainvue_type_script_lang_js, 'components', {QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});runtime_auto_import_default()(Drawer_Mainvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Requests/Request_Options.vue?vue&type=template&id=645dd220


const Request_Optionsvue_type_template_id_645dd220_hoisted_1 = {
  key: 0
};
const Request_Optionsvue_type_template_id_645dd220_hoisted_2 = {
  class: "q-pb-xl",
  style: {
    "max-width": "1000px"
  }
};
const Request_Optionsvue_type_template_id_645dd220_hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "full-width text-center q-py-lg"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-medium text-h4"
}, " What can we do for you today? ")], -1);
const _hoisted_4 = {
  class: "row justify-center full-width q-pt-md",
  style: {
    "max-width": "100%"
  }
};
const _hoisted_5 = {
  class: "col-12 col-xs-12 col-sm-6 col-md-6 q-pa-md"
};
const _hoisted_6 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-medium q-mt-lg"
}, " Request a Task ", -1);
const _hoisted_7 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "text-body1 color-primary2 letter-space-normal"
}, " A task is a simple piece of work that can be done within one working session or in a few days. "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "text-body1 font-medium letter-space-normal"
}, " E.g.: Creating a landing page design concept or fixing a website issue. ")], -1);
const _hoisted_8 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Select Task Type", -1);
const _hoisted_9 = {
  class: "col-12 col-xs-12 col-sm-6 col-md-6 q-pa-md"
};
const _hoisted_10 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-medium q-mt-lg"
}, " Start a Project ", -1);
const _hoisted_11 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "text-body1 color-primary2 letter-space-normal"
}, " A project is everything that requires planning, multiple working steps and can not be completed with a few days. "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "text-body1 font-medium letter-space-normal"
}, " E.g.: Redesigning a website or developing a no-code app. ")], -1);
const _hoisted_12 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Select Project Type", -1);
function Request_Optionsvue_type_template_id_645dd220_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_breadcrumbs_el = (0,vue_esm_bundler/* resolveComponent */.up)("q-breadcrumbs-el");
  const _component_q_breadcrumbs = (0,vue_esm_bundler/* resolveComponent */.up)("q-breadcrumbs");
  const _component_q_space = (0,vue_esm_bundler/* resolveComponent */.up)("q-space");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_header = (0,vue_esm_bundler/* resolveComponent */.up)("q-header");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    container: "",
    view: "LHh lpR lFf",
    class: "bg-white"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-white"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "bg-transparent q-pa-lg"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs, {
          "active-color": "primary",
          class: "text-primary"
        }, {
          separator: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "xs",
            name: "icon-chevron-right",
            class: "text-grey-6 q-py-xs"
          })]),
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            icon: "icon-home-line",
            to: "/",
            onClick: _cache[0] || (_cache[0] = () => {
              _ctx.goHome = true;
              _ctx.$router.push('/');
            }),
            class: "q-pa-md"
          }, null, 512), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            label: "Add a Request",
            class: "text-secondary bg-accent q-py-xs q-px-sm rounded font-medium"
          })]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Request_Optionsvue_type_template_id_645dd220_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: "",
        class: "container"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "flex flex-center",
            style: {
              "height": "calc(100vh - 210px)"
            }
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Request_Optionsvue_type_template_id_645dd220_hoisted_2, [Request_Optionsvue_type_template_id_645dd220_hoisted_3, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
              flat: "",
              bordered: "",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.cardClicked('task')),
              class: "card-quicklinks q-px-lg q-py-xl hover-border-secondary bg-white rounded full-height slide-hover button-hover row items-center"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
                class: "text-left q-pa-none self-start"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                  icon: "icon-file-06",
                  iconSize: "md"
                }), _hoisted_6, _hoisted_7]),
                _: 1
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
                align: "left",
                class: "full-width text-left q-pa-none q-pt-md self-end"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                  "no-caps": "",
                  unelevated: "",
                  color: "primary",
                  class: "rounded"
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_8, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                    size: "sm",
                    name: "icon-arrow-narrow-right",
                    class: "slide-hover-left-md q-px-sm"
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_close_popup], [_directive_ripple, void 0, "accent"]])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
              flat: "",
              bordered: "",
              onClick: _cache[2] || (_cache[2] = $event => _ctx.cardClicked('project')),
              class: "card-quicklinks q-px-lg q-py-xl hover-border-secondary bg-white rounded full-height slide-hover button-hover row"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
                class: "text-left q-pa-none"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                  icon: "icon-briefcase-02",
                  iconSize: "md"
                }), _hoisted_10, _hoisted_11]),
                _: 1
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
                align: "left",
                class: "full-width text-left q-pa-none q-pt-md self-end"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                  "no-caps": "",
                  unelevated: "",
                  color: "primary",
                  class: "rounded"
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_12, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                    size: "sm",
                    name: "icon-arrow-narrow-right",
                    class: "slide-hover-left-md q-px-sm"
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_close_popup], [_directive_ripple, void 0, "accent"]])])])])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Requests/Request_Options.vue?vue&type=template&id=645dd220

// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(65724);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Requests/Request_Options.vue?vue&type=script&lang=js


/* harmony default export */ const Request_Optionsvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'RequestOptions',
  components: {
    CardIconBox: CardIconBox/* default */.Z
  },
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      goHome: false,
      manualClose: false,
      openDirectory: false
    };
  },
  methods: {
    cardClicked(clickType) {
      this.openDirectory = true;
      this.$root.toggleRequest(clickType);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Requests/Request_Options.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(20249);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(16602);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbs.js
var QBreadcrumbs = __webpack_require__(72605);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbsEl.js
var QBreadcrumbsEl = __webpack_require__(28052);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(90136);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(12133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(69885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(11821);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(62146);
;// CONCATENATED MODULE: ./src/components/Requests/Request_Options.vue




;
const Request_Options_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Request_Optionsvue_type_script_lang_js, [['render',Request_Optionsvue_type_template_id_645dd220_render]])

/* harmony default export */ const Request_Options = (Request_Options_exports_);
;














runtime_auto_import_default()(Request_Optionsvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBreadcrumbs: QBreadcrumbs/* default */.Z,QIcon: QIcon/* default */.Z,QBreadcrumbsEl: QBreadcrumbsEl/* default */.Z,QSpace: QSpace/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(Request_Optionsvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z,Ripple: Ripple/* default */.Z});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(46727);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Requests/DirectoryLayout.vue?vue&type=template&id=9a334ca2


const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_1 = {
  key: 0,
  class: "q-px-md q-pt-md q-pb-none"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_2 = {
  key: 1,
  class: "q-px-md q-pt-md q-pb-none"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_3 = {
  key: 0,
  class: "row items-center contents-center full-width full-height text-center q-py-md",
  style: {
    "height": "calc(100vh - 300px) !important"
  }
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_4 = {
  class: "col-12"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 text-grey-6"
}, "No Available Options", -1);
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_6 = {
  key: 0,
  class: "col-12 col-md-6 col-lg-4"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_7 = {
  key: 0,
  class: "q-pt-lg"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_8 = {
  class: "text-h5 font-medium q-pt-sm q-pb-md"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_9 = {
  class: "text-body1 color-primary2"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_10 = {
  class: "q-pr-sm text-body2 font-medium color-primary2"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_11 = {
  class: "q-pt-sm"
};
const DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_12 = {
  key: 0,
  style: {
    "height": "30px",
    "width": "75px"
  },
  class: "fixed-left bg-gradient-left"
};
const _hoisted_13 = {
  class: "row no-wrap q-gutter-sm no-pointer-events q-pr-xl"
};
const _hoisted_14 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  style: {
    "height": "30px",
    "width": "75px"
  },
  class: "fixed-right bg-gradient-right"
}, null, -1);
const _hoisted_15 = {
  key: 2,
  class: "full-width fixed-bottom bg-gradient no-pointer-events",
  style: {
    "height": "300px"
  }
};
const _hoisted_16 = {
  class: "row justify-center q-my-md relative-position",
  style: {
    "z-index": "7"
  }
};
function DirectoryLayoutvue_type_template_id_9a334ca2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_scroll_area = (0,vue_esm_bundler/* resolveComponent */.up)("q-scroll-area");
  const _component_q_drawer = (0,vue_esm_bundler/* resolveComponent */.up)("q-drawer");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_space = (0,vue_esm_bundler/* resolveComponent */.up)("q-space");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_SearchDropdown = (0,vue_esm_bundler/* resolveComponent */.up)("SearchDropdown");
  const _component_q_header = (0,vue_esm_bundler/* resolveComponent */.up)("q-header");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_spinner_dots = (0,vue_esm_bundler/* resolveComponent */.up)("q-spinner-dots");
  const _component_q_infinite_scroll = (0,vue_esm_bundler/* resolveComponent */.up)("q-infinite-scroll");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    container: "",
    view: "LHh lpR lFf",
    class: "bg-white full-width full-height"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      bordered: "",
      "show-if-above": "",
      modelValue: _ctx.containerSideMenu,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.containerSideMenu = $event),
      side: "left",
      width: 275,
      breakpoint: 850,
      overlay: _ctx.$q.screen.width <= 800,
      class: "bg-white"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
        class: "fit"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
          class: "q-pt-xl q-mx-lg"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            class: "text-primary q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              class: "text-body2 font-medium"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.title), 1)]),
              _: 1
            })]),
            _: 1
          }), (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: "",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 font-medium q-my-xs hover-text-secondary rounded hover-bg-accent", _ctx.activeFilter == '' || _ctx.activeFilter == 'all' ? 'text-secondary font-medium bg-accent' : 'text-primary']),
            onClick: _cache[0] || (_cache[0] = $event => _ctx.updateFilter(''))
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: "",
              style: {
                "min-width": "unset"
              }
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "icon-all-categories",
                size: "sm"
              })]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("All Categories")]),
              _: 1
            })]),
            _: 1
          }, 8, ["class"])), [[_directive_ripple, void 0, "secondary"]]), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.itemsDirectory, (item, i) => {
            return (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
              clickable: "",
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 font-medium q-my-xs hover-text-secondary rounded hover-bg-accent", _ctx.activeFilter == item.tag ? 'text-secondary font-medium bg-accent' : 'text-primary']),
              key: i,
              onClick: $event => _ctx.updateFilter(item.tag)
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                avatar: "",
                style: {
                  "min-width": "unset"
                }
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                  size: "sm",
                  name: item.icon || 'icon-browser'
                }, null, 8, ["name"])]),
                _: 2
              }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.title), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1032, ["class", "onClick"])), [[_directive_ripple, void 0, "secondary"]]);
          }), 128))]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "overlay"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-white"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-px-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.$q.screen.width <= 850 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          dense: "",
          size: "lg",
          icon: "icon-chevron-left",
          class: "text-grey-6 hover-text-secondary hover-bg-accent rounded",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.toogleContainerSideMenu())
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
            anchor: "center end",
            self: "center left"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Show Menu ")]),
            _: 1
          })]),
          _: 1
        })])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      }), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row justify-center items-center full-width q-px-md", _ctx.$q.screen.sm || _ctx.$q.screen.lt.sm ? 'q-py-md' : 'q-pb-md'])
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SearchDropdown, {
        requestOptions: null,
        placeholder: "What is your next request?",
        onSearching: _ctx.logKey,
        onBlur: _cache[3] || (_cache[3] = $event => _ctx.searchFilter = '')
      }, null, 8, ["onSearching"])], 2)]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_infinite_scroll, {
          onLoad: _ctx.loadInfiniteScroll,
          offset: 100
        }, {
          loading: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_16, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_spinner_dots, {
            color: "secondary",
            size: "40px"
          })])]),
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.visibleItemsCount || _ctx.visibleItemsCount < 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_3, [(0,vue_esm_bundler/* createElementVNode */._)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "10rem",
            name: "icon-alert-circle",
            class: "q-pr-sm text-grey-3"
          })]), DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_5])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
            key: 1,
            class: "row q-pa-md q-col-gutter-lg",
            style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.bottomFade ? 'margin-bottom: 200px' : '')
          }, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.itemsList, (item, i) => {
            return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(vue_esm_bundler/* Transition */.uT, {
              appear: "",
              "enter-active-class": "animated zoomIn",
              "leave-active-class": "animated zoomOut",
              key: i
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(_ctx.activeFilter === '' || _ctx.activeFilter === 'all' ? true : item.tags ? item.tags.includes(_ctx.activeFilter) : false) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_6, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
                flat: "",
                bordered: "",
                class: "card-quicklinks full-height hover-border-secondary row"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
                  class: "q-px-lg q-pt-lg q-pb-none",
                  onClick: $event => _ctx.openItem(item)
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                    iconSize: "md",
                    icon: item?.icon || _ctx.itemsDirectory?.[item?.tags?.[0]]?.icon || 'icon-browser'
                  }, null, 8, ["icon"]), item.turn_arround_days || item.type ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
                    rounded: "",
                    class: "font-medium badge badge-blue"
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.turn_arround_days ? item.turn_arround_days + ' Avg. Turnaround' : item.type), 1)]),
                    _: 2
                  }, 1024)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_8, (0,vue_esm_bundler/* toDisplayString */.zw)(item.title), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_9, (0,vue_esm_bundler/* toDisplayString */.zw)(item.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'), 1)]),
                  _: 2
                }, 1032, ["onClick"]), item.platforms && item.platforms.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card_section, {
                  key: 0,
                  class: "q-px-lg q-pt-md q-pb-lg full-width"
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_10, " Platform" + (0,vue_esm_bundler/* toDisplayString */.zw)(item.platforms && item.platforms.length > 1 ? 's' : ''), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", DirectoryLayoutvue_type_template_id_9a334ca2_hoisted_11, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
                    visible: "",
                    "bar-style": {
                      opacity: 0,
                      paddingTop: '50px'
                    },
                    "thumb-style": {
                      opacity: 0,
                      paddingTop: '50px',
                      'pointer-events': 'none !important'
                    },
                    style: {
                      "height": "40px",
                      "max-width": "100%"
                    },
                    onMouseover: _ctx.hoverHere,
                    onMousemove: _ctx.hoverHere,
                    onMouseout: _ctx.hoverEnd
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [ false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(item.platforms, platform => {
                      return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
                        key: platform,
                        rounded: "",
                        class: "bg-grey-2 text-primary q-px-sm q-py-xs text-caption font-medium"
                      }, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                          name: _ctx.formatPlatformIconSrc(platform),
                          class: "q-pr-xs"
                        }, null, 8, ["name"]), (0,vue_esm_bundler/* createTextVNode */.Uk)(" " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.getPlatformInfo(platform, 'title') || platform), 1)]),
                        _: 2
                      }, 1024);
                    }), 128))]), _hoisted_14]),
                    _: 2
                  }, 1032, ["onMouseover", "onMousemove", "onMouseout"])])]),
                  _: 2
                }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
                _: 2
              }, 1024)), [[_directive_ripple, void 0, "accent"]])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
              _: 2
            }, 1024);
          }), 128))], 4)), _ctx.bottomFade ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_15)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 1
        }, 8, ["onLoad"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Requests/DirectoryLayout.vue?vue&type=template&id=9a334ca2

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Search/CustomDropdown.vue + 4 modules
var CustomDropdown = __webpack_require__(17347);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Requests/DirectoryLayout.vue?vue&type=script&lang=js








/* harmony default export */ const DirectoryLayoutvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'RequestItem',
  components: {
    SearchDropdown: CustomDropdown/* default */.Z,
    CardIconBox: CardIconBox/* default */.Z
  },
  props: {
    bottomFade: {
      type: Boolean,
      default: false
    },
    noclose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Item Directory'
    },
    directoryType: {
      type: String,
      default: 'task' // task or project
    }
  },

  watch: {
    activeFilter: {
      async handler(val) {
        this.itemsList = this.visibleItems.slice(0, 10);
      }
    }
  },
  data() {
    return {
      prevTitle: document.title,
      containerSideMenu: false,
      activeFilter: '',
      itemsList: [],
      searchFilter: '',
      scrollHoverInterval: null
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['taskDirectory', 'taskDirectory_Categories', 'projectDirectory', 'projectDirectory_Categories']),
    isTask() {
      return this.directoryType === 'task';
    },
    isProject() {
      return this.directoryType === 'project';
    },
    items() {
      return Object.values(this.isTask ? this.taskDirectory : this.projectDirectory);
    },
    itemsDirectory() {
      return this.isTask ? this.taskDirectory_Categories : this.projectDirectory_Categories;
    },
    visibleItems() {
      return (0,functions.searchInObjectArray)(this.itemWithFilter, this.searchFilter, ['label', 'title', 'description']);
    },
    itemWithFilter() {
      return this.activeFilter === '' || this.activeFilter === 'all' ? this.items : this.items.filter(e => e.tags.includes(this.activeFilter));
    },
    visibleItemsCount() {
      return this.visibleItems ? this.visibleItems.length : 0;
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['formatPlatformIconSrc', 'getPlatformInfo']),
    openItem(item) {
      if (!item) return;
      this.$root?.[this.isTask ? 'toggleForm_Task' : 'toggleForm_Project']?.(item);
    },
    updateFilter(filter) {
      this.activeFilter = filter;
    },
    toogleContainerSideMenu(force = null) {
      this.containerSideMenu = force !== null ? force : !this.containerSideMenu;
    },
    loadInfiniteScroll(index, done) {
      if (this.visibleItems.length <= this.itemsList.length) {
        done();
      }
      setTimeout(() => {
        let newItems = this.visibleItems.slice(this.itemsList.length, this.itemsList.length + 10);
        newItems.forEach(e => {
          this.itemsList.push(e);
        });
        done();
      }, 1000);
    },
    logKey({
      val,
      update
    }) {
      this.searchFilter = val;
    },
    hoverHere(evt) {
      if (this.scrollHoverInterval) {
        this.hoverEnd();
        this.scrollHoverInterval = null;
      }
      let ellayerX = evt.layerX || 0;
      const origTarget = evt.target,
        parent = origTarget?.parentElement;
      let elOffsetLeft = origTarget?.offsetLeft || 0,
        elWidth = origTarget?.offsetWidth || 0,
        slideLeft = ellayerX - elOffsetLeft < elWidth / 2;
      let target = parent?.querySelector?.('.q-scrollarea__container');
      if (!this.scrollHoverInterval && target) {
        this.scrollTarget(target, slideLeft);
      }
    },
    async scrollTarget(target, slideLeft) {
      this.scrollHoverInterval = setInterval(async () => {
        let newScrollVal = 0;
        if (!slideLeft) {
          newScrollVal = target.scrollLeft + 10 >= target.scrollLeftMax ? target.scrollLeftMax : target.scrollLeft + 10;
        } else {
          newScrollVal = target.scrollLeft <= 0 ? 0 : target.scrollLeft - 10;
        }
        // console.log({
        //   direction: slideLeft ? 'Left' : 'Right',
        //   max: target.scrollLeftMax || target.offsetWidth,
        //   new_scroll: newScrollVal,
        //   current_scroll: target.scrollLeft,
        // });
        target.scrollTo({
          top: 0,
          left: newScrollVal,
          behavior: 'smooth'
        });
      }, 10);
    },
    hoverEnd() {
      if (this.scrollHoverInterval) {
        try {
          clearInterval(this.scrollHoverInterval);
        } catch (e) {}
      }
    }
  },
  async mounted() {
    this.prevTitle = this.$root?.config?.metaData?.title;
    this.$root.setMeta({
      title: this.title
    });
    this.itemsList = this.visibleItems.slice(0, 10);
  },
  beforeUnmount() {
    this.hoverEnd();
    this.$root[this.isTask ? 'task' : 'project'].info = {};
    this.$root.setMeta({
      title: this.prevTitle
    });
  }
}));
;// CONCATENATED MODULE: ./src/components/Requests/DirectoryLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/infinite-scroll/QInfiniteScroll.js
var QInfiniteScroll = __webpack_require__(86870);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerDots.js
var QSpinnerDots = __webpack_require__(47501);
;// CONCATENATED MODULE: ./src/components/Requests/DirectoryLayout.vue




;
const DirectoryLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DirectoryLayoutvue_type_script_lang_js, [['render',DirectoryLayoutvue_type_template_id_9a334ca2_render]])

/* harmony default export */ const DirectoryLayout = (DirectoryLayout_exports_);
;


















runtime_auto_import_default()(DirectoryLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QSpace: QSpace/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QInfiniteScroll: QInfiniteScroll/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QBadge: QBadge/* default */.Z,QSpinnerDots: QSpinnerDots/* default */.Z});runtime_auto_import_default()(DirectoryLayoutvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_Task_Create.vue?vue&type=template&id=2f9bf9ae

const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_1 = {
  class: "q-pt-sm q-mt-xs q-pb-xl q-px-lg"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_2 = {
  key: 0
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_3 = {
  style: {
    "max-width": "100vw",
    "width": "650px"
  }
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_4 = {
  key: 0,
  autocorrect: "off",
  autocapitalize: "off",
  autocomplete: "off",
  spellcheck: "false"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_5 = {
  class: "full-width text-left q-py-lg"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_6 = {
  class: "font-medium text-h4 q-py-sm"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_7 = {
  class: "text-body2 color-primary2"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_8 = {
  class: "full-width"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_9 = {
  class: "full-width text-left q-py-lg"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_10 = {
  class: "font-medium text-h4 q-py-sm"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_11 = {
  class: "text-body2 color-primary2"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_12 = {
  class: "full-width"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_13 = {
  class: "full-width text-left q-py-lg"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_14 = {
  class: "font-medium text-h4 q-py-sm"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_15 = {
  class: "text-body2 color-primary2"
};
const Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_16 = {
  class: "row q-col-gutter-md q-pb-md"
};
const _hoisted_17 = {
  class: "full-width text-left q-py-lg"
};
const _hoisted_18 = {
  class: "font-medium text-h4 q-py-sm"
};
const _hoisted_19 = {
  class: "text-body2 color-primary2"
};
const _hoisted_20 = {
  class: "row q-col-gutter-md q-pb-md"
};
const _hoisted_21 = {
  class: "col-12 col-sm-6"
};
const _hoisted_22 = {
  class: "full-width text-left q-py-lg"
};
const _hoisted_23 = {
  class: "font-medium text-h4 q-py-sm"
};
const _hoisted_24 = {
  class: "text-body2 color-primary2"
};
const _hoisted_25 = {
  class: "q-pt-lg"
};
const _hoisted_26 = {
  class: "full-width"
};
const _hoisted_27 = {
  class: "full-width text-left q-py-lg"
};
const _hoisted_28 = {
  class: "font-medium text-h4 q-py-sm"
};
const _hoisted_29 = {
  class: "text-body2 color-primary2"
};
const _hoisted_30 = {
  class: "full-width"
};
const _hoisted_31 = {
  class: "full-width text-left q-py-lg"
};
const _hoisted_32 = {
  class: "font-medium text-h4 q-py-sm"
};
const _hoisted_33 = {
  class: "text-body2 color-primary2"
};
const _hoisted_34 = {
  class: "full-width"
};
const _hoisted_35 = {
  key: 0
};
const _hoisted_36 = {
  key: 1,
  class: "text-grey-9 q-pr-sm"
};
const _hoisted_37 = {
  class: "full-width text-left q-py-lg"
};
const _hoisted_38 = {
  class: "font-medium text-h4 q-py-sm"
};
const _hoisted_39 = {
  class: "text-body2 color-primary2"
};
const _hoisted_40 = {
  class: "full-width"
};
const _hoisted_41 = {
  key: 1,
  class: "full-width q-px-lg q-py-sm"
};
const _hoisted_42 = {
  class: "text-center"
};
const _hoisted_43 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "full-width font-medium text-h4 q-pt-lg text-center"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Thank you."), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("br"), /*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)("Your task have been successfully submitted. ")], -1);
const _hoisted_44 = {
  class: "row items-center justify-center q-px-lg q-pt-none q-mt-none q-col-gutter-md"
};
const _hoisted_45 = {
  key: 0,
  class: "col"
};
const _hoisted_46 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-px-sm"
}, "Back", -1);
const _hoisted_47 = {
  key: 1,
  class: "col"
};
const _hoisted_48 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Submit Task", -1);
const _hoisted_49 = {
  key: 2,
  class: "col"
};
const _hoisted_50 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Continue", -1);
const _hoisted_51 = {
  class: "col"
};
const _hoisted_52 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-px-sm"
}, "Back to home", -1);
const _hoisted_53 = {
  class: "col"
};
const _hoisted_54 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Add your next request", -1);
function Form_Task_Createvue_type_template_id_2f9bf9ae_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GrowmodoTextIcon = (0,vue_esm_bundler/* resolveComponent */.up)("GrowmodoTextIcon");
  const _component_q_step = (0,vue_esm_bundler/* resolveComponent */.up)("q-step");
  const _component_q_stepper = (0,vue_esm_bundler/* resolveComponent */.up)("q-stepper");
  const _component_q_scroll_area = (0,vue_esm_bundler/* resolveComponent */.up)("q-scroll-area");
  const _component_q_drawer = (0,vue_esm_bundler/* resolveComponent */.up)("q-drawer");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_breadcrumbs_el = (0,vue_esm_bundler/* resolveComponent */.up)("q-breadcrumbs-el");
  const _component_q_breadcrumbs = (0,vue_esm_bundler/* resolveComponent */.up)("q-breadcrumbs");
  const _component_q_space = (0,vue_esm_bundler/* resolveComponent */.up)("q-space");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_header = (0,vue_esm_bundler/* resolveComponent */.up)("q-header");
  const _component_q_editor = (0,vue_esm_bundler/* resolveComponent */.up)("q-editor");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_chip = (0,vue_esm_bundler/* resolveComponent */.up)("q-chip");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_CreateNewBrand = (0,vue_esm_bundler/* resolveComponent */.up)("CreateNewBrand");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    container: "",
    view: "LHh lpR lFf",
    class: "bg-color"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      bordered: "",
      "show-if-above": "",
      modelValue: _ctx.containerSideMenu,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.containerSideMenu = $event),
      side: "left",
      width: 300,
      breakpoint: 900,
      overlay: _ctx.$q.screen.width <= 750,
      class: "bg-primary text-white q-px-md"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
        class: "fit"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_GrowmodoTextIcon, {
          dark: "",
          class: "cursor-pointer q-px-xs q-py-sm",
          onClick: _ctx.goTo_Home
        }, null, 8, ["onClick"])]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
          modelValue: _ctx.step,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.step = $event),
          animated: "",
          vertical: "",
          contracted: "",
          "header-nav": false,
          "header-class": "text-body1",
          color: "white",
          class: "title-only bg-transparent text-white text-body1 font-medium rounded no-shadow"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(Object.values(_ctx.task_data), task_inf => {
            return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_step, {
              key: task_inf.id,
              name: task_inf.id,
              title: task_inf.label,
              done: _ctx.step > task_inf.id || _ctx.task_submitted,
              color: "white",
              "error-color": "negative",
              icon: "step:inactive",
              "active-color": "white",
              "active-icon": "step:active",
              "done-icon": "step:done",
              "done-color": "white"
            }, null, 8, ["name", "title", "done"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "overlay"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-white"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "bg-transparent q-pa-lg"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs, {
          "active-color": "primary",
          class: "text-primary",
          gutter: "xs"
        }, {
          separator: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "xs",
            name: "icon-chevron-right",
            class: "text-grey-6 q-py-xs"
          })]),
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            icon: "icon-home-line",
            class: "q-py-xs q-pr-sm cursor-pointer hover-text-secondary",
            onClick: _ctx.goTo_Home
          }, null, 8, ["onClick"]), [[_directive_close_popup, -1]]), (0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            label: "Task Directory",
            class: "q-py-xs q-px-sm rounded cursor-pointer hover-text-secondary color-primary2 font-medium",
            onClick: _ctx.goTo_TaskDirectory
          }, null, 8, ["onClick"]), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            label: _ctx.taskInfo.label,
            class: "text-secondary bg-accent q-py-xs q-px-sm rounded font-medium"
          }, null, 8, ["label"])]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: "",
        class: "bg-white flex flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          style: {
            "margin-top": "-100px"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_3, [!_ctx.task_submitted ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("form", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_4, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
              modelValue: _ctx.step,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.step = $event),
              flat: "",
              animated: "",
              "header-nav": "",
              contracted: "",
              color: "primary",
              ref: "formStepper",
              "header-class": "hidden",
              class: "full-width"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 1,
                title: _ctx.task_data[1]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_5, [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_6, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[1]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[1]?.description), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_8, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_editor, {
                  ref: "descriptionEditorRef",
                  onPaste: _cache[2] || (_cache[2] = e => _ctx.pastePlainText(e, _ctx.$refs['descriptionEditorRef'])),
                  modelValue: _ctx.task[1],
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.task[1] = $event),
                  placeholder: "Enter a description...",
                  name: _ctx.task_data[1]?.key,
                  rules: [val => _ctx.task_data[1]?.required ? !!val || '' : true],
                  height: "250px",
                  toolbar: [[{
                    icon: _ctx.$q.iconSet.editor.align,
                    fixedLabel: true,
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify']
                  }], [{
                    label: _ctx.$q.lang.editor.formatting,
                    icon: _ctx.$q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h5', 'h6', 'code']
                  }], ['bold', 'italic', 'underline'], ['link', 'quote'], ['unordered', 'ordered', 'outdent', 'indent'], ['undo', 'redo']]
                }, null, 8, ["modelValue", "name", "rules", "toolbar"])])]),
                _: 1
              }, 8, ["title"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 2,
                title: _ctx.task_data[2]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_9, [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_10, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[2]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_11, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[2]?.description), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  modelValue: _ctx.task[2],
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.task[2] = $event),
                  name: _ctx.task_data[2]?.key,
                  placeholder: "Your target audience",
                  class: "full-width rounded text-body2 input-white",
                  rules: [val => _ctx.task_data[2]?.required ? !!val || '' : true]
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["title"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 3,
                title: _ctx.task_data[3]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_13, [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_14, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[3]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_15, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[3]?.description), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Task_Createvue_type_template_id_2f9bf9ae_hoisted_16, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.taskPriorities, priority => {
                  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                    class: "col-12 col-sm-6",
                    key: priority
                  }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                    autofocus: "",
                    modelValue: _ctx.task[3],
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.task[3] = $event),
                    val: priority,
                    label: priority.name,
                    name: _ctx.task_data[3]?.key,
                    color: priority.color || 'secondary',
                    class: "field-select text-body1 font-medium rounded bg-none color-primary2 q-py-sm q-pl-sm full-width flex-label",
                    rules: [val => _ctx.task_data[3]?.required ? !!val || '' : true]
                  }, null, 8, ["modelValue", "val", "label", "name", "color", "rules"])]);
                }), 128))])]),
                _: 1
              }, 8, ["title"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 4,
                title: _ctx.task_data[4]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_17, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_18, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[4]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_19, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[4]?.description), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_20, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.taskInfo.platforms, (platform, i) => {
                  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                    class: "col-12 col-sm-6",
                    key: platform
                  }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                    autofocus: "",
                    modelValue: _ctx.task[4],
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.task[4] = $event),
                    val: platform,
                    color: "secondary",
                    name: _ctx.task_data[4]?.key,
                    class: "field-select bg-none text-body1 font-medium color-primary2 rounded q-py-sm q-pl-sm full-width flex-label",
                    rules: [val => _ctx.task_data[4]?.required ? !!val || '' : true]
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                      name: _ctx.formatPlatformIconSrc(platform),
                      size: "xs",
                      class: "q-pr-sm"
                    }, null, 8, ["name"]), (0,vue_esm_bundler/* createTextVNode */.Uk)(" " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.getPlatformInfo(platform, 'title')) + " ", 1), i === 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
                      key: 0,
                      rounded: "",
                      class: "text-secondary bg-accent text-caption font-medium q-px-sm q-ml-sm letter-space-normal"
                    }, {
                      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Recommended ")]),
                      _: 1
                    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
                    _: 2
                  }, 1032, ["modelValue", "val", "name", "rules"])]);
                }), 128)), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_21, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                  modelValue: _ctx.task[4],
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.task[4] = $event),
                  val: "no-preference",
                  label: "No Preference",
                  color: "secondary",
                  name: _ctx.task_data[4]?.key,
                  class: "field-select bg-none text-body1 font-medium color-primary2 rounded q-py-sm q-pl-sm full-width",
                  rules: [val => _ctx.task_data[4]?.required ? !!val || '' : true]
                }, null, 8, ["modelValue", "name", "rules"])])])]),
                _: 1
              }, 8, ["title"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 5,
                title: _ctx.task_data[5]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_22, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_23, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[5]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_24, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[5]?.description), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_25, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                  flat: "",
                  "no-caps": "",
                  rounded: "",
                  class: "text-primary bg-grey-2 text-caption font-medium q-px-md cursor-pointer letter-space-normal hover-text-secondary hover-shadow-gm",
                  onClick: _cache[8] || (_cache[8] = $event => _ctx.openURL('https://www.loom.com'))
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                    name: _ctx.formatPlatformIconSrc('Loom'),
                    size: "xs",
                    class: "q-pr-sm"
                  }, null, 8, ["name"]), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Create with Loom ")]),
                  _: 1
                })])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_26, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  modelValue: _ctx.task[5],
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.task[5] = $event),
                  placeholder: "Your video walkthrough link",
                  name: _ctx.task_data[5]?.key,
                  class: "rounded text-body2 input-white",
                  rules: [val => _ctx.checker.input({
                    value: val,
                    nomsg: true,
                    type: 'url'
                  }, 500, _ctx.task_data[5]?.required)]
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["title"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 6,
                title: _ctx.task_data[6]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_27, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_28, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[6]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_29, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[6]?.description), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_30, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  rows: "15",
                  type: "textarea",
                  modelValue: _ctx.task[6],
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => _ctx.task[6] = $event),
                  placeholder: "Some warnings...",
                  name: _ctx.task_data[6]?.key,
                  class: "rounded text-body2 input-white",
                  rules: [val => _ctx.task_data[6]?.required ? !!val || '' : true]
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["title"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 7,
                title: _ctx.task_data[7]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_31, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_32, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[7]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_33, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[7]?.description), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_34, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_select, {
                  outlined: "",
                  autofocus: "",
                  "use-input": "",
                  onFilter: _ctx.filterBrandsFn,
                  modelValue: _ctx.task[7],
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.task[7] = $event),
                  name: _ctx.task_data[7]?.key,
                  options: _ctx.filteredBrandsOptions,
                  class: "rounded text-body2 input-white",
                  "popup-content-class": "bg-white rounded-bottom shadow-ui",
                  "input-class": "text-body1 letter-space-normal text-primary",
                  rules: [val => _ctx.task_data[7]?.required ? !!val || '' : true]
                }, {
                  selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.task[7] ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_35, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task[7]?.label), 1)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_36, " Select or add a brand "))]),
                  option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
                    clickable: ""
                  }, scope.itemProps, {
                    class: scope.selected ? 'bg-accent text-secondary' : 'text-primary hover-bg-accent',
                    onClick: scope.opt.action
                  }), {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [scope.opt.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
                      key: 0,
                      avatar: "",
                      style: {
                        "min-width": "unset"
                      }
                    }, {
                      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                        size: "xs",
                        name: scope.opt.icon
                      }, null, 8, ["name"])]),
                      _: 2
                    }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.label), 1)]),
                        _: 2
                      }, 1024)]),
                      _: 2
                    }, 1024),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
                    _: 2
                  }, 1040, ["class", "onClick"])]),
                  _: 1
                }, 8, ["onFilter", "modelValue", "name", "options", "rules"])])]),
                _: 1
              }, 8, ["title"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
                name: 8,
                title: _ctx.task_data[8]?.label,
                color: "white",
                "error-color": "negative",
                icon: "step:inactive",
                "active-color": "white",
                "active-icon": "step:active",
                "done-icon": "step:done",
                "done-color": "white",
                class: "q-py-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_37, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_38, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[8]?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_39, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.task_data[8]?.description), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_40, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  rows: "15",
                  type: "textarea",
                  modelValue: _ctx.task[8],
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => _ctx.task[8] = $event),
                  placeholder: "Some resources here...",
                  name: _ctx.task_data[8]?.key,
                  class: "rounded text-body2 input-white",
                  rules: [val => _ctx.task_data[8]?.required ? !!val || '' : true]
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["title"])]),
              _: 1
            }, 8, ["modelValue"])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_41, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_42, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
              icon: "icon-check-circle-broken",
              iconSize: "md"
            })]), _hoisted_43])), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_44, [!_ctx.task_submitted ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
              key: 0
            }, [_ctx.step > 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_45, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              outline: "",
              "no-caps": "",
              unelevated: "",
              ripple: {
                color: 'accent'
              },
              type: "submit",
              color: "primary",
              class: "rounded slide-hover full-width hover-shadow-gm",
              disable: _ctx.task_submitting,
              onClick: _cache[14] || (_cache[14] = $event => _ctx.previousStep())
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "sm",
                name: "icon-arrow-narrow-left",
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-pl-sm", !_ctx.task_submitting ? 'slide-hover-right-md' : ''])
              }, null, 8, ["class"]), _hoisted_46]),
              _: 1
            }, 8, ["disable"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.step === Object.keys(_ctx.task_data).length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_47, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              "no-caps": "",
              unelevated: "",
              ripple: {
                color: 'accent'
              },
              type: "submit",
              color: "primary",
              class: "rounded slide-hover full-width",
              disable: _ctx.task_submitting,
              onClick: _cache[15] || (_cache[15] = $event => _ctx.submitTask())
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_48, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "sm",
                name: "icon-arrow-narrow-right",
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-px-sm", !_ctx.task_submitting ? 'slide-hover-left-md' : ''])
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["disable"])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_49, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              "no-caps": "",
              unelevated: "",
              ripple: {
                color: 'accent'
              },
              color: "primary",
              class: "rounded slide-hover full-width hover-shadow-gm",
              disable: _ctx.task_submitting,
              onClick: _cache[16] || (_cache[16] = $event => _ctx.nextStep())
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_50, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "sm",
                name: "icon-arrow-narrow-right",
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-px-sm", !_ctx.task_submitting ? 'slide-hover-left-md' : ''])
              }, null, 8, ["class"])]),
              _: 1
            }, 8, ["disable"])]))], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
              key: 1
            }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_51, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              outline: "",
              "no-caps": "",
              ripple: {
                color: 'accent'
              },
              color: "primary",
              class: "rounded slide-hover full-width hover-shadow-gm",
              onClick: _ctx.goTo_Home
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "sm",
                name: "icon-arrow-narrow-left",
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-pl-sm", !_ctx.task_submitting ? 'slide-hover-right-md' : ''])
              }, null, 8, ["class"]), _hoisted_52]),
              _: 1
            }, 8, ["onClick"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_53, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              "no-caps": "",
              unelevated: "",
              ripple: {
                color: 'accent'
              },
              color: "primary",
              class: "rounded slide-hover full-width hover-shadow-gm",
              onClick: _ctx.goTo_TaskDirectory
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_54]),
              _: 1
            }, 8, ["onClick"])])], 64))])])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: "",
      modelValue: _ctx.addBrand,
      "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => _ctx.addBrand = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CreateNewBrand, {
        style: {
          "max-width": "90vw",
          "width": "640px"
        },
        onAdded: _cache[17] || (_cache[17] = id => {
          _ctx.addBrand = false;
          // Set Selected Task
          _ctx.task[7] = _ctx.selectedOrgBrands[id] ? _ctx.selectedOrgBrands[id] : '';
        }),
        onClose: _cache[18] || (_cache[18] = () => {
          _ctx.addBrand = false;
          // Set Selected Task
          if (_ctx.task[7] && _ctx.task[7]?.id === 0) _ctx.task[7] = '';
        })
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Forms/Form_Task_Create.vue?vue&type=template&id=2f9bf9ae

// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(19302);
// EXTERNAL MODULE: ./src/components/Brands/CreateNewBrand.vue + 4 modules
var CreateNewBrand = __webpack_require__(2939);
// EXTERNAL MODULE: ./src/stores/asana/index.js + 3 modules
var asana = __webpack_require__(98215);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/assets/_config.js
var _config = __webpack_require__(45808);
// EXTERNAL MODULE: ./src/mixins/index.js + 2 modules
var mixins = __webpack_require__(34267);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_Task_Create.vue?vue&type=script&lang=js














/* harmony default export */ const Form_Task_Createvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'FormTaskCreate',
  mixins: [mixins/* Editor_Mixin */.k],
  components: {
    CardIconBox: CardIconBox/* default */.Z,
    CreateNewBrand: CreateNewBrand/* default */.Z,
    GrowmodoTextIcon: GrowmodoTextIcon/* default */.Z
  },
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const $q = (0,use_quasar/* default */.Z)();
    const descriptionEditorRef = (0,vue_esm_bundler/* ref */.iH)(null);
    $q.iconMapFn = iconName => {
      const icon = _config/* default.icons */.Z.icons?.stepper[iconName];
      if (icon !== void 0) {
        return {
          icon: `img:${icon}`
        };
      }
    };
    return {
      descriptionEditorRef
    };
  },
  data() {
    const task_data = {
      1: {
        id: 1,
        label: 'Description',
        key: 'description',
        description: ' What is the problem you want to solve? What do you try to achieve? E.g. Increasing the conversion rate or improving the UX.',
        required: true
      },
      2: {
        id: 2,
        label: 'Target Audience',
        key: 'audience',
        description: 'Who do we really work for? Who is the end-user?',
        required: true
      },
      3: {
        id: 3,
        label: 'Priority',
        description: 'How important is this task compared to the other tasks in the queue? You can tell us later in the task comment when priorities change.',
        required: true
      },
      4: {
        id: 4,
        label: 'Select Platform',
        key: 'platform',
        description: 'If you want us to develop a page or website, please choose a platform you want us to use?',
        required: true
      },
      5: {
        id: 5,
        label: 'Video Walkthrough',
        key: 'walkthrough',
        description: 'Please provide a screen-recording video link.',
        required: false
      },
      6: {
        id: 6,
        label: 'Warning',
        key: 'warning',
        description: 'What do you don’t want us to do? What do we need to be aware of?',
        required: false
      },
      7: {
        id: 7,
        label: 'Brand',
        key: 'brand',
        description: 'Please select the brand where you want to add this task.',
        required: true
      },
      8: {
        id: 8,
        label: 'Resources',
        key: 'resources',
        description: 'Files/Login details needed to complete the task. Please share them in a Google Drive or Dropbox folder that everybody can view through your link.',
        required: true
      }
    };
    return {
      step: 1,
      task: {
        1: ''
      },
      task_data,
      prevTitle: document.title,
      addBrand: false,
      task_submitting: false,
      task_submitted: false,
      taskPriorities: [],
      goHome: false,
      containerSideMenu: false,
      filteredBrandsOptions: [],
      openURL: open_url/* default */.Z,
      checker: functions.checker
    };
  },
  async mounted() {
    this.prevTitle = this.$root?.config?.metaData?.title;
    this.$root.setMeta({
      title: this.taskInfo.label
    });
    // Get The Priorities
    this.taskPriorities = await this.getCustomField({
      name: 'Priority',
      key: 'enum_options'
    });
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(asana/* default */.Z, ['brand', 'projects', 'assignee', 'custom_fields']),
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgBrands']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['brandCategories']),
    taskInfo() {
      return this.$root.task.info;
    }
  },
  watch: {
    ['$root.$q.screen.width']: {
      async handler(val) {
        if (val > 900 && !this.containerSideMenu) this.toogleContainerSideMenu(true);
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(asana/* default */.Z, ['createTask', 'getCustomField', 'getCustomFieldEnum', 'createEnumOptionForCustomField']),
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['getPlatformInfo', 'formatPlatformIconSrc']),
    toogleContainerSideMenu(force = null) {
      this.containerSideMenu = force !== null ? force : !this.containerSideMenu;
    },
    validateData() {
      if (!this.task || isNaN(this.step) || !this.task_data) return;
      if (this.task_data[this.step] && this.task[this.step] || this.task_data[this.step] && this.task_data[this.step]?.required === false) return true;
      return false;
    },
    previousStep() {
      this.$refs?.['formStepper']?.previous?.();
    },
    nextStep() {
      if (this.validateData()) this.$refs?.['formStepper']?.next?.();
    },
    gotoStep(step_no) {
      this.$refs?.['formStepper']?.goTo?.(step_no);
    },
    getTask(step_no) {
      return this.task_data[step_no] && this.task[step_no] ? this.task[step_no] : '';
    },
    async getOrCreateCustomFieldEnum(customFieldName, customFieldEnumValue, options = {
      payloadOpt: {},
      noCreate: false
    }) {
      let field_gid = await this.getCustomField({
        name: customFieldName,
        key: 'gid'
      });
      let customFieldEnum = await this.getCustomFieldEnum({
        gid: field_gid,
        enum_name: customFieldEnumValue
      });
      // Check if customFieldEnumValue Exist on Enum
      if (!options?.noCreate && !customFieldEnum?.gid) {
        // If Not, Add the New customFieldEnumValue to Enum Options and Get the GID
        await this.createEnumOptionForCustomField({
          customFieldGid: field_gid,
          payload: {
            ...options?.payloadOpt,
            enabled: true,
            name: customFieldEnumValue
          }
        }).then(res => {
          customFieldEnum = res?.response;
        });
      }
      return {
        success: customFieldEnum?.gid ? 1 : 0,
        gid: field_gid,
        enumOpt: customFieldEnum
      };
    },
    async submitTask() {
      if (!this.validateData()) return;

      // Test Success Message
      this.task_submitted = true;
      this.step = 100; // Done Steps
      if (true) return;
      this.task_submitting = true;
      const notif = this.$q.notify({
        group: false,
        // required to be updatable
        spinner: true,
        progress: false,
        message: 'Connecting to Asana',
        timeout: 0
      });
      let percentage = 0;
      const interval = setInterval(() => {
        percentage = Math.min(99, percentage + Math.floor(Math.random() * 15));
        notif({
          caption: `Loading... ${percentage}%`
        });
        if (percentage === 99) {
          notif({
            message: 'Verifying Response',
            caption: undefined
          });
          clearInterval(interval);
        }
      }, 500);
      try {
        let selected_platform = this.getPlatformInfo(this.getTask(4), 'label') || 'No Preference';
        let selected_priority = this.getTask(3);
        let cf_taskType = await this.getOrCreateCustomFieldEnum('Task Type', this.taskInfo?.type || 'Tech', {
          noCreate: true
        });
        let cf_priority = await this.getOrCreateCustomFieldEnum('Priority', selected_priority?.name, {
          noCreate: true
        });
        let cf_platform = await this.getOrCreateCustomFieldEnum('Platform', selected_platform);
        // Formated Request
        const payload_formated = {
          name: this.taskInfo.label,
          brand: this.brand,
          projects: this.project,
          assignee: this.assignee,
          approval_status: 'pending',
          assignee_status: 'upcoming',
          tags: [],
          completed: false,
          custom_fields: {
            [cf_taskType?.gid]: cf_taskType?.enumOpt?.gid,
            [cf_priority?.gid]: cf_priority?.enumOpt?.gid,
            [cf_platform?.gid]: cf_platform?.enumOpt?.gid
          },
          notes: 'Created from Growmodo Client Portal',
          html_notes: `<body><strong>Task Name 🔖:</strong>\n` + this.taskInfo.label + `\n\n<strong>Description 🎯:</strong>\n` + this.getTask(1) + `\n\n<strong>Target Audience 👤:</strong>\n` + this.getTask(2) + `\n\n<strong>Priority 🥇:</strong>\n` + selected_priority?.name + `\n\n<strong>Platform 🗂️:</strong>\n` + selected_platform + `\n\n<strong>Warning 🚨:</strong>\n` + this.getTask(6) + `\n\n<strong>Resources 📦:</strong>\n` + this.getTask(8) + `</body>`
        };
        // Send Request Task
        this.createTask(payload_formated).then(result => {
          if (result.success) {
            if (true) console.info(result);
            notif({
              icon: 'icon-check-circle-broken',
              spinner: false,
              message: 'Task Created!',
              caption: 'GID: ' + result?.response?.gid,
              timeout: 5000,
              actions: [{
                label: 'Open Asana',
                size: 'md',
                color: 'primary',
                class: 'bg-grey-3',
                noCaps: true,
                handler: () => {
                  window.open(result?.response?.permalink_url, '_blank');
                }
              }]
            });
            this.task_submitted = true;
            this.step = 100; // Done Steps
            // // Close Form Task
            // this.$root.toggleForm_Task('', false);
            // // Close Task Directory
            // this.$root.toggleRequest('task', false);
            // // Close Request Options
            // this.$root.toggleRequest('', false);
          } else {
            if (true) console.warn(result);
            this.task_submitted = false;
            notif({
              icon: 'icon-alert-triangle',
              spinner: false,
              message: 'Request Failed!',
              caption: undefined,
              timeout: 2000
            });
          }
        }).catch(err => {
          if (true) console.error(err);
          this.task_submitted = false;
          notif({
            icon: 'icon-alert-circle',
            spinner: false,
            message: 'Request Error!',
            caption: result?.response?.message,
            timeout: 2000
          });
        }).finally(() => {
          // Disable processing status
          this.task_submitting = false;
          notif({
            progress: true
          });
          // Clear Interval
          clearInterval(interval);
        });
      } catch (e) {
        if (true) console.error(e);
        // Disable processing status
        this.task_submitting = false;
        notif({
          icon: 'icon-alert-circle',
          spinner: false,
          message: 'Form Error!',
          timeout: 2000,
          progress: true
        });
        // Clear Interval
        clearInterval(interval);
      }
    },
    filterBrandsFn(val, update) {
      update(() => {
        const newOpt = {
          id: 0,
          label: 'Add New Brand',
          icon: 'icon-plus',
          action: () => this.addNewBrand()
        };
        if (val === '') {
          this.filteredBrandsOptions = Object.values(this.selectedOrgBrands).concat(newOpt);
        } else {
          let _query = (0,functions.searchInObjectArray)(this.filteredBrandsOptions, val);
          this.filteredBrandsOptions = _query.concat(newOpt);
        }
      });
    },
    goTo_TaskDirectory() {
      // Open Task Directory
      this.$root.toggleRequest('project', false);
      this.$root.toggleRequest('task', true);
      // Close this form
      this.$root.toggleForm_Task(false);
    },
    goTo_Home() {
      // Add Go To Home
      this.goHome = true;
      // Close Request Option
      this.$root.toggleRequest('', false);
      // Close Task Directory
      this.$root.toggleRequest('task', false);
      // Close Project Directory
      this.$root.toggleRequest('project', false);
      // Close this Form
      this.$root.toggleForm_Task(false);
      // Navigate to Home
      this.$router.push('/');
    },
    addNewBrand() {
      this.addBrand = true;
    }
  },
  beforeUnmount() {
    this.$root.task.info = {};
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
;// CONCATENATED MODULE: ./src/components/Forms/Form_Task_Create.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__(8225);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js
var QStep = __webpack_require__(46017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 3 modules
var QEditor = __webpack_require__(10424);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/radio/QRadio.js
var QRadio = __webpack_require__(11480);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(26384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__(57691);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(32074);
;// CONCATENATED MODULE: ./src/components/Forms/Form_Task_Create.vue




;
const Form_Task_Create_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Form_Task_Createvue_type_script_lang_js, [['render',Form_Task_Createvue_type_template_id_2f9bf9ae_render]])

/* harmony default export */ const Form_Task_Create = (Form_Task_Create_exports_);
;


























runtime_auto_import_default()(Form_Task_Createvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBreadcrumbs: QBreadcrumbs/* default */.Z,QIcon: QIcon/* default */.Z,QBreadcrumbsEl: QBreadcrumbsEl/* default */.Z,QSpace: QSpace/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QEditor: QEditor/* default */.Z,QInput: QInput/* default */.Z,QRadio: QRadio/* default */.Z,QBadge: QBadge/* default */.Z,QBtn: QBtn/* default */.Z,QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QChip: QChip/* default */.Z,QDialog: QDialog/* default */.Z});runtime_auto_import_default()(Form_Task_Createvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_Project_Create.vue?vue&type=template&id=885ccf9a

const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_1 = {
  class: "row items-center justify-end text-right"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_2 = {
  key: 0,
  class: "absolute-top-right q-ma-sm"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_3 = {
  style: {
    "max-width": "650px"
  }
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_4 = {
  class: "full-width text-left q-pb-lg"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-bold text-h5 q-py-sm"
}, " Project Description ", -1);
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_6 = {
  class: "text-body2"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_7 = {
  class: "full-width"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_8 = {
  class: "full-width text-left q-pb-lg"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-bold text-h5 q-py-sm"
}, "Select Platform", -1);
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_10 = {
  class: "text-body2"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_11 = {
  class: "full-width"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_12 = {
  class: "row q-gutter-lg q-pb-md"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_13 = {
  class: "q-pr-md"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_14 = {
  class: "full-width text-left q-pb-lg"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_15 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-bold text-h5 q-py-sm"
}, " Video Walkthrough ", -1);
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_16 = {
  class: "text-body2"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_17 = {
  class: "full-width"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_18 = {
  class: "full-width text-left q-pb-lg"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_19 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-bold text-h5 q-py-sm"
}, "Warning", -1);
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_20 = {
  class: "text-body2"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_21 = {
  class: "full-width"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_22 = {
  class: "full-width text-left q-pb-lg"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_23 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-bold text-h5 q-py-sm"
}, "Resources", -1);
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_24 = {
  class: "text-body2"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_25 = {
  class: "full-width"
};
const Form_Project_Createvue_type_template_id_885ccf9a_hoisted_26 = {
  class: "row items-center justify-center q-px-lg q-pt-none q-mt-none q-col-gutter-md"
};
function Form_Project_Createvue_type_template_id_885ccf9a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_space = (0,vue_esm_bundler/* resolveComponent */.up)("q-space");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_header = (0,vue_esm_bundler/* resolveComponent */.up)("q-header");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_carousel_slide = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel-slide");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_q_carousel = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    container: "",
    view: "LHh lpR lFf",
    class: "bg-color"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-color"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "full-width bg-transparent q-pa-lg"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          class: "text-primary font-medium cursor-pointer row items-center",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.goTo_ProjectDirectory && _ctx.goTo_ProjectDirectory(...args))
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "sm",
          name: "icon-arrow-narrow-left",
          class: "color-primary2 q-mr-sm"
        }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Back to Project Directory ")])), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,vue_esm_bundler/* createElementVNode */._)("div", {
          class: "absolute-top text-left",
          style: (0,vue_esm_bundler/* normalizeStyle */.j5)([_ctx.$q.screen.sm ? 'margin-top: 150px' : 'margin-top: 24px', {
            "max-width": "500px",
            "margin-left": "auto",
            "margin-right": "auto"
          }])
        }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row items-center justify-center dnav no-wrap", _ctx.$q.screen.sm ? 'q-px-xl' : ''])
        }, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.slideCount, i => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
            key: i
          }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "xs",
            icon: "icon-circle-01",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col dicon", (_ctx.slideNumber >= i - 1 ? _ctx.slideNumber == i - 1 ? 'active' : 'past' : '') + (_ctx.$q.screen.xs ? ' dicon-mini bg-none' : '')]),
            onClick: () => _ctx.slideNumber == i - 1 || _ctx.slideNumber == i || _ctx.slideNumber == i - 2 ? _ctx.gotoSlideName(_ctx.slides[i - 1]) : void 0
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
              arrow: "top",
              anchor: "bottom middle",
              self: "top middle",
              offset: [10, 10],
              bgColor: "white",
              color: "primary",
              shadow: "1"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.slides[i - 1]), 1)]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1032, ["onClick", "class"]), i !== _ctx.slideCount ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
            key: 0,
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-6 dline", (_ctx.slideNumber >= i ? _ctx.slideNumber == i ? 'active' : 'past' : '') + (_ctx.$q.screen.sm ? ' dline-mini' : '') + (_ctx.$q.screen.xs ? ' dline-mini-xs' : '')])
          }, null, 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 64);
        }), 128))], 2)], 4), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)([_ctx.$q.screen.sm ? 'col-12 row justify-end' : 'q-mr-sm', "color-primary2"])
        }, " Project Type: ", 2), (0,vue_esm_bundler/* createElementVNode */._)("div", {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["cursor-pointer font-medium text-primary", _ctx.$q.screen.sm ? 'col-12 row justify-end' : ''])
        }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.projectInfo.title), 3)]), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          class: "bg-color q-pt-xl"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel, {
              animated: "",
              ref: "formSlider",
              height: "600px",
              navigation: false,
              "navigation-position": "top",
              modelValue: _ctx.slidesModel,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.slidesModel = $event),
              "transition-prev": "slide-right",
              "transition-next": "slide-left",
              class: "bg-transparent text-primary rounded full-width"
            }, {
              "navigation-icon": (0,vue_esm_bundler/* withCtx */.w5)(({
                active,
                onClick,
                index
              }) => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                flat: "",
                round: "",
                dense: "",
                size: "sm",
                icon: "icon-circle-01",
                color: active || index <= _ctx.slides.indexOf(_ctx.slidesModel) ? 'secondary' : 'deep-purple-2',
                class: "",
                onClick: onClick
              }, null, 8, ["color", "onClick"])]),
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                name: _ctx.slides[0],
                class: "column no-wrap q-pt-xl"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_4, [Form_Project_Createvue_type_template_id_885ccf9a_hoisted_5, (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_6, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.lorem), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  rows: "15",
                  type: "textarea",
                  modelValue: _ctx.project[_ctx.slides[0]],
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.project[_ctx.slides[0]] = $event),
                  name: _ctx.slides[0],
                  class: "rounded text-body2 input-white",
                  rules: [val => val && val !== '' && val !== null && val.length > 1 || '']
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["name"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                name: _ctx.slides[1],
                class: "column no-wrap q-pt-xl"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_8, [Form_Project_Createvue_type_template_id_885ccf9a_hoisted_9, (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_10, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.lorem), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_11, [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_12, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.projectInfo.platforms, (platform, i) => {
                  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_radio, {
                    key: platform,
                    modelValue: _ctx.project[_ctx.slides[1]],
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.project[_ctx.slides[1]] = $event),
                    name: _ctx.slides[1],
                    val: platform,
                    size: "lg",
                    color: "secondary",
                    "checked-icon": _ctx.formatPlatformIconSrc(platform),
                    "unchecked-icon": _ctx.formatPlatformIconSrc(platform),
                    class: "field-select bg-none text-body1 font-medium color-primary2 rounded q-py-sm q-px-md",
                    style: {
                      "min-height": "70px"
                    }
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_13, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.getPlatformInfo(platform, 'title')), 1), i == 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_tooltip_pro, {
                      key: 0,
                      anchor: "bottom middle",
                      self: "center middle",
                      bgColor: "transparent",
                      color: "primary",
                      offset: [0, _ctx.$q.screen.xs ? 10 : 15],
                      style: {
                        "opacity": "0.4"
                      },
                      modelValue: _ctx.platformRecommended,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.platformRecommended = $event),
                      onBeforeHide: _ctx.beforeHide
                    }, {
                      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Recommended ")]),
                      _: 1
                    }, 8, ["offset", "modelValue", "onBeforeHide"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
                    _: 2
                  }, 1032, ["modelValue", "name", "val", "checked-icon", "unchecked-icon"]);
                }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                  modelValue: _ctx.project[_ctx.slides[1]],
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.project[_ctx.slides[1]] = $event),
                  name: _ctx.slides[1],
                  size: "lg",
                  color: "secondary",
                  val: "no-preference",
                  label: "No Preference",
                  class: "field-select field-select-none bg-none text-body1 font-medium color-primary2 rounded q-py-sm q-px-md",
                  style: {
                    "min-height": "70px"
                  }
                }, null, 8, ["modelValue", "name"])])])]),
                _: 1
              }, 8, ["name"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                name: _ctx.slides[2],
                class: "column no-wrap q-pt-xl"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_14, [Form_Project_Createvue_type_template_id_885ccf9a_hoisted_15, (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_16, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.lorem), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_17, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  rows: "5",
                  type: "textarea",
                  modelValue: _ctx.project[_ctx.slides[2]],
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.project[_ctx.slides[2]] = $event),
                  name: _ctx.slides[2],
                  class: "rounded text-body2 input-white",
                  rules: [val => true]
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["name"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                name: _ctx.slides[3],
                class: "column no-wrap q-pt-xl"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_18, [Form_Project_Createvue_type_template_id_885ccf9a_hoisted_19, (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_20, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.lorem), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_21, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  rows: "15",
                  type: "textarea",
                  modelValue: _ctx.project[_ctx.slides[3]],
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.project[_ctx.slides[3]] = $event),
                  name: _ctx.slides[3],
                  class: "rounded text-body2 input-white",
                  rules: [val => true]
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["name"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                name: _ctx.slides[4],
                class: "column no-wrap q-pt-xl"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_22, [Form_Project_Createvue_type_template_id_885ccf9a_hoisted_23, (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_24, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.lorem), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_25, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                  outlined: "",
                  autofocus: "",
                  rows: "15",
                  type: "textarea",
                  modelValue: _ctx.project[_ctx.slides[4]],
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.project[_ctx.slides[4]] = $event),
                  name: _ctx.slides[4],
                  class: "rounded text-body2 input-white",
                  rules: [val => true]
                }, null, 8, ["modelValue", "name", "rules"])])]),
                _: 1
              }, 8, ["name"])]),
              _: 1
            }, 8, ["modelValue"]), (0,vue_esm_bundler/* createElementVNode */._)("div", Form_Project_Createvue_type_template_id_885ccf9a_hoisted_26, [(0,vue_esm_bundler/* createElementVNode */._)("div", null, [_ctx.slideNumber > 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
              key: 0,
              outline: "",
              "no-caps": "",
              label: "Back",
              padding: "md",
              color: "primary",
              style: {
                "width": "150px"
              },
              onClick: _cache[9] || (_cache[9] = $event => _ctx.previousSlide()),
              ripple: {
                color: 'secondary'
              },
              disable: _ctx.project_submitting,
              class: "bg-none text-primary font-medium text-body1 rounded"
            }, null, 8, ["disable"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              "no-caps": "",
              label: _ctx.slideNumber == _ctx.slides.length - 1 ? 'Submit' : 'Next',
              type: "submit",
              padding: "md",
              color: "primary",
              style: {
                "width": "150px"
              },
              onClick: _cache[10] || (_cache[10] = $event => _ctx.nextSlide()),
              ripple: {
                color: 'secondary'
              },
              disable: _ctx.project_submitting,
              class: "bg-primary text-white font-medium text-body1 rounded"
            }, null, 8, ["label", "disable"])])])])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Forms/Form_Project_Create.vue?vue&type=template&id=885ccf9a

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Forms/Form_Project_Create.vue?vue&type=script&lang=js



/* harmony default export */ const Form_Project_Createvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'FormProjectCreate',
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const project_data = [{
      label: 'Description',
      required: true
    }, {
      label: 'Platform',
      required: true
    }, {
      label: 'Walkthrough',
      required: false
    }, {
      label: 'Warning',
      required: false
    }, {
      label: 'Resources',
      required: false
    }];
    return {
      prevTitle: document.title,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      platformRecommended: false,
      slidesModel: project_data[0].label,
      project: {},
      project_data,
      project_submitting: false,
      project_submitted: undefined
    };
  },
  async mounted() {
    this.prevTitle = this.$root?.config?.metaData?.title;
    this.$root.setMeta({
      title: this.projectInfo.title
    });
  },
  computed: {
    slides() {
      return this.project_data.map(d => d.label);
    },
    projectInfo() {
      return this.$root.project.info;
    },
    slideNumber() {
      return this.slides.indexOf(this.slidesModel);
    },
    slideCount() {
      return this.slides.length;
    }
  },
  watch: {
    slidesModel: {
      async handler(val) {
        if (val == this.slides[1]) {
          setTimeout(() => {
            if (this.slideNumber == 1) {
              this.platformRecommended = true;
            } else {
              this.platformRecommended = false;
            }
          }, 500);
        } else {
          this.platformRecommended = false;
        }
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['getPlatformInfo', 'formatPlatformIconSrc']),
    goTo_ProjectDirectory() {
      // Open Task Directory
      this.$root.toggleRequest('task', false);
      this.$root.toggleRequest('project', true);
      // Close this form
      this.$root.toggleForm_Project(false);
    },
    validateData() {
      if (!this.project || isNaN(this.slideNumber) || !this.slides) return;
      if (this.project[this.slides[this.slideNumber]] || this.project_data[this.slideNumber].required === false) return true;
      return false;
    },
    previousSlide() {
      this.$refs.formSlider.previous();
    },
    nextSlide() {
      if (!this.validateData()) return;
      if (this.slideNumber != this.slides.length - 1) {
        this.$refs.formSlider.next();
      } else {
        this.submitProject();
      }
    },
    submitProject() {
      console.log('Project submitted');
    },
    gotoSlideName(name) {
      if (!this.validateData()) return;
      this.$refs.formSlider.goTo(name);
    },
    beforeHide() {
      if (this.slidesModel == this.slides[1]) {
        this.platformRecommended = true;
      }
    }
  },
  beforeUnmount() {
    if (this.project_submitted !== true) this.$root.setMeta({
      title: this.prevTitle
    });
  }
}));
;// CONCATENATED MODULE: ./src/components/Forms/Form_Project_Create.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js
var QCarousel = __webpack_require__(97052);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(41694);
;// CONCATENATED MODULE: ./src/components/Forms/Form_Project_Create.vue




;
const Form_Project_Create_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Form_Project_Createvue_type_script_lang_js, [['render',Form_Project_Createvue_type_template_id_885ccf9a_render]])

/* harmony default export */ const Form_Project_Create = (Form_Project_Create_exports_);
;














runtime_auto_import_default()(Form_Project_Createvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QIcon: QIcon/* default */.Z,QSpace: QSpace/* default */.Z,QBtn: QBtn/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QCarousel: QCarousel/* default */.Z,QCarouselSlide: QCarouselSlide/* default */.Z,QInput: QInput/* default */.Z,QRadio: QRadio/* default */.Z});runtime_auto_import_default()(Form_Project_Createvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/RedirectConfirmation.vue?vue&type=template&id=3c30bff2

const RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_1 = {
  key: 0,
  class: "absolute-top-right"
};
const RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_2 = {
  class: "text-h5 font-demi-bold letter-space-normal"
};
const RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "Cancel", -1);
const RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_4 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "Okay", -1);
function RedirectConfirmationvue_type_template_id_3c30bff2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
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
        }, null, 8, ["name"]), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-pt-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.options?.message), 1)]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
      align: "right",
      class: "full-width q-gutter-sm q-py-md"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        outline: "",
        "no-caps": "",
        color: "primary",
        class: "col rounded"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_3]),
        _: 1
      })), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "col rounded slide-hover",
        href: _ctx.options?.url
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [RedirectConfirmationvue_type_template_id_3c30bff2_hoisted_4, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "icon-arrow-narrow-right",
          size: "xs",
          class: "slide-hover-left-md q-ml-sm"
        })]),
        _: 1
      }, 8, ["href"])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/RedirectConfirmation.vue?vue&type=template&id=3c30bff2

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
 
;// CONCATENATED MODULE: ./src/components/Dialogs/RedirectConfirmation.vue




;
const RedirectConfirmation_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RedirectConfirmationvue_type_script_lang_js, [['render',RedirectConfirmationvue_type_template_id_3c30bff2_render]])

/* harmony default export */ const RedirectConfirmation = (RedirectConfirmation_exports_);
;






runtime_auto_import_default()(RedirectConfirmationvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QIcon: QIcon/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(RedirectConfirmationvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/UpgradeYourPlan.vue?vue&type=template&id=c11d6bd0

const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_1 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, "Change your plan", -1);
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_2 = {
  class: "q-pb-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 font-medium color-primary2"
}, " Your current plan ", -1);
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_4 = {
  class: "row q-col-gutter-x-lg items-center"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_5 = {
  class: "col-auto letter-space-normal"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_6 = {
  class: "q-py-xs text-body2 font-medium badge-text-active"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_7 = {
  class: "col-auto text-body2 text-primary letter-space-normal"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_8 = {
  class: "q-pb-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 font-medium color-primary2"
}, " Days used on your current plan ", -1);
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_10 = {
  class: "q-my-sm"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_11 = {
  class: "q-pb-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_12 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 font-medium color-primary2"
}, "Your new plan", -1);
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_13 = {
  class: "row q-col-gutter-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_14 = {
  class: "q-pb-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_15 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 font-medium color-primary2"
}, "Billing", -1);
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_16 = {
  class: "q-my-sm"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_17 = {
  class: "row q-col-gutter-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_18 = {
  class: "q-pb-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_19 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 font-medium color-primary2"
}, "Starts on", -1);
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_20 = {
  class: "q-my-sm flex inline"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_21 = {
  class: "q-pb-md"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_22 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 font-medium color-primary2"
}, " Message (Optional) ", -1);
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_23 = {
  class: "q-my-sm"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_24 = {
  class: "text-h3 font-medium"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_25 = {
  class: "text-subtitle1 letter-space-normal"
};
const UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_26 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Submit Change Request", -1);
function UpgradeYourPlanvue_type_template_id_c11d6bd0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_card_item = (0,vue_esm_bundler/* resolveComponent */.up)("card-item");
  const _component_RemainingDaysProgress = (0,vue_esm_bundler/* resolveComponent */.up)("RemainingDaysProgress");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_date = (0,vue_esm_bundler/* resolveComponent */.up)("q-date");
  const _component_q_popup_proxy = (0,vue_esm_bundler/* resolveComponent */.up)("q-popup-proxy");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "rounded q-pa-sm"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card_section, {
      key: 0,
      class: "text-right"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)]),
      _: 1
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-center bg-transparent q-px-lg", _ctx.noclose ? 'q-pt-md' : 'q-py-none'])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_1]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-px-lg q-pt-lg q-pb-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_2, [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_3, (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
        class: "badge-bg-active badge-border-active q-my-sm cursor-pointer border-add hover-border-secondary"
      }, {
        title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_5, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.label) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription_talent_id) + " ", 1), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_6, [(0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.planPriceCalculator(_ctx.subscription_talent_id, _ctx.subscription_billing_id)?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("template", null, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription_BillingTypes[_ctx.subscription_billing_id]), 1)])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.description_1) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription_talent_id === -1 ? 'custom' : _ctx.numberToWords(_ctx.subscription_talent_id)) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription_talent_id > 1 || _ctx.subscription_talent_id === -1 ? 'users' : 'user') + ". ", 1)])]),
        _: 1
      })), [[_directive_ripple, false]])]), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_8, [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_9, (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_10, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_RemainingDaysProgress)])]), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_11, [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_12, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_13, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.subscription_Talents, item => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          key: item,
          class: "col-12 col-sm-6 col-md-4"
        }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
          flat: "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-add border-md text-body2 hover-border-secondary", _ctx.newPlan['talent']?.value === item.value ? 'border-secondary bg-accent' : ''])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_radio, {
            modelValue: _ctx.newPlan['talent'],
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.newPlan['talent'] = $event),
            val: item,
            color: "secondary",
            class: "fit q-py-xs q-px-sm"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
            _: 2
          }, 1032, ["modelValue", "val"])), [[_directive_ripple, {
            color: 'secondary'
          }]])]),
          _: 2
        }, 1032, ["class"])), [[_directive_ripple, {
          color: 'secondary'
        }]])]);
      }), 128))])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_14, [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_15, (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_16, [(0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_17, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.subscription_BillingTypes, item => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          key: item,
          class: "col-12 col-sm-6"
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-add border-md text-body2 hover-border-secondary", _ctx.newPlan['billing']?.id === item.id ? 'border-secondary bg-accent' : ''])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_radio, {
            modelValue: _ctx.newPlan['billing'],
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.newPlan['billing'] = $event),
            val: item,
            color: "secondary",
            class: "fit q-py-xs q-px-sm"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.label) + " ", 1), item.savings && _ctx.planPriceCalculator(_ctx.newPlan.talent?.value || 1, item.id)?.discount_label?.toLowerCase?.() !== 'custom' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
              key: 0,
              class: "badge badge-blue font-medium q-ml-xs"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.savings_label) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.planPriceCalculator(_ctx.newPlan.talent?.value || 1, item.id)?.discount_label), 1)]),
              _: 2
            }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
            _: 2
          }, 1032, ["modelValue", "val"])), [[_directive_ripple, {
            color: 'secondary'
          }]])]),
          _: 2
        }, 1032, ["class"])]);
      }), 128))])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_18, [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_19, (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_20, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        unelevated: "",
        modelValue: _ctx.newPlan.start_date,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.newPlan.start_date = $event),
        onChange: _ctx.startDateInput,
        placeholder: "Select date",
        class: "hover-text-secondary cursor-pointer",
        style: {
          "width": "140px"
        }
      }, {
        prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "icon-calendar",
          size: "sm",
          class: "hover-text-secondary"
        })]),
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_popup_proxy, {
          "transition-show": "scale",
          "transition-hide": "scale",
          offset: [-170, -100]
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_date, {
            "today-btn": "",
            "first-day-of-week": "1",
            mask: "MMM DD, YYYY",
            color: "secondary",
            "years-in-month-view": "",
            options: _ctx.yearFromToday,
            modelValue: _ctx.newPlan.start_date,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.newPlan.start_date = $event),
            "navigation-min-year-month": _ctx.thisMonth,
            "navigation-max-year-month": _ctx.after1Year
          }, null, 8, ["options", "modelValue", "navigation-min-year-month", "navigation-max-year-month"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue", "onChange"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_21, [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_22, (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_23, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        rows: "4",
        type: "textarea",
        placeholder: "Enter a description...",
        class: "format-bold-light"
      })])])]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
      class: "full-width justify-between q-px-lg q-pb-lg q-pt-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_24, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.planPriceCalculator(_ctx.newPlan.talent?.value, _ctx.newPlan.billing?.id)?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_25, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.newPlan['billing']?.billed_label), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "rounded slide-hover",
        disable: !_ctx.allDataIsValid,
        onClick: _ctx.nextBtnClick
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [UpgradeYourPlanvue_type_template_id_c11d6bd0_hoisted_26, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "sm",
          name: "icon-arrow-narrow-right",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-px-sm", {
            'slide-hover-left-md': _ctx.allDataIsValid
          }])
        }, null, 8, ["class"])]),
        _: 1
      }, 8, ["disable", "onClick"])])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/UpgradeYourPlan.vue?vue&type=template&id=c11d6bd0

// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__(54170);
// EXTERNAL MODULE: ./src/components/Helpers/Subscription/RemainingDays-Progress.vue + 4 modules
var RemainingDays_Progress = __webpack_require__(11147);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/UpgradeYourPlan.vue?vue&type=script&lang=js








/* harmony default export */ const UpgradeYourPlanvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'Dialog_UpgradeYourPlan',
  emits: ['nextBtnClick'],
  components: {
    RemainingDaysProgress: RemainingDays_Progress/* default */.Z
  },
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newPlan: {
        talent: {},
        billing: {},
        start_date: null
      },
      numberToWords: functions.numberToWords
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrg']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['subscription', 'subscription_BillingTypes', 'subscription_Talents']),
    subscription_billing_id() {
      return this.orgsubscription?.subscription_billing_id;
    },
    subscription_talent_id() {
      return this.orgsubscription?.subscription_talent_id;
    },
    thisMonth() {
      return date/* default.formatDate */.ZP.formatDate(this.$root.realtimeDate, 'YYYY/MM');
    },
    after1Year() {
      return date/* default.formatDate */.ZP.formatDate(date/* default.addToDate */.ZP.addToDate(this.$root.realtimeDate, {
        years: 1
      }), 'YYYY/MM');
    },
    orgsubscription() {
      return !fn_store/* default.getAuth */.Z.getAuth() ? {} : this.selectedOrg?.subscriptions;
    },
    allDataIsValid() {
      return this.newPlan?.talent?.value && this.newPlan?.billing?.value && this.newPlan?.start_date && date/* default.isValid */.ZP.isValid(this.newPlan?.start_date) && this.yearFromToday(date/* default.formatDate */.ZP.formatDate(this.newPlan?.start_date, 'YYYY/MM/DD'));
    }
  },
  mounted() {},
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['planPriceCalculator']),
    formatMoney(money, minimumFractionDigits = 0) {
      return (0,functions.formatMoney)(money, {
        minimumFractionDigits
      });
    },
    nextBtnClick() {
      if (this.allDataIsValid) {
        this.$root.dialogRequestUpgrade = true;
        this.$emit('nextBtnClick', this.newPlan);
      }
    },
    yearFromToday(d) {
      return d >= date/* default.formatDate */.ZP.formatDate(this.$root.realtimeDate, 'YYYY/MM/DD') && d <= date/* default.formatDate */.ZP.formatDate(date/* default.addToDate */.ZP.addToDate(this.$root.realtimeDate, {
        year: 1
      }), 'YYYY/MM/DD');
    },
    startDateInput(e) {
      if (date/* default.isValid */.ZP.isValid(e)) {
        this.newPlan.start_date = date/* default.formatDate */.ZP.formatDate(e, 'MMM DD, YYYY');
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Dialogs/UpgradeYourPlan.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__(52765);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js + 1 modules
var QDate = __webpack_require__(67088);
;// CONCATENATED MODULE: ./src/components/Dialogs/UpgradeYourPlan.vue




;
const UpgradeYourPlan_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(UpgradeYourPlanvue_type_script_lang_js, [['render',UpgradeYourPlanvue_type_template_id_c11d6bd0_render]])

/* harmony default export */ const UpgradeYourPlan = (UpgradeYourPlan_exports_);
;










runtime_auto_import_default()(UpgradeYourPlanvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QRadio: QRadio/* default */.Z,QBadge: QBadge/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QPopupProxy: QPopupProxy/* default */.Z,QDate: QDate/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(UpgradeYourPlanvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

// EXTERNAL MODULE: ./src/assets/scripts/notification.js
var notification = __webpack_require__(2641);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/OnBoarding.vue?vue&type=template&id=1b0bb13f



const OnBoardingvue_type_template_id_1b0bb13f_hoisted_1 = {
  class: "text-body2 text-left q-mr-sm",
  style: {
    "min-width": "110px"
  }
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_2 = {
  class: "full-width"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_3 = {
  class: "full-width"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_4 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h2 text-primary font-medium"
}, " Welcome to Growmodo! ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 color-primary2"
}, " A quick message from our team ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_6 = {
  class: "full-width"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_7 = {
  class: "full-width text-center"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_8 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium q-py-md q-pl-lg"
}, " Start Your Account Setup ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "full-width text-center text-body1 text-primary"
}, " In less than 2 minutes ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_10 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 color-primary2"
}, " Let us personalize your service experience ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_11 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, " How would you like to use Growmodo? ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_12 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_13 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, " How familiar are you with working with a remote team? ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_14 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_15 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "limited-title"
}, " How would you describe your experience level with design and development work? ")], -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_16 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_17 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "limited-title"
}, " How do you prefer to work with the Growmodo talent on design tasks? ")], -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_18 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_19 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "limited-title"
}, " How do you prefer to work with the Growmodo talent on development tasks? ")], -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_20 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_21 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, " What design tools do you already use or want us to use? ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_22 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_23 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, " What tech stack do you use or want us to use? ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_24 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_25 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "limited-title-lg"
}, " What are the top 3 qualities that would make Growmodo an indispensable extension of your team? ")], -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_26 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 color-primary2"
}, "(Only 3 selectable)", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_27 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_28 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "limited-title"
}, " What are your current pain points that led to signing up with Growmodo? ")], -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_29 = {
  class: "row q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_30 = {
  key: 0,
  class: "full-width text-center q-mt-lg"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_31 = {
  class: "flex flex-center q-col-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_32 = {
  key: 0,
  class: "full-width",
  style: {
    "max-width": "240px"
  }
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_33 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-px-sm text-body1 font-medium"
}, " Back ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_34 = {
  class: "q-pl-sm text-body1 font-medium"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_35 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-medium"
}, " Thank You. Your account has already been set up and is ready to use. ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_36 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 color-primary2"
}, " Your maintenance plan is active, you are able to request maintanenance tasks. ", -1);
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_37 = {
  class: "full-width text-center q-gutter-md"
};
const OnBoardingvue_type_template_id_1b0bb13f_hoisted_38 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Go to homepage", -1);
function OnBoardingvue_type_template_id_1b0bb13f_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_linear_progress = (0,vue_esm_bundler/* resolveComponent */.up)("q-linear-progress");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_video = (0,vue_esm_bundler/* resolveComponent */.up)("q-video");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_step = (0,vue_esm_bundler/* resolveComponent */.up)("q-step");
  const _component_q_space = (0,vue_esm_bundler/* resolveComponent */.up)("q-space");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_checkbox = (0,vue_esm_bundler/* resolveComponent */.up)("q-checkbox");
  const _component_card_item = (0,vue_esm_bundler/* resolveComponent */.up)("card-item");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_q_stepper = (0,vue_esm_bundler/* resolveComponent */.up)("q-stepper");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: ""
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.formStep > 1 ? 'container fit' : '')
    }, [_ctx.formStep > 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_toolbar, {
      key: 0,
      class: "q-py-none q-px-lg items-center"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_1, " Question " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.formStep - 1) + " of 9 ", 1), (0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
        rounded: "",
        value: _ctx.formStep / 10,
        size: "4px",
        "track-color": "grey-4",
        class: "cursor-pointer full-width",
        color: "secondary"
      }, null, 8, ["value"])])]),
      _: 1
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)([_ctx.formStep > 1 ? 'window-height' : '', "flex flex-center"]),
      style: {
        "max-height": "calc(100vh - 150px)"
      }
    }, [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
      modelValue: _ctx.formStep,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.formStep = $event),
      flat: "",
      animated: "",
      "header-nav": "",
      ref: "formStepper",
      color: "primary",
      "header-class": "hidden",
      class: "full-width",
      "transition-prev": "slide-right",
      "transition-next": "slide-left"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 1,
        title: "Welcome",
        class: "q-py-lg"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card_section, {
            key: 0,
            class: "text-right"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)]),
            _: 1
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none q-pb-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_4, OnBoardingvue_type_template_id_1b0bb13f_hoisted_5]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "rounded q-px-none q-py-lg hover-shrink-wrapper"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_video, {
              title: "Welcome to Growmodo",
              ref: "WelcomeVideo",
              ratio: 16 / 9,
              src: "https://www.loom.com/embed/c2744e314e2b43f0bcad53c96dfb9741",
              class: "rounded fit"
            }, null, 512)])]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
            align: "center",
            class: "q-pa-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              "no-caps": "",
              unelevated: "",
              color: "primary",
              class: "rounded slide-hover",
              onClick: _ctx.start
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_8, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "icon-arrow-narrow-right",
                size: "xs",
                class: "slide-hover-left-md q-ml-sm q-pr-lg"
              })]),
              _: 1
            }, 8, ["onClick"])]), OnBoardingvue_type_template_id_1b0bb13f_hoisted_9]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 2,
        title: "Question 1"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_10, OnBoardingvue_type_template_id_1b0bb13f_hoisted_11]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_12, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
                label: 'Web Design',
                key: 'web_design',
                icon: 'icon-browser'
              }, {
                label: 'Web App Design',
                key: 'web_app_design',
                icon: 'icon-monitor-03'
              }, {
                label: 'Mobile App Design',
                key: 'mobile_app_design',
                icon: 'icon-phone-02'
              }, {
                label: 'Graphic Design',
                key: 'graphic_design',
                icon: 'icon-pen-tool-02'
              }, {
                label: 'Branding',
                key: 'branding',
                icon: 'icon-briefcase-01'
              }, {
                label: 'Portal Development',
                key: 'portal_development',
                icon: 'icon-code-browser'
              }, {
                label: 'Marketplace Development',
                key: 'marketplace_development',
                icon: 'icon-shopping-cart-03'
              }, {
                label: 'Website Development',
                key: 'website_development',
                icon: 'icon-terminal-browser'
              }, {
                label: 'Funnel Building',
                key: 'funnel_building',
                icon: 'icon-filter-funnel-02'
              }, {
                label: 'No-code App Development',
                key: 'no_code_app_development',
                icon: 'icon-rows-03'
              }], item => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  key: item.key,
                  class: "col-12 col-sm-6 col-md-3"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-sm q-pr-lg", _ctx.questions.q1.includes(item.label) ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.toggleAnsArray('q1', item.label)
                }, {
                  avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
                    size: "lg",
                    autofocus: "",
                    modelValue: _ctx.questions.q1,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.questions.q1 = $event),
                    val: item.label,
                    color: "secondary",
                    name: item.label,
                    class: "field-select-none"
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                      icon: item.icon || 'icon-browser'
                    }, null, 8, ["icon"])]),
                    _: 2
                  }, 1032, ["modelValue", "val", "name"])]),
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.questions.q1.includes(item.label) ? 'text-secondary' : 'text-primary')
                  }, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 3)]),
                  _: 2
                }, 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 64))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 3,
        title: "Question 2"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_13]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
              class: "limited-width-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_14, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`I've never done this before`, `I used freelancer marketplaces or agencies before`, `I used a similar service like Growmodo before`, `I work with remote designers & developers all the time`], item => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  key: item,
                  class: "col-12 col-sm-6"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-md q-pr-lg", _ctx.questions.q2 === item ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.questions.q2 = item
                }, {
                  avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                    size: "sm",
                    modelValue: _ctx.questions.q2,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.questions.q2 = $event),
                    val: item,
                    color: "secondary",
                    name: item
                  }, null, 8, ["modelValue", "val", "name"])]),
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
                  _: 2
                }, 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 64))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 4,
        title: "Question 3"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_15]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
              class: "limited-width-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_16, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`I don't know anything about design & development`, `I can't design or code myself, but I know exactly what I want`, `I have a design and/or development background myself`, `I have worked on multiple web design projects before`], item => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  key: item,
                  class: "col-12 col-sm-6"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-md q-pr-lg", _ctx.questions.q3 === item ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.questions.q3 = item
                }, {
                  avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                    size: "sm",
                    modelValue: _ctx.questions.q3,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.questions.q3 = $event),
                    val: item,
                    color: "secondary",
                    name: item
                  }, null, 8, ["modelValue", "val", "name"])]),
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
                  _: 2
                }, 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 64))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 5,
        title: "Question 4"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_17]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
              class: "limited-width-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_18, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`I don't know anything about design and rely on your creativity and expertise`, `I will give detailed briefs, and I like you to follow them thoroughly`, `I will determine this on a task-by-task basis`, `I will not use you for design tasks`], item => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  key: item,
                  class: "col-12 col-sm-6"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-md q-pr-lg", _ctx.questions.q4 === item ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.questions.q4 = item
                }, {
                  avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                    size: "sm",
                    modelValue: _ctx.questions.q4,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.questions.q4 = $event),
                    val: item,
                    color: "secondary",
                    name: item
                  }, null, 8, ["modelValue", "val", "name"])]),
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
                  _: 2
                }, 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 64))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 6,
        title: "Question 5"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_19]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
              class: "limited-width-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_20, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`I trust your Quality Assurance process and rely on your expertise`, `I like you to follow our development guidelines and will provide QA checklists`, `I will determine this on a task-by-task basis`, `I will not use you for development tasks`], item => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  key: item,
                  class: "col-12 col-sm-6"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-md q-pr-lg", _ctx.questions.q5 === item ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.questions.q5 = item
                }, {
                  avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
                    size: "sm",
                    modelValue: _ctx.questions.q5,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.questions.q5 = $event),
                    val: item,
                    color: "secondary",
                    name: item
                  }, null, 8, ["modelValue", "val", "name"])]),
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
                  _: 2
                }, 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 64))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 7,
        title: "Question 6"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_21]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_22, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
                label: 'Adobe Photoshop',
                key: 'adobe_photoshop',
                icon: _ctx.formatPlatformIconSrc('Photoshop')
              }, {
                label: 'Adobe Illustrator',
                key: 'adobe_illustrator',
                icon: _ctx.formatPlatformIconSrc('Illustrator')
              }, {
                label: 'Adobe InDesign',
                key: 'adobe_indesign',
                icon: _ctx.formatPlatformIconSrc('InDesign')
              }, {
                label: 'Adobe XD',
                key: 'adobe_xd',
                icon: _ctx.formatPlatformIconSrc('Adobe XD')
              }, {
                label: 'Figma',
                key: 'figma',
                icon: _ctx.formatPlatformIconSrc('Figma')
              }, {
                label: 'Canva',
                key: 'canva',
                icon: _ctx.formatPlatformIconSrc('Canva')
              }, {
                label: `I don't mind`,
                key: 'none'
              }], item => {
                return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                  key: item.key,
                  class: "col-12 col-sm-6 col-md-3"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-sm q-pr-lg", _ctx.questions.q6.includes(item.label) ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.toggleAnsArray('q6', item.label)
                }, (0,vue_esm_bundler/* createSlots */.Nv)({
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.questions.q6.includes(item.label) ? 'text-secondary' : 'text-primary')
                  }, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 3)]),
                  _: 2
                }, [item.icon ? {
                  name: "avatar",
                  fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
                    size: "lg",
                    autofocus: "",
                    modelValue: _ctx.questions.q6,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.questions.q6 = $event),
                    val: item.label,
                    color: "secondary",
                    name: item.label,
                    class: "field-select-none"
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                      icon: item.icon || 'icon-browser'
                    }, null, 8, ["icon"])]),
                    _: 2
                  }, 1032, ["modelValue", "val", "name"])]),
                  key: "0"
                } : undefined]), 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 128))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 8,
        title: "Question 7"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_23]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_24, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
                label: 'Wordpress',
                key: 'wordpress',
                icon: _ctx.formatPlatformIconSrc('Wordpress')
              }, {
                label: 'Webflow',
                key: 'webflow',
                icon: _ctx.formatPlatformIconSrc('Webflow')
              }, {
                label: 'Shopify',
                key: 'shopify',
                icon: _ctx.formatPlatformIconSrc('Shopify')
              }, {
                label: 'Hubspot CMS',
                key: 'hubspot_cms',
                icon: _ctx.formatPlatformIconSrc('Hubspot')
              }, {
                label: 'HTML',
                key: 'hubstuff_cms',
                icon: _ctx.formatPlatformIconSrc('HTML')
              }, {
                label: 'Tailwind CSS',
                key: 'tailwind_css',
                icon: _ctx.formatPlatformIconSrc('TailwindCSS')
              }, {
                label: 'React',
                key: 'react',
                icon: _ctx.formatPlatformIconSrc('ReactJS')
              }, {
                label: 'Laravel',
                key: 'laravel',
                icon: _ctx.formatPlatformIconSrc('Laravel')
              }, {
                label: 'VueJS',
                key: 'vuejs',
                icon: _ctx.formatPlatformIconSrc('VueJS')
              }, {
                label: `I don't mind`,
                key: 'none'
              }], item => {
                return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                  key: item.key,
                  class: "col-12 col-sm-6 col-md-3"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-sm q-pr-lg", _ctx.questions.q7.includes(item.label) ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.toggleAnsArray('q7', item.label)
                }, (0,vue_esm_bundler/* createSlots */.Nv)({
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.questions.q7.includes(item.label) ? 'text-secondary' : 'text-primary')
                  }, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 3)]),
                  _: 2
                }, [item.icon ? {
                  name: "avatar",
                  fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
                    size: "lg",
                    autofocus: "",
                    modelValue: _ctx.questions.q7,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.questions.q7 = $event),
                    val: item.label,
                    color: "secondary",
                    name: item.label,
                    class: "field-select-none"
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                      icon: item.icon || 'icon-browser'
                    }, null, 8, ["icon"])]),
                    _: 2
                  }, 1032, ["modelValue", "val", "name"])]),
                  key: "0"
                } : undefined]), 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 128))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 9,
        title: "Question 8"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_25, OnBoardingvue_type_template_id_1b0bb13f_hoisted_26]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_27, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`Consistent high work quality`, `Clear and fast communication`, `Big variety of skillsets`, `Hands-on project management`, `Quick to hire additional talent`, `Proactive task suggestions`, `On-demand design & tech advice`, `Others`], item => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  key: item,
                  class: "col-12 col-sm-6 col-md-3"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-md q-pr-lg", _ctx.questions.q8.includes(item) ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : _ctx.questions.q8.length < 3 ? 'hover-border-secondary hover-bg-accent' : 'cursor-not-allowed disabled-state']),
                  onClick: $event => _ctx.questions.q8.includes(item) || _ctx.questions.q8.length < 3 ? _ctx.toggleAnsArray('q8', item) : void 0
                }, {
                  avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
                    size: "lg",
                    autofocus: "",
                    modelValue: _ctx.questions.q8,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.questions.q8 = $event),
                    val: item,
                    color: "secondary",
                    "checked-icon": "icon-check-square ",
                    "unchecked-icon": "icon-square",
                    "indeterminate-icon": "icon-square text-secondary text-h5",
                    class: "cursor-inherit",
                    name: item,
                    disable: !_ctx.questions.q8.includes(item) && _ctx.questions.q8.length >= 3
                  }, null, 8, ["modelValue", "val", "name", "disable"])]),
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.questions.q8.includes(item) ? 'text-secondary' : 'text-primary')
                  }, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 3)]),
                  _: 2
                }, 1032, ["class", "onClick"])), [[_directive_ripple, _ctx.questions.q8.includes(item) || _ctx.questions.q8.length < 3 ? {
                  color: 'secondary'
                } : false]])]);
              }), 64))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
        name: 10,
        title: "Question 9"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: ""
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "text-center bg-transparent q-px-none"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_28]),
            _: 1
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space, {
            class: "q-py-lg"
          }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "q-px-none flex flex-center"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_29, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`Lack of design talent in our team`, `Lack of development talent in our team`, `Underperforming website`, `Bad app user experience`, `Hiring talent takes too long`, `In-house employees are too expensive`, `Unreliable freelancers`, `Others`], item => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  key: item,
                  class: "col-12 col-sm-6 col-md-3"
                }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
                  align: "center",
                  itemPadding: "none q-px-md",
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-md card-quicklinks card-quicklinks-mini q-py-md q-pr-lg", _ctx.questions.q9.includes(item) ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent']),
                  onClick: $event => _ctx.toggleAnsArray('q9', item)
                }, {
                  avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
                    size: "lg",
                    autofocus: "",
                    modelValue: _ctx.questions.q9,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.questions.q9 = $event),
                    val: item,
                    color: "secondary",
                    "checked-icon": "icon-check-square",
                    "unchecked-icon": "icon-square ",
                    "indeterminate-icon": "icon-square text-secondary text-h5",
                    name: item
                  }, null, 8, ["modelValue", "val", "name"])]),
                  title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.questions.q9.includes(item) ? 'text-secondary' : 'text-primary')
                  }, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 3)]),
                  _: 2
                }, 1032, ["class", "onClick"])), [[_directive_ripple, {
                  color: 'secondary'
                }]])]);
              }), 64))])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), _ctx.formStep > 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_30, [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_31, [_ctx.formStep > 2 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_32, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      "no-caps": "",
      outline: "",
      unelevated: "",
      color: "primary",
      class: "rounded full-width slide-hover full-width hover-shadow-gm q-py-sm",
      onClick: _cache[10] || (_cache[10] = $event => _ctx.prevButtonClicked())
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        size: "sm",
        name: "icon-arrow-narrow-left",
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-pl-sm", !_ctx.onboard_submitting ? 'slide-hover-right-md' : ''])
      }, null, 8, ["class"]), OnBoardingvue_type_template_id_1b0bb13f_hoisted_33]),
      _: 1
    })])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: "full-width",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`max-width: ${_ctx.formStep > 2 ? '240px' : '180px'}`)
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      "no-caps": "",
      unelevated: "",
      color: "primary",
      class: "rounded full-width slide-hover full-width hover-shadow-gm q-py-sm",
      disable: _ctx.onboard_submitting,
      onClick: _cache[11] || (_cache[11] = $event => _ctx.formStep < 10 ? _ctx.nextButtonClicked() : _ctx.submitFormAction())
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", OnBoardingvue_type_template_id_1b0bb13f_hoisted_34, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.formStep < 10 ? 'Continue' : 'Get Started'), 1), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        size: "sm",
        name: "icon-arrow-narrow-right",
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-px-sm", !_ctx.onboard_submitting ? 'slide-hover-left-md' : ''])
      }, null, 8, ["class"])]),
      _: 1
    }, 8, ["disable"])], 4)])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])], 2)], 2), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: "",
      modelValue: _ctx.onboarded,
      "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.onboarded = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
        flat: "",
        style: {
          "width": "980px",
          "max-width": "80vw"
        },
        class: "text-center q-pa-lg"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
            icon: "icon-check-circle-broken",
            iconSize: "md"
          })]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "q-gutter-sm"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_35, OnBoardingvue_type_template_id_1b0bb13f_hoisted_36]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
          class: "q-pa-md"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OnBoardingvue_type_template_id_1b0bb13f_hoisted_37, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
            "no-caps": "",
            unelevated: "",
            ripple: {
              color: 'accent'
            },
            color: "primary",
            class: "rounded slide-hover hover-shadow-gm q-py-md",
            disable: _ctx.onboard_submitting,
            onClick: _cache[12] || (_cache[12] = () => {
              _ctx.$router.push('/');
              _ctx.$emit('exit');
            })
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OnBoardingvue_type_template_id_1b0bb13f_hoisted_38, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              size: "sm",
              name: "icon-arrow-narrow-right",
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-px-sm", !_ctx.onboard_submitting ? 'slide-hover-left-md' : ''])
            }, null, 8, ["class"])]),
            _: 1
          }, 8, ["disable"])), [[_directive_close_popup]])])]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/OnBoarding.vue?vue&type=template&id=1b0bb13f

// EXTERNAL MODULE: ./src/components/Globals/CardItem.vue + 4 modules
var CardItem = __webpack_require__(52156);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/OnBoarding.vue?vue&type=script&lang=js







/* harmony default export */ const OnBoardingvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'OnBoarding',
  emits: ['start', 'done', 'exit'],
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CardIconBox: CardIconBox/* default */.Z,
    CardItem: CardItem/* default */.Z
  },
  data() {
    return {
      formStep: 1,
      onboard_submitting: false,
      onboarded: false,
      questions: {
        q1: [],
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: [],
        q7: [],
        q8: [],
        q9: []
      }
    };
  },
  watch: {
    formStep: {
      async handler(val) {
        if (val > 2) {
          // Check if question has an answer
          if (!this.questions?.[`q${val - 2}`] || !this.questions?.[`q${val - 2}`]?.length) {
            this.notifySelectOption();
            this.formStep--;
          }
        }
      }
    },
    onboarded: {
      async handler(val) {
        if (val) this.$emit('done');
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['formatPlatformIconSrc']),
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['onboardUser']),
    start(e) {
      this.$emit('start', e);
      if (this.formStep < 2) this.formStep++;
    },
    prevButtonClicked() {
      this.$refs?.['formStepper']?.previous?.();
    },
    nextButtonClicked() {
      this.$refs?.['formStepper']?.next?.();
    },
    async submitFormAction() {
      this.onboard_submitting = true;
      if (!this.questions.q9 || !this.questions.q9?.length) {
        this.notifySelectOption();
      } else {
        const _ = this.questions;
        const payload = {
          questions: {
            answer_1: _.q1,
            answer_2: _.q2,
            answer_3: _.q3,
            answer_4: _.q4,
            answer_5: _.q5,
            answer_6: _.q6,
            answer_7: _.q7,
            answer_8: _.q8,
            answer_9: _.q9
          }
        };
        const response = await this.onboardUser(payload);
        if (response.success) {
          this.nextButtonClicked();
          this.onboarded = true;
        } else {
          const message = (0,functions.extractErrorMessageString)(response);
          this.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: message || 'Error while submitting your response'
          });
        }
      }
      this.onboard_submitting = false;
    },
    notifySelectOption() {
      this.$q.notify({
        icon: 'icon-alert-triangle',
        iconColor: 'negative',
        message: 'Please answer the question.'
      });
    },
    toggleAnsArray(questionsKey, labelVal) {
      let labelValIndex = this.questions?.[questionsKey]?.indexOf?.(labelVal);
      if (labelValIndex === -1) {
        this.questions?.[questionsKey].push(labelVal);
      } else {
        this.questions?.[questionsKey].splice(labelValIndex, 1);
      }
    }
  },
  beforeUnmount() {
    this.$emit('exit');
  }
}));
;// CONCATENATED MODULE: ./src/components/Dialogs/OnBoarding.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js
var QLinearProgress = __webpack_require__(8289);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/video/QVideo.js
var QVideo = __webpack_require__(31005);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__(11221);
;// CONCATENATED MODULE: ./src/components/Dialogs/OnBoarding.vue




;


const OnBoarding_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(OnBoardingvue_type_script_lang_js, [['render',OnBoardingvue_type_template_id_1b0bb13f_render]])

/* harmony default export */ const OnBoarding = (OnBoarding_exports_);
;
















runtime_auto_import_default()(OnBoardingvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QToolbar: QToolbar/* default */.Z,QLinearProgress: QLinearProgress/* default */.Z,QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QCardSection: QCardSection/* default */.Z,QVideo: QVideo/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QSpace: QSpace/* default */.Z,QList: QList/* default */.Z,QCheckbox: QCheckbox/* default */.Z,QRadio: QRadio/* default */.Z,QDialog: QDialog/* default */.Z});runtime_auto_import_default()(OnBoardingvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z,ClosePopup: ClosePopup/* default */.Z});

// EXTERNAL MODULE: ./src/stores/app/index.js + 3 modules
var app = __webpack_require__(39);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js














/* harmony default export */ const MainLayoutvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'MainLayout',
  components: {
    DrawerMain: Drawer_Main,
    RequestOptions: Request_Options,
    FormTaskCreate: Form_Task_Create,
    FormProjectCreate: Form_Project_Create,
    RedirectConfirmation: RedirectConfirmation,
    Dialog_UpgradeYourPlan: UpgradeYourPlan,
    DirectoryLayout: DirectoryLayout,
    OnBoarding: OnBoarding
  },
  data() {
    return {
      devTools: false,
      isDebugging: true,
      userNotOnBoard: false,
      startOnBoarding: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user']),
    isOrgOwner() {
      return this.user?.role === 'organization_owner' ? true : false;
    },
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
      this.userNotOnBoard = this.isOrgOwner && !this.clientOnboarded ? true : false;
    }, 1500);
  },
  async mounted() {
    this.init_LoggedIn();
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(app/* default */.Z, ['init_LoggedIn']),
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['updateAccount']),
    onBoarded() {
      this.updateAccount({
        onBoard: true
      });
    },
    initializeOnBoarding() {
      this.startOnBoarding = true;
    },
    refresh() {
      setTimeout(() => {
        window.location.href = window.location.href;
      }, 1000);
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
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/pull-to-refresh/QPullToRefresh.js
var QPullToRefresh = __webpack_require__(90699);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page-sticky/QPageSticky.js + 1 modules
var QPageSticky = __webpack_require__(30627);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;
const MainLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (MainLayout_exports_);
;






runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPullToRefresh: QPullToRefresh/* default */.Z,QPageSticky: QPageSticky/* default */.Z,QBtn: QBtn/* default */.Z,QDialog: QDialog/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=504.1dd8910c.js.map