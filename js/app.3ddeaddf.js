/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 95679:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js
var vue_plugin = __webpack_require__(71947);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=e0180140

const _hoisted_1 = {
  class: "flex flex-center text-overline"
};
const _hoisted_2 = {
  class: "row flex-center fixed-bottom-right q-mb-sm q-mr-sm",
  style: {
    "z-index": "999999"
  }
};
const _hoisted_3 = {
  class: "text-overline text-primary-400"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,vue_esm_bundler/* resolveComponent */.up)("router-view");
  const _component_RequestOptions = (0,vue_esm_bundler/* resolveComponent */.up)("RequestOptions");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_DirectoryLayout = (0,vue_esm_bundler/* resolveComponent */.up)("DirectoryLayout");
  const _component_q_spinner_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-spinner-radio");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_Form_ServerConfig = (0,vue_esm_bundler/* resolveComponent */.up)("Form_ServerConfig");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_router_view, null, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(({
      Component
    }) => [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)((0,vue_esm_bundler/* resolveDynamicComponent */.LL)(Component)))]),
    _: 1
  }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    "full-width": "",
    "full-height": "",
    maximized: false,
    modelValue: _ctx.$root.request.new,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.$root.request.new = $event),
    "transition-show": "fade",
    "transition-hide": "fade",
    "transition-duration": 300
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_RequestOptions, {
      class: "rounded",
      noclose: false,
      style: `max-width:850px !important; max-height: 690px !important;`
    })]),
    _: 1
  }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    "full-width": "",
    "full-height": "",
    modelValue: _ctx.$root.request.task,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.$root.request.task = $event),
    "transition-show": "fade",
    "transition-hide": "fade",
    "transition-duration": 300
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DirectoryLayout, {
      class: "rounded",
      title: "Task Directory",
      directoryType: "tasks",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`max-width: ${_ctx.$q.screen.sizes.lg}px !important; max-height: 900px !important;`)
    }, null, 8, ["style"])]),
    _: 1
  }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    "full-width": "",
    "full-height": "",
    modelValue: _ctx.$root.request.project,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.$root.request.project = $event),
    "transition-show": "fade",
    "transition-hide": "fade",
    "transition-duration": 300
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DirectoryLayout, {
      class: "rounded",
      title: "Project Directory",
      directoryType: "projects",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`max-width: ${_ctx.$q.screen.sizes.lg}px !important; max-height: 900px !important;`)
    }, null, 8, ["style"])]),
    _: 1
  }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.showOfflineMessage,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.showOfflineMessage = $event),
    seamless: "",
    position: "top"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      flat: "",
      class: "rounded shadow-ui q-ma-xs q-px-sm q-py-xs bg-warning"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Offline mode. Trying to reconnect. "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_spinner_radio, {
        size: "xs",
        thickness: 1,
        class: "q-pl-sm self-end"
      })])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.dialogUpdateServer,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.dialogUpdateServer = $event),
    "transition-duration": 500,
    "transition-show": "flip-up",
    "transition-hide": "flip-down"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_Form_ServerConfig, {
      onSuccess: _ctx.serverSettingResponse,
      onFailed: _ctx.serverSettingResponse,
      onClose: _cache[4] || (_cache[4] = $event => _ctx.dialogUpdateServer = false)
    }, null, 8, ["onSuccess", "onFailed"])]),
    _: 1
  }, 8, ["modelValue"]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.$config.pkjson?.productName) + " v" + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.$config.pkjson?.version), 1)])], 64);
}
;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=e0180140

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./src/assets/fonts/icons/iconSets.js
var iconSets = __webpack_require__(79449);
var iconSets_default = /*#__PURE__*/__webpack_require__.n(iconSets);
// EXTERNAL MODULE: ./src/assets/_config.js
var _config = __webpack_require__(45808);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-meta.js + 1 modules
var use_meta = __webpack_require__(85082);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(19302);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__(54170);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var dist_pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(93458);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js











/* harmony default export */ const Appvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'App',
  mixins: [mixins/* GeoPermission_Mixin */.Sf],
  components: {
    RequestOptions: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(737)]).then(__webpack_require__.bind(__webpack_require__, 68737))),
    DirectoryLayout: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(493)]).then(__webpack_require__.bind(__webpack_require__, 96493))),
    Form_ServerConfig: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(935)]).then(__webpack_require__.bind(__webpack_require__, 25935)))
  },
  data() {
    return {
      dark: true,
      config: _config/* default */.Z,
      debugging: true,
      mainDrawer: false,
      taskDirectoryDrawer: true,
      mainDrawerCfg: {
        mini: 64,
        width: 208
      },
      settingsDrawer: false,
      request: {
        new: false,
        task: false,
        project: false
      },
      task: {
        new: false
      },
      project: {
        new: false
      },
      redirect: {
        confirmation: false
      },
      upgradePlan: false,
      dialogRequestUpgrade: false,
      showOfflineMessage: false,
      open_server_settings: {
        key: '\\',
        times: 3,
        press_times: 0,
        last_press: 0
      },
      dialogUpdateServer: false
    };
  },
  setup() {
    const $q = (0,use_quasar/* default */.Z)();
    const sessionDuration = (0,vue_esm_bundler/* ref */.iH)(0);
    const helper = (0,helpers/* default */.Z)();
    let checking_connection = (0,vue_esm_bundler/* ref */.iH)(false);

    // Update Icon Set
    $q.iconSet.set((iconSets_default()));
    $q.iconMapFn = iconName => {
      if (iconName.startsWith('icon-') === true) {
        // Growmodo Untitled Icons
        return {
          cls: iconName
        };
      }
    };

    // Create Realtime Date
    let realtimeDate = (0,vue_esm_bundler/* ref */.iH)(new Date());
    let intervalSec = setInterval(async () => {
      sessionDuration.value += 1;
      if (sessionDuration.value % 10 === 0) {
        // Check for Connectivity every 10 seconds
        checking_connection.value = true;
        if (!checking_connection.value) {
          helper.checkIfOnline().finally(() => {
            checking_connection.value = false;
          });
        }
      }
      realtimeDate.value = new Date();
    }, 1000);

    // Meta
    const meta = (0,vue_esm_bundler/* ref */.iH)(_config/* default.metaData */.Z.metaData);
    (0,use_meta/* default */.Z)(() => {
      let data = {};
      Object.keys(meta.value).forEach(d => {
        data[d] = meta.value[d];
      });
      return data;
    });
    async function setMeta(data) {
      Object.keys(data).forEach(d => {
        meta.value[d] = data[d];
      });
    }
    function getMeta(key) {
      return key ? meta.value[key] : meta;
    }
    return {
      setMeta,
      getMeta,
      realtimeDate,
      intervalSec,
      sessionDuration,
      checkIfOnline: helper.checkIfOnline
    };
  },
  computed: {
    ...(0,dist_pinia/* mapState */.rn)(helpers/* default */.Z, ['isOnline', 'greetingsMessage', 'messagesDialogs']),
    ...(0,dist_pinia/* mapState */.rn)(user/* default */.Z, ['activeOrgID', 'selectedOrgIsCancelled']),
    selectedOrgIsExpired() {
      return this.activeOrgID ? this.subscriptionIsExpired(this.realtimeDate) : false;
    }
  },
  watch: {
    ['$q.appVisible']: {
      async handler(val) {
        if (true) {
          console.log(val ? 'App became visible' : 'App went in the background');
        }
      }
    },
    ['isOnline']: {
      async handler(val) {
        if (true) {
          console.log(val ? 'Connection is online' : 'Connection is offline');
        }
        this.showOfflineMessage = !val;
      }
    },
    selectedOrgIsCancelled: {
      async handler(val) {
        if (val) {
          // Logout User if Organization is Cancelled
          if (fn_store/* default.getAuth */.Z.getAuth()) this.logoutAccount();
        }
      }
    },
    selectedOrgIsExpired: {
      async handler(val) {
        if (val) {
          // Logout User if Organization is Cancelled
          if (fn_store/* default.getAuth */.Z.getAuth()) this.logoutAccount();
        }
      }
    }
  },
  methods: {
    ...(0,dist_pinia/* mapActions */.nv)(user/* default */.Z, ['logout', 'subscriptionIsExpired']),
    goTo_Home() {
      // Navigate to Home
      this.$router.push('/');
    },
    logoutAccount(path = '/auth') {
      this.logout(path);
      this.$router.replace(path);
    },
    getItemCreatePath(itemType, itemInfo) {
      return `/request/${itemType}/${itemInfo.id}`;
    },
    requestAction(itemType, itemInfo) {
      const path = this.getItemCreatePath(itemType, itemInfo);
      if (true) console.info(`Requesting ${itemType}:`, itemInfo, path);
      this.$router.push(path);
      return path;
    },
    toggleMainDrawer(forceValue = null) {
      if (this.mainDrawer === undefined) return;
      if (forceValue !== null && typeof forceValue === 'boolean') this.mainDrawer = forceValue;else this.mainDrawer = !this.mainDrawer;
      return;
    },
    toggleTaskDirectoryDrawer(forceValue = null) {
      if (this.taskDirectoryDrawer === undefined) return;
      if (forceValue !== null && typeof forceValue === 'boolean') this.taskDirectoryDrawer = forceValue;else this.taskDirectoryDrawer = !this.taskDirectoryDrawer;
      return;
    },
    toggleSettingsDrawer(forceValue = null) {
      if (this.settingsDrawer === undefined) return;
      if (forceValue !== null && typeof forceValue === 'boolean') this.settingsDrawer = forceValue;else this.settingsDrawer = !this.settingsDrawer;
      return;
    },
    toggleRedirectConfirmation(redirectInfo, forceValue = null) {
      let res = this.toggleType('redirect', 'confirmation', forceValue);
      if (redirectInfo) this.redirect = {
        confirmation: res,
        ...redirectInfo
      };
    },
    toggleRequest(type, value = null) {
      this.toggleType('request', type, value);
    },
    toggleType(_var, type, forceValue = null) {
      let res;
      if (!type) {
        if (forceValue !== null && typeof forceValue === 'boolean') res = forceValue;else res = !this?.[_var]?.new;
        this[_var].new = res;
      } else {
        if (this[_var][type] === undefined) return;
        // Open Request Option First
        // this[_var].new = true;
        if (forceValue !== null && typeof forceValue === 'boolean') res = forceValue;else res = !this?.[_var]?.[type];
        this[_var][type] = res;
      }
      return res;
    },
    refresh(timeout = 1000) {
      setTimeout(() => {
        window.location.href = window.location.href;
      }, timeout);
    },
    /**
     * Handle Some Keys
     *
     * @param {KeyboardEvent} evt
     */
    async handleKeyDown(evt) {
      let prevent = false;
      const block_fkeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
      if (!prevent && block_fkeys.indexOf(evt.key) !== -1) prevent = true;
      const block_console = () => {
        // Block F* Keys
        if (evt.shiftKey && evt.ctrlKey) prevent = true;
        if (prevent && true) {
          prevent = false;
          console.info('DevTools is allowed for Debugging');
        }
      };
      if (!prevent && ['i', 'j', 'c'].indexOf(evt.key.toLowerCase()) !== -1) {
        // Block Console
        block_console();
      } else if (!prevent && evt.key.toLowerCase() == 'r' && evt.ctrlKey) {
        // Block Refresh
        prevent = true;
      } else if (!prevent && evt.key == this.open_server_settings.key) {
        // Server Configuration Magic Key
        if (!this.open_server_settings.press_times) this.open_server_settings.last_press = evt.timeStamp;
        const diff = date/* default.getDateDiff */.ZP.getDateDiff(evt.timeStamp, this.open_server_settings.last_press, 'seconds');
        if (diff >= 0 && diff < 2) {
          if (this.open_server_settings.press_times != this.open_server_settings.times - 1) {
            // no shift and control
            if (!evt.ctrlKey && !evt.shiftKey) this.open_server_settings.press_times += 1;
          } else {
            // last should press control
            if (evt.ctrlKey) this.open_server_settings.press_times += 1;
          }
          if (this.open_server_settings.press_times == this.open_server_settings.times) {
            // Open Server Settings
            this.dialogUpdateServer = true;
            // Reset Counter
            this.open_server_settings.press_times = 0;
            // Prevent Default Action
            prevent = true;
          }
          // Reset Delay
          setTimeout(() => {
            if (this.open_server_settings.press_times) {
              this.open_server_settings.press_times = 0;
              this.open_server_settings.last_press = evt.timeStamp;
            }
          }, 5000);
        }
      }
      if (prevent) evt.preventDefault();
    },
    serverSettingResponse(response, server) {
      if (response.success) {
        this.refresh(2000);
        this.$q.notify({
          position: 'top',
          icon: 'icon-check-circle-broken',
          message: response?.message || 'Server Connected'
        });
      } else {
        this.$q.notify({
          position: 'top',
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: response?.message || 'Server connection failed'
        });
      }
    }
  },
  created() {
    this.getIpInformation();
    this.showOfflineMessage = !this.isOnline;
    window.addEventListener('offline', this.checkIfOnline);
    window.addEventListener('online', this.checkIfOnline);
    window.addEventListener('keydown', this.handleKeyDown, true);
    if (this.selectedOrgIsCancelled && fn_store/* default.getAuth */.Z.getAuth()) this.logoutAccount();
    if (this.selectedOrgIsExpired && fn_store/* default.getAuth */.Z.getAuth()) this.logoutAccount();
  },
  beforeUnmount() {
    (0,functions.tryClearInterval)(this.intervalSec);
    window.removeEventListener('offline', this.checkIfOnline);
    window.removeEventListener('online', this.checkIfOnline);
    window.removeEventListener('keydown', this.handleKeyDown, true);
  }
}));
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(32074);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerRadio.js
var QSpinnerRadio = __webpack_require__(74486);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/App.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const App = (__exports__);
;



runtime_auto_import_default()(Appvue_type_script_lang_js, 'components', {QDialog: QDialog/* default */.Z,QCard: QCard/* default */.Z,QSpinnerRadio: QSpinnerRadio/* default */.Z});

// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.mjs
var wrappers = __webpack_require__(23340);
;// CONCATENATED MODULE: ./src/stores/index.js



/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

/* harmony default export */ const stores = ((0,wrappers/* store */.h)(( /* { ssrContext } */
) => {
  const pinia = (0,dist_pinia/* createPinia */.WB)();

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia;
}));
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(28339);
;// CONCATENATED MODULE: ./src/router/routes.js
const routes = [{
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(722)]).then(__webpack_require__.bind(__webpack_require__, 84722)),
  children: [{
    path: '',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(785)]).then(__webpack_require__.bind(__webpack_require__, 8596))
  }, {
    path: 'requests',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(713)]).then(__webpack_require__.bind(__webpack_require__, 10713))
  }, {
    path: 'brands',
    children: [{
      path: '',
      component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(259)]).then(__webpack_require__.bind(__webpack_require__, 25978))
    }, {
      path: ':brandId',
      children: [{
        path: '',
        component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(712)]).then(__webpack_require__.bind(__webpack_require__, 48501))
      }, {
        path: 'task',
        children: [{
          path: ':taskId',
          component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(550)]).then(__webpack_require__.bind(__webpack_require__, 82550))
        }]
      }, {
        path: 'project',
        children: [{
          path: ':projectId',
          component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(365)]).then(__webpack_require__.bind(__webpack_require__, 94365))
        }]
      }]
    }]
  }, {
    path: 'files',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(715)]).then(__webpack_require__.bind(__webpack_require__, 57715))
  }, {
    path: 'help',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(775)]).then(__webpack_require__.bind(__webpack_require__, 43775))
  }, {
    path: 'discover',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(507)]).then(__webpack_require__.bind(__webpack_require__, 14507))
  }, {
    path: 'gift',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(422)]).then(__webpack_require__.bind(__webpack_require__, 422))
  }, {
    path: 'book-a-call',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(404)]).then(__webpack_require__.bind(__webpack_require__, 89404))
  }, {
    path: 'settings',
    children: [{
      path: '',
      component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(591)]).then(__webpack_require__.bind(__webpack_require__, 591))
    }, {
      path: ':settings_tab',
      component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(591)]).then(__webpack_require__.bind(__webpack_require__, 591))
    }]
  }]
}, {
  path: '/request',
  children: [{
    path: 'task/:taskId',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(141)]).then(__webpack_require__.bind(__webpack_require__, 60141))
  }, {
    path: 'project/:projectId',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(141)]).then(__webpack_require__.bind(__webpack_require__, 60141))
  }]
}, {
  path: '/quick-request/:quickRequestType',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(543)]).then(__webpack_require__.bind(__webpack_require__, 10543))
}, {
  path: '/signup',
  children: [{
    path: '',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(686)]).then(__webpack_require__.bind(__webpack_require__, 1686))
  }, {
    path: 'verify/:signup_token',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(686)]).then(__webpack_require__.bind(__webpack_require__, 1686))
  }]
}, {
  path: '/invitation',
  children: [{
    path: ':invite_token',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(686)]).then(__webpack_require__.bind(__webpack_require__, 1686))
  }]
}, {
  path: '/checkout',
  // component: () => import('src/pages/Misc/CheckoutPage-1.vue'),
  children: [{
    path: ':status',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(966)]).then(__webpack_require__.bind(__webpack_require__, 91966))
  }]
}, {
  path: '/auth',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(405)]).then(__webpack_require__.bind(__webpack_require__, 54405)),
  children: [{
    path: '',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(539)]).then(__webpack_require__.bind(__webpack_require__, 87539))
  }]
},
// Error Handlers
{
  path: '/:catchAll(.*)*',
  component: () => Promise.all(/* import() */[__webpack_require__.e(64), __webpack_require__.e(563)]).then(__webpack_require__.bind(__webpack_require__, 16563))
}];
/* harmony default export */ const router_routes = (routes);
;// CONCATENATED MODULE: ./src/router/index.js




/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ const src_router = ((0,wrappers/* route */.BC)(( /* { store, ssrContext } */
) => {
  const createHistory =  false ? 0 :  true ? vue_router/* createWebHistory */.PO : 0;
  const Router = (0,vue_router/* createRouter */.p7)({
    scrollBehavior: (to, from, savedPosition) => {
      // savedPosition is only available for popstate navigations.
      if (savedPosition) return savedPosition;

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      if (to.params.savePosition) return {};

      // Else Smooth scroll
      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
        el: to.hash ? to.hash : 'body'
      };
    },
    routes: router_routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory( false ? 0 : "/")
  });
  return Router;
}));
;// CONCATENATED MODULE: ./.quasar/app.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/






/* harmony default export */ async function app(createAppFn, quasarUserOptions) {
  // Create the app instance.
  // Here we inject into it the Quasar UI, the router & possibly the store.
  const app = createAppFn(App);
  app.config.performance = true;
  app.use(vue_plugin/* default */.Z, quasarUserOptions);
  const store = typeof stores === 'function' ? await stores({}) : stores;
  app.use(store);
  const router = (0,vue_esm_bundler/* markRaw */.Xl)(typeof src_router === 'function' ? await src_router({
    store
  }) : src_router);

  // make router instance available in store

  store.use(({
    store
  }) => {
    store.router = router;
  });

  // Expose the app, the router and the store.
  // Note that we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {
    app,
    store,
    router
  };
}
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__(5917);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__(6827);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Dialog.js + 4 modules
var Dialog = __webpack_require__(73527);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/AppVisibility.js
var AppVisibility = __webpack_require__(34962);
;// CONCATENATED MODULE: ./.quasar/quasar-user-options.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


