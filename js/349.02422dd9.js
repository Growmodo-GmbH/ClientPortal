"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[349],{

/***/ 63349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AccountSettingsPage)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/AccountSettingsPage.vue?vue&type=template&id=2b6381b8

const _hoisted_1 = {
  class: "flex flex-center"
};
const _hoisted_2 = {
  class: "flex flex-center"
};
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
        bordered: "",
        "show-if-above": "",
        side: "left",
        class: "drawer-settings bg-white",
        width: 250,
        breakpoint: 600,
        modelValue: _ctx.$root.settingsDrawer,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$root.settingsDrawer = $event)
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
          class: "fit"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
            class: "q-pt-lg"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
              class: "menu-item text-primary text-body1 font-medium",
              style: {
                "height": "56px"
              }
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Dashboard")]),
                _: 1
              })]),
              _: 1
            })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.settingsMenu, (item, i) => {
              return (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
                clickable: "",
                key: i,
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["menu-item text-body2 rounded font-medium q-my-xs hover-text-secondary hover-bg-accent", _ctx.tab === item.key ? 'text-secondary font-medium bg-accent' : 'text-primary hover-bg-accent']),
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
                      size: "sm",
                      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["", _ctx.tab === item.key ? 'text-secondary' : 'color-primary2'])
                    }, null, 8, ["name", "class"])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
                  _: 2
                }, 1024), item.badge ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
                  key: 0,
                  side: ""
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
              }, 1032, ["class", "to", "onClick"])), [[_directive_ripple, void 0, "secondary"]]);
            }), 128))])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
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
              onOkay: _cache[2] || (_cache[2] = $event => this.logoutAccount())
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
;// CONCATENATED MODULE: ./src/pages/AccountSettingsPage.vue?vue&type=template&id=2b6381b8

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Profile.vue?vue&type=template&id=b101cc7c

const Profilevue_type_template_id_b101cc7c_hoisted_1 = {
  class: "q-gutter-y-lg"
};
const Profilevue_type_template_id_b101cc7c_hoisted_2 = {
  class: "q-gutter-sm"
};
const _hoisted_3 = {
  class: "row full-wdith items-center justify-start"
};
const _hoisted_4 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const _hoisted_5 = {
  key: 0,
  class: "text-red"
};
const _hoisted_6 = {
  key: 0,
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_7 = {
  class: "row q-col-gutter-sm items-center justify-start"
};
const _hoisted_8 = {
  class: "col-12 col-md-6"
};
const _hoisted_9 = {
  class: "col-12 col-md-6"
};
const _hoisted_10 = {
  key: 1,
  class: "col-12 col-sm-8 col-md-9 letter-space-normal"
};
const _hoisted_11 = {
  class: "row full-wdith items-center justify-start"
};
const _hoisted_12 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const _hoisted_13 = {
  key: 0,
  class: "text-red"
};
const _hoisted_14 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_15 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_16 = ["href"];
const _hoisted_17 = {
  key: 0,
  class: "row full-wdith items-center justify-start"
};
const _hoisted_18 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const _hoisted_19 = {
  key: 0,
  class: "text-red"
};
const _hoisted_20 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_21 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_22 = {
  key: 1,
  class: "row full-wdith items-center justify-start"
};
const _hoisted_23 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
}, " Company ", -1);
const _hoisted_24 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_25 = {
  class: "letter-space-normal"
};
const _hoisted_26 = {
  key: 2,
  class: "row full-wdith items-center justify-start"
};
const _hoisted_27 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
}, " Role ", -1);
const _hoisted_28 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_29 = {
  class: "letter-space-normal"
};
const _hoisted_30 = {
  autocorrect: "off",
  autocapitalize: "off",
  autocomplete: "off",
  spellcheck: "false"
};
const _hoisted_31 = {
  class: "q-gutter-sm"
};
const _hoisted_32 = {
  class: "row full-width items-center justify-start"
};
const _hoisted_33 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const _hoisted_34 = {
  key: 0,
  class: "text-red"
};
const _hoisted_35 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_36 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_37 = {
  class: "row full-width items-center justify-start"
};
const _hoisted_38 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const _hoisted_39 = {
  key: 0,
  class: "text-red"
};
const _hoisted_40 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_41 = {
  key: 1,
  class: "letter-space-normal"
};
const _hoisted_42 = {
  class: "row full-width items-center justify-start"
};
const _hoisted_43 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const _hoisted_44 = {
  key: 0,
  class: "text-red"
};
const _hoisted_45 = {
  class: "col-12 col-sm-8 col-md-9"
};
const _hoisted_46 = {
  key: 1,
  class: "letter-space-normal"
};
function Profilevue_type_template_id_b101cc7c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_InputPhoneNumber = (0,vue_esm_bundler/* resolveComponent */.up)("InputPhoneNumber");
  const _component_external_link = (0,vue_esm_bundler/* resolveComponent */.up)("external-link");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_InputPassword = (0,vue_esm_bundler/* resolveComponent */.up)("InputPassword");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Profilevue_type_template_id_b101cc7c_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-px-lg q-py-md' : 'q-px-md q-py-sm')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "text-primary q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h6 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Account Information ")]),
          _: 1
        }), (0,vue_esm_bundler/* createElementVNode */._)("div", Profilevue_type_template_id_b101cc7c_hoisted_2, [!_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 0,
          label: "Edit Info",
          icon: "icon-pencil-02",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.editing = true)
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 1,
          outline: "",
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          label: "Cancel",
          icon: "icon-x-close",
          onClick: _ctx.cancelEditing
        }, null, 8, ["flat", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 2,
          label: "Save Changes",
          icon: "icon-save-01",
          onClick: _ctx.saveAccountInfo
        }, null, 8, ["onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-col-gutter-md font-normal text-primary text-body2", _ctx.$q.screen.gt.sm ? 'q-pa-lg' : 'q-pa-md']),
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.editing ? 'max-width: 900px' : '')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Full Name"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_5, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_6, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "First Name",
        modelValue: _ctx.account.firstname,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.account.firstname = $event),
        onChange: _cache[2] || (_cache[2] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "Last Name",
        modelValue: _ctx.account.lastname,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.account.lastname = $event),
        onChange: _cache[4] || (_cache[4] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])])])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_10, [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.firstname) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.lastname), 1)]))]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Email Address"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_13, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
        key: 0,
        dense: "",
        outlined: "",
        placeholder: "example@email.com",
        modelValue: _ctx.account.email,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.account.email = $event),
        onChange: _cache[6] || (_cache[6] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_15, [(0,vue_esm_bundler/* createElementVNode */._)("a", {
        href: 'mailto:' + _ctx.user.email,
        target: "_blank",
        class: "text-primary"
      }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user.email), 9, _hoisted_16)]))])]), _ctx.editing || _ctx.user.phone_country_code && _ctx.user.phone_number ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_17, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_18, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Phone Number"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_19)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_20, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPhoneNumber, {
        key: 0,
        onAreaCodeChanged: _cache[7] || (_cache[7] = e => {
          _ctx.account.phone_country_code = e;
          if (e != _ctx.user.phone_country_code) _ctx.changes_made = true;
        }),
        onNumberChanged: _cache[8] || (_cache[8] = e => {
          _ctx.account.phone_number = e;
          if (e != _ctx.user.phone_number) _ctx.changes_made = true;
        }),
        areaCode: _ctx.account.phone_country_code,
        phoneNumber: _ctx.account.phone_number
      }, null, 8, ["areaCode", "phoneNumber"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_21, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_external_link, {
        url: `tel:+${_ctx.user.phone_country_code}${_ctx.user.phone_number}`,
        label: `+${_ctx.user.phone_country_code} ${_ctx.user.phone_number}`
      }, null, 8, ["url", "label"])]))])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_22, [_hoisted_23, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_24, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_25, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.title), 1)])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.editing && !_ctx.isOrgOwner() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_26, [_hoisted_27, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_28, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_29, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.userRoles[_ctx.user.role]?.label || _ctx.user.role || 'Unknown'), 1)])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }, 8, ["class", "style"])]),
    _: 1
  }), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    key: 0,
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("form", _hoisted_30, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-px-lg q-py-md' : 'q-px-md q-py-sm')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "text-primary q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h6 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Account Security ")]),
          _: 1
        }), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_31, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          label: "Update Password",
          icon: "icon-save-01",
          onClick: _ctx.updatePwd,
          color: "primary"
        }, null, 8, ["onClick"])])]),
        _: 1
      })]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-col-gutter-md", _ctx.$q.screen.gt.sm ? 'q-px-lg q-py-md' : 'q-px-md q-py-sm']),
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.editing ? 'max-width: 900px' : '')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_32, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_33, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Old Password"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_34, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_35, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPassword, {
        key: 0,
        modelValue: _ctx.account.password_old,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.account.password_old = $event),
        tabindex: "1"
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_36, "*******"))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_37, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_38, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" New Password"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_39, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_40, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPassword, {
        key: 0,
        modelValue: _ctx.account.password_new,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => _ctx.account.password_new = $event),
        tabindex: "2"
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_41, "*******"))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_42, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_43, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Confirm New Password"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_44, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_45, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPassword, {
        key: 0,
        modelValue: _ctx.account.password_conf,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.account.password_conf = $event),
        tabindex: "3"
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_46, "*******"))])])]),
      _: 1
    }, 8, ["style", "class"])])]),
    _: 1
  })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.unsaved,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.unsaved = $event)
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)(_ctx.$root.messagesDialogs?.editingUnsaved, {
      onOkay: _cache[12] || (_cache[12] = $event => _ctx.editing = false)
    }), null, 16)]),
    _: 1
  }, 8, ["modelValue"])]);
}
;// CONCATENATED MODULE: ./src/components/Accounts/Profile.vue?vue&type=template&id=b101cc7c

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Helpers/DynamicButton.vue + 4 modules
var DynamicButton = __webpack_require__(8769);
// EXTERNAL MODULE: ./src/components/Helpers/InputPassword.vue + 4 modules
var InputPassword = __webpack_require__(63299);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPhoneNumber.vue?vue&type=template&id=2cb5b641

