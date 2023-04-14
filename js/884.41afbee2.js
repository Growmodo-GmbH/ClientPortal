"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[884],{

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AccountSettingsPage)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(6646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/AccountSettingsPage.vue?vue&type=template&id=1262ecf3

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_scroll_area = (0,vue_esm_bundler/* resolveComponent */.up)("q-scroll-area");
  const _component_q_drawer = (0,vue_esm_bundler/* resolveComponent */.up)("q-drawer");
  const _component_AccountProfile = (0,vue_esm_bundler/* resolveComponent */.up)("AccountProfile");
  const _component_q_tab_panel = (0,vue_esm_bundler/* resolveComponent */.up)("q-tab-panel");
  const _component_CompanyProfile = (0,vue_esm_bundler/* resolveComponent */.up)("CompanyProfile");
  const _component_UsersList = (0,vue_esm_bundler/* resolveComponent */.up)("UsersList");
  const _component_SubscriptionInformation = (0,vue_esm_bundler/* resolveComponent */.up)("SubscriptionInformation");
  const _component_q_tab_panels = (0,vue_esm_bundler/* resolveComponent */.up)("q-tab-panels");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: ""
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_layout, {
      container: "",
      view: "LHh lpR lFf",
      class: "absolute-full bg-color"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
        dark: "",
        bordered: "",
        "show-if-above": _ctx.$q.screen.gt.sm,
        side: "left",
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["drawer-settings", {
          ['drawer-settings-dark']: _ctx.$root.dark,
          ['bg-white']: !_ctx.$root.dark
        }]),
        width: 250,
        breakpoint: 600,
        modelValue: _ctx.$root.settingsDrawer,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$root.settingsDrawer = $event)
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
          class: "fit",
          "horizontal-thumb-style": {
            opacity: 0
          },
          "vertical-thumb-style": {
            opacity: 0
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
            padding: "",
            class: "q-pt-lg"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body1 font-medium padding-4b q-mx-sm", {
                ['text-primary-50']: _ctx.$root.dark,
                ['text-primary']: !_ctx.$root.dark
              }])
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Settings")]),
                _: 1
              })]),
              _: 1
            }, 8, ["class"]), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.settingsMenu, (item, i) => {
              return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
                key: i
              }, [item.view !== false ? (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
                key: 0,
                clickable: "",
                class: "menu-item text-body1 rounded font-medium q-mx-sm",
                to: item.noswitch !== true ? '/settings/' + item.key : undefined,
                onClick: () => {
                  // Switch
                  if (item.noswitch !== true) {
                    _ctx.tab = item.key;
                  }
                  // Perform Action
                  if (item.action) item.action();
                }
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                  avatar: "",
                  class: "q-pr-sm",
                  style: {
                    "min-width": "unset"
                  }
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
                    rounded: "",
                    size: "sm",
                    class: "rounded"
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                      name: item.icon,
                      size: "sm"
                    }, null, 8, ["name"])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
                  _: 2
                }, 1024), item.badge ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
                  key: 0,
                  avatar: "",
                  style: {
                    "min-width": "unset"
                  }
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
                    rounded: "",
                    color: item.badge?.color,
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(item.badge?.class + ' ' + (_ctx.tab === item.key ? item.badge?.active_class : item.badge?.inactive_class))
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.badge?.message), 1)]),
                    _: 2
                  }, 1032, ["color", "class"])]),
                  _: 2
                }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
                _: 2
              }, 1032, ["to", "onClick"])), [[_directive_ripple]]) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 64);
            }), 128))]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["show-if-above", "class", "modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
          class: "container"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tab_panels, {
            modelValue: _ctx.tab,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.tab = $event),
            animated: "",
            "transition-prev": "fade",
            "transition-next": "fade",
            class: "bg-transparent"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
              name: "profile"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_AccountProfile)]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
              name: "company_profile"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CompanyProfile)]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
              name: "users"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_UsersList)]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
              name: "subscription"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SubscriptionInformation)]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
            modelValue: _ctx.confirmLogout,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.confirmLogout = $event)
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)(_ctx.$root.messagesDialogs?.confirmLogout, {
              onOkay: _cache[2] || (_cache[2] = $event => _ctx.logoutAccount())
            }), null, 16)]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/AccountSettingsPage.vue?vue&type=template&id=1262ecf3

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Profile.vue?vue&type=template&id=6287fd3c

