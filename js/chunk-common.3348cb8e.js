"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[64],{

/***/ 34267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ Editor),
  "G": () => (/* reexport */ FileUploader)
});

;// CONCATENATED MODULE: ./src/mixins/FileUploader.js
/* harmony default export */ const FileUploader = ({
  data() {
    return {
      acceptedImageTypes: ['image/x-icon', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/gif']
    };
  },
  methods: {
    checkFileExtensions(files, allowedExt = []) {
      return files.filter(file => {
        let toUp = false;
        allowedExt.forEach(ext => {
          if (!toUp) toUp = String(file?.name)?.toLowerCase()?.endsWith(ext);
        });
        return toUp;
      });
    },
    addUploadToModel(modelVar, modelId, files, uploaderRef) {
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
    },
    removeUploadToModel(modelVar, modelId, fileId, uploaderRef) {
      if (!this[modelVar]) {
        console.error('Model var is missing');
        return;
      }
      if (!this?.[modelVar]?.[modelId]?.files?.length) return;
      let file = this[modelVar][modelId]?.files.splice?.(fileId, 1)?.[0];
      if (file) {
        this[modelVar][modelId].removedFile = file;
        this.$refs[uploaderRef]?.removeFile?.(file);
      }
    },
    onRejected(rejectedEntries) {
      let message = `File${rejectedEntries?.length > 1 ? 's' : ''} did not pass validation constraints!`;
      this.$q.notify({
        icon: 'icon-alert-triangle',
        iconColor: 'negative',
        message
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
;// CONCATENATED MODULE: ./src/mixins/index.js




/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ app)
});

// NAMESPACE OBJECT: ./src/stores/app/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);

// NAMESPACE OBJECT: ./src/stores/app/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "init": () => (init),
  "init_LoggedIn": () => (init_LoggedIn),
  "init_Signup": () => (init_Signup)
});

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
;// CONCATENATED MODULE: ./src/stores/app/state.js
// import { reactive } from 'vue';

/* harmony default export */ function state() {
  return {};
}
;// CONCATENATED MODULE: ./src/stores/app/getters.js

// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./src/stores/app/actions.js



const actions_user = (0,user/* default */.Z)();
const actions_growmodo = (0,growmodo/* default */.Z)();
const actions_helpers = (0,helpers/* default */.Z)();
function init() {
  // useGrowmodo
  actions_growmodo.getExternalLinks();
  actions_growmodo.getUserRoles();
  actions_growmodo.getBrandCategories();
  actions_growmodo.getCompanyTypes();
  actions_growmodo.getSubscription_Talents();
  actions_growmodo.getSubscription_BillingTypes();
  // useHelpers
  actions_helpers.getSocialMediaPlatforms();
}
async function init_Signup() {
  this.init();
  actions_helpers.getEmployeeCount();
}
async function init_LoggedIn() {
  this.init();
  actions_growmodo.getPlatforms();
  actions_user.getOrgUsers();
  actions_growmodo.getTaskCategories();
  actions_growmodo.getTaskDirectory();
  actions_growmodo.getProjectCategories();
  actions_growmodo.getProjectDirectory();
}

;// CONCATENATED MODULE: ./src/stores/app/index.js




/* harmony default export */ const app = ((0,pinia/* defineStore */.Q_)('useApp', {
  state: state,
  getters: getters_namespaceObject,
  actions: {
    ...actions_namespaceObject
  }
}));

/***/ }),

/***/ 98215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ asana)
});

// NAMESPACE OBJECT: ./src/stores/asana/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  "allCustom_fields": () => (allCustom_fields),
  "customFieldsGIDs": () => (customFieldsGIDs),
  "customFieldsNames": () => (customFieldsNames)
});

// NAMESPACE OBJECT: ./src/stores/asana/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "createEnumOptionForCustomField": () => (createEnumOptionForCustomField),
  "createTask": () => (createTask),
  "getCustomField": () => (getCustomField),
  "getCustomFieldEnum": () => (getCustomFieldEnum),
  "getCustomFieldsForWorkspace": () => (getCustomFieldsForWorkspace)
});

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./src/stores/asana/state.js

/* harmony default export */ function state() {
  return {
    workspace: '1200511455149031',
    project: '1200619024958164',
    assignee: '1200308042793726',
    custom_fields: (0,vue_esm_bundler/* reactive */.qj)([{
      gid: '1200624080428398',
      name: 'Link to Drive',
      resource_subtype: 'text',
      resource_type: 'custom_field',
      type: 'text'
    }, {
      gid: '1200624089980411',
      enum_options: [{
        gid: '1200624089981441',
        color: 'cool-gray',
        enabled: true,
        name: 'Urgent',
        resource_type: 'enum_option'
      }, {
        gid: '1200624089982473',
        color: 'red',
        enabled: true,
        name: 'High',
        resource_type: 'enum_option'
      }, {
        gid: '1200624089982477',
        color: 'orange',
        enabled: true,
        name: 'Medium',
        resource_type: 'enum_option'
      }, {
        gid: '1200624089982482',
        color: 'yellow',
        enabled: true,
        name: 'Low',
        resource_type: 'enum_option'
      }],
      name: 'Priority',
      resource_subtype: 'enum',
      resource_type: 'custom_field',
      type: 'enum'
    }, {
      gid: '1200624091130495',
      enum_options: [{
        gid: '1200624091130501',
        color: 'aqua',
        enabled: true,
        name: 'Tech',
        resource_type: 'enum_option'
      }, {
        gid: '1200624091130503',
        color: 'purple',
        enabled: true,
        name: 'Design',
        resource_type: 'enum_option'
      }, {
        gid: '1200624091130568',
        color: 'orange',
        enabled: true,
        name: 'Webflow',
        resource_type: 'enum_option'
      }, {
        gid: '1200624091131599',
        color: 'blue',
        enabled: true,
        name: 'Advice',
        resource_type: 'enum_option'
      }],
      name: 'Task Type',
      resource_subtype: 'enum',
      resource_type: 'custom_field',
      type: 'enum'
    }, {
      gid: '1200624093458880',
      enum_options: [{
        gid: '1200624093458883',
        color: 'green',
        enabled: true,
        name: '.5 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093458890',
        color: 'orange',
        enabled: true,
        name: '1 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093459924',
        color: 'red',
        enabled: true,
        name: '2 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093460955',
        color: 'yellow',
        enabled: true,
        name: '3 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093460962',
        color: 'blue',
        enabled: true,
        name: '4 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093460966',
        color: 'yellow-green',
        enabled: true,
        name: '5 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093460968',
        color: 'pink',
        enabled: true,
        name: '6 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093460971',
        color: 'aqua',
        enabled: true,
        name: '7 hr',
        resource_type: 'enum_option'
      }, {
        gid: '1200624093460975',
        color: 'magenta',
        enabled: true,
        name: '8 hr',
        resource_type: 'enum_option'
      }],
      name: 'Max Hrs',
      resource_subtype: 'enum',
      resource_type: 'custom_field',
      type: 'enum'
    }, {
      gid: '1200624156722151',
      name: 'Link to Asana',
      resource_subtype: 'text',
      resource_type: 'custom_field',
      type: 'text'
    }, {
      gid: '1202828486541159',
      enum_options: [{
        gid: '1202828486541160',
        color: 'red',
        enabled: true,
        name: 'High',
        resource_type: 'enum_option'
      }, {
        gid: '1202828486541161',
        color: 'orange',
        enabled: true,
        name: 'Medium',
        resource_type: 'enum_option'
      }, {
        gid: '1202828486541162',
        color: 'yellow-orange',
        enabled: true,
        name: 'Low',
        resource_type: 'enum_option'
      }],
      name: 'Priority',
      resource_subtype: 'enum',
      resource_type: 'custom_field',
      type: 'enum'
    }, {
      gid: '1202840732559215',
      enum_options: [{
        gid: '1202840732559216',
        color: 'cool-gray',
        enabled: true,
        name: 'No Preference',
        resource_type: 'enum_option'
      }, {
        gid: '1202845132932382',
        color: 'none',
        enabled: true,
        name: 'Wordpress',
        resource_type: 'enum_option'
      }, {
        gid: '1202845135671415',
        color: 'none',
        enabled: true,
        name: 'Octopus',
        resource_type: 'enum_option'
      }, {
        gid: '1202845075782607',
        color: 'none',
        enabled: true,
        name: 'Figma',
        resource_type: 'enum_option'
      }, {
        gid: '1202845069490673',
        color: 'none',
        enabled: true,
        name: 'Adobe XD',
        resource_type: 'enum_option'
      }, {
        gid: '1202845298881907',
        color: 'none',
        enabled: true,
        name: 'Kajabi',
        resource_type: 'enum_option'
      }, {
        gid: '1202845429043822',
        color: 'none',
        enabled: true,
        name: 'Google Docs',
        resource_type: 'enum_option'
      }, {
        gid: '1202845436701550',
        color: 'none',
        enabled: true,
        name: 'Word',
        resource_type: 'enum_option'
      }],
      name: 'Platform',
      resource_subtype: 'enum',
      resource_type: 'custom_field',
      type: 'enum'
    }]),
    tasks: (0,vue_esm_bundler/* reactive */.qj)({}),
    api: (0,vue_esm_bundler/* reactive */.qj)({
      baseURL: 'https://app.asana.com/api/1.0',
      ssrEndpoint: '/mirror/asana'
    }),
    urls: (0,vue_esm_bundler/* reactive */.qj)({
      taskDirectory: `https://app.asana.com/0`
    })
  };
}
;// CONCATENATED MODULE: ./src/stores/asana/getters.js
function customFieldsGIDs(state) {
  return state.custom_fields.length ? state.custom_fields.map(c => c.gid) : state.custom_fields;
}
function customFieldsNames(state) {
  return state.custom_fields.length ? state.custom_fields.map(c => c.name) : state.custom_fields;
}
function allCustom_fields(state) {
  return {
    gids: customFieldsGIDs(state),
    names: customFieldsNames(state)
  };
}

// EXTERNAL MODULE: ./src/boot/apis.js
var apis = __webpack_require__(18744);
;// CONCATENATED MODULE: ./src/stores/asana/actions.js

function getCustomField({
  name,
  gid,
  key,
  caseSensetive = true
}) {
  let cf = this.custom_fields.length ? this.custom_fields.filter(cf => caseSensetive ?
  // Case Sensetive
  String(name ? cf.name : cf.gid).toLowerCase() == String(name || gid).toLowerCase() :
  // None Case Sensetive
  name ? cf.name : cf.gid === name || gid) : [];
  return key ? cf?.[0]?.[key] : cf?.[0];
}
function getCustomFieldEnum({
  name,
  gid,
  caseSensetive = true,
  enum_name,
  enum_gid,
  enum_caseSensetive = true,
  key
}) {
  let cf = this.getCustomField({
    name,
    gid,
    key: 'enum_options',
    caseSensetive
  });
  if (cf && cf.length) {
    let enum_opt = cf.filter(e => enum_caseSensetive ?
    // Case Sensetive
    String(enum_name ? e.name : e.gid).toLowerCase() == String(enum_name || enum_gid).toLowerCase() :
    // None Case Sensetive
    enum_name ? e.name : e.gid === enum_name || enum_gid);
    if (enum_opt && enum_opt.length) return key ? enum_opt?.[0]?.[key] : enum_opt?.[0];
  }
}
async function createTask(payload) {
  let response = {
    success: 0
  };
  try {
    const payload_formated = {
      ...payload,
      pretty:  false ? 0 : false
    };
    return await apis.axios.post(this.api?.ssrEndpoint, {
      endpoint: `${this.api.baseURL}/tasks`,
      body: JSON.stringify({
        data: payload_formated
      }),
      method: 'post'
    }).then(result => {
      if (result.gid) {
        response.success = 1;
        this.tasks[result.guid] = result;
      } // else Error
      return {
        ...response,
        response: result
      };
    }).catch(err => {
      return {
        ...response,
        response: err
      };
    });
  } catch (err) {
    return {
      ...response,
      response: err
    };
  }
}
async function getCustomFieldsForWorkspace({
  workspace,
  payload = {}
}) {
  let response = {
    success: 0
  };
  try {
    const payload_formated = {
      ...payload,
      pretty:  false ? 0 : false
    };
    let workspaceGid = workspace || this.workspace;
    return await apis.axios.post(this.api?.ssrEndpoint, {
      endpoint: `${this.api.baseURL}/workspaces/${workspaceGid}/custom_fields`,
      body: JSON.stringify({
        data: payload_formated
      }),
      method: 'get'
    }).then(result => {
      if (result?.data) {
        response.success = 1;
        this.custom_fields = result.data;
      } // else Error
      return {
        ...response,
        response: result
      };
    }).catch(err => {
      return {
        ...response,
        response: err
      };
    });
  } catch (err) {
    return {
      ...response,
      response: err
    };
  }
}
async function createEnumOptionForCustomField({
  customFieldGid,
  payload = {}
}) {
  let response = {
    success: 0
  };
  try {
    const payload_formated = {
      ...payload,
      pretty:  false ? 0 : false
    };
    return await apis.axios.post(this.api?.ssrEndpoint, {
      endpoint: `${this.api.baseURL}/${customFieldGid}/enum_options`,
      body: JSON.stringify({
        data: payload_formated
      }),
      method: 'post'
    }).then(result => {
      if (result?.gid) {
        response.success = 1;
        let indexOfCustomField = null;
        if (this.custom_fields.length) this.custom_fields.filter((e, i) => {
          if (e.gid === customFieldGid) {
            indexOfCustomField = i;
            return true;
          }
        });
        if (indexOfCustomField !== null) if (this.custom_fields.length) this.custom_fields?.[indexOfCustomField]?.enum_options.push(result);
      } // else Error
      return {
        ...response,
        response: result
      };
    }).catch(err => {
      return {
        ...response,
        response: err
      };
    });
  } catch (err) {
    return {
      ...response,
      response: err
    };
  }
}

;// CONCATENATED MODULE: ./src/stores/asana/index.js




/* harmony default export */ const asana = ((0,pinia/* defineStore */.Q_)('useAsana', {
  state: state,
  getters: getters_namespaceObject,
  actions: {
    ...actions_namespaceObject
  }
}));

