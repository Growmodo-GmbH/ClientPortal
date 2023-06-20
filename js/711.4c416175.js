"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[711],{

/***/ 6711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CreateFolder)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/CreateFolder.vue?vue&type=template&id=2a90796f

const _hoisted_1 = {
  key: 0,
  class: "absolute-top-right"
};
const _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-demi-bold letter-space-normal q-pb-sm"
}, " Create New Folder ", -1);
const _hoisted_3 = {
  class: "q-py-sm"
};
const _hoisted_4 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "Cancel", -1);
const _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "Create", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_InputTextField = (0,vue_esm_bundler/* resolveComponent */.up)("InputTextField");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "q-pa-sm rounded",
    style: {
      "width": "360px"
    }
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "bg-transparent q-pa-none"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: "icon-folder-plus"
        }), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-py-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_2, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputTextField, {
        autofocus: "",
        modelValue: _ctx.folderName,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.folderName = $event),
        placeholder: "New Folder",
        class: "q-pb-none",
        rules: [val => _ctx.foldername_pattern.test(val) || ''],
        onKeyup: (0,vue_esm_bundler/* withKeys */.D2)(_ctx.submitChanges, ["enter"])
      }, null, 8, ["modelValue", "rules", "onKeyup"])])]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
      align: "right",
      class: "full-width q-gutter-sm q-py-md"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
        "no-caps": "",
        outline: "",
        unelevated: "",
        class: "col rounded button-gm-outline-dark",
        disable: _ctx.submitting,
        onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('close'))
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
        _: 1
      }, 8, ["disable"])), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "col rounded",
        disable: _ctx.submitting || !_ctx.submitReady,
        onClick: _ctx.submitChanges
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
        _: 1
      }, 8, ["disable", "onClick"])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/CreateFolder.vue?vue&type=template&id=2a90796f

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(16122);
// EXTERNAL MODULE: ./src/components/Helpers/InputTextField.vue + 4 modules
var InputTextField = __webpack_require__(5403);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/CreateFolder.vue?vue&type=script&lang=js






/* harmony default export */ const CreateFoldervue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CreateFolder',
  emits: ['close', 'success', 'failed'],
  components: {
    CardIconBox: CardIconBox["default"],
    InputTextField: InputTextField["default"]
  },
  props: {
    noclose: {
      type: Boolean,
      default: false
    },
    parent_id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      folderName: '',
      submitting: false,
      submitted: false,
      foldername_pattern: /^([a-zA-Z0-9 \(\)\._-]+){1}$/
    };
  },
  mounted() {
    if (!this.parent_id) this.$emit('close');
  },
  computed: {
    submitReady() {
      return this.folderName ? this.foldername_pattern.test(this.folderName) : false;
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['createFolder']),
    async submitChanges() {
      if (!this.foldername_pattern.test(this.folderName)) return;
      this.submitting = true;
      if (!this.folderName) return;
      const response = await this.createFolder({
        name: this.folderName,
        parent_id: this.parent_id
      });
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: message || 'Folder has been created'
        });
        this.submitted = true;
        this.$emit('success', response.data);
        this.$emit('close');
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Failed to create folder'
        });
        this.$emit('failed', message);
      }
      this.submitting = false;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Dialogs/CreateFolder.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(51663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(11821);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(62146);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Dialogs/CreateFolder.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CreateFoldervue_type_script_lang_js, [['render',render]])

/* harmony default export */ const CreateFolder = (__exports__);
;





runtime_auto_import_default()(CreateFoldervue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(CreateFoldervue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=711.4c416175.js.map