const _hoisted_1 = {
  class: "q-gutter-y-lg"
};
const _hoisted_2 = {
  class: "q-gutter-sm"
};
const _hoisted_3 = {
  key: 0,
  class: "text-red"
};
const _hoisted_4 = {
  key: 0,
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_5 = {
  class: "row q-col-gutter-md items-center justify-start"
};
const _hoisted_6 = {
  class: "col-12 col-md-6"
};
const _hoisted_7 = {
  class: "col-12 col-md-6"
};
const _hoisted_8 = {
  key: 1,
  class: "col-12 col-sm-8 col-md-9 letter-space-normal"
};
const _hoisted_9 = {
  key: 0,
  class: "text-red"
};
const _hoisted_10 = {
  key: 0,
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_11 = {
  key: 1,
  class: "col-12 col-sm-8 col-md-9 letter-space-normal"
};
const _hoisted_12 = {
  key: 0,
  class: "text-red"
};
const _hoisted_13 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_14 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_15 = ["href"];
const _hoisted_16 = {
  key: 0,
  class: "text-red"
};
const _hoisted_17 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_18 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_19 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_20 = {
  class: "letter-space-normal"
};
const _hoisted_21 = {
  key: 0,
  class: "text-red"
};
const _hoisted_22 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_23 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_24 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-8 col-md-9"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "letter-space-normal"
}, "************")], -1);
const _hoisted_25 = {
  autocorrect: "off",
  autocapitalize: "off",
  autocomplete: "off",
  spellcheck: "false"
};
const _hoisted_26 = {
  class: "q-gutter-sm"
};
const _hoisted_27 = {
  key: 0,
  class: "text-red"
};
const _hoisted_28 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_29 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_30 = {
  key: 0,
  class: "text-red"
};
const _hoisted_31 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_32 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_33 = {
  key: 0,
  class: "text-red"
};
const _hoisted_34 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_35 = {
  key: 1,
  class: "letter-space-normal"
};
function Profilevue_type_template_id_6287fd3c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_InputPhoneNumber = (0,vue_esm_bundler/* resolveComponent */.up)("InputPhoneNumber");
  const _component_external_link = (0,vue_esm_bundler/* resolveComponent */.up)("external-link");
  const _component_SelectRoles = (0,vue_esm_bundler/* resolveComponent */.up)("SelectRoles");
  const _component_SelectUserRole = (0,vue_esm_bundler/* resolveComponent */.up)("SelectUserRole");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_InputPassword = (0,vue_esm_bundler/* resolveComponent */.up)("InputPassword");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "card-padding-title-xs"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h5 text-primary-700 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Profile Information ")]),
          _: 1
        }), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [!_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 0,
          outline: "",
          alwaysShowIcon: "",
          iconSize: "xs",
          label: "Edit Info",
          icon: "icon-pencil-02",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.editing = true),
          class: "button-gm-outline-dark"
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 1,
          outline: "",
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          iconSize: "xs",
          label: "Cancel",
          icon: "icon-x-close",
          class: "button-gm-outline-dark",
          onClick: _ctx.cancelEditing
        }, null, 8, ["flat", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 2,
          alwaysShowIcon: "",
          iconSize: "xs",
          label: "Save Changes",
          icon: "icon-save-01",
          onClick: _ctx.saveAccountInfo
        }, null, 8, ["onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-col-gutter-lg text-body1 card-padding",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.editing ? 'max-width: 900px' : '')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-md']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Full Name"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_3, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        outlined: "",
        placeholder: "First Name",
        modelValue: _ctx.account.firstname,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.account.firstname = $event),
        onChange: _cache[2] || (_cache[2] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        outlined: "",
        placeholder: "Last Name",
        modelValue: _ctx.account.lastname,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.account.lastname = $event),
        onChange: _cache[4] || (_cache[4] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])])])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_8, [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.firstname) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.lastname), 1)]))], 2), !_ctx.isOrgOwner() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 0,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-md']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Username"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_9, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_10, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        outlined: "",
        placeholder: "Username",
        modelValue: _ctx.account.username,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.account.username = $event),
        onChange: _cache[6] || (_cache[6] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_11, [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.username), 1)]))], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Email Address"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_12, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
        key: 0,
        outlined: "",
        placeholder: "example@email.com",
        modelValue: _ctx.account.email,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.account.email = $event),
        onChange: _cache[8] || (_cache[8] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_14, [(0,vue_esm_bundler/* createElementVNode */._)("a", {
        href: 'mailto:' + _ctx.user.email,
        target: "_blank",
        class: "text-primary"
      }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.email), 9, _hoisted_15)]))])], 2),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 2,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, " Company ", 2), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_19, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_20, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.title), 1)])], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.editing || _ctx.isOrgOwner() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 3,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Role"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_21, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_22, [_ctx.editing && _ctx.isOrgOwner() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
        key: 0
      }, [_ctx.isOrgOwner() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectRoles, {
        key: 0,
        modelValue: _ctx.account.title,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.account.title = $event),
        initModel: _ctx.user.title,
        onUpdated: _cache[12] || (_cache[12] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue", "initModel"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectUserRole, {
        key: 1,
        modelValue: _ctx.account.role,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.account.role = $event),
        initModel: _ctx.user.role,
        onUpdated: _cache[14] || (_cache[14] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue", "initModel"]))], 64)) : !_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_23, [_ctx.isOrgOwner() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
        key: 0
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.title), 1)], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
        key: 1
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.userInvitedRoles[_ctx.user.role]?.label || _ctx.user.role || 'Unknown'), 1)], 64))])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 4,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, " Password ", 2), _hoisted_24], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }, 8, ["style"])]),
    _: 1
  }), (0,vue_esm_bundler/* createElementVNode */._)("form", _hoisted_25, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    key: 0,
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "card-padding-xs"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-none",
        style: {
          "min-height": "unset"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h5 text-primary-700 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Account Security ")]),
          _: 1
        }), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_26, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          iconSize: "xs",
          label: "Update Password",
          icon: "icon-save-01",
          onClick: _ctx.updatePwd,
          color: "primary"
        }, null, 8, ["onClick"])])]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-col-gutter-lg card-padding-xs",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.editing ? 'max-width: 900px' : '')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-width items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Old Password"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_27, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_28, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPassword, {
        key: 0,
        modelValue: _ctx.account.password_old,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => _ctx.account.password_old = $event),
        placeholder: "Enter Your Current Password",
        tabindex: "1"
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_29, "*******"))])], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-width items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" New Password"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_30, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_31, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPassword, {
        key: 0,
        modelValue: _ctx.account.password_new,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => _ctx.account.password_new = $event),
        tabindex: "2"
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_32, "*******"))])], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-width items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Confirm New Password"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_33, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_34, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPassword, {
        key: 0,
        modelValue: _ctx.account.password_conf,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => _ctx.account.password_conf = $event),
        tabindex: "3"
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_35, "*******"))])], 2)]),
      _: 1
    }, 8, ["style"])]),
    _: 1
  })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.unsaved,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => _ctx.unsaved = $event)
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)(_ctx.$root.messagesDialogs?.editingUnsaved, {
      onOkay: _cache[18] || (_cache[18] = $event => _ctx.editing = false)
    }), null, 16)]),
    _: 1
  }, 8, ["modelValue"])]);
}
;// CONCATENATED MODULE: ./src/components/Accounts/Profile.vue?vue&type=template&id=6287fd3c

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Helpers/DynamicButton.vue + 4 modules
var DynamicButton = __webpack_require__(6784);
// EXTERNAL MODULE: ./src/components/Helpers/InputPassword.vue + 4 modules
var InputPassword = __webpack_require__(8229);
// EXTERNAL MODULE: ./src/components/Helpers/InputPhoneNumber.vue + 4 modules
var InputPhoneNumber = __webpack_require__(545);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(1872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(3701);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(2393);
// EXTERNAL MODULE: ./src/components/Helpers/SelectRoles.vue + 4 modules
var SelectRoles = __webpack_require__(8577);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectUserRole.vue?vue&type=template&id=99a6e7f6

function SelectUserRolevue_type_template_id_99a6e7f6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    dense: _ctx.dense,
    outlined: "",
    "emit-value": "",
    "hide-bottom-space": "",
    "option-value": "value",
    "option-label": "label",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.listOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
      onClick: scope.opt?.action
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [scope.opt?.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        avatar: "",
        style: {
          "min-width": "unset"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: scope.opt?.icon
        }, null, 8, ["name"])]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt?.label || scope.opt), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.selectModel ? '' : 'text-placeholder')
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.userInvitedRoles[_ctx.selectModel]?.label || _ctx.placeholder), 3)]),
    _: 1
  }, 8, ["dense", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectUserRole.vue?vue&type=template&id=99a6e7f6

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectUserRole.vue?vue&type=script&lang=js



/* harmony default export */ const SelectUserRolevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectRoles',
  emits: ['updated'],
  props: {
    placeholder: {
      type: String,
      default: 'Select role'
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectModel: ''
    };
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.selectModel = val;
      }
    },
    selectModel: {
      async handler(val) {
        if (val !== this.initModel) this.$emit('updated', val);
      }
    }
  },
  mounted() {
    if (this.initModel) this.selectModel = this.initModel;
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['userInvitedRoles']),
    listOptions() {
      return Object.values(this.userInvitedRoles);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectUserRole.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(1233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(2857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/SelectUserRole.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectUserRolevue_type_script_lang_js, [['render',SelectUserRolevue_type_template_id_99a6e7f6_render]])

/* harmony default export */ const SelectUserRole = (__exports__);
;





runtime_auto_import_default()(SelectUserRolevue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Profile.vue?vue&type=script&lang=js










/* harmony default export */ const Profilevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'AccountProfile',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    InputPassword: InputPassword/* default */.Z,
    InputPhoneNumber: InputPhoneNumber["default"],
    SelectRoles: SelectRoles/* default */.Z,
    SelectUserRole: SelectUserRole
  },
  data() {
    return {
      unsaved: false,
      editing: false,
      account: {},
      changes_made: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrg']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['userInvitedRoles'])
  },
  watch: {
    editing: {
      async handler(val) {
        if (val) {
          // Editing
          // Update the editing value
          this.account = (0,functions.objectCopy)(this.user || {});
        } else {
          // Viewing
          // Reset company info
          this.account = {};
          this.changes_made = false;
        }
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['updateAccount', 'updatePassword', 'isOrgOwner']),
    async saveAccountInfo() {
      if (!this.changes_made) {
        this.editing = false;
        // this.$q.notify({
        //   icon: 'icon-check-circle-broken',
        //   message: 'No changes has been made',
        // });
        return;
      }
      const _ = this.account || {};
      const payload = {
        username: _.username,
        firstname: _.firstname,
        lastname: _.lastname,
        email: _.email,
        phone_number: _.phone_number,
        phone_country_code: _.phone_country_code
      };
      if (this.isOrgOwner()) {
        payload.title = _.title;
      } else {
        // payload.role = _.role;
      }
      const response = await this.updateAccount(payload);
      if (response.success) {
        this.editing = false;
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: 'Your changes have been successfully saved'
        });
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: 'Failed to update profile'
        });
      }
    },
    async updatePwd() {
      let status = {};
      switch (true) {
        case !this.account.password_old:
          status.icon = 'icon-alert-triangle';
          status.iconColor = 'negative';
          status.message = 'Please provide your old password to verify';
          break;
        case !this.account.password_new:
          status.icon = 'icon-alert-triangle';
          status.iconColor = 'negative';
          status.message = 'Please provide your new password';
          break;
        case !this.account.password_conf:
          status.icon = 'icon-alert-triangle';
          status.iconColor = 'negative';
          status.message = 'Please confirm your new password';
          break;
        case this.account.password_new !== this.account.password_conf:
          status.icon = 'icon-alert-triangle';
          status.iconColor = 'negative';
          status.message = 'The password you entered did not match';
          break;
        default:
          status = true;
          break;
      }
      if (status === true) {
        const payload = {
          old_password: this.account.password_old,
          new_password: this.account.password_new
        };
        const response = await this.updatePassword(payload);
        if (response.success) {
          this.account.password_old = '';
          this.account.password_new = '';
          this.account.password_conf = '';
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: 'Your password have been successfully updated'
          });
        } else {
          const message = (0,functions.extractErrorMessageString)(response?.message);
          this.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: message || 'Error updating password'
          });
        }
      } else if (status.message) this.$q.notify(status);
    },
    cancelEditing() {
      if (this.changes_made) {
        this.unsaved = true;
      } else {
        this.editing = false;
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Accounts/Profile.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(4458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(3190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(1663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(1973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(926);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(6611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(2074);
;// CONCATENATED MODULE: ./src/components/Accounts/Profile.vue




;
const Profile_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Profilevue_type_script_lang_js, [['render',Profilevue_type_template_id_6287fd3c_render]])

/* harmony default export */ const Profile = (Profile_exports_);
;







runtime_auto_import_default()(Profilevue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z,QDialog: QDialog/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Company.vue?vue&type=template&id=b246ab3a

const Companyvue_type_template_id_b246ab3a_hoisted_1 = {
  key: 0,
  class: "q-gutter-sm"
};
const Companyvue_type_template_id_b246ab3a_hoisted_2 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_b246ab3a_hoisted_3 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_b246ab3a_hoisted_4 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_5 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_b246ab3a_hoisted_6 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_b246ab3a_hoisted_7 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_8 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_b246ab3a_hoisted_9 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_b246ab3a_hoisted_10 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_11 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_b246ab3a_hoisted_12 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_13 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_b246ab3a_hoisted_14 = {
  key: 0,
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_b246ab3a_hoisted_15 = {
  class: "row q-col-gutter-md items-center justify-start"
};
const Companyvue_type_template_id_b246ab3a_hoisted_16 = {
  class: "col-12"
};
const Companyvue_type_template_id_b246ab3a_hoisted_17 = {
  class: "col-12"
};
const Companyvue_type_template_id_b246ab3a_hoisted_18 = {
  class: "col-12 col-md-6"
};
const Companyvue_type_template_id_b246ab3a_hoisted_19 = {
  class: "col-12 col-md-6"
};
const Companyvue_type_template_id_b246ab3a_hoisted_20 = {
  class: "col-12"
};
const Companyvue_type_template_id_b246ab3a_hoisted_21 = {
  key: 1,
  class: "col-12 col-sm-8 col-md-9 q-gutter-sm letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_22 = {
  key: 0
};
const Companyvue_type_template_id_b246ab3a_hoisted_23 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_b246ab3a_hoisted_24 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_b246ab3a_hoisted_25 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_26 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_b246ab3a_hoisted_27 = {
  class: "col-12 col-sm-8 col-md-9 letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_28 = {
  class: "col-12 col-sm-8 col-md-9 letter-space-normal"
};
const Companyvue_type_template_id_b246ab3a_hoisted_29 = {
  key: 0,
  class: "q-gutter-md"
};
const Companyvue_type_template_id_b246ab3a_hoisted_30 = {
  key: 1,
  class: "q-gutter-sm letter-space-normal"
};
function Companyvue_type_template_id_b246ab3a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_SelectCompanyType = (0,vue_esm_bundler/* resolveComponent */.up)("SelectCompanyType");
  const _component_InputWebsite = (0,vue_esm_bundler/* resolveComponent */.up)("InputWebsite");
  const _component_external_link = (0,vue_esm_bundler/* resolveComponent */.up)("external-link");
  const _component_SelectCountry = (0,vue_esm_bundler/* resolveComponent */.up)("SelectCountry");
  const _component_InputPhoneNumber = (0,vue_esm_bundler/* resolveComponent */.up)("InputPhoneNumber");
  const _component_SelectEmployeeCount = (0,vue_esm_bundler/* resolveComponent */.up)("SelectEmployeeCount");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "card-padding-title-xs"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h5 text-primary-700 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Company Information ")]),
          _: 1
        }), _ctx.isOrgOwner() || _ctx.isOrgAdmin() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_b246ab3a_hoisted_1, [!_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 0,
          outline: "",
          alwaysShowIcon: "",
          iconSize: "xs",
          label: "Edit Info",
          icon: "icon-pencil-02",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.editing = true),
          class: "button-gm-outline-dark"
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 1,
          outline: "",
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          iconSize: "xs",
          label: "Cancel",
          icon: "icon-x-close",
          class: "button-gm-outline-dark",
          onClick: _ctx.cancelEditing
        }, null, 8, ["flat", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 2,
          alwaysShowIcon: "",
          iconSize: "xs",
          label: "Save Changes",
          icon: "icon-save-01",
          onClick: _ctx.saveOrgInfo
        }, null, 8, ["onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-col-gutter-lg text-body1 card-padding",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.editing ? 'max-width: 900px' : '')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Company Name"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_b246ab3a_hoisted_2, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_b246ab3a_hoisted_3, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
        key: 0,
        outlined: "",
        placeholder: "Name",
        modelValue: _ctx.company.title,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.company.title = $event),
        onChange: _cache[2] || (_cache[2] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_b246ab3a_hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.title), 1))])], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Company Type"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_b246ab3a_hoisted_5, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_b246ab3a_hoisted_6, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectCompanyType, {
        key: 0,
        modelValue: _ctx.company.company_type_id,
        "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => _ctx.company.company_type_id = $event), _cache[4] || (_cache[4] = $event => _ctx.changes_made = true)],
        initModel: _ctx.company.company_type_id
      }, null, 8, ["modelValue", "initModel"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_b246ab3a_hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.companyTypes[_ctx.selectedOrg.company_type_id]?.label), 1))])], 2),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing || _ctx.selectedOrg.website ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 1,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, " Website ", 2), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_b246ab3a_hoisted_11, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputWebsite, {
        key: 0,
        rule: undefined,
        modelValue: _ctx.company.website,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.company.website = $event),
        onChange: _cache[8] || (_cache[8] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_b246ab3a_hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_external_link, {
        url: _ctx.selectedOrg.website
      }, null, 8, ["url"])]))])], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing || _ctx.selectedOrg.address_line_1 || _ctx.selectedOrg.city || _ctx.selectedOrg.state || _ctx.selectedOrg.country ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 2,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium font-medium", {
          ['self-start']: false,
          [`text-primary-${_ctx.editing ? '800' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Country"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_b246ab3a_hoisted_13, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_b246ab3a_hoisted_14, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_b246ab3a_hoisted_15, [ false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_b246ab3a_hoisted_20, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SelectCountry, {
        modelValue: _ctx.company.country,
        "onUpdate:modelValue": [_cache[17] || (_cache[17] = $event => _ctx.company.country = $event), _cache[18] || (_cache[18] = $event => _ctx.changes_made = true)],
        initModel: _ctx.company.country
      }, null, 8, ["modelValue", "initModel"])])])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_b246ab3a_hoisted_21, [ false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.country), 1)]))], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing || _ctx.selectedOrg.employee_count_id ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 4,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row full-wdith items-center justify-start", {
          ['q-col-gutter-sm']: _ctx.editing
        }])
      }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-sm-4 col-md-3 font-medium", {
          [`text-primary-${_ctx.editing ? '700' : '500'}`]: true
        }])
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Employees"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_b246ab3a_hoisted_26, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_b246ab3a_hoisted_27, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectEmployeeCount, {
        key: 0,
        modelValue: _ctx.company.employee_count_id,
        "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => _ctx.company.employee_count_id = $event),
        initModel: _ctx.company.employee_count_id,
        onUpdated: _cache[22] || (_cache[22] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue", "initModel"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
        key: 1
      }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.employeeCount[_ctx.selectedOrg.employee_count_id]?.label || '*'), 1)], 64))])], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }, 8, ["style"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.unsaved,
      "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => _ctx.unsaved = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)(_ctx.$root.messagesDialogs?.editingUnsaved, {
        onOkay: _cache[24] || (_cache[24] = $event => _ctx.editing = false)
      }), null, 16)]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Accounts/Company.vue?vue&type=template&id=b246ab3a

// EXTERNAL MODULE: ./src/components/Helpers/InputWebsite.vue + 4 modules
var InputWebsite = __webpack_require__(5825);
// EXTERNAL MODULE: ./src/components/Helpers/SelectCompanyType.vue + 4 modules
var SelectCompanyType = __webpack_require__(7453);
// EXTERNAL MODULE: ./src/components/Helpers/SelectEmployeeCount.vue + 4 modules
var SelectEmployeeCount = __webpack_require__(1085);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(1976);
// EXTERNAL MODULE: ./src/components/Helpers/SelectCountry.vue + 4 modules
var SelectCountry = __webpack_require__(9568);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Company.vue?vue&type=script&lang=js












/* harmony default export */ const Companyvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CompanyProfile',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    InputPhoneNumber: InputPhoneNumber["default"],
    SelectCompanyType: SelectCompanyType/* default */.Z,
    InputWebsite: InputWebsite["default"],
    SelectCountry: SelectCountry/* default */.Z,
    SelectEmployeeCount: SelectEmployeeCount/* default */.Z
  },
  data() {
    return {
      url2link: functions.url2link,
      editing: false,
      unsaved: false,
      company: {},
      changes_made: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['socialMedia', 'employeeCount']),
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrg']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['companyTypes'])
  },
  watch: {
    editing: {
      async handler(val) {
        if (val) {
          // Editing
          // Update the editing value
          this.company = (0,functions.objectCopy)(this.selectedOrg);
        } else {
          // Viewing
          // Reset company info
          this.company = {};
          this.changes_made = false;
        }
      }
    }
  },
  mounted() {
    this.getEmployeeCount();
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['updateOrganization', 'isOrgOwner', 'isOrgAdmin']),
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getSocialInfo', 'formatMediaPlatformIconSrc', 'getEmployeeCount']),
    async saveOrgInfo() {
      if (!this.changes_made) {
        this.editing = false;
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: 'No changes has been made'
        });
        return;
      }
      const _ = this.company || {};
      const payload = {
        title: _.title,
        address_line_1: _.address_line_1,
        state: _.state,
        company_type_id: _.company_type_id,
        about_us: _.about_us,
        city: _.city,
        zipcode: _.zipcode,
        country: _.country,
        phone_number: _.phone_number,
        phone_country_code: _.phone_country_code,
        employee_count_id: _.employee_count_id,
        social_accounts: {}
      };
      for (const k of Object.keys(_.social_accounts)) {
        if (_.social_accounts[k]) payload.social_accounts[k] = _.social_accounts[k];
      }
      if (_.address_line_2) payload.address_line_2 = _.address_line_2;
      if (_.website) payload.website = _.website;
      const response = await this.updateOrganization(payload);
      if (response.success) {
        this.editing = false;
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: 'Your changes have been successfully saved'
        });
      } else {
        const message = (0,functions.extractErrorMessageString)(response?.message);
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Error updating organization'
        });
      }
    },
    cancelEditing() {
      if (this.changes_made) {
        this.unsaved = true;
      } else {
        this.editing = false;
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Accounts/Company.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Accounts/Company.vue




;
const Company_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Companyvue_type_script_lang_js, [['render',Companyvue_type_template_id_b246ab3a_render]])

/* harmony default export */ const Company = (Company_exports_);
;







runtime_auto_import_default()(Companyvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z,QDialog: QDialog/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Subscription.vue?vue&type=template&id=6648b7f3

const Subscriptionvue_type_template_id_6648b7f3_hoisted_1 = {
  class: "q-gutter-y-lg"
};
const Subscriptionvue_type_template_id_6648b7f3_hoisted_2 = {
  key: 0,
  class: "q-gutter-sm"
};
const Subscriptionvue_type_template_id_6648b7f3_hoisted_3 = {
  class: "row items-center q-col-gutter-md q-py-sm"
};
const Subscriptionvue_type_template_id_6648b7f3_hoisted_4 = {
  class: "col-grow col-md-4 text-secondary"
};
const Subscriptionvue_type_template_id_6648b7f3_hoisted_5 = {
  class: "text-h5 text-secondary font-medium"
};
const Subscriptionvue_type_template_id_6648b7f3_hoisted_6 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-700 letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Next Billing on "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "font-medium"
}, "5th March 2023")], -1);
const Subscriptionvue_type_template_id_6648b7f3_hoisted_7 = {
  class: "col-grow col-md-8"
};
const Subscriptionvue_type_template_id_6648b7f3_hoisted_8 = {
  class: "row q-col-gutter-sm justify-end"
};
function Subscriptionvue_type_template_id_6648b7f3_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_SubscriptionPlans = (0,vue_esm_bundler/* resolveComponent */.up)("SubscriptionPlans");
  const _component_OffBoarding = (0,vue_esm_bundler/* resolveComponent */.up)("OffBoarding");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_Dialog_SubscriptionDiscount = (0,vue_esm_bundler/* resolveComponent */.up)("Dialog_SubscriptionDiscount");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Subscriptionvue_type_template_id_6648b7f3_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "card-padding-title-xs"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h5 text-primary-700 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Your Current Plan ")]),
          _: 1
        }),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "card-padding"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_6648b7f3_hoisted_3, [(0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_6648b7f3_hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_6648b7f3_hoisted_5, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.label) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.talentCount.id) + " Monthly ", 1), Subscriptionvue_type_template_id_6648b7f3_hoisted_6]), (0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_6648b7f3_hoisted_7, [(0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_6648b7f3_hoisted_8, [(0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
        flat: "",
        outline: "",
        format: "sm",
        alwaysShowIcon: "",
        iconSize: "xs",
        label: "Cancel",
        icon: "icon-cancel",
        color: "negative",
        class: "q-px-sm",
        labelClass: "text-body1",
        onClick: _cache[3] || (_cache[3] = $event => _ctx.startOffBoarding = true)
      })]), (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
        outline: "",
        format: "sm",
        alwaysShowIcon: "",
        iconSize: "xs",
        label: "Pause",
        icon: "icon-pause-circle",
        class: "button-gm-outline-dark q-px-sm",
        labelClass: "text-body1",
        onClick: _cache[4] || (_cache[4] = $event => _ctx.startOffBoarding = true)
      })]), (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
        format: "sm",
        alwaysShowIcon: "",
        iconSize: "xs",
        label: "Discount",
        color: "secondary",
        icon: "icon-percent-03",
        class: "hover-bg-secondary2 button-gm-highlight q-px-sm",
        labelClass: "text-body1",
        onClick: _cache[5] || (_cache[5] = $event => _ctx.discountDialog = true)
      })])])])])]),
      _: 1
    })]),
    _: 1
  }), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    key: 0,
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-pa-lg' : 'q-pa-md')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SubscriptionPlans, {
        nextButton: true,
        onUpdated: _ctx.planUpdated,
        onNextBtnClick: _ctx.nextBtnClick
      }, null, 8, ["onUpdated", "onNextBtnClick"])]),
      _: 1
    }, 8, ["class"])]),
    _: 1
  })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.startOffBoarding,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.startOffBoarding = $event)
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_OffBoarding, {
      class: "rounded",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
        "width": "1080px"
      }, `max-width: ${_ctx.offboardingStep == 'pause_done' ? '560px' : _ctx.offboardingStep == 'maintenance_done' ? '800px' : '80vw'}`]),
      onStepUpdated: _cache[6] || (_cache[6] = val => {
        _ctx.offboardingStep = val;
      }),
      onExit: _cache[7] || (_cache[7] = () => {
        _ctx.startOffBoarding = false;
      })
    }, null, 8, ["style"])]),
    _: 1
  }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.discountDialog,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => _ctx.discountDialog = $event),
    "transition-show": "scale",
    "transition-hide": "scale",
    "transition-duration": 300
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_Dialog_SubscriptionDiscount, {
      noclose: "",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
        "width": "700px"
      }, _ctx.$q.screen.xs && _ctx.$q.screen.lt.sm ? 'max-width: 95vw;' : 'max-width: 80vw']),
      onRequestChanges: _cache[9] || (_cache[9] = $event => _ctx.discountDialog = false)
    }, null, 8, ["style"])]),
    _: 1
  }, 8, ["modelValue"])]);
}
;// CONCATENATED MODULE: ./src/components/Accounts/Subscription.vue?vue&type=template&id=6648b7f3

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=template&id=57ae3e2b

const SubscriptionPlansvue_type_template_id_57ae3e2b_hoisted_1 = {
  key: 0,
  class: "full-width text-center q-pb-lg no-wrap"
};
const SubscriptionPlansvue_type_template_id_57ae3e2b_hoisted_2 = {
  class: "letter-space-normal"
};
const SubscriptionPlansvue_type_template_id_57ae3e2b_hoisted_3 = {
  class: "text-body2 text-primary"
};
function SubscriptionPlansvue_type_template_id_57ae3e2b_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_btn_group = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn-group");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_card_item = (0,vue_esm_bundler/* resolveComponent */.up)("card-item");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: ""
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.planTypes ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", SubscriptionPlansvue_type_template_id_57ae3e2b_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn_group, {
      spread: _ctx.$q.screen.sm || _ctx.$q.screen.lt.md,
      class: "rounded no-shadow border-add"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(Object.values(_ctx.subscription_BillingTypes), (planType, i) => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
          key: planType
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          "no-caps": "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["hover-text-secondary", _ctx.selectedBilling === planType.id ? 'bg-accent' : '']),
          color: _ctx.selectedBilling === planType.id ? 'secondary' : 'primary',
          onClick: $event => _ctx.changePlanType(planType.id)
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [i !== 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 0,
            size: "sm",
            name: "icon-sale-02",
            color: "secondary"
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("span", {
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 font-medium", i !== 0 ? 'q-pl-sm' : ''])
          }, (0,vue_esm_bundler/* toDisplayString */.zw)(planType.label), 3)]),
          _: 2
        }, 1032, ["color", "class", "onClick"]), i < Object.keys(_ctx.subscription_BillingTypes).length - 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_separator, {
          key: 0,
          vertical: ""
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 64);
      }), 128))]),
      _: 1
    }, 8, ["spread"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.nextButton ? 'q-pt-md' : '')
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row", `q-col-gutter-${_ctx.cardsGutter}`])
      }, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.subscription_Talents, talent => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          key: talent.id,
          class: "col-12 col-md-6"
        }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)([_ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'badge-bg-active badge-border-active' : talent.value === _ctx.selectedTalent ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent', "q-py-sm cursor-pointer border-add hover-border-secondary"]),
          onClick: $event => _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? void 0 : _ctx.selectedTalent = talent.value
        }, {
          avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
            modelValue: _ctx.selectedTalent,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectedTalent = $event),
            val: talent.value,
            color: "secondary",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["negative-margin-1", _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'cursor-pointer no-pointer-events' : '']),
            "unchecked-icon": _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'icon-check-circle-broken badge-text-active' : undefined,
            rules: [val => val && val !== '' && val !== null || '']
          }, null, 8, ["modelValue", "val", "unchecked-icon", "class", "rules"])]),
          title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionPlansvue_type_template_id_57ae3e2b_hoisted_2, [talent.value > 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
            key: 0
          }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.label) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(talent.value), 1)], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
            key: 1
          }, [(0,vue_esm_bundler/* createTextVNode */.Uk)("Custom Plan")], 64))])]),
          description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", (0,vue_esm_bundler/* mergeProps */.dG)({
            class: ["q-py-xs text-body2 font-medium", _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'badge-text-active' : talent.value === _ctx.selectedTalent ? 'text-secondary' : 'text-primary']
          }, _ctx.priceInfo = _ctx.planPriceCalculator(talent.value, _ctx.selectedBilling)), [(0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.priceInfo.label), 1), (0,vue_esm_bundler/* createTextVNode */.Uk)(" " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription_BillingTypes[_ctx.selectedBilling]?.breakdown_label), 1)], 16), (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionPlansvue_type_template_id_57ae3e2b_hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.description_1) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(talent.value === -1 ? 'custom' : _ctx.numberToWords(talent.value)) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(talent.value > 1 || talent.value === -1 ? 'users' : 'user') + ". ", 1)]),
          _: 2
        }, 1032, ["class", "onClick"])), [[_directive_ripple, _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? false : {
          color: 'secondary'
        }]])]);
      }), 128)), _ctx.nextButton && _ctx.selectedTalent && _ctx.selectedBilling ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
        key: 0,
        class: "q-pa-none q-pt-md col-12 items-center justify-end"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: "rounded slide-hover button-md text-body1 font-medium",
          onClick: _ctx.nextButtonClicked
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Request Change "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "20px",
            name: "icon-arrow-narrow-right",
            class: "q-pl-xs"
          })]),
          _: 1
        }, 8, ["onClick"])]),
        _: 1
      })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2)]),
      _: 1
    })], 2)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=template&id=57ae3e2b

// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(5487);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=script&lang=js






/* harmony default export */ const SubscriptionPlansvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SubscriptionPlans',
  emits: ['updated', 'talentChanged', 'billingChanged', 'nextBtnClick'],
  props: {
    nextButton: {
      type: Boolean,
      default: false
    },
    planTypes: {
      type: Boolean,
      default: true
    },
    cardsGutter: {
      type: String,
      default: 'md'
    }
  },
  data() {
    return {
      selectedTalent: 0,
      selectedBilling: 1,
      numberToWords: functions.numberToWords
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrg']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['subscription', 'subscription_Talents', 'subscription_BillingTypes']),
    orgSubscription() {
      return !fn_store/* default.getAuth */.Z.getAuth() ? {} : this.selectedOrg?.subscription || {};
    }
  },
  watch: {
    selectedTalent: {
      async handler(val) {
        this.talentChanged(val);
        this.updated();
      }
    },
    selectedBilling: {
      async handler(val) {
        this.selectedTalent = 0;
        this.billingChanged(val);
        this.updated();
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['planPriceCalculator']),
    updated() {
      this.$emit('updated', {
        talent: this.selectedTalent,
        billing: this.selectedBilling
      });
    },
    talentChanged(val) {
      this.$emit('talentChanged', val || this.selectedTalent);
    },
    billingChanged(val) {
      this.$emit('billingChanged', val || this.selectedBilling);
    },
    checkIfPlanSelected(subscription_talent_id, subscription_billing_id) {
      return this.orgSubscription.subscription_billing_id == subscription_billing_id && this.orgSubscription.subscription_talent_id == subscription_talent_id;
    },
    changePlanType(planType) {
      // Set New Plan Type
      this.selectedBilling = planType;
    },
    formatMoney(money, minimumFractionDigits = 0) {
      return (0,functions.formatMoney)(money, {
        minimumFractionDigits
      });
    },
    nextButtonClicked() {
      this.$emit('nextBtnClick', {
        selectedTalent: this.selectedTalent,
        selectedBilling: this.selectedBilling
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-group/QBtnGroup.js
var QBtnGroup = __webpack_require__(7236);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(8879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/radio/QRadio.js
var QRadio = __webpack_require__(1480);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__(1722);
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/SubscriptionPlans.vue




;
const SubscriptionPlans_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SubscriptionPlansvue_type_script_lang_js, [['render',SubscriptionPlansvue_type_template_id_57ae3e2b_render]])

/* harmony default export */ const SubscriptionPlans = (SubscriptionPlans_exports_);
;








runtime_auto_import_default()(SubscriptionPlansvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QBtnGroup: QBtnGroup/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QSeparator: QSeparator/* default */.Z,QList: QList/* default */.Z,QRadio: QRadio/* default */.Z,QItem: QItem/* default */.Z});runtime_auto_import_default()(SubscriptionPlansvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6727);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/OffBoarding.vue?vue&type=template&id=52a561ed


const OffBoardingvue_type_template_id_52a561ed_hoisted_1 = {
  class: "row items-start q-pb-md q-col-gutter-xl"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_2 = {
  class: "col-12 col-md-4"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_3 = ["src"];
const OffBoardingvue_type_template_id_52a561ed_hoisted_4 = {
  class: "col-12 col-md-8"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h2 font-medium q-pb-md"
}, " We're sad to see you go ", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_6 = {
  class: "text-h6 text-primary-500"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_7 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", null, " At Growmodo we want to give growth-driven brands and agencies access to a flexible workforce of vetted talent. Our goal is to become an indispensable part of your team. ", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_8 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", null, " However, we know that business can be seasonal and there is just not enough work to delegate. In these situations, we allow you to pause your subscription and jump back in when you need us for a new project. ", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "text-h6 text-primary-700 font-medium"
}, " Here are the advantages of pausing your account: ", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_10 = {
  class: "text-primary-500"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_11 = {
  class: "row q-col-gutter-md justify-center q-pt-lg"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_12 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_13 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_14 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h2 text-center font-medium q-pb-md"
}, " Before you pause... ", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_15 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6 text-primary-500 flex flex-center q-pb-md q-pt-sm"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center",
  style: {
    "max-width": "720px"
  }
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" We have a "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "font-demi-bold"
}, "maintenance plan"), /*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" for businesses of all sizes that need a hands-on team to keep their websites safe and up-to-date without the headaches. ")])], -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_16 = {
  class: "row text-h6 text-primary-500 q-col-gutter-y-md q-col-gutter-x-xl"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_17 = {
  class: "col-12 col-md-3"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_18 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "letter-spacing-normal font-medium text-h6 text-primary-700"
}, " Maintenance Plan ", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_19 = {
  class: "text-h2 font-medium text-secondary"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_20 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", null, "/mo", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_21 = {
  class: "col-12 col-md-9"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_22 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6 font-bold text-primary-700 q-pb-md"
}, " What you will get... ", -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_23 = {
  class: "row q-col-gutter-md"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_24 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_25 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_26 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_27 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_28 = {
  class: "row text-h6 text-primary-500 q-col-gutter-y-md q-col-gutter-x-xl"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_29 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-md-3"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "letter-spacing-normal font-bold text-h6 text-primary-700"
}, " Maintenance tasks includes... ")], -1);
const OffBoardingvue_type_template_id_52a561ed_hoisted_30 = {
  class: "col-12 col-md-9"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_31 = {
  class: "row q-col-gutter-md"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_32 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_33 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_34 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_52a561ed_hoisted_35 = {
  class: "row q-col-gutter-sm"
};
const _hoisted_36 = {
  class: "full-width q-py-md flex flex-center"
};
const _hoisted_37 = {
  class: "row q-col-gutter-md justify-center",
  style: {
    "width": "720px"
  }
};
const _hoisted_38 = {
  class: "col-12 col-sm-6"
};
const _hoisted_39 = {
  class: "col-12 col-sm-6"
};
const _hoisted_40 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 font-medium text-center q-pb-xl"
}, " How long would you like to pause your subscription? ", -1);
const _hoisted_41 = {
  class: "row q-col-gutter-lg"
};
const _hoisted_42 = {
  class: "full-width q-pb-md q-pt-xl flex flex-center"
};
const _hoisted_43 = {
  class: "text-center"
};
const _hoisted_44 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-py-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 font-medium text-center"
}, "Thanks!"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-center flex flex-center q-pt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6 text-primary-500 text-center",
  style: {
    "max-width": "400px"
  }
}, " Your Growmodo subscription is paused now, but reactivating is easy and possible anytime. ")])], -1);
const _hoisted_45 = {
  class: "full-width text-center q-pt-md"
};
const _hoisted_46 = {
  class: "text-center q-pt-lg"
};
const _hoisted_47 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-py-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 font-medium text-center"
}, " Your have sucessfully changed to Maintenance Plan "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6 text-primary-500 q-pt-md text-center"
}, " Your maintenance plan is active, you are able to request maintanenance tasks. ")], -1);
const _hoisted_48 = {
  class: "full-width q-py-md flex flex-center"
};
const _hoisted_49 = {
  class: "row q-col-gutter-md justify-center",
  style: {
    "width": "720px"
  }
};
const _hoisted_50 = {
  class: "col-12 col-sm-auto"
};
const _hoisted_51 = {
  class: "col-12 col-sm-auto"
};
const _hoisted_52 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 font-medium text-center q-pb-xl"
}, " Please tell us why you'd like to cancel ", -1);
const _hoisted_53 = {
  class: "row q-col-gutter-lg"
};
const _hoisted_54 = {
  class: "full-width"
};
const _hoisted_55 = {
  class: "full-width q-pb-md q-pt-xl flex flex-center"
};
const _hoisted_56 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 font-medium q-pb-xl"
}, " Cancel & delete your account ", -1);
const _hoisted_57 = {
  class: "text-body1 text-primary-500"
};
const _hoisted_58 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "font-medium"
}, "Here is what happens when you cancel:", -1);
const _hoisted_59 = {
  class: "text-body1 font-medium"
};
const _hoisted_60 = {
  class: "full-width q-py-md flex flex-center"
};
const _hoisted_61 = {
  class: "full-width"
};
const _hoisted_62 = {
  class: "row q-col-gutter-md justify-center"
};
const _hoisted_63 = {
  class: "col-12 col-md-6"
};
const _hoisted_64 = {
  class: "col-12 col-md-6"
};
const _hoisted_65 = {
  class: "text-center q-pt-lg"
};
const _hoisted_66 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-py-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-medium text-center"
}, " Your account has been deleted "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 q-pt-md text-center"
}, " You have successfully deleted your account. ")], -1);
function OffBoardingvue_type_template_id_52a561ed_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_card_item = (0,vue_esm_bundler/* resolveComponent */.up)("card-item");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_carousel_slide = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel-slide");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_slide_transition = (0,vue_esm_bundler/* resolveComponent */.up)("q-slide-transition");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_gm_toggle = (0,vue_esm_bundler/* resolveComponent */.up)("gm-toggle");
  const _component_q_carousel = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: ""
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.noclose && !['cancel_done', 'pause_done', 'maintenance_done'].includes(_ctx.formStep) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card_section, {
      key: 0,
      class: "text-right q-pb-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)]),
      _: 1
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel, {
      animated: "",
      modelValue: _ctx.formStep,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.formStep = $event),
      "transition-prev": "fade",
      "transition-next": "fade",
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["fit padding-8x padding-7b", {
        ['padding-7t']: _ctx.formStep != 'pause_1'
      }])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "init",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          rounded: "",
          class: "rounded full-width full-height"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("img", {
            src: `${_ctx.$cdn_host}${_ctx.$cdn.gif}/goodbye.gif`
          }, null, 8, OffBoardingvue_type_template_id_52a561ed_hoisted_3)]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_4, [OffBoardingvue_type_template_id_52a561ed_hoisted_5, (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_6, [OffBoardingvue_type_template_id_52a561ed_hoisted_7, OffBoardingvue_type_template_id_52a561ed_hoisted_8, OffBoardingvue_type_template_id_52a561ed_hoisted_9, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`Your account with all brand assets will stay secured on our server.`, `Potential price increases will not affect your subscription. You can start working with us at the same monthly rate.`, `You can end your paused period anytime and delegate new work within a day.`], item => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            class: "q-py-sm",
            itemPadding: "none",
            key: item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "icon-check-circle-broken",
              color: "secondary",
              size: "sm"
            })]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_10, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1024);
        }), 128))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_11, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-1 full-width button-gm-outline-dark button-md",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.formStep = 'cancel_1')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Continue to cancel ")]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_13, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body1 full-width button-md",
          onClick: _cache[1] || (_cache[1] = $event => _ctx.formStep = 'pause_1')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Pause account ")]),
          _: 1
        })])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "pause_1",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OffBoardingvue_type_template_id_52a561ed_hoisted_14, OffBoardingvue_type_template_id_52a561ed_hoisted_15, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          bordered: "",
          class: "bg-accent2 card-padding-title q-my-lg"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_16, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_17, [OffBoardingvue_type_template_id_52a561ed_hoisted_18, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createElementVNode */._)("span", OffBoardingvue_type_template_id_52a561ed_hoisted_19, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.getCurrency(_ctx.maintenance.price_currency)?.symbol) + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.formatMoney(_ctx.maintenance.base_price, {
            minimumFractionDigits: 0
          })), 1), OffBoardingvue_type_template_id_52a561ed_hoisted_20])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_21, [OffBoardingvue_type_template_id_52a561ed_hoisted_22, (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_23, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_24, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_25, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
            icon: 'icon-infinity',
            label: 'Unlimited maintenance requests'
          }, {
            icon: 'icon-infinity',
            label: 'Unlimited security requests'
          }, {
            icon: 'icon-infinity',
            label: 'Unlimited content update requests'
          }, {
            icon: 'icon-check',
            label: 'One active request at a time'
          }], item => {
            return (0,vue_esm_bundler/* createElementVNode */._)("div", {
              class: "row full-width",
              key: item
            }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_card_item, {
              class: "q-pa-none bg-none",
              itemPadding: "none"
            }, {
              avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: item.icon,
                size: "20px",
                color: "secondary",
                class: "q-pa-xs"
              }, null, 8, ["name"])]),
              description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
              _: 2
            }, 1024)]);
          }), 64))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_26, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_27, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
            icon: 'icon-check',
            label: 'Dedicated project manager'
          }, {
            icon: 'icon-check',
            label: 'Weekly updates & progress reports'
          }, {
            icon: 'icon-check',
            label: 'Pause or cancel anytime'
          }, {
            icon: 'icon-check',
            label: 'Upgrade or downgrade anytime'
          }], item => {
            return (0,vue_esm_bundler/* createElementVNode */._)("div", {
              key: item
            }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_card_item, {
              class: "q-pa-none bg-none",
              itemPadding: "none"
            }, {
              avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: item.icon,
                size: "20px",
                color: "secondary",
                class: "q-pa-xs"
              }, null, 8, ["name"])]),
              description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
              _: 2
            }, 1024)]);
          }), 64))])])])])])]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          class: "card-padding-title"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_28, [OffBoardingvue_type_template_id_52a561ed_hoisted_29, (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_30, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_31, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_32, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_33, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
            icon: 'icon-check',
            label: 'Fixing website bugs'
          }, {
            icon: 'icon-check',
            label: 'Security audit'
          }, {
            icon: 'icon-check',
            label: 'Site speed optimization'
          }, {
            icon: 'icon-check',
            label: 'Website content update'
          }, {
            icon: 'icon-check',
            label: 'Site backupbroken links and 404 errors check'
          }], item => {
            return (0,vue_esm_bundler/* createElementVNode */._)("div", {
              class: "row full-width",
              key: item
            }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_card_item, {
              class: "q-pa-none",
              itemPadding: "none"
            }, {
              avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: item.icon,
                size: "20px",
                color: "secondary",
                class: "q-pa-xs"
              }, null, 8, ["name"])]),
              description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
              _: 2
            }, 1024)]);
          }), 64))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_34, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_52a561ed_hoisted_35, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
            icon: 'icon-check',
            label: 'Plugin updates'
          }, {
            icon: 'icon-check',
            label: 'Security implementation'
          }, {
            icon: 'icon-check',
            label: 'Implementing website with 3rd party tool'
          }, {
            icon: 'icon-check',
            label: 'Adding new blog post'
          }, {
            icon: 'icon-check',
            label: 'Google search console setup'
          }], item => {
            return (0,vue_esm_bundler/* createElementVNode */._)("div", {
              key: item
            }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_card_item, {
              class: "q-pa-none",
              itemPadding: "none"
            }, {
              avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: item.icon,
                size: "20px",
                color: "secondary",
                class: "q-pa-xs"
              }, null, 8, ["name"])]),
              description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
              _: 2
            }, 1024)]);
          }), 64))])])])])])]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_36, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_37, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_38, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body1 full-width button-gm-outline-dark button-md",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.formStep = 'pause_2')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Continue to pause ")]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_39, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body1 full-width button-md",
          onClick: _ctx.switchToMaintenance
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Change to Maintenance Plan ")]),
          _: 1
        }, 8, ["onClick"])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "pause_2",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_40, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_41, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`1 Week`, `2 Weeks`, `1 Month`, `2 Months`, `3 Months`, `4 Months`], item => {
          return (0,vue_esm_bundler/* createElementVNode */._)("div", {
            key: item,
            class: "col-12 col-sm-6 col-md-4"
          }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            align: "center",
            avatarClass: "self-start",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["border-add border-md hover-border-secondary cursor-pointer", _ctx.pause.duration === item ? 'border-secondary' : '']),
            onClick: $event => _ctx.pause.duration = item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              size: "sm",
              name: _ctx.pause.duration === item ? 'icon-circle-active' : 'icon-circle-inactive',
              color: _ctx.pause.duration === item ? 'secondary' : 'primary-500'
            }, null, 8, ["name", "color"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1032, ["class", "onClick"])), [[_directive_ripple, {
            color: 'secondary'
          }]])]);
        }), 64)), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_42, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-py-sm font-medium text-body1 button-md q-px-xl", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.pauseAccount
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Pause subscription ")]),
          _: 1
        }, 8, ["class", "onClick"])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "pause_done",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_43, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: "icon-check-circle-broken"
        })]), _hoisted_44, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_45, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          ripple: {
            color: 'accent'
          },
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded button-md", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.backToHome
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Back to home ")]),
          _: 1
        }, 8, ["class", "onClick"])), [[_directive_close_popup]])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "maintenance_done",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_46, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: "icon-check-circle-broken"
        })]), _hoisted_47, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_48, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_49, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_50, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          ripple: {
            color: 'accent'
          },
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded button-gm-outline-dark button-md text-body1", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.backToHome
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Back to home ")]),
          _: 1
        }, 8, ["class", "onClick"])), [[_directive_close_popup]])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_51, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded slide-hover q-py-sm font-medium text-body1 button-md", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.requestMaintenanceTask
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Request maintenance task "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "20px",
            name: "icon-arrow-narrow-right",
            class: "q-pl-xs"
          })]),
          _: 1
        }, 8, ["class", "onClick"])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "cancel_1",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_52, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_53, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`We don't need more design & development work`, `We hired someone in-house`, `We started working with another company`, `We are not happy with the service`, `Others`], item => {
          return (0,vue_esm_bundler/* createElementVNode */._)("div", {
            key: item,
            class: "col-12 col-sm-6 col-md-4"
          }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            align: "center",
            avatarClass: "self-start",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["border-add border-md hover-border-secondary cursor-pointer height-min-11", _ctx.cancel.reason === item ? 'border-secondary' : '']),
            onClick: $event => _ctx.cancel.reason = item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              size: "sm",
              name: _ctx.cancel.reason === item ? 'icon-circle-active' : 'icon-circle-inactive',
              color: _ctx.cancel.reason === item ? 'secondary' : 'primary-500'
            }, null, 8, ["name", "color"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1032, ["class", "onClick"])), [[_directive_ripple, {
            color: 'secondary'
          }]])]);
        }), 64)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_slide_transition, {
          appear: _ctx.cancel.reason === 'Others'
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_54, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            dense: "",
            outlined: "",
            type: "textarea",
            modelValue: _ctx.cancel.otherReason,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.cancel.otherReason = $event),
            class: "full-width format-bold-light text-body1",
            placeholder: "Please tell us the reason for your cancellation"
          }, null, 8, ["modelValue"])], 512), [[vue_esm_bundler/* vShow */.F8, _ctx.cancel.reason === 'Others']])]),
          _: 1
        }, 8, ["appear"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_55, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-py-sm font-medium text-body1 q-px-xl button-md", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _cache[4] || (_cache[4] = () => {
            if (!_ctx.cancel?.reason) {
              _ctx.$q.notify({
                icon: 'icon-alert-triangle',
                iconColor: 'negative',
                message: 'Please provide a reason to continue the process'
              });
            } else {
              _ctx.formStep = 'cancel_2';
            }
          })
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Cancel subscription ")]),
          _: 1
        }, 8, ["class"])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "cancel_2",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_56, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_57, [_hoisted_58, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`Your subscription will stop, and you won't be billed again.`, `Your Growmodo account will be closed after the plan expires.`, `Your account will be permanently deleted. Remember to export your files before you cancel.`], item => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            align: "center",
            itemPadding: "none",
            class: "q-py-sm",
            key: item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "icon-check",
              color: "secondary",
              size: "20px"
            })]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1024);
        }), 128))]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
          class: "q-my-lg"
        }), ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`I have downloaded my files / don't need my files`, `I understand that my files will be permanently deleted`, `I understand that my files cannot be recovered`], (item, i) => {
          return (0,vue_esm_bundler/* createElementVNode */._)("div", {
            class: "q-px-none items-start",
            key: item
          }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_gm_toggle, {
            modelValue: _ctx.cancel['q' + (i + 1)],
            "onUpdate:modelValue": $event => _ctx.cancel['q' + (i + 1)] = $event,
            color: "secondary",
            class: "q-py-sm"
          }, {
            label: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_59, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue"])]);
        }), 64))]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_60, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_61, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_62, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_63, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body1 full-width button-gm-outline-dark button-md",
          onClick: _ctx.stopCancelProcess
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" I've changed my mind ")]),
          _: 1
        }, 8, ["onClick"])), [[_directive_close_popup]])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_64, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "negative",
          class: "rounded q-py-sm font-medium text-body1 full-width button-md",
          onClick: _ctx.cancelAccount
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Cancel my subscription and delete my account ")]),
          _: 1
        }, 8, ["onClick"])])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "cancel_done",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_65, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: "icon-check-circle-broken"
        })]), _hoisted_66]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "class"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/OffBoarding.vue?vue&type=template&id=52a561ed

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(9665);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(6122);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/OffBoarding.vue?vue&type=script&lang=js