/***/ }),

/***/ 72393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ growmodo)
});

// NAMESPACE OBJECT: ./src/stores/growmodo/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);

// NAMESPACE OBJECT: ./src/stores/growmodo/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "formatPlatformIconSrc": () => (formatPlatformIconSrc),
  "getBrandCategories": () => (getBrandCategories),
  "getCompanyTypes": () => (getCompanyTypes),
  "getExternalLinks": () => (getExternalLinks),
  "getPlatformInfo": () => (getPlatformInfo),
  "getPlatforms": () => (getPlatforms),
  "getProjectCategories": () => (getProjectCategories),
  "getProjectDirectory": () => (getProjectDirectory),
  "getSubscription_BillingTypes": () => (getSubscription_BillingTypes),
  "getSubscription_Talents": () => (getSubscription_Talents),
  "getTaskCategories": () => (getTaskCategories),
  "getTaskDirectory": () => (getTaskDirectory),
  "getUserRoles": () => (getUserRoles),
  "planPriceCalculator": () => (planPriceCalculator)
});

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./src/stores/growmodo/state.js

/* harmony default export */ function state() {
  return {
    userRoles: (0,vue_esm_bundler/* reactive */.qj)({}),
    externalLinks: (0,vue_esm_bundler/* reactive */.qj)({}),
    redirect: (0,vue_esm_bundler/* reactive */.qj)({
      stripe: {
        url: 'https://dashboard.stripe.com',
        label: 'Stripe',
        icon: 'Stripe',
        message: 'You will be redirected to Stripe to manage your billing details',
        title: 'Redirect to Stripe'
      }
    }),
    testimonials: (0,vue_esm_bundler/* reactive */.qj)([{
      id: 1,
      rating: 5,
      comment: `Thank you Growmodo! Your service allowed our team to stay focused on our business as they executed on website tasks- critical and small.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Jonathan Kirschner.png',
      firtname: 'Jonathan',
      lastname: 'Kirschner',
      label: 'AIIR Consulting'
    }, {
      id: 2,
      rating: 5,
      comment: `We're extremely happy with Growmodo. Our project manager has been exceptional. She's always very prompt with replies and communicating how things are going.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Lauren Gilmore.png',
      firtname: 'Lauren',
      lastname: 'Gilmore',
      label: 'Hyperfocal'
    }, {
      id: 3,
      rating: 5,
      comment: `Before finding Growmodo we were struggling to find good designers. With their service, we now have a dedicated team of designers that creates all our page designs, and the cost is very affordable.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/​​Aurelien Amacker.png',
      firtname: '​​Aurelien',
      lastname: 'Amacker',
      label: 'Systeme'
    }, {
      id: 4,
      rating: 5,
      comment: `I have been working with Growmodo for nearly two years now. With their keen eye for design, development skills and expert project management, I have managed to serve a lot more clients than I would without them.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Gaute Remen.png',
      firtname: 'Gaute',
      lastname: 'Remen',
      label: 'Synlighet'
    }, {
      id: 5,
      rating: 5,
      comment: `The Growmodo team is doing great work for RightMetric. We love the well-designed outputs, the clear workflow, and the tight communication.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Evan Knight.png',
      firtname: 'Evan',
      lastname: 'Knight',
      label: 'RightMetric'
    }, {
      id: 6,
      rating: 5,
      comment: `Within the first 24h of using Growmodo, they had already turned around our first complicated task. They worked so fast and with such skill that it became almost difficult for us to keep up with them!`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Kimberly Carroll.png',
      firtname: 'Kimberly',
      lastname: 'Carroll',
      label: 'Teemyco'
    }, {
      id: 7,
      rating: 5,
      comment: `I'm so happy we discovered Growmodo during the rebranding phase of NattoPharma. The team was instrumental in making the new website a success.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Andrew Green.png',
      firtname: 'Andrew',
      lastname: 'Green',
      label: 'NattoPharma'
    }, {
      id: 8,
      rating: 5,
      comment: `Growmodo’s project management process makes everything easy to manage and really works as an extension to our team that has allowed us to move faster and achieve a streamlined process for our web development needs.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Chris Manderino.png',
      firtname: 'Chris',
      lastname: 'Manderino',
      label: 'LyfeFuel'
    }, {
      id: 9,
      rating: 5,
      comment: `The Growmodo team built a new website for my business and completely transformed our image for the better. With minimal oversight,I received daily progress updates and the team created a great-looking, funnel-focused website.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Riley Byrne.png',
      firtname: 'Riley',
      lastname: 'Byrne',
      label: 'Podigy'
    }, {
      id: 10,
      rating: 5,
      comment: `I found Growmodo, after wasting hours trying to design our Webflow site and spending way too much with inconsistent freelancers. Growmodo was just what we needed in a technical design partner. They provide strategic insights, quality designs and a super cool website! Most importantly, it was a relief to have a team that was reliable to produce consistent quality results.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Mildred Armstrong Smith.png',
      firtname: 'Mildred Armstrong',
      lastname: 'Smith',
      label: 'Manageroo'
    }, {
      id: 11,
      rating: 5,
      comment: `Working with Growmodo has given me the confidence and ability to scale our web projects in a timely manner. They are super talented in their design and experts in their execution.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Ben Perlman.png',
      firtname: 'Ben',
      lastname: 'Perlman',
      label: 'Inicio Marketing'
    }, {
      id: 12,
      rating: 5,
      comment: `This is an awesome solution that helps us finish design and development projects easily without the hassle of hiring and managing in-house employees. I highly recommend Growmodo.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Oren Harnevo.png',
      firtname: 'Oren',
      lastname: 'Harnevo',
      label: 'Feel'
    }, {
      id: 13,
      rating: 5,
      comment: `Growmodo is the real extension of our Marketing Team! Helping us build complex web pages, high-converting landing pages, technical setups, simple to intricate graphic designs, and many more!`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Genesis Masangcay.png',
      firtname: 'Genesis',
      lastname: 'Masangcay',
      label: 'Highered'
    }, {
      id: 14,
      rating: 5,
      comment: `Growmodo really helped us keep accurate control over our budget and get a fantastically designed website in the process. I highly recommend not just their talents, but this model.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Sean Boyce.png',
      firtname: 'Sean',
      lastname: 'Boyce',
      label: 'StaffGeek'
    }]),
    platforms: (0,vue_esm_bundler/* reactive */.qj)({}),
    statuses: (0,vue_esm_bundler/* reactive */.qj)({
      active: {
        label: 'Active',
        badgeType: 'green'
      },
      inactive: {
        label: 'Inactive',
        badgeType: 'negative'
      },
      pending: {
        label: 'Pending',
        badgeType: 'grey'
      }
    }),
    companyTypes: (0,vue_esm_bundler/* reactive */.qj)({}),
    brandCategories: (0,vue_esm_bundler/* reactive */.qj)({}),
    subscription: (0,vue_esm_bundler/* reactive */.qj)({
      label: 'All Inclusive Plan',
      description_1: 'Includes design and development talents for',
      base_price: 1795,
      price_currency: 'USD'
    }),
    subscription_Talents: (0,vue_esm_bundler/* reactive */.qj)({}),
    subscription_BillingTypes: (0,vue_esm_bundler/* reactive */.qj)({}),
    taskDirectory_Categories: (0,vue_esm_bundler/* reactive */.qj)({}),
    taskDirectory: (0,vue_esm_bundler/* reactive */.qj)({}),
    projectDirectory_Categories: (0,vue_esm_bundler/* reactive */.qj)({}),
    projectDirectory: (0,vue_esm_bundler/* reactive */.qj)({})
  };
}
;// CONCATENATED MODULE: ./src/stores/growmodo/getters.js
// function taskDirectory(state) {
//   var list = {};
//   state.tasks.forEach((e) => {
//     var key = (e.category || '').toLowerCase().replaceAll(' ', '-');
//     if (!list[key])
//       list[key] = {
//         label: e.category,
//         filter: key,
//       };
//   });
//   return list;
// }


// EXTERNAL MODULE: ./src/boot/apis.js
var apis = __webpack_require__(18744);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
;// CONCATENATED MODULE: ./src/stores/growmodo/actions.js



const actions_helpers = (0,helpers/* default */.Z)();

// Start Subscriptionss
async function getSubscription_Talents() {
  const url = '/miscs/subscriptions/talents';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data.data) {
      data.data.forEach(e => {
        this.subscription_Talents[e.id] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data.data) {
      cache_data.data.forEach(e => {
        this.subscription_Talents[e.id] = e;
      });
    }
    return cache_data || e;
  });
}
async function getSubscription_BillingTypes() {
  const url = '/miscs/subscriptions/billing-types';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data.data) {
      data.data.forEach(e => {
        this.subscription_BillingTypes[e.id] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data.data) {
      cache_data.data.forEach(e => {
        this.subscription_BillingTypes[e.id] = e;
      });
    }
    return cache_data || e;
  });
}
// End of Subscriptions

async function getExternalLinks() {
  const url = '/miscs/external-links';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data?.data) this.externalLinks = data.data;
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data?.data) this.externalLinks = cache_data.data;
    return cache_data || e;
  });
}
async function getUserRoles() {
  const url = '/miscs/roles';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data?.data && data.data?.length) {
      data.data.forEach(e => {
        this.userRoles[e.value] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data?.data && cache_data.data?.length) {
      cache_data.data.forEach(e => {
        this.userRoles[e.value] = e;
      });
    }
    return cache_data || e;
  });
}
async function getBrandCategories() {
  const url = '/miscs/brand-categories';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data?.data && data.data?.length) {
      data.data.forEach(e => {
        this.brandCategories[e.id] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data?.data && cache_data.data?.length) {
      cache_data.data.forEach(e => {
        this.brandCategories[e.id] = e;
      });
    }
    return cache_data || e;
  });
}
async function getCompanyTypes() {
  const url = '/miscs/company-types';
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data.data && data.data?.length) {
      data.data.forEach(e => {
        this.companyTypes[e.id] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    if (cache_data?.data && cache_data.data?.length) {
      cache_data.data.forEach(e => {
        this.companyTypes[e.id] = e;
      });
    }
    return cache_data || e;
  });
}
async function getPlatforms() {
  const url = '/miscs/platforms';
  return await apis.api.get(url, {
    params: {
      per_page: -1
    }
  }).then(res => {
    const data = res.data;
    if (data.data?.data && data.data?.data?.length) {
      data.data.data.forEach(e => {
        this.platforms[e.id] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url) || e;
    if (cache_data.data?.data && cache_data.data?.data?.length) {
      cache_data.data.data.forEach(e => {
        this.platforms[e.title] = e;
      });
    }
    return cache_data || e;
  });
}
function getPlatformInfo(platform, key = null) {
  return platform ? this.platforms[platform] && key ? this.platforms?.[platform]?.[key] : this.platforms?.[platform] : 0;
}
function formatPlatformIconSrc(platform) {
  return `img:${apis.cdn.baseURL}${apis.cdn.platforms}/${this.getPlatformInfo(platform, 'icon') || platform}.png`;
}
function planPriceCalculator(talentCnt, billingId) {
  if (!talentCnt || !billingId) return {};
  const {
    formatMoney
  } = __webpack_require__(1966);
  const billing = this.subscription_BillingTypes[billingId] || {};

  // Total Price
  let total = talentCnt === -1 || talentCnt === 6 ? 0 : this.subscription.base_price * talentCnt * billing.value;
  // Discount
  let discount = (billing.savings_percentage ? total * billing.savings : billing.savings) || 0;
  // Discount Rounded by 50
  let discount_rounded = Math.round(discount / 50) * 50;
  // Total Discount check if savings_per_month
  let discount_total = discount_rounded * (billing.savings_per_month ? billing.value : 1);
  // Total Discounte Price
  let total_discounted = total - discount_total;
  // Discount Label
  let discount_label = total === 0 ? 'Custom' : actions_helpers.getCurrency(billing.savings_currency)?.symbol + formatMoney(discount_total);
  // Final Label with Total Discounted Price
  let label = total === 0 ? 'Custom' : actions_helpers.getCurrency(this.subscription.savings_currency)?.symbol + formatMoney(total_discounted);
  return {
    label,
    total,
    total_discounted,
    discount,
    discount_rounded,
    discount_label,
    discount_total
  };
}

// Task Categories
async function getTaskCategories() {
  const url = '/miscs/task-dirs/categories';
  return await apis.api.get(url, {
    params: {
      per_page: -1
    }
  }).then(res => {
    const data = res.data || {};
    const res_data = data.data || {};
    if (res_data?.data && res_data.data?.length) {
      res_data.data.forEach(e => {
        this.taskDirectory_Categories[e.tag] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    const cache_res_data = data.data || {};
    if (cache_res_data?.data && cache_data.data?.length) {
      cache_res_data.data.forEach(e => {
        this.taskDirectory_Categories[e.tag] = e;
      });
    }
    return cache_data || e;
  });
}

// Task Directory
async function getTaskDirectory() {
  const url = '/miscs/task-dirs';
  return await apis.api.get(url, {
    params: {
      per_page: -1
    }
  }).then(res => {
    const data = res.data || {};
    const res_data = data.data || {};
    if (res_data?.data && res_data.data?.length) {
      res_data.data.forEach(e => {
        this.taskDirectory[e.id] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    const cache_res_data = data.data || {};
    if (cache_res_data?.data && cache_data.data?.length) {
      cache_res_data.data.forEach(e => {
        this.taskDirectory[e.id] = e;
      });
    }
    return cache_data || e;
  });
}

// Project Categories
async function getProjectCategories() {
  const url = '/miscs/project-dirs/categories';
  return await apis.api.get(url, {
    params: {
      per_page: -1
    }
  }).then(res => {
    const data = res.data || {};
    const res_data = data.data || {};
    if (res_data?.data && res_data.data?.length) {
      res_data.data.forEach(e => {
        this.projectDirectory_Categories[e.tag] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    const cache_res_data = cache_data.data || {};
    if (cache_res_data?.data && cache_data.data?.length) {
      cache_res_data.data.forEach(e => {
        this.projectDirectory_Categories[e.tag] = e;
      });
    }
    return cache_data || e;
  });
}

// Project Directory
async function getProjectDirectory() {
  const url = '/miscs/project-dirs';
  return await apis.api.get(url, {
    params: {
      per_page: -1
    }
  }).then(res => {
    const data = res.data || {};
    const res_data = data.data || {};
    if (res_data?.data && res_data.data?.length) {
      res_data.data.forEach(e => {
        this.projectDirectory[e.id] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    const cache_res_data = data.data || {};
    if (cache_res_data?.data && cache_data.data?.length) {
      cache_res_data.data.forEach(e => {
        this.projectDirectory[e.id] = e;
      });
    }
    return cache_data || e;
  });
}

;// CONCATENATED MODULE: ./src/stores/growmodo/index.js




/* harmony default export */ const growmodo = ((0,pinia/* defineStore */.Q_)('useGrowmodo', {
  state: state,
  getters: getters_namespaceObject,
  actions: {
    ...actions_namespaceObject
  }
}));

/***/ }),

/***/ 54006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BrandsList)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/BrandsList.vue?vue&type=template&id=b70e7cb6


const _hoisted_1 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 font-medium q-pt-md full-width"
}, " Add New Brand ", -1);
const _hoisted_2 = {
  key: 0,
  class: "full-width"
};
const _hoisted_3 = {
  class: "row item-center q-gutter-sm"
};
const _hoisted_4 = {
  class: "text-h5 font-medium q-pt-md q-pb-sm brand-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
  const _component_CreateNewBrand = (0,vue_esm_bundler/* resolveComponent */.up)("CreateNewBrand");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row", `q-col-gutter-${_ctx.gridGutter}`])
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.canAdd ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: 0,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.gridClass)
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      flat: "",
      bordered: "",
      class: "card-quicklinks card-quicklinks-new border-add border-dashed bg-color full-height row items-center justify-center hover-border-secondary",
      onClick: _cache[0] || (_cache[0] = $event => _ctx.addBrand = true)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
        class: "text-center flex-center flex"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          rounded: "",
          size: "55px",
          class: "rounded q-pa-sm text-white bg-primary auto-hw"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "icon-plus",
            color: "white",
            size: "sm",
            class: "q-pa-xs",
            style: {
              "color": "white !important"
            }
          })]),
          _: 1
        }), _hoisted_1]),
        _: 1
      })]),
      _: 1
    })], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.brands, (brand, i) => {
      return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(vue_esm_bundler/* Transition */.uT, {
        appear: "",
        duration: 500,
        "enter-active-class": "animated fade",
        "leave-active-class": "animated fade",
        key: i
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.gridClass)
        }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
          flat: "",
          bordered: "",
          class: "card-quicklinks brand full-height slide-hover row items-center hover-border-secondary",
          onClick: $event => _ctx.$router.push('/workspace/' + brand.id)
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "self-start full-width q-pb-sm"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.brandCategories?.[brand?.category]?.label ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
              rounded: "",
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["badge font-medium", {
                'badge-bg-disable': !_ctx.brandCategories?.[brand?.category]?.bg_color,
                'badge-text-disable': !_ctx.brandCategories?.[brand?.category]?.color
              }]),
              style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`background-color: ${_ctx.brandCategories?.[brand?.category]?.bg_color}; color: ${_ctx.brandCategories?.[brand?.category]?.color}`)
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.brandCategories?.[brand?.category]?.label), 1)]),
              _: 2
            }, 1032, ["class", "style"])])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.limitBrandName(brand.brand_name)), 1)]),
            _: 2
          }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
            align: "right",
            class: "full-width q-px-md bg-color self-end text-secondary text-body2 font-medium",
            to: brand.id,
            href: brand.id
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" View Brand Overview "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              size: "sm",
              name: "icon-arrow-narrow-right",
              class: "slide-hover-left-md q-pl-sm"
            })]),
            _: 2
          }, 1032, ["to", "href"])]),
          _: 2
        }, 1032, ["onClick"])), [[_directive_ripple, void 0, "accent"]])], 2)]),
        _: 2
      }, 1024);
    }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: "",
      modelValue: _ctx.addBrand,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.addBrand = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CreateNewBrand, {
        style: {
          "max-width": "90vw",
          "width": "640px"
        },
        onAdded: _cache[1] || (_cache[1] = $event => _ctx.addBrand = false),
        onClose: _cache[2] || (_cache[2] = $event => _ctx.addBrand = false)
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  }, 8, ["class"]);
}
;// CONCATENATED MODULE: ./src/components/Brands/BrandsList.vue?vue&type=template&id=b70e7cb6

