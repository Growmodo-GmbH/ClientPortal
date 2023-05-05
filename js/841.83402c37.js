"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[841],{

/***/ 98841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ QuickRequestForm)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Request/QuickRequestForm.vue?vue&type=template&id=06c93041

const _hoisted_1 = {
  class: "col-12 q-pb-lg fit self-start"
};
const _hoisted_2 = {
  class: "q-mx-auto"
};
const _hoisted_3 = {
  style: {
    "max-width": "696px"
  }
};
const _hoisted_4 = {
  key: 0,
  class: "text-h2 text-center font-medium text-primary q-pb-xl q-pt-sm letter-space-negative"
};
const _hoisted_5 = {
  class: "row q-col-gutter-md"
};
const _hoisted_6 = {
  key: 0,
  class: "col-12"
};
const _hoisted_7 = {
  class: "text-center"
};
const _hoisted_8 = {
  class: "full-width font-medium text-h4 q-pt-lg text-center"
};
const _hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("br", null, null, -1);
const _hoisted_10 = {
  key: 1,
  class: "col-12"
};
const _hoisted_11 = {
  class: "row q-col-gutter-md"
};
const _hoisted_12 = ["name"];
const _hoisted_13 = {
  class: "row q-col-gutter-sm"
};
const _hoisted_14 = {
  class: "col-12 text-body2 text-primary-500 font-medium"
};
const _hoisted_15 = {
  class: "col-12"
};
const _hoisted_16 = {
  class: "col-12"
};
const _hoisted_17 = {
  class: "row items-center"
};
const _hoisted_18 = {
  class: "col-12"
};
const _hoisted_19 = {
  class: "row items-center"
};
const _hoisted_20 = {
  class: "col"
};
const _hoisted_21 = {
  class: "col"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_skeleton = (0,vue_esm_bundler/* resolveComponent */.up)("q-skeleton");
  const _component_DynamicQuestions = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicQuestions");
  const _component_q_form = (0,vue_esm_bundler/* resolveComponent */.up)("q-form");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "LHh lpR lFf",
    class: "bg-color"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: "",
        class: "container bg-color q-pb-xl flex"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          outline: "",
          "no-caps": "",
          unelevated: "",
          ripple: {
            color: 'accent'
          },
          color: "primary",
          class: "rounded slide-hover button-gm-outline-dark text-body1 font-medium button-md",
          to: "/"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "20px",
            name: "icon-arrow-narrow-left",
            class: "q-pr-xs"
          }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Back to Growmodo ")]),
          _: 1
        })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [!_ctx.request_submitted ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, " Request a " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.isTask ? 'Task' : 'Project'), 1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          bordered: "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded shadows-sm full-width", {
            ['card-padding-md']: _ctx.$q.screen.lt.md,
            ['card-padding-lg']: !_ctx.$q.screen.lt.md
          }])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_form, {
            autocorrect: "off",
            autocapitalize: "off",
            autocomplete: "off",
            spellcheck: "false",
            onSubmit: _cache[1] || (_cache[1] = (0,vue_esm_bundler/* withModifiers */.iM)(() => {}, ["prevent"]))
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [_ctx.request_submitted ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_6, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
              icon: "icon-check-circle-broken"
            })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Thank you."), _hoisted_9, (0,vue_esm_bundler/* createTextVNode */.Uk)("Your " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.isTask ? 'task' : 'project') + " have been successfully submitted. ", 1)])])) : _ctx.showSkeleton ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_10, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([1, 2, 3, 4], j => {
              return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                class: "col-12",
                key: j
              }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
                width: `${j % 2 == 0 ? 45 : 35}%`,
                type: "QBadge",
                class: "q-my-md"
              }, null, 8, ["width"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
                type: "QToolbar",
                width: "100%"
              })]);
            }), 64))])])) : ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
              key: 2
            }, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.questions, (question, i) => {
              return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                key: question,
                name: i,
                class: "col-12"
              }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_14, (0,vue_esm_bundler/* toDisplayString */.zw)(question.title), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_15, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicQuestions, {
                autofocus: false,
                question: question,
                initAnswer: _ctx.answer[question.id],
                platforms: question.options,
                onAnswered: ans => _ctx.answer[question.id] = ans,
                textareaRow: 5
              }, null, 8, ["question", "initAnswer", "platforms", "onAnswered"])])])], 8, _hoisted_12);
            }), 128)), !_ctx.request_submitted ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
              key: 3
            }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_16, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_17, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "icon-alert-circle",
              size: "sm",
              class: "q-pr-sm",
              color: "warning-500"
            }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Turnaround time might be longer if the brief is incomplete. ")])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_18, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_19, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              "no-caps": "",
              unelevated: "",
              color: "primary",
              disable: _ctx.showSkeleton || _ctx.request_submitting,
              class: "full-width text-body1 font-medium button-lg",
              onClick: _ctx.submitRequest
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Submit Request "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "20px",
                name: "icon-arrow-narrow-right",
                class: "q-pl-xs"
              })]),
              _: 1
            }, 8, ["disable", "onClick"])])])], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
              key: 4
            }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_20, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              outline: "",
              "no-caps": "",
              ripple: {
                color: 'accent'
              },
              color: "primary",
              class: "rounded slide-hover full-width text-body1 font-medium button-gm-outline-dark button-lg",
              onClick: _ctx.$root.goTo_Home
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "20px",
                name: "icon-arrow-narrow-left",
                class: "q-pr-sm"
              }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Back to home ")]),
              _: 1
            }, 8, ["onClick"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_21, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              "no-caps": "",
              unelevated: "",
              ripple: {
                color: 'accent'
              },
              color: "primary",
              class: "rounded slide-hover full-width text-body1 font-medium button-lg",
              onClick: _cache[0] || (_cache[0] = $event => _ctx.goTo_Directory())
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Add your next request ")]),
              _: 1
            })])], 64))])]),
            _: 1
          })]),
          _: 1
        }, 8, ["class"])])])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/Request/QuickRequestForm.vue?vue&type=template&id=06c93041

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/app/index.js + 3 modules
var app = __webpack_require__(39);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(93458);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Request/QuickRequestForm.vue?vue&type=script&lang=js






