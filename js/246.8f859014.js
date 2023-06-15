"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[246],{

/***/ 1246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WebsiteContent)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/WebsiteContent.vue?vue&type=template&id=360b40b2

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FileUploader = (0,vue_esm_bundler/* resolveComponent */.up)("FileUploader");
  const _component_q_checkbox = (0,vue_esm_bundler/* resolveComponent */.up)("q-checkbox");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    temporary: _ctx.temporary,
    withItems: _ctx.withItems,
    miniItems: _ctx.miniItems,
    multiple: _ctx.multiple,
    note: _ctx.note,
    accept: _ctx.accept,
    onAdded: _cache[0] || (_cache[0] = files => _ctx.$emit('added', files)),
    onUploaded: _cache[1] || (_cache[1] = ({
      files,
      xhr
    }) => _ctx.$emit('uploaded', {
      files,
      xhr
    })),
    onRemoved: _cache[2] || (_cache[2] = files => _ctx.$emit('removed', files)),
    factory: _ctx.factory,
    removedFile: _ctx.removedFile,
    initSlots: _ctx.initSlots,
    thumbnail: _ctx.thumbnail
  }, null, 8, ["autofocus", "dense", "temporary", "withItems", "miniItems", "multiple", "note", "accept", "factory", "removedFile", "initSlots", "thumbnail"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
    autofocus: "",
    modelValue: _ctx.checkboxModel,
    "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => _ctx.checkboxModel = $event), _cache[4] || (_cache[4] = val => _ctx.$emit('checked', val[0]))],
    val: _ctx.description || _ctx.desc,
    color: "secondary",
    class: "field-select text-body1 font-medium rounded bg-none text-primary-500 q-py-sm q-pl-sm full-width flex-label full-height q-mt-lg"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.description || _ctx.desc), 1)]),
    _: 1
  }, 8, ["modelValue", "val"])], 64);
}
;// CONCATENATED MODULE: ./src/components/Helpers/WebsiteContent.vue?vue&type=template&id=360b40b2

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/WebsiteContent.vue?vue&type=script&lang=js

/* harmony default export */ const WebsiteContentvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'WebsiteContent',
  emits: ['added', 'uploaded', 'removed', 'checked'],
  props: {
    note: {
      type: String,
      default: 'SVG, PNG, JPEG or GIF (max. 5MB)'
    },
    thumbnail: {
      type: [Boolean, String],
      default: false
    },
    miniItems: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: 'image/*, woff, woff2, otf, ttf, psd, eps, ai, xd, fig'
    },
    ['max-file-size']: {
      type: [Number, String],
      default: 10000000
    },
    withItems: {
      type: Boolean,
      default: false
    },
    autoRemoveFailed: {
      type: Boolean,
      default: false
    },
    temporary: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: true
    },
    description: {},
    removedFile: {},
    initSlots: {},
    factory: {},
    checked: {
      type: [Array, String],
      default: () => []
    }
  },
  components: {
    FileUploader: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64)]).then(__webpack_require__.bind(__webpack_require__, 33635)))
  },
  data() {
    return {
      checkboxModel: [],
      desc: 'Please use placeholder content on the design concept'
    };
  },
  mounted() {
    if (this.checked?.length) this.checkboxModel = typeof this.checked === 'string' ? [this.checked] : this.checked;
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/WebsiteContent.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__(11221);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/WebsiteContent.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(WebsiteContentvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const WebsiteContent = (__exports__);
;

runtime_auto_import_default()(WebsiteContentvue_type_script_lang_js, 'components', {QCheckbox: QCheckbox/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=246.8f859014.js.map