/* harmony default export */ const quasar_user_options = ({
  config: {
    "notify": {
      "group": false,
      "iconColor": "secondary",
      "spinnerColor": "secondary",
      "textColor": "primary",
      "color": "white",
      "classes": "rounded shadows-lg border-add text-h6 font-medium text-primary letter-spacing-normal q-py-sm q-px-lg notif-ui"
    },
    "dialog": {
      "classes": "shadows-lg"
    },
    "loadingBar": {
      "skipHijack": true,
      "position": "top",
      "color": "secondary",
      "size": "3px"
    }
  },
  plugins: {
    LoadingBar: LoadingBar/* default */.Z,
    Notify: Notify/* default */.Z,
    Dialog: Dialog/* default */.Z,
    AppVisibility: AppVisibility/* default */.Z
  }
});
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__(70368);
// EXTERNAL MODULE: ./src/assets/scripts/notification.js
var notification = __webpack_require__(2641);
;// CONCATENATED MODULE: ./src-pwa/register-service-worker.js




// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

let updateChecker;
(0,register_service_worker/* register */.z)("/service-worker.js", {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  registrationOptions: {
    scope: './',
    // updateViaCache: 'none',
    type: 'classic'
  },
  async ready(registration) {
    let message = 'Service worker is active.';
    if (true) console.info(message);
    if ('periodicSync' in registration) {
      try {
        await registration.periodicSync.register('content-sync', {
          minInterval: 1000 * 60 * 60 // hourly sync
        });
      } catch (error) {
        if (true) console.error('Periodic background sync cannot be used.', error);
      }
    }
    if (true) console.info(message);
  },
  registered(registration) {
    let message = 'Service worker has been registered.';
    if (true) console.info(message);
    updateChecker = setInterval(() => {
      if (true) console.info('Checking for update.');
      registration.update();
    }, 1000 * 60 * 60); // hourly checks
  },

  cached(registration) {
    let message = 'Content has been cached for offline use.';
    if (true) console.info(message);
  },
  updatefound(registration) {
    let message = 'New content is downloading.';
    if (true) console.info(message);
  },
  updated(registration) {
    let title = 'App has been Updated!';
    let message = 'New content is available; please refresh.';
    if (updateChecker) clearInterval(updateChecker);
    const {
      productName
    } = __webpack_require__(4147);
    (0,notification/* displayNotification */.d)(productName + ' - ' + title, {
      body: message
    }).then(notif => {
      notif.onclick = () => {
        window.location.href = window.location.href;
      };
    });
    Dialog/* default.create */.Z.create({
      ok: {
        label: 'Refresh',
        rounded: true,
        noCaps: true,
        unelevated: true,
        size: 'md',
        color: 'primary',
        icon: 'icon-refresh-cw-01',
        class: 'font-normal rounded'
      },
      cancel: {
        label: '',
        flat: true,
        round: true,
        noCaps: true,
        unelevated: true,
        size: 'md',
        color: 'primary',
        icon: 'icon-x-close',
        class: 'absolute-top-right q-ma-sm'
      },
      seamless: true,
      noRouteDismiss: true,
      transitionHide: 'slide-down',
      transitionShow: 'slide-up',
      title,
      message,
      position: 'bottom',
      class: 'rounded q-mb-xl border-add q-pa-xs shadow-ui'
    }).onOk(() => {
      window.location.href = window.location.href;
    });
    if (true) console.info(message);
  },
  offline() {
    let message = 'Using offline mode. Some features are not available!';
    Dialog/* default.create */.Z.create({
      ok: false,
      cancel: {
        label: '',
        flat: true,
        round: true,
        noCaps: true,
        unelevated: true,
        size: 'md',
        color: 'primary',
        icon: 'icon-minus',
        class: 'absolute-top-right q-ma-sm hide'
      },
      seamless: true,
      noRouteDismiss: true,
      transitionHide: 'slide-up',
      transitionShow: 'slide-down',
      position: 'top',
      title: 'Offline Mode!',
      message,
      class: 'rounded border-add shadow-ui q-ma-md action-absolute'
    });
    if (true) console.info(message);
  },
  error(err) {
    let message = 'Error during service worker registration.';
    if (true) console.error(message + ':', err);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(86890);
;// CONCATENATED MODULE: ./.quasar/client-prefetch.js

/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



let appPrefetch = typeof App.preFetch === 'function' ? App.preFetch :
// Class components return the component options (and the preFetch hook) inside __c property
App.__c !== void 0 && typeof App.__c.preFetch === 'function' ? App.__c.preFetch : false;
function getMatchedComponents(to, router) {
  const route = to ? to.matched ? to : router.resolve(to).route : router.currentRoute.value;
  if (!route) {
    return [];
  }
  const matched = route.matched.filter(m => m.components !== void 0);
  if (matched.length === 0) {
    return [];
  }
  return Array.prototype.concat.apply([], matched.map(m => {
    return Object.keys(m.components).map(key => {
      const comp = m.components[key];
      return {
        path: m.path,
        c: comp
      };
    });
  }));
}
function addPreFetchHooks({
  router,
  store,
  publicPath
}) {
  // Add router hook for handling preFetch.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const urlPath = window.location.href.replace(window.location.origin, ''),
      matched = getMatchedComponents(to, router),
      prevMatched = getMatchedComponents(from, router);
    let diffed = false;
    const preFetchList = matched.filter((m, i) => {
      return diffed || (diffed = !prevMatched[i] || prevMatched[i].c !== m.c || m.path.indexOf('/:') > -1 // does it has params?
      );
    }).filter(m => m.c !== void 0 && (typeof m.c.preFetch === 'function'
    // Class components return the component options (and the preFetch hook) inside __c property
    || m.c.__c !== void 0 && typeof m.c.__c.preFetch === 'function')).map(m => m.c.__c !== void 0 ? m.c.__c.preFetch : m.c.preFetch);
    if (appPrefetch !== false) {
      preFetchList.unshift(appPrefetch);
      appPrefetch = false;
    }
    if (preFetchList.length === 0) {
      return next();
    }
    let hasRedirected = false;
    const redirect = url => {
      hasRedirected = true;
      next(url);
    };
    const proceed = () => {
      LoadingBar/* default.stop */.Z.stop();
      if (hasRedirected === false) {
        next();
      }
    };
    LoadingBar/* default.start */.Z.start();
    preFetchList.reduce((promise, preFetch) => promise.then(() => hasRedirected === false && preFetch({
      store,
      currentRoute: to,
      previousRoute: from,
      redirect,
      urlPath,
      publicPath
    })), Promise.resolve()).then(proceed).catch(e => {
      console.error(e);
      proceed();
    });
  });
}
;// CONCATENATED MODULE: ./.quasar/client-entry.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



// We load Quasar stylesheet file







// Needed only for iOS PWAs
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.navigator.standalone) {
  __webpack_require__.e(/* import() | fastclick */ 736).then(__webpack_require__.t.bind(__webpack_require__, 84848, 23));
}
const publicPath = `/`;
async function start({
  app,
  router,
  store
}, bootFiles) {
  let hasRedirected = false;
  const getRedirectUrl = url => {
    try {
      return router.resolve(url).href;
    } catch (err) {}
    return Object(url) === url ? null : url;
  };
  const redirect = url => {
    hasRedirected = true;
    if (typeof url === 'string' && /^https?:\/\//.test(url)) {
      window.location.href = url;
      return;
    }
    const href = getRedirectUrl(url);

    // continue if we didn't fail to resolve the url
    if (href !== null) {
      window.location.href = href;
    }
  };
  const urlPath = window.location.href.replace(window.location.origin, '');
  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    try {
      await bootFiles[i]({
        app,
        router,
        store,
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        redirect(err.url);
        return;
      }
      console.error('[Quasar] boot error:', err);
      return;
    }
  }
  if (hasRedirected === true) {
    return;
  }
  app.use(router);
  addPreFetchHooks({
    router,
    store
  });
  app.mount('#q-app');
}
app(vue_esm_bundler/* createApp */.ri, quasar_user_options).then(app => {
  // eventually remove this when Cordova/Capacitor/Electron support becomes old
  const [method, mapFn] = Promise.allSettled !== void 0 ? ['allSettled', bootFiles => bootFiles.map(result => {
    if (result.status === 'rejected') {
      console.error('[Quasar] boot error:', result.reason);
      return;
    }
    return result.value.default;
  })] : ['all', bootFiles => bootFiles.map(entry => entry.default)];
  return Promise[method]([Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18744)), Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38812)), Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29542)), Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29792)), Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37571))]).then(bootFiles => {
    const boot = mapFn(bootFiles).filter(entry => typeof entry === 'function');
    start(app, boot);
  });
});

/***/ }),

/***/ 45808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63703);

const pkjson = {"name":"growmodo_hub","version":"0.10.0-dev","description":"Growmodo, GmbH","productName":"Growmodo Hub","author":{"name":"Growmodo, GmbH","url":"https://www.growmodo.com"},"author.name":"Growmodo, GmbH","author.url":"https://www.growmodo.com","private":true,"theme_color":"#2b67ff","background_color":"#fcfcfd"};

/**
 * Application Meta Data
 */
const metaData = {
  // Document title
  title: `${pkjson.productName}`,
  // optional; sets final title as "Page | My Website", useful for multiple level meta
  titleTemplate: title => `${title} | Growmodo`,
  // Meta tags
  meta: {
    description: {
      name: 'description',
      content: pkjson.description
    },
    keywords: {
      name: 'keywords',
      content: pkjson.productName
    },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8'
    },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle) {
        return `${ogTitle}`;
      }
    }
  },
  // CSS tags
  link: {},
  // JS tags
  script: {},
  // <html> attributes
  htmlAttr: {},
  // <body> attributes
  bodyAttr: {},
  // <noscript> tags
  noscript: {
    default: 'Javascript is Required'
  }
};
const icons = {
  growmodo: {
    'logo:icon-white': '/logo/GrowmodoIcon-White.svg',
    'logo:icon-black': '/logo/GrowmodoIcon-Black.svg',
    'logo:icon-colored-light': '/logo/GrowmodoIcon-Colored-Light.svg',
    'logo:icon-colored-dark': '/logo/GrowmodoIcon-Colored-Dark.svg',
    'logo:text-white': '/logo/GrowmodoTextIcon-White.svg',
    'logo:text-black': '/logo/GrowmodoTextIcon-Black.svg'
  },
  stepper: {
    'step:inactive': '/icons/components/step-inactive.svg',
    'step:active': '/icons/components/step-active.svg',
    'step:done': '/icons/components/step-done.svg'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /** Package Information */
  pkjson,
  /** Default Meta Data */
  metaData,
  /**
   * Custom mapping icons
   */
  icons,
  /**
   * My Defaults
   */
  default: {
    message: {
      welcome: 'Hello, friend.',
      bye: 'Goodbye, friend!',
      bug: `
A bug is never just a mistake.
It represents something bigger.
An error of thinking.
That makes you who you are.

`,
      prod: `

 .d8888b.  888                       888
d88P  Y88b 888                       888
Y88b.      888                       888
 "Y888b.   888888  .d88b.  88888b.   888
    "Y88b. 888    d88""88b 888 "88b  888
      "888 888    888  888 888  888  Y8P
Y88b  d88P Y88b.  Y88..88P 888 d88P
 "Y8888P"   "Y888  "Y88P"  88888P"   888
                           888
                           888
                           888


Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.
Do not enter or paste code that you do not understand.

`
    },
    color: {
      addressbar: '#121212'
    },
    class: {
      activeInput: 'form_active_input'
    },
    html2pdf: {
      margin: [0.5, 0.75],
      enableLinks: true,
      image: {
        type: 'jpeg',
        quality: 0.95
      },
      html2canvas: {
        dpi: 192,
        logging: false,
        letterRendering: true
      },
      jsPDF: {
        orientation: 'portrait',
        format: 'a4',
        putOnlyUsedFonts: true,
        compress: true,
        unit: 'in'
      }
    }
  },
  /**
   * Local Storage Keys
   */
  localStorageKeys: {
    auth: 'authToken',
    api_host: 'api_host'
  },
  /**
   * API defaults
   */
  api: {
    baseURL: quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getItem */ .Z.getItem('api_host') || "https://api.growmodo.dev/api"
  },
  /**
   * API defaults
   */
  cdn: {
    baseURL: "https://cdn.growmodo.com",
    platforms: '/public/icons/platforms',
    country_flags: '/public/icons/country_flags',
    social_media: '/public/icons/social_media',
    testimonials: '/public/images/testimonials',
    gif: '/public/gif',
    tmp: '/public/tmp'
  },
  publicPathPattern: ['^/signup$', '^/signup/(.*)', '^/invitation/(.*)', '^/checkout/(.*)'],
  noLoginPath: ['/signup', '/invitation'],
  regexp: {
    https: /^https?:\/\//i,
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
    email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    username: /^[a-zA-Z]([._-]?[a-zA-Z0-9]+){3}$/,
    password: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
  }
});

/***/ }),

/***/ 79449:
/***/ ((module) => {

/**
 * Update components default icons
 */
module.exports = {
  name: 'GrowmodoIcons',
  type: {
    positive: 'icon-check-circle',
    negative: 'icon-alert-triangle',
    info: 'icon-info-circle',
    warning: 'icon-alert-octagon'
  },
  arrow: {
    arrowUp: 'icon-chevron-up',
    right: 'icon-chevron-right',
    down: 'icon-chevron-down',
    left: 'icon-chevron-left',
    dropdown: 'icon-chevron-down'
  },
  chevron: {
    left: 'icon-chevron-left',
    right: 'icon-chevron-right'
  },
  colorPicker: {
    spectrum: 'icon-gradient',
    tune: 'icon-tune',
    palette: 'icon-style'
  },
  pullToRefresh: {
    icon: 'icon-refresh-cw-01'
  },
  carousel: {
    left: 'icon-chevron-left',
    right: 'icon-chevron-right',
    up: 'icon-chevron-up',
    down: 'icon-chevron-down',
    navigationIcon: 'icon-circle'
  },
  chip: {
    remove: 'icon-x-close',
    selected: 'icon-check-circle'
  },
  datetime: {
    arrowLeft: 'icon-chevron-left',
    arrowRight: 'icon-chevron-right',
    now: 'iocon-clock',
    today: 'icon-calendar'
  },
  editor: {
    bold: 'icon-bold-01',
    italic: 'icon-italic-01',
    strikethrough: 'icon-strikethrough-01',
    underline: 'icon-underline-01',
    unorderedList: 'icon-list',
    orderedList: 'icon-list-numbered',
    subscript: 'icon-align-bottom-01',
    superscript: 'icon-align-top-arrow-01',
    hyperlink: 'icon-link-01',
    toggleFullscreen: 'icon-maximize-02',
    quote: 'icon-quote',
    left: 'icon-align-left',
    center: 'icon-align-center',
    right: 'icon-align-right',
    justify: 'icon-align-justify',
    print: 'icon-printer',
    outdent: 'icon-right-indent-01',
    indent: 'icon-left-indent-01',
    removeFormat: 'icon-format-clear',
    formatting: 'icon-type-02',
    fontSize: 'icon-type-01',
    align: 'icon-align-left',
    hr: 'icon-minus',
    undo: 'icon-reverse-left',
    redo: 'icon-reverse-right',
    heading: 'icon-heading-01',
    code: 'icon-code-02',
    size: 'icon-heading-01',
    font: 'icon-type-square',
    viewSource: 'icon-code-02'
  },
  expansionItem: {
    icon: 'icon-chevron-down',
    denseIcon: 'icon-chevron-up'
  },
  fab: {
    icon: 'icon-plus',
    activeIcon: 'icon-x-close'
  },
  field: {
    clear: 'icon-x-close',
    error: 'icon-alert-circle'
  },
  pagination: {
    first: 'icon-chevron-left-double',
    prev: 'icon-chevron-left',
    next: 'icon-chevron-right',
    last: 'icon-chevron-right-double'
  },
  rating: {
    icon: 'icon-star-01'
  },
  stepper: {
    done: 'icon-check-circle',
    active: 'icon-pencil-02',
    error: 'icon-alert-triangle'
  },
  tabs: {
    left: 'icon-chevron-left',
    right: 'icon-chevron-right',
    up: 'icon-chevron-up',
    down: 'icon-chevron-down'
  },
  table: {
    arrowUp: 'icon-arrow-narrow-up',
    warning: 'icon-alert-triangle',
    firstPage: 'icon-chevron-left-double',
    prevPage: 'icon-chevron-left',
    nextPage: 'icon-chevron-right',
    lastPage: 'icon-chevron-right-double'
  },
  tree: {
    icon: 'icon-play'
  },
  uploader: {
    done: 'icon-check-circle',
    clear: 'icon-x-close',
    add: 'icon-plus-square',
    upload: 'icon-upload-cloud-01',
    removeQueue: 'icon-clear-all',
    removeUploaded: 'icon-done-all'
  }
};

/***/ }),

/***/ 1966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ColorThief": () => (/* reexport */ color_thief_min),
  "avatarNameAbbr": () => (/* binding */ avatarNameAbbr),
  "base64": () => (/* binding */ base64),
  "changeInputFocusOnKey": () => (/* binding */ changeInputFocusOnKey),
  "checkFileExtensions": () => (/* binding */ checkFileExtensions),
  "checkIfArray": () => (/* binding */ checkIfArray),
  "checkIfObject": () => (/* binding */ checkIfObject),
  "checker": () => (/* binding */ checker),
  "cleanMarkup": () => (/* binding */ cleanMarkup),
  "cleanPadLimiter": () => (/* binding */ cleanPadLimiter),
  "defaultModKey": () => (/* binding */ defaultModKey),
  "extractErrorMessageString": () => (/* binding */ extractErrorMessageString),
  "filterUniqueKey": () => (/* binding */ filterUniqueKey),
  "formatMoney": () => (/* binding */ formatMoney),
  "getFileTypeIcon": () => (/* binding */ getFileTypeIcon),
  "getImageFromBase64str": () => (/* binding */ getImageFromBase64str),
  "getImageStringFromURL": () => (/* binding */ getImageStringFromURL),
  "greetings": () => (/* binding */ greetings),
  "loomURLShare2Embed": () => (/* binding */ loomURLShare2Embed),
  "numberToWords": () => (/* binding */ numberToWords),
  "objectCompare": () => (/* binding */ objectCompare),
  "objectCopy": () => (/* binding */ objectCopy),
  "relativeDate": () => (/* binding */ relativeDate),
  "removeEmptyTags": () => (/* binding */ removeEmptyTags),
  "searchInObjectArray": () => (/* binding */ searchInObjectArray),
  "tryClearInterval": () => (/* binding */ tryClearInterval),
  "url2link": () => (/* binding */ url2link)
});