/* harmony default export */ const QuickRequestFormvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'QuickRequest',
  components: {
    CardIconBox: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 16122))),
    DynamicQuestions: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 766).then(__webpack_require__.bind(__webpack_require__, 72766)))
  },
  mixins: [mixins/* RequestOptions_Mixin */.Tt],
  data() {
    return {
      request: {},
      questions: (0,vue_esm_bundler/* ref */.iH)([]),
      answer: (0,vue_esm_bundler/* ref */.iH)({}),
      request_submitting: false,
      request_submitted: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['taskDirectory', 'projectDirectory']),
    title() {
      return `Quick Request - ${this.isTask ? 'Task' : 'Project'}`;
    },
    type() {
      return this.$route.params?.quickRequestType || 'task';
    },
    isTask() {
      return this.type.toLowerCase() === 'task' ? true : false;
    },
    showSkeleton() {
      return !this.questions.length;
    },
    typeId() {
      const id = this.questions.findIndex(e => e.type === (this.isTask ? 'select_tasktype' : 'select_projecttype'));
      return this.questions[id];
    },
    typeanswer() {
      return this.answer[this.typeId?.id];
    },
    requestType() {
      return this[this.isTask ? 'taskDirectory' : 'projectDirectory'][this.typeanswer?.value] || {};
    }
  },
  async mounted() {
    this.$root.setMeta({
      title: this.title
    });
    const response = this.isTask ? await this.getTaskQuickRequest() : {};
    this.questions = response?.data?.dynamic_questions || [];
    await this.init_declare();
    this.init();
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['getTaskQuickRequest', 'requestTask', 'requestProject']),
    ...(0,pinia/* mapActions */.nv)(app/* default */.Z, ['init_RequestForm']),
    async init_declare() {
      this.answer = {};
      this.request_submitting = false;
      this.request_submitted = false;
      this.uploads = {};
    },
    async submitRequest() {
      this.request_submitting = true;
      const payload = this.formatDynamicAnswersPayload({
        title: `Quick Request - ${this.requestType.title}`,
        [`${this.isTask ? 'task' : 'project'}_id`]: this.requestType.id,
        [`${this.isTask ? 'task' : 'project'}_type_id`]: this.requestType.tags?.[0],
        dynamic_questions: this.answer
      });
      const response = this.isTask ? await this.requestTask(payload) : await this.requestProject(payload);
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        if (message) this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: message
        });
        this.request_submitted = true;
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Request submittion failed!'
        });
      }
      this.request_submitting = false;
    },
    async init() {
      this.init_RequestForm();
    },
    goTo_Directory(model) {
      if (!model) model = this.isTask ? 'task' : 'project';
      // Open Directory
      this.$root.toggleRequest(model == 'task' ? 'project' : 'task', false);
      this.$root.toggleRequest(model, true);
    }
  }
}));
;// CONCATENATED MODULE: ./src/pages/Request/QuickRequestForm.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(20249);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(12133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(69885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8326);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/skeleton/QSkeleton.js
var QSkeleton = __webpack_require__(57133);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Request/QuickRequestForm.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(QuickRequestFormvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const QuickRequestForm = (__exports__);
;








runtime_auto_import_default()(QuickRequestFormvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QCard: QCard/* default */.Z,QForm: QForm/* default */.Z,QSkeleton: QSkeleton/* default */.ZP});


/***/ })

}]);
//# sourceMappingURL=841.83402c37.js.map