const InputPhoneNumbervue_type_template_id_2cb5b641_hoisted_1 = {
  class: "text-body2 q-pl-sm"
};
function InputPhoneNumbervue_type_template_id_2cb5b641_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    dense: "",
    outlined: "",
    mask: "(###) ### - ####",
    modelValue: _ctx.account.phone.number,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.account.phone.number = $event)
  }, {
    prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_select, {
      dense: "",
      "emit-value": "",
      borderless: "",
      "use-input": _ctx.allowSearch && _ctx.areaCodeSearch,
      class: "no-border small-innersearch",
      modelValue: _ctx.account.phone.code,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.account.phone.code = $event),
      "popup-content-class": "shadow-ui",
      "display-value": `${_ctx.account.phone.code && _ctx.areaCodes?.[_ctx.account.phone.code] ? _ctx.areaCodes?.[_ctx.account.phone.code]?.label : 'Opt.'}`,
      options: _ctx.allowSearch && _ctx.areaCodeSearch ? _ctx.areaCodeOptions : _ctx.limitedAreaCodes,
      loading: _ctx.areaCodeOpt.loading,
      onFilter: _ctx.filterFn,
      onFocus: _cache[1] || (_cache[1] = $event => _ctx.areaCodeSearch = true),
      onBlur: _cache[2] || (_cache[2] = $event => _ctx.areaCodeSearch = false),
      onVirtualScroll: _ctx.scrollFn
    }, null, 8, ["use-input", "modelValue", "display-value", "options", "loading", "onFilter", "onVirtualScroll"]), (0,vue_esm_bundler/* createElementVNode */._)("span", InputPhoneNumbervue_type_template_id_2cb5b641_hoisted_1, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.account.phone.code ? '+' + _ctx.account.phone.code : ''), 1)]),
    _: 1
  }, 8, ["modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputPhoneNumber.vue?vue&type=template&id=2cb5b641

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPhoneNumber.vue?vue&type=script&lang=js



/* harmony default export */ const InputPhoneNumbervue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputPhoneNumber',
  emits: ['areaCodeChanged', 'numberChanged'],
  props: {
    areaCode: {
      type: [String, Number],
      default: 1
    },
    phoneNumber: {
      type: [String, Number],
      default: ''
    },
    allowSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areaCodeOptions: [],
      account: {
        phone: {
          code: 1,
          number: '(555) 000 - 0001'
        }
      },
      areaCodeSearch: false,
      areaCodeOpt: {
        loading: false,
        pageSize: 50,
        nextPage: 2
      }
    };
  },
  mounted() {
    this.account.phone = {
      code: this.areaCode,
      number: this.phoneNumber
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['areaCodes']),
    areaCodesArray() {
      return Object.values(this.areaCodes);
    },
    limitedAreaCodes() {
      return this.areaCodesArray.slice(0, this.areaCodeOpt?.pageSize * (this.areaCodeOpt?.nextPage - 1));
    },
    areaCodesLastPage() {
      return Math.ceil(this.areaCodesArray.length / this.areaCodeOpt?.pageSize);
    }
  },
  watch: {
    ['account.phone.code']: {
      async handler(val) {
        this.areaCodeSearch = false;
        this.$emit('areaCodeChanged', val);
      }
    },
    ['account.phone.number']: {
      async handler(val) {
        this.$emit('numberChanged', val);
      }
    }
  },
  methods: {
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.areaCodeOptions = this.areaCodesArray;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.areaCodeOptions = this.areaCodesArray.filter(v => {
          let res = v?.label?.toLowerCase().includes(needle);
          if (!res) res = v?.name?.toLowerCase().includes(needle);
          return res;
        });
      });
    },
    scrollFn({
      to,
      ref
    }) {
      const lastIndex = this.limitedAreaCodes.length - 1;
      if (this.areaCodeOpt.loading !== true && this.areaCodeOpt.nextPage < this.areaCodesLastPage && to === lastIndex) {
        this.areaCodeOpt.loading = true;
        setTimeout(() => {
          this.areaCodeOpt.nextPage++;
          (0,vue_esm_bundler/* nextTick */.Y3)(() => {
            ref.refresh();
            this.areaCodeOpt.loading = false;
          });
        }, 500);
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/InputPhoneNumber.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(26384);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/InputPhoneNumber.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InputPhoneNumbervue_type_script_lang_js, [['render',InputPhoneNumbervue_type_template_id_2cb5b641_render]])

/* harmony default export */ const InputPhoneNumber = (__exports__);
;


runtime_auto_import_default()(InputPhoneNumbervue_type_script_lang_js, 'components', {QInput: QInput/* default */.Z,QSelect: QSelect/* default */.Z});

// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Profile.vue?vue&type=script&lang=js








/* harmony default export */ const Profilevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'AccountProfile',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    InputPassword: InputPassword/* default */.Z,
    InputPhoneNumber: InputPhoneNumber
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
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['userRoles'])
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
        firstname: _.firstname,
        lastname: _.lastname,
        email: _.email,
        phone_number: _.phone_number,
        phone_country_code: _.phone_country_code
      };
      if (_.phone_number && !_.phone_country_code || !_.phone_number && _.phone_country_code) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: _.phone_number ? 'Phone country code is required' : 'Phone number is required'
        });
        return;
      }
      if (_.phone_number) payload.phone_number = _.phone_number;
      if (_.phone_country_code) payload.phone_country_code = _.phone_country_code;
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
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(81973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(50926);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(32074);
;// CONCATENATED MODULE: ./src/components/Accounts/Profile.vue




;
const Profile_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Profilevue_type_script_lang_js, [['render',Profilevue_type_template_id_b101cc7c_render]])

/* harmony default export */ const Profile = (Profile_exports_);
;