// EXTERNAL MODULE: ./src/assets/_config.js
var _config = __webpack_require__(45808);
;// CONCATENATED MODULE: ./src/assets/scripts/min/color-thief.min.mjs
if(!t)var t={map:function(t,r){var n={};return r?t.map(function(t,o){return n.index=o,r.call(n,t)}):t.slice()},naturalOrder:function(t,r){return t<r?-1:t>r?1:0},sum:function(t,r){var n={};return t.reduce(r?function(t,o,e){return n.index=e,t+r.call(n,o)}:function(t,r){return t+r},0)},max:function(r,n){return Math.max.apply(null,n?t.map(r,n):r)}};var r=function(){var r=5,n=8-r,o=1e3;function e(t,n,o){return(t<<2*r)+(n<<r)+o}function i(t){var r=[],n=!1;function o(){r.sort(t),n=!0}return{push:function(t){r.push(t),n=!1},peek:function(t){return n||o(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return n||o(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return n||o(),r}}}function u(t,r,n,o,e,i,u){this.r1=t,this.r2=r,this.g1=n,this.g2=o,this.b1=e,this.b2=i,this.histo=u}function a(){this.vboxes=new i(function(r,n){return t.naturalOrder(r.vbox.count()*r.vbox.volume(),n.vbox.count()*n.vbox.volume())})}function s(r,n){if(n.count()){var o=n.r2-n.r1+1,i=n.g2-n.g1+1,u=t.max([o,i,n.b2-n.b1+1]);if(1==n.count())return[n.copy()];var a,s,h,c,f=0,v=[],l=[];if(u==o)for(a=n.r1;a<=n.r2;a++){for(c=0,s=n.g1;s<=n.g2;s++)for(h=n.b1;h<=n.b2;h++)c+=r[e(a,s,h)]||0;v[a]=f+=c}else if(u==i)for(a=n.g1;a<=n.g2;a++){for(c=0,s=n.r1;s<=n.r2;s++)for(h=n.b1;h<=n.b2;h++)c+=r[e(s,a,h)]||0;v[a]=f+=c}else for(a=n.b1;a<=n.b2;a++){for(c=0,s=n.r1;s<=n.r2;s++)for(h=n.g1;h<=n.g2;h++)c+=r[e(s,h,a)]||0;v[a]=f+=c}return v.forEach(function(t,r){l[r]=f-t}),function(t){var r,o,e,i,u,s=t+"1",h=t+"2",c=0;for(a=n[s];a<=n[h];a++)if(v[a]>f/2){for(e=n.copy(),i=n.copy(),u=(r=a-n[s])<=(o=n[h]-a)?Math.min(n[h]-1,~~(a+o/2)):Math.max(n[s],~~(a-1-r/2));!v[u];)u++;for(c=l[u];!c&&v[u-1];)c=l[--u];return e[h]=u,i[s]=e[h]+1,[e,i]}}(u==o?"r":u==i?"g":"b")}}return u.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var r=this.histo;if(!this._count_set||t){var n,o,i,u=0;for(n=this.r1;n<=this.r2;n++)for(o=this.g1;o<=this.g2;o++)for(i=this.b1;i<=this.b2;i++)u+=r[e(n,o,i)]||0;this._count=u,this._count_set=!0}return this._count},copy:function(){return new u(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(t){var n=this.histo;if(!this._avg||t){var o,i,u,a,s=0,h=1<<8-r,c=0,f=0,v=0;for(i=this.r1;i<=this.r2;i++)for(u=this.g1;u<=this.g2;u++)for(a=this.b1;a<=this.b2;a++)s+=o=n[e(i,u,a)]||0,c+=o*(i+.5)*h,f+=o*(u+.5)*h,v+=o*(a+.5)*h;this._avg=s?[~~(c/s),~~(f/s),~~(v/s)]:[~~(h*(this.r1+this.r2+1)/2),~~(h*(this.g1+this.g2+1)/2),~~(h*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var r=t[0]>>n;return gval=t[1]>>n,bval=t[2]>>n,r>=this.r1&&r<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},a.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,n=0;n<r.size();n++)if(r.peek(n).vbox.contains(t))return r.peek(n).color;return this.nearest(t)},nearest:function(t){for(var r,n,o,e=this.vboxes,i=0;i<e.size();i++)((n=Math.sqrt(Math.pow(t[0]-e.peek(i).color[0],2)+Math.pow(t[1]-e.peek(i).color[1],2)+Math.pow(t[2]-e.peek(i).color[2],2)))<r||void 0===r)&&(r=n,o=e.peek(i).color);return o},forcebw:function(){var r=this.vboxes;r.sort(function(r,n){return t.naturalOrder(t.sum(r.color),t.sum(n.color))});var n=r[0].color;n[0]<5&&n[1]<5&&n[2]<5&&(r[0].color=[0,0,0]);var o=r.length-1,e=r[o].color;e[0]>251&&e[1]>251&&e[2]>251&&(r[o].color=[255,255,255])}},{quantize:function(h,c){if(!h.length||c<2||c>256)return!1;var f=function(t){var o,i=new Array(1<<3*r);return t.forEach(function(t){o=e(t[0]>>n,t[1]>>n,t[2]>>n),i[o]=(i[o]||0)+1}),i}(h);f.forEach(function(){});var v=function(t,r){var o,e,i,a=1e6,s=0,h=1e6,c=0,f=1e6,v=0;return t.forEach(function(t){(o=t[0]>>n)<a?a=o:o>s&&(s=o),(e=t[1]>>n)<h?h=e:e>c&&(c=e),(i=t[2]>>n)<f?f=i:i>v&&(v=i)}),new u(a,s,h,c,f,v,r)}(h,f),l=new i(function(r,n){return t.naturalOrder(r.count(),n.count())});function g(t,r){for(var n,e=t.size(),i=0;i<o;){if(e>=r)return;if(i++>o)return;if((n=t.pop()).count()){var u=s(f,n),a=u[0],h=u[1];if(!a)return;t.push(a),h&&(t.push(h),e++)}else t.push(n),i++}}l.push(v),g(l,.75*c);for(var p=new i(function(r,n){return t.naturalOrder(r.count()*r.volume(),n.count()*n.volume())});l.size();)p.push(l.pop());g(p,c);for(var b=new a;p.size();)b.push(p.pop());return b}}}().quantize,n=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};n.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var o=function(){};o.prototype.getColor=function(t,r){return void 0===r&&(r=10),this.getPalette(t,5,r)[0]},o.prototype.getPalette=function(t,o,e){var i=function(t){var r=t.colorCount,n=t.quality;if(void 0!==r&&Number.isInteger(r)){if(1===r)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");r=Math.max(r,2),r=Math.min(r,20)}else r=10;return(void 0===n||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:r,quality:n}}({colorCount:o,quality:e}),u=new n(t),a=function(t,r,n){for(var o=t,e=[],i=0,u=void 0,a=void 0,s=void 0,h=void 0,c=void 0;i<r;i+=n)a=o[0+(u=4*i)],s=o[u+1],h=o[u+2],(void 0===(c=o[u+3])||c>=125)&&(a>250&&s>250&&h>250||e.push([a,s,h]));return e}(u.getImageData().data,u.width*u.height,i.quality),s=r(a,i.colorCount);return s?s.palette():null},o.prototype.getColorFromUrl=function(t,r,n){var o=this,e=document.createElement("img");e.addEventListener("load",function(){var i=o.getPalette(e,5,n);r(i[0],t)}),e.src=t},o.prototype.getImageData=function(t,r){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=new Array(i),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);var e=n.join(""),u=window.btoa(e);r("data:image/png;base64,"+u)}},n.send()},o.prototype.getColorAsync=function(t,r,n){var o=this;this.getImageData(t,function(t){var e=document.createElement("img");e.addEventListener("load",function(){var t=o.getPalette(e,5,n);r(t[0],this)}),e.src=t})};/* harmony default export */ const color_thief_min = (o);

// EXTERNAL MODULE: ./node_modules/buffer/index.js
var buffer = __webpack_require__(40270);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__(54170);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/formatDistance/index.js + 26 modules
var formatDistance = __webpack_require__(89327);
// EXTERNAL MODULE: ./node_modules/number-to-words/numberToWords.min.js
var numberToWords_min = __webpack_require__(11817);
;// CONCATENATED MODULE: ./src/assets/scripts/functions.js







/**
 * Greetings
 */
const greetings = {
  /**
   * Console Grettings
   */
  console: {
    /**
     * Greetings Console
     */
    dev: () => {
      console.log('%c' + _config/* default.default */.Z["default"]?.message?.welcome, 'color: grey; font-family:system-ui; font-size: 3rem; font-weight: bold');
      console.log('%c' + _config/* default.default */.Z["default"]?.message?.bug, 'color: silver; font-size: 1.5em; text-weight: bold;');
    },
    prod: () => {
      console.log('%c' + _config/* default.default */.Z["default"]?.message?.prod, 'color: silver');
    }
  }
};

/**
 * Encode string to base64
 * @param {*} text text encode to `base64`
 */
function base64_encode(text) {
  return buffer/* Buffer.from */.lW.from(String(text), 'utf-8').toString('base64');
}

/**
 * Decode base64 string
 * @param {String} base64 base64 string to decode
 */
function base64_decode(base64) {
  return buffer/* Buffer.from */.lW.from(String(base64), 'base64').toString('utf-8');
}

/**
 * Base64 Encode and Decode Function
 */
const base64 = {
  encode: base64_encode,
  decode: base64_decode
};
const url2link = (url, validNonHttp = ['tel:', 'mailto:']) => {
  if (!url) return '';
  url = String(url).trim();
  let isValidNonHTP = validNonHttp.filter(e => url.startsWith(e));
  if (isValidNonHTP?.length > 0) return url;
  return _config/* default.regexp */.Z.regexp?.https?.test?.(url) ? url : 'https://' + url;
};

/**
 * Check if `obj` is Object `{}`
 * @param {*} obj object to check if object `{}`
 */
function checkIfObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * Check if `obj` is Object `[]`
 * @param {*} obj object to check if array `[]`
 */
function checkIfArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

/**
 * Compare two object keys value if match
 *
 * @param {{}} obj1 First object to compare
 * @param {{}} obj2 Second object to compare
 */
function objectCompare(obj1, obj2) {
  let response = 0;
  if (obj1 && obj2) Object.keys(obj1).forEach(e => {
    if (obj1[e] !== obj2[e]) response += 1;
  });
  return response;
}

/**
 * Copy existing object
 *
 * @param {{}} obj Object to copy
 */
function objectCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Validate Input Rules
 * @param {*} toResolve to resolve
 * @param {number} timeout timeout delay `ms`
 * @param {Boolean} forceNoError force to validate no error
 */
function inputValidate(toResolve, timeout = 1000, forceNoError = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkIfObject(toResolve)) {
        if (forceNoError && !toResolve.value) resolve(true);else if (toResolve.type && typeof toResolve.value !== undefined) {
          const val = String(toResolve.value);
          switch (toResolve.type.toLowerCase()) {
            case 'url':
              if (toResolve.withregex) {
                // test by regexp
                resolve(_config/* default.regexp */.Z.regexp?.url?.test?.(val) || (toResolve.nomsg ? '' : 'Invalid URL'));
              } else {
                // default
                // test by try catch with new URL
                let isurl = false;
                try {
                  isurl = new URL(val);
                  isurl = true;
                } catch (e) {
                  isurl = false;
                }
                resolve(isurl || (toResolve.nomsg ? '' : 'Invalid URL'));
              }
              break;
            case 'email':
              resolve(_config/* default.regexp */.Z.regexp?.email.test(val.toLowerCase()) || (toResolve.nomsg ? '' : 'Invalid Email Address'));
              break;
            case 'username':
              resolve(_config/* default.regexp */.Z.regexp?.username.test(val) || (toResolve.nomsg ? '' : 'Invalid Username'));
              break;
            case 'password':
              resolve(!_config/* default.regexp */.Z.regexp?.password.test(val) || (toResolve.nomsg ? '' : 'Password is Weak'));
              break;
            default:
              resolve('');
              break;
          }
        } else {
          resolve('');
        }
      }
      resolve(toResolve);
    }, timeout);
  });
}

/**
 * All Checker
 */
const checker = {
  type: {
    isObject: checkIfObject,
    isArray: checkIfArray
  },
  input: inputValidate
};

/**
 * Number to money format with comma and decimal limiter
 * @param {number | string} num to format
 * @param {{style: 'decimal', minimumFractionDigits: number}?} params format options
 */
function formatMoney(num, params = {
  style: 'decimal',
  minimumFractionDigits: 2
}) {
  return isNaN(num) ? 0 : Number(Number(num).toFixed(params.minimumFractionDigits)).toLocaleString('en-US', params);
}

/**
 *
 * @param {*} dateValue date value to format
 * @param {{short: String?, long: string?}?} format string date format
 */
function relativeDate(dateValue, format) {
  dateValue = date/* default.isValid */.ZP.isValid(dateValue) ? new Date(dateValue) : false;
  if (dateValue === false) return 'Invalid Date';
  if (date/* default.getDateDiff */.ZP.getDateDiff(new Date(), new Date(dateValue), 'years') == 0) {
    if (date/* default.getDateDiff */.ZP.getDateDiff(new Date(), new Date(dateValue), 'hours') > 12) {
      return format ? `${date/* default.formatDate */.ZP.formatDate(dateValue, format.short || format)}` : `${date/* default.formatDate */.ZP.formatDate(dateValue, 'MMMM D')} at ${date/* default.formatDate */.ZP.formatDate(dateValue, 'h:mm A')}`;
    } else {
      let response = (0,formatDistance/* default */.Z)(dateValue, new Date(), {
        addSuffix: true
      });
      if (String(response).toLocaleLowerCase() == 'less than a minute ago') response = 'just now';
      return response;
    }
  } else {
    return date/* default.formatDate */.ZP.formatDate(dateValue, format ? format.long || format : 'MMMM D, YYYY');
  }
}

/**
 * @param {Object[]} ObjArray Array Object to filter
 * @param {String} filter_key Key to filter
 */
function filterUniqueKey(ObjArray, filter_key = null) {
  return ObjArray.filter((obj, index, arr) => {
    return checkIfObject(obj) && filter_key ? arr.map(mapObj => mapObj[filter_key]).indexOf(obj[filter_key]) === index : arr.map(mapObj => mapObj).indexOf(obj) === index;
  });
}

/**
 *
 * @param {setInterval} interval interval to `clear`
 */
async function tryClearInterval(interval, addLog = false) {
  try {
    clearInterval(interval);
  } catch (e) {
    if (addLog) console.warn('Interval Error:', e);
  }
}

/**
 *
 * Search content for specified key inside an object
 * @param {Array} array_obj array of object to search
 * @param {String} searchKeyword keywork to match
 * @param {Array} searchKeys list ok `keys` to search
 */
function searchInObjectArray(array_obj = [], searchKeyword, searchKeys = ['label', 'title', 'description', 'keywords'], exactMatch = false) {
  if (!array_obj || !array_obj.length) return [];
  if (searchKeyword && typeof searchKeyword === 'string') searchKeyword = searchKeyword.trim();
  let a = array_obj.filter(op => {
    // Search Filtering
    let res = false;
    // Search on defined keys
    searchKeys.forEach(sk => {
      if (res) return;
      let cond = exactMatch ? String(op[sk]) === searchKeyword : String(op[sk])?.toLowerCase()?.includes(searchKeyword?.toLowerCase());
      res = op[sk] ? cond : false;
    });
    return res;
  });
  return a;
}

/**
 * Clean string limiter
 *
 * @param {String | Number} data        Data to clean and limit
 * @param {Number} limit_length         Length of the value to return
 * @param {String | Number} pad_value   Value of padding
 * @param {Boolean} pad_start           Use .padStart if `true` and .padEnd if `false`. Default is `true`
 * @param {Boolean} trim                To trim value using `String.trim()`
 *
 * @return {String}                     Clean Limited String Value
 */
function cleanPadLimiter(data, limit_length, pad_value = ' ', pad_start = true, trim = true) {
  if (typeof data === 'undefined') return data;
  if (isNaN(limit_length)) limit_length = data.length;
  if (typeof pad_start !== 'boolean') pad_start = false;
  if (typeof pad_value === 'undefined') pad_value = ' ';
  if (typeof trim !== 'boolean') trim = false;
  let n = String(data);
  if (trim) n = n.trim();
  n = n.substring(0, limit_length);
  pad_start ? n = n.padStart(limit_length, pad_value) : n = n.padEnd(limit_length, pad_value);
  return n;
}

/**
 * Change focus of input inside a form during keyboard event e.g. `@keydown` or `@keyup`
 * @param {KeyboardEvent} evt Keyboard Event
 * @param {Boolean} next true to focus `next` input or false to focus `previous` input
 * @param {String} form_active_input_class inout class to include on focus
 */
async function changeInputFocusOnKey(evt, next = true, form_active_input_class = 'form_active_input') {
  const inputs = Array.from([...evt.target.form.querySelectorAll(`input.${form_active_input_class},textarea.${form_active_input_class}`)]);
  const index = inputs.indexOf(evt.target);
  const next_index = next === true ? index + 1 : next === false ? index - 1 : isNaN(next) ? 0 : next;
  if (next_index < inputs.length && inputs[next_index]) {
    inputs[next_index].focus();
    return true;
  }
  return false;
}

/**
 * Modify Enter Key for Inputs
 * @param {KeyboardEvent} evt event object
 */
async function defaultModKey(evt, submitCallback) {
  switch (evt.key) {
    case 'Enter':
      // Handle Enter
      evt.preventDefault();
      if (evt.ctrlKey && evt.shiftKey && evt.altKey) {
        // Control Alt Delete
      } else if (evt.altKey) {
        // Alt
      } else if (evt.shiftKey) {
        // Shift
        changeInputFocusOnKey(evt, false);
      } else if (evt.ctrlKey) {
        // Constrol
        submitCallback?.();
      } else {
        // Enter only
        const focusChanged = await changeInputFocusOnKey(evt);
        if (!focusChanged) submitCallback?.();
      }
      break;
    default:
      break;
  }
}

/**
 * Returns an image element from base64 image url
 * @param {String} b64str base64 image string
 * @returns Promise<HTMLImageElement>
 */
async function getImageFromBase64str(b64str) {
  const img = document.createElement('img');
  await new Promise(r => {
    img.src = b64str;
    img.onload = r;
  });
  return img;
}

/**
 * Returns the base64 image from a blob url
 * @param {String} url image url
 * @param {Array} filterImgType list of accepted image file type
 */
async function getImageStringFromURL(url, filterImgType = ['image/x-icon', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/gif']) {
  const {
    axios
  } = __webpack_require__(18744);
  return await axios.get(url, {
    responseType: 'arraybuffer'
  }).then(res => {
    let imgType = res?.headers?.['content-type'];
    if (res?.status === 200 && (filterImgType === false || filterImgType && filterImgType.includes?.(imgType))) {
      let encodedImage = buffer/* Buffer.from */.lW.from(res.data, 'binary').toString('base64');
      return `data:${imgType};base64, ${encodedImage}`;
    } else {
      console.error(`Error converting`, url);
      return '';
    }
  }).catch(e => {
    return '';
  });
}

/**
 * Generate avatar display for user
 * @param {String} nameString the user full name
 * @param {Boolean} useTwoLetters to use the first letters for the first two words
 * @returns {String | Char}
 */
function avatarNameAbbr(nameString, useTwoLetters = false) {
  const nameSplit = nameString.split(' ');
  return ((nameSplit?.[0]?.charAt(0) || '') + ((useTwoLetters ? nameSplit?.[1]?.charAt(0) : '') || '')).toUpperCase();
}

/**
 *
 * @param {Number} num number to convert to words
 * @returns {String} words value from the numbers
 */
function numberToWords(num) {
  return isNaN(num) ? NaN : (0,numberToWords_min.toWords)(num);
}

/**
 *
 * @param {String | Object} msg string or Object that has a message value
 * @returns {String} the extracted message
 */
function extractErrorMessageString(msg) {
  if (!msg) return '';
  let message;
  if (typeof msg === 'string') message = msg;
  if (!message && checkIfObject(msg)) {
    let tmp_msg = Object.values(msg);
    if (checkIfObject(tmp_msg)) tmp_msg = Object.values(tmp_msg);
    if (Array.isArray(tmp_msg)) tmp_msg = tmp_msg[0];
    message = typeof tmp_msg === 'string' ? tmp_msg : tmp_msg[0];
  }
  return message;
}

/**
 *
 * @param {String} filename filenme with file extension
 * @param {Array} allowedExt array of allowed file extensions (e.g.: png, jpg, svg)
 * @returns {Boolean} `true` if valid file extension else `false`
 */
function checkFileExtensions(filename, allowedExt = []) {
  const fileInfo = String(filename)?.toLowerCase()?.split('.');
  return allowedExt.includes(fileInfo[fileInfo.length - 1]);
}

/**
 * Get icon for specific file type
 * @param {string } filename filenme with file extension
 * @returns { string } icon name from growmodo-iconfont
 */
function getFileTypeIcon(filename) {
  return `icon-${checkFileExtensions(filename, ['woff', 'woff2', 'ttf', 'otf']) ? 'type-square' : checkFileExtensions(filename, ['ico', 'jpg', 'jpeg', 'png', 'svg', 'gif', 'ai', 'eps', 'psd']) ? 'image-03' : 'file-attachment-04'}`;
}

/**
 *
 * @param {String} url url of the shared loom video
 * @returns {String} url of the embeded loom video
 */
function loomURLShare2Embed(url) {
  return url.replace('loom.com/share', 'loom.com/embed');
}

/**
 *
 * @param {String} html HTML string
 * @returns {String} clean HTML string
 */
function removeEmptyTags(html) {
  const regex = /<(?!\/)([^>]+)><\/([^>]+)>/gi;
  // Ensure only identical pairs are matched.
  const matches = [...html.matchAll(regex)].filter(match => match[1] === match[2]);
  if (matches.length > 0) {
    return removeEmptyTags(matches.reduce((cleaned, match) => cleaned.replace(match[0], ''), html));
  }
  return html;
}

/**
 *
 * @param {String} html HTML string
 * @returns {String} clean HTML string
 */
function cleanMarkup(html) {
  const replaced = html.replace(/ style="[^"]+"/gi, '') // Remove all style attributes.
  .replace(/ class="[^"]+"/gi, '') // Remove all class attributes.
  .replace(/<\/p><p>/gi, '</p><br><p>') // Add br on p.
  .replace(/<\/div><div>/gi, '</div><br><div>') // Add br on div.
  .replace(/<\/p><div>/gi, '</p><br><div>') // Add br on p - div.
  .replace(/<\/div><p>/gi, '</div><br><p>') // Add br on div - p.
  .replace(/<\/?span([^>]*)>/gi, '') // Remove span tags.
  .replace(/<\/?div([^>]*)>/gi, '') // Remove div tags.
  .replace(/<\/?p ([^>]*)>/gi, '') // Remove p with attributes.
  .replace(/<\/?p>/gi, '') // Remove p tags.
  .replace(/<p><([ou]l)>/gi, '<$1>') // Remove all paragraphs surrounding a list
  .replace(/<\/([ou]l)><\/p>/gi, '</$1>');
  return removeEmptyTags(replaced); // Remove all empty tag pairs.
}



/***/ }),

