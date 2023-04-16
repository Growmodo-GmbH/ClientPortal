"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[746],{

/***/ 4746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RequestForm)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(6646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Request/RequestForm.vue?vue&type=template&id=0ad52128

const _hoisted_1 = {
  class: "q-pt-sm q-mt-xs q-pb-xl q-px-lg"
};
const _hoisted_2 = {
  key: 0
};
const _hoisted_3 = {
  style: {
    "max-width": "100vw",
    "width": "650px"
  }
};
const _hoisted_4 = {
  key: 0,
  class: "q-px-lg q-pb-md"
};
const _hoisted_5 = {
  class: "row q-col-gutter-md"
};
const _hoisted_6 = {
  class: "full-width text-left q-py-lg"
};
const _hoisted_7 = {
  class: "font-medium text-h4 q-py-sm"
};
const _hoisted_8 = {
  class: "text-body2 text-primary-500"
};
const _hoisted_9 = {
  class: "full-width"
};
const _hoisted_10 = {
  class: "full-width text-left q-py-md"
};
const _hoisted_11 = {
  key: 0,
  class: "text-body2 text-primary-500"
};
const _hoisted_12 = {
  class: "full-width"
};
const _hoisted_13 = {
  key: 1,
  class: "full-width q-px-lg q-py-sm"
};
const _hoisted_14 = {
  class: "text-center"
};
const _hoisted_15 = {
  class: "full-width font-medium text-h4 q-pt-lg text-center"
};
const _hoisted_16 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("br", null, null, -1);
const _hoisted_17 = {
  key: 2,
  class: "row items-center justify-center q-px-lg q-pt-none q-mt-none q-col-gutter-md"
};
const _hoisted_18 = {
  key: 0,
  class: "col"
};
const _hoisted_19 = {
  key: 1,
  class: "col"
};
const _hoisted_20 = {
  key: 2,
  class: "col"
};
const _hoisted_21 = {
  class: "col"
};
const _hoisted_22 = {
  class: "col"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GrowmodoTextIcon = (0,vue_esm_bundler/* resolveComponent */.up)("GrowmodoTextIcon");
  const _component_q_step = (0,vue_esm_bundler/* resolveComponent */.up)("q-step");
  const _component_q_stepper = (0,vue_esm_bundler/* resolveComponent */.up)("q-stepper");
  const _component_q_scroll_area = (0,vue_esm_bundler/* resolveComponent */.up)("q-scroll-area");
  const _component_q_drawer = (0,vue_esm_bundler/* resolveComponent */.up)("q-drawer");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_breadcrumbs_el = (0,vue_esm_bundler/* resolveComponent */.up)("q-breadcrumbs-el");
  const _component_q_breadcrumbs = (0,vue_esm_bundler/* resolveComponent */.up)("q-breadcrumbs");
  const _component_q_space = (0,vue_esm_bundler/* resolveComponent */.up)("q-space");
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_toolbar = (0,vue_esm_bundler/* resolveComponent */.up)("q-toolbar");
  const _component_q_header = (0,vue_esm_bundler/* resolveComponent */.up)("q-header");
  const _component_q_skeleton = (0,vue_esm_bundler/* resolveComponent */.up)("q-skeleton");
  const _component_DynamicQuestions = (0,vue_esm_bundler/* resolveComponent */.up)("DynamicQuestions");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_form = (0,vue_esm_bundler/* resolveComponent */.up)("q-form");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_page = (0,vue_esm_bundler/* resolveComponent */.up)("q-page");
  const _component_q_page_container = (0,vue_esm_bundler/* resolveComponent */.up)("q-page-container");
  const _component_q_layout = (0,vue_esm_bundler/* resolveComponent */.up)("q-layout");
  const _directive_close_popup = (0,vue_esm_bundler/* resolveDirective */.Q2)("close-popup");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "LHh lpR lFf",
    class: "bg-color"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      bordered: "",
      "show-if-above": "",
      modelValue: _ctx.containerSideMenu,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.containerSideMenu = $event),
      side: "left",
      width: 300,
      breakpoint: 900,
      overlay: _ctx.$q.screen.width <= 800,
      class: "bg-primary text-white q-px-md"
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
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_GrowmodoTextIcon, {
          dark: "",
          class: "cursor-pointer q-px-xs q-py-sm",
          onClick: _ctx.$root.goTo_Home
        }, null, 8, ["onClick"])]), _ctx.showSkeleton ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_stepper, {
          key: 0,
          modelValue: _ctx.step,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.step = $event),
          animated: "",
          vertical: "",
          contracted: "",
          "header-nav": false,
          "header-class": "text-body1",
          color: "white",
          "done-icon": "icon-tick text-h4 text-secondary",
          "done-color": "white",
          "active-icon": "icon-circle-01 text-body2 text-secondary",
          "active-color": "primary-200",
          "inactive-icon": "icon-circle-01 text-body2 text-primary-200",
          "inactive-color": "primary",
          "error-icon": "icon-alert-triangle",
          "error-color": "negative",
          class: "stepper-request bg-transparent rounded no-shadow stepper-dark"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([1, 2, 3, 4, 5], j => {
            return (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              key: j,
              name: j,
              title: "Loading...",
              color: "white"
            }, null, 8, ["name"]);
          }), 64))]),
          _: 1
        }, 8, ["modelValue"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_stepper, {
          key: 1,
          modelValue: _ctx.step,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.step = $event),
          animated: "",
          vertical: "",
          contracted: "",
          "header-nav": false,
          "header-class": "text-body1",
          color: "white",
          "done-icon": "icon-tick text-h4 text-secondary",
          "done-color": "white",
          "active-icon": "icon-circle-01 text-body2 text-secondary",
          "active-color": "primary-200",
          "inactive-icon": "icon-circle-01 text-body2 text-primary-200",
          "inactive-color": "primary",
          "error-icon": "icon-alert-triangle",
          "error-color": "negative",
          class: "stepper-request bg-transparent rounded no-shadow stepper-dark"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.dynamic_questions_array, (question, i) => {
            return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_step, {
              key: question,
              name: i,
              color: "white",
              title: question.title,
              done: _ctx.step > i || _ctx.request_submitted
            }, null, 8, ["name", "title", "done"]);
          }), 128))]),
          _: 1
        }, 8, ["modelValue"]))]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "overlay"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-white"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "bg-transparent q-pa-lg"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs, {
          "active-color": "primary-500",
          "separator-color": "primary-500",
          gutter: "xs"
        }, {
          separator: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "xs",
            name: "icon-chevron-right",
            class: "q-py-xs"
          })]),
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            icon: "icon-home-line",
            class: "q-py-xs q-pr-sm cursor-pointer text-primary-500 hover-text-secondary",
            onClick: _ctx.$root.goTo_Home
          }, null, 8, ["onClick"]), [[_directive_close_popup, -1]]), (0,vue_esm_bundler/* withDirectives */.wy)((0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            label: `${_ctx.isTask ? 'Task' : 'Project'} Directory`,
            class: "q-py-xs q-px-sm rounded cursor-pointer hover-text-secondary text-primary-500 font-medium",
            onClick: _cache[3] || (_cache[3] = $event => _ctx.goTo_Directory())
          }, null, 8, ["label"]), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_breadcrumbs_el, {
            label: _ctx.requestInfo.title || `New ${_ctx.isTask ? 'Task' : 'Project'}`,
            class: "text-secondary bg-accent q-py-xs q-px-sm rounded font-medium"
          }, null, 8, ["label"])]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_space),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: "",
        class: "bg-white flex flex-center"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          style: {
            "margin-top": "-100px"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_form, {
              autocorrect: "off",
              autocapitalize: "off",
              autocomplete: "off",
              spellcheck: "false",
              onSubmit: _cache[7] || (_cache[7] = (0,vue_esm_bundler/* withModifiers */.iM)(() => {}, ["prevent"]))
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.request_submitted ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
                key: 0
              }, [_ctx.showSkeleton ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
                type: "QToolbar",
                width: "70%"
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
                width: "45%",
                type: "QBadge",
                class: "q-my-md"
              }), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)([1, 2, 3, 4], j => {
                return (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  class: "col-6",
                  key: j
                }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
                  type: "QInput"
                })]);
              }), 64))])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_stepper, {
                key: 1,
                modelValue: _ctx.step,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.step = $event),
                flat: "",
                animated: "",
                "header-nav": "",
                contracted: "",
                color: "primary",
                ref: "formStepper",
                "header-class": "hidden",
                class: "full-width"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.dynamic_questions_array, (question, i) => {
                  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_step, {
                    key: question,
                    name: i,
                    title: question.title,
                    color: "white",
                    "error-color": "negative",
                    icon: "step:inactive",
                    "active-color": "white",
                    "active-icon": "step:active",
                    "done-icon": "step:done",
                    "done-color": "white",
                    class: "q-py-sm"
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(question.title), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_8, (0,vue_esm_bundler/* toDisplayString */.zw)(question.question), 1)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicQuestions, {
                      autofocus: true,
                      question: question,
                      initAnswer: _ctx.answer[question.id],
                      platforms: _ctx.requestInfo.platforms,
                      onAnswered: ans => _ctx.answer[question.id] = ans
                    }, null, 8, ["question", "initAnswer", "platforms", "onAnswered"])]), question.alternative_if && (_ctx.answer[question.id].value === question.alternative_if || _ctx.answer[question.id].value.value === question.alternative_if) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
                      key: 0
                    }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [question.alternative_question ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_11, (0,vue_esm_bundler/* toDisplayString */.zw)(question.alternative_question), 1)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_DynamicQuestions, {
                      question: {
                        id: question.id,
                        type: question.alternative_type,
                        required: question.required,
                        options: question.alternative_options
                      },
                      initAnswer: {
                        value: _ctx.answer[question.id].alternative_answer
                      },
                      platforms: _ctx.requestInfo.platforms,
                      onAnswered: ans => _ctx.answer[question.id].alternative_answer = ans?.value
                    }, null, 8, ["question", "initAnswer", "platforms", "onAnswered"])])], 64)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
                    _: 2
                  }, 1032, ["name", "title"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"]))], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_13, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                icon: "icon-check-circle-broken"
              })]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_15, [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Thank you."), _hoisted_16, (0,vue_esm_bundler/* createTextVNode */.Uk)("Your " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.isTask ? 'task' : 'project') + " have been successfully submitted. ", 1)])])), !_ctx.showSkeleton ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_17, [!_ctx.request_submitted ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
                key: 0
              }, [_ctx.step > 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_18, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                outline: "",
                "no-caps": "",
                unelevated: "",
                ripple: {
                  color: 'accent'
                },
                color: "primary",
                class: "rounded slide-hover full-width button-gm-outline-dark text-body1 font-medium button-lg",
                disable: _ctx.request_submitting,
                onClick: _cache[5] || (_cache[5] = $event => _ctx.previousStep())
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                  size: "20px",
                  name: "icon-arrow-narrow-left",
                  class: "q-pr-xs"
                }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Back ")]),
                _: 1
              }, 8, ["disable"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.step === _ctx.dynamic_questions_array.length - 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_19, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                "no-caps": "",
                unelevated: "",
                ripple: {
                  color: 'accent'
                },
                color: "primary",
                class: "rounded slide-hover full-width text-body1 font-medium button-lg",
                disable: _ctx.showSkeleton || _ctx.request_submitting,
                onClick: _ctx.submitRequest
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Submit " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.isTask ? 'Task' : 'Project') + " ", 1), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                  size: "20px",
                  name: "icon-arrow-narrow-right",
                  class: "q-pl-xs"
                })]),
                _: 1
              }, 8, ["disable", "onClick"])])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_20, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                "no-caps": "",
                unelevated: "",
                ripple: {
                  color: 'accent'
                },
                color: "primary",
                class: "rounded slide-hover full-width text-body1 font-medium button-lg",
                disable: _ctx.request_submitting,
                onClick: _ctx.nextStep
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Continue "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                  size: "20px",
                  name: "icon-arrow-narrow-right",
                  class: "q-pl-xs"
                })]),
                _: 1
              }, 8, ["disable", "onClick"])]))], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
                key: 1
              }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_21, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
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
              }, 8, ["onClick"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_22, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                "no-caps": "",
                unelevated: "",
                ripple: {
                  color: 'accent'
                },
                color: "primary",
                class: "rounded slide-hover full-width text-body1 font-medium button-lg",
                onClick: _cache[6] || (_cache[6] = $event => _ctx.goTo_Directory())
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Add your next request ")]),
                _: 1
              })])], 64))])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
              _: 1
            })])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/Request/RequestForm.vue?vue&type=template&id=0ad52128

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(9665);
// EXTERNAL MODULE: ./src/components/GrowmodoTextIcon.vue + 4 modules
var GrowmodoTextIcon = __webpack_require__(2788);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(6122);
// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(3458);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(1872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(2393);
// EXTERNAL MODULE: ./src/stores/app/index.js + 3 modules
var app = __webpack_require__(39);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(5487);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Request/RequestForm.vue?vue&type=script&lang=js