runtime_auto_import_default()(Profilevue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z,QDialog: QDialog/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Company.vue?vue&type=template&id=15b77c34

const Companyvue_type_template_id_15b77c34_hoisted_1 = {
  key: 0,
  class: "q-gutter-sm"
};
const Companyvue_type_template_id_15b77c34_hoisted_2 = {
  class: "row full-wdith items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_3 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const Companyvue_type_template_id_15b77c34_hoisted_4 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_15b77c34_hoisted_5 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_15b77c34_hoisted_6 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_15b77c34_hoisted_7 = {
  class: "row full-wdith items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_8 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const Companyvue_type_template_id_15b77c34_hoisted_9 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_15b77c34_hoisted_10 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_15b77c34_hoisted_11 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_15b77c34_hoisted_12 = {
  key: 0,
  class: "row full-wdith items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_13 = {
  class: "self-start col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const Companyvue_type_template_id_15b77c34_hoisted_14 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_15b77c34_hoisted_15 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_15b77c34_hoisted_16 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_15b77c34_hoisted_17 = {
  key: 1,
  class: "row full-wdith items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_18 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2 font-medium"
}, " Website ", -1);
const Companyvue_type_template_id_15b77c34_hoisted_19 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_15b77c34_hoisted_20 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_15b77c34_hoisted_21 = {
  key: 2,
  class: "row full-wdith items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_22 = {
  class: "self-start col-12 col-sm-4 col-md-3 font-medium color-primary2 font-medium"
};
const Companyvue_type_template_id_15b77c34_hoisted_23 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_15b77c34_hoisted_24 = {
  key: 0,
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_15b77c34_hoisted_25 = {
  class: "row q-col-gutter-sm items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_26 = {
  class: "col-12"
};
const Companyvue_type_template_id_15b77c34_hoisted_27 = {
  class: "col-12"
};
const Companyvue_type_template_id_15b77c34_hoisted_28 = {
  class: "col-12 col-md-6"
};
const Companyvue_type_template_id_15b77c34_hoisted_29 = {
  class: "col-12 col-md-6"
};
const Companyvue_type_template_id_15b77c34_hoisted_30 = {
  class: "col-12"
};
const Companyvue_type_template_id_15b77c34_hoisted_31 = {
  key: 1,
  class: "col-12 col-sm-8 col-md-9 letter-space-normal q-gutter-sm"
};
const Companyvue_type_template_id_15b77c34_hoisted_32 = {
  key: 0
};
const Companyvue_type_template_id_15b77c34_hoisted_33 = {
  key: 3,
  class: "row full-wdith items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_34 = {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
};
const Companyvue_type_template_id_15b77c34_hoisted_35 = {
  key: 0,
  class: "text-red"
};
const Companyvue_type_template_id_15b77c34_hoisted_36 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Companyvue_type_template_id_15b77c34_hoisted_37 = {
  key: 1,
  class: "letter-space-normal"
};
const Companyvue_type_template_id_15b77c34_hoisted_38 = {
  key: 4,
  class: "row full-wdith items-center justify-start"
};
const Companyvue_type_template_id_15b77c34_hoisted_39 = {
  key: 0,
  class: "self-start col-12 col-sm-4 col-md-3 font-medium color-primary2 font-medium"
};
const Companyvue_type_template_id_15b77c34_hoisted_40 = {
  class: "col-12 col-sm-8 col-md-9 letter-space-normal"
};
const Companyvue_type_template_id_15b77c34_hoisted_41 = {
  key: 0,
  class: "q-col-gutter-sm"
};
const Companyvue_type_template_id_15b77c34_hoisted_42 = {
  class: "text-body2 color-primary2"
};
const Companyvue_type_template_id_15b77c34_hoisted_43 = {
  key: 1,
  class: "letter-space-normal q-col-gutter-sm"
};
function Companyvue_type_template_id_15b77c34_render(_ctx, _cache, $props, $setup, $data, $options) {
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
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-px-lg q-py-md' : 'q-px-md q-py-sm')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "text-primary q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h6 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Company Profile ")]),
          _: 1
        }), _ctx.isOrgOwner() || _ctx.isOrgAdmin() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_1, [!_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 0,
          label: "Edit Info",
          icon: "icon-pencil-02",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.editing = true)
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 1,
          outline: "",
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          label: "Cancel",
          icon: "icon-x-close",
          onClick: _ctx.cancelEditing
        }, null, 8, ["flat", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 2,
          label: "Save Changes",
          icon: "icon-save-01",
          onClick: _ctx.saveOrgInfo
        }, null, 8, ["onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-col-gutter-md font-normal text-primary text-body2", _ctx.$q.screen.gt.sm ? 'q-pa-lg' : 'q-pa-md']),
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.editing ? 'max-width: 900px' : '')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_2, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_3, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Company Name"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_15b77c34_hoisted_4, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_5, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
        key: 0,
        dense: "",
        outlined: "",
        placeholder: "Name",
        modelValue: _ctx.company.title,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.company.title = $event),
        onChange: _cache[2] || (_cache[2] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_6, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.title), 1))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_7, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_8, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Company Type"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_15b77c34_hoisted_9, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_10, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectCompanyType, {
        key: 0,
        modelValue: _ctx.company.company_type_id,
        "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => _ctx.company.company_type_id = $event), _cache[4] || (_cache[4] = $event => _ctx.changes_made = true)],
        initModel: _ctx.company.company_type_id
      }, null, 8, ["modelValue", "initModel"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_11, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.companyTypes[_ctx.selectedOrg.company_type_id]?.label), 1))])]), _ctx.editing || _ctx.selectedOrg.about_us ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_12, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_13, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" About Us"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_15b77c34_hoisted_14, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_15, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
        key: 0,
        dense: "",
        outlined: "",
        type: "textarea",
        placeholder: "About the company...",
        modelValue: _ctx.company.about_us,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.company.about_us = $event),
        onChange: _cache[6] || (_cache[6] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_16, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.about_us), 1))])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing || _ctx.selectedOrg.website ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_17, [Companyvue_type_template_id_15b77c34_hoisted_18, (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_19, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputWebsite, {
        key: 0,
        modelValue: _ctx.company.website,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.company.website = $event),
        onChange: _cache[8] || (_cache[8] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_20, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_external_link, {
        url: _ctx.selectedOrg.website
      }, null, 8, ["url"])]))])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing || _ctx.selectedOrg.address_line_1 || _ctx.selectedOrg.city || _ctx.selectedOrg.state || _ctx.selectedOrg.country ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_21, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_22, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Address"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_15b77c34_hoisted_23, "*")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_24, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_25, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_26, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "Street Name",
        modelValue: _ctx.company.address_line_1,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.company.address_line_1 = $event),
        onChange: _cache[10] || (_cache[10] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_27, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "City",
        modelValue: _ctx.company.city,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.company.city = $event),
        onChange: _cache[12] || (_cache[12] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_28, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "State",
        modelValue: _ctx.company.state,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.company.state = $event),
        onChange: _cache[14] || (_cache[14] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_29, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "ZIP Code",
        modelValue: _ctx.company.zipcode,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => _ctx.company.zipcode = $event),
        onChange: _cache[16] || (_cache[16] = $event => _ctx.changes_made = true)
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_30, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SelectCountry, {
        modelValue: _ctx.company.country,
        "onUpdate:modelValue": [_cache[17] || (_cache[17] = $event => _ctx.company.country = $event), _cache[18] || (_cache[18] = $event => _ctx.changes_made = true)],
        initModel: _ctx.company.country
      }, null, 8, ["modelValue", "initModel"])])])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_31, [(0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.address_line_1), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.firstName), 1), _ctx.selectedOrg.city || _ctx.selectedOrg.state || _ctx.selectedOrg.zipcode ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_32, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.city) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.state ? ', ' + _ctx.selectedOrg.state : '') + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.zipcode ? ', ' + _ctx.selectedOrg.zipcode : ''), 1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.selectedOrg.country), 1)]))])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.selectedOrg.phone_country_code && _ctx.selectedOrg.phone_number || _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_33, [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_34, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Contact Number"), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", Companyvue_type_template_id_15b77c34_hoisted_35)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_36, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPhoneNumber, {
        key: 0,
        onAreaCodeChanged: _cache[19] || (_cache[19] = e => {
          _ctx.company.phone_country_code = e;
          if (e != _ctx.selectedOrg.phone_country_code) _ctx.changes_made = true;
        }),
        onNumberChanged: _cache[20] || (_cache[20] = e => {
          _ctx.company.phone_number = e;
          if (e != _ctx.selectedOrg.phone_number) _ctx.changes_made = true;
        }),
        areaCode: _ctx.company.phone_country_code,
        phoneNumber: _ctx.company.phone_number
      }, null, 8, ["areaCode", "phoneNumber"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_37, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_external_link, {
        url: `tel:+${_ctx.selectedOrg.phone_country_code}${_ctx.selectedOrg.phone_number}`,
        label: `+${_ctx.selectedOrg.phone_country_code} ${_ctx.selectedOrg.phone_number}`
      }, null, 8, ["url", "label"])]))])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.selectedOrg.social_accounts || _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_38, [_ctx.editing || Object.values(_ctx.selectedOrg.social_accounts || {})?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_39, " Social Media Links ")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_40, [_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_41, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.socialMedia, opt => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
          key: opt.platform,
          dense: "",
          outlined: "",
          placeholder: "company_username",
          modelValue: _ctx.company.social_accounts[opt.platform],
          "onUpdate:modelValue": $event => _ctx.company.social_accounts[opt.platform] = $event,
          onChange: _cache[21] || (_cache[21] = $event => _ctx.changes_made = true)
        }, {
          prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Companyvue_type_template_id_15b77c34_hoisted_42, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.getSocialInfo(opt.platform)?.base_url.replace('http://', '').replace('https://', '').replace('www.', '')) + (0,vue_esm_bundler/* toDisplayString */.zw)(!opt.platform.endsWith('/') ? '/' : ''), 1), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
            vertical: "",
            class: "q-ml-sm"
          })]),
          _: 2
        }, 1032, ["modelValue", "onUpdate:modelValue"]);
      }), 128))])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Companyvue_type_template_id_15b77c34_hoisted_43, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.selectedOrg.social_accounts, link => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          key: link.type
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_external_link, {
          url: _ctx.getSocialInfo(link.type)?.base_url + '/' + link.username
        }, {
          prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: _ctx.formatMediaPlatformIconSrc(link.type),
            size: "xs",
            class: "self-end"
          }, null, 8, ["name"])]),
          _: 2
        }, 1032, ["url"])]);
      }), 128))]))])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }, 8, ["class", "style"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.unsaved,
      "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => _ctx.unsaved = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)(_ctx.$root.messagesDialogs?.editingUnsaved, {
        onOkay: _cache[22] || (_cache[22] = $event => _ctx.editing = false)
      }), null, 16)]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Accounts/Company.vue?vue&type=template&id=15b77c34