/* harmony default export */ const OffBoardingvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  components: {
    CardIconBox: CardIconBox["default"]
  },
  name: 'OffBoarding',
  emits: ['start', 'done', 'exit', 'stepUpdated'],
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      offboard_submitting: false,
      offboarded: false,
      formStep: '',
      pause: {
        duration: null
      },
      cancel: {
        reason: null,
        otherReason: null,
        q1: false,
        q2: false,
        q3: false
      },
      formatMoney: functions.formatMoney
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgIsMaintenance']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['maintenance'])
  },
  watch: {
    formStep: {
      async handler(val) {
        this.$emit('stepUpdated', val);
      }
    }
  },
  mounted() {
    this.formStep = 'init';
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['logout', 'switchToMaintenancePlan', 'pauseSubscription', 'cancelSubscription']),
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['planPriceCalculator']),
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getCurrency']),
    start(payload) {
      this.$emit('start', payload);
      if (this.formStep < 2) this.formStep++;
    },
    prevButtonClicked() {
      this.$refs?.['formStepper']?.previous?.();
    },
    nextButtonClicked() {
      this.$refs?.['formStepper']?.next?.();
    },
    submitFormAction() {
      // Initialize
      // Done
      this.nextButtonClicked();
      this.offboarded = true;
      // Safe reset
      setTimeout(() => {}, 1500);
    },
    backToHome() {
      this.$router.push('/');
      this.$emit('exit');
    },
    async switchToMaintenance() {
      this.offboard_submitting = true;
      const response = await this.switchToMaintenancePlan();
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        this.formStep = 'maintenance_done';
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Error while processing your request'
        });
      }
      this.offboard_submitting = false;
    },
    async pauseAccount() {
      const response = await this.pauseSubscription({
        pause_duration: this.pause.duration
      });
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        this.formStep = 'pause_done';
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Error while processing your request'
        });
      }
    },
    async cancelAccount() {
      let emsg = '';
      switch (false) {
        case !!this.cancel?.reason:
          emsg = 'Reason for cancellation is not provided';
          break;
        case !!this.cancel?.q1 && !!this.cancel?.q2 && !!this.cancel?.q3:
          emsg = 'Please confirm your account cancellation';
          break;
        default:
          break;
      }
      if (emsg) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: emsg
        });
      } else {
        const reason = this.cancel.reason === 'Others' ? `Other Reason - ${this.cancel?.otherReason || 'Unknown'}` : this.cancel?.reason;
        const response = await this.cancelSubscription({
          answer: reason
        });
        const message = (0,functions.extractErrorMessageString)(response?.message);
        if (response.success) {
          if (true) console.log('Account canceled.');
          this.formStep = 'cancel_done';
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: 'Account has been canceled'
          });
        } else {
          this.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: message || 'Unexpected error has occured'
          });
        }
      }
    },
    requestMaintenanceTask() {
      if (true) console.log('Maintenance Task Requested');
      this.$root.toggleRequest?.('task');
      this.$emit('exit');
    },
    stopCancelProcess() {
      if (true) console.log('Changed of mind.');
      this.$emit('exit');
    }
  },
  beforeUnmount() {
    this.$emit('exit');
  }
}));
;// CONCATENATED MODULE: ./src/components/Dialogs/OffBoarding.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js
var QCarousel = __webpack_require__(7052);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(1694);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(1357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-transition/QSlideTransition.js
var QSlideTransition = __webpack_require__(9003);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(2146);
;// CONCATENATED MODULE: ./src/components/Dialogs/OffBoarding.vue




;
const OffBoarding_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(OffBoardingvue_type_script_lang_js, [['render',OffBoardingvue_type_template_id_52a561ed_render]])

/* harmony default export */ const OffBoarding = (OffBoarding_exports_);
;











runtime_auto_import_default()(OffBoardingvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QCarousel: QCarousel/* default */.Z,QCarouselSlide: QCarouselSlide/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z,QSlideTransition: QSlideTransition/* default */.Z,QInput: QInput/* default */.Z,QSeparator: QSeparator/* default */.Z});runtime_auto_import_default()(OffBoardingvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z,ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/SubscriptionDiscount.vue?vue&type=template&id=cf74c330

const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_1 = {
  class: "row q-col-gutter-md q-mt-sm"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 text-body1 font-medium text-primary-700 self-start text-left"
}, " Billing ", -1);
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_3 = {
  class: "col-12"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_4 = {
  class: "row q-col-gutter-md"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_5 = {
  class: "row q-col-gutter-md q-mt-sm"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_6 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 text-body1 font-medium text-primary-700 self-start text-left"
}, " Starts on ", -1);
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_7 = {
  class: "col-12"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_8 = {
  class: "row items-center justify-end q-gutter-sm"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-pb-lg"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary q-py-xs"
}, " Confirm your new plan "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-700"
}, " This plan will be active as well as your current plan. ")], -1);
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_10 = {
  class: "q-gutter-lg"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_11 = {
  class: "text-left text-primary"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_12 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-medium"
}, " Billing ", -1);
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_13 = {
  class: "text-body1 text-primary font-medium q-pt-xs"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_14 = {
  class: "text-left text-primary"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_15 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-medium"
}, " Starts on ", -1);
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_16 = {
  class: "text-body1 text-primary font-medium q-pt-xs"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_17 = {
  class: "text-h3 font-medium"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_18 = {
  class: "text-subtitle1 letter-space-normal"
};
const SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_19 = {
  class: "q-gutter-sm"
};
function SubscriptionDiscountvue_type_template_id_cf74c330_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_step = (0,vue_esm_bundler/* resolveComponent */.up)("q-step");
  const _component_q_stepper = (0,vue_esm_bundler/* resolveComponent */.up)("q-stepper");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_date = (0,vue_esm_bundler/* resolveComponent */.up)("q-date");
  const _component_q_popup_proxy = (0,vue_esm_bundler/* resolveComponent */.up)("q-popup-proxy");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
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
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-center bg-transparent q-px-lg flex flex-center q-pb-sm", _ctx.noclose ? 'q-pt-md' : 'q-py-none'])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
        flat: "",
        animated: "",
        modelValue: _ctx.formStep,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.formStep = $event),
        ref: "formStepper",
        color: "secondary",
        class: "full-width no-unset",
        "done-icon": "icon-tick text-h4",
        "done-color": "secondary text-secondary",
        "active-icon": "icon-circle-01 text-body2",
        "active-color": "primary",
        "inactive-icon": "icon-circle-01 text-body2 text-primary-700",
        "inactive-color": "primary-200",
        "error-icon": "icon-alert-triangle",
        "error-color": "negative",
        contracted: _ctx.$q.screen.lt.sm,
        "header-class": "text-primary-700",
        "alternative-labels": "",
        style: {
          "max-width": "344px"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 1,
          title: "Select Billing",
          class: "flex flex-center full-width",
          done: _ctx.formStep > 1,
          style: {
            "max-width": "208px"
          }
        }, null, 8, ["done"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 2,
          title: "Confirm Plan",
          class: "flex flex-center full-width",
          done: _ctx.formStep > 1,
          style: {
            "max-width": "208px"
          }
        }, null, 8, ["done"])]),
        _: 1
      }, 8, ["modelValue", "contracted"])]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-center bg-transparent q-px-lg q-pt-none", _ctx.noclose ? '' : 'q-py-none'])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
        flat: "",
        animated: "",
        modelValue: _ctx.formStep,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.formStep = $event),
        ref: "formStepper",
        color: "secondary",
        class: "full-width full-inner no-unset with-overflow",
        "done-icon": "icon-tick text-h4",
        "done-color": "secondary text-secondary",
        "active-icon": "icon-circle-01 text-body2",
        "active-color": "primary",
        "inactive-icon": "icon-circle-01 text-body2 text-primary-700",
        "inactive-color": "primary-200",
        "error-icon": "icon-alert-triangle",
        "error-color": "negative",
        contracted: _ctx.$q.screen.lt.sm,
        "header-class": "text-primary-700 hidden"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 1,
          title: "Select Plan",
          class: "flex flex-center full-width full-inner",
          done: _ctx.formStep > 1
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_1, [SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_2, (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_3, [(0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_4, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.subscription_BillingTypes, item => {
            return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
              key: item,
              class: "col-12 col-sm-6"
            }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
              flat: "",
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded border-add border-md text-body2", {
                ['border-secondary bg-accent']: _ctx.newPlan['billing']?.id === item.id,
                ['hover-border-secondary']: _ctx.subscription_billing_id !== item.id,
                ['disabled bg-primary-100']: _ctx.subscription_billing_id === item.id
              }])
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_radio, {
                modelValue: _ctx.newPlan['billing'],
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.newPlan['billing'] = $event),
                val: item,
                color: "secondary",
                class: "radio-md full-width q-pa-sm",
                disable: _ctx.subscription_billing_id === item.id
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.label) + " ", 1), item.savings && _ctx.planPriceCalculator(_ctx.newPlan.talent?.value || 1, item.id)?.discount_label?.toLowerCase?.() !== 'custom' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
                  key: 0,
                  class: "badge badge-blue q-ml-xs"
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.savings_label) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.planPriceCalculator(_ctx.newPlan.talent?.value || 1, item.id)?.discount_label), 1)]),
                  _: 2
                }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
                _: 2
              }, 1032, ["modelValue", "val", "disable"])), [[_directive_ripple, _ctx.subscription_billing_id === item.id ? false : {
                color: 'secondary'
              }]])]),
              _: 2
            }, 1032, ["class"])]);
          }), 128))])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_5, [SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_6, (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            dense: "",
            outlined: "",
            unelevated: "",
            modelValue: _ctx.newPlan.start_date,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.newPlan.start_date = $event),
            onChange: _ctx.startDateInput,
            placeholder: "Select date",
            class: "hover-text-secondary cursor-pointer",
            style: {
              "width": "160px"
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
              offset: [-170, -100],
              onBeforeShow: _cache[4] || (_cache[4] = $event => _ctx.proxy.start_date = _ctx.newPlan.start_date)
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_date, {
                "today-btn": "",
                "first-day-of-week": "1",
                mask: "MMM DD, YYYY",
                color: "secondary",
                "years-in-month-view": "",
                options: _ctx.yearFromToday,
                modelValue: _ctx.proxy.start_date,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.proxy.start_date = $event),
                "navigation-min-year-month": _ctx.thisMonth,
                "navigation-max-year-month": _ctx.after1Year
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_8, [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                  outline: "",
                  "no-caps": "",
                  unelevated: "",
                  class: "button-gm-outline-dark",
                  label: "Cancel",
                  color: "primary"
                }, null, 512), [[_directive_close_popup]]), (0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                  "no-caps": "",
                  unelevated: "",
                  label: "Apply",
                  color: "secondary",
                  onClick: _cache[2] || (_cache[2] = $event => _ctx.newPlan.start_date = _ctx.proxy.start_date)
                }, null, 512), [[_directive_close_popup]])])]),
                _: 1
              }, 8, ["options", "modelValue", "navigation-min-year-month", "navigation-max-year-month"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue", "onChange"])])])]),
          _: 1
        }, 8, ["done"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 2,
          title: "Confirm Plan",
          class: "flex flex-center full-width full-inner",
          done: _ctx.formStep > 1
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_9, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
            bordered: "",
            class: "shadows-sm card-padding-sm"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_10, [(0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_11, [SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_12, (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_13, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.newPlan['billing']?.label) + " / Next Billing on " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.nextBillingDate), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_14, [SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_15, (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_16, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.formatDate(_ctx.newPlan?.start_date, 'Do MMMM YYYY')), 1)])])]),
            _: 1
          })]),
          _: 1
        }, 8, ["done"])]),
        _: 1
      }, 8, ["modelValue", "contracted"])]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
      class: "full-width justify-between q-pa-lg"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_17, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.planPriceCalculator(_ctx.newPlan.talent?.value, _ctx.newPlan.billing?.id || _ctx.subscription_billing_id)?.label), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_18, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.newPlan['billing']?.billed_label || _ctx.subscription_BillingTypes[_ctx.subscription_billing_id]?.label), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", SubscriptionDiscountvue_type_template_id_cf74c330_hoisted_19, [_ctx.formStep > 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        key: 0,
        outline: "",
        "no-caps": "",
        unelevated: "",
        class: "rounded text-body1 font-medium button-md button-gm-outline-dark",
        disable: _ctx.loading,
        onClick: _cache[7] || (_cache[7] = $event => _ctx.formStep -= 1)
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Edit Plan ")]),
        _: 1
      }, 8, ["disable"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "rounded slide-hover text-body1 font-medium button-md",
        disable: _ctx.loading,
        onClick: _cache[8] || (_cache[8] = () => {
          if (_ctx.formStep === 2) {
            _ctx.requestChanges();
          } else {
            if (_ctx.allDataIsValid) {
              _ctx.formStep += 1;
            } else {
              _ctx.checkDataIsValid();
            }
          }
        })
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Submit Plan Update "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-arrow-narrow-right",
          class: "q-pl-xs"
        })]),
        _: 1
      }, 8, ["disable"])])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/SubscriptionDiscount.vue?vue&type=template&id=cf74c330

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__(4170);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/SubscriptionDiscount.vue?vue&type=script&lang=js