/***/ 2641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ displayNotification)
/* harmony export */ });
/* unused harmony export requestNotifPermission */
async function sendNotification(notifTitle, options = {}) {
  options = {
    icon: '/favicon.ico',
    ...options
  };
  return new Notification(notifTitle, options);
}
async function displayNotification(notifTitle, options = {}) {
  if (!notifTitle || !options) return;
  const notifAllowed = await requestNotifPermission();
  if (notifAllowed) {
    return await sendNotification(notifTitle, options);
  }
}
async function requestNotifPermission() {
  if (window.Notification && Notification.permission === 'granted') {
    return true;
  } else if (window.Notification && Notification.permission !== 'denied') {
    return await Notification.requestPermission(status => {
      if (status === 'granted') {
        return true;
      } else {
        return false;
      }
    });
  } else {
    return false;
  }
}


/***/ }),

/***/ 37571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23340);
/* harmony import */ var vue_instantsearch_vue3_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14814);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_1__/* .boot */ .xr)(async ({
  app
}) => {
  app.use(vue_instantsearch_vue3_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP);
}));

/***/ }),

/***/ 18744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_UNAUTHORIZED": () => (/* binding */ API_UNAUTHORIZED),
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "axios": () => (/* reexport default from dynamic */ axios__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "cdn": () => (/* binding */ cdn),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "downloadItem": () => (/* binding */ downloadItem),
/* harmony export */   "downloadZip": () => (/* binding */ downloadZip)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69665);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23340);
/* harmony import */ var quasar_src_plugins_LoadingBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5917);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39981);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85487);
/* harmony import */ var src_assets_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45808);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20606);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_5__);







const api = axios__WEBPACK_IMPORTED_MODULE_2___default().create({
  baseURL: src_assets_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].api */ .Z.api?.baseURL
});
const cdn = src_assets_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].cdn */ .Z.cdn;
const API_UNAUTHORIZED = 300;
const downloadItem = (url, label) => {
  quasar_src_plugins_LoadingBar_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].start */ .Z.start();
  axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {
    responseType: 'blob'
  }).then(response => {
    const blob = new Blob([response.data]);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = label;
    link.click();
    URL.revokeObjectURL(link.href);
  }).catch(console.error).finally(quasar_src_plugins_LoadingBar_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].stop */ .Z.stop);
};
const downloadZip = async (urls, label) => {
  console.log(`Downloading Zip:`, urls);
  const zip = new (jszip__WEBPACK_IMPORTED_MODULE_5___default())();
  if (!urls?.length) return;
  const promises = urls.map(({
    url,
    folder
  }) => fetch(url).then(res => res.blob()));
  const files = await Promise.all(promises);
  files.forEach((file, index) => {
    let subFolders = zip;
    if (!urls[index].folder) urls[index].folder = '';
    urls[index].folder.split('/').forEach(folderName => {
      subFolders = subFolders.folder(folderName);
    });
    subFolders.file(urls[index].filename || urls[index].url.split('/').pop(), file);
  });
  const content = await zip.generateAsync({
    type: 'blob'
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(content);
  link.download = `${label}${!label?.endsWith?.('.zip') ? '.zip' : ''}`;
  link.click();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_6__/* .boot */ .xr)(({
  app,
  router
}) => {
  /**
   * Intercept in API Request
   * Add Header Authorization, etc..
   * @param {*} request - XHR Request
   */
  const apiRequestHandler = request => {
    if (src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAuth */ .Z.getAuth()) request.headers.Authorization = `Bearer ${src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAuth */ .Z.getAuth()}`;
    quasar_src_plugins_LoadingBar_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].start */ .Z.start();
    return request;
  };

  /**
   * Intercept in API Responses
   * @param {*} response - XHR Response
   */
  const apiResponseHandler = response => {
    if (true) {
      console[response.status !== 200 || response.data?.code ? 'warn' : 'log']('API Status:', response.status, (response.config?.method).toUpperCase(), '-', response.request?.responseURL, response);
    }
    if (response.status === 200) {
      if (response.config?.url === '/me' && response.data?.code === API_UNAUTHORIZED) {
        // Remove Save Token
        if (src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAuth */ .Z.getAuth()) src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].removeAuth */ .Z.removeAuth();
        if (router.currentRoute?.value?.path !== '/auth') {
          // Hard Refresh
          router.push('/auth');
          window.location.href = '/auth';
        }
      }
    }
    quasar_src_plugins_LoadingBar_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].stop */ .Z.stop();
    return response;
  };

  /**
   * Intercept in API Error Responses
   * @param {*} error - XHR/Error Response
   */
  const apiErrorHandler = error => {
    if (true) console.error('API Error:', error);
    quasar_src_plugins_LoadingBar_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].stop */ .Z.stop();
    return Promise.reject(error);
  };

  // Intercept all api request
  api.interceptors.request.use(request => apiRequestHandler(request), ({
    error,
    config,
    code,
    request,
    response
  }) => apiErrorHandler({
    error,
    config,
    code,
    request,
    response
  }));

  // Intercept all api response
  api.interceptors.response.use(response => apiResponseHandler(response), ({
    error,
    config,
    code,
    request,
    response
  }) => apiErrorHandler({
    error,
    config,
    code,
    request,
    response
  }));
  app.config.globalProperties.$downloadItem = downloadItem; // this.$downloadItem
  app.config.globalProperties.$downloadZip = downloadZip; // this.$downloadZip

  // for use inside Vue files (Options API)
  // API and Axios
  app.config.globalProperties.$axios = (axios__WEBPACK_IMPORTED_MODULE_2___default()); // this.$axios
  app.config.globalProperties.$api = api; // this.$api
  // CDN
  app.config.globalProperties.$cdn_host = cdn.baseURL; // this.$cdn_host
  app.config.globalProperties.$cdn = cdn; // this.$cdn
}));



/***/ }),

/***/ 38812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69665);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23340);
/* harmony import */ var stores_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33701);
/* harmony import */ var src_assets_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45808);
/* harmony import */ var src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85487);





// Auth

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_4__/* .boot */ .xr)(async ({
  router,
  store
}) => {
  const token = src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAuth */ .Z.getAuth();
  const myuser = (0,stores_user__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(store);
  if (token) {
    // User has a session
    // Validate session
    const loginResponse = await myuser.loginWithToken();

    // Remove Save Token
    if (!loginResponse?.success) {
      src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].removeAuth */ .Z.removeAuth();
      router.push('/auth');
    }
  }
  function checkPathPublicPattern(path) {
    for (const ptrn of src_assets_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"].publicPathPattern */ .Z.publicPathPattern) {
      if (new RegExp(ptrn).test(path)) {
        return true;
      }
    }
    return false;
  }

  // This function will run everytime router path changes
  router.beforeEach((to, from, next) => {
    if (
    // Check if saved token exist
    // And going to /auth router path
    // Then forward to home page
    src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAuth */ .Z.getAuth() && to.path === '/auth') {
      const new_route = {
        path: to.query?.redirect ? decodeURIComponent(to.query?.redirect) : '/'
      };
      next(new_route);
    } else if (
    // Check if saved token exist
    // And router path is not /auth
    // Also not a public path
    src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAuth */ .Z.getAuth() && to.path !== '/auth' && src_assets_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"].noLoginPath.includes */ .Z.noLoginPath.includes(to.path)) {
      const new_route = {
        path: to.query?.redirect ? decodeURIComponent(to.query?.redirect) : '/'
      };
      next(new_route);
    } else if (
    // Check if no saved token
    // And router path is not /auth
    // Also not a public path
    !src_stores_fn_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAuth */ .Z.getAuth() && to.path !== '/auth' && !checkPathPublicPattern(to.path)) {
      const pathUri = to.fullPath;
      const redirect = pathUri ? to.query?.redirect ? to.query?.redirect : pathUri : undefined;
      const new_route = {
        path: '/auth',
        query: {}
      };
      if (redirect) new_route.query['redirect'] = redirect;
      next(new_route);
    } else {
      // Else continue next
      next();
    }
  });
}));


/***/ }),

/***/ 29542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ i18n)
});

// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.mjs
var wrappers = __webpack_require__(23340);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs + 5 modules
var vue_i18n = __webpack_require__(46366);
;// CONCATENATED MODULE: ./src/i18n/en-US/index.js
/* harmony default export */ const en_US = ({
  isoName: 'en-US',
  nativeName: 'English (US)',
  label: {
    clear: 'Clear',
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    set: 'Set',
    select: 'Select',
    reset: 'Reset',
    remove: 'Remove',
    update: 'Update',
    create: 'Create',
    search: 'Search',
    filter: 'Filter',
    refresh: 'Refresh'
  },
  date: {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    firstDayOfWeek: 0,
    // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    pluralDay: 'days'
  },
  table: {
    noData: 'No data available',
    noResults: 'No matching records found',
    loading: 'Loading...',
    selectedRecords: rows => rows === 1 ? '1 record selected.' : (rows === 0 ? 'No' : rows) + ' records selected.',
    recordsPerPage: 'Records per page:',
    allRows: 'All',
    pagination: (start, end, total) => start + '-' + end + ' of ' + total,
    columns: 'Columns'
  },
  editor: {
    url: 'URL',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    underline: 'Underline',
    unorderedList: 'Unordered List',
    orderedList: 'Ordered List',
    subscript: 'Subscript',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Toggle Fullscreen',
    quote: 'Quote',
    left: 'Left align',
    center: 'Center align',
    right: 'Right align',
    justify: 'Justify align',
    print: 'Print',
    outdent: 'Decrease indentation',
    indent: 'Increase indentation',
    removeFormat: 'Remove formatting',
    formatting: 'Formatting',
    fontSize: 'Font Size',
    align: 'Align',
    hr: 'Insert Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    paragraph: 'Paragraph',
    code: 'Code',
    size1: 'Very small',
    size2: 'A bit small',
    size3: 'Normal',
    size4: 'Medium-large',
    size5: 'Big',
    size6: 'Very big',
    size7: 'Maximum',
    defaultFont: 'Default Font',
    viewSource: 'View Source'
  },
  tree: {
    noNodes: 'No nodes available',
    noResults: 'No matching nodes found'
  }
});
;// CONCATENATED MODULE: ./src/i18n/de/index.js
/* harmony default export */ const de = ({
  isoName: 'de',
  nativeName: 'Deutsch',
  label: {
    clear: 'Leeren',
    ok: 'Ok',
    cancel: 'Abbrechen',
    close: 'Schließen',
    set: 'Setzen',
    select: 'Auswählen',
    reset: 'Zurücksetzen',
    remove: 'Löschen',
    update: 'Aktualisieren',
    create: 'Erstellen',
    search: 'Suche',
    filter: 'Filter',
    refresh: 'Aktualisieren'
  },
  date: {
    days: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    daysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Dez'.split('_'),
    firstDayOfWeek: 1,
    // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: true,
    pluralDay: 'Tage'
  },
  table: {
    noData: 'Keine Daten vorhanden.',
    noResults: 'Keine Einträge gefunden',
    loading: 'Lade...',
    selectedRecords: rows => rows > 1 ? rows + ' ausgewählte Zeilen' : (rows === 0 ? 'Keine' : '1') + ' ausgewählt.',
    recordsPerPage: 'Zeilen pro Seite',
    allRows: 'Alle',
    pagination: (start, end, total) => start + '-' + end + ' von ' + total,
    columns: 'Spalten'
  },
  editor: {
    url: 'URL',
    bold: 'Fett',
    italic: 'Kursiv',
    strikethrough: 'Durchgestrichen',
    underline: 'Unterstrichen',
    unorderedList: 'Ungeordnete Liste',
    orderedList: 'Geordnete Liste',
    subscript: 'tiefgestellt',
    superscript: 'hochgestellt',
    hyperlink: 'Link',
    toggleFullscreen: 'Vollbild umschalten',
    quote: 'Zitat',
    left: 'linksbündig',
    center: 'zentriert',
    right: 'rechtsbündig',
    justify: 'Ausrichten',
    print: 'Drucken',
    outdent: 'ausrücken',
    indent: 'einrücken',
    removeFormat: 'Entferne Formatierung',
    formatting: 'Formatiere',
    fontSize: 'Schriftgröße',
    align: 'Ausrichten',
    hr: 'Horizontale Linie einfügen',
    undo: 'Rückgänging',
    redo: 'Wiederherstellen',
    heading1: 'Überschrift 1',
    heading2: 'Überschrift 2',
    heading3: 'Überschrift 3',
    heading4: 'Überschrift 4',
    heading5: 'Überschrift 5',
    heading6: 'Überschrift 6',
    paragraph: 'Absatz',
    code: 'Code',
    size1: 'Sehr klein',
    size2: 'klein',
    size3: 'Normal',
    size4: 'Groß',
    size5: 'Größer',
    size6: 'Sehr groß',
    size7: 'Maximum',
    defaultFont: 'Standard Schrift',
    viewSource: 'Quelltext anzeigen'
  },
  tree: {
    noNodes: 'Keine Knoten verfügbar',
    noResults: 'Keine passenden Knoten gefunden'
  }
});
;// CONCATENATED MODULE: ./src/i18n/index.js


/* harmony default export */ const src_i18n = ({
  'en-US': en_US,
  de: de
});
;// CONCATENATED MODULE: ./src/boot/i18n.js



/* harmony default export */ const i18n = ((0,wrappers/* boot */.xr)(async ({
  app
}) => {
  const i18n = (0,vue_i18n/* createI18n */.o)({
    locale: 'en-US',
    globalInjection: true,
    messages: src_i18n
  });
  app.use(i18n);
}));

/***/ }),

/***/ 29792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ initialize)
});

// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.mjs
var wrappers = __webpack_require__(23340);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/AddressbarColor.js
var AddressbarColor = __webpack_require__(62246);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/get-css-var.js
var get_css_var = __webpack_require__(52729);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/assets/_config.js
var _config = __webpack_require__(45808);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/TooltipPro.vue?vue&type=template&id=12de4133

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_tooltip = (0,vue_esm_bundler/* resolveComponent */.up)("q-tooltip");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_tooltip, {
    onShow: _ctx.onShow,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["tooltip tooltip-pro q-pa-none", `tooltip-arrow-${_ctx.arrowClass} shadow-${_ctx.shadow}`]),
    ref: "tooltipRef",
    "transition-duration": "0",
    "transition-show": "fade",
    "transition-hide": "fade"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["tooltip-text relative-position", `bg-${_ctx.bgColor} text-${_ctx.color}`])
    }, [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")], 2), _ctx.arrowClass !== 'none' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: 0,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["tooltip-arrow absolute", `bg-${_ctx.bgColor} shadow-${_ctx.shadow}`])
    }, null, 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 3
  }, 8, ["onShow", "class"]);
}
;// CONCATENATED MODULE: ./src/components/Globals/TooltipPro.vue?vue&type=template&id=12de4133

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/TooltipPro.vue?vue&type=script&lang=js

/* harmony default export */ const TooltipProvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'TooltipPro',
  props: {
    arrow: {
      type: String,
      default: 'none'
    },
    duration: {
      type: Number,
      default: null
    },
    bgColor: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: 'white'
    },
    shadow: {
      type: [Number, String],
      default: 0
    }
  },
  setup(props) {
    const tooltipRef = (0,vue_esm_bundler/* ref */.iH)(null);
    const arrowClass = (0,vue_esm_bundler/* computed */.Fl)(() => {
      let arrowClassCorrected = props.arrow.replace(' ', '-');
      let allowedClasses = ['none', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom'];
      if (!allowedClasses.includes(arrowClassCorrected)) {
        console.error(`Value "${arrowClassCorrected}" not allowed for "arrow" prop. Use one of these: `, allowedClasses);
        return 'top';
      }
      return props.arrow.replace(' ', '-');
    });
    const onShow = () => {
      if (props.duration) {
        setTimeout(() => {
          if (tooltipRef.value && tooltipRef.value) tooltipRef.value.hide();
        }, props.duration);
      }
    };
    return {
      arrowClass,
      tooltipRef,
      onShow
    };
  }
}));
;// CONCATENATED MODULE: ./src/components/Globals/TooltipPro.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__(46858);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Globals/TooltipPro.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TooltipProvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const TooltipPro = (__exports__);
;

runtime_auto_import_default()(TooltipProvue_type_script_lang_js, 'components', {QTooltip: QTooltip/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/CloseButton.vue?vue&type=template&id=591be330

function CloseButtonvue_type_template_id_591be330_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
    dense: "",
    round: "",
    flat: "",
    size: "md",
    icon: _ctx.icon,
    color: "primary-500",
    class: "hover-text-negative"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["icon"])), [[_directive_close_popup]]);
}
;// CONCATENATED MODULE: ./src/components/Globals/CloseButton.vue?vue&type=template&id=591be330

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/CloseButton.vue?vue&type=script&lang=js

/* harmony default export */ const CloseButtonvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CloseButton',
  props: {
    icon: {
      type: String,
      default: 'icon-x-close'
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Globals/CloseButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(62146);
;// CONCATENATED MODULE: ./src/components/Globals/CloseButton.vue




;
const CloseButton_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CloseButtonvue_type_script_lang_js, [['render',CloseButtonvue_type_template_id_591be330_render]])

/* harmony default export */ const CloseButton = (CloseButton_exports_);
;

runtime_auto_import_default()(CloseButtonvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z});runtime_auto_import_default()(CloseButtonvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/DynamicDialogConfirmation.vue?vue&type=template&id=649da581

const _hoisted_1 = {
  key: 1,
  class: "absolute-top-right"
};
const _hoisted_2 = {
  key: 0,
  class: "text-h5 font-demi-bold letter-space-normal"
};
const _hoisted_3 = {
  key: 1,
  class: "text-body2 text-primary-500 letter-space-normal q-pt-md"
};
const _hoisted_4 = {
  class: "text-body1 font-medium"
};
const _hoisted_5 = {
  class: "text-body1 font-medium"
};
function DynamicDialogConfirmationvue_type_template_id_649da581_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "q-pa-sm rounded",
    style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`width: ${_ctx.width}`)
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "bg-transparent q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_CardIconBox, {
          key: 0,
          icon: _ctx.icon,
          iconColor: _ctx.iconColor,
          class: "no-pointer-events",
          bgColor: _ctx.iconBgColor
        }, null, 8, ["icon", "iconColor", "bgColor"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-pt-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.messageTitle ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.messageTitle), 1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.messageDescription ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.messageDescription), 1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row q-gutter-sm q-py-md", {
        ['reverse']: _ctx.suggestAlternative
      }])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.cancel ? (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        key: 0,
        "no-caps": "",
        outline: !_ctx.suggestAlternative,
        color: _ctx.cancelColor,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col rounded slide-hover", !_ctx.suggestAlternative ? 'button-gm-outline-dark' : '']),
        onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('canceled'))
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.cancelText), 1)]),
        _: 1
      }, 8, ["outline", "color", "class"])), [[_directive_close_popup]]) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.ok ? (0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        key: 1,
        "no-caps": "",
        outline: _ctx.suggestAlternative,
        color: _ctx.okColor,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col rounded slide-hover", _ctx.suggestAlternative ? 'button-gm-outline-dark' : '']),
        onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('okay'))
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_5, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.okText), 1)]),
        _: 1
      }, 8, ["outline", "color", "class"])), [[_directive_close_popup]]) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }, 8, ["class"])]),
    _: 1
  }, 8, ["style"]);
}
;// CONCATENATED MODULE: ./src/components/Globals/DynamicDialogConfirmation.vue?vue&type=template&id=649da581

// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(16122);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/DynamicDialogConfirmation.vue?vue&type=script&lang=js


/* harmony default export */ const DynamicDialogConfirmationvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DynamicDialogConfirmation',
  components: {
    CardIconBox: CardIconBox["default"]
  },
  emits: ['close', 'okay', 'canceled'],
  props: {
    noclose: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'icon-check-circle-broken'
    },
    iconColor: {
      type: String,
      default: 'secondary'
    },
    iconBgColor: {
      trype: String,
      default: 'accent'
    },
    width: {
      type: String,
      default: '360px'
    },
    cancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    cancelColor: {
      type: String,
      default: 'primary'
    },
    ok: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: 'Okay'
    },
    okColor: {
      type: String,
      default: 'primary'
    },
    messageTitle: {
      type: String,
      default: ''
    },
    messageDescription: {
      type: String,
      default: ''
    },
    suggestAlternative: {
      type: Boolean,
      default: false
    }
  },
  unmounted() {
    this.$emit('close');
  }
}));
;// CONCATENATED MODULE: ./src/components/Globals/DynamicDialogConfirmation.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
;// CONCATENATED MODULE: ./src/components/Globals/DynamicDialogConfirmation.vue




;
const DynamicDialogConfirmation_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DynamicDialogConfirmationvue_type_script_lang_js, [['render',DynamicDialogConfirmationvue_type_template_id_649da581_render]])

/* harmony default export */ const DynamicDialogConfirmation = (DynamicDialogConfirmation_exports_);
;




runtime_auto_import_default()(DynamicDialogConfirmationvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(DynamicDialogConfirmationvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/ExternalLink.vue?vue&type=template&id=1e7b778c

const ExternalLinkvue_type_template_id_1e7b778c_hoisted_1 = ["href"];
function ExternalLinkvue_type_template_id_1e7b778c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  return _ctx.urlLabel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("a", {
    key: 0,
    href: _ctx.urlLink,
    target: "_blank",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["q-col-gutter-sm row inline items-center text-primary-700 hover-text-secondary", `${_ctx.externalIcon ? 'hover-visibility' : ''} ${_ctx.color}`])
  }, [_ctx.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
    key: 0,
    name: _ctx.icon,
    size: "xs",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["hover-text-secondary", {
      [_ctx.iconClass]: _ctx.iconClass
    }]),
    color: "primary-700"
  }, null, 8, ["name", "class"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("span", {
    class: (0,vue_esm_bundler/* normalizeClass */.C_)([{
      ['underline']: _ctx.underline,
      [_ctx.labelClass]: _ctx.labelClass
    }, "text-secondary hover-text-secondary"])
  }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.urlLabel), 3), _ctx.externalIcon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
    key: 1,
    size: "12px",
    name: _ctx.externalIcon,
    class: "hover-visibility-show"
  }, null, 8, ["name"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 10, ExternalLinkvue_type_template_id_1e7b778c_hoisted_1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true);
}
;// CONCATENATED MODULE: ./src/components/Globals/ExternalLink.vue?vue&type=template&id=1e7b778c

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/ExternalLink.vue?vue&type=script&lang=js


/* harmony default export */ const ExternalLinkvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'ExternalLink',
  props: {
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: ''
    },
    externalIcon: {
      type: [Boolean, String],
      default: 'icon-link-external-01'
    },
    color: {
      type: String,
      default: 'text-primary'
    },
    underline: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    urlLabel() {
      if (this.label) return this.label;
      const xurl = (0,functions.url2link)(this.url);
      let url = '';
      try {
        url = xurl ? new URL(xurl) : {};
      } catch (e) {
        if (this.$DEV_MODE) console.error('Received invalid url');
      }
      return (this.format ? url?.[this.format] : url?.hostname + (url?.pathname !== '/' ? url?.pathname : '')) || this.url;
    },
    urlLink() {
      return (0,functions.url2link)(this.url);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Globals/ExternalLink.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
;// CONCATENATED MODULE: ./src/components/Globals/ExternalLink.vue




;
const ExternalLink_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ExternalLinkvue_type_script_lang_js, [['render',ExternalLinkvue_type_template_id_1e7b778c_render]])

/* harmony default export */ const ExternalLink = (ExternalLink_exports_);
;

runtime_auto_import_default()(ExternalLinkvue_type_script_lang_js, 'components', {QIcon: QIcon/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/CardItem.vue?vue&type=template&id=5b85bf9e

const CardItemvue_type_template_id_5b85bf9e_hoisted_1 = {
  key: 1,
  class: "text-primary-500"
};
function CardItemvue_type_template_id_5b85bf9e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "cursor-pointer full-height text-h6 row items-center"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)([`items-${_ctx.align} q-pa-${_ctx.itemPadding}`, "no-min-height"])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.$slots.avatar ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        side: "",
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.avatarClass)
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "avatar")]),
        _: 3
      }, 8, ["class"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        class: "text-left"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.$slots.title ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          key: 0,
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.titleClass)
        }, [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "title")], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$slots.description ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", CardItemvue_type_template_id_5b85bf9e_hoisted_1, [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "description")])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 3
      })]),
      _: 3
    }, 8, ["class"])]),
    _: 3
  });
}
;// CONCATENATED MODULE: ./src/components/Globals/CardItem.vue?vue&type=template&id=5b85bf9e

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/CardItem.vue?vue&type=script&lang=js

/* harmony default export */ const CardItemvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CardItem',
  props: {
    align: {
      type: String,
      default: 'start'
    },
    itemPadding: {
      type: String,
      default: 'md'
    },
    avatarClass: {
      type: String,
      default: 'q-pr-md'
    },
    titleClass: {
      type: String,
      default: ''
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Globals/CardItem.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
;// CONCATENATED MODULE: ./src/components/Globals/CardItem.vue




;
const CardItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CardItemvue_type_script_lang_js, [['render',CardItemvue_type_template_id_5b85bf9e_render]])

/* harmony default export */ const CardItem = (CardItem_exports_);
;



runtime_auto_import_default()(CardItemvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/GMToggle.vue?vue&type=template&id=70d23ecd

const GMTogglevue_type_template_id_70d23ecd_hoisted_1 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "gm-slider gm-toggle-rounded"
}, null, -1);
const GMTogglevue_type_template_id_70d23ecd_hoisted_2 = {
  key: 0,
  class: "q-pl-sm"
};
function GMTogglevue_type_template_id_70d23ecd_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("label", {
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["gm-toggle row inline no-wrap cursor-pointer q-py-xs items-center", _ctx.value ? 'gm-switch-active' : ''])
  }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["gm-switch relative-position", `${_ctx.value ? 'text-' + _ctx.color : 'text-primary-400'}`])
  }, [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createElementVNode */._)("input", {
    type: "checkbox",
    class: "gm-switch-input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.value = $event)
  }, null, 512), [[vue_esm_bundler/* vModelCheckbox */.e8, _ctx.value]]), GMTogglevue_type_template_id_70d23ecd_hoisted_1], 2), _ctx.$slots.label || _ctx.label ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", GMTogglevue_type_template_id_70d23ecd_hoisted_2, [_ctx.$slots.label ? (0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "label", {
    key: 0
  }) : _ctx.label ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 1
  }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.label), 1)], 64)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2);
}
;// CONCATENATED MODULE: ./src/components/Globals/GMToggle.vue?vue&type=template&id=70d23ecd

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/GMToggle.vue?vue&type=script&lang=js

/* harmony default export */ const GMTogglevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'GMToggle',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'secondary'
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  watch: {
    modelValue: {
      async handler(val) {
        this.value = val;
      }
    },
    value: {
      async handler(val) {
        this.$emit('update:modelValue', val);
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Globals/GMToggle.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/Globals/GMToggle.vue




;


const GMToggle_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(GMTogglevue_type_script_lang_js, [['render',GMTogglevue_type_template_id_70d23ecd_render]])

/* harmony default export */ const GMToggle = (GMToggle_exports_);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/ImageLightbox.vue?vue&type=template&id=850f27d2

const ImageLightboxvue_type_template_id_850f27d2_hoisted_1 = {
  class: "absolute-top-right q-pa-sm"
};
const ImageLightboxvue_type_template_id_850f27d2_hoisted_2 = {
  class: "absolute-left flex items-center q-px-sm"
};
const ImageLightboxvue_type_template_id_850f27d2_hoisted_3 = {
  class: "absolute-right flex items-center q-px-sm"
};
const ImageLightboxvue_type_template_id_850f27d2_hoisted_4 = {
  class: "absolute-bottom flex justify-center text-body1 text-primary-100",
  style: {
    "bottom": "65px"
  }
};
const ImageLightboxvue_type_template_id_850f27d2_hoisted_5 = {
  style: {
    "text-shadow": "0 0 10px #000, 0 0 20px #000, 0 0 30px #000,\n              0 0 40px #000, 0 0 50px #000"
  }
};
const _hoisted_6 = {
  class: "absolute-bottom row items-center justify-center q-pa-sm"
};
function ImageLightboxvue_type_template_id_850f27d2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_btn_group = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn-group");
  const _component_vue_easy_lightbox = (0,vue_esm_bundler/* resolveComponent */.up)("vue-easy-lightbox");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_vue_easy_lightbox, {
    imgs: _ctx.imgs,
    index: _ctx.index,
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['dark']: _ctx.dark
    }),
    onOnIndexChange: _ctx.indexChange
  }, {
    "close-btn": (0,vue_esm_bundler/* withCtx */.w5)(({
      close
    }) => [(0,vue_esm_bundler/* createElementVNode */._)("div", ImageLightboxvue_type_template_id_850f27d2_hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button, {
      onClick: close
    }, null, 8, ["onClick"])])]),
    "prev-btn": (0,vue_esm_bundler/* withCtx */.w5)(({
      prev
    }) => [(0,vue_esm_bundler/* createElementVNode */._)("div", ImageLightboxvue_type_template_id_850f27d2_hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      round: "",
      flat: _ctx.dark,
      icon: "icon-chevron-left",
      color: "primary-500",
      class: "hover-text-secondary",
      onClick: prev
    }, null, 8, ["flat", "onClick"])])]),
    "next-btn": (0,vue_esm_bundler/* withCtx */.w5)(({
      next
    }) => [(0,vue_esm_bundler/* createElementVNode */._)("div", ImageLightboxvue_type_template_id_850f27d2_hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      round: "",
      flat: _ctx.dark,
      icon: "icon-chevron-right",
      color: "primary-500",
      class: "hover-text-secondary",
      onClick: next
    }, null, 8, ["flat", "onClick"])])]),
    title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", ImageLightboxvue_type_template_id_850f27d2_hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("span", ImageLightboxvue_type_template_id_850f27d2_hoisted_5, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.imgs[_ctx.currentIndex]?.title), 1)])]),
    toolbar: (0,vue_esm_bundler/* withCtx */.w5)(({
      toolbarMethods
    }) => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn_group, {
      push: "",
      class: "shadows-md"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        icon: "icon-zoom-in",
        color: "primary-500",
        class: "q-pa-sm",
        onClick: toolbarMethods.zoomIn
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
          style: {
            "z-index": "9999"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Zoom In")]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        icon: "icon-zoom-out",
        color: "primary-500",
        class: "q-pa-sm",
        onClick: toolbarMethods.zoomOut
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
          style: {
            "z-index": "9999"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Zoom Out")]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        icon: "icon-scale-01",
        color: "primary-500",
        class: "q-pa-sm",
        onClick: toolbarMethods.resize
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
          style: {
            "z-index": "9999"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Reset Size")]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        icon: "icon-download-02",
        color: "primary-500",
        class: "q-pa-sm",
        onClick: _cache[0] || (_cache[0] = $event => _ctx.$downloadItem(_ctx.imgs[_ctx.currentIndex]?.src, _ctx.imgs[_ctx.currentIndex]?.title ? _ctx.imgs[_ctx.currentIndex]?.title?.includes?.('.') ? _ctx.imgs[_ctx.currentIndex]?.title : `${_ctx.imgs[_ctx.currentIndex]?.title || 'download'}.${_ctx.imgs[_ctx.currentIndex]?.src?.split?.('.')?.pop?.()}` : _ctx.imgs[_ctx.currentIndex]?.src?.split?.('/')?.pop?.()))
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
          style: {
            "z-index": "9999"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Download")]),
          _: 1
        })]),
        _: 1
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        icon: "icon-refresh-ccw-01",
        color: "primary-500",
        class: "q-pa-sm",
        onClick: toolbarMethods.rotateLeft
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
          style: {
            "z-index": "9999"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Rotate Left")]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        icon: "icon-refresh-cw-01",
        color: "primary-500",
        class: "q-pa-sm",
        onClick: toolbarMethods.rotateRight
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, {
          style: {
            "z-index": "9999"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Rotate Right")]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"])]),
      _: 2
    }, 1024)])]),
    _: 1
  }, 8, ["imgs", "index", "class", "onOnIndexChange"]);
}
;// CONCATENATED MODULE: ./src/components/Globals/ImageLightbox.vue?vue&type=template&id=850f27d2

// EXTERNAL MODULE: ./node_modules/vue-easy-lightbox/dist/vue-easy-lightbox.esm.min.js
var vue_easy_lightbox_esm_min = __webpack_require__(33784);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Globals/ImageLightbox.vue?vue&type=script&lang=js


/* harmony default export */ const ImageLightboxvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'ImageLightbox',
  components: {
    VueEasyLightbox: vue_easy_lightbox_esm_min/* default */.Z
  },
  props: {
    imgs: {
      // https://onycat.com/vue-easy-lightbox/guide/#basic-usage-in-sfc
      // Img Url , string or Array of string
      // ImgObj { src: '', title: '', alt: '' }
      // 'src' is required
      // allow mixing
      // imgsRef.value = 'https://i.pravatar.cc/';
      // or
      // imgsRef.value  = {
      //   title: 'this is a placeholder',
      //   src: 'http://via.placeholder.com/350x150'
      // }
      // or
      // imgsRef.value = [
      //   'https://i.pravatar.cc/',
      //   'https://i.pravatar.cc/',
      //   'https://i.pravatar.cc/',
      // ];
      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
    },
    index: {
      type: Number,
      default: 0
    },
    dark: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {
    if (this.index) this.currentIndex = this.index;
  },
  watch: {
    index: {
      async handler(val) {
        this.currentIndex = val;
      }
    }
  },
  methods: {
    indexChange(oldIndex, newIndex) {
      this.currentIndex = newIndex;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Globals/ImageLightbox.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-group/QBtnGroup.js
var QBtnGroup = __webpack_require__(67236);
;// CONCATENATED MODULE: ./src/components/Globals/ImageLightbox.vue




;
const ImageLightbox_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ImageLightboxvue_type_script_lang_js, [['render',ImageLightboxvue_type_template_id_850f27d2_render]])

/* harmony default export */ const ImageLightbox = (ImageLightbox_exports_);
;


runtime_auto_import_default()(ImageLightboxvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z,QBtnGroup: QBtnGroup/* default */.Z});

// EXTERNAL MODULE: ./src/components/Helpers/DynamicButton.vue + 4 modules
var DynamicButton = __webpack_require__(46784);
;// CONCATENATED MODULE: ./src/boot/initialize.js





// Custom Global Component(s)








/* harmony default export */ const initialize = ((0,wrappers/* boot */.xr)(async ({
  app
}) => {
  // Greetings on Console
   true ? functions.greetings.console.dev() : 0;

  // App Config
  AddressbarColor/* default.set */.Z.set(_config/* default.color */.Z.color?.addressbar);

  // Global Properties
  app.config.globalProperties.$config = _config/* default */.Z;
  app.config.globalProperties.$lskeys = _config/* default.localStorageKeys */.Z.localStorageKeys;
  app.config.globalProperties.$getCssVar = get_css_var/* default */.Z;
  app.config.globalProperties.$DEV_MODE = true;
  app.config.globalProperties.$DEV = false;
  app.config.globalProperties.$DEBUG = true;

  // Global Components
  app.component('close-button', CloseButton);
  app.component('tooltip-pro', TooltipPro);
  app.component('dynamic-dialog-confirmation', DynamicDialogConfirmation);
  app.component('external-link', ExternalLink);
  app.component('card-item', CardItem);
  app.component('gm-toggle', GMToggle);
  app.component('image-lightbox', ImageLightbox);
  app.component('dynamic-button', DynamicButton/* default */.Z);
}));


/***/ }),

/***/ 93458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r1": () => (/* reexport */ DynamicQuestions),
  "kE": () => (/* reexport */ Editor),
  "uZ": () => (/* reexport */ Export_Task_Project),
  "GU": () => (/* reexport */ FileUploader),
  "Sf": () => (/* reexport */ GeoPermission),
  "h2": () => (/* reexport */ Helpers),
  "Tt": () => (/* reexport */ RequestOptions)
});

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./src/mixins/FileUploader.js