// EXTERNAL MODULE: ./src/components/Helpers/InputWebsite.vue + 4 modules
var InputWebsite = __webpack_require__(72287);
// EXTERNAL MODULE: ./src/components/Helpers/SelectCompanyType.vue + 4 modules
var SelectCompanyType = __webpack_require__(71015);
// EXTERNAL MODULE: ./src/components/Helpers/SelectCountry.vue + 4 modules
var SelectCountry = __webpack_require__(96538);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Company.vue?vue&type=script&lang=js











/* harmony default export */ const Companyvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CompanyProfile',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    InputPhoneNumber: InputPhoneNumber,
    SelectCompanyType: SelectCompanyType/* default */.Z,
    InputWebsite: InputWebsite/* default */.Z,
    SelectCountry: SelectCountry/* default */.Z
  },
  data() {
    return {
      url2link: functions.url2link,
      editing: false,
      unsaved: false,
      company: {
        social_accounts: {}
      },
      changes_made: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['socialMedia']),
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
          this.company.social_accounts = {};
          this.selectedOrg.social_accounts.forEach(e => {
            this.company.social_accounts[e.type] = e.username;
          });
          if (!this.company.social_accounts) this.company.social_accounts = {};
          this.company.triggers = 2;
        } else {
          // Viewing
          // Reset company info
          this.company = {};
          this.changes_made = false;
        }
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['updateOrganization', 'isOrgOwner', 'isOrgAdmin']),
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getSocialInfo', 'formatMediaPlatformIconSrc']),
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
        country: _.country
      };
      if (_.phone_number && !_.phone_country_code || !_.phone_number && _.phone_country_code) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: _.phone_number ? 'Phone country code is required' : 'Phone number is required'
        });
        return;
      }
      if (_.phone_number) payload.phone_number = _.phone_number;
      if (_.phone_country_code) payload.phone_country_code = _.phone_country_code;
      if (_.address_line_2) payload.address_line_2 = _.address_line_2;
      if (_.website) payload.website = _.website;
      if (_.social_accounts && Object.keys(_.social_accounts)?.length) {
        payload.social_accounts = {};
        Object.keys(_.social_accounts).forEach(platform => {
          if (_.social_accounts[platform]) payload.social_accounts[platform] = _.social_accounts[platform] || '';
        });
      }
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
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
;// CONCATENATED MODULE: ./src/components/Accounts/Company.vue




;
const Company_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Companyvue_type_script_lang_js, [['render',Companyvue_type_template_id_15b77c34_render]])

/* harmony default export */ const Company = (Company_exports_);
;








runtime_auto_import_default()(Companyvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QDialog: QDialog/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Subscription.vue?vue&type=template&id=8d4cdc4e

const Subscriptionvue_type_template_id_8d4cdc4e_hoisted_1 = {
  class: "q-gutter-y-lg"
};
const Subscriptionvue_type_template_id_8d4cdc4e_hoisted_2 = {
  key: 0,
  class: "q-gutter-sm"
};
const Subscriptionvue_type_template_id_8d4cdc4e_hoisted_3 = {
  class: "row items-center q-col-gutter-md q-py-sm"
};
const Subscriptionvue_type_template_id_8d4cdc4e_hoisted_4 = {
  class: "col-12 col-md-4 text-secondary text-h6"
};
const Subscriptionvue_type_template_id_8d4cdc4e_hoisted_5 = {
  class: "col-12 col-md-8"
};
const Subscriptionvue_type_template_id_8d4cdc4e_hoisted_6 = {
  class: "q-pb-sm",
  style: {
    "max-width": "350px"
  }
};
const Subscriptionvue_type_template_id_8d4cdc4e_hoisted_7 = {
  class: "text-primary text-body2"
};
function Subscriptionvue_type_template_id_8d4cdc4e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_RemainingDaysProgress = (0,vue_esm_bundler/* resolveComponent */.up)("RemainingDaysProgress");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_SubscriptionPlans = (0,vue_esm_bundler/* resolveComponent */.up)("SubscriptionPlans");
  const _component_OffBoarding = (0,vue_esm_bundler/* resolveComponent */.up)("OffBoarding");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Subscriptionvue_type_template_id_8d4cdc4e_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    flat: "",
    bordered: "",
    class: "rounded"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-px-lg q-py-md' : 'q-px-md q-py-sm')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "text-primary q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h6 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Your Current Plan ")]),
          _: 1
        }), _ctx.isOrgOwner() || _ctx.isOrgAdmin() || _ctx.isOrgBiller() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", Subscriptionvue_type_template_id_8d4cdc4e_hoisted_2, [!_ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 0,
          label: "Edit Subscription",
          icon: "icon-pencil-02",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.editing = true)
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 1,
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          label: "Cancel Subscription",
          icon: "icon-x-close",
          color: "negative",
          onClick: _cache[1] || (_cache[1] = $event => _ctx.startOffBoarding = true)
        }, null, 8, ["flat"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.editing ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_DynamicButton, {
          key: 2,
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          label: "Cancel Changes",
          icon: "icon-x-close",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.editing = false)
        }, null, 8, ["flat"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-pa-lg' : 'q-pa-md')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_8d4cdc4e_hoisted_3, [(0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_8d4cdc4e_hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.label) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.talentCount.id), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_8d4cdc4e_hoisted_5, [(0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_8d4cdc4e_hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_RemainingDaysProgress)]), (0,vue_esm_bundler/* createElementVNode */._)("div", Subscriptionvue_type_template_id_8d4cdc4e_hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.description_1) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.talentCount.value === -1 ? 'custom' : _ctx.numberToWords(_ctx.talentCount.value)) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.talentCount.value > 1 ? 'users' : 'user') + ". ", 1)])])]),
      _: 1
    }, 8, ["class"])]),
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
    persistent: "",
    modelValue: _ctx.startOffBoarding,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.startOffBoarding = $event)
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_OffBoarding, {
      class: "rounded",
      style: {
        "width": "1080px",
        "max-width": "80vw"
      },
      onExit: _cache[3] || (_cache[3] = () => {
        _ctx.startOffBoarding = false;
      })
    })]),
    _: 1
  }, 8, ["modelValue"])]);
}
;// CONCATENATED MODULE: ./src/components/Accounts/Subscription.vue?vue&type=template&id=8d4cdc4e

// EXTERNAL MODULE: ./src/components/Helpers/Subscription/SubscriptionPlans.vue + 4 modules
var SubscriptionPlans = __webpack_require__(3318);
// EXTERNAL MODULE: ./src/components/Helpers/Subscription/RemainingDays-Progress.vue + 4 modules
var RemainingDays_Progress = __webpack_require__(11147);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(46727);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/OffBoarding.vue?vue&type=template&id=78942b70