/* harmony default export */ const RequestFormvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'FormNewRequest',
  mixins: [mixins/* RequestOptions_Mixin */.Tt, mixins/* FileUploader_Mixin */.GU, mixins/* Editor_Mixin */.kE],
  components: {
    GrowmodoTextIcon: GrowmodoTextIcon/* default */.Z,
    CardIconBox: CardIconBox["default"],
    DynamicQuestions: (0,vue_esm_bundler/* defineAsyncComponent */.RC)(() => __webpack_require__.e(/* import() */ 654).then(__webpack_require__.bind(__webpack_require__, 654)))
  },
  data() {
    return {
      step: -1,
      answer: (0,vue_esm_bundler/* ref */.iH)({}),
      request_submitting: false,
      request_submitted: false,
      containerSideMenu: false,
      uploads: {}
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['taskDirectory_Categories', 'projectDirectory_Categories', 'taskDirectory', 'projectDirectory']),
    taskRouteId() {
      return this.$route.params?.taskId;
    },
    projectRouteId() {
      return this.$route.params?.projectId;
    },
    isTask() {
      return this.taskRouteId;
    },
    requestInfo() {
      return (this.isTask ? this.taskDirectory[this.taskRouteId] : this.projectDirectory[this.projectRouteId]) || {};
    },
    showSkeleton() {
      return !this.dynamic_questions_array.length ||
      // Object.keys(this.answer).length !==
      //   this.dynamic_questions_array.length ||
      this.step === -1;
    },
    dynamic_questions_array() {
      return this.requestInfo.questions || [];
    },
    dynamic_questions() {
      const data = {};
      for (const question of this.dynamic_questions_array) {
        data[question.id] = question;
      }
      return data;
    }
  },
  watch: {
    ['taskRouteId']: {
      async handler(val) {
        if (val) {
          await this.init_declare();
          this.init();
        }
      }
    }
  },
  async mounted() {
    this.isTask ? await this.getTaskDirectory() : await this.getProjectDirectory();
    await this.init_declare();
    this.init();
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['requestTask', 'requestProject', 'getTaskDirectory', 'getProjectDirectory']),
    ...(0,pinia/* mapActions */.nv)(app/* default */.Z, ['init_RequestForm']),
    async init_declare() {
      this.step = -1;
      this.answer = (0,vue_esm_bundler/* ref */.iH)({});
      this.request_submitting = false;
      this.request_submitted = false;
      this.uploads = (0,vue_esm_bundler/* ref */.iH)({});
      // Back to Home if Not Task or Poject
      if (!this.requestInfo?.title) this.$root.goTo_Home();
    },
    async init() {
      this.$root.setMeta({
        title: this.requestInfo.title
      });
      this.step = 0;
      this.init_RequestForm();
    },
    async submitRequest() {
      if (!this.validateData()) return;
      this.request_submitting = true;
      const payload = {
        title: this.requestInfo.title,
        [`${this.isTask ? 'task' : 'project'}_type_id`]: this.requestInfo.tags[0]
      };
      const dynamic_questions = [];
      for (const i of Object.keys(this.answer)) {
        dynamic_questions.push({
          id: i,
          answer: (0,functions.checkIfArray)(this.answer[i]) ? this.answer[i] : [this.answer[i]]
        });
      }
      payload.dynamic_questions = dynamic_questions;
      const response = this.isTask ? await this.requestTask(payload) : await this.requestProject(payload);
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response.success) {
        if (message) this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: message
        });
        this.step++;
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
    factoryFn(files) {
      return new Promise((resolve, reject) => {
        const token = fn_store/* default.getAuth */.Z.getAuth();
        resolve({
          method: 'POST',
          fieldName: 'uploads[]',
          url: `${this.$config?.api?.baseURL}/file/temp`,
          headers: [{
            name: 'Authorization',
            value: `Bearer ${token}`
          }],
          withCredentials: false
        });
      });
    },
    toogleContainerSideMenu(force = null) {
      this.containerSideMenu = force !== null ? force : !this.containerSideMenu;
    },
    validateData() {
      if (!this.answer || isNaN(this.step) || !this.dynamic_questions || !this.dynamic_questions_array[this.step]) return;
      // Question Information
      const question = this.dynamic_questions_array[this.step] || {};
      // Upload needs to be done
      let response = true;
      if (question.type.startsWith('upload')) {
        const uploads = this.uploads[`upload${question.id}`];
        for (const file of uploads?.files || []) {
          if (file.__status === 'uploading') {
            response = false;
            break;
          } else {
            response = true;
          }
        }
      }
      if (!response) {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: 'Upload is still in progress.'
        });
        return false;
      } else {
        // No problem If not Required
        if (question.required === false) return true;
        // If Required and no answer
        if (!this.answer[question.id]?.value) return false;
        // Check if alternative and is provided
        if (question.alternative_if && question.alternative_if == this.answer[question.id]?.value?.value && !this.answer[question.id]?.value?.alternative_answer) return false;
        // If Some empty objects
        if (typeof this.answer[question.id]?.value === 'object') {
          if (JSON.stringify(this.answer[question.id]?.value) == '{}' || JSON.stringify(this.answer[question.id]?.value) == '[]') return false;
        }
        // If textarea2 can't just <br>
        if (question.type === 'textarea2' && this.answer[question.id]?.value == '<br>') return false;
        if (true) console.warn('Answer:', this.answer[question.id]);
        return true;
      }
    },
    previousStep() {
      this.$refs?.['formStepper']?.previous?.();
    },
    nextStep() {
      if (this.validateData()) this.$refs?.['formStepper']?.next?.();
    },
    gotoStep(step_no) {
      this.$refs?.['formStepper']?.goTo?.(step_no);
    },
    goTo_Directory(model) {
      if (!model) model = this.isTask ? 'task' : 'project';
      // Open Directory
      this.$root.toggleRequest(model == 'task' ? 'project' : 'task', false);
      this.$root.toggleRequest(model, true);
    }
  }
}));
;// CONCATENATED MODULE: ./src/pages/Request/RequestForm.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(249);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(6663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__(8225);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js
var QStep = __webpack_require__(6017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(6602);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(1663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbs.js
var QBreadcrumbs = __webpack_require__(2605);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(2857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/breadcrumbs/QBreadcrumbsEl.js
var QBreadcrumbsEl = __webpack_require__(8052);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(9885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(4458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(3190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8326);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/skeleton/QSkeleton.js
var QSkeleton = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(8879);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(2146);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Request/RequestForm.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RequestFormvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const RequestForm = (__exports__);
;


















runtime_auto_import_default()(RequestFormvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBreadcrumbs: QBreadcrumbs/* default */.Z,QIcon: QIcon/* default */.Z,QBreadcrumbsEl: QBreadcrumbsEl/* default */.Z,QSpace: QSpace/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QForm: QForm/* default */.Z,QSkeleton: QSkeleton/* default */.ZP,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(RequestFormvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=746.a6c96ae7.js.map