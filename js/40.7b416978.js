"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[40],{

/***/ 7040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TextArea2)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(6646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/TextArea2.vue?vue&type=template&id=1e2fa98c

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_editor = (0,vue_esm_bundler/* resolveComponent */.up)("q-editor");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_editor, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    ref: "descriptionEditorRef",
    onPaste: _cache[0] || (_cache[0] = e => _ctx.pastePlainText(e, _ctx.$refs['descriptionEditorRef'])),
    placeholder: "Write something...",
    rules: [val => _ctx.required ? !!val || '' : true],
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
  }, null, 8, ["autofocus", "dense", "rules", "toolbar"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/TextArea2.vue?vue&type=template&id=1e2fa98c

// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(3458);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/TextArea2.vue?vue&type=script&lang=js


/* harmony default export */ const TextArea2vue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'TextArea2',
  mixins: [mixins/* Editor_Mixin */.kE],
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: true
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/TextArea2.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 3 modules
var QEditor = __webpack_require__(424);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/TextArea2.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TextArea2vue_type_script_lang_js, [['render',render]])

/* harmony default export */ const TextArea2 = (__exports__);
;

runtime_auto_import_default()(TextArea2vue_type_script_lang_js, 'components', {QEditor: QEditor/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=40.7b416978.js.map