// EXTERNAL MODULE: ./src/components/Brands/CreateNewBrand.vue + 4 modules
var CreateNewBrand = __webpack_require__(2939);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/BrandsList.vue?vue&type=script&lang=js





/* harmony default export */ const BrandsListvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'BrandsList',
  components: {
    CreateNewBrand: CreateNewBrand/* default */.Z
  },
  props: {
    canAdd: {
      type: Boolean,
      default: true
    },
    maxBrand: {
      type: Number,
      default: 0
    },
    reverseList: {
      type: Boolean,
      default: true
    },
    gridClass: {
      type: String,
      default: 'col-12 col-sm-6 col-md-3'
    },
    gridGutter: {
      type: String,
      default: 'md'
    }
  },
  data() {
    return {
      maxTitle: 33,
      addBrand: false
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgBrands']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['brandCategories']),
    brands() {
      let visibleBrands = Object.values(this.selectedOrgBrands);
      // Check if Need to Reverse
      if (this.reverseList) visibleBrands = visibleBrands.reverse();
      // Slice to Maximimun Brands
      if (this.maxBrand && typeof this.maxBrand === 'number') visibleBrands = visibleBrands.slice(0, this.maxBrand);
      return visibleBrands;
    }
  },
  methods: {
    limitBrandName(brandName) {
      let addDot = brandName?.length > this.maxTitle;
      return String(brandName).slice(0, 33) + (addDot ? '...' : '');
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Brands/BrandsList.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(61357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(11821);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(32074);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__(51722);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Brands/BrandsList.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(BrandsListvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const BrandsList = (__exports__);
;







runtime_auto_import_default()(BrandsListvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QBadge: QBadge/* default */.Z,QCardActions: QCardActions/* default */.Z,QDialog: QDialog/* default */.Z});runtime_auto_import_default()(BrandsListvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ }),

/***/ 2939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CreateNewBrand)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/CreateNewBrand.vue?vue&type=template&id=32092813


const _hoisted_1 = {
  class: "q-col-gutter-md"
};
const _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, " Brand Information ")], -1);
const _hoisted_3 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const _hoisted_4 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium color-primary2"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Name"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const _hoisted_5 = {
  class: "col-12"
};
const _hoisted_6 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_7 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium color-primary2"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Type"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const _hoisted_8 = {
  class: "col-12"
};
const _hoisted_9 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_10 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium color-primary2"
}, "Website", -1);
const _hoisted_11 = {
  class: "col-12"
};
const _hoisted_12 = {
  class: "q-col-gutter-md"
};
const _hoisted_13 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Logo "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 color-primary2 font-normal"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_14 = {
  class: "q-mt-lg"
};
const _hoisted_15 = {
  key: 0,
  class: "full-width scroll q-mt-md",
  style: {
    "max-height": "250px"
  }
};
const _hoisted_16 = {
  key: 0,
  class: "absolute-bottom bg-gradient no-pointer-events sticky",
  style: {
    "height": "50px"
  }
};
const _hoisted_17 = {
  class: "q-col-gutter-md"
};
const _hoisted_18 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Colors "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 color-primary2 font-normal"
}, " Generate brand colors from image or add your own brand colors. ")])], -1);
const _hoisted_19 = {
  class: "q-mt-lg"
};
const _hoisted_20 = {
  class: "row q-col-gutter-lg"
};
const _hoisted_21 = {
  class: "col-12"
};
const _hoisted_22 = {
  class: "row justify-end q-gutter-x-md q-pa-md"
};
const _hoisted_23 = {
  class: "col-12"
};
const _hoisted_24 = {
  class: "fit q-pt-md"
};
const _hoisted_25 = {
  class: "text-body2 q-pb-md font-medium row items-center justify-between"
};
const _hoisted_26 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-auto"
}, "Add Colors", -1);
const _hoisted_27 = {
  class: "col-auto"
};
const _hoisted_28 = {
  class: "row q-col-gutter-md"
};
const _hoisted_29 = {
  class: "col-12 col-sm-6"
};
const _hoisted_30 = {
  class: "col-12 col-sm-6"
};
const _hoisted_31 = {
  class: "col-12 col-sm-6"
};
const _hoisted_32 = {
  class: "col-12 col-sm-6"
};
const _hoisted_33 = {
  class: "q-col-gutter-md"
};
const _hoisted_34 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Fonts "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 color-primary2 font-normal"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_35 = {
  class: "q-mt-lg"
};
const _hoisted_36 = {
  key: 0,
  class: "full-width scroll q-mt-md",
  style: {
    "max-height": "250px"
  }
};
const _hoisted_37 = {
  key: 0,
  class: "absolute-bottom bg-gradient no-pointer-events sticky",
  style: {
    "height": "50px"
  }
};
const _hoisted_38 = {
  class: "q-col-gutter-md"
};
const _hoisted_39 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Icon "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 color-primary2 font-normal"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_40 = {
  class: "q-mt-lg"
};
const _hoisted_41 = {
  key: 0,
  class: "full-width scroll q-mt-md",
  style: {
    "max-height": "250px"
  }
};
const _hoisted_42 = {
  key: 0,
  class: "absolute-bottom bg-gradient no-pointer-events sticky",
  style: {
    "height": "50px"
  }
};
const _hoisted_43 = {
  class: "q-col-gutter-md"
};
const _hoisted_44 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Images "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 color-primary2 font-normal"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_45 = {
  class: "q-mt-lg"
};
const _hoisted_46 = {
  key: 0,
  class: "full-width scroll q-mt-md",
  style: {
    "max-height": "250px"
  }
};
const _hoisted_47 = {
  key: 0,
  class: "absolute-bottom bg-gradient no-pointer-events sticky",
  style: {
    "height": "50px"
  }
};
const _hoisted_48 = {
  class: "q-col-gutter-md"
};
const _hoisted_49 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Graphic Elements "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 color-primary2 font-normal"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_50 = {
  class: "q-mt-lg"
};
const _hoisted_51 = {
  key: 0,
  class: "full-width scroll q-mt-md",
  style: {
    "max-height": "250px"
  }
};
const _hoisted_52 = {
  key: 0,
  class: "absolute-bottom bg-gradient no-pointer-events sticky",
  style: {
    "height": "50px"
  }
};
const _hoisted_53 = {
  class: "q-col-gutter-md"
};
const _hoisted_54 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4 text-primary font-medium letter-space-normal"
}, " Social Media Links ")], -1);
const _hoisted_55 = {
  class: "q-pt-lg"
};
const _hoisted_56 = {
  class: "row items-center q-col-gutter-md"
};
const _hoisted_57 = {
  class: "col-12"
};
const _hoisted_58 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_59 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium color-primary2"
}, " Linkedin ", -1);
const _hoisted_60 = {
  class: "col-12"
};
const _hoisted_61 = {
  class: "col-12"
};
const _hoisted_62 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_63 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium color-primary2"
}, " Instagram ", -1);
const _hoisted_64 = {
  class: "col-12"
};
const _hoisted_65 = {
  class: "col-12"
};
const _hoisted_66 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_67 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium color-primary2"
}, " Facebook ", -1);
const _hoisted_68 = {
  class: "col-12"
};
const _hoisted_69 = {
  class: "col-12"
};
const _hoisted_70 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_71 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium color-primary2"
}, "Twitter", -1);
const _hoisted_72 = {
  class: "col-12"
};
const _hoisted_73 = {
  class: "full-width flex flex-center"
};
const _hoisted_74 = {
  class: "row q-col-gutter-md justify-center",
  style: {
    "width": "720px"
  }
};
const _hoisted_75 = {
  key: 0,
  class: "col-12 col-sm-6"
};
const _hoisted_76 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-px-sm"
}, "Back", -1);
const _hoisted_77 = {
  class: "col-12 col-sm-6"
};
const _hoisted_78 = {
  class: "q-px-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_SelectCompanyType = (0,vue_esm_bundler/* resolveComponent */.up)("SelectCompanyType");
  const _component_InputWebsite = (0,vue_esm_bundler/* resolveComponent */.up)("InputWebsite");
  const _component_q_step = (0,vue_esm_bundler/* resolveComponent */.up)("q-step");
  const _component_FileUploader = (0,vue_esm_bundler/* resolveComponent */.up)("FileUploader");
  const _component_UploadSlot = (0,vue_esm_bundler/* resolveComponent */.up)("UploadSlot");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_ColorPickerCard = (0,vue_esm_bundler/* resolveComponent */.up)("ColorPickerCard");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_slide_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-slide-item");
  const _component_q_stepper = (0,vue_esm_bundler/* resolveComponent */.up)("q-stepper");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    class: "rounded q-pa-md"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card_section, {
      key: 0,
      class: "text-right q-pa-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)]),
      _: 1
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-px-none q-py-sm"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
        flat: "",
        animated: "",
        modelValue: _ctx.formStep,
        "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => _ctx.formStep = $event),
        ref: "formStepper",
        color: "secondary",
        class: "full-width small new-brand-stepper",
        "done-color": "secondary",
        "active-color": "primary",
        contracted: _ctx.$q.screen.lt.sm,
        "alternative-labels": ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 1,
          title: "Brand Information",
          icon: "icon-",
          "done-icon": "none",
          "active-icon": "none",
          "error-icon": "none",
          class: "flex flex-center full-width"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [_hoisted_2, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [_hoisted_4, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            dense: "",
            outlined: "",
            modelValue: _ctx.brand.label,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.brand.label = $event),
            placeholder: "Brand Name"
          }, null, 8, ["modelValue"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [_hoisted_7, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SelectCompanyType, {
            modelValue: _ctx.brand.category,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brand.category = $event),
            initModel: _ctx.brand.category
          }, null, 8, ["modelValue", "initModel"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [_hoisted_10, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputWebsite, {
            modelValue: _ctx.brand.website,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.brand.website = $event)
          }, null, 8, ["modelValue"])])])])]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 2,
          title: "Brand Guidlines",
          icon: "icon-",
          "done-icon": "none",
          "active-icon": "none",
          "error-icon": "none",
          class: "flex flex-center full-width full-inner"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
            modelValue: _ctx.formStepBrandInfo,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => _ctx.formStepBrandInfo = $event),
            flat: "",
            animated: "",
            ref: "brandInformationStepper",
            color: "secondary",
            class: "full-width",
            "done-color": "secondary",
            "active-color": "primary",
            "header-class": "hidden"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: 1,
              title: "Brand Logo",
              icon: "icon-",
              "done-icon": "none",
              "active-icon": "none",
              "error-icon": "none",
              class: "flex flex-center full-width"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [_hoisted_13, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                multiple: "",
                ref: "upLogos",
                "max-file-size": "10000000",
                note: "AI, EPS, PSD, SVG, PNG, GIF or JPEG (max. 10MB)",
                filter: files => _ctx.checkFileExtensions(files, ['.png', '.ico', '.jpg', '.jpeg', '.svg', '.ai', '.psd', '.eps']),
                onRejected: _ctx.onRejected,
                removedFile: _ctx.brand['logos']?.removedFile,
                onAdded: _cache[3] || (_cache[3] = files => _ctx.addUploadToModel('brand', 'logos', files, 'upLogos'))
              }, null, 8, ["filter", "onRejected", "removedFile"]), _ctx.brand['logos']?.files?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_15, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_UploadSlot, {
                small: true,
                thumbnail: "icon-image-03",
                scope: _ctx.brand['logos']
              }, null, 8, ["scope"]), _ctx.brand['logos']?.files?.length > 2 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_16)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: 2,
              title: "Brand Colors",
              icon: "icon-",
              "done-icon": "none",
              "active-icon": "none",
              "error-icon": "none",
              class: "flex flex-center full-width"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_17, [_hoisted_18, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_19, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_20, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_21, [!_ctx.brandColorSrc || !_ctx.validImageForColorPalette ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_FileUploader, {
                key: 0,
                multiple: false,
                ref: "colorSourceUploader",
                "max-file-size": "5000000",
                class: "full-height",
                onRejected: _ctx.onRejected,
                note: "SVG, PNG, JPG or GIF (max. 10MB)",
                accept: _ctx.acceptedImageTypes.join(','),
                onAdded: _ctx.addedImgColorSource
              }, null, 8, ["onRejected", "accept", "onAdded"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                key: 1,
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["full-height rounded border-add", _ctx.brandColorSrc ? 'border-solid' : 'border-dashed']),
                style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
                  "min-height": "250px"
                }, _ctx.brandColorSrc ? `background-image: url('${_ctx.brandColorSrc}'); background-position: center; background-repeat: no-repeat; background-size: contain;` : ''])
              }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_22, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                flat: "",
                unelevated: "",
                size: "14px",
                color: "primary",
                icon: "icon-edit-05",
                class: "border-add rounded q-pa-sm not-gm hover-text-secondary shadow-ui bg-translucent-light hover-border-secondary",
                onClick: _cache[4] || (_cache[4] = () => {
                  _ctx.brandColorSrc = '';
                })
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                flat: "",
                unelevated: "",
                size: "14px",
                color: "primary",
                icon: "icon-trash-01",
                class: "border-add rounded q-pa-sm not-gm hover-text-negative shadow-ui bg-translucent-light hover-border-negative",
                onClick: _cache[5] || (_cache[5] = () => {
                  _ctx.brandColorSrc = '';
                  _ctx.colorPalette = null;
                  _ctx.$refs?.['colorSourceUploader']?.reset();
                })
              })])], 6))]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_23, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_24, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_25, [_hoisted_26, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_27, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                flat: "",
                size: "sm",
                icon: "icon-plus",
                color: "primary",
                class: "hover-text-secondary q-pa-sm",
                onClick: _cache[6] || (_cache[6] = $event => _ctx.brand.customColors.push({}))
              })])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_28, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_29, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Primary",
                initColor: _ctx.brand.colors['primary'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.colors['primary'] && _ctx.brandColors['primary']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[7] || (_cache[7] = c => {
                  _ctx.brandColors['primary'] = c;
                  _ctx.brand.colors['primary'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_30, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Secondary",
                initColor: _ctx.brand.colors['secondary'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.colors['secondary'] && _ctx.brandColors['secondary']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[8] || (_cache[8] = c => {
                  _ctx.brandColors['secondary'] = c;
                  _ctx.brand.colors['secondary'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_31, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Accent",
                initColor: _ctx.brand.colors['accent'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.colors['accent'] && _ctx.brandColors['accent']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[9] || (_cache[9] = c => {
                  _ctx.brandColors['accent'] = c;
                  _ctx.brand.colors['accent'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_32, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Text",
                initColor: _ctx.brand.colors['text'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.colors['text'] && _ctx.brandColors['text']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[10] || (_cache[10] = c => {
                  _ctx.brandColors['text'] = c;
                  _ctx.brand.colors['text'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.brand.customColors, (customColor, i) => {
                return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                  key: customColor,
                  class: "col-12 col-sm-6"
                }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_slide_item, {
                  onLeft: opt => _ctx.customColorSlideLeft(opt, i),
                  class: "rounded",
                  "left-color": "negative"
                }, {
                  left: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                    name: "icon-trash-01"
                  })]),
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                    label: customColor.label,
                    initColor: customColor.color,
                    colorPalette: _ctx.colorPalette,
                    editableLabel: true,
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(customColor && customColor?.dark ? 'no-border' : ''),
                    onUpdate: c => {
                      customColor = c;
                    },
                    onUpdateLabel: e => customColor.label = e
                  }, null, 8, ["label", "initColor", "colorPalette", "class", "onUpdate", "onUpdateLabel"])]),
                  _: 2
                }, 1032, ["onLeft"])]);
              }), 128))])])])])])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: 3,
              title: "Brand Fonts",
              icon: "icon-",
              "done-icon": "none",
              "active-icon": "none",
              "error-icon": "none",
              class: "flex flex-center full-width"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_33, [_hoisted_34, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_35, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                multiple: "",
                ref: "upFonts",
                "max-file-size": "10000000",
                note: "WOFF2, WOFF, OTF or TTF (max. 10MB)",
                filter: files => _ctx.checkFileExtensions(files, _ctx.acceptedFontTypes),
                onRejected: _ctx.onRejected,
                removedFile: _ctx.brand['fonts']?.removedFile,
                onAdded: _cache[11] || (_cache[11] = files => _ctx.addUploadToModel('brand', 'fonts', files, 'upFonts'))
              }, null, 8, ["filter", "onRejected", "removedFile"]), _ctx.brand['fonts']?.files?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_36, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_UploadSlot, {
                small: true,
                thumbnail: "icon-type-square",
                scope: _ctx.brand['fonts']
              }, null, 8, ["scope"]), _ctx.brand['fonts']?.files?.length > 2 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_37)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: 4,
              title: "Brand Icon",
              icon: "icon-",
              "done-icon": "none",
              "active-icon": "none",
              "error-icon": "none",
              class: "flex flex-center full-width"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_38, [_hoisted_39, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_40, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                multiple: "",
                ref: "upIcons",
                "max-file-size": "5000000",
                onRejected: _ctx.onRejected,
                removedFile: _ctx.brand['icons']?.removedFile,
                note: "SVG, PNG, or ICO (max. 5MB)",
                filter: files => _ctx.checkFileExtensions(files, ['.svg', '.png', '.ico']),
                onAdded: _cache[12] || (_cache[12] = files => _ctx.addUploadToModel('brand', 'icons', files, 'upIcons'))
              }, null, 8, ["onRejected", "removedFile", "filter"]), _ctx.brand['icons']?.files?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_41, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_UploadSlot, {
                small: true,
                thumbnail: "icon-image-03",
                scope: _ctx.brand['icons']
              }, null, 8, ["scope"]), _ctx.brand['icons']?.files?.length > 2 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_42)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: 5,
              title: "Brand Images",
              icon: "icon-",
              "done-icon": "none",
              "active-icon": "none",
              "error-icon": "none",
              class: "flex flex-center full-width"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_43, [_hoisted_44, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_45, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                multiple: "",
                ref: "upImages",
                "max-file-size": "10000000",
                onRejected: _ctx.onRejected,
                note: "SVG, PNG, JPEG, ICO or GIF (max. 10MB)",
                accept: _ctx.acceptedImageTypes.join(','),
                removedFile: _ctx.brand['images']?.removedFile,
                onAdded: _cache[13] || (_cache[13] = files => _ctx.addUploadToModel('brand', 'images', files, 'upImages'))
              }, null, 8, ["onRejected", "accept", "removedFile"]), _ctx.brand['images']?.files?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_46, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_UploadSlot, {
                small: true,
                thumbnail: "icon-image-03",
                scope: _ctx.brand['images']
              }, null, 8, ["scope"]), _ctx.brand['images']?.files?.length > 2 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_47)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: 6,
              title: "Graphic Elements",
              icon: "icon-",
              "done-icon": "none",
              "active-icon": "none",
              "error-icon": "none",
              class: "flex flex-center full-width"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_48, [_hoisted_49, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_50, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                multiple: "",
                ref: "upGraphicElements",
                "max-file-size": "10000000",
                onRejected: _ctx.onRejected,
                note: "AI, EPS, PSD, SVG, PNG, GIF or JPEG (max. 10MB)",
                filter: files => _ctx.checkFileExtensions(files, ['.png', '.ico', '.jpg', '.jpeg', '.svg', '.ai', '.psd', '.eps']),
                removedFile: _ctx.brand['graphic_elements']?.removedFile,
                onAdded: _cache[14] || (_cache[14] = files => _ctx.addUploadToModel('brand', 'graphic_elements', files, 'upGraphicElements'))
              }, null, 8, ["onRejected", "filter", "removedFile"]), _ctx.brand['graphic_elements']?.files?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_51, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_UploadSlot, {
                small: true,
                thumbnail: "icon-image-03",
                scope: _ctx.brand['graphic_elements']
              }, null, 8, ["scope"]), _ctx.brand['graphic_elements']?.files?.length > 2 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_52)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 3,
          title: "Social Media Links",
          icon: "icon-",
          "done-icon": "none",
          "active-icon": "none",
          "error-icon": "none",
          class: "flex flex-center full-width"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_53, [_hoisted_54, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_55, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_56, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_57, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_58, [_hoisted_59, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_60, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputWebsite, {
            modelValue: _ctx.brand.social.linkedin,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => _ctx.brand.social.linkedin = $event),
            prepend: "linkedin.com/company/",
            placeholder: "username"
          }, null, 8, ["modelValue"])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_61, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_62, [_hoisted_63, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_64, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputWebsite, {
            modelValue: _ctx.brand.social.instagram,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => _ctx.brand.social.instagram = $event),
            prepend: "instagram.com/",
            placeholder: "username"
          }, null, 8, ["modelValue"])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_65, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_66, [_hoisted_67, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_68, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputWebsite, {
            modelValue: _ctx.brand.social.facebook,
            "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => _ctx.brand.social.facebook = $event),
            prepend: "facebook.com/",
            placeholder: "username"
          }, null, 8, ["modelValue"])])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_69, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_70, [_hoisted_71, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_72, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputWebsite, {
            modelValue: _ctx.brand.social.twitter,
            "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => _ctx.brand.social.twitter = $event),
            prepend: "twitter.com/",
            placeholder: "username"
          }, null, 8, ["modelValue"])])])])])])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue", "contracted"])]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-px-lg q-pb-md q-pt-xl"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_73, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_74, [_ctx.formStep > 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_75, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        outline: "",
        unelevated: "",
        color: "primary",
        class: "rounded full-width",
        onClick: _cache[21] || (_cache[21] = $event => _ctx.formStep !== 2 || _ctx.formStepBrandInfo === 1 ? _ctx.prevButtonClicked() : _ctx.brandsPrevButtonClicked())
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_76]),
        _: 1
      })])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_77, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "rounded full-width",
        onClick: _cache[22] || (_cache[22] = $event => _ctx.formStep < 3 ? _ctx.formStep === 2 && _ctx.formStepBrandInfo < 6 ? _ctx.brandsNextButtonClicked() : _ctx.nextButtonClicked() : _ctx.submitFormAction())
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_78, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.formStep < 3 ? 'Continue' : 'Save Brand'), 1)]),
        _: 1
      })])])])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Brands/CreateNewBrand.vue?vue&type=template&id=32092813

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Helpers/SelectCompanyType.vue + 4 modules
var SelectCompanyType = __webpack_require__(71015);
// EXTERNAL MODULE: ./src/components/Helpers/InputWebsite.vue + 4 modules
var InputWebsite = __webpack_require__(72287);
// EXTERNAL MODULE: ./src/components/Helpers/FilesUploader.vue + 4 modules
var FilesUploader = __webpack_require__(6583);
// EXTERNAL MODULE: ./src/mixins/index.js + 2 modules
var mixins = __webpack_require__(34267);
// EXTERNAL MODULE: ./src/components/Helpers/ColorPickerCard.vue + 9 modules
var ColorPickerCard = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__(75103);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/uid.js
var uid = __webpack_require__(50796);
// EXTERNAL MODULE: ./src/components/Helpers/Slots/UploadSlot.vue + 4 modules
var UploadSlot = __webpack_require__(43975);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/CreateNewBrand.vue?vue&type=script&lang=js