/* harmony default export */ const FileUploader = ({
  data() {
    return {
      getFileTypeIcon: functions.getFileTypeIcon,
      checkFileExtensions: functions.checkFileExtensions
    };
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['deleteFile']),
    addUploadToModel(modelVar, modelId, files, uploaderRef, callback) {
      if (!this[modelVar]) {
        console.error('Model var is missing');
        return;
      }
      if (!this?.[modelVar]?.[modelId]) {
        this[modelVar][modelId] = {
          files: [],
          removeFileById: id => this.removeUploadToModel(modelVar, modelId, id, uploaderRef)
        };
      }
      this[modelVar][modelId].files = this[modelVar][modelId].files.concat(files);
      if (typeof callback === 'function') callback({
        modelVar,
        modelId,
        files,
        uploaderRef,
        callback
      });
    },
    removeUploadToModel(modelVar, modelId, fileId, uploaderRef) {
      if (!this[modelVar]) {
        console.error('Model var is missing');
        return;
      }
      if (!this?.[modelVar]?.[modelId]?.files?.length) return;
      if (isNaN(fileId)) fileId = this[modelVar][modelId].files.findIndex(e => e.__key === fileId);
      if (fileId === -1) fileId = this[modelVar][modelId].files.findIndex(e => e.name === fileId);
      const modelRef = this[modelVar][modelId];
      const file = modelRef?.files[fileId];
      modelRef?.files.splice?.(fileId, 1);
      if (file) {
        modelRef.removedFile = file;
        this.$refs[uploaderRef]?.removeFile?.(file);
      }
    },
    onRejected(rejectedEntries) {
      rejectedEntries.filter(e => e.failedPropValidation === 'duplicate').forEach(info => {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: `Duplicate entry for ${info.file.name || 'selected file'}.`
        });
      });
      const maxFiles = rejectedEntries.filter(e => e.failedPropValidation === 'max-files');
      if (maxFiles.length) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: `File${maxFiles?.length > 1 ? 's' : ''} ignored. Already exceeds the maximum number of files allowed!`,
          caption: `Failed: [${maxFiles.map(e => e.file.name).join(', ')}]`
        });
      }
      const maxFileSize = rejectedEntries.filter(e => e.failedPropValidation === 'max-file-size');
      if (maxFileSize.length) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: `File${maxFileSize?.length > 1 ? 's' : ''} exceeds the maximum file size allowed.`,
          caption: `Failed: [${maxFileSize.map(e => e.file.name).join(', ')}]`
        });
      }
      const maxTotalSize = rejectedEntries.filter(e => e.failedPropValidation === 'max-total-size');
      if (maxTotalSize.length) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: `File${maxTotalSize?.length > 1 ? 's' : ''} ignored. Already exceeds the maximum total file size allowed!`,
          caption: `Failed: [${maxTotalSize.map(e => e.file.name).join(', ')}]`
        });
      }
      const filtered = rejectedEntries.filter(e => !/(max-total-size|max-file-size|max-files|duplicate)/.test(e.failedPropValidation));
      if (filtered.length) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: `File${filtered?.length > 1 ? 's' : ''} did not pass validation constraints!`,
          caption: `Failed: [${filtered.map(e => e.file.name).join(', ')}]`
        });
      }
    },
    async deleteAction(file) {
      if (!file.id && !file.name) return;
      const response = await this.deleteFile(file.id);
      if (!response?.success) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: `Error while deleting ${file.name}.`
        });
        return false;
      }
      return true;
    },
    factoryFnAutoUpload(uploads, url = 'tmp', fieldName = 'uploads[]') {
      return new Promise((resolve, reject) => {
        const token = fn_store/* default.getAuth */.Z.getAuth();
        resolve({
          method: 'POST',
          fieldName: fieldName,
          url: url == 'tmp' ? `${this.$config?.api?.baseURL}/file/temp` : url,
          headers: [{
            name: 'Authorization',
            value: `Bearer ${token}`
          }],
          withCredentials: false
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/mixins/Editor.js
/* harmony default export */ const Editor = ({
  methods: {
    /**
     * Capture the <CTL-V> paste event, only allow plain-text, no images.
     * See: https://stackoverflow.com/a/28213320
     * @param {ClipboardEvent} evt on paste ClipboardEvent
     * @param {Object} editorRef vue ref
     */
    pastePlainText(evt, editorRef) {
      // Let inputs do their thing, so we don't break pasting of links.
      if (evt.target.nodeName === 'INPUT') return;
      evt.preventDefault();
      evt.stopPropagation();
      if (!editorRef?.runCmd) return;
      let text, onPasteStripFormattingIEPaste;
      if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
        text = evt.originalEvent.clipboardData.getData('text/plain');
        editorRef.runCmd('insertText', text);
      } else if (evt.clipboardData && evt.clipboardData.getData) {
        text = evt.clipboardData.getData('text/plain');
        editorRef.runCmd('insertText', text);
      } else if (window.clipboardData && window.clipboardData.getData) {
        if (!onPasteStripFormattingIEPaste) {
          onPasteStripFormattingIEPaste = true;
          editorRef.runCmd('ms-pasteTextOnly', text);
        }
        onPasteStripFormattingIEPaste = false;
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__(5917);
// EXTERNAL MODULE: ./node_modules/html2pdf.js/dist/html2pdf.js
var html2pdf = __webpack_require__(93129);
var html2pdf_default = /*#__PURE__*/__webpack_require__.n(html2pdf);
;// CONCATENATED MODULE: ./src/mixins/Export_Task_Project.js



/* harmony default export */ const Export_Task_Project = ({
  data() {
    return {
      convertingPDF: false
    };
  },
  watch: {
    convertingPDF: {
      async handler(val) {
        if (val) LoadingBar/* default.start */.Z.start();else LoadingBar/* default.stop */.Z.stop();
      }
    }
  },
  methods: {
    async exportToPDF(filename, ids, withFooter) {
      this.convertingPDF = true;
      const notif = this.$q.notify({
        group: false,
        // required to be updatable
        spinner: true,
        progress: false,
        message: 'Generating PDF Document',
        timeout: 0
      });
      let percentage = 10;
      const interval = setInterval(() => {
        percentage = Math.min(99, percentage + Math.floor(Math.random() * 45));
        notif({
          caption: `Processing... ${percentage}%`
        });
        if (percentage === 99) {
          notif({
            message: 'Finalizing PDF',
            caption: undefined
          });
          clearInterval(interval);
        }
      }, 500);
      const element = await this.generateElement4PDF(ids, withFooter);
      this.convertNow(element, filename).then(status => {
        // Notify PDF Status
        notif({
          message: status ? 'PDF Generated' : 'Failed Generating PDF',
          icon: status ? 'icon-check-circle-broken' : 'icon-alert-triangle',
          iconColor: status ? 'secondary' : 'negative',
          spinner: false,
          caption: undefined,
          timeout: 1500
        });
      }).finally(() => {
        // Disable processing status
        this.convertingPDF = false;
        // Clear Interval
        clearInterval(interval);
      });
    },
    async generateElement4PDF(ids, withFooter = false) {
      const element = document.createElement('div');
      console.log(ids);
      for (const id of ids) {
        let el = document.getElementById(id);
        if (!el) continue;
        el = el.cloneNode(true);
        const images = el.querySelectorAll('img');
        // Replace all images with base64
        for (const e of images) {
          let newSrc = await (0,functions.getImageStringFromURL)(e.src, false);
          e.src = newSrc;
        }

        // Remove all q-video; only add video url
        const vid_wrapper = el.querySelectorAll('.q-video');
        for (const vid of vid_wrapper) {
          let video_link = document.createElement('a');
          const vid_src = vid.querySelector('iframe')?.src;
          video_link.append(vid_src);
          video_link.href = vid_src;
          vid.remove();
          el.append(video_link);
        }
        element.append(el);
      }

      // Footer Section
      if (withFooter) {
        const footer = document.createElement('div');
        footer.classList.add('full-width', 'text-center', 'text-caption', 'color-body2', 'font-thin', 'letter-space-normal', 'q-pt-xl');
        footer.append('© ' + date.formatDate(this.$root.realtimeDate || Date.now(), 'MMMM DD, YYYY - HH:mm:ss'));
        element.append(footer);
      }
      return element;
    },
    async convertNow(element, filename) {
      filename = `${filename || 'Output'}.pdf`.replaceAll(' ', '_');
      return await html2pdf_default()().set({
        filename,
        ...this.$config.default?.html2pdf
      }).from(element).to('pdf').save().then(() => {
        return true;
      }).catch(() => {
        return false;
      });
    }
  }
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__(75103);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/copy-to-clipboard.js
var copy_to_clipboard = __webpack_require__(65054);
;// CONCATENATED MODULE: ./src/mixins/Helpers.js

/* harmony default export */ const Helpers = ({
  methods: {
    copyToClipboard(stringVal, message, icon = 'icon-check-circle-broken', notifyOptions = {}) {
      if (!stringVal || !message) return;
      (0,copy_to_clipboard/* default */.Z)(stringVal).then(() => {
        this.$q.notify({
          icon,
          message,
          ...notifyOptions
        });
      });
    },
    isColorDark(colorVal) {
      return colorVal ? colors["default"].brightness?.(colorVal) < 128 : false;
    },
    convertToKey(dirtyString) {
      return (dirtyString || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s/g, '_');
    }
  }
});
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./src/mixins/GeoPermission.js



/* harmony default export */ const GeoPermission = ({
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['geolocation'])
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getIp']),
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['updateGeoInformation']),
    async getIpInformation() {
      this.getIp('json').then(info => {
        this.updateGeoInformation(info, {
          merge: true
        });
      });
    },
    async askGeoPermission() {
      // Get Geo Information
      navigator.geolocation.getCurrentPosition(this.onGeoAllowed, this.onGeoError);
    },
    onGeoAllowed(info) {
      console.info('Geo Location Allowed', info);
      this.updateGeoInformation(info, {
        merge: true
      });
    },
    onGeoError(err) {
      console.error(`Geo Location ERROR(${err.code}): ${err.message}`);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
;// CONCATENATED MODULE: ./src/mixins/RequestOptions.js


/* harmony default export */ const RequestOptions = ({
  methods: {
    formatDynamicAnswersPayload(payload) {
      if (!payload?.dynamic_questions) return payload;
      const dynamic_questions = (0,functions.objectCopy)(payload.dynamic_questions);
      for (const id of Object.keys(dynamic_questions)) {
        let val1 = dynamic_questions[id].value;
        let val2 = dynamic_questions[id].alternative_answer;
        dynamic_questions[id].value = this.requestOptionParseOrCleanUp(val1);
        dynamic_questions[id].alternative_answer = this.requestOptionParseOrCleanUp(val2);
      }
      return {
        ...payload,
        dynamic_questions
      };
    },
    requestOptionParseOrCleanUpString(val) {
      var res = val;
      if (typeof val === 'string') {
        try {
          res = JSON.parse(val);
        } catch (e) {
          res = (0,functions.cleanMarkup)(val);
        }
      }
      return res;
    },
    requestOptionParseOrCleanUp(val) {
      if (!Array.isArray(val)) return this.requestOptionParseOrCleanUpString(val);
      let model = [];
      for (const v of val) {
        model.push(this.requestOptionParseOrCleanUpString(v));
      }
      return model;
    }
  }
});
;// CONCATENATED MODULE: ./src/mixins/DynamicQuestions.js
/* harmony default export */ const DynamicQuestions = ({
  methods: {
    /**
     * @param {Object} question - the question object
     * @returns {Object} users answer
     */
    formatDynamicAnswer(question) {
      let answer = {
        value: '',
        alternative_answer: ''
      };
      // Answer
      switch (question.type) {
        case 'url':
        case 'phone':
        case 'textarea1':
        case 'textarea2':
        case 'textfield':
        case 'select_brand':
        case 'video_walkthrough':
        case 'upload_single':
        case 'select_tasktype':
        case 'select_projecttype':
        case 'select_taskcategory':
        case 'select_projectcategory':
          answer.value = '';
          break;
        case 'select_multiple':
        case 'checkbox':
        case 'upload_multiple':
          answer.value = [];
          break;
        case 'radio':
        case 'select_platform':
          answer.value = {};
          break;
        case 'website_content':
          answer.value = {
            info: '',
            uploads: []
          };
          break;
        default:
          break;
      }
      // Alternative Answer
      switch (question.alternative_type) {
        case 'url':
        case 'phone':
        case 'textarea1':
        case 'textarea2':
        case 'textfield':
        case 'select_brand':
        case 'video_walkthrough':
        case 'upload_single':
        case 'select_tasktype':
        case 'select_projecttype':
        case 'select_taskcategory':
        case 'select_projectcategory':
          answer.alternative_answer = '';
          break;
        case 'select_multiple':
        case 'checkbox':
        case 'upload_multiple':
          answer.alternative_answer = [];
          break;
        case 'radio':
        case 'select_platform':
          answer.alternative_answer = {};
          break;
        case 'website_content':
          answer.alternative_answer = {
            info: '',
            uploads: []
          };
          break;
        default:
          break;
      }
      return answer;
    }
  }
});
;// CONCATENATED MODULE: ./src/mixins/index.js









/***/ }),

/***/ 85487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_assets_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45808);
/* harmony import */ var quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63703);
/* harmony import */ var src_assets_scripts_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1966);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Add LocalStorage Authorization
   */
  addAuth: token => {
    quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(src_assets_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.localStorageKeys?.auth, token);
  },
  /**
   * Get LocalStorage Authorization
   */
  getAuth: () => {
    return quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getItem */ .Z.getItem(src_assets_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.localStorageKeys?.auth);
  },
  /**
   * Remove LocalStorage Authorization
   */
  removeAuth: () => {
    quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].remove */ .Z.remove(src_assets_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.localStorageKeys?.auth);
  },
  addAPICache: (url_path_key, json_data) => {
    try {
      const key = src_assets_scripts_functions__WEBPACK_IMPORTED_MODULE_2__.base64.encode(url_path_key);
      const data = JSON.stringify(json_data);
      quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(key, data);
      if (true) console.info('Data has been Cached:', url_path_key, json_data);
      return true;
    } catch (e) {
      if (true) console.error(e);
      return false;
    }
  },
  getAPICache: url_path_key => {
    try {
      const key = src_assets_scripts_functions__WEBPACK_IMPORTED_MODULE_2__.base64.encode(url_path_key);
      const response = JSON.parse(quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getItem */ .Z.getItem(key));
      if (true) console.info('Data from Cache:', url_path_key, response);
      return response;
    } catch (e) {
      if (true) console.error(e);
      return null;
    }
  },
  getAPIHost: () => {
    return quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getItem */ .Z.getItem(src_assets_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.localStorageKeys.api_host);
  },
  setAPIHost: api_host => {
    return quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].set */ .Z.set(src_assets_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.localStorageKeys.api_host, api_host);
  },
  removeAPIHost: () => {
    return quasar_src_plugins_LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].remove */ .Z.remove(src_assets_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?.localStorageKeys.api_host);
  }
});

/***/ }),

/***/ 51976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ helpers)
});

// NAMESPACE OBJECT: ./src/stores/helpers/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  "allCurrency": () => (allCurrency),
  "areaCodes": () => (areaCodes),
  "countries": () => (countries),
  "greetingsMessage": () => (greetingsMessage)
});

// NAMESPACE OBJECT: ./src/stores/helpers/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "checkIfOnline": () => (checkIfOnline),
  "deleteFile": () => (deleteFile),
  "formatMediaPlatformIconSrc": () => (formatMediaPlatformIconSrc),
  "getCountryFlag": () => (getCountryFlag),
  "getCountryInfo": () => (getCountryInfo),
  "getCurrency": () => (getCurrency),
  "getEmployeeCount": () => (getEmployeeCount),
  "getFiles": () => (getFiles),
  "getGoogleFonts": () => (getGoogleFonts),
  "getIp": () => (getIp),
  "getSingleFile": () => (getSingleFile),
  "getSocialInfo": () => (getSocialInfo),
  "getSocialMediaPlatforms": () => (getSocialMediaPlatforms),
  "isReachable": () => (isReachable),
  "renameFile": () => (renameFile),
  "uploadFile": () => (uploadFile)
});

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
// EXTERNAL MODULE: ./node_modules/per-country/index.js
var per_country = __webpack_require__(35549);
;// CONCATENATED MODULE: ./src/stores/helpers/state.js


/* harmony default export */ function state() {
  return {
    isOnline: navigator.onLine,
    messagesDialogs: (0,vue_esm_bundler/* reactive */.qj)({
      requestUpgrade: {
        cancel: false,
        messageTitle: 'Thank you. We have received your request to change your plan.',
        messageDescription: 'We will notify you as soon as your plan changed (usually within 24 hours).'
      },
      editingUnsaved: {
        okText: 'Yes',
        cancelText: 'Back to Edit',
        messageTitle: "Your changes haven't been saved, do you want to discard them?"
      },
      confirmLogout: {
        okText: 'Log Out',
        messageTitle: 'Are you sure you want to logout of your account?'
      },
      confirmDelete: {
        icon: 'icon-trash-01',
        // iconColor: 'negative',
        // iconBgColor: 'red-1',
        okText: 'Delete',
        messageTitle: 'Confirm to delete file?'
        // suggestAlternative: true,
      }
    }),

    greetings: (0,vue_esm_bundler/* reactive */.qj)({
      morning: 'Good Morning',
      afternoon: 'Good Afternoon',
      evening: 'Good Evening'
    }),
    employeeCount: (0,vue_esm_bundler/* reactive */.qj)({}),
    socialMedia: (0,vue_esm_bundler/* reactive */.qj)({}),
    allCountries: (0,vue_esm_bundler/* reactive */.qj)(per_country.countries)
  };
}
;// CONCATENATED MODULE: ./src/stores/helpers/getters.js
function greetingsMessage() {
  const {
    date
  } = __webpack_require__(59066);
  let greet = '';
  let tdf = new Date();
  let tdt = new Date();
  if (date.isBetweenDates(new Date(), tdf.setHours(4, 59, 59, 99), tdt.setHours(12, 0, 0, 0))) {
    // Good Morning
    greet = this.greetings?.morning;
  } else if (date.isBetweenDates(new Date(), tdf.setHours(11, 59, 59, 99), tdt.setHours(16, 59, 59, 99))) {
    // Good Afternoon
    greet = this.greetings?.afternoon;
  } else if (date.isBetweenDates(new Date(), tdf.setHours(16, 59, 59, 99), tdt.setHours(23, 59, 59, 99)) || date.isBetweenDates(new Date(), date.subtractFromDate(tdf.setHours(16, 59, 59, 99), {
    days: 1
  }), tdt.setHours(5, 0, 0, 0))) {
    // Good Evening
    greet = this.greetings?.evening;
  }
  return greet || 'Howeday';
}
function countries(state) {
  return state.allCountries.map(e => e.name);
}
function areaCodes(state) {
  let res = {};
  state.allCountries.forEach(e => {
    res[e.dialling_code] = {
      name: e.name,
      label: e.code,
      value: e.dialling_code
    };
  });
  return res;
}
function allCurrency() {
  return this.allCountries.map(e => e.currency.code);
}

// EXTERNAL MODULE: ./src/boot/apis.js
var apis = __webpack_require__(18744);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var stores_user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./src/stores/helpers/actions.js




// Application Methods
async function getIp(format, ip, key) {
  let url = `https://ipapi.co/${ip || format || 'json'}/${key || ''}`;
  return await apis.api.get(url).then(res => {
    const data = res.data;
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    return cache_data || e;
  });
}
function isReachable(url = "https://api.growmodo.dev/api") {
  return fetch(url, {
    method: 'HEAD',
    mode: 'no-cors'
  }).then(resp => {
    if (true) console.info('[conn test result]:', resp);
    return resp && (resp.ok || resp.type === 'opaque');
  }).catch(err => {
    if (true) console.warn('[conn test failure]:', err);
    return false;
  });
}
async function checkIfOnline() {
  if (!navigator.onLine) {
    this.isOnline = false;
    return false;
  } else {
    return await this.isReachable().then(e => {
      this.isOnline = e;
      return e;
    }).catch(err => {
      if (true) console.error(err);
      this.isOnline = false;
      return false;
    });
  }
}
// End of Application Method

async function getSocialMediaPlatforms() {
  const url = '/miscs/social-platforms';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data?.data) this.socialMedia = data?.data;
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data?.data) this.socialMedia = cache_data?.data;
    return cache_data || e;
  });
}
function formatMediaPlatformIconSrc(mediaPlatform) {
  return `icon-social-${this.getSocialInfo(mediaPlatform)?.icon || mediaPlatform}`;
}
function getSocialInfo(mediaPlatform) {
  if (!mediaPlatform) return;
  return this.socialMedia[mediaPlatform];
}
function getCountryFlag(country) {
  return `${apis.cdn.baseURL}${apis.cdn.country_flags}/${country}`;
}
function getCountryInfo(country) {
  return this.allCountries.filter(e => e.code === country || e.name === country)[0];
}
function getCurrency(currency_code = 'USD') {
  let country = this.allCountries.filter(e => e.currency.code === currency_code);
  if (!country || !country?.length) return '';
  return country[0]?.currency;
}
async function getEmployeeCount() {
  const url = '/miscs/employee-counts';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data?.data) {
      for (const emp_cnt of data.data) {
        this.employeeCount[emp_cnt.id] = emp_cnt;
      }
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data?.data) {
      for (const emp_cnt of cache_data.data) {
        this.employeeCount[emp_cnt.id] = emp_cnt;
      }
    }
    return cache_data || e;
  });
}
async function deleteFile(uploadId) {
  if (!uploadId) return;
  const url = `/file/${uploadId}`;
  return await apis.api["delete"](url).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}