/* harmony default export */ const SubscriptionDiscountvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'Dialog_SubscriptionDiscount',
  emits: ['requestChanges'],
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
        start_date: null,
        message: null
      },
      proxy: {
        start_date: null
      },
      numberToWords: functions.numberToWords,
      formatMoney: functions.formatMoney,
      formatDate: date/* default.formatDate */.ZP.formatDate,
      formStep: 1,
      loading: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrg', 'selectedOrgIsMaintenance']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['maintenance', 'subscription', 'subscription_BillingTypes', 'subscription_Talents']),
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
    },
    nextBillingDate() {
      return this.allDataIsValid ? date/* default.formatDate */.ZP.formatDate(date/* default.addToDate */.ZP.addToDate(this.newPlan.start_date, {
        months: this.newPlan?.['billing']?.value
      }), 'Do MMMM YYYY') : 'N/A';
    }
  },
  watch: {
    subscription_billing_id: {
      async handler(val) {
        this.newPlan.talent = this.subscription_BillingTypes[val];
      }
    }
  },
  mounted() {
    this.newPlan.talent = this.subscription_BillingTypes[this.subscription_billing_id];
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['planPriceCalculator']),
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getCurrency']),
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['requestSubscriptionChange']),
    checkDataIsValid() {
      if (this.allDataIsValid) return true;
      let message = '';
      if (!this.newPlan?.talent?.value) {
        message = 'Please select talent count';
      } else if (!this.newPlan?.billing?.value) {
        message = 'Please select billing';
      } else if (!this.newPlan?.start_date) {
        message = 'Please select start date';
      } else if (!date/* default.isValid */.ZP.isValid(this.newPlan?.start_date)) {
        message = 'Invalid start date selected';
      } else if (!this.yearFromToday(date/* default.formatDate */.ZP.formatDate(this.newPlan?.start_date, 'YYYY/MM/DD'))) {
        message = 'Start date is out of range';
      }
      if (message) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message
        });
        return false;
      }
      return true;
    },
    async requestChanges() {
      this.loading = true;
      if (this.checkDataIsValid()) {
        const _ = this.newPlan;
        const response = await this.requestSubscriptionChange({
          subscription_talent_id: _.talent?.id,
          subscription_billing_id: _.billing?.id,
          starts_on: _.start_date,
          message: _.message
        });
        if (response.success) {
          this.$root.dialogRequestUpgrade = true;
          this.$emit('requestChanges', this.newPlan);
        }
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: 'Please select you new plan details.'
        });
      }
      this.loading = false;
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
;// CONCATENATED MODULE: ./src/components/Dialogs/SubscriptionDiscount.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__(8225);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js
var QStep = __webpack_require__(6017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__(2765);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js + 1 modules
var QDate = __webpack_require__(7088);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(1821);
;// CONCATENATED MODULE: ./src/components/Dialogs/SubscriptionDiscount.vue




;
const SubscriptionDiscount_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SubscriptionDiscountvue_type_script_lang_js, [['render',SubscriptionDiscountvue_type_template_id_cf74c330_render]])