/* harmony default export */ const CreateNewBrandvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CreateNewBrand',
  mixins: [
  // Uploader functions
  mixins/* FileUploader_Mixin */.G],
  components: {
    SelectCompanyType: SelectCompanyType/* default */.Z,
    InputWebsite: InputWebsite/* default */.Z,
    FileUploader: FilesUploader/* default */.Z,
    ColorPickerCard: ColorPickerCard/* default */.Z,
    UploadSlot: UploadSlot/* default */.Z
  },
  emits: ['added', 'error', 'close'],
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formStep: 1,
      formStepBrandInfo: 1,
      stepperHeaderElements: null,
      brandColorSrc: '',
      brandColorSrcBlob: '',
      validImageForColorPalette: false,
      brand: {
        colors: {},
        customColors: [],
        social: {}
      },
      colorPalette: undefined,
      acceptedFontTypes: ['.woff2', '.woff', '.otf', '.ttf'],
      brandColors: {
        primary: {},
        secondary: {},
        accent: {},
        text: {}
      }
    };
  },
  watch: {
    formStep: {
      async handler(val) {
        this.stepperHeaderStyle();
        if (val > 1) this.rightDrawer = false;else this.rightDrawer = true;
      }
    },
    brandColorSrc: {
      async handler(val) {
        if (!val) {
          this.brand.colors = {};
          this.validImageForColorPalette = false;
        }
      }
    },
    brandColorSrcBlob: {
      async handler(val) {
        if (val) {
          let encodedImage = await (0,functions.getImageStringFromURL)(val, this.acceptedImageTypes);
          if (encodedImage) {
            this.brandColorSrc = encodedImage;
            this.validImageForColorPalette = true;
            setTimeout(this.getColorPalette, 500);
          } else {
            this.brand.colors = {};
            this.validImageForColorPalette = false;
          }
        } else {
          this.brand.colors = {};
          this.validImageForColorPalette = false;
        }
      }
    }
  },
  mounted() {
    this.stepperHeaderElements = this.$refs?.['formStepper']?.$el?.firstChild?.childNodes;
    this.stepperHeaderStyle();
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['addOrgBrand']),
    async getColorPalette() {
      let retry = 0;
      let result = this.getColorPaletteFn();
      while (!result && retry <= 5) {
        result = this.getColorPaletteFn();
        retry++;
      }
    },
    async getColorPaletteFn() {
      try {
        var imageColorThief = new functions.ColorThief();
        let sourceImage = await (0,functions.getImageFromBase64str)(this.brandColorSrc);
        this.brand.colors = {};
        if (sourceImage) {
          let colorPalettes = imageColorThief.getPalette(sourceImage, 100);
          if (!colorPalettes) return;
          this.colorPalette = colorPalettes.map(e => `rgb(${e.join(',')})`);
          colors/* default.textToRgb */.ZP.textToRgb(`rgb(${colorPalettes[3].join(',')})`);
          // Set Brand Colors
          let color_p = colorPalettes?.[0];
          this.brand.colors.primary = colors/* default.rgbToHex */.ZP.rgbToHex({
            r: color_p[0],
            g: color_p[1],
            b: color_p[2]
          }) || '#000000';
          let color_s = colorPalettes?.[1];
          this.brand.colors.secondary = colors/* default.rgbToHex */.ZP.rgbToHex({
            r: color_s[0],
            g: color_s[1],
            b: color_s[2]
          }) || '#000000';
          let color_a = colorPalettes?.[2];
          this.brand.colors.accent = colors/* default.rgbToHex */.ZP.rgbToHex({
            r: color_a[0],
            g: color_a[1],
            b: color_a[2]
          }) || '#000000';
          let color_t = colorPalettes?.[3];
          this.brand.colors.text = colors/* default.rgbToHex */.ZP.rgbToHex({
            r: color_t[0],
            g: color_t[1],
            b: color_t[2]
          }) || '#000000';
        }
        return true;
      } catch (e) {
        return false;
      }
    },
    onRejected(rejectedEntries) {
      let message = `File${rejectedEntries?.length > 1 ? 's' : ''} did not pass validation constraints!`;
      this.$q.notify({
        icon: 'icon-alert-triangle',
        iconColor: 'negative',
        message
      });
    },
    addedImgColorSource(files) {
      files.forEach((file, i) => {
        if (i === files.length - 1) {
          this.$q.notify({
            spinner: true,
            message: `Getting colors from ${file.name}.`,
            timeout: 500
          });
          this.brandColorSrcBlob = file?.__img?.src;
        }
      });
    },
    stepperHeaderStyle() {
      if (this.stepperHeaderElements) {
        (0,functions.updateStepperHeader)(this.stepperHeaderElements, this.formStep);
      } else {
        this.stepperHeaderElements = this.$refs?.['formStepper']?.$el?.firstChild?.childNodes;
      }
    },
    prevButtonClicked() {
      this.$refs?.['formStepper']?.previous?.();
    },
    nextButtonClicked() {
      if (this.brand.category && this.brand.label) {
        this.$refs?.['formStepper']?.next?.();
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: 'Brand information is required'
        });
        this.$emit('error');
      }
    },
    brandsPrevButtonClicked() {
      this.$refs?.['brandInformationStepper']?.previous?.();
    },
    brandsNextButtonClicked() {
      this.$refs?.['brandInformationStepper']?.next?.();
    },
    submitFormAction() {
      if (this.brand.category && this.brand.label) {
        const newUID = (0,uid/* default */.Z)();
        this.brand.id = newUID;
        this.brand.gid = newUID;
        this.addOrgBrand(newUID, this.brand);
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: 'Your brand is successfully saved'
        });
        this.$emit('added', newUID);
        this.$emit('close');
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: 'Brand information is missing'
        });
        this.$emit('error');
      }
    },
    customColorSlideLeft(slideOpt, customColorIndex) {
      this.brand.customColors.splice(customColorIndex, 1);
    }
  },
  beforeUnmount() {
    this.$emit('close');
  }
}));
;// CONCATENATED MODULE: ./src/components/Brands/CreateNewBrand.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__(8225);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js
var QStep = __webpack_require__(46017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-item/QSlideItem.js
var QSlideItem = __webpack_require__(78713);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Brands/CreateNewBrand.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CreateNewBrandvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const CreateNewBrand = (__exports__);
;








runtime_auto_import_default()(CreateNewBrandvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QInput: QInput/* default */.Z,QBtn: QBtn/* default */.Z,QSlideItem: QSlideItem/* default */.Z,QIcon: QIcon/* default */.Z});