async function getSingleFile(fileId, cache_first = false) {
  const url = `/file/${fileId}`;
  let cache_data;
  if (cache_first) {
    cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data?.success) return cache_data;
  }
  return await apis.api.get(url).then(res => {
    const data = res.data;
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    return cache_data || e;
  });
}
async function getFiles(payload = {
  sort: 'desc'
}, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/files/organizations/${orgId}`;
  return await apis.api.get(url, {
    params: payload
  }).then(res => {
    const data = res.data;
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    return cache_data || e;
  });
}
async function uploadFile(payload, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/file/organizations/${orgId}`;
  return await apis.api.post(url, payload).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}
async function renameFile(fileId, newFileName) {
  const url = `/file/${fileId}/update-name`;
  return await apis.api.put(url, {
    name: newFileName
  }).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}
async function getGoogleFonts(sort, preferCache) {
  const url = `mirror/googlefonts${sort ? '?sort=' + sort : ''}`;
  const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
  if (preferCache) {
    if (cache_data?.success) return cache_data;
  }
  return await apis.api.get(url).then(res => {
    const data = res.data;
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    return cache_data || e;
  });
}

;// CONCATENATED MODULE: ./src/stores/helpers/index.js




/* harmony default export */ const helpers = ((0,pinia/* defineStore */.Q_)('useHelpers', {
  state: state,
  getters: getters_namespaceObject,
  actions: {
    ...actions_namespaceObject
  }
}));

/***/ }),

/***/ 33701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ user)
});

// NAMESPACE OBJECT: ./src/stores/user/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  "currentUserIsNotVerified": () => (currentUserIsNotVerified),
  "selectedOrg": () => (selectedOrg),
  "selectedOrgAccountPending": () => (selectedOrgAccountPending),
  "selectedOrgBrands": () => (selectedOrgBrands),
  "selectedOrgFiles": () => (selectedOrgFiles),
  "selectedOrgIsActive": () => (selectedOrgIsActive),
  "selectedOrgIsCancelled": () => (selectedOrgIsCancelled),
  "selectedOrgIsMaintenance": () => (selectedOrgIsMaintenance),
  "selectedOrgIsPaused": () => (selectedOrgIsPaused),
  "selectedOrgProjects": () => (selectedOrgProjects),
  "selectedOrgStatus": () => (selectedOrgStatus),
  "selectedOrgSubscription": () => (selectedOrgSubscription),
  "selectedOrgTasks": () => (selectedOrgTasks),
  "selectedOrgUsers": () => (selectedOrgUsers),
  "subscriptionDaysLength": () => (subscriptionDaysLength),
  "subscriptionDaysLengthWithPause": () => (subscriptionDaysLengthWithPause),
  "subscriptionPauseDaysLength": () => (subscriptionPauseDaysLength)
});

// NAMESPACE OBJECT: ./src/stores/user/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "acceptInvitation": () => (acceptInvitation),
  "addBrandFile": () => (addBrandFile),
  "addOrgBrand": () => (addOrgBrand),
  "addOrgFiles": () => (addOrgFiles),
  "addOrgUser": () => (addOrgUser),
  "afterLogin": () => (afterLogin),
  "archiveOrgBrand": () => (archiveOrgBrand),
  "cancelSubscription": () => (cancelSubscription),
  "createBrand": () => (createBrand),
  "deleteOrgBrand": () => (deleteOrgBrand),
  "deleteOrgFiles": () => (deleteOrgFiles),
  "deleteOrgUser": () => (deleteOrgUser),
  "getBrandUploadedAssets": () => (getBrandUploadedAssets),
  "getOrgBrands": () => (getOrgBrands),
  "getOrgUsers": () => (getOrgUsers),
  "getPusherAuth": () => (getPusherAuth),
  "getSingleBrand": () => (getSingleBrand),
  "getUserRole": () => (getUserRole),
  "isEmailVerified": () => (isEmailVerified),
  "isOrgAdmin": () => (isOrgAdmin),
  "isOrgBiller": () => (isOrgBiller),
  "isOrgEmployee": () => (isOrgEmployee),
  "isOrgOwner": () => (isOrgOwner),
  "loginWithPassword": () => (loginWithPassword),
  "loginWithPaymentToken": () => (loginWithPaymentToken),
  "loginWithToken": () => (loginWithToken),
  "logout": () => (logout),
  "onSignupStep": () => (onSignupStep),
  "onboardUser": () => (onboardUser),
  "pauseSubscription": () => (pauseSubscription),
  "removeBrandFile": () => (removeBrandFile),
  "removeFromOrgBrandState": () => (removeFromOrgBrandState),
  "requestSubscriptionChange": () => (requestSubscriptionChange),
  "resendEmailInvitation": () => (resendEmailInvitation),
  "restoreArchiveOrgBrand": () => (restoreArchiveOrgBrand),
  "resumeSubscription": () => (resumeSubscription),
  "searchUserInfo": () => (searchUserInfo),
  "signupResendEmailVerify": () => (signupResendEmailVerify),
  "signupStep1": () => (signupStep1),
  "signupStep2": () => (signupStep2),
  "signupStep3": () => (signupStep3),
  "signupVerifyEmail": () => (signupVerifyEmail),
  "subscriptionIsExpired": () => (subscriptionIsExpired),
  "subscriptionRemaining": () => (subscriptionRemaining),
  "switchToMaintenancePlan": () => (switchToMaintenancePlan),
  "updateAccount": () => (updateAccount),
  "updateBrand": () => (updateBrand),
  "updateBrandAvatar": () => (updateBrandAvatar),
  "updateBrandColors": () => (updateBrandColors),
  "updateBrandFiles": () => (updateBrandFiles),
  "updateBrandGoogleFonts": () => (updateBrandGoogleFonts),
  "updateBrandSocial": () => (updateBrandSocial),
  "updateGeoInformation": () => (updateGeoInformation),
  "updateOrgBrand": () => (updateOrgBrand),
  "updateOrgFiles": () => (updateOrgFiles),
  "updateOrgUser": () => (updateOrgUser),
  "updateOrganization": () => (updateOrganization),
  "updatePassword": () => (updatePassword)
});

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./src/stores/user/state.js

/* harmony default export */ function state() {
  return {
    /**
     * Users Geolocation
     */
    geolocation: (0,vue_esm_bundler/* reactive */.qj)({}),
    /**
     * Active Organization
     */
    activeOrgID: 0,
    /**
     * User Information
     */
    user: (0,vue_esm_bundler/* reactive */.qj)({}),
    /**
     * Organizations
     */
    organizations: (0,vue_esm_bundler/* reactive */.qj)({}),
    /**
     * Brands per Organization
     */
    organizationBrands: (0,vue_esm_bundler/* reactive */.qj)({}),
    organizationUsers: (0,vue_esm_bundler/* reactive */.qj)({}),
    organizationFiles: (0,vue_esm_bundler/* reactive */.qj)({}),
    organizationProjects: (0,vue_esm_bundler/* reactive */.qj)({}),
    organizationTasks: (0,vue_esm_bundler/* reactive */.qj)({})
  };
}
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__(54170);
;// CONCATENATED MODULE: ./src/stores/user/getters.js

function selectedOrg() {
  return this.activeOrgID ? this.organizations[this.activeOrgID] || {} : this.organizations;
}
function selectedOrgSubscription() {
  return this.selectedOrg?.subscriptions || {};
}
function selectedOrgStatus() {
  return this.selectedOrgSubscription?.status;
}
function selectedOrgIsMaintenance() {
  return !this.selectedOrgIsCancelled && this.selectedOrgSubscription?.is_maintenance === true;
}
function selectedOrgIsPaused() {
  return this.selectedOrgStatus === 'paused';
}
function selectedOrgIsActive() {
  return this.selectedOrgStatus === 'active';
}
function selectedOrgIsCancelled() {
  return this.selectedOrgStatus === 'cancelled';
}
function selectedOrgAccountPending() {
  if (!this.user?.id || !this.activeOrgID) return false;
  const onSignup = this.onSignupStep(this.user.signup_step);
  return !this.selectedOrgIsActive && !this.selectedOrgIsCancelled && !onSignup && this.selectedOrgStatus === 'pending';
}
function selectedOrgUsers() {
  if (!this.selectedOrg?.id) return {};
  const users = this.organizationUsers?.[this.selectedOrg?.id];
  return {
    ...users,
    [this.user.id]: {
      id: this.user.id,
      username: this.user?.username,
      firstname: this.user?.firstname,
      lastname: this.user?.lastname,
      email: this.user?.email,
      role: this.user?.roles?.[0]
    }
  };
}
function selectedOrgBrands() {
  if (!this.selectedOrg?.id) return {};
  return this.organizationBrands?.[this.selectedOrg?.id] || {};
}
function selectedOrgFiles() {
  if (!this.selectedOrg?.id) return {};
  return this.organizationFiles?.[this.selectedOrg?.id] || {};
}
function selectedOrgProjects() {
  if (!this.selectedOrg?.id) return {};
  return this.organizationProjects?.[this.selectedOrg?.id] || {};
}
function selectedOrgTasks() {
  if (!this.selectedOrg?.id) return {};
  return this.organizationTasks?.[this.selectedOrg?.id] || {};
}

// Subscription
function subscriptionDaysLength() {
  const subscription_end = this.selectedOrg?.subscriptions?.subscription_end;
  const subscription_renewed = this.selectedOrg?.subscriptions?.subscription_renewed;
  const daysLength = date/* default.getDateDiff */.ZP.getDateDiff(subscription_end, subscription_renewed, 'days') || 0;
  return daysLength;
}
function subscriptionDaysLengthWithPause() {
  const duration = this.selectedOrgSubscription.pause_on?.toLowerCase()?.split(' ');
  const days = !duration ? 0 : duration[1] === 'month' || duration[1] === 'months' ? 30 * duration[0] : 7 * duration[0];
  return this.subscriptionDaysLength + days;
}
function subscriptionPauseDaysLength() {
  return this.subscriptionDaysLengtWithPause - this.subscriptionDaysLength;
}
function currentUserIsNotVerified() {
  if (!this.user.id) return false;
  return this.user.email_verified_at ? false : true;
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(86890);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./src/boot/apis.js
var apis = __webpack_require__(18744);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./src/stores/user/actions.js





function updateGeoInformation(data, {
  key,
  merge = false
}) {
  if (merge) {
    this.geolocation = {
      ...this.geolocation,
      ...data
    };
  } else if (key) {
    this.geolocation[key] = data;
  } else {
    this.geolocation = data;
  }
}
function afterLogin(data, token) {
  if (!data) return;
  const user = data.data?.user || data?.user || {};
  const currentUserIsNotVerified = this.currentUserIsNotVerified;
  const onSignup = this.onSignupStep(user.signup_step);
  this.user = user;
  this.user.token = token;
  const organization = data.data?.organization || [];
  for (const org of organization) {
    // Set as Current Active Org
    this.activeOrgID = org.id;
    // Add Org info
    this.organizations[org.id] = org;
    // Add Org brands
    if (typeof this.organizationBrands[org.id] !== 'object') this.organizationBrands[org.id] = {};
    if (org.brands && org.brands?.length) {
      org.brands.forEach(brand => {
        // Add Org brands
        this.organizationBrands[org.id][brand.id] = brand;
      });
    }
    delete this.organizations[org.id].brands;
  }
  // Validate If User is Ready
  if (this.selectedOrgIsCancelled) {
    this.router.replace({
      path: '/signup',
      query: {
        email: user.email,
        status: 'subscription_cancelled'
      }
    });
    fn_store/* default.removeAuth */.Z.removeAuth();
    if (true) console.log('Account is Cancelled');
  } else if (this.subscriptionIsExpired()) {
    this.router.replace({
      path: '/signup',
      query: {
        email: user.email,
        status: 'subscription_expired'
      }
    });
    fn_store/* default.removeAuth */.Z.removeAuth();
    if (true) console.log('Subscription is Expired');
  } else if (onSignup) {
    const query = {
      verify_email: user.email
    };
    if (onSignup && !isNaN(onSignup)) {
      query.step = onSignup;
    } else if (onSignup === 'verify-email') {
      query.status = 'unverified_email';
    }
    this.router.replace({
      path: '/signup',
      query
    });
    fn_store/* default.removeAuth */.Z.removeAuth();
    if (true) console.log('Singup Incomplete. Step:', onSignup);
  } else if (this.selectedOrgAccountPending) {
    this.router.replace({
      path: '/signup',
      query: {
        email: user.email,
        status: 'subscription_account_pending'
      }
    });
    fn_store/* default.removeAuth */.Z.removeAuth();
    if (true) console.log('Account is Pending');
  } else if (currentUserIsNotVerified) {
    this.router.replace({
      path: '/signup',
      query: {
        email: user.email,
        status: 'email_not_verified'
      }
    });
    fn_store/* default.removeAuth */.Z.removeAuth();
    if (true) console.log('Email is Not Verified');
  } else {
    // Add Auth if User has Verified Email
    if (token) fn_store/* default.addAuth */.Z.addAuth(token);
  }
}
function isEmailVerified(response) {
  const user = response.data?.user || {};
  if (user.email_verified_at
  // && this.onSignupStep(user.signup_step) === 'verify-email'
  ) {
    return true;
  } else return false;
}
function onSignupStep(signup_step) {
  if (signup_step === 'step_2') {
    return 2;
  } else if (signup_step === 'step_3') {
    return 3;
  } else if (signup_step === 'verify-email') {
    return 'verify-email';
  } else return 0;
}

// Start of Signup
async function signupStep1(payload) {
  return await apis.api.post('/signup', payload).then(res => {
    const data = res.data;
    let token = data.data?.token;
    if (data?.success && token) this.afterLogin({
      user: data.data
    }, token);
    return data;
  }).catch(e => {
    return e;
  });
}
async function signupStep2(payload, token) {
  return await apis.api.post('/signup/step2', payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    const data = res.data;
    if (data?.success) this.afterLogin(data, token);
    return data;
  }).catch(e => {
    return e;
  });
}
async function signupStep3(payload, token) {
  return await apis.api.post('/signup/step3', payload, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    const data = res.data;
    if (data?.success) this.afterLogin(data, token);
    return data;
  }).catch(e => {
    return e;
  });
}
async function signupVerifyEmail(signup_token) {
  return await apis.api.post('/signup/verify-email', {
    signup_token
  }).then(res => {
    const data = res.data;
    let token = data.data?.token;
    if (data?.success && token) this.afterLogin(data, token);
    return data;
  }).catch(e => {
    return e;
  });
}
async function signupResendEmailVerify(email) {
  return await apis.api.post('/signup/resend-email-verify', {
    email
  }).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}
// End of Signup