/* harmony default export */ const SubscriptionDiscount = (SubscriptionDiscount_exports_);
;













runtime_auto_import_default()(SubscriptionDiscountvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QRadio: QRadio/* default */.Z,QBadge: QBadge/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QPopupProxy: QPopupProxy/* default */.Z,QDate: QDate/* default */.Z,QBtn: QBtn/* default */.Z,QCardActions: QCardActions/* default */.Z});runtime_auto_import_default()(SubscriptionDiscountvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z,ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Subscription.vue?vue&type=script&lang=js










/* harmony default export */ const Subscriptionvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SubscriptionInformation',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    SubscriptionPlans: SubscriptionPlans,
    OffBoarding: OffBoarding,
    Dialog_SubscriptionDiscount: SubscriptionDiscount
  },
  data() {
    return {
      editing: false,
      numberToWords: functions.numberToWords,
      startOffBoarding: false,
      offboardingStep: '',
      discountDialog: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['organizations', 'selectedOrg', 'selectedOrgIsMaintenance', 'selectedOrgIsPaused']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['subscription', 'subscription_Talents', 'maintenance']),
    orgsubscription() {
      return !fn_store/* default.getAuth */.Z.getAuth() ? {} : this.selectedOrg?.subscriptions;
    },
    talentCount() {
      return this.subscription_Talents[this.orgsubscription.subscription_talent_id] || {};
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['isOrgOwner', 'isOrgAdmin', 'isOrgBiller', 'resumeSubscription']),
    nextBtnClick() {
      this.editing = false;
      this.$root.dialogRequestUpgrade = true;
    },
    planUpdated(planinfo) {
      if (true) console.log('Plan Changed:', planinfo);
    },
    async resumeAccount() {
      const response = await this.resumeSubscription({});
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        this.formStep = 'pause_done';
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: message || 'Subscription has been resumed'
        });
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Error while processing your request'
        });
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Accounts/Subscription.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Accounts/Subscription.vue