/***/ }),

/***/ 88582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GrowmodoTestimonials)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/GrowmodoTestimonials.vue?vue&type=template&id=3aa168f0

const _hoisted_1 = {
  class: "full-width"
};
const _hoisted_2 = {
  class: "q-py-lg font-medium text-h5"
};
const _hoisted_3 = {
  class: "q-pt-md"
};
const _hoisted_4 = {
  class: "font-medium"
};
const _hoisted_5 = {
  class: "text-grey-6"
};
const _hoisted_6 = {
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
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.testimonials.slice(0, _ctx.max), item => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
            key: item.id
          }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "icon-circle-01",
            size: "14px",
            color: _ctx.activeTestimonial === item.id ? 'secondary' : `grey-${_ctx.dark ? '9' : '4'}`,
            class: "hover-text-secondary cursor-pointer",
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
            class: "color-gmc-green",
            icon: "icon-star-fill"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(item.comment), 1), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_img, {
            src: item.avatar,
            ratio: 1,
            style: {
              "height": "58px",
              "max-width": "58px"
            },
            class: "round",
            loading: "lazy",
            "spinner-color": "secondary"
          }, null, 8, ["src"]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(item.firtname) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(item.lastname), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, (0,vue_esm_bundler/* toDisplayString */.zw)(item.label), 1)])])]),
          _: 2
        }, 1032, ["name"]);
      }), 128))]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/GrowmodoTestimonials.vue?vue&type=template&id=3aa168f0

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


/***/ }),

/***/ 70683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GrowmodoTextIcon)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/GrowmodoTextIcon.vue?vue&type=template&id=47547cae

const _hoisted_1 = {
  class: "row inline items-center hover-visibility"
};
const _hoisted_2 = ["src", "width"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_1, [_ctx.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 0
  }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
    name: "icon-growmodo",
    size: _ctx.size,
    color: _ctx.dark ? 'white' : 'black',
    class: "absolute-left-center hover-visibility-hide"
  }, null, 8, ["size", "color"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
    name: `img:${_ctx.$config.icons?.growmodo['logo:icon-colored-' + (_ctx.dark ? 'dark' : 'light')]}`,
    size: _ctx.size,
    class: "absolute hover-visibility-show"
  }, null, 8, ["name", "size"])], 64)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.text ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("img", {
    key: 1,
    src: _ctx.$config?.icons?.growmodo?.[`logo:text-${_ctx.dark ? 'white' : 'black'}`],
    width: _ctx.textWidth,
    class: "q-pl-sm"
  }, null, 8, _hoisted_2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]);
}
;// CONCATENATED MODULE: ./src/components/GrowmodoTextIcon.vue?vue&type=template&id=47547cae

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/GrowmodoTextIcon.vue?vue&type=script&lang=js

/* harmony default export */ const GrowmodoTextIconvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'GrowmodoTextIcon',
  props: {
    icon: {
      type: Boolean,
      default: true
    },
    text: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: false
    },
    hoverText: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '35px'
    },
    textWidth: {
      type: String,
      default: '130'
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/GrowmodoTextIcon.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/GrowmodoTextIcon.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(GrowmodoTextIconvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const GrowmodoTextIcon = (__exports__);
;

runtime_auto_import_default()(GrowmodoTextIconvue_type_script_lang_js, 'components', {QIcon: QIcon/* default */.Z});


/***/ }),

/***/ 67968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ColorPickerCard)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPickerCard.vue?vue&type=template&id=f0555bca

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_ColorPicker = (0,vue_esm_bundler/* resolveComponent */.up)("ColorPicker");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    bordered: "",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row items-center border-add rounded full-width cursor-pointer justify-between q-px-md q-py-sm", `${_ctx.hoverEffect ? 'hover-border-secondary' : ''}`]),
    style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`background-color: ${_ctx.colorModel || 'transparent'}; ${_ctx.small ? 'min-height: 70px' : 'min-height: 105px'}`),
    onContextmenu: (0,vue_esm_bundler/* withModifiers */.iM)(_ctx.openColorPopup, ["prevent"]),
    onDblclick: _cache[4] || (_cache[4] = $event => _ctx.editableLabel ? _ctx.editingLabel = !_ctx.editingLabel : _ctx.colorModel ? _ctx.copyToClipboard(_ctx.colorModel) : _ctx.openColorPopup())
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["font-medium flex inline", `${_ctx.isColorDark(_ctx.colorModel) ? 'text-white' : 'text-primary'} ${_ctx.small ? '' : 'self-end'}`]),
      style: {
        "max-width": "80%"
      }
    }, [!_ctx.label || _ctx.label === 'Color Label' || _ctx.editableLabel && _ctx.editingLabel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
      key: 0,
      dense: "",
      autofocus: "",
      modelValue: _ctx.newLabel,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.newLabel = $event),
      placeholder: "Color Label",
      color: _ctx.isColorDark(_ctx.colorModel) ? 'white' : 'primary',
      "input-class": `${_ctx.isColorDark(_ctx.colorModel) ? 'text-white' : 'text-primary'}`,
      onKeydown: (0,vue_esm_bundler/* withKeys */.D2)(_ctx.saveLabel, ["enter"]),
      onBlur: _ctx.saveLabel
    }, {
      append: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.colorModel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
        key: 0,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2", _ctx.isColorDark(_ctx.colorModel) ? 'bg-translucent-light text-white' : 'bg-translucent-dark text-primary'])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.colorModel), 1)]),
        _: 1
      }, 8, ["class"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }, 8, ["modelValue", "color", "input-class", "onKeydown", "onBlur"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
      key: 1
    }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.newLabel) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.colorModel), 1)], 64))], 2), _ctx.colorPicker ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
      key: 0,
      flat: "",
      size: "sm",
      color: "primary",
      icon: "icon-dropper",
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded ratio-1 q-pa-sm", `${_ctx.colorModel ? _ctx.isColorDark(_ctx.colorModel) ? 'bg-translucent-light text-white' : 'bg-translucent-dark text-primary' : 'bg-grey-3'} ${_ctx.small ? '' : 'absolute-top-right q-pa-sm q-ma-sm'}`]),
      onClick: _ctx.openColorPopup
    }, null, 8, ["class", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: "",
      modelValue: _ctx.colorPopup,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.colorPopup = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      class: "backdrop-light"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPicker, {
        style: {
          "max-width": "300px"
        },
        initColor: _ctx.colorModel,
        colorPalette: _ctx.colorPaletteSrc,
        onSaved: _cache[1] || (_cache[1] = val => _ctx.colorModel = val?.color),
        onClosed: _cache[2] || (_cache[2] = $event => _ctx.colorPopup = false)
      }, null, 8, ["initColor", "colorPalette"])]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  }, 8, ["class", "style", "onContextmenu"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPickerCard.vue?vue&type=template&id=f0555bca

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__(75103);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/copy-to-clipboard.js
var copy_to_clipboard = __webpack_require__(65054);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPicker.vue?vue&type=template&id=559644b6

const _hoisted_1 = {
  key: 0,
  class: "text-body2 font-medium q-pb-sm"
};
const _hoisted_2 = {
  class: "row q-gutter-xs items-center justify-center"
};
const _hoisted_3 = {
  class: "col-5"
};
const _hoisted_4 = {
  class: "q-gutter-sm row"
};
function ColorPickervue_type_template_id_559644b6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_color = (0,vue_esm_bundler/* resolveComponent */.up)("q-color");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    class: "rounded q-pa-md"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.colorPaletteSrc && _ctx.colorViewPalette ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, " Colors from the image ")) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_color, {
      "no-header": "",
      "no-footer": "",
      ref: "customColorPicker",
      palette: _ctx.colorPaletteSrc,
      "default-view": _ctx.colorPaletteSrc && _ctx.colorViewPalette ? 'palette' : 'spectrum',
      modelValue: _ctx.colorModel,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.colorModel = $event),
      "format-model": _ctx.colorFormat?.value
    }, null, 8, ["palette", "default-view", "modelValue", "format-model"]), _ctx.colorPaletteSrc ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: 1,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.colorPaletteSrc && _ctx.colorViewPalette ? 'q-py-md' : 'q-pb-md')
    }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.colorPaletteSrc.slice(0, _ctx.colorPaletteSrc.length > 30 ? 30 : _ctx.colorPaletteSrc.length), (color, i) => {
      return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
        key: i,
        flat: "",
        class: "col-auto q-pa-md cursor-pointer rounded",
        style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`background-color: ${color};`),
        onClick: $event => _ctx.colorModel = _ctx.colorFormat.value === 'rgba' ? color : _ctx.rgbToHex(_ctx.textToRgb(color))
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.colorFormat.value === 'rgba' ? color : _ctx.rgbToHex(_ctx.textToRgb(color))), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1032, ["style", "onClick"]);
    }), 128))])], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row q-col-gutter-sm", _ctx.colorPaletteSrc && _ctx.colorViewPalette ? 'q-py-md' : 'q-pb-md'])
    }, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: "col-7",
      onMouseover: _cache[4] || (_cache[4] = $event => _ctx.showCopy = true),
      onMouseout: _cache[5] || (_cache[5] = $event => _ctx.showCopy = false),
      onMouseleave: _cache[6] || (_cache[6] = $event => _ctx.showCopy = false)
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      dense: "",
      outlined: "",
      modelValue: _ctx.colorModel,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.colorModel = $event),
      class: "cursor-pointer",
      "input-class": "cursor-pointer",
      onDblclick: _cache[3] || (_cache[3] = $event => _ctx.copyToClipboard(_ctx.colorModel))
    }, (0,vue_esm_bundler/* createSlots */.Nv)({
      _: 2
    }, [_ctx.colorModel && _ctx.showCopy ? {
      name: "append",
      fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: "icon-copy-06",
        size: "xs",
        color: "secondary",
        class: "cursor-pointer",
        onClick: _cache[1] || (_cache[1] = $event => _ctx.copyToClipboard(_ctx.colorModel))
      })]),
      key: "0"
    } : undefined]), 1032, ["modelValue"])], 32), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_select, {
      dense: "",
      outlined: "",
      modelValue: _ctx.colorFormat,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.colorFormat = $event),
      class: "rounded text-body2 input-white text-primary",
      "popup-content-class": "bg-white rounded-bottom shadow-ui",
      "input-class": "text-body1 letter-space-normal text-primary",
      options: Object.values(_ctx.colorFormats)
    }, null, 8, ["modelValue", "options"])])], 2), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      "no-caps": "",
      outline: "",
      unelevated: "",
      color: "primary",
      class: "col",
      onClick: _ctx.cancelColor
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Discard ")]),
      _: 1
    }, 8, ["onClick"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      "no-caps": "",
      unelevated: "",
      color: "primary",
      class: "col",
      onClick: _ctx.saveColor
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Save Color ")]),
      _: 1
    }, 8, ["onClick"])])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPicker.vue?vue&type=template&id=559644b6

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPicker.vue?vue&type=script&lang=js