async function loginWithPassword(payload) {
  return await apis.api.post('/login', payload).then(res => {
    const data = res.data;
    let token = data?.data?.token;
    if (data?.success && token) this.afterLogin(data, token);
    return data;
  }).catch(e => {
    return e;
  });
}
async function loginWithToken(custom_token) {
  if (!custom_token) custom_token = fn_store/* default.getAuth */.Z.getAuth();
  const options = {
    headers: {
      Authorization: custom_token
    }
  };
  const url = '/me';
  return await apis.api.get(url, options).then(res => {
    const data = res.data;
    let token = custom_token ? custom_token : fn_store/* default.getAuth */.Z.getAuth();
    if (data?.success) this.afterLogin(data, token);
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    let token = custom_token ? custom_token : fn_store/* default.getAuth */.Z.getAuth();
    if (cache_data?.success) this.afterLogin(cache_data, token);
    return cache_data || e;
  });
}
async function loginWithPaymentToken(payment_token) {
  const url = '/login-token';
  return await apis.api.post(url, {
    payment_token
  }).then(res => {
    const data = res.data;
    let token = data?.data?.token;
    if (data?.success && token) this.afterLogin(data, token);
    return data;
  }).catch(e => {
    return e;
  });
}
async function logout(path = '/auth') {
  return await apis.api.post('/logout').then(res => {
    const data = res.data;
    if (data?.success) {
      fn_store/* default.removeAuth */.Z.removeAuth();
      window.location.href = path;
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function updateAccount(payload) {
  return await apis.api.post('/account/edit', payload).then(res => {
    const data = res.data;
    let userInfo = data.data;
    if ((0,functions.checkIfObject)(userInfo)) {
      Object.keys(userInfo).forEach(k => {
        this.user[k] = userInfo[k];
      });
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function updatePassword(payload) {
  return await apis.api.post('/update-password', payload).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}

// Invitation
async function resendEmailInvitation(email) {
  return await apis.api.post('/organization/users/resend-invitation', {
    email
  }, {
    headers: {
      Authorization: `Bearer ${this.user.token}`
    }
  }).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}
async function acceptInvitation(invite_token) {
  return await apis.api.post('/accept-invitation', {
    invite_token
  }).then(res => {
    const data = res.data;
    let token = data.data?.token;
    if (data?.success && token) this.afterLogin(data, token);
    return data;
  }).catch(e => {
    return e;
  });
}

// Onboarding
async function onboardUser(payload) {
  return await apis.api.post(`/onboarding`, payload).then(res => {
    const data = res.data;
    if (data.success && data.data?.user) this.user = data.data?.user;
    return data;
  }).catch(e => {
    return e;
  });
}

// User Roles
function getUserRole(userId = this.user?.id, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return this.organizationUsers[orgId]?.[userId]?.role || this.organizationUsers[orgId]?.[userId]?.organization_role || this.user?.role || this.user?.organization_role;
}
function isOrgOwner(userId = this.user?.id, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return userId === this.organizations[orgId]?.['owner_id'];
}
function isOrgAdmin(userId = this.user?.id, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return this.getUserRole(userId, orgId) === 'organization_admin';
}
function isOrgBiller(userId = this.user?.id, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return this.getUserRole(userId, orgId) === 'organization_billing';
}
function isOrgEmployee(userId = this.user?.id, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return this.getUserRole(userId, orgId) === 'organization_employee';
}
// End of User Roles

async function updateOrganization(payload = {}, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post(`/organization/${orgId}/edit`, payload).then(res => {
    const data = res.data;
    const orgInfo = data.data;
    if ((0,functions.checkIfObject)(orgInfo)) {
      Object.keys(orgInfo).forEach(k => {
        this.organizations[orgId][k] = orgInfo[k];
      });
    }
    return data;
  }).catch(e => {
    return e;
  });
}
function searchUserInfo(info, allResult = false) {
  let userInfo = Object.values(this.organizationUsers).filter(usr => {
    let res = false;
    Object.keys(usr).forEach(e => {
      if (usr[e] == info) res = true;
    });
    return res;
  });
  return allResult ? userInfo : userInfo[0] || {};
}

// Organization User
async function getOrgUsers(org_id = this.activeOrgID) {
  const url = `/organization/${org_id}/users`;
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data.success) {
      this.organizationUsers[org_id] = {};
      for (const usr of data.data) {
        this.organizationUsers[org_id][usr.id] = usr;
      }
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data.success) {
      this.organizationUsers[org_id] = {};
      for (const usr of cache_data.data) {
        this.organizationUsers[org_id][usr.id] = usr;
      }
    }
    return cache_data || e;
  });
}
async function addOrgUser(userInfo = {}, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  userInfo.org_id = [orgId];
  return await apis.api.post(`/organization/users`, userInfo).then(res => {
    const data = res.data;
    if (data.success) {
      const uid = data.data?.user?.id;
      this.organizationUsers[orgId][uid] = data.data?.user;
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function updateOrgUser(userId, userInfo = {}, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (userId === null || userId === undefined) return {};
  return await apis.api.post(`/organization/users/${userId}`, userInfo).then(res => {
    const data = res.data;
    if (data.success) {
      this.organizationUsers[orgId][userId] = data?.data?.user || {};
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function deleteOrgUser(userId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (userId === null || userId === undefined) return {};
  return await apis.api["delete"](`/organization/users/${userId}`).then(res => {
    const data = res.data;
    if (data.success) {
      delete this.organizationUsers[orgId][userId];
    }
    return data;
  }).catch(e => {
    return e;
  });
}

// Organization Files
function addOrgFiles(fileId, fileInfo = {}, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (fileId === null || fileId === undefined) return {};
  this.organizationFiles[orgId][fileId] = fileInfo;
}
function updateOrgFiles(fileId, fileInfo = {}, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (fileId === null || fileId === undefined) return {};
  this.organizationFiles[orgId][fileId] = fileInfo;
}
function deleteOrgFiles(fileId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (fileId === null || fileId === undefined) return {};
  delete this.organizationFiles[orgId][fileId];
}

// Organization Brands
async function createBrand(payload, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post(`/organization/${orgId}/brands`, payload).then(res => {
    const data = res.data;
    if (data.success) this.addOrgBrand(data.data?.id, data.data, orgId);
    return data;
  }).catch(e => {
    return e;
  });
}
async function updateBrand(payload, brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.put(`/organization/${orgId}/brands/${brandId}/update`, payload).then(res => {
    const data = res.data;
    if (data.success) this.updateOrgBrand(brandId, data.data, {}, orgId);
    return data;
  }).catch(e => {
    return e;
  });
}
async function updateBrandGoogleFonts(payload, brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.put(`/organization/${orgId}/brands/${brandId}/googlefonts`, payload).then(res => {
    const data = res.data;
    if (data.success) this.updateOrgBrand(brandId, data.data, {}, orgId);
    return data;
  }).catch(e => {
    return e;
  });
}
async function updateBrandSocial(payload, brandId, orgId = this.activeOrgID) {
  return await apis.api.put(`/organization/${orgId}/brands/${brandId}/social-account`, payload).then(res => {
    const data = res.data;
    if (data.success) this.updateOrgBrand(brandId, data.data, {}, orgId);
    return data;
  }).catch(e => {
    return e;
  });
}
async function updateBrandFiles(uploads, target_path, brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  const formData = new FormData();
  if (uploads && uploads.length) {
    for (const [i, f] of uploads.entries()) {
      formData.append(`uploads[${i}]`, f);
    }
  }
  formData.append('target_path', target_path);
  return await apis.api.post(`/organization/${orgId}/brands/${brandId}/upload`, formData, {
    'Content-Type': 'multipart/form-data'
  }).then(res => {
    const data = res.data;
    if (data.success) this.updateOrgBrand(brandId, data.data, {}, orgId);
    return data;
  }).catch(e => {
    return e;
  });
}
async function getSingleBrand(brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !orgId) return;
  const url = `/organization/${orgId}/brands/${brandId}`;
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data.success) {
      const brand = data.data;
      if (brand.id && !brand.deleted_at) this.organizationBrands[orgId][brand.id] = brand;
      fn_store/* default.addAPICache */.Z.addAPICache(url, data);
      return data;
    }
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    const brands_cache = data.data?.data || [];
    for (const brand of brands_cache) {
      this.organizationBrands[orgId][brand.id] = brand;
    }
    return cache_data || e;
  });
}
async function getOrgBrands(saveState = true, orgId = this.activeOrgID, params = {}) {
  if (!orgId) orgId = this.activeOrgID;
  const url = `/organization/${orgId}/brands`;
  if (params && !params.per_page) params.per_page = -1;
  return await apis.api.get(url, {
    params
  }).then(res => {
    const data = res.data;
    if (data.success && saveState) {
      const brands = data.data?.data || [];
      for (const brand of brands) {
        this.organizationBrands[orgId][brand.id] = brand;
      }
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    const brands_cache = data.data?.data || [];
    for (const brand of brands_cache) {
      this.organizationBrands[orgId][brand.id] = brand;
    }
    return cache_data || e;
  });
}
function addBrandFile(brandId, file, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !file?.id || !orgId) return;
  const selectedBrand = this.organizationBrands?.[orgId]?.[brandId];
  if (!selectedBrand) return;
  if (!selectedBrand?.['uploads']) selectedBrand['uploads'] = [];
  selectedBrand['uploads'].unshift(file);
}
function removeBrandFile(brandId, file, orgId = this.activeOrgID) {
  if (!brandId || !file || !orgId) return;
  const uploadedFiles = this.organizationBrands?.[orgId]?.[brandId]?.['uploads'];
  if (uploadedFiles) {
    const fileIndex = uploadedFiles.findIndex(e => file.isSkeleton ? e.isSkeleton && e.file_info?.__key === file.file_info?.__key : e.id === file.id);
    if (fileIndex !== -1) uploadedFiles?.splice?.(fileIndex, 1);
  }
}
async function updateBrandColors(payload, brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!orgId || !brandId || !orgId) return {};
  return await apis.api.put(`/organization/${orgId}/brands/${brandId}/color`, payload).then(res => {
    const data = res.data;
    if (data.success) this.updateOrgBrand(brandId, data.data, {}, orgId);
    return data;
  }).catch(e => {
    return e;
  });
}
function addOrgBrand(brandId, brandInfo = {}, orgId = this.activeOrgID) {
  if (!brandId || !orgId) return {};
  this.organizationBrands[orgId][brandId] = brandInfo;
}
function updateOrgBrand(brandId, brandInfo = {}, {
  key,
  merge = false
}, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !orgId) return {};
  if (!this.organizationBrands?.[orgId]?.[brandId]) this.organizationBrands[orgId][brandId] = {};
  if (merge) {
    this.organizationBrands[orgId][brandId] = {
      ...this.organizationBrands[orgId][brandId],
      ...brandInfo
    };
  } else if (key) {
    this.organizationBrands[orgId][brandId][key] = brandInfo;
  } else {
    this.organizationBrands[orgId][brandId] = brandInfo;
  }
}
function removeFromOrgBrandState(brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !orgId) return {};
  if (this.organizationBrands[orgId][brandId]) delete this.organizationBrands[orgId][brandId];
}
async function archiveOrgBrand(brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !orgId) return {};
  return await apis.api.put(`/organization/${orgId}/brands/${brandId}/archive`).then(res => {
    const data = res.data;
    if (data.success) {
      if (this.organizationBrands[orgId][brandId]) this.organizationBrands[orgId][brandId].deleted_at = Date.now();
      this.removeFromOrgBrandState(brandId, orgId);
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function restoreArchiveOrgBrand(brandInfo, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandInfo?.id || !orgId) return {};
  const brandId = brandInfo.id;
  return await apis.api.put(`/organization/${orgId}/brands/${brandId}/restore`).then(res => {
    const data = res.data;
    if (data.success) {
      this.organizationBrands[orgId][brandId] = brandInfo;
      if (this.organizationBrands[orgId][brandId]) this.organizationBrands[orgId][brandId].deleted_at = null;
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function deleteOrgBrand(brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !orgId) return {};
  return await apis.api["delete"](`/organization/${orgId}/brands/${brandId}`).then(res => {
    const data = res.data;
    if (data.success) {
      this.removeFromOrgBrandState(brandId, orgId);
    }
    return data;
  }).catch(e => {
    return e;
  });
}
function getBrandUploadedAssets(brandId, target, custom_files = undefined, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !target || !orgId) return [];
  let brand = custom_files !== null && custom_files !== undefined ? custom_files : this.organizationBrands?.[orgId]?.[brandId];
  if (!brand?.uploads) return [];
  const regex = new RegExp(`^([a-z0-9]+)(\/?){1}(organization[s]*)(\/?){1}([0-9]+)(\/){1}(brand[s]*)(\/){1}([0-9]+)(\/){1}(${target})(\/){1}([.]*)`);
  const assets = [];
  for (const b of brand.uploads) {
    if (regex.test(b.path)) {
      assets.push(b);
    }
  }
  return assets;
}
async function updateBrandAvatar(fileId, brandId, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  if (!brandId || !orgId) return {};
  return await apis.api.put(`/organization/${orgId}/brands/${brandId}/avatar`, {
    avatar: fileId
  }).then(res => {
    const data = res.data;
    if (data.success) this.updateOrgBrand(brandId, data.data, {}, orgId);
    return data;
  }).catch(e => {
    return e;
  });
}

// Subscription
function subscriptionRemaining(date_now = new Date(), unit = 'days') {
  const {
    date
  } = __webpack_require__(59066);
  if (this.subscriptionDaysLength === 0) return 0;
  const subscription_end = this.selectedOrg?.subscriptions?.subscription_end;
  if (new Date(date_now) > new Date(subscription_end)) return 0;
  return date.getDateDiff(subscription_end, date_now, unit);
}
function subscriptionIsExpired(date_now = new Date()) {
  return !this.activeOrgID || !this.user.id || !this.selectedOrgSubscription?.status ? false : Number(this.subscriptionRemaining(date_now, 'seconds')) < 1;
}
async function switchToMaintenancePlan(orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post('/change-plan/maintenance', {
    org_id: orgId
  }).then(res => {
    const data = res.data;
    if (data?.success) {
      if (this.organizations?.[orgId]?.subscriptions) {
        // Switch to Maintenance Plan
        this.organizations[orgId].subscriptions.is_maintenance = true;
      }
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function requestSubscriptionChange(payload, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post('/change-plan/request', {
    org_id: orgId,
    ...payload
  }).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}
async function pauseSubscription(payload, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post('/change-plan/pause', {
    org_id: orgId,
    ...payload
  }).then(res => {
    const data = res.data;
    if (data?.success) {
      if (this.organizations?.[orgId]?.subscriptions) this.organizations[orgId].subscriptions = data.data;
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function resumeSubscription(payload, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post('/change-plan/resume', {
    org_id: orgId,
    ...payload
  }).then(res => {
    const data = res.data;
    if (data?.success) {
      if (this.organizations?.[orgId]?.subscriptions) this.organizations[orgId].subscriptions = data.data;
    }
    return data;
  }).catch(e => {
    return e;
  });
}
async function cancelSubscription(payload, orgId = this.activeOrgID) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post('/offboarding', {
    org_id: orgId,
    ...payload
  }).then(res => {
    const data = res.data;
    if (data.success) this.afterLogin(data);
    return data;
  }).catch(e => {
    return e;
  });
}
async function getPusherAuth(payload) {
  if (!orgId) orgId = this.activeOrgID;
  return await apis.api.post('/pusher/auth', payload).then(res => {
    const data = res.data;
    return data;
  }).catch(e => {
    return e;
  });
}

;// CONCATENATED MODULE: ./src/stores/user/index.js




/* harmony default export */ const user = ((0,pinia/* defineStore */.Q_)('useUser', {
  state: state,
  getters: getters_namespaceObject,
  actions: {
    ...actions_namespaceObject
  }
}));

/***/ }),

/***/ 16122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CardIconBox)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/CardIconBox.vue?vue&type=template&id=6aab5f7a

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_spinner = (0,vue_esm_bundler/* resolveComponent */.up)("q-spinner");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_avatar, {
    rounded: "",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-pa-sm auto-hw", `bg-${_ctx.bgColor} hover-bg-accent hover-text-secondary`])
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.useSpinner ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
      key: 0,
      size: _ctx.iconSize,
      name: _ctx.icon,
      color: _ctx.iconColor,
      class: "card-icon q-pa-xs"
    }, null, 8, ["size", "name", "color"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_spinner, {
      key: 1,
      color: _ctx.iconColor,
      size: _ctx.iconSize
    }, null, 8, ["color", "size"]))]),
    _: 1
  }, 8, ["class"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/CardIconBox.vue?vue&type=template&id=6aab5f7a

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/CardIconBox.vue?vue&type=script&lang=js

/* harmony default export */ const CardIconBoxvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CardIconBox',
  props: {
    icon: {
      type: String,
      default: 'icon-layout-alt-04'
    },
    bgColor: {
      type: String,
      default: 'accent'
    },
    iconSize: {
      type: String,
      default: 'sm'
    },
    iconColor: {
      type: String,
      default: 'secondary'
    },
    useSpinner: {
      type: Boolean,
      default: false
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/CardIconBox.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(61357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(13902);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/CardIconBox.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CardIconBoxvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const CardIconBox = (__exports__);
;



runtime_auto_import_default()(CardIconBoxvue_type_script_lang_js, 'components', {QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QSpinner: QSpinner/* default */.Z});


/***/ }),

/***/ 46784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DynamicButton)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/DynamicButton.vue?vue&type=template&id=7aceaa8c

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
    "no-caps": "",
    unelevated: "",
    ripple: {
      color: 'accent'
    },
    color: "primary",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["font-medium", {
      ['rounded']: !_ctx.$q.screen.xs || _ctx.alwaysShowLabel,
      ['not-gm']: _ctx.$q.screen.xs,
      [`button-${_ctx.format}`]: true
    }]),
    round: _ctx.$q.screen.xs && !_ctx.alwaysShowLabel
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row items-center", {
        ['reverse']: _ctx.iconRight
      }])
    }, [_ctx.icon && (_ctx.alwaysShowIcon || _ctx.$q.screen.xs) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
      key: 0,
      name: _ctx.icon,
      size: _ctx.iconSize,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)({
        [_ctx.iconClass]: true
      })
    }, null, 8, ["name", "size", "class"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$q.screen.gt.xs || _ctx.alwaysShowLabel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
      key: 1,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["font-medium", {
        ['q-pl-xs']: _ctx.icon && (_ctx.alwaysShowIcon || _ctx.$q.screen.xs),
        [_ctx.labelClass]: true
      }])
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.label), 3)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2), _ctx.$q.screen.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_tooltip_pro, {
      key: 0,
      delay: 150,
      "hide-delay": 150
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.label), 1)]),
      _: 1
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class", "round"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/DynamicButton.vue?vue&type=template&id=7aceaa8c

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/DynamicButton.vue?vue&type=script&lang=js

/* harmony default export */ const DynamicButtonvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DynamicButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: 'sm'
    },
    alwaysShowIcon: {
      type: Boolean,
      default: false
    },
    alwaysShowLabel: {
      type: Boolean,
      default: false
    },
    format: {
      type: String,
      default: 'md'
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/DynamicButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/DynamicButton.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DynamicButtonvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const DynamicButton = (__exports__);
;


runtime_auto_import_default()(DynamicButtonvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z});


/***/ }),

/***/ 4147:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"growmodo_hub","version":"0.10.0","description":"Growmodo, GmbH","productName":"Growmodo Hub","author":{"name":"Growmodo, GmbH","url":"https://www.growmodo.com"},"private":true,"scripts":{"help":"Please check package.json for available scripts.","dev:only":"npm run icon-font:watch & quasar dev --","dev:only:pwa":"npm run icon-font:watch & quasar dev -m pwa --","dev":"npm run dev:only --","dev:low":"npm run dev -- --host localhost:8080 --api api.growmodo.dev/api","dev:local":"npm run dev -- --host localhost:8080 --api localhost/api","dev:hub":"npm run dev -- --host hub.growmodo.dev --api api.growmodo.dev/api","dev:pwa":"npm run dev:only:pwa --","build:only":"quasar build -m pwa --protect --","build:only:dev":"quasar build -m pwa --protect --debug --","build":"npm run format; npm run build:only --","build:dev":"npm run build:only:dev --","build:local":"npm run build -- --host localhost:8080 --api localhost/api","build:hub":"npm run build -- --host hub.growmodo.com  --api api.growmodo.com/api","build:hub:dev":"npm run build -- --host hub.growmodo.dev --api api.growmodo.dev/api","lint":"eslint --ext .js,.vue ./ --","format":"prettier --write \\"**/*.{js,vue,scss,html,md,json}\\" --ignore-path .prettierignore --","test":"echo \\"See package.json => scripts for available tests.\\" && exit 0","icon-font":"fantasticon -c .fantasticonrc.js --debug","icon-fixer":"oslllo-svg-fixer -s src/svg-tmp -d src/svg-all/custom --show-progress --strict-destination","icon-genie":"icongenie generate --skip-trim --svg-color 121212 --quality 10 -i ./public/favicon.png","icon-font:watch":"watch \'npm run icon-font\' src/svg-icons","test:unit:ui":"majestic","test:unit":"jest --updateSnapshot","test:unit:ci":"jest --ci","test:unit:coverage":"jest --coverage","test:unit:watch":"jest --watch","test:unit:watchAll":"jest --watchAll","serve:test:coverage":"quasar serve test/jest/coverage/lcov-report/ --port 8788","concurrently:dev:jest":"concurrently \\"quasar dev\\" \\"jest --watch\\"","test:e2e":"cross-env NODE_ENV=test start-test \\"quasar dev\\" http-get://localhost:8080 \\"cypress open\\"","test:e2e:ci":"cross-env NODE_ENV=test start-test \\"quasar dev\\" http-get://localhost:8080 \\"cypress run\\"","test:component":"cross-env NODE_ENV=test cypress open-ct","test:component:ci":"cross-env NODE_ENV=test cypress run-ct"},"dependencies":{"@quasar/extras":"^1.0.0","algoliasearch":"^4.14.2","axios":"^0.21.1","date-fns":"^2.29.2","html2pdf.js":"^0.10.1","instantsearch.js":"^4.49.0","jszip":"^3.10.1","number-to-words":"^1.2.4","per-country":"^1.1.1","pinia":"^2.0.21","quasar":"^2.6.0","vue":"^3.0.0","vue-easy-lightbox":"^1.9.0","vue-i18n":"^9.3.0-beta.3","vue-instantsearch":"^4.6.0","vue-router":"^4.0.0"},"devDependencies":{"@babel/eslint-parser":"^7.13.14","@quasar/app-webpack":"^3.0.0","@quasar/icongenie":"^2.5.4","@quasar/quasar-app-extension-testing":"^2.0.4","@quasar/quasar-app-extension-testing-e2e-cypress":"^4.2.1","@quasar/quasar-app-extension-testing-unit-jest":"^2.2.3","@squoosh/lib":"^0.4.0","eslint":"^8.28.0","eslint-config-prettier":"^8.1.0","eslint-plugin-cypress":"^2.11.3","eslint-plugin-jest":"^25.7.0","eslint-plugin-vue":"^9.0.0","eslint-webpack-plugin":"^3.1.1","fantasticon":"^2.0.0","image-minimizer-webpack-plugin":"^3.8.0","imagemin":"^8.0.1","imagemin-webp":"^7.0.0","javascript-obfuscator":"^4.0.0","majestic":"^1.7.0","oslllo-svg-fixer":"^2.1.2","prettier":"^2.5.1","watch":"^0.13.0","webpack-obfuscator":"^3.5.1","workbox-webpack-plugin":"^6.5.4"},"browserslist":["last 10 Chrome versions","last 10 Firefox versions","last 4 Edge versions","last 7 Safari versions","last 8 Android versions","last 8 ChromeAndroid versions","last 8 FirefoxAndroid versions","last 10 iOS versions","last 5 Opera versions"],"engines":{"node":"^16 || ^14.19","npm":">= 6.13.4","yarn":">= 1.21.1"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + (chunkId === 64 ? "chunk-common" : chunkId) + "." + {"23":"a7a737c3","64":"3e61cd8b","78":"d42b25c1","94":"3c6c3fd5","141":"725b1030","155":"1a4ced92","214":"8f0cb02c","246":"e921dc55","259":"85caf0fe","287":"20350c32","365":"a763bdee","386":"21a17436","402":"4fcdf72c","404":"488a2d21","405":"9d269a50","422":"554e49a1","435":"7e84fa65","467":"d4414cca","474":"71369c86","493":"c1b32ad5","507":"06c129d1","539":"1d68123d","543":"393570d0","550":"1d59bb04","563":"48162dbb","591":"a9f2e24f","620":"b4ce45b0","663":"b421f177","686":"730a15f0","712":"de593e7b","713":"a13d54af","715":"0cc8ab06","722":"a64727dd","737":"3ca07ea4","775":"0242cdfe","785":"714d39b2","815":"c5d1dd4e","932":"3500ef98","935":"5e22fdd6","966":"759397a0","991":"5a3c8065"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"23":"bf699673","94":"a0a6eca8","259":"a0a6eca8","712":"a0a6eca8","785":"a0a6eca8"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "growmodo_hub:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"23":1,"94":1,"259":1,"712":1,"785":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(95679)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.3ddeaddf.js.map