;
const Subscription_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Subscriptionvue_type_script_lang_js, [['render',Subscriptionvue_type_template_id_6648b7f3_render]])

/* harmony default export */ const Subscription = (Subscription_exports_);
;






runtime_auto_import_default()(Subscriptionvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QDialog: QDialog/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/UsersList.vue?vue&type=template&id=4462cfe5

const UsersListvue_type_template_id_4462cfe5_hoisted_1 = {
  key: 0,
  class: "q-gutter-sm"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_2 = {
  class: "bg-color absolute-top",
  style: {
    "top": "43px"
  }
};
const UsersListvue_type_template_id_4462cfe5_hoisted_3 = {
  class: "text-body2 font-medium text-primary-500"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_4 = {
  class: "row items-center q-col-gutter-sm"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_5 = {
  class: "q-gutter-sm text-right"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_6 = {
  key: 0,
  class: "q-py-md row full-width items-center justify-center q-col-gutter-sm q-virtual-scroll--skip"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_7 = {
  class: "q-py-md row full-width items-center justify-between q-col-gutter-sm q-virtual-scroll--skip"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_8 = {
  class: "full-width text-center"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_9 = {
  class: "full-width row flex-center text-primary-500"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_10 = {
  class: "text-body2 text-primary-500 font-medium"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_11 = {
  key: 0,
  class: "full-width row flex-center text-primary-500 q-pt-sm"
};
const UsersListvue_type_template_id_4462cfe5_hoisted_12 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-xs"
}, "Invite User", -1);
function UsersListvue_type_template_id_4462cfe5_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_linear_progress = (0,vue_esm_bundler/* resolveComponent */.up)("q-linear-progress");
  const _component_q_th = (0,vue_esm_bundler/* resolveComponent */.up)("q-th");
  const _component_q_tr = (0,vue_esm_bundler/* resolveComponent */.up)("q-tr");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_td = (0,vue_esm_bundler/* resolveComponent */.up)("q-td");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_pagination = (0,vue_esm_bundler/* resolveComponent */.up)("q-pagination");
  const _component_q_table = (0,vue_esm_bundler/* resolveComponent */.up)("q-table");
  const _component_Add_Edit_User = (0,vue_esm_bundler/* resolveComponent */.up)("Add_Edit_User");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "card-padding-title-xs"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h5 text-primary-700 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Users Information ")]),
          _: 1
        }), _ctx.orgUsers.length && (_ctx.isOrgOwner() || _ctx.isOrgAdmin()) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", UsersListvue_type_template_id_4462cfe5_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          iconSize: "xs",
          label: "Invite User",
          icon: "icon-user-plus-01",
          alwaysShowIcon: true,
          onClick: _ctx.inviteUser
        }, null, 8, ["onClick"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_table, {
      "row-key": "id",
      filteredSortedRows: "",
      "binary-state-sort": "",
      rows: _ctx.orgUsers,
      columns: _ctx.columns,
      color: "primary",
      loading: _ctx.tableLoading,
      "rows-per-page-label": "Users per page",
      "no-data-label": "No users found.",
      "no-results-label": "The filter didn't uncover any results.",
      "loading-label": "Getting data from the server.",
      "rows-per-page-options": [10, 20, 30, 50, 50, 0],
      style: {
        "max-height": "1080px"
      },
      "visible-columns": _ctx.visibleColumns
    }, {
      loading: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_4462cfe5_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
        size: "2px",
        indeterminate: "",
        color: "secondary"
      })])]),
      header: (0,vue_esm_bundler/* withCtx */.w5)(props => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tr, {
        class: "bg-color"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(props.cols, (col, i) => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_th, {
            "auto-width": "",
            props: props,
            key: col.name,
            style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
              "position": "sticky",
              "top": "0",
              "z-index": "2"
            }, i === 0 ? 'padding-left: 24px' : ''])
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", UsersListvue_type_template_id_4462cfe5_hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(col.label), 1)]),
            _: 2
          }, 1032, ["props", "style"]);
        }), 128)), _ctx.isOrgOwner() || _ctx.isOrgAdmin() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_th, {
          key: 0,
          "auto-width": "",
          style: {
            "position": "sticky",
            "top": "0",
            "z-index": "2"
          },
          class: "text-right"
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 2
      }, 1024)]),
      body: (0,vue_esm_bundler/* withCtx */.w5)(props => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tr, {
        props: props,
        class: "hover-bg-accent"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(props.cols, (_r, i) => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_td, {
            key: _r.name || i,
            props: props,
            class: "cursor-pointer text-center text-primary q-py-md",
            style: (0,vue_esm_bundler/* normalizeStyle */.j5)(i === 0 ? 'padding-left: 24px; padding-top: 18px; padding-bottom: 18px' : '')
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_4462cfe5_hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("span", {
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2", i === 0 ? 'font-medium' : ''])
            }, (0,vue_esm_bundler/* toDisplayString */.zw)(_r.value), 3), i === 1 && _ctx.selectedOrgUsers?.[props.row?.id]?.status === 'pending' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
              key: 0,
              size: "xs",
              color: "warning",
              name: "icon-clock"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Invitation Pending")]),
                _: 1
              })]),
              _: 1
            })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])]),
            _: 2
          }, 1032, ["props", "style"]);
        }), 128)), _ctx.isOrgOwner() || _ctx.isOrgAdmin() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_td, {
          key: 0,
          style: {
            "padding-right": "24px",
            "padding-top": "18px",
            "padding-bottom": "18px"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_4462cfe5_hoisted_5, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            disable: _ctx.isOrgOwner(props.row?.id),
            flat: "",
            round: "",
            size: "sm",
            color: "primary-500",
            onClick: $event => _ctx.deleteUser(props.row?.id),
            icon: "icon-trash-01",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)({
              ['hover-text-negative']: !_ctx.isOrgOwner(props.row?.id)
            })
          }, null, 8, ["disable", "onClick", "class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            disable: _ctx.isOrgOwner(props.row?.id),
            flat: "",
            round: "",
            size: "sm",
            color: "primary-500",
            onClick: $event => _ctx.editUser(props.row?.id),
            icon: "icon-edit-01",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)({
              ['hover-text-secondary']: !_ctx.isOrgOwner(props.row?.id)
            })
          }, null, 8, ["disable", "onClick", "class"])])]),
          _: 2
        }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 2
      }, 1032, ["props"])]),
      bottom: (0,vue_esm_bundler/* withCtx */.w5)(scope => [_ctx.$q.screen.lt.xs || _ctx.$q.screen.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", UsersListvue_type_template_id_4462cfe5_hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_pagination, {
        flat: "",
        unelevated: "",
        "boundary-numbers": "",
        modelValue: scope.pagination.page,
        "onUpdate:modelValue": $event => scope.pagination.page = $event,
        disable: _ctx.tableLoading,
        color: "transparent",
        "text-color": "primary-500",
        "active-color": "primary-50",
        "active-text-color": "primary-700",
        max: scope.pagesNumber,
        "max-pages": 6
      }, null, 8, ["modelValue", "onUpdate:modelValue", "disable", "max"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_4462cfe5_hoisted_7, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-left", _ctx.$q.screen.gt.xs ? 'col-2' : 'col-6'])
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        dense: "",
        outline: "",
        "no-caps": "",
        disable: scope.isFirstPage,
        onClick: scope.prevPage,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-px-md slide-hover button-gm-outline-dark text-body1 font-medium button-sm", {
          [scope.isFirstPage ? 'text-primary-500' : 'text-primary']: true,
          ['hover-text-secondary']: !scope.isFirstPage
        }])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-arrow-narrow-left",
          class: "q-pr-xs"
        }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Previous ")]),
        _: 2
      }, 1032, ["disable", "onClick", "class"])], 2), _ctx.$q.screen.gt.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_pagination, {
        key: 0,
        flat: "",
        unelevated: "",
        "boundary-numbers": "",
        modelValue: scope.pagination.page,
        "onUpdate:modelValue": $event => scope.pagination.page = $event,
        disable: _ctx.tableLoading,
        color: "transparent",
        "text-color": "primary-500",
        "active-color": "primary-50",
        "active-text-color": "primary-700",
        max: scope.pagesNumber,
        "max-pages": 6
      }, null, 8, ["modelValue", "onUpdate:modelValue", "disable", "max"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-right", _ctx.$q.screen.gt.xs ? 'col-2' : 'col-6'])
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        dense: "",
        outline: "",
        "no-caps": "",
        disable: scope.isLastPage,
        onClick: scope.nextPage,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-px-md slide-hover button-gm-outline-dark text-body1 font-medium button-sm", {
          [scope.isLastPage ? 'text-primary-500' : 'text-primary']: true,
          ['hover-text-secondary']: !scope.isLastPage
        }])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Next "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-arrow-narrow-right",
          class: "q-pl-xs"
        })]),
        _: 2
      }, 1032, ["disable", "onClick", "class"])], 2)])]),
      "no-data": (0,vue_esm_bundler/* withCtx */.w5)(({
        icon,
        message
      }) => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_4462cfe5_hoisted_8, [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_4462cfe5_hoisted_9, [_ctx.tableLoading ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
        key: 0,
        class: "q-pr-sm",
        size: "sm",
        color: _ctx.tableLoading ? 'secondary' : 'negative',
        name: _ctx.tableLoading ? 'icon-download-cloud-01' : icon
      }, null, 8, ["color", "name"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("span", UsersListvue_type_template_id_4462cfe5_hoisted_10, (0,vue_esm_bundler/* toDisplayString */.zw)(message), 1)]), !_ctx.tableLoading && (_ctx.isOrgOwner() || _ctx.isOrgAdmin()) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", UsersListvue_type_template_id_4462cfe5_hoisted_11, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        class: "button-sm",
        onClick: _ctx.inviteUser,
        color: "primary"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "icon-user-plus-01",
          size: "20px"
        }), UsersListvue_type_template_id_4462cfe5_hoisted_12]),
        _: 1
      }, 8, ["onClick"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])]),
      _: 1
    }, 8, ["rows", "columns", "loading", "visible-columns"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.dialog_AddEditUser,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.dialog_AddEditUser = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_Add_Edit_User, {
        uid: _ctx.userToEdit,
        style: {
          "max-width": "80vw",
          "width": "800px"
        },
        onAdded: _cache[0] || (_cache[0] = $event => _ctx.dialog_AddEditUser = false),
        onUpdated: _cache[1] || (_cache[1] = $event => _ctx.dialog_AddEditUser = false),
        onClose: _cache[2] || (_cache[2] = $event => _ctx.dialog_AddEditUser = false)
      }, null, 8, ["uid"])]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Users/UsersList.vue?vue&type=template&id=4462cfe5

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/Add_Edit_User.vue?vue&type=template&id=3781ff44