const {
  rgbToHex,
  textToRgb
} = colors/* default */.ZP;
/* harmony default export */ const ColorPickervue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'ColorPicker',
  emits: ['updated', 'saved', 'canceled', 'closed'],
  props: {
    colorPalette: {
      type: Array
    },
    initColor: {
      type: String,
      default: ''
    },
    colorViewPalette: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const colorFormats = {
      hexa: {
        label: 'HEX',
        value: 'hexa'
      },
      rgba: {
        label: 'RGB',
        value: 'rgba'
      }
    };
    return {
      rgbToHex,
      textToRgb,
      colorModel: '',
      colorFormats,
      showCopy: false,
      colorPaletteSrc: undefined,
      customColorPicker: null,
      colorFormat: colorFormats.hexa
    };
  },
  computed: {
    responseVal() {
      return {
        format: this.colorFormat?.value,
        color: this.colorModel
      };
    }
  },
  watch: {
    ['colorFormat.value']: {
      async handler(val) {
        if (val === 'rgba') {
          let l_rgba = textToRgb(this.colorModel);
          this.colorModel = `rgba(${l_rgba.r},${l_rgba.g},${l_rgba.b},${l_rgba.a / 100 || 1})`;
        } else {
          this.colorModel = rgbToHex(textToRgb(this.colorModel));
        }
      }
    },
    colorModel: {
      async handler(val) {
        let parentElemToStyle = this.$refs?.['customColorPicker']?.$el;
        if (parentElemToStyle) {
          let ringIcons = parentElemToStyle.querySelectorAll('.q-slider__focus-ring');
          // Set Rings Color
          ringIcons.forEach((c, i) => {
            c?.classList?.add?.('icon-circle-01', 'q-icon', 'border-add');
            c?.style?.setProperty?.('--ringColor', i === 0 ? this.alwaysToHex(val) : val);
          });
          // Set Alpha Track Bar color
          let trackBar = parentElemToStyle.querySelector('.q-color-picker__alpha .q-slider__track')?.style;
          trackBar?.setProperty?.('--barColor', `linear-gradient(90deg, rgba(255, 255, 255, 0), ${this.alwaysToHex(val)})`);
        }
        this.$emit('updated', {
          format: this.colorFormat?.value,
          color: val
        });
      }
    },
    colorPalette: {
      async handler(val) {
        this.colorPaletteSrc = val;
      },
      deep: true
    }
  },
  mounted() {
    this.colorModel = this.initColor || '#000000ff';
    this.colorPaletteSrc = this.colorPalette;
  },
  methods: {
    copyToClipboard(stringVal) {
      (0,copy_to_clipboard/* default */.Z)(stringVal).then(() => {
        if (stringVal) {
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: 'Copied to clipboard.'
          });
        }
      });
    },
    saveColor() {
      this.$emit('saved', this.responseVal);
      this.closeMethod();
    },
    cancelColor() {
      this.$emit('canceled', this.responseVal);
      this.closeMethod();
    },
    closeMethod() {
      this.$emit('closed', this.responseVal);
    },
    alwaysToHex(colorString) {
      try {
        if (colorString.charAt(0) === '#') return colorString.substring(0, 7);
        return rgbToHex(textToRgb(colorString)).substring(0, 7);
      } catch (e) {
        return colorString;
      }
    }
  },
  beforeUnmount() {
    this.closeMethod();
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPicker.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/color/QColor.js + 3 modules
var QColor = __webpack_require__(48297);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(26384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js + 1 modules
var QSlider = __webpack_require__(28423);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPicker.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ColorPickervue_type_script_lang_js, [['render',ColorPickervue_type_template_id_559644b6_render]])

/* harmony default export */ const ColorPicker = (__exports__);
;







runtime_auto_import_default()(ColorPickervue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QColor: QColor/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QSelect: QSelect/* default */.Z,QBtn: QBtn/* default */.Z,QSlider: QSlider/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPickerCard.vue?vue&type=script&lang=js



/* harmony default export */ const ColorPickerCardvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'ColorPickerCard',
  components: {
    ColorPicker: ColorPicker
  },
  props: {
    allowEdit: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: 'Color Label'
    },
    colorPalette: {
      type: Array
    },
    initColor: {
      type: String,
      default: ''
    },
    colorPicker: {
      type: Boolean,
      default: true
    },
    hoverEffect: {
      type: Boolean,
      default: true
    },
    editableLabel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      colorModel: '',
      colorPopup: false,
      colorPaletteSrc: undefined,
      newLabel: this.label && this.label !== 'Color Label' ? this.label : '',
      editingLabel: false
    };
  },
  emits: ['update', 'updateLabel'],
  watch: {
    colorModel: {
      async handler(val) {
        this.$emit('update', {
          color: val,
          dark: this.isColorDark(val),
          light: !this.isColorDark(val)
        });
      }
    },
    initColor: {
      async handler(val) {
        this.colorModel = val;
      }
    },
    colorPalette: {
      async handler(val) {
        this.colorPaletteSrc = val;
      },
      deep: true
    }
  },
  mounted() {
    this.colorPaletteSrc = this.colorPalette;
    this.colorModel = this.initColor;
  },
  methods: {
    saveLabel() {
      if (this.newLabel) {
        this.$emit('updateLabel', this.newLabel);
        this.editingLabel = false;
      }
    },
    copyToClipboard(stringVal) {
      (0,copy_to_clipboard/* default */.Z)(stringVal).then(() => {
        if (stringVal) {
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: 'Color copied to clipboard.'
          });
        }
      });
    },
    isColorDark(colorVal) {
      return colorVal ? colors/* default.brightness */.ZP.brightness?.(colorVal) < 128 : false;
    },
    openColorPopup() {
      if (this.allowEdit) this.colorPopup = true;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPickerCard.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(32074);
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPickerCard.vue




;
const ColorPickerCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ColorPickerCardvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const ColorPickerCard = (ColorPickerCard_exports_);
;





runtime_auto_import_default()(ColorPickerCardvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QInput: QInput/* default */.Z,QBadge: QBadge/* default */.Z,QBtn: QBtn/* default */.Z,QDialog: QDialog/* default */.Z});


/***/ }),

/***/ 8769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DynamicButton)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/DynamicButton.vue?vue&type=template&id=2129170c

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
    size: "md",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      rounded: !_ctx.$q.screen.xs,
      'not-gm': _ctx.$q.screen.xs
    }),
    round: _ctx.$q.screen.xs
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.alwaysShowIcon || _ctx.$q.screen.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
      key: 0,
      name: _ctx.icon,
      size: "sm"
    }, null, 8, ["name"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$q.screen.gt.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
      key: 1,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.alwaysShowIcon || _ctx.$q.screen.xs ? 'q-pl-xs' : '')
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.label), 3)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$q.screen.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_tooltip_pro, {
      key: 2,
      delay: 150,
      "hide-delay": 150
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.label), 1)]),
      _: 1
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  }, 8, ["class", "round"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/DynamicButton.vue?vue&type=template&id=2129170c

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/DynamicButton.vue?vue&type=script&lang=js

/* harmony default export */ const DynamicButtonvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'DynamicButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    alwaysShowIcon: {
      type: Boolean,
      default: false
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

/***/ 6583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FilesUploader)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/FilesUploader.vue?vue&type=template&id=2168f8db

