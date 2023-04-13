"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[542],{

/***/ 6542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Drawer_Main)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(6646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Drawer_Main.vue?vue&type=template&id=7c8954ee

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GrowmodoTextIcon = (0,vue_esm_bundler/* resolveComponent */.up)("GrowmodoTextIcon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_scroll_area = (0,vue_esm_bundler/* resolveComponent */.up)("q-scroll-area");
  const _component_q_drawer = (0,vue_esm_bundler/* resolveComponent */.up)("q-drawer");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_drawer, {
    dark: _ctx.$root.dark,
    "show-if-above": "",
    "mini-to-overlay": "",
    side: "left",
    mini: _ctx.miniState,
    bordered: _ctx.$route.params?.settings_tab ? true : false,
    modelValue: _ctx.$root.mainDrawer,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.$root.mainDrawer = $event),
    breakpoint: _ctx.mainDrawerBreakpoint,
    "mini-width": _ctx.$root.mainDrawerCfg.mini,
    width: _ctx.$root.mainDrawerCfg.width,
    onMouseover: _cache[3] || (_cache[3] = $event => _ctx.updateMiniState(true)),
    onMouseout: _cache[4] || (_cache[4] = $event => _ctx.updateMiniState(true)),
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["drawer-main", {
      ['drawer-main-dark']: _ctx.$root.dark,
      ['shadows-lg']: !_ctx.$route.params?.settings_tab
    }]),
    behavior: "desktop"
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
        padding: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          clickable: "",
          to: "/",
          class: "menu-logo bg-none text-primary rounded padding-6t padding-7b"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
            avatar: _ctx.miniState
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_GrowmodoTextIcon, {
              noTextHover: "",
              dark: _ctx.$root.dark,
              size: "32px",
              text: !_ctx.miniState
            }, null, 8, ["dark", "text"])]),
            _: 1
          }, 8, ["avatar"])]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          clickable: "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["menu-item menu-request cursor-pointer q-mx-sm", {
            ['bg-none text-primary']: _ctx.miniState,
            [_ctx.$root.dark ? 'bg-primary-50 text-primary' : 'bg-primary text-white']: !_ctx.miniState
          }]),
          style: {
            "transition": "all ease-in-out"
          },
          onClick: _cache[0] || (_cache[0] = $event => _ctx.$root.toggleRequest())
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
            avatar: "",
            style: {
              "min-width": "unset"
            },
            class: "q-pr-sm"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
              rounded: "",
              size: "44px",
              class: "rounded",
              style: (0,vue_esm_bundler/* normalizeStyle */.j5)({
                ['margin-left']: !_ctx.miniState ? '-10px' : 'unset'
              })
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "icon-plus",
                size: "sm",
                class: "q-pa-xs"
              })]),
              _: 1
            }, 8, ["style"])]),
            _: 1
          }), !_ctx.miniState ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
            key: 0,
            class: "no-pointer-events"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Add a Request")]),
              _: 1
            })]),
            _: 1
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.miniState ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_tooltip_pro, {
            key: 1,
            offset: [10, 8],
            self: "center left",
            anchor: "center right"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Add a Request ")]),
            _: 1
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 1
        }, 8, ["class"]), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.essentialLinks, item => {
          return (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: "",
            key: item,
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["menu-item q-mx-sm", item.class]),
            to: item.link,
            href: item.href,
            onClick: e => {
              if (item.action) {
                item.action();
                e.preventDefault();
                e.stopImmediatePropagation();
              }
            }
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [item.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
              key: 0,
              avatar: "",
              style: {
                "min-width": "unset"
              }
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "sm",
                name: item.icon
              }, null, 8, ["name"])]),
              _: 2
            }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.miniState ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
              key: 1,
              class: "no-pointer-events"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.title), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.miniState ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_tooltip_pro, {
              key: 2,
              offset: [10, 8],
              self: "center left",
              anchor: "center right"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(item.title), 1)]),
              _: 2
            }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
            _: 2
          }, 1032, ["class", "to", "href", "onClick"])), [[_directive_ripple, void 0, "secondary"]]);
        }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          class: "no-pointer-events",
          style: (0,vue_esm_bundler/* normalizeStyle */.j5)({
            ['padding-top']: `calc(100vh - ${_ctx.settingsTopSpace}px)`
          })
        }, null, 8, ["style"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          clickable: "",
          class: "menu-item settings q-mb-md q-mx-sm",
          to: _ctx.$q.screen.gt.sm ? '/settings' : null,
          onClick: _cache[1] || (_cache[1] = e => {
            if (!_ctx.$q.screen.gt.sm || _ctx.$route.params?.settings_tab) {
              _ctx.$root.toggleSettingsDrawer();
            }
          })
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
            avatar: "",
            class: "q-pr-sm",
            style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
              "min-width": "unset"
            }, {
              ['margin-left']: !_ctx.miniState ? '-10px' : 'unset'
            }])
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
              rounded: "",
              size: "44px"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "sm",
                name: "icon-settings-02"
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["style"]), !_ctx.miniState ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
            key: 0,
            class: "no-pointer-events"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Settings")]),
            _: 1
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.miniState && !_ctx.$route.params?.settings_tab ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_tooltip_pro, {
            key: 1,
            offset: [10, 8],
            self: "center left",
            anchor: "center right"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Settings ")]),
            _: 1
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 1
        }, 8, ["to"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["dark", "mini", "bordered", "modelValue", "breakpoint", "mini-width", "width", "class"]);
}
;// CONCATENATED MODULE: ./src/components/Drawer_Main.vue?vue&type=template&id=7c8954ee

// EXTERNAL MODULE: ./src/components/GrowmodoTextIcon.vue + 4 modules
var GrowmodoTextIcon = __webpack_require__(2788);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/open-url.js
var open_url = __webpack_require__(3752);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(1872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(2393);
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
      miniState: (0,vue_esm_bundler/* ref */.iH)(true)
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['externalLinks']),
    settingsTopSpace() {
      return 68 * this.essentialLinks.length + 250;
    },
    essentialLinks() {
      return [{
        title: 'Home',
        icon: 'icon-home-line',
        link: '/',
        class: 'home'
      }, {
        title: 'Requests',
        icon: 'icon-layers-three-01',
        link: '/requests'
      }, {
        title: 'Brands',
        icon: 'icon-brand-guidelines',
        link: '/brands'
      }, {
        title: 'Files',
        icon: 'icon-folder',
        link: '/files'
      }, {
        title: 'Help Center',
        icon: 'icon-message-question-square',
        link: '/help',
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
    }
  },
  watch: {
    ['$root.$q.screen.width']: {
      async handler(val) {
        if (val <= this.mainDrawerBreakpoint && this.$root.mainDrawer) this.$root.toggleMainDrawer(false);else if (val > this.mainDrawerBreakpoint && !this.$root.mainDrawer) this.$root.toggleMainDrawer(true);
      }
    },
    ['$route.path']: {
      async handler(val) {
        if (!this.checkToExpandPath(val)) this.miniState = true;
      }
    }
  },
  methods: {
    checkToExpandPath(path) {
      if (!path) path = this.$route.path;
      return !path.startsWith('/settings');
    },
    updateMiniState(val) {
      if (this.checkToExpandPath()) this.miniState = typeof val === 'boolean' ? val : false;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Drawer_Main.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(6663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(1233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(1357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(2857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__(1722);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Drawer_Main.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Drawer_Mainvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Drawer_Main = (__exports__);
;








runtime_auto_import_default()(Drawer_Mainvue_type_script_lang_js, 'components', {QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});runtime_auto_import_default()(Drawer_Mainvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=542.2f1e5ce1.js.map