const OffBoardingvue_type_template_id_78942b70_hoisted_1 = {
  class: "row items-start q-pb-md q-col-gutter-xl"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_2 = {
  class: "col-12 col-md-4"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_3 = ["src"];
const OffBoardingvue_type_template_id_78942b70_hoisted_4 = {
  class: "col-12 col-md-8"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 font-medium q-pb-md"
}, " We're sad to see you go ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_6 = {
  class: "text-body1 color-primary2"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_7 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", null, " At Growmodo we want to give growth-driven brands and agencies access to a flexible workforce of vetted talent. Our goal is to become an indispensable part of your team. ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_8 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", null, " However, we know that business can be seasonal and there is just not enough work to delegate. In these situations, we allow you to pause your subscription and jump back in when you need us for a new project. ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "font-medium"
}, " Here are the advantages of pausing your account: ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_10 = {
  class: "q-pt-xs"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_11 = {
  class: "row q-col-gutter-md justify-center q-pt-lg"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_12 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_13 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_14 = {
  class: "q-px-xl"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_15 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 font-medium q-pb-md"
}, "We're sad to see you go", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_16 = {
  class: "text-body1 color-primary2"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_17 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "font-medium"
}, " Mauris tortor est ultrices egestas phasellus ullamcorper. ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_18 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", null, " We know that business can be seasonal and there is just not enough work to delegate. In these situations, we allow you to pause your subscription and jump back in when you need us for a new project. ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_19 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "font-medium"
}, " Here are the advantages of pausing your account: ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_20 = {
  class: "full-width q-py-lg flex flex-center"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_21 = {
  class: "row q-col-gutter-md justify-center",
  style: {
    "width": "720px"
  }
};
const OffBoardingvue_type_template_id_78942b70_hoisted_22 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_23 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_24 = {
  class: "q-px-xl"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_25 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-center font-medium q-pb-md"
}, " Before you pause... ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_26 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 color-primary2 flex flex-center q-pb-md q-pt-sm"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center",
  style: {
    "max-width": "720px"
  }
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" We have a "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "font-demi-bold"
}, "maintenance plan"), /*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" for businesses of all sizes that need a hands-on team to keep their websites safe and up-to-date without the headaches. ")])], -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_27 = {
  class: "row text-body1 color-primary2 q-col-gutter-md"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_28 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", null, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "letter-spacing-normal font-medium text-h6"
}, " Maintenance Plan "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", null, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-h3 font-medium text-secondary"
}, " $295 "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  style: {
    "margin-left": "-5px"
  }
}, "/mo")])], -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_29 = {
  class: "col-12 col-md-9"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_30 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-demi-bold text-h6 q-pb-md"
}, " What you will get... ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_31 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_32 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_33 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_34 = {
  class: "q-pt-xs"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_35 = {
  class: "col-12 col-sm-6"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_36 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_37 = {
  class: "q-pt-xs"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_38 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "font-demi-bold text-left text-h6 color-primary2 q-pb-md"
}, " Maintenance tasks includes... ", -1);
const OffBoardingvue_type_template_id_78942b70_hoisted_39 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_40 = {
  class: "col-12 col-sm-6 col-md-4"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_41 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_42 = {
  class: "q-pt-xs"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_43 = {
  class: "col-12 col-sm-6 col-md-4"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_44 = {
  class: "row q-col-gutter-sm"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_45 = {
  class: "q-pt-xs"
};
const OffBoardingvue_type_template_id_78942b70_hoisted_46 = {
  class: "col-12 col-sm-6 col-md-4"
};
const _hoisted_47 = {
  class: "row q-col-gutter-sm"
};
const _hoisted_48 = {
  class: "q-pt-xs"
};
const _hoisted_49 = {
  class: "full-width q-py-lg flex flex-center"
};
const _hoisted_50 = {
  class: "row q-col-gutter-md justify-center",
  style: {
    "width": "720px"
  }
};
const _hoisted_51 = {
  class: "col-12 col-sm-6"
};
const _hoisted_52 = {
  class: "col-12 col-sm-6"
};
const _hoisted_53 = {
  class: "q-px-xl"
};
const _hoisted_54 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 font-medium text-center q-pb-xl"
}, " How long would you like to pause your subscription? ", -1);
const _hoisted_55 = {
  class: "row q-col-gutter-lg"
};
const _hoisted_56 = {
  class: "q-pt-sm"
};
const _hoisted_57 = {
  class: "full-width q-py-lg flex flex-center"
};
const _hoisted_58 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-px-sm"
}, "Pause subscription", -1);
const _hoisted_59 = {
  class: "q-px-xl"
};
const _hoisted_60 = {
  class: "text-center q-pt-lg"
};
const _hoisted_61 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-py-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-medium text-center"
}, "Thanks!"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 color-primary2 q-pt-md text-center"
}, " Your Growmodo subscription is paused now, but reactivating is easy and possible anytime. ")], -1);
const _hoisted_62 = {
  class: "full-width text-center q-py-lg"
};
const _hoisted_63 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Back to home", -1);
const _hoisted_64 = {
  class: "q-px-xl"
};
const _hoisted_65 = {
  class: "text-center q-pt-lg"
};
const _hoisted_66 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-py-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-medium text-center"
}, " Your have sucessfully changed to Maintenance Plan "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 color-primary2 q-pt-md text-center"
}, " Your maintenance plan is active, you are able to request maintanenance tasks. ")], -1);
const _hoisted_67 = {
  class: "full-width q-py-lg flex flex-center"
};
const _hoisted_68 = {
  class: "row q-col-gutter-md justify-center",
  style: {
    "width": "720px"
  }
};
const _hoisted_69 = {
  class: "col-12 col-sm-auto"
};
const _hoisted_70 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Back to home", -1);
const _hoisted_71 = {
  class: "col-12 col-sm-auto"
};
const _hoisted_72 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-px-md"
}, "Request maintenance task", -1);
const _hoisted_73 = {
  class: "q-px-xl"
};
const _hoisted_74 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 font-medium text-center q-pb-xl"
}, " Please tell us why you'd like to cancel ", -1);
const _hoisted_75 = {
  class: "row q-col-gutter-lg"
};
const _hoisted_76 = {
  class: "q-pt-sm"
};
const _hoisted_77 = {
  class: "full-width"
};
const _hoisted_78 = {
  class: "full-width q-py-lg flex flex-center"
};
const _hoisted_79 = {
  class: "q-px-xl"
};
const _hoisted_80 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 font-medium q-pb-xl"
}, " Cancel & delete your account ", -1);
const _hoisted_81 = {
  class: "text-body1 color-primary2"
};
const _hoisted_82 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("p", {
  class: "font-medium"
}, "Here is what happens when you cancel:", -1);
const _hoisted_83 = {
  class: "q-pt-xs"
};
const _hoisted_84 = {
  class: "text-body1 font-medium"
};
const _hoisted_85 = {
  class: "full-width q-py-lg flex flex-center"
};
const _hoisted_86 = {
  class: "full-width"
};
const _hoisted_87 = {
  class: "row q-col-gutter-md justify-center"
};
const _hoisted_88 = {
  class: "col-12 col-md-6"
};
const _hoisted_89 = {
  class: "col-12 col-md-6"
};
const _hoisted_90 = {
  class: "q-px-xl"
};
const _hoisted_91 = {
  class: "text-center q-pt-lg"
};
const _hoisted_92 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-py-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-medium text-center"
}, " Your account has been deleted "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 color-primary2 q-pt-md text-center"
}, " You have successfully deleted your account. ")], -1);
function OffBoardingvue_type_template_id_78942b70_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_card_item = (0,vue_esm_bundler/* resolveComponent */.up)("card-item");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_carousel_slide = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel-slide");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_slide_transition = (0,vue_esm_bundler/* resolveComponent */.up)("q-slide-transition");
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
      "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.formStep = $event),
      "transition-prev": "fade",
      "transition-next": "fade",
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-px-none q-py-none fit", ['cancel_done', 'pause_done', 'maintenance_done'].includes(_ctx.formStep) ? 'q-py-lg' : 'q-pb-lg'])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "init",
        class: "q-pa-none flex-center q-px-xl"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          rounded: "",
          class: "rounded full-width full-height"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("img", {
            src: `${_ctx.$cdn_host}${_ctx.$cdn.gif}/goodbye.gif`
          }, null, 8, OffBoardingvue_type_template_id_78942b70_hoisted_3)]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_4, [OffBoardingvue_type_template_id_78942b70_hoisted_5, (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_6, [OffBoardingvue_type_template_id_78942b70_hoisted_7, OffBoardingvue_type_template_id_78942b70_hoisted_8, OffBoardingvue_type_template_id_78942b70_hoisted_9, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`Your account with all brand assets will stay secured on our server.`, `Potential price increases will not affect your subscription. You can start working with us at the same monthly rate.`, `You can end your paused period anytime and delegate new work within a day.`], item => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            class: "q-py-sm",
            itemPadding: "none",
            key: item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "icon-check-circle-broken",
              color: "secondary",
              class: "q-py-xs",
              size: "xs"
            })]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_10, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1024);
        }), 128))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_11, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body2 full-width",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.formStep = 'cancel_1')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Continue to cancel ")]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_13, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body2 full-width",
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
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_14, [OffBoardingvue_type_template_id_78942b70_hoisted_15, (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_16, [OffBoardingvue_type_template_id_78942b70_hoisted_17, OffBoardingvue_type_template_id_78942b70_hoisted_18, OffBoardingvue_type_template_id_78942b70_hoisted_19, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`Your account with all brand assets will stay secured on our server.`, `Potential price increases will not affect your subscription. You can start working with us at the same monthly rate.`, `You can end your paused period anytime and delegate new work within a day.`], item => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            class: "q-py-sm",
            itemPadding: "none",
            key: item,
            style: {
              "min-height": "unset"
            }
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "icon-check",
              color: "secondary",
              size: "xs"
            })]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1024);
        }), 128))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_20, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_21, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_22, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body2 full-width",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.formStep = 'cancel_1')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Continue to cancel ")]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_23, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body2 full-width",
          onClick: _cache[3] || (_cache[3] = $event => _ctx.formStep = 'pause_2')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Pause account ")]),
          _: 1
        })])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "pause_2",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_24, [OffBoardingvue_type_template_id_78942b70_hoisted_25, OffBoardingvue_type_template_id_78942b70_hoisted_26, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_27, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col-12 col-md-3 flex", _ctx.$q.screen.lt.md ? 'flex-center' : ''])
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          bordered: "",
          class: "q-pa-lg full-height flex flex-center",
          style: {
            "max-width": "300px"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [OffBoardingvue_type_template_id_78942b70_hoisted_28]),
          _: 1
        })], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_29, [OffBoardingvue_type_template_id_78942b70_hoisted_30, (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_31, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_32, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_33, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
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
            class: "q-pa-none",
            itemPadding: "none"
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: item.icon,
              size: "xs",
              color: "secondary",
              class: "q-pa-xs"
            }, null, 8, ["name"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_34, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
            _: 2
          }, 1024)]);
        }), 64))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_35, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_36, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
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
            class: "q-pa-none",
            itemPadding: "none"
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: item.icon,
              size: "xs",
              color: "secondary",
              class: "q-pa-xs"
            }, null, 8, ["name"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_37, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
            _: 2
          }, 1024)]);
        }), 64))])])])])]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
          class: "q-my-lg"
        }), (0,vue_esm_bundler/* createElementVNode */._)("div", null, [OffBoardingvue_type_template_id_78942b70_hoisted_38, (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_39, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_40, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_41, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
          icon: 'icon-check',
          label: 'Fixing website bugs'
        }, {
          icon: 'icon-check',
          label: 'Plugin updates'
        }, {
          icon: 'icon-check',
          label: 'Security audit'
        }, {
          icon: 'icon-check',
          label: 'Security implementation'
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
              size: "xs",
              color: "secondary",
              class: "q-pa-xs"
            }, null, 8, ["name"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_42, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
            _: 2
          }, 1024)]);
        }), 64))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_43, [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_44, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
          icon: 'icon-check',
          label: 'Implementing website with 3rd party tool'
        }, {
          icon: 'icon-check',
          label: 'Website content update'
        }, {
          icon: 'icon-check',
          label: 'Adding new blog post'
        }], item => {
          return (0,vue_esm_bundler/* createElementVNode */._)("div", {
            key: item
          }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_card_item, {
            class: "q-pa-none",
            itemPadding: "none"
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: item.icon,
              size: "xs",
              color: "secondary",
              class: "q-pa-xs"
            }, null, 8, ["name"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_45, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
            _: 2
          }, 1024)]);
        }), 64))])]), (0,vue_esm_bundler/* createElementVNode */._)("div", OffBoardingvue_type_template_id_78942b70_hoisted_46, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_47, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([{
          icon: 'icon-check',
          label: 'Site speed optimization'
        }, {
          icon: 'icon-check',
          label: 'Site backupbroken links and 404 errors check'
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
              size: "xs",
              color: "secondary",
              class: "q-pa-xs"
            }, null, 8, ["name"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_48, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)]),
            _: 2
          }, 1024)]);
        }), 64))])])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_49, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_50, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_51, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body2 full-width",
          onClick: _cache[4] || (_cache[4] = $event => _ctx.formStep = 'pause_3')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Continue to pause ")]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_52, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body2 full-width",
          onClick: _ctx.switchToMaintenance
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Change to Maintenance Plan ")]),
          _: 1
        }, 8, ["onClick"])])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "pause_3",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_53, [_hoisted_54, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_55, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`1 Week`, `2 Weeks`, `1 Month`, `2 Months`, `3 Months`, `4 Months`], item => {
          return (0,vue_esm_bundler/* createElementVNode */._)("div", {
            key: item,
            class: "col-12 col-sm-6 col-md-4"
          }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["border-add border-md hover-border-secondary cursor-pointer", _ctx.pause.duration === item ? 'border-secondary' : '']),
            onClick: $event => _ctx.pause.duration = item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
              modelValue: _ctx.pause.duration,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.pause.duration = $event),
              val: item,
              color: "secondary",
              name: item
            }, null, 8, ["modelValue", "val", "name"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_56, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1032, ["class", "onClick"])), [[_directive_ripple, {
            color: 'secondary'
          }]])]);
        }), 64))]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_57, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-py-sm font-medium text-body2", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.pauseAccount
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_58]),
          _: 1
        }, 8, ["class", "onClick"])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "pause_done",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_59, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_60, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: "icon-check-circle-broken",
          iconSize: "md"
        })]), _hoisted_61, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_62, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          ripple: {
            color: 'accent'
          },
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded slide-hover", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.backToHome
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_63, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "sm",
            name: "icon-arrow-narrow-right",
            class: "q-px-sm"
          })]),
          _: 1
        }, 8, ["class", "onClick"])), [[_directive_close_popup]])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "maintenance_done",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_64, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_65, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: "icon-check-circle-broken",
          iconSize: "md"
        })]), _hoisted_66, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_67, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_68, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_69, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          ripple: {
            color: 'accent'
          },
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded slide-hover", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.backToHome
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_70, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "sm",
            name: "icon-arrow-narrow-right",
            class: "q-px-sm"
          })]),
          _: 1
        }, 8, ["class", "onClick"])), [[_directive_close_popup]])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_71, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-py-sm font-medium text-body2", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _ctx.requestMaintenanceTask
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_72]),
          _: 1
        }, 8, ["class", "onClick"])])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "cancel_1",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_73, [_hoisted_74, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_75, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`We don't need more design & development work`, `We hired someone in-house`, `We started working with another company`, `We are not happy with the service`, `Others`], item => {
          return (0,vue_esm_bundler/* createElementVNode */._)("div", {
            key: item,
            class: "col-12 col-sm-6 col-md-4"
          }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["border-add border-md hover-border-secondary cursor-pointer", _ctx.cancel.reason === item ? 'border-secondary' : '']),
            onClick: $event => _ctx.cancel.reason = item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
              modelValue: _ctx.cancel.reason,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.cancel.reason = $event),
              val: item,
              color: "secondary",
              name: item
            }, null, 8, ["modelValue", "val", "name"])]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_76, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1032, ["class", "onClick"])), [[_directive_ripple, {
            color: 'secondary'
          }]])]);
        }), 64)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_slide_transition, {
          appear: _ctx.cancel.reason === 'Others'
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_77, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            dense: "",
            outlined: "",
            type: "textarea",
            modelValue: _ctx.cancel.otherReason,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.cancel.otherReason = $event),
            class: "full-width format-bold-light",
            placeholder: "Please tell us the reason for your cancellation"
          }, null, 8, ["modelValue"])], 512), [[vue_esm_bundler/* vShow */.F8, _ctx.cancel.reason === 'Others']])]),
          _: 1
        }, 8, ["appear"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_78, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-py-sm font-medium text-body2", _ctx.$q.screen.lt.sm ? 'full-width' : '']),
          onClick: _cache[8] || (_cache[8] = () => {
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
        }, 8, ["class"])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "cancel_2",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_79, [_hoisted_80, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_81, [_hoisted_82, (0,vue_esm_bundler/* createElementVNode */._)("div", null, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([`Your subscription will stop, and you won't be billed again.`, `Your Growmodo account will be closed after the plan expires.`, `Your account will be permanently deleted. Remember to export your files before you cancel.`], item => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
            itemPadding: "none",
            class: "q-py-sm",
            key: item
          }, {
            avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "icon-check",
              color: "secondary",
              size: "sm"
            })]),
            description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_83, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
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
            label: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_84, (0,vue_esm_bundler/* toDisplayString */.zw)(item), 1)]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue"])]);
        }), 64))]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_85, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_86, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_87, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_88, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
          "no-caps": "",
          outline: "",
          unelevated: "",
          color: "primary",
          class: "rounded q-py-sm font-medium text-body2 full-width",
          onClick: _ctx.stopCancelProcess
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" I've changed my mind ")]),
          _: 1
        }, 8, ["onClick"])), [[_directive_close_popup]])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_89, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "negative",
          class: "rounded q-py-sm font-medium text-body2 full-width",
          onClick: _ctx.cancelAccount
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Cancel my subscription and delete my account ")]),
          _: 1
        }, 8, ["onClick"])])])])])])]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "cancel_done",
        class: "q-pa-none flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_90, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_91, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: "icon-check-circle-broken",
          iconSize: "md"
        })]), _hoisted_92])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "class"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/OffBoarding.vue?vue&type=template&id=78942b70

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(18964);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(65724);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/OffBoarding.vue?vue&type=script&lang=js