const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_1 = {
  class: "q-gutter-sm"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_2 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium text-primary-600"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Username"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_4 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_5 = {
  class: "row items-center justify-start col-6 q-col-gutter-sm"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_6 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium text-primary-600"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Password"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_7 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_8 = {
  class: "row q-col-gutter-md items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_9 = {
  class: "col-12 col-md-6"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_10 = {
  class: "row items-center justify-start q-col-gutter-md"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_11 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium text-primary-600"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Full Name"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_12 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_13 = {
  class: "row q-col-gutter-md items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_14 = {
  class: "col-12 col-md-6"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_15 = {
  class: "col-12 col-md-6"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_16 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_17 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium text-primary-600"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" User Role"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_18 = {
  class: "col-12 col-sm-8 col-md-6 col-md-9"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_19 = {
  class: "row q-col-gutter-md items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_20 = {
  class: "col-12 col-md-6"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_21 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_22 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium text-primary-600"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Email Address"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_3781ff44_hoisted_23 = {
  class: "col-12 col-sm-8 col-md-9"
};
function Add_Edit_Uservue_type_template_id_3781ff44_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_InputPassword = (0,vue_esm_bundler/* resolveComponent */.up)("InputPassword");
  const _component_SelectUserRole = (0,vue_esm_bundler/* resolveComponent */.up)("SelectUserRole");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "card-padding-title-xs"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "text-primary q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h6 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.newUser ? 'Invite User' : 'Users Information') + " ", 1), _ctx.selectedOrgUsers?.[_ctx.uid]?.status === 'pending' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
            key: 0,
            class: "q-ml-md badge badge-warning"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Invitation Pending ")]),
            _: 1
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 1
        }), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_1, [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          outline: "",
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          iconSize: "xs",
          label: "Cancel",
          class: "button-gm-outline-dark",
          icon: "icon-x-close"
        }, null, 8, ["flat"]), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          alwaysShowIcon: "",
          iconSize: "xs",
          label: _ctx.newUser ? 'Invite User' : 'Save Changes',
          icon: _ctx.newUser ? 'icon-user-plus-01' : 'icon-save-01',
          onClick: _ctx.saveUserInfo
        }, null, 8, ["label", "icon", "onClick"])])]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["card-padding", _ctx.$q.screen.gt.sm ? 'q-col-gutter-lg' : 'q-col-gutter-md'])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_2, [Add_Edit_Uservue_type_template_id_3781ff44_hoisted_3, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_4, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        modelValue: _ctx.account.username,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.account.username = $event),
        placeholder: "username",
        tabindex: "1"
      }, null, 8, ["modelValue"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_5, [Add_Edit_Uservue_type_template_id_3781ff44_hoisted_6, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_7, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_8, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_9, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputPassword, {
        modelValue: _ctx.account.password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.account.password = $event),
        tabindex: "2"
      }, null, 8, ["modelValue"])])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_10, [Add_Edit_Uservue_type_template_id_3781ff44_hoisted_11, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_12, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_13, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_14, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "First Name",
        modelValue: _ctx.account.firstname,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.account.firstname = $event),
        tabindex: "3"
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_15, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "Last Name",
        modelValue: _ctx.account.lastname,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.account.lastname = $event),
        tabindex: "4"
      }, null, 8, ["modelValue"])])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_16, [Add_Edit_Uservue_type_template_id_3781ff44_hoisted_17, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_18, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_19, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_20, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SelectUserRole, {
        modelValue: _ctx.account.role,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.account.role = $event),
        initModel: _ctx.account.role,
        tabindex: "5"
      }, null, 8, ["modelValue", "initModel"])])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_21, [Add_Edit_Uservue_type_template_id_3781ff44_hoisted_22, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_3781ff44_hoisted_23, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "example@email.com",
        modelValue: _ctx.account.email,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.account.email = $event),
        tabindex: "6"
      }, null, 8, ["modelValue"])])])]),
      _: 1
    }, 8, ["class"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Users/Add_Edit_User.vue?vue&type=template&id=3781ff44

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/Add_Edit_User.vue?vue&type=script&lang=js







/* harmony default export */ const Add_Edit_Uservue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'Add_Edit_User',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    InputPassword: InputPassword/* default */.Z,
    SelectUserRole: SelectUserRole
  },
  emits: ['added', 'updated', 'error', 'close'],
  props: {
    uid: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      userInfo: null,
      account: {},
      newUser: true
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgUsers'])
  },
  mounted() {
    this.userInfo = this.selectedOrgUsers[this.uid];
    if (this.userInfo) {
      this.account = (0,functions.objectCopy)(this.userInfo);
      this.newUser = false;
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['addOrgUser', 'updateOrgUser']),
    async saveUserInfo() {
      if (!this.account || !((0,functions.checkIfObject)(this.account) && Object.values(this.account).join(''))) return;
      if (this.newUser) {
        // Register New User
        const _ = this.account;
        const payload = {
          username: _.username,
          password: _.password,
          firstname: _.firstname,
          lastname: _.lastname,
          role: _.role,
          email: _.email
        };
        const add_response = await this.addOrgUser(payload);
        const add_message = (0,functions.extractErrorMessageString)(add_response?.message);
        if (add_response.success) {
          this.$emit('added', add_response.data?.user?.id);
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: 'Your invitation has been sent'
          });
        } else {
          this.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: add_message || 'Invitation failed'
          });
        }
      } else {
        // Update Existing User
        const _ = this.account;
        const payload = {
          username: _.username,
          password: _.password,
          firstname: _.firstname,
          lastname: _.lastname,
          role: _.role,
          email: _.email
        };
        const edit_response = await this.updateOrgUser(this.uid, payload);
        const edit_message = (0,functions.extractErrorMessageString)(edit_response?.message);
        if (edit_response.success) {
          this.$emit('updated', this.uid);
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: 'Your changes have been successfully saved'
          });
        } else {
          this.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: edit_message || 'An error occured while updating the user'
          });
        }
      }
    }
  },
  beforeUnmount() {
    this.$emit('close');
  }
}));
;// CONCATENATED MODULE: ./src/components/Users/Add_Edit_User.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Users/Add_Edit_User.vue