const _hoisted_1 = {
  class: "full-width"
};
const _hoisted_2 = {
  class: "full-width"
};
const _hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-pt-md full-width"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-secondary font-medium"
}, "Click to upload"), /*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" or drag and drop ")], -1);
const _hoisted_4 = {
  class: "full-width"
};
const _hoisted_5 = {
  key: 0,
  class: "absolute-bottom bg-gradient no-pointer-events sticky",
  style: {
    "height": "50px"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_uploader_add_trigger = (0,vue_esm_bundler/* resolveComponent */.up)("q-uploader-add-trigger");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_UploadSlot = (0,vue_esm_bundler/* resolveComponent */.up)("UploadSlot");
  const _component_q_uploader = (0,vue_esm_bundler/* resolveComponent */.up)("q-uploader");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_uploader, {
    flat: "",
    multiple: "",
    ref: "modelRef",
    "max-file-size": "5000000",
    class: "full-width files-uploader rounded full-height",
    onStart: _ctx.startEvent,
    onFinish: _ctx.finishEvent,
    onAdded: _ctx.startEvent,
    onRemoved: _ctx.finishEvent
  }, {
    header: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: "q-py-lg text-body2 color-primary2 text-center rounded cursor-pointer full-height flex items-center rounded border-add border-dashed hover-border-secondary",
      onClick: _cache[0] || (_cache[0] = $event => _ctx.$refs?.['uploadBtnTrigger']?.click?.())
    }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      flat: "",
      ripple: false,
      color: "primary",
      class: "bg-none",
      ref: "uploadBtnTrigger",
      onClick: scope.pickFiles
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
        icon: "icon-upload-01"
      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_uploader_add_trigger)]),
      _: 2
    }, 1032, ["onClick"])]), _hoisted_3, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.note), 1)])])]),
    list: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_UploadSlot, {
      thumbnail: _ctx.thumbnail,
      scope: scope
    }, null, 8, ["thumbnail", "scope"]), scope?.files?.length > 4 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_5)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  }, 8, ["onStart", "onFinish", "onAdded", "onRemoved"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/FilesUploader.vue?vue&type=template&id=2168f8db

// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(65724);
// EXTERNAL MODULE: ./src/components/Helpers/Slots/UploadSlot.vue + 4 modules
var UploadSlot = __webpack_require__(43975);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/FilesUploader.vue?vue&type=script&lang=js



/* harmony default export */ const FilesUploadervue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'FileUploader',
  components: {
    CardIconBox: CardIconBox/* default */.Z,
    UploadSlot: UploadSlot/* default */.Z
  },
  props: {
    note: {
      type: String,
      default: 'SVG, PNG, JPEG or GIF (max. 5MB)'
    },
    thumbnail: {
      type: [Boolean, String],
      default: false
    },
    removedFile: {}
  },
  watch: {
    removedFile: {
      async handler(val) {
        if (val) this.$refs['modelRef']?.removeFile?.(val);
      }
    }
  },
  methods: {
    startEvent(e) {
      console.log('startEvent', e);
    },
    finishEvent(e) {
      console.log('finishEvent', e);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/FilesUploader.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploader.js + 7 modules
var QUploader = __webpack_require__(84343);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/uploader/QUploaderAddTrigger.js
var QUploaderAddTrigger = __webpack_require__(46246);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/FilesUploader.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(FilesUploadervue_type_script_lang_js, [['render',render]])

/* harmony default export */ const FilesUploader = (__exports__);
;



runtime_auto_import_default()(FilesUploadervue_type_script_lang_js, 'components', {QUploader: QUploader/* default */.Z,QBtn: QBtn/* default */.Z,QUploaderAddTrigger: QUploaderAddTrigger/* default */.Z});


/***/ }),

/***/ 63299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InputPassword)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPassword.vue?vue&type=template&id=f9b922ea

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    dense: "",
    outlined: "",
    type: _ctx.inputType,
    modelValue: _ctx.passwordModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.passwordModel = $event),
    label: _ctx.label,
    placeholder: _ctx.label ? '' : _ctx.inputType === 'password' ? '********' : '--------'
  }, (0,vue_esm_bundler/* createSlots */.Nv)({
    append: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.passwordModel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
      key: 0,
      flat: "",
      dense: "",
      round: "",
      size: "md",
      icon: _ctx.inputType == 'password' ? 'icon-eye' : 'icon-eye-off',
      class: "bg-none text-grey-6",
      ripple: false,
      onClick: _ctx.tooglePassword
    }, null, 8, ["icon", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 2
  }, [_ctx.withicon ? {
    name: "prepend",
    fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      size: "xs",
      name: "icon-lock-04"
    })]),
    key: "0"
  } : undefined]), 1032, ["type", "modelValue", "label", "placeholder"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputPassword.vue?vue&type=template&id=f9b922ea

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPassword.vue?vue&type=script&lang=js

/* harmony default export */ const InputPasswordvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputPassword',
  props: {
    label: {
      type: String
    },
    withicon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordModel: '',
      inputType: 'password'
    };
  },
  methods: {
    tooglePassword(forceValue = null) {
      if (this.inputType === undefined) return;
      if (forceValue !== null && typeof forceValue === 'boolean') this.inputType = forceValue;else {
        this.inputType = this.inputType?.toLowerCase() === 'password' ? 'text' : 'password';
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/InputPassword.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/InputPassword.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InputPasswordvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const InputPassword = (__exports__);
;



runtime_auto_import_default()(InputPasswordvue_type_script_lang_js, 'components', {QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ }),

/***/ 72287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InputWebsite)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputWebsite.vue?vue&type=template&id=1f403704

const _hoisted_1 = {
  class: "text-body2 color-primary2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    dense: "",
    outlined: "",
    placeholder: "www.yourwebsite.com"
  }, {
    prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.prepend), 1), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
      vertical: "",
      class: "q-ml-sm"
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputWebsite.vue?vue&type=template&id=1f403704

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputWebsite.vue?vue&type=script&lang=js

/* harmony default export */ const InputWebsitevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputWebsite',
  props: {
    prepend: {
      type: String,
      default: 'https://'
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/InputWebsite.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(50926);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/InputWebsite.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InputWebsitevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const InputWebsite = (__exports__);
;


runtime_auto_import_default()(InputWebsitevue_type_script_lang_js, 'components', {QInput: QInput/* default */.Z,QSeparator: QSeparator/* default */.Z});


/***/ }),

/***/ 71015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectCompanyType)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCompanyType.vue?vue&type=template&id=e097deae

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    dense: "",
    outlined: "",
    "emit-value": "",
    "option-value": "id",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom shadow-ui",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.listOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event)
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary hover-bg-accent', "hover-text-secondary"],
      onClick: scope.opt?.action
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [scope.opt?.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        avatar: "",
        style: {
          "min-width": "unset"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: scope.opt?.icon
        }, null, 8, ["name"])]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt?.label || scope.opt), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.selectModel ? '' : 'text-placeholder')
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.companyTypes[_ctx.selectModel]?.label || _ctx.placeholder), 3)]),
    _: 1
  }, 8, ["options", "modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCompanyType.vue?vue&type=template&id=e097deae

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCompanyType.vue?vue&type=script&lang=js



/* harmony default export */ const SelectCompanyTypevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectCompanyType',
  props: {
    placeholder: {
      type: String,
      default: 'Select category'
    },
    initModel: {
      type: [String, Number],
      default: ''
    }
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.selectModel = val;
      }
    }
  },
  data() {
    return {
      selectModel: ''
    };
  },
  mounted() {
    if (this.initModel) this.selectModel = this.initModel;
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['companyTypes']),
    listOptions() {
      return Object.values(this.companyTypes);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCompanyType.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(26384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCompanyType.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectCompanyTypevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectCompanyType = (__exports__);
;





runtime_auto_import_default()(SelectCompanyTypevue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ }),

/***/ 96538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectCountry)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCountry.vue?vue&type=template&id=024a8f24

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    dense: "",
    outlined: "",
    "use-input": "",
    "emit-value": "",
    "option-value": "name",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom shadow-ui",
    "input-class": "text-body1 letter-space-normal text-primary",
    onFilter: _ctx.filterFn,
    options: _ctx.filteredOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    onInputValue: _cache[1] || (_cache[1] = val => _ctx.inputModel = val)
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary hover-bg-accent', "hover-text-secondary"],
      onClick: scope.opt?.action
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [scope.opt?.code ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        avatar: "",
        style: {
          "min-width": "unset"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: `img:${_ctx.getCountryFlag(scope.opt.code?.toLowerCase?.())}.svg`
        }, null, 8, ["name"])]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt?.name || scope.opt), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)([{
        'text-placeholder': !_ctx.selectModel
      }, "row items-center q-gutter-x-sm"])
    }, [!_ctx.inputModel && _ctx.selectModel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
      key: 0,
      size: "xs",
      name: `img:${_ctx.getCountryFlag(_ctx.currentCountryInfo.code?.toLowerCase?.())}.svg`
    }, null, 8, ["name"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.inputModel ? '' : _ctx.selectModel || _ctx.placeholder), 1)], 2)]),
    _: 1
  }, 8, ["onFilter", "options", "modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCountry.vue?vue&type=template&id=024a8f24

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCountry.vue?vue&type=script&lang=js



/* harmony default export */ const SelectCountryvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectCountry',
  props: {
    placeholder: {
      type: String,
      default: 'Select country'
    },
    initModel: {
      type: [String, Number],
      default: ''
    }
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.selectModel = val;
      }
    }
  },
  data() {
    return {
      selectModel: '',
      inputModel: ''
    };
  },
  setup() {
    const filteredOptions = (0,vue_esm_bundler/* ref */.iH)([]);
    return {
      filteredOptions
    };
  },
  mounted() {
    if (this.initModel) this.selectModel = this.initModel;
    // this.filteredOptions = this.allCountries;
  },

  computed: {
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['allCountries']),
    currentCountryInfo() {
      return this.allCountries.filter(c => c.name === this.selectModel)[0];
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getCountryFlag']),
    filterFn(val, update, abort) {
      if (val === '') {
        update(() => {
          this.filteredOptions = this.allCountries;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.filteredOptions = this.allCountries.filter(v => JSON.stringify(v).toLowerCase().indexOf(needle) > -1);
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCountry.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(26384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCountry.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectCountryvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectCountry = (__exports__);
;





runtime_auto_import_default()(SelectCountryvue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ }),

/***/ 72696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectRoles)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectRoles.vue?vue&type=template&id=4525c648

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    dense: "",
    outlined: "",
    "emit-value": "",
    "option-value": "value",
    "option-label": "label",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom shadow-ui",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.listOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event)
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary hover-bg-accent', "hover-text-secondary"],
      onClick: scope.opt?.action
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [scope.opt?.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        avatar: "",
        style: {
          "min-width": "unset"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: scope.opt?.icon
        }, null, 8, ["name"])]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt?.label || scope.opt), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.selectModel ? '' : 'text-placeholder')
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.userRoles[_ctx.selectModel]?.label || _ctx.placeholder), 3)]),
    _: 1
  }, 8, ["options", "modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectRoles.vue?vue&type=template&id=4525c648

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectRoles.vue?vue&type=script&lang=js



/* harmony default export */ const SelectRolesvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectRoles',
  props: {
    placeholder: {
      type: String,
      default: 'Select role'
    },
    initModel: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      selectModel: ''
    };
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.selectModel = val;
      }
    }
  },
  mounted() {
    if (this.initModel) this.selectModel = this.initModel;
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['userRoles']),
    listOptions() {
      return Object.values(this.userRoles);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectRoles.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(26384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/SelectRoles.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectRolesvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectRoles = (__exports__);
;





runtime_auto_import_default()(SelectRolesvue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ }),

/***/ 43975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UploadSlot)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Slots/UploadSlot.vue?vue&type=template&id=3fbc4944

const _hoisted_1 = {
  class: "overflow-hidden flex flex-center round bg-accent",
  style: {
    "width": "30px",
    "height": "30px"
  }
};
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  class: "text-body2"
};
const _hoisted_4 = {
  class: "text-grey-6 text-body2"
};
const _hoisted_5 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_6 = {
  class: "col-10"
};
const _hoisted_7 = {
  class: "col-2 text-right"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_linear_progress = (0,vue_esm_bundler/* resolveComponent */.up)("q-linear-progress");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  return _ctx.scope ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_list, {
    key: 0,
    class: "row q-col-gutter-md"
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.scope.files, (file, i) => {
      return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: file.__key,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(`${_ctx.small || _ctx.scope.files?.length === 1 ? 'col-12' : 'col-12 col-sm-6'}`)
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
        dense: "",
        class: "border-add rounded q-py-sm hover-up-1 hover-border-secondary"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.thumbnail && file.__img || typeof _ctx.thumbnail === 'string' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
          key: 0,
          thumbnail: "",
          class: "q-pl-md self-start"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [typeof _ctx.thumbnail === 'boolean' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("img", {
            key: 0,
            ratio: 1,
            src: file.__img.src,
            style: {
              "width": "30px",
              "height": "unset"
            }
          }, null, 8, _hoisted_2)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 1,
            name: _ctx.thumbnail,
            size: "20px",
            color: "secondary"
          }, null, 8, ["name"]))])]),
          _: 2
        }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          class: "text-left"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
            class: "full-width ellipsis"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(file.name), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(file.__sizeLabel), 1)]),
            _: 2
          }, 1024), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
            indeterminate: "",
            size: "sm",
            value: file.__progress,
            color: "secondary"
          }, null, 8, ["value"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(file.__progressLabel), 1)])]),
          _: 2
        }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          class: "absolute-top-right q-ma-sm"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            dense: "",
            round: "",
            size: "small",
            icon: "icon-trash-01",
            class: "hover-text-negative color-primary2",
            onClick: $event => _ctx.scope?.removeFile?.(file) || _ctx.scope?.removeFileById?.(i)
          }, null, 8, ["onClick"])]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)], 2);
    }), 128))]),
    _: 1
  })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true);
}
;// CONCATENATED MODULE: ./src/components/Helpers/Slots/UploadSlot.vue?vue&type=template&id=3fbc4944

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Slots/UploadSlot.vue?vue&type=script&lang=js

/* harmony default export */ const UploadSlotvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'UploadSlot',
  props: {
    small: {
      type: Boolean,
      default: false
    },
    scope: {
      type: Object,
      default: null
    },
    thumbnail: {
      type: [Boolean, String],
      default: false
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/Slots/UploadSlot.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(13246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js
var QLinearProgress = __webpack_require__(8289);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/Slots/UploadSlot.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(UploadSlotvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const UploadSlot = (__exports__);
;







runtime_auto_import_default()(UploadSlotvue_type_script_lang_js, 'components', {QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QLinearProgress: QLinearProgress/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ }),

/***/ 11147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RemainingDays_Progress)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Subscription/RemainingDays-Progress.vue?vue&type=template&id=635ed590

const _hoisted_1 = {
  class: "row items-center q-gutter-x-sm"
};
const _hoisted_2 = {
  class: "col-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_linear_progress = (0,vue_esm_bundler/* resolveComponent */.up)("q-linear-progress");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
    rounded: "",
    size: "24px",
    value: _ctx.subscriptionPercentage,
    "track-color": "grey-4",
    class: "col cursor-pointer",
    color: "secondary",
    style: {
      "border-radius": "24px"
    }
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: "absolute-full flex flex-center items-center",
      style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`max-width: ${_ctx.subscriptionPercentage * 100}%`)
    }, [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-white text-body2 text-center", {
        'q-px-sm': _ctx.$q.screen.gt.sm
      }]),
      style: {
        "text-overflow": "ellipsis",
        "overflow": "hidden",
        "max-height": "20px"
      }
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.remainingDays) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.remainingDays > 1 ? 'Days' : 'Day'), 3)], 4)]),
    _: 1
  }, 8, ["value"]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscriptionDaysLength) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscriptionDaysLength > 1 ? 'Days' : 'Day'), 1)]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/RemainingDays-Progress.vue?vue&type=template&id=635ed590

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Subscription/RemainingDays-Progress.vue?vue&type=script&lang=js



/* harmony default export */ const RemainingDays_Progressvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'RemainingDays-Progress',
  props: {
    contdown: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['subscriptionDaysLength']),
    subscriptionPercentage() {
      if (isNaN(this.remainingDays) || this.remainingDays < 0 || isNaN(this.subscriptionDaysLength)) return 0;
      return this.remainingDays / this.subscriptionDaysLength;
    },
    remainingDays() {
      let remainingDays = this.subscriptionRemaining(this.$root?.realtimeDate, 'days');
      if (!this.contdown) remainingDays = this.subscriptionDaysLength - remainingDays;
      return remainingDays || 0;
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['subscriptionRemaining'])
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/RemainingDays-Progress.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js
var QLinearProgress = __webpack_require__(8289);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/RemainingDays-Progress.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RemainingDays_Progressvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const RemainingDays_Progress = (__exports__);
;

runtime_auto_import_default()(RemainingDays_Progressvue_type_script_lang_js, 'components', {QLinearProgress: QLinearProgress/* default */.Z});


/***/ }),

/***/ 3318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SubscriptionPlans)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=template&id=4c333d62

