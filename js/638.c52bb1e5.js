"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[638],{

/***/ 2638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DynamicQuestions)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(6646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicQuestions.vue?vue&type=template&id=62331cee

function render(_ctx, _cache, $props, $setup, $data, $options) {
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
  return _ctx.question.type === 'textarea1' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_TextArea1, {
    key: 0,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.answer.value = $event),
    required: _ctx.question.required,
    name: 'question-' + _ctx.question.id,
    placeholder: "Enter a description..."
  }, null, 8, ["autofocus", "modelValue", "required", "name"])) : _ctx.question.type === 'textarea2' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_TextArea2, {
    key: 1,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.answer.value = $event),
    required: _ctx.question.required,
    name: 'question-' + _ctx.question.id,
    placeholder: "Enter a description..."
  }, null, 8, ["autofocus", "modelValue", "required", "name"])) : _ctx.question.type === 'textfield' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputTextField, {
    key: 2,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.answer.value = $event),
    name: 'question-' + _ctx.question.id,
    placeholder: "Your target audience",
    required: _ctx.question.required
  }, null, 8, ["autofocus", "modelValue", "name", "required"])) : _ctx.question.type === 'select' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectOption, {
    key: 3,
    autofocus: _ctx.autofocus,
    dense: false,
    initModel: _ctx.answer.value,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.answer.value = $event),
    selection: _ctx.question.options,
    required: _ctx.question.required,
    name: 'question-' + _ctx.question.id
  }, null, 8, ["autofocus", "initModel", "modelValue", "selection", "required", "name"])) : _ctx.question.type === 'select_multiple' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectOption, {
    key: 4,
    autofocus: _ctx.autofocus,
    dense: false,
    multiple: "",
    initModel: _ctx.answer.value,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.answer.value = $event),
    selection: _ctx.question.options,
    required: _ctx.question.required,
    name: 'question-' + _ctx.question.id
  }, null, 8, ["autofocus", "initModel", "modelValue", "selection", "required", "name"])) : _ctx.question.type === 'radio' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_RadioSelect, {
    key: 5,
    dense: false,
    initModel: _ctx.answer.value,
    selection: _ctx.question.options,
    required: _ctx.question.required,
    name: 'question-' + _ctx.question.id,
    onUpdated: _cache[5] || (_cache[5] = v => _ctx.answer.value = v)
  }, null, 8, ["initModel", "selection", "required", "name"])) : _ctx.question.type === 'checkbox' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_CheckboxSelect, {
    key: 6,
    dense: false,
    initModel: _ctx.answer.value,
    selection: _ctx.question.options,
    required: _ctx.question.required,
    name: 'question-' + _ctx.question.id,
    onUpdated: _cache[6] || (_cache[6] = v => _ctx.answer.value = v)
  }, null, 8, ["initModel", "selection", "required", "name"])) : _ctx.question.type === 'select_platform' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectPlatforms, {
    key: 7,
    dense: false,
    initModel: _ctx.answer.value,
    required: _ctx.question.required,
    platforms: _ctx.platforms,
    name: 'question-' + _ctx.question.id,
    onUpdated: _cache[7] || (_cache[7] = v => _ctx.answer.value = v)
  }, null, 8, ["initModel", "required", "platforms", "name"])) : _ctx.question.type === 'video_walkthrough' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputVideoWalkthrough, {
    key: 8,
    autofocus: _ctx.autofocus,
    dense: false,
    class: "full-width",
    name: 'question-' + _ctx.question.id,
    initModel: _ctx.answer.value,
    required: _ctx.question.required,
    onUpdated: _cache[8] || (_cache[8] = v => _ctx.answer.value = v)
  }, null, 8, ["autofocus", "name", "initModel", "required"])) : _ctx.question.type === 'select_brand' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectBrand, {
    key: 9,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    name: 'question-' + _ctx.question.id,
    required: _ctx.question.required,
    onBrandAdded: _cache[10] || (_cache[10] = e => _ctx.answer.value = e),
    onBrandFinished: _cache[11] || (_cache[11] = e => _ctx.answer.value = e),
    onBrandFormClosed: _cache[12] || (_cache[12] = () => {
      if (_ctx.answer.value && _ctx.answer.value?.id === 0) _ctx.answer.value = '';
    })
  }, null, 8, ["autofocus", "modelValue", "initModel", "name", "required"])) : _ctx.question.type === 'select_taskcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectCategoryType, {
    key: 10,
    autofocus: _ctx.autofocus,
    dense: false,
    type: "task",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.question.required
  }, null, 8, ["autofocus", "modelValue", "initModel", "required"])) : _ctx.question.type === 'select_projectcategory' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectCategoryType, {
    key: 11,
    autofocus: _ctx.autofocus,
    dense: false,
    type: "project",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.question.required
  }, null, 8, ["autofocus", "modelValue", "initModel", "required"])) : _ctx.question.type === 'select_tasktype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectTaskProjectType, {
    key: 12,
    autofocus: false,
    dense: false,
    type: "task",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.question.required
  }, null, 8, ["modelValue", "initModel", "required"])) : _ctx.question.type === 'select_projecttype' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_SelectTaskProjectType, {
    key: 13,
    autofocus: false,
    dense: false,
    type: "project",
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => _ctx.answer.value = $event),
    initModel: _ctx.answer.value,
    required: _ctx.question.required
  }, null, 8, ["modelValue", "initModel", "required"])) : _ctx.question.type === 'url' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputWebsite, {
    key: 14,
    autofocus: _ctx.autofocus,
    dense: false,
    modelValue: _ctx.answer.value,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => _ctx.answer.value = $event),
    required: _ctx.question.required
  }, null, 8, ["autofocus", "modelValue", "required"])) : _ctx.question.type === 'phone' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_InputPhoneNumber, {
    key: 15,
    autofocus: _ctx.autofocus,
    dense: false,
    required: _ctx.question.required,
    onAreaCodeChanged: _cache[18] || (_cache[18] = e => {
      _ctx.answer.value = _ctx.answer.answer ? `${e}+${_ctx.answer.value?.split('+')[1] || ''}` : e;
    }),
    onNumberChanged: _cache[19] || (_cache[19] = e => {
      _ctx.answer.value = _ctx.answer.answer ? `${_ctx.answer.value?.split('+')[0] || ''}+${e}` : e;
    }),
    areaCode: _ctx.answer.value.split('+')[0],
    phoneNumber: _ctx.answer.value.split('+')[1]
  }, null, 8, ["autofocus", "required", "areaCode", "phoneNumber"])) : _ctx.question.type === 'upload_single' || _ctx.question.type === 'upload_multiple' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_FileUploader, {
    key: 16,
    autofocus: _ctx.autofocus,
    dense: false,
    multiple: _ctx.question.type === 'upload_multiple',
    temporary: "",
    withItems: "",
    miniItems: "",
    ref: `upload${_ctx.question.id}`,
    "max-file-size": "10000000",
    note: _ctx.question?.options?.note || '',
    accept: _ctx.question?.options?.accept || 'image/*, woff, woff2, otf, ttf, psd, eps, ai, xd, fig',
    removedFile: _ctx.uploads[`upload${_ctx.question.id}`]?.removedFile,
    onAdded: _cache[20] || (_cache[20] = files => {
      if (!_ctx.uploads[`upload${_ctx.question.id}`]?.files?.length || _ctx.question.type === 'upload_multiple') {
        _ctx.addUploadToModel('uploads', `upload${_ctx.question.id}`, files, `upload${_ctx.question.id}`);
      } else {
        _ctx.uploads[`upload${_ctx.question.id}`].files = files;
      }
    }),
    onUploaded: _cache[21] || (_cache[21] = ({
      files,
      xhr
    }) => {
      const response = JSON.parse(xhr.response || '{}');
      if (response.success) {
        const data = response.data;
        if (_ctx.question.type === 'upload_multiple') {
          _ctx.answer.value = _ctx.answer.concat(data.map(e => e.id));
        } else {
          _ctx.answer.value = data[0]?.id;
        }
      }
    }),
    onRemoved: _cache[22] || (_cache[22] = files => {
      if (_ctx.question.type === 'upload_multiple') {
        files.map(e => e.id).forEach(e => {
          const ind = _ctx.answer.answer.findIndex(a => a === e);
          if (ind !== -1) {
            _ctx.answer.value.splice(ind, 1);
          }
        });
      } else {
        _ctx.answer.value = '';
      }
    }),
    factory: _ctx.factoryFn,
    initSlots: _ctx.uploads[`upload${_ctx.question.id}`],
    thumbnail: "auto"
  }, null, 8, ["autofocus", "multiple", "note", "accept", "removedFile", "factory", "initSlots"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true);
}
;// CONCATENATED MODULE: ./src/components/DynamicQuestions.vue?vue&type=template&id=62331cee

// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(3458);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/DynamicQuestions.vue?vue&type=script&lang=js


/* harmony default export */ const DynamicQuestionsvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DynamicQuestions',
  emits: ['answered'],
  mixins: [mixins/* DynamicQuestions_Mixin */.r1],
  components: {
    SelectBrand: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64), __webpack_require__.e(94)]).then(__webpack_require__.bind(__webpack_require__, 1758))),
    SelectPlatforms: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(909)]).then(__webpack_require__.bind(__webpack_require__, 6909))),
    RadioSelect: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 255).then(__webpack_require__.bind(__webpack_require__, 4255))),
    CheckboxSelect: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 480).then(__webpack_require__.bind(__webpack_require__, 2480))),
    InputTextField: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(__webpack_require__, 5403))),
    TextArea1: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(__webpack_require__, 7248))),
    TextArea2: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(40)]).then(__webpack_require__.bind(__webpack_require__, 7040))),
    InputVideoWalkthrough: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(474)]).then(__webpack_require__.bind(__webpack_require__, 6474))),
    SelectOption: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(991)]).then(__webpack_require__.bind(__webpack_require__, 991))),
    InputWebsite: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(__webpack_require__, 9212))),
    InputPhoneNumber: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64)]).then(__webpack_require__.bind(__webpack_require__, 7488))),
    FileUploader: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(64)]).then(__webpack_require__.bind(__webpack_require__, 2252))),
    SelectCategoryType: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(191)]).then(__webpack_require__.bind(__webpack_require__, 6191))),
    SelectTaskProjectType: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(335)]).then(__webpack_require__.bind(__webpack_require__, 6661)))
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
    }
  },
  data() {
    return {
      answer: {}
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
  async mounted() {
    if (this.initAnswer) this.answer = this.initAnswer;
    this.init();
  },
  methods: {
    async init() {
      if (!this.question?.id) return;
      if (!this.answer?.value) this.answer = this.formatDynamicAnswer(this.question);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/DynamicQuestions.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
;// CONCATENATED MODULE: ./src/components/DynamicQuestions.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DynamicQuestionsvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const DynamicQuestions = (__exports__);

/***/ })

}]);
//# sourceMappingURL=638.c52bb1e5.js.map