/* harmony default export */ const OffBoardingvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  components: {
    CardIconBox: CardIconBox/* default */.Z
  },
  name: 'OffBoarding',
  emits: ['start', 'done', 'exit'],
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
      formStep: 'init',
      pause: {
        duration: null
      },
      cancel: {
        reason: null,
        otherReason: null,
        q1: false,
        q2: false,
        q3: false
      }
    };
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['logout']),
    logoutAccount() {
      this.logout();
      this.$router.replace('/auth');
    },
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
      this.offboard_submitting = true;
      // Done
      this.nextButtonClicked();
      this.offboarded = true;
      // Safe reset
      setTimeout(() => {
        this.offboard_submitting = false;
      }, 1500);
    },
    backToHome() {
      this.$router.push('/');
      this.$emit('exit');
    },
    pauseAccount() {
      this.formStep = 'pause_done';
    },
    switchToMaintenance() {
      this.formStep = 'maintenance_done';
    },
    requestMaintenanceTask() {
      if (false) {}
      this.$emit('exit');
    },
    cancelAccount() {
      let emsg = '';
      switch (false) {
        case !!this.cancel?.reason:
          emsg = 'Reason for cancellation is not provided';
          break;
        case !!this.cancel?.q1 && !!this.cancel?.q2 && !!this.cancel?.q3:
          emsg = 'Please confirm you account cancellation';
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
        if (false) {}
        this.formStep = 'cancel_done';
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: 'Account has been canceled'
        });
        setTimeout(() => {
          this.logoutAccount();
        }, 1500);
      }
    },
    stopCancelProcess() {
      if (false) {}
      this.$emit('exit');
    }
  },
  beforeUnmount() {
    this.$emit('exit');
  }
}));
;// CONCATENATED MODULE: ./src/components/Dialogs/OffBoarding.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js
var QCarousel = __webpack_require__(97052);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(41694);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(61357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/radio/QRadio.js
var QRadio = __webpack_require__(11480);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-transition/QSlideTransition.js
var QSlideTransition = __webpack_require__(69003);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__(51722);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(62146);
;// CONCATENATED MODULE: ./src/components/Dialogs/OffBoarding.vue




;
const OffBoarding_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(OffBoardingvue_type_script_lang_js, [['render',OffBoardingvue_type_template_id_78942b70_render]])

/* harmony default export */ const OffBoarding = (OffBoarding_exports_);
;












runtime_auto_import_default()(OffBoardingvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QCarousel: QCarousel/* default */.Z,QCarouselSlide: QCarouselSlide/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z,QSeparator: QSeparator/* default */.Z,QRadio: QRadio/* default */.Z,QSlideTransition: QSlideTransition/* default */.Z,QInput: QInput/* default */.Z});runtime_auto_import_default()(OffBoardingvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z,ClosePopup: ClosePopup/* default */.Z});

// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Accounts/Subscription.vue?vue&type=script&lang=js










/* harmony default export */ const Subscriptionvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SubscriptionInformation',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    SubscriptionPlans: SubscriptionPlans/* default */.Z,
    RemainingDaysProgress: RemainingDays_Progress/* default */.Z,
    OffBoarding: OffBoarding
  },
  data() {
    return {
      editing: false,
      numberToWords: functions.numberToWords,
      startOffBoarding: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrg']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['subscription', 'subscription_Talents']),
    orgsubscription() {
      return !fn_store/* default.getAuth */.Z.getAuth() ? {} : this.selectedOrg?.subscriptions;
    },
    talentCount() {
      return this.subscription_Talents[this.orgsubscription.subscription_talent_id] || {};
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['isOrgOwner', 'isOrgAdmin', 'isOrgBiller']),
    nextBtnClick() {
      this.editing = false;
      this.$root.dialogRequestUpgrade = true;
    },
    planUpdated(planinfo) {
      if (true) console.log('Plan Changed:', planinfo);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Accounts/Subscription.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Accounts/Subscription.vue




;
const Subscription_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Subscriptionvue_type_script_lang_js, [['render',Subscriptionvue_type_template_id_8d4cdc4e_render]])

/* harmony default export */ const Subscription = (Subscription_exports_);
;






runtime_auto_import_default()(Subscriptionvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QDialog: QDialog/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/UsersList.vue?vue&type=template&id=26034c96

const UsersListvue_type_template_id_26034c96_hoisted_1 = {
  key: 0,
  class: "q-gutter-sm"
};
const UsersListvue_type_template_id_26034c96_hoisted_2 = {
  class: "bg-color absolute-top",
  style: {
    "top": "48px"
  }
};
const UsersListvue_type_template_id_26034c96_hoisted_3 = {
  class: "text-body2 font-medium color-primary2"
};
const UsersListvue_type_template_id_26034c96_hoisted_4 = {
  class: "row items-center q-col-gutter-sm"
};
const UsersListvue_type_template_id_26034c96_hoisted_5 = {
  class: "q-gutter-sm text-right"
};
const UsersListvue_type_template_id_26034c96_hoisted_6 = {
  key: 0,
  class: "q-py-md row full-width items-center justify-center q-col-gutter-sm q-virtual-scroll--skip"
};
const UsersListvue_type_template_id_26034c96_hoisted_7 = {
  class: "q-py-md row full-width items-center justify-between q-col-gutter-sm q-virtual-scroll--skip"
};
const UsersListvue_type_template_id_26034c96_hoisted_8 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Previous", -1);
const UsersListvue_type_template_id_26034c96_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pr-sm"
}, "Next", -1);
const UsersListvue_type_template_id_26034c96_hoisted_10 = {
  class: "q-py-md full-width row flex-center color-primary2 q-gutter-sm"
};
const UsersListvue_type_template_id_26034c96_hoisted_11 = {
  class: "text-body2 color-primary2 font-medium"
};
function UsersListvue_type_template_id_26034c96_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_linear_progress = (0,vue_esm_bundler/* resolveComponent */.up)("q-linear-progress");
  const _component_q_th = (0,vue_esm_bundler/* resolveComponent */.up)("q-th");
  const _component_q_tr = (0,vue_esm_bundler/* resolveComponent */.up)("q-tr");
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
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-px-lg q-py-md' : 'q-px-md q-py-sm')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "text-primary q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h6 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Users Information ")]),
          _: 1
        }), _ctx.isOrgOwner() || _ctx.isOrgAdmin() ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", UsersListvue_type_template_id_26034c96_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          label: "Invite User",
          icon: "icon-user-plus-01",
          alwaysShowIcon: true,
          onClick: _ctx.inviteUser
        }, null, 8, ["onClick"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_table, {
      "row-key": "id",
      filteredSortedRows: "",
      "binary-state-sort": "",
      rows: _ctx.orgUsers,
      columns: _ctx.columns,
      color: "primary",
      loading: _ctx.tableLoading,
      "rows-per-page-label": "Users per page",
      "no-data-label": "We did not find any users...",
      "no-results-label": "The filter didn't uncover any results.",
      "loading-label": "Getting data from the server.",
      "rows-per-page-options": [10, 20, 30, 50, 50, 0],
      style: {
        "max-height": "1080px"
      },
      "visible-columns": _ctx.visibleColumns
    }, {
      loading: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_26034c96_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
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
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", UsersListvue_type_template_id_26034c96_hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(col.label), 1)]),
            _: 2
          }, 1032, ["props", "style"]);
        }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_th, {
          "auto-width": "",
          style: {
            "position": "sticky",
            "top": "0",
            "z-index": "2"
          },
          class: "text-right"
        })]),
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
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_26034c96_hoisted_4, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.user[props.row?.id]) + " ", 1), i === 0 && _ctx.user[props.row?.id]?.status === 'pending' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
              key: 0,
              size: "xs",
              color: "warning",
              name: "icon-clock"
            })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("span", {
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2", i === 0 ? 'font-medium' : ''])
            }, (0,vue_esm_bundler/* toDisplayString */.zw)(_r.value), 3)])]),
            _: 2
          }, 1032, ["props", "style"]);
        }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          style: {
            "padding-right": "24px",
            "padding-top": "18px",
            "padding-bottom": "18px"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_26034c96_hoisted_5, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "12px",
            color: "grey-7",
            onClick: $event => _ctx.deleteUser(props.row?.id),
            icon: "icon-trash-01",
            class: "hover-text-negative hover-bg-accent"
          }, null, 8, ["onClick"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "12px",
            color: "grey-7",
            onClick: $event => _ctx.editUser(props.row?.id),
            icon: "icon-edit-01",
            class: "hover-text-secondary hover-bg-accent"
          }, null, 8, ["onClick"])])]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1032, ["props"])]),
      bottom: (0,vue_esm_bundler/* withCtx */.w5)(scope => [_ctx.$q.screen.lt.xs || _ctx.$q.screen.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", UsersListvue_type_template_id_26034c96_hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_pagination, {
        unelevated: "",
        "boundary-numbers": "",
        modelValue: scope.pagination.page,
        "onUpdate:modelValue": $event => scope.pagination.page = $event,
        class: "rounded",
        color: "transparent not-gm",
        "active-color": "grey-2",
        "text-color": "primary2",
        "active-text-color": "primary",
        max: scope.pagesNumber,
        "max-pages": 6
      }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_26034c96_hoisted_7, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-left", _ctx.$q.screen.gt.xs ? 'col-2' : 'col-6'])
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        dense: "",
        outline: "",
        "no-caps": "",
        disable: scope.isFirstPage,
        onClick: scope.prevPage,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-px-md slide-hover", scope.isFirstPage ? 'color-primary2' : 'text-primary hover-text-secondary'])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-arrow-narrow-left",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(!scope.isFirstPage ? 'slide-hover-right-md' : '')
        }, null, 8, ["class"]), UsersListvue_type_template_id_26034c96_hoisted_8]),
        _: 2
      }, 1032, ["disable", "onClick", "class"])], 2), _ctx.$q.screen.gt.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_pagination, {
        key: 0,
        unelevated: "",
        "boundary-numbers": "",
        modelValue: scope.pagination.page,
        "onUpdate:modelValue": $event => scope.pagination.page = $event,
        class: "rounded",
        color: "transparent not-gm",
        "active-color": "grey-2",
        "text-color": "primary2",
        "active-text-color": "primary",
        max: scope.pagesNumber,
        "max-pages": 6
      }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-right", _ctx.$q.screen.gt.xs ? 'col-2' : 'col-6'])
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        dense: "",
        outline: "",
        "no-caps": "",
        disable: scope.isLastPage,
        onClick: scope.nextPage,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-px-md slide-hover", scope.isLastPage ? 'color-primary2' : 'text-primary hover-text-secondary'])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [UsersListvue_type_template_id_26034c96_hoisted_9, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-arrow-narrow-right",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(!scope.isLastPage ? 'slide-hover-left-md' : '')
        }, null, 8, ["class"])]),
        _: 2
      }, 1032, ["disable", "onClick", "class"])], 2)])]),
      "no-data": (0,vue_esm_bundler/* withCtx */.w5)(({
        icon,
        message,
        filter
      }) => [(0,vue_esm_bundler/* createElementVNode */._)("div", UsersListvue_type_template_id_26034c96_hoisted_10, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        size: "sm",
        color: _ctx.tableLoading ? 'secondary' : 'negative',
        name: _ctx.tableLoading ? 'icon-download-cloud-01' : filter ? 'icon-filter-funnel-01' : icon
      }, null, 8, ["color", "name"]), (0,vue_esm_bundler/* createElementVNode */._)("span", UsersListvue_type_template_id_26034c96_hoisted_11, (0,vue_esm_bundler/* toDisplayString */.zw)(message), 1), !_ctx.tableLoading ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
        key: 0,
        class: "text-body2 text-primary font-medium cursor-pointer hover-text-secondary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.inviteUser && _ctx.inviteUser(...args))
      }, "Invite Now!")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])]),
      _: 1
    }, 8, ["rows", "columns", "loading", "visible-columns"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.dialog_AddEditUser,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.dialog_AddEditUser = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_Add_Edit_User, {
        uid: _ctx.userToEdit,
        style: {
          "max-width": "80vw",
          "width": "1000px"
        },
        onAdded: _cache[1] || (_cache[1] = $event => _ctx.dialog_AddEditUser = false),
        onUpdated: _cache[2] || (_cache[2] = $event => _ctx.dialog_AddEditUser = false),
        onClose: _cache[3] || (_cache[3] = $event => _ctx.dialog_AddEditUser = false)
      }, null, 8, ["uid"])]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Users/UsersList.vue?vue&type=template&id=26034c96

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/Add_Edit_User.vue?vue&type=template&id=66e778d1