;
const Add_Edit_User_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Add_Edit_Uservue_type_script_lang_js, [['render',Add_Edit_Uservue_type_template_id_3781ff44_render]])

/* harmony default export */ const Add_Edit_User = (Add_Edit_User_exports_);
;







runtime_auto_import_default()(Add_Edit_Uservue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QBadge: QBadge/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z});runtime_auto_import_default()(Add_Edit_Uservue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/UsersList.vue?vue&type=script&lang=js








/* harmony default export */ const UsersListvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'UsersList',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    Add_Edit_User: Add_Edit_User
  },
  data() {
    return {
      rows: [],
      visibleColumns: [],
      userToEdit: 0,
      tableLoading: true,
      dialog_AddEditUser: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrgUsers']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['userInvitedRoles']),
    orgUsers() {
      return Object.values(this.selectedOrgUsers).filter(e => e.id !== this.user.id);
    },
    columns() {
      return [{
        name: 'id',
        required: false,
        label: 'Id',
        align: 'left',
        field: row => `${row.id}`,
        format: val => val,
        sortable: true
      }, {
        name: 'fullname',
        required: true,
        label: 'User',
        align: 'left',
        field: row => `${row.firstname} ${row.lastname}`,
        format: val => val,
        sortable: true
      }, {
        name: 'email',
        align: 'left',
        label: 'Email Address',
        field: row => row.email,
        format: val => val,
        sortable: true
      }, {
        name: 'role',
        align: 'left',
        label: 'User Role',
        field: 'role',
        field: row => row.id,
        format: val => this.isOrgOwner(val) ? 'Owner' : this.userInvitedRoles[this.getUserRole(val)]?.label,
        sortable: true
      }];
    }
  },
  async mounted() {
    this.getOrgUsers().finally(() => {
      this.tableLoading = false;
    });
    this.visibleColumns = this.columns.map(c => c.name) // Get all the column names
    .filter(e => !['id'].includes(e)); // Hide some columns initially
  },

  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['getOrgUsers', 'deleteOrgUser', 'isOrgOwner', 'isOrgAdmin', 'getUserRole']),
    inviteUser() {
      this.userToEdit = 0;
      this.dialog_AddEditUser = true;
    },
    async deleteUser(userId) {
      this.tableLoading = true;
      const response = await this.deleteOrgUser(userId);
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: message || 'User has been removed from your organization'
        });
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'An error occured while removing the user'
        });
      }
      this.tableLoading = false;
    },
    editUser(userId) {
      this.userToEdit = userId;
      this.dialog_AddEditUser = true;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Users/UsersList.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 7 modules
var QTable = __webpack_require__(113);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js
var QLinearProgress = __webpack_require__(8289);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__(3532);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTh.js
var QTh = __webpack_require__(1682);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(7220);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/virtual-scroll/QVirtualScroll.js + 1 modules
var QVirtualScroll = __webpack_require__(2482);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/pagination/QPagination.js
var QPagination = __webpack_require__(996);
;// CONCATENATED MODULE: ./src/components/Users/UsersList.vue




;
const UsersList_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(UsersListvue_type_script_lang_js, [['render',UsersListvue_type_template_id_4462cfe5_render]])

/* harmony default export */ const UsersList = (UsersList_exports_);
;















runtime_auto_import_default()(UsersListvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QTable: QTable/* default */.Z,QLinearProgress: QLinearProgress/* default */.Z,QTr: QTr/* default */.Z,QTh: QTh/* default */.Z,QTd: QTd/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z,QVirtualScroll: QVirtualScroll/* default */.Z,QPagination: QPagination/* default */.Z,QDialog: QDialog/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/AccountSettingsPage.vue?vue&type=script&lang=js








/* harmony default export */ const AccountSettingsPagevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'AccountSettingsPage',
  components: {
    AccountProfile: Profile,
    CompanyProfile: Company,
    SubscriptionInformation: Subscription,
    UsersList: UsersList
  },
  data() {
    const settingsMenu = {
      profile: {
        key: 'profile',
        label: 'Profile',
        icon: 'icon-user-03'
      },
      company_profile: {
        key: 'company_profile',
        label: 'Company',
        icon: 'icon-building-05'
      },
      users: {
        key: 'users',
        label: 'Users',
        icon: 'icon-users-02'
      },
      subscription: {
        key: 'subscription',
        label: 'Subscription',
        icon: 'icon-wallet-02'
      },
      billing: {
        key: 'billing',
        noswitch: true,
        label: 'Billing',
        icon: 'icon-credit-card-02',
        view: this.isOrgOwner() || this.isOrgAdmin() || this.isOrgBiller(),
        action: this.goToBilling
      },
      logout: {
        key: 'logout',
        noswitch: true,
        label: 'Logout',
        icon: 'icon-log-out-01',
        action: () => {
          this.confirmLogout = true;
        }
      }
    };
    return {
      title: 'Account Settings',
      tab: '',
      settingsMenu,
      editing: false,
      confirmLogout: false
    };
  },
  async mounted() {
    this.$root.setMeta({
      title: this.title
    });
    this.$root.toggleSettingsDrawer(true);
    this.tab = this.settingsMenu.profile?.key;
    if (this.$q.screen.gt.sm) {
      if (this.routeTab) {
        let menu = this.settingsMenu[this.routeTab]?.key;
        if (menu) this.tab = this.routeTab;
      } else {
        this.$router.replace(`/settings/${this.settingsMenu.profile?.key}`);
      }
    }
  },
  watch: {
    tab: {
      async handler(val) {
        this.$root.setMeta({
          title: this.settingsMenu?.[val]?.label || 'Settings'
        });
      }
    },
    routeTab: {
      async handler(val) {
        if (this.$q.screen.gt.sm) {
          if (this.$route.path == '/settings') {
            this.$router.replace(`/settings/${val || this.settingsMenu.profile?.key}`);
            this.tab = val || this.settingsMenu.profile?.key;
          }
        }
      }
    }
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['redirect']),
    routeTab() {
      return this.$route.params?.settings_tab;
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['logout', 'isOrgOwner', 'isOrgAdmin', 'isOrgBiller']),
    async logoutAccount() {
      const response = await this.logout();
      if (!response.success) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: 'An error occured during logout'
        });
      }
    },
    goToBilling() {
      this.$root.toggleRedirectConfirmation(this.redirect?.stripe);
    }
  },
  beforeUnmount() {
    this.$root.toggleSettingsDrawer(false);
  }
}));
;// CONCATENATED MODULE: ./src/pages/AccountSettingsPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(9885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(249);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(6663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__(9800);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__(4106);
;// CONCATENATED MODULE: ./src/pages/AccountSettingsPage.vue




;
const AccountSettingsPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AccountSettingsPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const AccountSettingsPage = (AccountSettingsPage_exports_);
;














runtime_auto_import_default()(AccountSettingsPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QLayout: QLayout/* default */.Z,QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QBadge: QBadge/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QTabPanels: QTabPanels/* default */.Z,QTabPanel: QTabPanel/* default */.Z,QDialog: QDialog/* default */.Z});runtime_auto_import_default()(AccountSettingsPagevue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=884.41afbee2.js.map