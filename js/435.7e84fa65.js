"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[435],{

/***/ 99435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DynamicQuestions)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicQuestions.vue?vue&type=template&id=37bd475a

const _hoisted_1 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_skeleton = (0,vue_esm_bundler/* resolveComponent */.up)("q-skeleton");
  const _component_TextArea1 = (0,vue_esm_bundler/* resolveComponent */.up)("TextArea1");
  const _component_TextArea2 = (0,vue_esm_bundler/* resolveComponent */.up)("TextArea2");
  const _component_InputTextField = (0,vue_esm_bundler/* resolveComponent */.up)("InputTextField");
  const _component_SelectOption = (0,vue_esm_bundler/* resolveComponent */.up)("SelectOption");
  const _component_RadioSelect = (0,vue_esm_bundler/* resolveComponent */.up)("RadioSelect");
  const _component_CheckboxSelect = (0,vue_esm_bundler/* resolveComponent */.up)("CheckboxSelect");
  const _component_SelectPlatforms = (0,vue_esm_bundler/* resolveComponent */.up)("SelectPlatforms");
  const _component_InputVideoWalkthrough = (0,vue_esm_bundler/* resolveComponent */.up)("InputVideoWalkthrough");
  const _component_SelectBrand = (0,vue_esm_bundler/* resolveComponent */.up)("SelectBrand");
  const _component_SelectCategoryType = (0,vue_esm_bundler/* resolveComponent */.up)("SelectCategoryType");
  const _component_SelectTaskProjectType = (0,vue_esm_bundler/* resolveComponent */.up)("SelectTaskProjectType");
  const _component_InputWebsite = (0,vue_esm_bundler/* resolveComponent */.up)("InputWebsite");
  const _component_InputPhoneNumber = (0,vue_esm_bundler/* resolveComponent */.up)("InputPhoneNumber");
  const _component_FileUploader = (0,vue_esm_bundler/* resolveComponent */.up)("FileUploader");
  const _component_WebsiteContent = (0,vue_esm_bundler/* resolveComponent */.up)("WebsiteContent");
  return !_ctx.initDone ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
    type: "QInput",
    width: "100%"
  })])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 1
  }, [_ctx.dynamic_questions.type === 'textarea1' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_TextArea1, {
    key: 0,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.answer.value = $event),
    required: _ctx.dynamic_questions.required,
    name: 'question-' + _ctx.dynamic_questions.id,
    placeholder: _ctx.question.placeholder,
    rows: _ctx.textareaRow
  }, null, 8, ["autofocus", "modelValue", "required", "name", "placeholder", "rows"])) : _ctx.dynamic_questions.type === 'textarea2' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_TextArea2, {
    key: 1,
    autofocus: _ctx.autofocus,
    dense: true,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.answer.value = $event),
    required: _ctx.dynamic_questions.required,
    name: 'question-' + _ctx.dynamic_questions.id,
    placeholder: _ctx.question.placeholder,
    rows: _ctx.textareaRow
  }, null, 8, ["autofocus", "modelValue", "required", "name", "placeholder", "rows"])) : _ctx.dynamic_questions.type === 'textfield' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputTextField, {
    key: 2,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.answer.value = $event),
    name: 'question-' + _ctx.dynamic_questions.id,
    placeholder: _ctx.question.placeholder,
    required: _ctx.dynamic_questions.required
  }, null, 8, ["autofocus", "modelValue", "name", "placeholder", "required"])) : _ctx.dynamic_questions.type === 'select' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectOption, {
    key: 3,
    autofocus: _ctx.autofocus,
    dense: false,
    initModel: _ctx.answer.value,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.answer.value = $event),
    selection: _ctx.dynamic_questions.options,
    required: _ctx.dynamic_questions.required,
    name: 'question-' + _ctx.dynamic_questions.id
  }, null, 8, ["autofocus", "initModel", "modelValue", "selection", "required", "name"])) : _ctx.dynamic_questions.type === 'select_multiple' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectOption, {
    key: 4,
    autofocus: _ctx.autofocus,
    dense: false,
    multiple: "",
    initModel: _ctx.answer.value,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.answer.value = $event),
    selection: _ctx.dynamic_questions.options,
    required: _ctx.dynamic_questions.required,
    name: 'question-' + _ctx.dynamic_questions.id
  }, null, 8, ["autofocus", "initModel", "modelValue", "selection", "required", "name"])) : _ctx.dynamic_questions.type === 'radio' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_RadioSelect, {
    key: 5,
    dense: false,
    initModel: _ctx.answer.value,
    selection: _ctx.dynamic_questions.options,
    required: _ctx.dynamic_questions.required,
    name: 'question-' + _ctx.dynamic_questions.id,
    onUpdated: _cache[5] || (_cache[5] = v => _ctx.answer.value = v)
  }, null, 8, ["initModel", "selection", "required", "name"])) : _ctx.dynamic_questions.type === 'checkbox' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_CheckboxSelect, {
    key: 6,
    dense: false,
    initModel: _ctx.answer.value,
    selection: _ctx.dynamic_questions.options,
    required: _ctx.dynamic_questions.required,
    name: 'question-' + _ctx.dynamic_questions.id,
    onUpdated: _cache[6] || (_cache[6] = v => _ctx.answer.value = v)
  }, null, 8, ["initModel", "selection", "required", "name"])) : _ctx.dynamic_questions.type === 'select_platform' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectPlatforms, {
    key: 7,
    dense: false,
    initModel: _ctx.answer.value,
    required: _ctx.dynamic_questions.required,
    platforms: _ctx.platforms,
    name: 'question-' + _ctx.dynamic_questions.id,
    onUpdated: _cache[7] || (_cache[7] = v => _ctx.answer.value = v)
  }, null, 8, ["initModel", "required", "platforms", "name"])) : _ctx.dynamic_questions.type === 'video_walkthrough' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputVideoWalkthrough, {
    key: 8,
    autofocus: _ctx.autofocus,
    dense: false,
    class: "full-width",
    name: 'question-' + _ctx.dynamic_questions.id,
    initModel: _ctx.answer.value,
    required: _ctx.dynamic_questions.required,
    onUpdated: _cache[8] || (_cache[8] = v => _ctx.answer.value = v)
  }, null, 8, ["autofocus", "name", "initModel", "required"])) : _ctx.dynamic_questions.type === 'select_brand' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectBrand, {
    key: 9,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    name: 'question-' + _ctx.dynamic_questions.id,
    required: _ctx.dynamic_questions.required,
    onBrandAdded: _cache[10] || (_cache[10] = e => _ctx.answer.value = e),
    onBrandFinished: _cache[11] || (_cache[11] = e => _ctx.answer.value = e),
    onBrandFormClosed: _cache[12] || (_cache[12] = () => {
      if (_ctx.answer.value && _ctx.answer.value?.id === 0) _ctx.answer.value = '';
    })
  }, null, 8, ["autofocus", "modelValue", "initModel", "name", "required"])) : _ctx.dynamic_questions.type === 'select_taskcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectCategoryType, {
    key: 10,
    autofocus: _ctx.autofocus,
    dense: false,
    type: "task",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.dynamic_questions.required
  }, null, 8, ["autofocus", "modelValue", "initModel", "required"])) : _ctx.dynamic_questions.type === 'select_projectcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectCategoryType, {
    key: 11,
    autofocus: _ctx.autofocus,
    dense: false,
    type: "project",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.dynamic_questions.required
  }, null, 8, ["autofocus", "modelValue", "initModel", "required"])) : _ctx.dynamic_questions.type === 'select_tasktype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectTaskProjectType, {
    key: 12,
    autofocus: false,
    dense: false,
    type: "task",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.dynamic_questions.required
  }, null, 8, ["modelValue", "initModel", "required"])) : _ctx.dynamic_questions.type === 'select_projecttype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectTaskProjectType, {
    key: 13,
    autofocus: false,
    dense: false,
    type: "project",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.dynamic_questions.required
  }, null, 8, ["modelValue", "initModel", "required"])) : _ctx.dynamic_questions.type === 'url' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputWebsite, {
    key: 14,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => _ctx.answer.value = $event),
    required: _ctx.dynamic_questions.required
  }, null, 8, ["autofocus", "modelValue", "required"])) : _ctx.dynamic_questions.type === 'phone' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPhoneNumber, {
    key: 15,
    autofocus: _ctx.autofocus,
    dense: false,
    required: _ctx.dynamic_questions.required,
    onAreaCodeChanged: _cache[18] || (_cache[18] = e => {
      _ctx.answer.value = _ctx.answer.value ? `${e}+${_ctx.answer.value?.split('+')[1] || ''}` : e;
    }),
    onNumberChanged: _cache[19] || (_cache[19] = e => {
      _ctx.answer.value = _ctx.answer.value ? `${_ctx.answer.value?.split('+')[0] || ''}+${e}` : e;
    }),
    areaCode: _ctx.answer.value.split('+')[0],
    phoneNumber: _ctx.answer.value.split('+')[1]
  }, null, 8, ["autofocus", "required", "areaCode", "phoneNumber"])) : _ctx.dynamic_questions.type === 'upload_single' || _ctx.dynamic_questions.type === 'upload_multiple' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_FileUploader, {
    key: 16,
    autofocus: _ctx.autofocus,
    dense: false,
    multiple: _ctx.dynamic_questions.type === 'upload_multiple',
    temporary: "",
    withItems: "",
    miniItems: "",
    "max-file-size": "10000000",
    note: _ctx.question?.options?.note || '',
    accept: _ctx.question?.options?.accept || 'image/*, woff, woff2, otf, ttf, psd, eps, ai, xd, fig',
    onAdded: _cache[20] || (_cache[20] = files => _ctx.$emit('fileAdded', files)),
    onUploaded: _cache[21] || (_cache[21] = ({
      files,
      xhr
    }) => _ctx.$emit('fileUploaded', {
      files,
      xhr
    })),
    onRemoved: _cache[22] || (_cache[22] = files => _ctx.$emit('fileRemoved', files)),
    factory: _ctx.fileFactory,
    removedFile: _ctx.fileRemovedFile,
    initSlots: _ctx.fileInitSlots,
    thumbnail: _ctx.fileThumbnail
  }, null, 8, ["autofocus", "multiple", "note", "accept", "factory", "removedFile", "initSlots", "thumbnail"])) : _ctx.dynamic_questions.type === 'website_content' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_WebsiteContent, {
    key: 17,
    autofocus: _ctx.autofocus,
    dense: false,
    multiple: true,
    temporary: "",
    withItems: "",
    miniItems: "",
    "max-file-size": "10000000",
    note: _ctx.question?.options?.note || '',
    accept: _ctx.question?.options?.accept || 'image/*, woff, woff2, otf, ttf, psd, eps, ai, xd, fig',
    onAdded: _cache[23] || (_cache[23] = files => _ctx.$emit('fileAdded', files)),
    onUploaded: _cache[24] || (_cache[24] = ({
      files,
      xhr
    }) => _ctx.$emit('fileUploaded', {
      files,
      xhr
    })),
    onRemoved: _cache[25] || (_cache[25] = files => _ctx.$emit('fileRemoved', files)),
    onChecked: _cache[26] || (_cache[26] = val => _ctx.$emit('checked', val)),
    checked: _ctx.checked,
    factory: _ctx.fileFactory,
    removedFile: _ctx.fileRemovedFile,
    initSlots: _ctx.fileInitSlots,
    thumbnail: _ctx.fileThumbnail,
    description: _ctx.description
  }, null, 8, ["autofocus", "note", "accept", "checked", "factory", "removedFile", "initSlots", "thumbnail", "description"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 64));
}
;// CONCATENATED MODULE: ./src/components/DynamicQuestions.vue?vue&type=template&id=37bd475a

// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(93458);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicQuestions.vue?vue&type=script&lang=js



/* harmony default export */ const DynamicQuestionsvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DynamicQuestions',
  emits: ['answered', 'fileAdded', 'fileUploaded', 'fileRemoved', 'checked'],
  mixins: [mixins/* DynamicQuestions_Mixin */.r1],
  components: {
    SelectBrand: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(94)]).then(__webpack_require__.bind(__webpack_require__, 51758))),
    SelectPlatforms: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(214)]).then(__webpack_require__.bind(__webpack_require__, 36214))),
    RadioSelect: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 467).then(__webpack_require__.bind(__webpack_require__, 47467))),
    CheckboxSelect: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 155).then(__webpack_require__.bind(__webpack_require__, 61155))),
    InputTextField: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(__webpack_require__, 5403))),
    TextArea1: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(__webpack_require__, 44799))),
    TextArea2: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(663)]).then(__webpack_require__.bind(__webpack_require__, 56663))),
    InputVideoWalkthrough: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(474)]).then(__webpack_require__.bind(__webpack_require__, 66474))),
    SelectOption: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(991)]).then(__webpack_require__.bind(__webpack_require__, 90991))),
    InputWebsite: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(__webpack_require__, 97696))),
    InputPhoneNumber: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64)]).then(__webpack_require__.bind(__webpack_require__, 67488))),
    FileUploader: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64)]).then(__webpack_require__.bind(__webpack_require__, 65400))),
    SelectCategoryType: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(815)]).then(__webpack_require__.bind(__webpack_require__, 98815))),
    SelectTaskProjectType: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(287)]).then(__webpack_require__.bind(__webpack_require__, 94287))),
    WebsiteContent: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 246).then(__webpack_require__.bind(__webpack_require__, 1246)))
  },
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    question: {
      type: Object,
      default: () => {}
    },
    initAnswer: {
      type: Object,
      default: () => {}
    },
    platforms: {
      type: Array,
      default: () => []
    },
    checked: {
      type: [Array, String],
      default: () => []
    },
    fileThumbnail: {
      type: String,
      default: 'auto'
    },
    textareaRow: {
      type: Number,
      default: 15
    },
    description: {
      type: String,
      default: ''
    },
    fileRemovedFile: {},
    fileFactory: {},
    fileInitSlots: {}
  },
  data() {
    return {
      answer: {},
      initDone: false,
      cleanMarkup: functions.cleanMarkup
    };
  },
  watch: {
    ['answer']: {
      async handler(val) {
        this.$emit('answered', val);
      },
      deep: true
    }
  },
  computed: {
    dynamic_questions() {
      const question = (0,functions.objectCopy)(this.question);
      if (this.initDone !== true) question.required = false;
      return question;
    }
  },
  mounted() {
    this.initDone = false;
    if (this.initAnswer) this.answer = this.initAnswer;
    this.init();
  },
  methods: {
    init() {
      if (!this.question?.id) return;
      if (!this.answer?.value) this.answer = this.formatDynamicAnswer(this.question);
      this.initDone = true;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/DynamicQuestions.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/skeleton/QSkeleton.js
var QSkeleton = __webpack_require__(57133);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/DynamicQuestions.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DynamicQuestionsvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const DynamicQuestions = (__exports__);
;

runtime_auto_import_default()(DynamicQuestionsvue_type_script_lang_js, 'components', {QSkeleton: QSkeleton/* default */.ZP});


/***/ })

}]);
//# sourceMappingURL=435.7e84fa65.js.map