const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_1 = {
  class: "q-gutter-sm"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_2 = {
  class: "row full-width items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Username"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_4 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_5 = {
  class: "row full-width items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_6 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Password"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_7 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_8 = {
  class: "row full-wdith items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Full Name"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_10 = {
  class: "col-12 col-sm-8 col-md-9"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_11 = {
  class: "row q-col-gutter-sm items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_12 = {
  class: "col-12 col-md-6"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_13 = {
  class: "col-12 col-md-6"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_14 = {
  class: "row full-wdith items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_15 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" User Role"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_16 = {
  class: "col-12 col-sm-8 col-md-6 col-md-9"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_17 = {
  class: "row full-wdith items-center justify-start"
};
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_18 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 col-sm-4 col-md-3 font-medium color-primary2"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Email Address"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const Add_Edit_Uservue_type_template_id_66e778d1_hoisted_19 = {
  class: "col-12 col-sm-8 col-md-9"
};
function Add_Edit_Uservue_type_template_id_66e778d1_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar-title");
  const _component_DynamicButton = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicButton");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_InputPassword = (0,vue_esm_bundler/* resolveComponent */.up)("InputPassword");
  const _component_SelectRoles = (0,vue_esm_bundler/* resolveComponent */.up)("SelectRoles");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "rounded q-pb-md"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-pa-lg' : 'q-pa-md')
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "text-primary q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-h6 font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Users Information ")]),
          _: 1
        }), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_1, [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          outline: "",
          flat: _ctx.$q.screen.lt.xs || _ctx.$q.screen.xs,
          label: "Cancel",
          icon: "icon-x-close"
        }, null, 8, ["flat"]), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicButton, {
          label: _ctx.newUser ? 'Invite User' : 'Save Changes',
          icon: "icon-save-01",
          onClick: _ctx.saveUserInfo
        }, null, 8, ["label", "onClick"])])]),
        _: 1
      })]),
      _: 1
    }, 8, ["class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.$q.screen.gt.sm ? 'q-pa-lg q-col-gutter-lg' : 'q-pa-md q-col-gutter-sm'),
      style: {
        "max-width": "800px"
      }
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_2, [Add_Edit_Uservue_type_template_id_66e778d1_hoisted_3, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_4, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        modelValue: _ctx.account.username,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.account.username = $event),
        placeholder: "username",
        tabindex: "1"
      }, null, 8, ["modelValue"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_5, [Add_Edit_Uservue_type_template_id_66e778d1_hoisted_6, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputPassword, {
        modelValue: _ctx.account.password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.account.password = $event),
        tabindex: "2"
      }, null, 8, ["modelValue"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_8, [Add_Edit_Uservue_type_template_id_66e778d1_hoisted_9, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_10, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_11, [(0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "First Name",
        modelValue: _ctx.account.firstname,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.account.firstname = $event),
        tabindex: "3"
      }, null, 8, ["modelValue"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_13, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        outlined: "",
        placeholder: "Last Name",
        modelValue: _ctx.account.lastname,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.account.lastname = $event),
        tabindex: "4"
      }, null, 8, ["modelValue"])])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_14, [Add_Edit_Uservue_type_template_id_66e778d1_hoisted_15, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_16, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SelectRoles, {
        modelValue: _ctx.account.role,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.account.role = $event),
        initModel: _ctx.account.role,
        tabindex: "5"
      }, null, 8, ["modelValue", "initModel"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_17, [Add_Edit_Uservue_type_template_id_66e778d1_hoisted_18, (0,vue_esm_bundler/* createElementVNode */._)("div", Add_Edit_Uservue_type_template_id_66e778d1_hoisted_19, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
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
;// CONCATENATED MODULE: ./src/components/Users/Add_Edit_User.vue?vue&type=template&id=66e778d1

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/uid.js
var uid = __webpack_require__(50796);
// EXTERNAL MODULE: ./src/components/Helpers/SelectRoles.vue + 4 modules
var SelectRoles = __webpack_require__(72696);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/Add_Edit_User.vue?vue&type=script&lang=js








/* harmony default export */ const Add_Edit_Uservue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'Add_Edit_User',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    InputPassword: InputPassword/* default */.Z,
    SelectRoles: SelectRoles/* default */.Z
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
        // this.account.password = undefined;
        const add_response = await this.addOrgUser(this.account);
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
const Add_Edit_User_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Add_Edit_Uservue_type_script_lang_js, [['render',Add_Edit_Uservue_type_template_id_66e778d1_render]])

/* harmony default export */ const Add_Edit_User = (Add_Edit_User_exports_);
;






runtime_auto_import_default()(Add_Edit_Uservue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z});runtime_auto_import_default()(Add_Edit_Uservue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Users/UsersList.vue?vue&type=script&lang=js








/* harmony default export */ const UsersListvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'UsersList',
  components: {
    DynamicButton: DynamicButton/* default */.Z,
    Add_Edit_User: Add_Edit_User
  },
  data() {
    return {
      columns: [{
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
        field: row => row.role,
        format: val => this.userRoles[val]?.label,
        sortable: true
      }],
      rows: [],
      visibleColumns: [],
      userToEdit: 0,
      tableLoading: true,
      dialog_AddEditUser: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrgUsers']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['userRoles']),
    orgUsers() {
      return Object.values(this.selectedOrgUsers).filter(e => e.id !== this.user.id);
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
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['getOrgUsers', 'deleteOrgUser', 'isOrgOwner', 'isOrgAdmin']),
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
var QTable = __webpack_require__(50113);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js
var QLinearProgress = __webpack_require__(8289);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__(31233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTh.js
var QTh = __webpack_require__(21682);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(67220);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/virtual-scroll/QVirtualScroll.js + 1 modules
var QVirtualScroll = __webpack_require__(52482);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/pagination/QPagination.js
var QPagination = __webpack_require__(80996);
;// CONCATENATED MODULE: ./src/components/Users/UsersList.vue




;
const UsersList_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(UsersListvue_type_script_lang_js, [['render',UsersListvue_type_template_id_26034c96_render]])

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
        label: 'Company Profile',
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
    let routeTab = this.$route.params?.settings_tab;
    this.tab = this.settingsMenu.profile?.key;
    if (routeTab) {
      let menu = this.settingsMenu[routeTab]?.key;
      if (menu) this.tab = routeTab;
    }
  },
  watch: {
    tab: {
      async handler(val) {
        this.$root.setMeta({
          title: this.settingsMenu?.[val]?.label || 'Settings'
        });
      }
    }
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['redirect'])
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['logout']),
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
var QPage = __webpack_require__(69885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(20249);
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(12133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__(89800);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__(84106);
;// CONCATENATED MODULE: ./src/pages/AccountSettingsPage.vue




;
const AccountSettingsPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AccountSettingsPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const AccountSettingsPage = (AccountSettingsPage_exports_);
;














runtime_auto_import_default()(AccountSettingsPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QLayout: QLayout/* default */.Z,QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QBadge: QBadge/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QTabPanels: QTabPanels/* default */.Z,QTabPanel: QTabPanel/* default */.Z,QDialog: QDialog/* default */.Z});runtime_auto_import_default()(AccountSettingsPagevue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=349.02422dd9.js.map