const _hoisted_1 = {
  key: 0,
  class: "full-width text-center q-pb-lg no-wrap"
};
const _hoisted_2 = {
  class: "letter-space-normal"
};
const _hoisted_3 = {
  class: "text-body2 text-primary"
};
const _hoisted_4 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-pl-sm"
}, "Request Change", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_btn_group = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn-group");
  const _component_q_radio = (0,vue_esm_bundler/* resolveComponent */.up)("q-radio");
  const _component_card_item = (0,vue_esm_bundler/* resolveComponent */.up)("card-item");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: ""
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.planTypes ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn_group, {
      spread: _ctx.$q.screen.sm || _ctx.$q.screen.lt.md,
      class: "rounded no-shadow border-add"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(Object.values(_ctx.subscription_BillingTypes), (planType, i) => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
          key: planType
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          "no-caps": "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["hover-text-secondary", _ctx.selectedBilling === planType.id ? 'bg-accent' : '']),
          color: _ctx.selectedBilling === planType.id ? 'secondary' : 'primary',
          onClick: $event => _ctx.changePlanType(planType.id)
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [i !== 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 0,
            size: "sm",
            name: "icon-sale-02",
            color: "secondary"
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("span", {
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 font-medium", i !== 0 ? 'q-pl-sm' : ''])
          }, (0,vue_esm_bundler/* toDisplayString */.zw)(planType.label), 3)]),
          _: 2
        }, 1032, ["color", "class", "onClick"]), i < Object.keys(_ctx.subscription_BillingTypes).length - 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_separator, {
          key: 0,
          vertical: ""
        })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 64);
      }), 128))]),
      _: 1
    }, 8, ["spread"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.nextButton ? 'q-pt-md' : '')
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row", `q-col-gutter-${_ctx.cardsGutter}`])
      }, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.subscription_Talents, talent => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          key: talent.id,
          class: "col-12 col-md-6"
        }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_card_item, {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)([_ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'badge-bg-active badge-border-active' : talent.value === _ctx.selectedTalent ? 'border-secondary bg-accent hover-border-secondary hover-bg-accent' : 'hover-border-secondary hover-bg-accent', "q-py-sm cursor-pointer border-add hover-border-secondary"]),
          onClick: $event => _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? void 0 : _ctx.selectedTalent = talent.value
        }, {
          avatar: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_radio, {
            modelValue: _ctx.selectedTalent,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectedTalent = $event),
            val: talent.value,
            color: "secondary",
            "unchecked-icon": _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'icon-check-circle-broken badge-text-active' : undefined,
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'cursor-pointer no-pointer-events' : ''),
            style: {
              "margin-top": "-8px"
            },
            rules: [val => val && val !== '' && val !== null || '']
          }, null, 8, ["modelValue", "val", "unchecked-icon", "class", "rules"])]),
          title: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [talent.value > 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
            key: 0
          }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.label) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(talent.value), 1)], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
            key: 1
          }, [(0,vue_esm_bundler/* createTextVNode */.Uk)("Custom Plan")], 64))])]),
          description: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", (0,vue_esm_bundler/* mergeProps */.dG)({
            class: ["q-py-xs text-body2 font-medium", _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? 'badge-text-active' : talent.value === _ctx.selectedTalent ? 'text-secondary' : 'text-primary']
          }, _ctx.priceInfo = _ctx.planPriceCalculator(talent.value, _ctx.selectedBilling)), [(0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.priceInfo.label), 1), (0,vue_esm_bundler/* createTextVNode */.Uk)(" " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription_BillingTypes[_ctx.selectedBilling]?.breakdown_label), 1)], 16), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.subscription.description_1) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(talent.value === -1 ? 'custom' : _ctx.numberToWords(talent.value)) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(talent.value > 1 || talent.value === -1 ? 'users' : 'user') + ". ", 1)]),
          _: 2
        }, 1032, ["class", "onClick"])), [[_directive_ripple, _ctx.checkIfPlanSelected(talent.value, _ctx.selectedBilling) ? false : {
          color: 'secondary'
        }]])]);
      }), 128)), _ctx.nextButton && _ctx.selectedTalent && _ctx.selectedBilling ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
        key: 0,
        class: "q-pa-none q-pt-md col-12 items-center justify-end"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          color: "primary",
          class: "rounded slide-hover",
          onClick: _ctx.nextButtonClicked
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_4, (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "sm",
            name: "icon-arrow-narrow-right",
            class: "slide-hover-left-md q-px-sm"
          })]),
          _: 1
        }, 8, ["onClick"])]),
        _: 1
      })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2)]),
      _: 1
    })], 2)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=template&id=4c333d62

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=script&lang=js






/* harmony default export */ const SubscriptionPlansvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SubscriptionPlans',
  emits: ['updated', 'talentChanged', 'billingChanged', 'nextBtnClick'],
  props: {
    nextButton: {
      type: Boolean,
      default: false
    },
    planTypes: {
      type: Boolean,
      default: true
    },
    cardsGutter: {
      type: String,
      default: 'md'
    }
  },
  data() {
    return {
      selectedTalent: 0,
      selectedBilling: 1,
      numberToWords: functions.numberToWords
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrg']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['subscription', 'subscription_Talents', 'subscription_BillingTypes']),
    orgSubscription() {
      return !fn_store/* default.getAuth */.Z.getAuth() ? {} : this.selectedOrg?.subscription || {};
    }
  },
  watch: {
    selectedTalent: {
      async handler(val) {
        this.talentChanged(val);
        this.updated();
      }
    },
    selectedBilling: {
      async handler(val) {
        this.selectedTalent = 0;
        this.billingChanged(val);
        this.updated();
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['planPriceCalculator']),
    updated() {
      this.$emit('updated', {
        talent: this.selectedTalent,
        billing: this.selectedBilling
      });
    },
    talentChanged(val) {
      this.$emit('talentChanged', val || this.selectedTalent);
    },
    billingChanged(val) {
      this.$emit('billingChanged', val || this.selectedBilling);
    },
    checkIfPlanSelected(subscription_talent_id, subscription_billing_id) {
      return this.orgSubscription.subscription_billing_id == subscription_billing_id && this.orgSubscription.subscription_talent_id == subscription_talent_id;
    },
    changePlanType(planType) {
      // Set New Plan Type
      this.selectedBilling = planType;
    },
    formatMoney(money, minimumFractionDigits = 0) {
      return (0,functions.formatMoney)(money, {
        minimumFractionDigits
      });
    },
    nextButtonClicked() {
      this.$emit('nextBtnClick', {
        selectedTalent: this.selectedTalent,
        selectedBilling: this.selectedBilling
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/SubscriptionPlans.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-group/QBtnGroup.js
var QBtnGroup = __webpack_require__(67236);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(50926);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(13246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/radio/QRadio.js
var QRadio = __webpack_require__(11480);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js
var Ripple = __webpack_require__(51722);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/Subscription/SubscriptionPlans.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SubscriptionPlansvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SubscriptionPlans = (__exports__);
;








runtime_auto_import_default()(SubscriptionPlansvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QBtnGroup: QBtnGroup/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QSeparator: QSeparator/* default */.Z,QList: QList/* default */.Z,QRadio: QRadio/* default */.Z,QItem: QItem/* default */.Z});runtime_auto_import_default()(SubscriptionPlansvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ }),

/***/ 17347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CustomDropdown)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Search/CustomDropdown.vue?vue&type=template&id=18861cd1

const _hoisted_1 = {
  class: "text-center"
};
const _hoisted_2 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_spinner_pie = (0,vue_esm_bundler/* resolveComponent */.up)("q-spinner-pie");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_avatar = (0,vue_esm_bundler/* resolveComponent */.up)("q-avatar");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    ref: "search",
    outlined: "",
    "use-input": "",
    "hide-selected": "",
    "options-dense": "",
    "hide-bottom-space": "",
    "hide-dropdown-icon": "",
    "menu-offset": [0, 0],
    color: "primary",
    "bg-color": "white",
    "stack-label": false,
    modelValue: _ctx.requestQuery,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.requestQuery = $event),
    class: "select-request",
    "popup-content-class": "bg-white rounded-bottom shadow-ui q-px-md",
    "input-class": "text-body1 font-medium letter-space-normal text-primary",
    placeholder: _ctx.placeholder,
    options: _ctx.filteredOptions,
    onFilter: _ctx.filter,
    "transition-show": "jump-up",
    "transition-hide": "jump-down"
  }, (0,vue_esm_bundler/* createSlots */.Nv)({
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [scope.opt.istitle ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
      key: scope.itemProps.id + '_title',
      to: scope.opt.url,
      onClick: scope.opt.action,
      class: "q-pt-md rounded",
      style: {
        "min-height": "unset"
      }
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          class: "text-body2 font-medium color-primary2"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.title), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1032, ["to", "onClick"])) : scope.opt.showmore ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
      clickable: "",
      key: scope.itemProps.id + '_more',
      to: scope.opt.url,
      onClick: scope.opt.action,
      class: "q-mb-md bg-none rounded"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        class: "cursor-pointer"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          class: "text-dody2 font-medium text-secondary"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.title), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1032, ["to", "onClick"])), scope.index !== _ctx.filteredOptions.length - 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_separator, {
      key: 0
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      key: 2,
      clickable: "",
      to: scope.opt.url
    }, scope.itemProps, {
      class: "hover-bg-accent hover-text-secondary text-body2 font-medium rounded bg-white text-primary",
      key: scope.itemProps.id,
      onClick: (0,vue_esm_bundler/* withModifiers */.iM)(() => {
        if (scope.opt?.directory === 'tasks') {
          this.$root.toggleForm_Task(scope.opt);
        } else if (scope.opt?.directory === 'projects') {
          this.$root.toggleForm_Project(scope.opt);
        }
      }, ["prevent"])
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        side: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: scope.opt?.icon || 'icon-browser'
        }, null, 8, ["icon"])]),
        _: 2
      }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.title), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024), scope.opt.type ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        side: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [ true ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
          key: 0,
          class: "badge badge-blue font-medium"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.type) + " ", 1), scope.opt.type == 'Search' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 0,
            size: "14px",
            name: "icon-corner-down-right",
            class: "color-primary2 q-ml-xs"
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 2
        }, 1024)) : (0)]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 2
    }, 1040, ["to", "onClick"]))]),
    _: 2
  }, [!_ctx.show_button ? {
    name: "prepend",
    fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      name: "icon-search-sm",
      size: "sm",
      class: "color-primary2 q-pa-xs hover-text-secondary"
    })]),
    key: "0"
  } : undefined,  false ? 0 : undefined, _ctx.show_button ? {
    name: "after",
    fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
      rounded: "",
      size: "75px",
      class: "cursor-pointer rounded text-white bg-primary q-pa-sm",
      style: {
        "height": "auto",
        "width": "auto"
      },
      onClick: _cache[0] || (_cache[0] = $event => _ctx.$root.toggleRequest())
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: _ctx.leftIcon,
        size: "sm",
        class: "q-pa-sm",
        color: "white"
      }, null, 8, ["name"])]),
      _: 1
    })]),
    key: "2"
  } : undefined]), 1032, ["modelValue", "placeholder", "options", "onFilter"]);
}
;// CONCATENATED MODULE: ./src/components/Search/CustomDropdown.vue?vue&type=template&id=18861cd1

// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(65724);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Search/CustomDropdown.vue?vue&type=script&lang=js





/* harmony default export */ const CustomDropdownvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SearchDropdown',
  emits: ['searching'],
  components: {
    CardIconBox: CardIconBox/* default */.Z
  },
  props: {
    show_button: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Search...'
    },
    requestOptions: {
      type: Array,
      default: () => [
        //   {
        //     title: 'Label Title',
        //     url: '/',
        //     category: 'Category',
        //     icon: 'icon-browser',
        //   },
      ]
    },
    leftIcon: {
      type: String,
      default: 'icon-plus'
    }
  },
  setup() {
    const requestQuery = (0,vue_esm_bundler/* ref */.iH)('');
    const options = (0,vue_esm_bundler/* ref */.iH)(null);
    const filteredOptions = (0,vue_esm_bundler/* ref */.iH)([]);
    const search = (0,vue_esm_bundler/* ref */.iH)(null); // $refs.search
    return {
      search,
      options,
      requestQuery,
      filteredOptions
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['taskDirectory', 'projectDirectory']),
    tasksList() {
      return Object.values(this.taskDirectory);
    },
    projectsList() {
      return Object.values(this.projectDirectory);
    }
  },
  data() {
    return {
      requestOptions_Internal: []
    };
  },
  methods: {
    updateSearch_Source() {
      if (!this.requestOptions || !this.requestOptions.length) {
        this.tasksList.forEach(e => e.directory = 'tasks');
        this.projectsList.forEach(e => e.directory = 'projects');
        let _tasks = this.insertCategory('Tasks', this.tasksList, {
          action: () => this.$root.toggleRequest('task')
        });
        let _projects = this.insertCategory('Projects', this.projectsList, {
          action: () => this.$root.toggleRequest('project')
        });
        this.requestOptions_Internal = [..._tasks, ..._projects];
      } else {
        this.requestOptions_Internal = this.requestOptions;
      }
      return this.requestOptions_Internal;
    },
    insertCategory(category, array_value = [], showmore = {
      title: 'Show more',
      action: () => {}
    }) {
      if (!category || !array_value || !array_value.length) return [];
      return [
      // Limited to first 4
      {
        title: category,
        istitle: true
      }, ...array_value.slice(0, 4), {
        title: showmore?.title || 'Show more',
        showmore: true,
        action: showmore?.action || void 0
      }];
    },
    filter(val, update) {
      this.$emit('searching', {
        val,
        update
      });
      if (this.options === null) {
        // Load data
        setTimeout(() => {
          this.options = this.requestOptions_Internal;
          this.search.filter('');
        }, 100);
        update();
        return;
      }
      if (val === '') {
        update(() => {
          this.filteredOptions = this.updateSearch_Source();
        });
        return;
      }
      update(() => {
        let result = [];
        if (!this.requestOptions || !this.requestOptions.length) {
          // Tasks
          let _tasks_result = this.insertCategory('Tasks', (0,functions.searchInObjectArray)(this.tasksList, val), {
            action: () => this.$root.toggleRequest('task')
          });
          result = result.concat(_tasks_result);
          // Projects
          let _projects_result = this.insertCategory('Projects', (0,functions.searchInObjectArray)(this.projectsList, val), {
            action: () => this.$root.toggleRequest('project')
          });
          result = result.concat(_projects_result);
        } else {
          let _query = (0,functions.searchInObjectArray)(this.updateSearch_Source(), val);
          result = result.concat(_query);
        }
        this.filteredOptions = result;
        // [
        //   {
        //     title: val,
        //     icon: 'icon-search-sm',
        //     type: 'Search',
        //   },
        // ];
      });
    }
  },

  beforeMount() {
    this.updateSearch_Source();
  }
}));
;// CONCATENATED MODULE: ./src/components/Search/CustomDropdown.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(26384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerPie.js
var QSpinnerPie = __webpack_require__(10132);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(50926);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(61357);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Search/CustomDropdown.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CustomDropdownvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const CustomDropdown = (__exports__);
;










runtime_auto_import_default()(CustomDropdownvue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QIcon: QIcon/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QSpinnerPie: QSpinnerPie/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QSeparator: QSeparator/* default */.Z,QBadge: QBadge/* default */.Z,QBtn: QBtn/* default */.Z,QAvatar: QAvatar/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=chunk-common.3348cb8e.js.map