"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[932],{

/***/ 97932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ GrowmodoTestimonials)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/GrowmodoTestimonials.vue?vue&type=template&id=53331b6e

const _hoisted_1 = {
  class: "full-width"
};
const _hoisted_2 = {
  class: "q-py-lg font-medium text-h5"
};
const _hoisted_3 = {
  class: "relative-position q-py-xs",
  style: {
    "max-width": "68px"
  }
};
const _hoisted_4 = {
  class: "q-pt-md"
};
const _hoisted_5 = {
  class: "text-body1 font-demi-bold"
};
const _hoisted_6 = {
  class: "text-body1 text-primary-400"
};
const _hoisted_7 = {
  class: "q-col-gutter-sm q-pt-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_rating = (0,vue_esm_bundler/* resolveComponent */.up)("q-rating");
  const _component_q_img = (0,vue_esm_bundler/* resolveComponent */.up)("q-img");
  const _component_q_carousel_slide = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel-slide");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_carousel_control = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel-control");
  const _component_q_carousel = (0,vue_esm_bundler/* resolveComponent */.up)("q-carousel");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "bg-transparent"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel, {
      infinite: "",
      animated: "",
      swipeable: "",
      modelValue: _ctx.activeTestimonial,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.activeTestimonial = $event),
      "control-color": "secondary",
      ref: "testimonialCarousel",
      "transition-next": "slide-left",
      "transition-prev": "slide-right",
      class: "bg-transparent rounded fit"
    }, {
      control: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_carousel_control, {
        position: "bottom-left",
        offset: [0, 0]
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.testimonials.slice(0, _ctx.max), item => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
            key: item.id
          }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "icon-circle-01",
            size: "14px",
            color: _ctx.activeTestimonial === item.id ? 'logo3' : `primary-${_ctx.dark ? '500' : '400'}`,
            class: "hover-text-logo3 cursor-pointer",
            onClick: $event => _ctx.$refs.testimonialCarousel.goTo(item.id)
          }, null, 8, ["color", "onClick"])]);
        }), 128))])]),
        _: 1
      })]),
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.testimonials.slice(0, _ctx.max), item => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_carousel_slide, {
          key: item.id,
          name: item.id,
          class: "q-px-none q-pt-none q-pb-xl fit"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_rating, {
            readonly: "",
            modelValue: item.rating,
            "onUpdate:modelValue": $event => item.rating = $event,
            size: "sm",
            color: "logo3",
            icon: "icon-star-fill"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(item.comment), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_img, {
            src: item.avatar,
            ratio: 1,
            style: {
              "height": "64px",
              "max-width": "64px"
            },
            "img-class": "round",
            loading: "lazy",
            "spinner-color": "secondary"
          }, null, 8, ["src"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_img, {
            src: item.company_avatar,
            ratio: 1,
            style: {
              "height": "20px",
              "max-width": "20px"
            },
            "img-class": "round border-add border-md border-primary",
            loading: "lazy",
            "spinner-color": "secondary",
            class: "absolute-bottom-right"
          }, null, 8, ["src"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, (0,vue_esm_bundler/* toDisplayString */.zw)(item.firtname) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(item.lastname), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)])])]),
          _: 2
        }, 1032, ["name"]);
      }), 128))]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/GrowmodoTestimonials.vue?vue&type=template&id=53331b6e

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/GrowmodoTestimonials.vue?vue&type=script&lang=js



/* harmony default export */ const GrowmodoTestimonialsvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'GrowmodoTestimonials',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      activeTestimonial: 1
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['testimonials'])
  }
}));
;// CONCATENATED MODULE: ./src/components/GrowmodoTestimonials.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js
var QCarousel = __webpack_require__(97052);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(41694);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/rating/QRating.js
var QRating = __webpack_require__(1570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js
var QImg = __webpack_require__(91487);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselControl.js
var QCarouselControl = __webpack_require__(10033);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/GrowmodoTestimonials.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(GrowmodoTestimonialsvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const GrowmodoTestimonials = (__exports__);
;







runtime_auto_import_default()(GrowmodoTestimonialsvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCarousel: QCarousel/* default */.Z,QCarouselSlide: QCarouselSlide/* default */.Z,QRating: QRating/* default */.Z,QImg: QImg/* default */.Z,QCarouselControl: QCarouselControl/* default */.Z,QIcon: QIcon/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=932.a906507a.js.map