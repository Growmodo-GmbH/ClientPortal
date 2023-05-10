"use strict";
(globalThis["webpackChunkgrowmodo_hub"] = globalThis["webpackChunkgrowmodo_hub"] || []).push([[64],{

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
  "init_RequestForm": () => (init_RequestForm),
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



let actions_user;
let actions_growmodo;
let actions_helpers;
function useStore() {
  actions_user = (0,user/* default */.Z)();
  actions_growmodo = (0,growmodo/* default */.Z)();
  actions_helpers = (0,helpers/* default */.Z)();
}
async function init() {
  useStore();
  // useGrowmodo
  actions_growmodo.getExternalLinks();
  actions_growmodo.getUserRoles();
  actions_growmodo.getInvitedUserRoles();
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
async function init_RequestForm() {
  this.init();
  actions_growmodo.getPlatforms();
  actions_user.getOrgUsers();
  actions_growmodo.getTaskCategories();
  actions_growmodo.getProjectCategories();
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

/***/ 72393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ growmodo)
});

// NAMESPACE OBJECT: ./src/stores/growmodo/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  "maintenanceTaskCatId": () => (maintenanceTaskCatId)
});

// NAMESPACE OBJECT: ./src/stores/growmodo/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "formatPlatformIconSrc": () => (formatPlatformIconSrc),
  "getBrandCategories": () => (getBrandCategories),
  "getCompanyTypes": () => (getCompanyTypes),
  "getDynamicQuestion": () => (getDynamicQuestion),
  "getExternalLinks": () => (getExternalLinks),
  "getInvitedUserRoles": () => (getInvitedUserRoles),
  "getPlatformInfo": () => (getPlatformInfo),
  "getPlatforms": () => (getPlatforms),
  "getProjectCategories": () => (getProjectCategories),
  "getProjectDirectory": () => (getProjectDirectory),
  "getProjects": () => (getProjects),
  "getSingleProjects": () => (getSingleProjects),
  "getSingleTask": () => (getSingleTask),
  "getSubscription_BillingTypes": () => (getSubscription_BillingTypes),
  "getSubscription_Talents": () => (getSubscription_Talents),
  "getTaskCategories": () => (getTaskCategories),
  "getTaskDirectory": () => (getTaskDirectory),
  "getTaskQuickRequest": () => (getTaskQuickRequest),
  "getTasks": () => (getTasks),
  "getUserRoles": () => (getUserRoles),
  "planPriceCalculator": () => (planPriceCalculator),
  "requestProject": () => (requestProject),
  "requestTask": () => (requestTask)
});

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./src/stores/growmodo/state.js

/* harmony default export */ function state() {
  return {
    maintenance: (0,vue_esm_bundler/* reactive */.qj)({
      label: 'Maintenance',
      description_1: 'For businesses of all sizes that need a hands-on team to keep their websites secure and up-to-date without headaches.',
      base_price: 295,
      price_currency: 'USD'
    }),
    subscription: (0,vue_esm_bundler/* reactive */.qj)({
      label: 'All Inclusive Plan',
      description_1: 'Includes design and development talents for',
      base_price: 1795,
      price_currency: 'USD'
    }),
    redirect: (0,vue_esm_bundler/* reactive */.qj)({
      stripe: {
        url: 'https://dashboard.stripe.com',
        label: 'Stripe',
        icon: 'Stripe',
        message: 'You will be redirected to Stripe to manage your billing details',
        title: 'Redirect to Stripe'
      }
    }),
    userRoles: (0,vue_esm_bundler/* reactive */.qj)({}),
    userInvitedRoles: (0,vue_esm_bundler/* reactive */.qj)({}),
    externalLinks: (0,vue_esm_bundler/* reactive */.qj)({}),
    testimonials: (0,vue_esm_bundler/* reactive */.qj)([{
      id: 1,
      rating: 5,
      comment: `Thank you Growmodo! Your service allowed our team to stay focused on our business as they executed on website tasks- critical and small.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Jonathan Kirschner.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Jonathan',
      lastname: 'Kirschner',
      label: 'AIIR Consulting'
    }, {
      id: 2,
      rating: 5,
      comment: `We're extremely happy with Growmodo. Our project manager has been exceptional. She's always very prompt with replies and communicating how things are going.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Lauren Gilmore.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Lauren',
      lastname: 'Gilmore',
      label: 'Hyperfocal'
    }, {
      id: 3,
      rating: 5,
      comment: `Before finding Growmodo we were struggling to find good designers. With their service, we now have a dedicated team of designers that creates all our page designs, and the cost is very affordable.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/​​Aurelien Amacker.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: '​​Aurelien',
      lastname: 'Amacker',
      label: 'Systeme'
    }, {
      id: 4,
      rating: 5,
      comment: `I have been working with Growmodo for nearly two years now. With their keen eye for design, development skills and expert project management, I have managed to serve a lot more clients than I would without them.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Gaute Remen.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Gaute',
      lastname: 'Remen',
      label: 'Synlighet'
    }, {
      id: 5,
      rating: 5,
      comment: `The Growmodo team is doing great work for RightMetric. We love the well-designed outputs, the clear workflow, and the tight communication.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Evan Knight.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Evan',
      lastname: 'Knight',
      label: 'RightMetric'
    }, {
      id: 6,
      rating: 5,
      comment: `Within the first 24h of using Growmodo, they had already turned around our first complicated task. They worked so fast and with such skill that it became almost difficult for us to keep up with them!`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Kimberly Carroll.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Kimberly',
      lastname: 'Carroll',
      label: 'Teemyco'
    }, {
      id: 7,
      rating: 5,
      comment: `I'm so happy we discovered Growmodo during the rebranding phase of NattoPharma. The team was instrumental in making the new website a success.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Andrew Green.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Andrew',
      lastname: 'Green',
      label: 'NattoPharma'
    }, {
      id: 8,
      rating: 5,
      comment: `Growmodo’s project management process makes everything easy to manage and really works as an extension to our team that has allowed us to move faster and achieve a streamlined process for our web development needs.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Chris Manderino.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Chris',
      lastname: 'Manderino',
      label: 'LyfeFuel'
    }, {
      id: 9,
      rating: 5,
      comment: `The Growmodo team built a new website for my business and completely transformed our image for the better. With minimal oversight,I received daily progress updates and the team created a great-looking, funnel-focused website.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Riley Byrne.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Riley',
      lastname: 'Byrne',
      label: 'Podigy'
    }, {
      id: 10,
      rating: 5,
      comment: `I found Growmodo, after wasting hours trying to design our Webflow site and spending way too much with inconsistent freelancers. Growmodo was just what we needed in a technical design partner. They provide strategic insights, quality designs and a super cool website! Most importantly, it was a relief to have a team that was reliable to produce consistent quality results.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Mildred Armstrong Smith.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Mildred Armstrong',
      lastname: 'Smith',
      label: 'Manageroo'
    }, {
      id: 11,
      rating: 5,
      comment: `Working with Growmodo has given me the confidence and ability to scale our web projects in a timely manner. They are super talented in their design and experts in their execution.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Ben Perlman.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Ben',
      lastname: 'Perlman',
      label: 'Inicio Marketing'
    }, {
      id: 12,
      rating: 5,
      comment: `This is an awesome solution that helps us finish design and development projects easily without the hassle of hiring and managing in-house employees. I highly recommend Growmodo.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Oren Harnevo.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Oren',
      lastname: 'Harnevo',
      label: 'Feel'
    }, {
      id: 13,
      rating: 5,
      comment: `Growmodo is the real extension of our Marketing Team! Helping us build complex web pages, high-converting landing pages, technical setups, simple to intricate graphic designs, and many more!`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Genesis Masangcay.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Genesis',
      lastname: 'Masangcay',
      label: 'Highered'
    }, {
      id: 14,
      rating: 5,
      comment: `Growmodo really helped us keep accurate control over our budget and get a fantastically designed website in the process. I highly recommend not just their talents, but this model.`,
      avatar: 'https://cdn.growmodo.com/public/images/testimonials/Sean Boyce.png',
      company_avatar: 'https://cdn.growmodo.com/public/images/testimonials/company/Sisyphus.png',
      firtname: 'Sean',
      lastname: 'Boyce',
      label: 'StaffGeek'
    }]),
    platforms: (0,vue_esm_bundler/* reactive */.qj)({}),
    statuses: (0,vue_esm_bundler/* reactive */.qj)({
      maintenance: {
        label: 'Maintenance',
        badgeType: 'blue'
      },
      active: {
        label: 'Active',
        badgeType: 'green'
      },
      inactive: {
        label: 'Inactive',
        badgeType: 'warning'
      },
      pending: {
        label: 'Pending',
        badgeType: 'grey'
      },
      paused: {
        label: 'Paused',
        badgeType: 'grey'
      },
      cancelled: {
        label: 'Cancelled',
        badgeType: 'negative'
      },
      error: {
        label: 'Error',
        badgeType: 'negative'
      }
    }),
    companyTypes: (0,vue_esm_bundler/* reactive */.qj)({}),
    brandCategories: (0,vue_esm_bundler/* reactive */.qj)({}),
    subscription_Talents: (0,vue_esm_bundler/* reactive */.qj)({}),
    subscription_BillingTypes: (0,vue_esm_bundler/* reactive */.qj)({}),
    taskDirectory_Categories: (0,vue_esm_bundler/* reactive */.qj)({}),
    taskDirectory: (0,vue_esm_bundler/* reactive */.qj)({}),
    projectDirectory_Categories: (0,vue_esm_bundler/* reactive */.qj)({}),
    projectDirectory: (0,vue_esm_bundler/* reactive */.qj)({})
  };
}
;// CONCATENATED MODULE: ./src/stores/growmodo/getters.js
function maintenanceTaskCatId() {
  return this.taskDirectory_Categories?.['maintenance']?.id;
}

// EXTERNAL MODULE: ./src/boot/apis.js
var apis = __webpack_require__(18744);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var stores_helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var stores_user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./src/stores/growmodo/actions.js





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
async function getUserRoles(preferCache) {
  const url = '/miscs/roles';
  const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
  if (preferCache) {
    if (cache_data?.data && cache_data.data?.length) {
      cache_data.data.forEach(e => {
        this.userRoles[e.value] = e;
      });
    }
  }
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
    return cache_data || e;
  });
}
async function getInvitedUserRoles(preferCache) {
  const url = '/miscs/roles-invite-user';
  const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
  if (preferCache) {
    if (cache_data?.data && cache_data.data?.length) {
      cache_data.data.forEach(e => {
        this.userInvitedRoles[e.value] = e;
      });
    }
  }
  return await apis.api.get(url).then(res => {
    const data = res.data;
    if (data?.data && data.data?.length) {
      data.data.forEach(e => {
        this.userInvitedRoles[e.value] = e;
      });
    }
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
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
  const url = '/miscs/platforms?per_page=-1';
  return await apis.api.get(url).then(res => {
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
  const info = this.getPlatformInfo(platform) || {};
  return 'img:' + (info.icon && info.icon.startsWith('https://') ? `${info.icon}` : `${apis.cdn.baseURL}${apis.cdn.platforms}/${info.title || platform}.png`);
}
function planPriceCalculator(talentCnt, billingId) {
  const helpers = (0,stores_helpers/* default */.Z)();
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
  let discount_label = total === 0 ? 'Custom' : helpers.getCurrency(billing.savings_currency)?.symbol + formatMoney(discount_total);
  // Final Label with Total Discounted Price
  let label = total === 0 ? 'Custom' : helpers.getCurrency(this.subscription.savings_currency)?.symbol + formatMoney(total_discounted);
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
  const url = '/miscs/task-dirs/categories?per_page=-1';
  return await apis.api.get(url).then(res => {
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
    const cache_res_data = cache_data.data || {};
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
  const url = '/miscs/task-dirs?per_page=-1';
  return await apis.api.get(url).then(res => {
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
    const cache_res_data = cache_data.data || {};
    if (cache_res_data?.data && cache_data.data?.length) {
      cache_res_data.data.forEach(e => {
        this.taskDirectory[e.id] = e;
      });
    }
    return cache_data || e;
  });
}

// Task Quick Request
async function getTaskQuickRequest() {
  const url = '/miscs/task/quick-request';
  return await apis.api.get(url).then(res => {
    const data = res.data || {};
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    return cache_data || e;
  });
}

// Project Categories
async function getProjectCategories() {
  const url = '/miscs/project-dirs/categories?per_page=-1';
  return await apis.api.get(url).then(res => {
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
  const url = '/miscs/project-dirs?per_page=-1';
  return await apis.api.get(url).then(res => {
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
    const cache_res_data = cache_data.data || {};
    if (cache_res_data?.data && cache_data.data?.length) {
      cache_res_data.data.forEach(e => {
        this.projectDirectory[e.id] = e;
      });
    }
    return cache_data || e;
  });
}

/* Request Methods */
// Task Request
async function requestTask(payload, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/organizations/${orgId}/tasks`;
  return await apis.api.post(url, payload).then(res => {
    const data = res.data || {};
    return data;
  }).catch(e => {
    return e;
  });
}
// Project Request
async function requestProject(payload, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/organizations/${orgId}/projects`;
  return await apis.api.post(url, payload).then(res => {
    const data = res.data || {};
    return data;
  }).catch(e => {
    return e;
  });
}

// Get Tasks
async function getTasks(params = {}, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/organizations/${orgId}/tasks`;
  return await apis.api.get(url, {
    params
  }).then(res => {
    const data = res.data || {};
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    return cache_data || e;
  });
}
async function getSingleTask(taskId, params = {}, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/organizations/${orgId}/tasks/${taskId}`;
  return await apis.api.get(url, {
    params
  }).then(res => {
    const data = res.data || {};
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    return cache_data || e;
  });
}

// Get Projects
async function getProjects(params = {}, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/organizations/${orgId}/projects`;
  return await apis.api.get(url, {
    params
  }).then(res => {
    const data = res.data || {};
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    return cache_data || e;
  });
}
async function getSingleProjects(projectId, params = {}, orgId) {
  if (!orgId) {
    const user = (0,stores_user/* default */.Z)();
    orgId = user.activeOrgID;
    if (!orgId) return;
  }
  const url = `/organizations/${orgId}/projects/${projectId}`;
  return await apis.api.get(url, {
    params
  }).then(res => {
    const data = res.data || {};
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
    return cache_data || e;
  });
}
async function getDynamicQuestion(questionId, params = {}) {
  if (!questionId) return {};
  const url = `/dynamic-question/${questionId}`;
  return await apis.api.get(url, {
    params
  }).then(res => {
    const data = res.data || {};
    fn_store/* default.addAPICache */.Z.addAPICache(url, data);
    return data;
  }).catch(e => {
    const cache_data = fn_store/* default.getAPICache */.Z.getAPICache(url);
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

/***/ 73912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BrandsList)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/BrandsList.vue?vue&type=template&id=53a18714


const _hoisted_1 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body2 font-medium q-pt-md full-width"
}, " Add New Brand ", -1);
const _hoisted_2 = {
  key: 0,
  class: "full-width"
};
const _hoisted_3 = {
  class: "row item-center q-gutter-sm justify-between"
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
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_menu = (0,vue_esm_bundler/* resolveComponent */.up)("q-menu");
  const _component_q_card_actions = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-actions");
  const _component_q_infinite_scroll = (0,vue_esm_bundler/* resolveComponent */.up)("q-infinite-scroll");
  const _component_dynamic_dialog_confirmation = (0,vue_esm_bundler/* resolveComponent */.up)("dynamic-dialog-confirmation");
  const _component_q_dialog = (0,vue_esm_bundler/* resolveComponent */.up)("q-dialog");
  const _component_CreateNewBrand = (0,vue_esm_bundler/* resolveComponent */.up)("CreateNewBrand");
  const _directive_ripple = (0,vue_esm_bundler/* resolveDirective */.Q2)("ripple");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: ""
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_infinite_scroll, {
      onLoad: _ctx.loadInfiniteScroll,
      offset: 0,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["row", `q-col-gutter-${_ctx.gridGutter}`])
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.canAdd ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
        key: 0,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.gridClass)
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card, {
        flat: "",
        bordered: "",
        class: "card-quicklinks card-quicklinks-new border-add border-dashed bg-primary-1 full-height row items-center justify-center hover-border-secondary",
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
          "enter-active-class": "animated fadeIn",
          "leave-active-class": "animated fadeOut",
          key: i
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
            class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.gridClass)
          }, [(0,vue_esm_bundler/* withDirectives */.wy)(((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
            flat: "",
            bordered: "",
            class: "card-quicklinks brand full-height slide-hover row items-center hover-border-secondary",
            onClick: $event => _ctx.$router.push('/brands/' + brand.id)
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
              class: "self-start full-width q-px-lg q-pt-lg q-pb-md"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.brandCategories?.[brand?.brand_type]?.label ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
                rounded: "",
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["badge badge-md", {
                  'badge-bg-disable': !_ctx.brandCategories?.[brand?.brand_type]?.bg_color || brand?.deleted_at,
                  'badge-text-disable': !_ctx.brandCategories?.[brand?.brand_type]?.color || brand?.deleted_at
                }]),
                style: (0,vue_esm_bundler/* normalizeStyle */.j5)(`background-color: ${_ctx.brandCategories?.[brand?.brand_type]?.bg_color}; color: ${_ctx.brandCategories?.[brand?.brand_type]?.color}`)
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(brand?.deleted_at ? 'Archived' : _ctx.brandCategories?.[brand?.brand_type]?.label), 1)]),
                _: 2
              }, 1032, ["class", "style"])]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                flat: "",
                round: "",
                size: "xs",
                name: "icon-dots-horizontal",
                class: "absolute-top-right all-pointer-events text-primary-500",
                style: {
                  "top": "8px",
                  "right": "8px"
                },
                onClick: [_cache[1] || (_cache[1] = (0,vue_esm_bundler/* withModifiers */.iM)(() => {}, ["stop"])), _cache[2] || (_cache[2] = (0,vue_esm_bundler/* withModifiers */.iM)(() => {}, ["prevent"]))]
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_menu, {
                  "auto-close": ""
                }, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_list, {
                    separator: ""
                  }, {
                    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [!brand?.deleted_at ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
                      key: 0,
                      clickable: "",
                      class: "hover-text-secondary",
                      onClick: (0,vue_esm_bundler/* withModifiers */.iM)($event => _ctx.addAction('archiveOrgBrand_local', brand.id), ["prevent"])
                    }, {
                      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                        side: "",
                        class: "q-pr-sm"
                      }, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                          name: "icon-archive",
                          size: "xs"
                        })]),
                        _: 1
                      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Archive")]),
                        _: 1
                      })]),
                      _: 2
                    }, 1032, ["onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), brand?.deleted_at ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
                      key: 1,
                      clickable: "",
                      class: "hover-text-secondary",
                      onClick: (0,vue_esm_bundler/* withModifiers */.iM)($event => _ctx.restoreArchiveOrgBrand_local(brand.id), ["prevent"])
                    }, {
                      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                        side: "",
                        class: "q-pr-sm"
                      }, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                          name: "icon-corner-down-left",
                          size: "xs"
                        })]),
                        _: 1
                      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Restore")]),
                        _: 1
                      })]),
                      _: 2
                    }, 1032, ["onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
                      clickable: "",
                      class: "text-negative hover-text-negative",
                      onClick: (0,vue_esm_bundler/* withModifiers */.iM)($event => _ctx.addAction('deleteOrgBrand_local', brand.id), ["prevent"])
                    }, {
                      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                        side: "",
                        class: "q-pr-sm"
                      }, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                          name: "icon-trash-01",
                          size: "xs",
                          color: "negative"
                        })]),
                        _: 1
                      }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Delete")]),
                        _: 1
                      })]),
                      _: 2
                    }, 1032, ["onClick"])]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1024)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.limitBrandName(brand?.brand_name)), 1)]),
              _: 2
            }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
              align: "right",
              class: "full-width q-px-md bg-primary-1 self-end text-secondary text-body1 font-medium",
              to: brand.id,
              href: brand.id,
              style: {
                "height": "56px"
              }
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" View Brand "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                size: "20px",
                name: "icon-arrow-narrow-right",
                class: "q-pl-sm slide-hover-left-md"
              })]),
              _: 2
            }, 1032, ["to", "href"])]),
            _: 2
          }, 1032, ["onClick"])), [[_directive_ripple, void 0, "accent"]])], 2)]),
          _: 2
        }, 1024);
      }), 128))]),
      _: 1
    }, 8, ["onLoad", "class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.actionConfirmation,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.actionConfirmation = $event)
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_dynamic_dialog_confirmation, (0,vue_esm_bundler/* mergeProps */.dG)(_ctx.actionOptions, {
        onOkay: _ctx.performAction
      }), null, 16, ["onOkay"])]),
      _: 1
    }, 8, ["modelValue"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: "",
      modelValue: _ctx.addBrand,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.addBrand = $event),
      "transition-show": "scale",
      "transition-hide": "scale",
      "transition-duration": 300
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CreateNewBrand, {
        style: {
          "max-width": "90vw",
          "width": "640px"
        },
        onFinished: _cache[4] || (_cache[4] = () => {
          _ctx.queryBrands();
          _ctx.addBrand = false;
        }),
        onClose: _cache[5] || (_cache[5] = $event => _ctx.addBrand = false)
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Brands/BrandsList.vue?vue&type=template&id=53a18714

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/debounce.js
var debounce = __webpack_require__(60899);
// EXTERNAL MODULE: ./src/components/Brands/CreateNewBrand.vue + 4 modules
var CreateNewBrand = __webpack_require__(4793);
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
    },
    search: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    per_page: {
      type: Number,
      default: 10
    },
    sort_by: {
      type: String,
      default: 'updated_at'
    },
    start_page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      maxTitle: 33,
      addBrand: false,
      brandsResult: {},
      current_page: 1,
      last_page: 1,
      queryBrands: () => void 0,
      loadInfiniteScroll: (i, d) => typeof d === 'function' ? d() : void 0,
      actionConfirmation: false,
      actionTargetBrand: null,
      actionName: '',
      actionOptions: {}
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrg', 'selectedOrgBrands']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['brandCategories']),
    brands() {
      let visibleBrands = Object.values(this.brandsResult);
      // Slice to Maximimun Brands
      if (this.maxBrand && typeof this.maxBrand === 'number') visibleBrands = visibleBrands.slice(0, this.maxBrand);
      return visibleBrands;
    },
    totalVisibleBrands() {
      let visibleBrands = Object.values(this.brandsResult);
      // Slice to Maximimun Brands
      if (this.maxBrand && typeof this.maxBrand === 'number') visibleBrands = visibleBrands.slice(0, this.maxBrand);
      return visibleBrands.length;
    },
    confirmationDialogOptions() {
      return {
        archiveOrgBrand_local: {
          icon: 'icon-archive',
          okText: 'Archive',
          messageTitle: `Archive "${this.brandsResult[this.actionTargetBrand]?.brand_name}" brand?`
        },
        restoreArchiveOrgBrand_local: {
          icon: 'icon-corner-down-left',
          okText: 'Restore',
          messageTitle: `Restore "${this.brandsResult[this.actionTargetBrand]?.brand_name}" brand?`
        },
        deleteOrgBrand_local: {
          icon: 'icon-trash-01',
          okText: 'Delete',
          okColor: 'negative',
          messageTitle: `Confirm to delete "${this.brandsResult[this.actionTargetBrand]?.brand_name}" brand?`
        }
      };
    }
  },
  async mounted() {
    this.current_page = this.start_page;
    this.brandsResult = this.selectedOrgBrands;
    this.queryBrands = (0,debounce/* default */.Z)(this.queryBrands_Fn, 300 /* execute at most once every 0.3s */);

    this.loadInfiniteScroll = (0,debounce/* default */.Z)(this.loadInfiniteScroll_Fn, 500 /* ms to wait */);

    this.queryBrands(this.current_page, this.per_page, true);
  },
  watch: {
    status: {
      async handler(val) {
        this.current_page = 1;
        this.queryBrands(this.current_page, this.per_page, true);
      }
    },
    search: {
      async handler(val) {
        this.current_page = 1;
        this.queryBrands(this.current_page, this.per_page, true);
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['getOrgBrands', 'deleteOrgBrand', 'archiveOrgBrand', 'restoreArchiveOrgBrand', 'removeFromOrgBrandState']),
    addAction(method_name, brand_id) {
      if (typeof this[method_name] === 'function' && this.brandsResult[brand_id] && this.confirmationDialogOptions[method_name]) {
        this.actionConfirmation = true;
        this.actionName = method_name;
        this.actionTargetBrand = brand_id;
        this.actionOptions = this.confirmationDialogOptions[method_name];
      }
    },
    performAction() {
      if (typeof this[this.actionName] === 'function') this[this.actionName](this.actionTargetBrand);
    },
    showActionNotif(message, success = true) {
      const params = {
        icon: success ? 'icon-check-circle-broken' : 'icon-alert-triangle',
        message
      };
      if (!success) params.iconColor = 'negative';
      this.$q.notify(params);
    },
    archiveOrgBrand_local(brand_id, org_id = this.selectedOrg?.id) {
      this.archiveOrgBrand(brand_id, org_id).then(res => {
        if (res.success) {
          if (!this.status || this.status == 'archived') {
            if (this.brandsResult[brand_id]) this.brandsResult[brand_id].deleted_at = Date.now();
            this.showActionNotif('Brand has been archived');
          } else {
            if (this.brandsResult[brand_id]) delete this.brandsResult[brand_id];
          }
        } else {
          this.showActionNotif('Action failed', false);
        }
      });
    },
    restoreArchiveOrgBrand_local(brand_id, org_id = this.selectedOrg?.id) {
      const brand_info = this.brandsResult[brand_id];
      this.restoreArchiveOrgBrand(brand_info, org_id).then(res => {
        if (res.success) {
          if (this.brandsResult[brand_id]) {
            this.brandsResult[brand_id].deleted_at = null;
            if (this.status == 'archived') delete this.brandsResult[brand_id];
            this.showActionNotif('Brand has been restored');
          }
        } else {
          this.showActionNotif('Action failed', false);
        }
      });
    },
    deleteOrgBrand_local(brand_id, org_id = this.selectedOrg?.id) {
      this.deleteOrgBrand(brand_id, org_id).then(res => {
        if (res.success) {
          if (this.brandsResult[brand_id]) delete this.brandsResult[brand_id];
          this.showActionNotif('Brand has been removed');
        } else {
          this.showActionNotif('Action failed', false);
        }
      });
    },
    limitBrandName(brandName) {
      let addDot = brandName?.length > this.maxTitle;
      return String(brandName).slice(0, 33) + (addDot ? '...' : '');
    },
    async queryBrands_Fn(page, per_page, clearOldBrands = false) {
      if (!page) page = this.current_page;
      if (!per_page) per_page = this.per_page;
      const brandQuery = await this.getOrgBrands(false, this.selectedOrg?.id, {
        page,
        per_page,
        search: this.search,
        status: this.status,
        sort_by: this.sort_by,
        sort: this.reverseList ? 'DESC' : 'ASC'
      });
      if (brandQuery.success) {
        this.last_page = brandQuery.data?.last_page;
        const brands = brandQuery.data?.data || [];
        if (clearOldBrands) this.brandsResult = {};
        for (const brand of brands) {
          this.brandsResult[brand.id] = brand;
        }
      }
      return brandQuery;
    },
    loadInfiniteScroll_Fn(index, done) {
      if (this.current_page >= this.last_page) {
        done();
      } else {
        if (this.last_page > this.current_page) this.current_page += 1;
        this.queryBrands()?.finally?.(() => {
          done();
        });
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Brands/BrandsList.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/infinite-scroll/QInfiniteScroll.js
var QInfiniteScroll = __webpack_require__(86870);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(61357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js
var QMenu = __webpack_require__(56362);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(13246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
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












runtime_auto_import_default()(BrandsListvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QInfiniteScroll: QInfiniteScroll/* default */.Z,QCardSection: QCardSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QBadge: QBadge/* default */.Z,QMenu: QMenu/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QCardActions: QCardActions/* default */.Z,QDialog: QDialog/* default */.Z});runtime_auto_import_default()(BrandsListvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ }),

/***/ 4793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CreateNewBrand)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/CreateNewBrand.vue?vue&type=template&id=e5448d78


const _hoisted_1 = {
  class: "q-col-gutter-md overflow-view"
};
const _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-py-xs"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal q-py-md"
}, " Brand Information ")], -1);
const _hoisted_3 = {
  class: "q-col-gutter-md",
  style: {
    "max-height": "375px"
  }
};
const _hoisted_4 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const _hoisted_5 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium text-body2 text-primary-500"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Name"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const _hoisted_6 = {
  class: "col-12"
};
const _hoisted_7 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_8 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium text-body2 text-primary-500"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Type"), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-red"
}, "*")], -1);
const _hoisted_9 = {
  class: "col-12"
};
const _hoisted_10 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_11 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium text-body2 text-primary-500"
}, " Website ", -1);
const _hoisted_12 = {
  class: "col-12"
};
const _hoisted_13 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const _hoisted_14 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 font-medium text-body2 text-primary-500"
}, " Brand Tagline ", -1);
const _hoisted_15 = {
  class: "col-12"
};
const _hoisted_16 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const _hoisted_17 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "self-start col-12 q-pt-sm font-medium text-body2 text-primary-500"
}, " Brand Description ", -1);
const _hoisted_18 = {
  class: "col-12"
};
const _hoisted_19 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const _hoisted_20 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "self-start col-12 font-medium text-body2 text-primary-500"
}, " Target Audience ", -1);
const _hoisted_21 = {
  class: "col-12"
};
const _hoisted_22 = {
  class: "row items-center justify-start q-col-gutter-sm"
};
const _hoisted_23 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "self-start col-12 font-medium text-body2 text-primary-500"
}, " Competitors ", -1);
const _hoisted_24 = {
  class: "col-12"
};
const _hoisted_25 = {
  class: "row items-center justify-start q-col-gutter-xs q-pb-md"
};
const _hoisted_26 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "self-start col-12 font-medium text-body2 text-primary-500"
}, " Unique Value Proposition ", -1);
const _hoisted_27 = {
  class: "col-12"
};
const _hoisted_28 = {
  class: "q-col-gutter-md"
};
const _hoisted_29 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Logo "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-normal q-py-sm"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_30 = {
  class: "q-mt-md"
};
const _hoisted_31 = {
  class: "q-col-gutter-md"
};
const _hoisted_32 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Colors "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-normal q-py-sm"
}, " Generate brand colors from image or add your own brand colors. ")])], -1);
const _hoisted_33 = {
  class: "q-mt-md"
};
const _hoisted_34 = {
  class: "row q-col-gutter-lg"
};
const _hoisted_35 = {
  class: "col-12"
};
const _hoisted_36 = {
  class: "row justify-end q-gutter-x-md q-pa-sm"
};
const _hoisted_37 = {
  class: "col-12"
};
const _hoisted_38 = {
  class: "fit q-pt-md"
};
const _hoisted_39 = {
  class: "text-body2 q-pb-md font-medium row items-center justify-between"
};
const _hoisted_40 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "col-auto"
}, "Add Colors", -1);
const _hoisted_41 = {
  class: "col-auto"
};
const _hoisted_42 = {
  class: "row q-col-gutter-md"
};
const _hoisted_43 = {
  class: "col-12 col-sm-6"
};
const _hoisted_44 = {
  class: "col-12 col-sm-6"
};
const _hoisted_45 = {
  class: "col-12 col-sm-6"
};
const _hoisted_46 = {
  class: "col-12 col-sm-6"
};
const _hoisted_47 = {
  class: "q-col-gutter-md"
};
const _hoisted_48 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Fonts "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-normal q-py-sm"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_49 = {
  class: "q-mt-md"
};
const _hoisted_50 = {
  class: "q-mt-md q-pb-sm"
};
const _hoisted_51 = {
  key: 0,
  class: "q-mb-md"
};
const _hoisted_52 = {
  class: "row items-center justify-start q-col-gutter-xs q-col-gutter-md q-mt-sm scroll",
  style: {
    "max-height": "120px"
  }
};
const _hoisted_53 = {
  class: "fit hover-visibility"
};
const _hoisted_54 = ["href"];
const _hoisted_55 = {
  class: "col-3"
};
const _hoisted_56 = {
  class: "col-2 row q-col-gutter-x-sm hover-visibility-show"
};
const _hoisted_57 = {
  class: "col"
};
const _hoisted_58 = {
  class: "q-col-gutter-md"
};
const _hoisted_59 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Icon "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-normal q-py-sm"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_60 = {
  class: "q-mt-md"
};
const _hoisted_61 = {
  class: "q-col-gutter-md"
};
const _hoisted_62 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Brand Images "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-normal q-py-sm"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_63 = {
  class: "q-mt-md"
};
const _hoisted_64 = {
  class: "q-col-gutter-md"
};
const _hoisted_65 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createTextVNode */.Uk)(" Graphic Elements "), /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-body1 text-primary-500 font-normal q-py-sm"
}, " Uploading multiple files are allowed. ")])], -1);
const _hoisted_66 = {
  class: "q-mt-md"
};
const _hoisted_67 = {
  class: "q-col-gutter-md"
};
const _hoisted_68 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "q-mt-md"
}, [/*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h3 text-primary font-medium letter-space-normal"
}, " Social Media Links ")], -1);
const _hoisted_69 = {
  class: "q-pt-lg q-pb-md"
};
const _hoisted_70 = {
  class: "row items-center q-col-gutter-md"
};
const _hoisted_71 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_72 = {
  class: "col-12 font-medium text-body2 text-primary-500"
};
const _hoisted_73 = {
  class: "col-12"
};
const _hoisted_74 = {
  class: "full-width flex flex-center"
};
const _hoisted_75 = {
  class: "row q-col-gutter-md justify-center",
  style: {
    "width": "720px"
  }
};
const _hoisted_76 = {
  key: 0,
  class: "col-12 col-sm-6"
};
const _hoisted_77 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "q-px-sm font-medium"
}, "Back", -1);
const _hoisted_78 = {
  class: "col-12 col-sm-6"
};
const _hoisted_79 = {
  class: "q-px-sm font-medium"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close_button = (0,vue_esm_bundler/* resolveComponent */.up)("close-button");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_SelectBrandType = (0,vue_esm_bundler/* resolveComponent */.up)("SelectBrandType");
  const _component_InputWebsite = (0,vue_esm_bundler/* resolveComponent */.up)("InputWebsite");
  const _component_TextArea1 = (0,vue_esm_bundler/* resolveComponent */.up)("TextArea1");
  const _component_q_step = (0,vue_esm_bundler/* resolveComponent */.up)("q-step");
  const _component_FileUploader = (0,vue_esm_bundler/* resolveComponent */.up)("FileUploader");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_ColorPickerCard = (0,vue_esm_bundler/* resolveComponent */.up)("ColorPickerCard");
  const _component_q_slide_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-slide-item");
  const _component_SelectFont = (0,vue_esm_bundler/* resolveComponent */.up)("SelectFont");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
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
        "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => _ctx.formStep = $event),
        ref: "formStepper",
        color: "secondary",
        class: "full-width new-brand-stepper",
        "done-icon": "icon-tick text-h4",
        "done-color": "secondary text-secondary",
        "active-icon": "icon-circle-01 text-body2",
        "active-color": "primary",
        "inactive-icon": "icon-circle-01 text-body2 text-primary-500",
        "inactive-color": "primary-200",
        "error-icon": "icon-alert-triangle",
        "error-color": "negative",
        contracted: _ctx.$q.screen.lt.sm,
        "header-class": "text-primary-500",
        "alternative-labels": ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 1,
          title: "Brand Information",
          class: "flex flex-center full-width",
          done: _ctx.formStep > 1
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [_hoisted_2, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [_hoisted_5, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            dense: "",
            outlined: "",
            modelValue: _ctx.brand.brand_name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.brand.brand_name = $event),
            placeholder: "Brand Name"
          }, null, 8, ["modelValue"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [_hoisted_8, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SelectBrandType, {
            modelValue: _ctx.brand.brand_type,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brand.brand_type = $event),
            initModel: _ctx.brand.brand_type
          }, null, 8, ["modelValue", "initModel"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [_hoisted_11, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputWebsite, {
            modelValue: _ctx.brand.website,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.brand.website = $event)
          }, null, 8, ["modelValue"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [_hoisted_14, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_15, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            dense: "",
            outlined: "",
            modelValue: _ctx.brand.tagline,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.brand.tagline = $event),
            placeholder: _ctx.brand.tagline || 'Your brand tagline'
          }, null, 8, ["modelValue", "placeholder"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_16, [_hoisted_17, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_18, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_TextArea1, {
            rows: "7",
            autofocus: false,
            modelValue: _ctx.brand.description,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.brand.description = $event),
            placeholder: _ctx.brand.description || 'Enter a description...'
          }, null, 8, ["modelValue", "placeholder"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_19, [_hoisted_20, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_21, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_TextArea1, {
            rows: "7",
            autofocus: false,
            modelValue: _ctx.brand.target_audience,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.brand.target_audience = $event),
            placeholder: _ctx.brand.target_audience || 'Your target audience'
          }, null, 8, ["modelValue", "placeholder"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_22, [_hoisted_23, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_24, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_TextArea1, {
            rows: "7",
            autofocus: false,
            modelValue: _ctx.brand.competitors,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.brand.competitors = $event),
            placeholder: _ctx.brand.competitors || 'Your competitors'
          }, null, 8, ["modelValue", "placeholder"])])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_25, [_hoisted_26, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_27, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_TextArea1, {
            rows: "7",
            autofocus: false,
            modelValue: _ctx.brand.value_proposition,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.brand.value_proposition = $event),
            placeholder: _ctx.brand.value_proposition || 'Your unique value proposition'
          }, null, 8, ["modelValue", "placeholder"])])])])])]),
          _: 1
        }, 8, ["done"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 2,
          title: "Brand Guidlines",
          class: "flex flex-center full-width full-inner",
          done: _ctx.formStep > 2
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
            modelValue: _ctx.formStepBrandInfo,
            "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => _ctx.formStepBrandInfo = $event),
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
              name: "brand_logo",
              title: "Brand Logo",
              class: "flex flex-center full-width q-px-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_28, [_hoisted_29, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_30, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                withItems: "",
                miniItems: "",
                ref: "brand_logo",
                "max-file-size": "10000000",
                factory: files => _ctx.factoryFn(files, 'brand_logo'),
                note: "AI, EPS, PSD, SVG, PNG, GIF or JPEG (max. 10MB)",
                accept: ".ai, .eps, .psd, .svg, .png, .gif, .jpeg, .jpg, .ico",
                removedFile: _ctx.brand['brand_logo']?.removedFile,
                onAdded: _cache[8] || (_cache[8] = files => _ctx.addUploadToModel('brand', 'brand_logo', files, 'brand_logo')),
                initSlots: _ctx.brand['brand_logo'],
                thumbnail: "icon-image-03"
              }, null, 8, ["factory", "removedFile", "initSlots"])])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: "brand_colors",
              title: "Brand Colors",
              class: "flex flex-center full-width q-px-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_31, [_hoisted_32, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_33, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_34, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_35, [!_ctx.brandColorSrc || !_ctx.validImageForColorPalette ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_FileUploader, {
                key: 0,
                multiple: false,
                "auto-upload": false,
                ref: "colorSourceUploader",
                "max-file-size": "10000000",
                class: "full-height",
                note: "SVG, PNG, JPG or GIF (max. 10MB)",
                accept: ".svg, .png, .gif, .jpeg, .jpg, .ico",
                removedFile: _ctx.brandColorSrcDelete,
                onAdded: _ctx.addedImgColorSource
              }, null, 8, ["removedFile", "onAdded"])) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                key: 1,
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["full-height rounded border-add", _ctx.brandColorSrc ? 'border-solid' : 'border-dashed']),
                style: (0,vue_esm_bundler/* normalizeStyle */.j5)([{
                  "min-height": "250px"
                }, _ctx.brandColorSrc ? `background-image: url('${_ctx.brandColorSrc}'); background-position: center; background-repeat: no-repeat; background-size: contain;` : ''])
              }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_36, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                flat: "",
                round: "",
                unelevated: "",
                size: "sm",
                color: "primary-500",
                class: "hover-text-negative",
                onClick: _cache[9] || (_cache[9] = () => {
                  _ctx.brandColorSrc = '';
                  _ctx.colorPalette = null;
                  _ctx.brandColorSrcDelete = _ctx.brandColorSrcFile;
                  _ctx.$refs?.['colorSourceUploader']?.reset();
                })
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                  name: "icon-trash-01",
                  size: "20px"
                })]),
                _: 1
              })])], 6))]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_37, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_38, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_39, [_hoisted_40, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_41, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                flat: "",
                size: "sm",
                icon: "icon-plus",
                color: "primary",
                class: "hover-text-secondary q-pa-sm",
                onClick: _cache[10] || (_cache[10] = $event => _ctx.brand.customColors.push({}))
              })])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_42, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_43, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Primary",
                initColor: _ctx.brand.brand_colors['Primary'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.brand_colors['Primary'] && _ctx.brandColors['primary']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[11] || (_cache[11] = c => {
                  _ctx.brandColors['primary'] = c;
                  _ctx.brand.brand_colors['Primary'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_44, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Secondary",
                initColor: _ctx.brand.brand_colors['Secondary'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.brand_colors['Secondary'] && _ctx.brandColors['secondary']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[12] || (_cache[12] = c => {
                  _ctx.brandColors['secondary'] = c;
                  _ctx.brand.brand_colors['Secondary'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_45, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Accent",
                initColor: _ctx.brand.brand_colors['Accent'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.brand_colors['Accent'] && _ctx.brandColors['accent']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[13] || (_cache[13] = c => {
                  _ctx.brandColors['accent'] = c;
                  _ctx.brand.brand_colors['Accent'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_46, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPickerCard, {
                label: "Text",
                initColor: _ctx.brand.brand_colors['Text'],
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(_ctx.brand.brand_colors['Text'] && _ctx.brandColors['text']?.dark ? 'no-border' : ''),
                colorPalette: _ctx.colorPalette,
                onUpdate: _cache[14] || (_cache[14] = c => {
                  _ctx.brandColors['text'] = c;
                  _ctx.brand.brand_colors['Text'] = c.color;
                })
              }, null, 8, ["initColor", "class", "colorPalette"])]), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.brand.customColors, (customColor, i) => {
                return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                  key: customColor,
                  class: "col-12 col-sm-6"
                }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_slide_item, {
                  class: "rounded",
                  "right-color": "negative",
                  onRight: opt => _ctx.customColorsSlide(i, opt)
                }, {
                  right: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                    name: "icon-trash-01"
                  })]),
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_ColorPickerCard, {
                    label: customColor.label,
                    initColor: customColor.color,
                    colorPalette: _ctx.colorPalette,
                    editableLabel: true,
                    class: (0,vue_esm_bundler/* normalizeClass */.C_)(customColor && customColor?.dark ? 'no-border' : ''),
                    key: customColor,
                    onUpdate: c => {
                      customColor.color = c.color;
                    },
                    onUpdateLabel: e => customColor.label = e
                  }, null, 8, ["label", "initColor", "colorPalette", "class", "onUpdate", "onUpdateLabel"]))]),
                  _: 2
                }, 1032, ["onRight"])]);
              }), 128))])])])])])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: "brand_fonts",
              title: "Brand Fonts",
              class: "flex flex-center full-width q-px-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_47, [_hoisted_48, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_49, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                withItems: "",
                miniItems: "",
                ref: "brand_fonts",
                "max-file-size": "10000000",
                factory: files => _ctx.factoryFn(files, 'brand_fonts'),
                note: "WOFF2, WOFF, SVG, OTF or TTF (max. 10MB)",
                accept: ".woff2, .woff, .svg, .otf, .ttf",
                removedFile: _ctx.brand['brand_fonts']?.removedFile,
                onAdded: _cache[15] || (_cache[15] = files => _ctx.addUploadToModel('brand', 'brand_fonts', files, 'brand_fonts')),
                initSlots: _ctx.brand['brand_fonts'],
                thumbnail: "icon-type-square"
              }, null, 8, ["factory", "removedFile", "initSlots"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_50, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_SelectFont, {
                modelValue: _ctx.brand['googlefonts'],
                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => _ctx.brand['googlefonts'] = $event),
                initModel: _ctx.brand['googlefonts']
              }, null, 8, ["modelValue", "initModel"]), _ctx.brand.googlefonts?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_51, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_52, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.brand.googlefonts, font => {
                return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
                  key: font,
                  class: "col-12 col-sm-6 rounded overflow-hidden"
                }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_53, [(0,vue_esm_bundler/* createElementVNode */._)("a", {
                  target: "_blank",
                  class: "row items-center q-col-gutter-sm cursor-pointer text-primary",
                  href: `https://fonts.google.com/specimen/${font}`
                }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_55, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                  icon: "icon-type-square"
                })]), (0,vue_esm_bundler/* createElementVNode */._)("div", {
                  class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 col-7 hover-text-secondary overflow-hidden", {
                    [`font-${font?.replaceAll?.(' ', '_')}`]: `${font.family}`
                  }]),
                  style: {
                    "text-overflow": "ellipsis"
                  }
                }, (0,vue_esm_bundler/* toDisplayString */.zw)(font), 3), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_56, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_57, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                  flat: "",
                  dense: "",
                  round: "",
                  size: "sm",
                  icon: "icon-trash-01",
                  class: "hover-text-negative text-primary-500 bg-translucent-light",
                  onClick: (0,vue_esm_bundler/* withModifiers */.iM)($event => _ctx.removeGoogleFont(font), ["prevent"])
                }, null, 8, ["onClick"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, null, {
                  default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Delete")]),
                  _: 1
                })])])], 8, _hoisted_54)])]);
              }), 128))])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: "brand_icon",
              title: "Brand Icon",
              class: "flex flex-center full-width q-px-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_58, [_hoisted_59, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_60, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                withItems: "",
                miniItems: "",
                ref: "brand_icon",
                "max-file-size": "5000000",
                factory: files => _ctx.factoryFn(files, 'brand_icon'),
                note: "SVG, PNG, ICO or JPG (max. 5MB)",
                accept: ".svg, .png, .ico, .jpeg, .jpg",
                removedFile: _ctx.brand['brand_icon']?.removedFile,
                onAdded: _cache[17] || (_cache[17] = files => _ctx.addUploadToModel('brand', 'brand_icon', files, 'brand_icon')),
                initSlots: _ctx.brand['brand_icon'],
                thumbnail: "icon-image-03"
              }, null, 8, ["factory", "removedFile", "initSlots"])])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: "brand_images",
              title: "Brand Images",
              class: "flex flex-center full-width q-px-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_61, [_hoisted_62, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_63, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                withItems: "",
                miniItems: "",
                ref: "brand_images",
                "max-file-size": "10000000",
                factory: files => _ctx.factoryFn(files, 'brand_images'),
                note: "SVG, PNG, JPEG, ICO or GIF (max. 10MB)",
                accept: ".svg, .png, .jpeg, .jpg, .ico, .gif",
                removedFile: _ctx.brand['brand_images']?.removedFile,
                onAdded: _cache[18] || (_cache[18] = files => _ctx.addUploadToModel('brand', 'brand_images', files, 'brand_images')),
                initSlots: _ctx.brand['brand_images'],
                thumbnail: "icon-image-03"
              }, null, 8, ["factory", "removedFile", "initSlots"])])])]),
              _: 1
            }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
              name: "graphic_elements",
              title: "Graphic Elements",
              class: "flex flex-center full-width q-px-lg"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_64, [_hoisted_65, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_66, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_FileUploader, {
                withItems: "",
                miniItems: "",
                ref: "graphic_elements",
                "max-file-size": "10000000",
                factory: files => _ctx.factoryFn(files, 'graphic_elements'),
                note: "AI, EPS, PSD, SVG, PNG, GIF or JPEG, FIG, XD (max. 10MB)",
                accept: ".png, .ico, .jpg, .jpeg, .svg, .ai, .psd, .eps, .fig, .xd",
                removedFile: _ctx.brand['graphic_elements']?.removedFile,
                onAdded: _cache[19] || (_cache[19] = files => _ctx.addUploadToModel('brand', 'graphic_elements', files, 'graphic_elements')),
                initSlots: _ctx.brand['graphic_elements'],
                thumbnail: "icon-image-03"
              }, null, 8, ["factory", "removedFile", "initSlots"])])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }, 8, ["done"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_step, {
          name: 3,
          title: "Social Media Links",
          class: "flex flex-center full-width",
          done: _ctx.formStep > 3
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_67, [_hoisted_68, (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_69, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_70, [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(_ctx.socialMedia, opt => {
            return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
              key: opt.platform,
              class: "col-12"
            }, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_71, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_72, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.capitalize(opt.platform)), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_73, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputWebsite, {
              rule: undefined,
              modelValue: _ctx.brand.social_accounts[opt.platform],
              "onUpdate:modelValue": $event => _ctx.brand.social_accounts[opt.platform] = $event,
              placeholder: "username",
              prepend: `${(_ctx.getSocialInfo(opt.platform)?.base_url || '').replace('http://', '').replace('https://', '').replace('www.', '')}${!opt.platform.endsWith('/') ? '/' : ''}`,
              class: "full-width"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "prepend"])])])]);
          }), 128))])])])]),
          _: 1
        }, 8, ["done"])]),
        _: 1
      }, 8, ["modelValue", "contracted"])]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-px-lg q-pb-md q-pt-lg"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_74, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_75, [_ctx.formStep > 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_76, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        outline: "",
        unelevated: "",
        color: "primary",
        class: "rounded full-width button-lg",
        onClick: _cache[22] || (_cache[22] = $event => _ctx.formStep !== 2 || _ctx.formStepBrandInfo === 'brand_logo' ? _ctx.prevButtonClicked() : _ctx.brandsPrevButtonClicked())
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_77]),
        _: 1
      })])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_78, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "rounded full-width button-lg",
        onClick: _ctx.buttonHandler
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_79, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.formStep < 3 ? 'Continue' : 'Save Brand'), 1)]),
        _: 1
      }, 8, ["onClick"])])])])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Brands/CreateNewBrand.vue?vue&type=template&id=e5448d78

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Helpers/SelectBrandType.vue + 4 modules
var SelectBrandType = __webpack_require__(9438);
// EXTERNAL MODULE: ./src/components/Helpers/InputWebsite.vue + 4 modules
var InputWebsite = __webpack_require__(97696);
// EXTERNAL MODULE: ./src/components/Helpers/FilesUploader.vue + 4 modules
var FilesUploader = __webpack_require__(65400);
// EXTERNAL MODULE: ./src/components/Helpers/SelectFont.vue + 4 modules
var SelectFont = __webpack_require__(32548);
// EXTERNAL MODULE: ./src/components/Helpers/ColorPickerCard.vue + 9 modules
var ColorPickerCard = __webpack_require__(46520);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(16122);
// EXTERNAL MODULE: ./src/components/Helpers/TextArea1.vue + 4 modules
var TextArea1 = __webpack_require__(44799);
// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(93458);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__(75103);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__(30321);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/fn.store.js
var fn_store = __webpack_require__(85487);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Brands/CreateNewBrand.vue?vue&type=script&lang=js
















/* harmony default export */ const CreateNewBrandvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'CreateNewBrand',
  mixins: [
  // Uploader functions
  mixins/* FileUploader_Mixin */.GU],
  components: {
    SelectBrandType: SelectBrandType/* default */.Z,
    InputWebsite: InputWebsite["default"],
    FileUploader: FilesUploader["default"],
    CardIconBox: CardIconBox["default"],
    ColorPickerCard: ColorPickerCard/* default */.Z,
    SelectFont: SelectFont/* default */.Z,
    TextArea1: TextArea1["default"]
  },
  emits: ['added', 'updated', 'error', 'close', 'finished'],
  props: {
    noclose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newBrandID: null,
      formStep: 1,
      formStepBrandInfo: 'brand_logo',
      stepperHeaderElements: null,
      brand: (0,vue_esm_bundler/* ref */.iH)({
        brand_colors: {},
        customColors: [],
        social_accounts: {},
        googlefonts: []
      }),
      brandColors: {
        primary: {},
        secondary: {},
        accent: {},
        text: {}
      },
      colorPalette: undefined,
      brandColorSrc: '',
      brandColorSrcBlob: '',
      brandColorSrcFile: null,
      brandColorSrcDelete: null,
      validImageForColorPalette: false,
      capitalize: format["default"].capitalize
    };
  },
  watch: {
    formStep: {
      async handler(val) {
        if (val > 1) this.rightDrawer = false;else this.rightDrawer = true;
      }
    },
    brandColorSrc: {
      async handler(val) {
        if (!val) {
          this.validImageForColorPalette = false;
        }
      }
    },
    brandColorSrcBlob: {
      async handler(val) {
        if (val) {
          let encodedImage = await (0,functions.getImageStringFromURL)(val, false);
          if (encodedImage) {
            this.brandColorSrc = encodedImage;
            this.validImageForColorPalette = true;
            setTimeout(this.getColorPalette, 500);
          } else {
            this.brand.brand_colors = {};
            this.validImageForColorPalette = false;
          }
        } else {
          this.brand.brand_colors = {};
          this.validImageForColorPalette = false;
        }
      }
    }
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrg']),
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['socialMedia'])
  },
  mounted() {
    this.stepperHeaderElements = this.$refs?.['formStepper']?.$el?.firstChild?.childNodes;
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(user/* default */.Z, ['createBrand', 'updateBrand', 'updateBrandFiles', 'updateBrandColors', 'updateBrandSocial', 'updateBrandGoogleFonts']),
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getSocialInfo']),
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
        this.brand.brand_colors = {};
        if (sourceImage) {
          let colorPalettes = imageColorThief.getPalette(sourceImage, 100);
          if (!colorPalettes) return;
          this.colorPalette = colorPalettes.map(e => `rgb(${e.join(',')})`);
          colors["default"].textToRgb(`rgb(${colorPalettes[3].join(',')})`);
          // Set Brand Colors
          let color_p = colorPalettes?.[0];
          this.brand.brand_colors.Primary = colors["default"].rgbToHex({
            r: color_p[0],
            g: color_p[1],
            b: color_p[2]
          }) || '#000000';
          let color_s = colorPalettes?.[1];
          this.brand.brand_colors.Secondary = colors["default"].rgbToHex({
            r: color_s[0],
            g: color_s[1],
            b: color_s[2]
          }) || '#000000';
          let color_a = colorPalettes?.[2];
          this.brand.brand_colors.Accent = colors["default"].rgbToHex({
            r: color_a[0],
            g: color_a[1],
            b: color_a[2]
          }) || '#000000';
          let color_t = colorPalettes?.[3];
          this.brand.brand_colors.Text = colors["default"].rgbToHex({
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
    addedImgColorSource(files) {
      files.forEach((file, i) => {
        if (i === files.length - 1) {
          this.$q.notify({
            spinner: true,
            message: `Getting colors from ${file.name}.`,
            timeout: 500
          });
          this.brandColorSrcBlob = file?.__img?.src;
          this.brandColorSrcFile = file;
        }
      });
    },
    removeGoogleFont(font) {
      if (!font || !this.brand.googlefonts) return;
      const fontIndex = this.brand.googlefonts.findIndex(e => e === font);
      if (fontIndex > -1) {
        this.brand.googlefonts.splice(fontIndex, 1);
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: `Font has been removed "${font}"`
        });
      }
    },
    prevButtonClicked() {
      this.$refs?.['formStepper']?.previous?.();
    },
    brandsPrevButtonClicked() {
      this.$refs?.['brandInformationStepper']?.previous?.();
    },
    async nextButtonClicked() {
      const _ = this.brand;
      let response;
      if (this.formStep === 1) {
        const payload = {
          brand_name: _.brand_name,
          brand_type: _.brand_type,
          tagline: _.tagline,
          description: _.description,
          target_audience: _.target_audience,
          competitors: _.competitors,
          value_proposition: _.value_proposition,
          social_accounts: {}
        };
        if (_.website) payload.website = _.website;
        if (this.newBrandID) {
          response = await this.updateBrand(payload, this.newBrandID);
          this.$emit('updated', this.newBrandID);
        } else {
          response = await this.createBrand(payload);
          if (response?.success) {
            this.newBrandID = response?.data?.id;
            this.$q.notify({
              icon: 'icon-check-circle-broken',
              message: 'Brand has been successfully created.'
            });
            this.$emit('added', this.newBrandID);
          }
        }
      } else if (this.formStep === 2) {
        response = {
          success: true
        };
      } else if (this.formStep === 3) {
        const social_accounts = {};
        for (const s of Object.keys(_.social_accounts)) {
          if (_.social_accounts[s]) social_accounts[s] = _.social_accounts[s];
        }
        response = await this.updateBrandSocial({
          social_accounts
        }, this.newBrandID);
        if (response?.success) {
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: 'Brand has been successfully saved.'
          });
          this.$emit('finished', this.newBrandID);
          this.$emit('close');
        }
      }
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response?.success) {
        if (message) {
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: message
          });
        }
        return this.$refs?.['formStepper']?.next?.();
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Error while processing your request'
        });
        if (this.formStep === 3) {
          this.$emit('error');
        }
        return;
      }
    },
    async nextStepBrandInfo() {
      const _ = this.brand;
      let response;
      if (this.formStepBrandInfo === 'brand_colors') {
        const allColors = {};
        for (const c of Object.keys(_.brand_colors)) {
          if (!_.brand_colors[c]) continue;
          allColors[c] = _.brand_colors[c];
        }
        for (const c of _.customColors.sort((a, b) => a.label?.toLowerCase() > b.label?.toLowerCase() ? 1 : a.label?.toLowerCase() < b.label?.toLowerCase() ? -1 : 0)) {
          if (!c.label || !c.color) continue;
          allColors[c.label] = c.color;
        }
        if (Object.keys(allColors).length) {
          response = await this.updateBrandColors({
            brand_colors: allColors
          }, this.newBrandID);
        } else {
          response = {
            success: false,
            canSkip: true,
            message: 'Brand colors unset.'
          };
        }
      } else {
        // Check files if no uploading
        for (const file of _?.[this.formStepBrandInfo]?.files || []) {
          if (file.__status === 'uploading') {
            response = {
              success: false,
              message: 'Upload is still in progress.'
            };
            break;
          } else {
            response = {
              success: true
            };
          }
        }
        if (this.formStepBrandInfo === 'brand_fonts') {
          const payload = {
            googlefonts: _.googlefonts
          };
          response = await this.updateBrandGoogleFonts(payload, this.newBrandID);
          if (!_.googlefonts?.length) {
            response = {
              success: false,
              canSkip: true,
              message: 'No font was added.'
            };
          }
        }
        if (!response) {
          response = {
            success: false,
            canSkip: true,
            message: 'No file was added.'
          };
        }
      }
      const message = (0,functions.extractErrorMessageString)(response?.message);
      if (response?.success) {
        if (message) {
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: message
          });
        }
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: message || 'Error while processing your request'
        });
      }
      if (response?.success || response?.canSkip) {
        if (this.formStepBrandInfo === 'graphic_elements') {
          // Last Step of Brand Info
          this.nextButtonClicked();
        } else {
          this.$refs?.['brandInformationStepper']?.next?.();
        }
      }
    },
    factoryFn(files, target_path) {
      return new Promise((resolve, reject) => {
        const token = fn_store/* default.getAuth */.Z.getAuth();
        resolve({
          method: 'POST',
          fieldName: 'uploads[0]',
          url: `${this.$config?.api?.baseURL}/organization/${this.selectedOrg?.id}/brands/${this.newBrandID}/upload`,
          formFields: [{
            name: 'target_path',
            value: target_path
          }],
          headers: [{
            name: 'Authorization',
            value: `Bearer ${token}`
          }],
          withCredentials: false
        });
      });
    },
    buttonHandler() {
      return this.formStep === 2 ? this.nextStepBrandInfo() : this.nextButtonClicked();
    },
    customColorsSlide(customColorIndex, slideOpt) {
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-item/QSlideItem.js
var QSlideItem = __webpack_require__(78713);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Brands/CreateNewBrand.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CreateNewBrandvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const CreateNewBrand = (__exports__);
;








runtime_auto_import_default()(CreateNewBrandvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QInput: QInput/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QSlideItem: QSlideItem/* default */.Z});


/***/ }),

/***/ 38376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RenameFile)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/RenameFile.vue?vue&type=template&id=250fbc78

const _hoisted_1 = {
  key: 0,
  class: "absolute-top-right"
};
const _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 font-demi-bold letter-space-normal q-pb-sm"
}, " Rename File ", -1);
const _hoisted_3 = {
  key: 0,
  class: "text-body2 q-py-md"
};
const _hoisted_4 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-secondary"
}, "/", -1);
const _hoisted_5 = {
  key: 0,
  class: "text-secondary"
};
const _hoisted_6 = {
  class: "q-py-sm"
};
const _hoisted_7 = {
  class: "text-body2"
};
const _hoisted_8 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "Cancel", -1);
const _hoisted_9 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "Rename", -1);
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
          icon: "icon-file-check-03"
        }), !_ctx.noclose ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_close_button)])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      })]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "q-py-none"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_2,  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_InputTextField, {
        modelValue: _ctx.newFileName,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.newFileName = $event),
        placeholder: _ctx.fileName,
        class: "q-pb-none",
        rules: [val => _ctx.filename_pattern.test(val) || ''],
        onKeyup: [(0,vue_esm_bundler/* withKeys */.D2)(_ctx.submitChanges, ["enter"]), (0,vue_esm_bundler/* withKeys */.D2)(_ctx.onDelete, ["delete"])]
      }, {
        append: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_7, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.fileExt), 1)]),
        _: 1
      }, 8, ["modelValue", "placeholder", "rules", "onKeyup"])])]),
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
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_8]),
        _: 1
      }, 8, ["disable"])), [[_directive_close_popup]]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        color: "primary",
        class: "col rounded",
        disable: _ctx.submitting || !_ctx.renameReady,
        onClick: _ctx.submitChanges
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_9]),
        _: 1
      }, 8, ["disable", "onClick"])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Dialogs/RenameFile.vue?vue&type=template&id=250fbc78

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
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
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Dialogs/RenameFile.vue?vue&type=script&lang=js







/* harmony default export */ const RenameFilevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'RenameFile',
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
    file: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newFileName: '',
      submitting: false,
      submitted: false,
      filename_pattern: /^([a-zA-Z0-9 \._-]+){1}$/,
      file_path: []
    };
  },
  computed: {
    fileName() {
      return this.file?.file?.split?.(this.fileExt)?.[0] || '';
    },
    fileExt() {
      const fileExtra = this.file?.file?.split?.('.');
      return fileExtra ? `.${fileExtra[fileExtra.length - 1]}` : '';
    },
    renameReady() {
      return this.newFileName ? this.filename_pattern.test(this.newFileName) : false;
    }
  },
  watch: {
    newFileName: {
      async handler(val) {
        if (false) {}
      }
    }
  },
  mounted() {
    if (this.fileName) this.newFileName = this.fileName;
    if (!this.file?.id) this.$emit('close');
    const split_path = this.file.path.split('/');
    this.file_path = split_path.slice(3, split_path.length - 1);
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['renameFile']),
    onDelete() {
      if (!this.newFileName) {
        this.newFileName = this.file_path.pop();
      }
    },
    async submitChanges() {
      if (!this.filename_pattern.test(this.newFileName)) return;
      this.submitting = true;
      if (!this.newFileName) return;
      if (this.fileName === this.newFileName) {
        this.$q.notify({
          icon: 'icon-check-circle-broken',
          message: 'No changes has been made'
        });
        this.$emit('close');
      } else {
        const response = await this.renameFile(this.file?.id, this.newFileName);
        const message = (0,functions.extractErrorMessageString)(response?.message);
        if (response.success) {
          this.$q.notify({
            icon: 'icon-check-circle-broken',
            message: message || 'File has been renamed'
          });
          this.submitted = true;
          this.$emit('success', response.data);
          this.$emit('close');
        } else {
          this.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: message || 'Failed to rename file'
          });
          this.$emit('failed', message);
        }
      }
      this.submitting = false;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Dialogs/RenameFile.vue?vue&type=script&lang=js
 
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
;// CONCATENATED MODULE: ./src/components/Dialogs/RenameFile.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RenameFilevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const RenameFile = (__exports__);
;





runtime_auto_import_default()(RenameFilevue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QToolbar: QToolbar/* default */.Z,QCardActions: QCardActions/* default */.Z,QBtn: QBtn/* default */.Z});runtime_auto_import_default()(RenameFilevue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ }),

/***/ 2788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GrowmodoTextIcon)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/GrowmodoTextIcon.vue?vue&type=template&id=2c474321

const _hoisted_1 = {
  class: "row inline items-center hover-visibility",
  style: {
    "text-overflow": "ellipsis",
    "overflow": "hidden"
  }
};
const _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("div", {
  inline: "",
  "items-center": ""
}, null, -1);
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_1, [_hoisted_2, _ctx.icon ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
    key: 0
  }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
    name: "icon-growmodo",
    size: _ctx.size,
    color: _ctx.dark ? 'white' : 'black',
    class: "absolute-left-center hover-visibility-hide",
    style: (0,vue_esm_bundler/* normalizeStyle */.j5)(_ctx.forceColored ? 'opacity: 0;' : '')
  }, null, 8, ["size", "color", "style"]), (0,vue_esm_bundler/* createElementVNode */._)("img", {
    src: `${_ctx.$config.icons?.growmodo['logo:icon-colored-' + (_ctx.dark ? 'dark' : 'light')]}`,
    style: (0,vue_esm_bundler/* normalizeStyle */.j5)({
      ['width']: _ctx.size
    }),
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["col absolute", {
      ['hover-visibility-show']: !_ctx.forceColored
    }])
  }, null, 14, _hoisted_3)], 64)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.text ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("img", {
    key: 1,
    src: _ctx.$config?.icons?.growmodo?.[`logo:text-${_ctx.dark ? 'white' : 'black'}`],
    style: (0,vue_esm_bundler/* normalizeStyle */.j5)({
      width: _ctx.textWidth
    }),
    class: "col q-pl-sm no-pointer-events"
  }, null, 12, _hoisted_4)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]);
}
;// CONCATENATED MODULE: ./src/components/GrowmodoTextIcon.vue?vue&type=template&id=2c474321

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
      default: '140px'
    },
    forceColored: {
      type: Boolean,
      default: false
    },
    noTextHover: {
      type: Boolean,
      default: false
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

/***/ 46520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ColorPickerCard)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPickerCard.vue?vue&type=template&id=7c9c52fa

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
    onDblclick: _cache[5] || (_cache[5] = $event => _ctx.editableLabel ? _ctx.editingLabel = !_ctx.editingLabel : _ctx.colorModel ? _ctx.copyToClipboard(_ctx.colorModel, 'Color copied to clipboard.') : _ctx.openColorPopup())
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
      mask: "NNNNNNNNNNNNNNN",
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
    }, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.newLabel) + " " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.colorModel), 1)], 64))], 2), _ctx.allowDelete || _ctx.colorPicker ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
      key: 0,
      class: (0,vue_esm_bundler/* normalizeClass */.C_)([{
        ['absolute-top-right q-pa-sm q-ma-sm']: !_ctx.small
      }, "q-gutter-x-sm"])
    }, [_ctx.allowDelete ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
      key: 0,
      flat: "",
      size: "sm",
      color: "primary",
      icon: "icon-trash-01",
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded ratio-1 q-pa-sm", `${_ctx.colorModel ? _ctx.isColorDark(_ctx.colorModel) ? 'bg-translucent-light text-white' : 'bg-translucent-dark text-primary' : 'bg-primary-200'}`]),
      onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('delete'))
    }, null, 8, ["class"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.colorPicker ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
      key: 1,
      flat: "",
      size: "sm",
      color: "primary",
      icon: "icon-dropper",
      class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded ratio-1 q-pa-sm", `${_ctx.colorModel ? _ctx.isColorDark(_ctx.colorModel) ? 'bg-translucent-light text-white' : 'bg-translucent-dark text-primary' : 'bg-primary-200'}`]),
      onClick: _ctx.openColorPopup
    }, null, 8, ["class", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 2)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default"), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      persistent: "",
      modelValue: _ctx.colorPopup,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.colorPopup = $event),
      "transition-show": "scale",
      "transition-hide": "scale"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_ColorPicker, {
        style: {
          "max-width": "300px"
        },
        initColor: _ctx.colorModel,
        colorPalette: _ctx.colorPaletteSrc,
        onSaved: _cache[2] || (_cache[2] = val => _ctx.colorModel = val?.color),
        onClosed: _cache[3] || (_cache[3] = $event => _ctx.colorPopup = false)
      }, null, 8, ["initColor", "colorPalette"])]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 3
  }, 8, ["class", "style", "onContextmenu"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPickerCard.vue?vue&type=template&id=7c9c52fa

// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(93458);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPicker.vue?vue&type=template&id=c2788374

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
function ColorPickervue_type_template_id_c2788374_render(_ctx, _cache, $props, $setup, $data, $options) {
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
      "popup-content-class": "bg-white rounded-bottom",
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
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPicker.vue?vue&type=template&id=c2788374

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/colors.js
var colors = __webpack_require__(75103);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/copy-to-clipboard.js
var copy_to_clipboard = __webpack_require__(65054);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPicker.vue?vue&type=script&lang=js


const {
  rgbToHex,
  textToRgb
} = colors["default"];
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js + 1 modules
var QSlider = __webpack_require__(28423);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/ColorPicker.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ColorPickervue_type_script_lang_js, [['render',ColorPickervue_type_template_id_c2788374_render]])

/* harmony default export */ const ColorPicker = (__exports__);
;







runtime_auto_import_default()(ColorPickervue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QColor: QColor/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QSelect: QSelect/* default */.Z,QBtn: QBtn/* default */.Z,QSlider: QSlider/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/ColorPickerCard.vue?vue&type=script&lang=js



/* harmony default export */ const ColorPickerCardvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'ColorPickerCard',
  emits: ['update', 'updateLabel', 'delete'],
  mixins: [mixins/* Helpers_Mixin */.h2],
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
    },
    allowDelete: {
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
        this.newLabel = this.newLabel.replaceAll(' ', '_');
        const allowed = /[a-zA-Z0-9_]/;
        let formatedLabel = '';
        for (const l of this.newLabel) {
          formatedLabel += allowed.test(l) ? l : '';
        }
        if (formatedLabel) {
          this.newLabel = formatedLabel;
          this.$emit('updateLabel', this.newLabel);
          this.editingLabel = false;
        }
      }
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

/***/ 65400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FilesUploader)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/FilesUploader.vue?vue&type=template&id=d08844dc

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
  class: "full-width font-medium"
};
const _hoisted_5 = {
  key: 0,
  class: "bg-white sticky absolute-top",
  style: {
    "height": "25px",
    "z-index": "999"
  }
};
const _hoisted_6 = {
  class: "overflow-hidden flex flex-center round bg-accent",
  style: {
    "width": "30px",
    "height": "30px"
  }
};
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  class: "text-body2"
};
const _hoisted_9 = {
  class: "text-primary-400 text-body2"
};
const _hoisted_10 = {
  class: "row items-center q-col-gutter-sm"
};
const _hoisted_11 = {
  class: "col-10"
};
const _hoisted_12 = {
  class: "col-2 text-right"
};
const _hoisted_13 = {
  key: 2,
  class: "absolute-bottom bg-gradient no-pointer-events sticky",
  style: {
    "height": "25px"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_uploader_add_trigger = (0,vue_esm_bundler/* resolveComponent */.up)("q-uploader-add-trigger");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_linear_progress = (0,vue_esm_bundler/* resolveComponent */.up)("q-linear-progress");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_list = (0,vue_esm_bundler/* resolveComponent */.up)("q-list");
  const _component_q_uploader = (0,vue_esm_bundler/* resolveComponent */.up)("q-uploader");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_uploader, {
    flat: "",
    multiple: _ctx.multiple,
    "auto-upload": "",
    ref: "modelRef",
    "max-file-size": "5000000",
    class: (0,vue_esm_bundler/* normalizeClass */.C_)(["full-width files-uploader rounded full-height text-primary", {
      ['with-items']: _ctx.withItems
    }]),
    onStart: _ctx.startEvent,
    onFinish: _ctx.finishEvent,
    onAdded: _ctx.addedEvent,
    onRemoved: _ctx.removedEvent,
    onUploaded: _ctx.uploadedEvent,
    onRejected: _ctx.onRejected,
    onFactoryFailed: _ctx.factoryFailedEvent,
    onFailed: _ctx.failedEvent
  }, {
    header: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createElementVNode */._)("div", {
      class: "q-py-lg q-px-md text-body1 text-primary-600 text-center rounded cursor-pointer full-height flex items-center rounded border-add border-dashed hover-border-secondary",
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
    list: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(_ctx.initSlots || scope)?.files?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_5)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (_ctx.initSlots || scope)?.files?.length ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_list, {
      key: 1,
      class: "row q-col-gutter-md"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)((_ctx.initSlots || scope).files, (file, i) => {
        return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", {
          key: file.__key,
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(`${_ctx.$q.screen.sm || _ctx.$q.screen.lt.sm || _ctx.miniItems || (_ctx.initSlots || scope).files?.length === 1 ? 'col-12' : 'col-12 col-sm-6'}`)
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          dense: "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["border-add rounded q-py-sm hover-up-1", {
            ['border-secondary']: file.success === true,
            ['border-negative']: file.success === false,
            ['hover-border-secondary']: typeof file.success !== 'boolean'
          }])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.thumbnail && file.__img || typeof _ctx.thumbnail === 'string' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
            key: 0,
            thumbnail: "",
            class: "q-pl-md self-start"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [typeof _ctx.thumbnail === 'boolean' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("img", {
              key: 0,
              ratio: 1,
              src: file.path && !_ctx.temporary ? `${_ctx.$cdn_host}/${file.path}` : file.__img.src,
              style: {
                "width": "30px",
                "height": "unset"
              }
            }, null, 8, _hoisted_7)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
              key: 1,
              name: _ctx.thumbnail === 'auto' ? _ctx.getFileTypeIcon(file.file || file.name) : _ctx.thumbnail,
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
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_8, (0,vue_esm_bundler/* toDisplayString */.zw)(file.name), 1), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_9, (0,vue_esm_bundler/* toDisplayString */.zw)(file.__sizeLabel), 1)]),
              _: 2
            }, 1024), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
              size: "sm",
              value: file.__progress,
              color: file.success === false || file.__status === 'failed' ? 'negative' : file.__progress === 1 ? file.__status === 'uploaded' ? 'secondary' : 'negative' : 'secondary'
            }, null, 8, ["value", "color"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_12, (0,vue_esm_bundler/* toDisplayString */.zw)(file.success === false || file.__status === 'failed' ? 'Failed' : file.__progressLabel), 1)])]),
            _: 2
          }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
            class: "absolute-top-right q-ma-sm"
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              flat: "",
              dense: "",
              round: "",
              size: "sm",
              icon: "icon-trash-01",
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-primary-500", {
                ['hover-text-negative']: !(_ctx.toDelete !== null || scope.isUploading || scope.isBusy)
              }]),
              disable: _ctx.toDelete !== null || scope.isUploading || scope.isBusy,
              onClick: $event => _ctx.deleteAction(_ctx.initSlots || scope, _ctx.initSlots ? i : file)
            }, null, 8, ["class", "disable", "onClick"])]),
            _: 2
          }, 1024)]),
          _: 2
        }, 1032, ["class"])], 2);
      }), 128))]),
      _: 2
    }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), scope?.files?.length > 4 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_13)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["multiple", "onStart", "onFinish", "onAdded", "onRemoved", "onUploaded", "onRejected", "onFactoryFailed", "onFailed", "class"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/FilesUploader.vue?vue&type=template&id=d08844dc

// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(16122);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(93458);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/FilesUploader.vue?vue&type=script&lang=js






/* harmony default export */ const FilesUploadervue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'FileUploader',
  mixins: [
  // Uploader functions
  mixins/* FileUploader_Mixin */.GU],
  components: {
    CardIconBox: CardIconBox["default"]
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
    miniItems: {
      type: Boolean,
      default: false
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
    removedFile: {},
    initSlots: {}
  },
  data() {
    return {
      toDelete: null
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['activeOrgID'])
  },
  watch: {
    removedFile: {
      async handler(val) {
        if (val) {
          this.$refs['modelRef']?.abort?.(val);
          this.$refs['modelRef']?.removeFile?.(val);
        }
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['deleteFile']),
    startEvent() {
      if (true) console.log('Upload startEvent');
    },
    finishEvent() {
      if (true) console.log('Upload finishEvent');
    },
    addedEvent(files) {
      if (true) console.log('Upload addedEvent', files);
    },
    removedEvent(files) {
      if (true) console.log('Upload removedEvent', files);
    },
    factoryFailedEvent(e) {
      if (true) console.error(e);
    },
    failedEvent({
      files,
      xhr
    }) {
      if (true) console.error(files, xhr);
      const response = JSON.parse(xhr.response);
      files.forEach(file => {
        file.success = response?.success || false;
        // Remove Failed Files
        if (this.autoRemoveFailed && files.length) this.$refs['modelRef']?.removeFile?.(file);
      });
    },
    uploadedEvent({
      files,
      xhr
    }) {
      const response = JSON.parse(xhr.response);
      if (response?.success) {
        files.forEach((file, i) => {
          file.success = response?.success || false;
          if (this.initSlots?.files) {
            const initSlotIndex = this.initSlots.files.findIndex(e => e.__key === file.__key);
            const fileInfo = response.data[i];
            const slot = this.initSlots.files[initSlotIndex];
            if (slot) {
              slot.id = fileInfo.id;
              slot.file = file.name;
              slot.src = file.__img?.src;
              slot.path = fileInfo.path;
            }
          }
        });
      }
    },
    async deleteAction(fileOptions, file_d) {
      const file = typeof file_d === 'number' ? fileOptions?.files?.[file_d] : file_d;
      let response;
      // Add to Delete File
      this.toDelete = file;
      if (!this.temporary && file?.path) response = await this.deleteFile(file.id);
      if (this.temporary || file.success === false || typeof file.success !== 'boolean' || response?.success && file.__status === 'uploaded') {
        if (fileOptions?.abort) fileOptions?.abort?.(file);
        // Remove from Source
        fileOptions?.removeFile?.(file) || fileOptions?.removeFileById?.(file_d);
      } else {
        this.$q.notify({
          icon: 'icon-alert-triangle',
          iconColor: 'negative',
          message: `Error while deleting ${file.name}.`
        });
      }
      this.toDelete = null;
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
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/FilesUploader.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(FilesUploadervue_type_script_lang_js, [['render',render]])

/* harmony default export */ const FilesUploader = (__exports__);
;









runtime_auto_import_default()(FilesUploadervue_type_script_lang_js, 'components', {QUploader: QUploader/* default */.Z,QBtn: QBtn/* default */.Z,QUploaderAddTrigger: QUploaderAddTrigger/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QLinearProgress: QLinearProgress/* default */.Z});


/***/ }),

/***/ 41620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InputPassword)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPassword.vue?vue&type=template&id=f6c6b202

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    autocomplete: "",
    "hide-bottom-space": "",
    type: _ctx.inputType,
    modelValue: _ctx.passwordModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.passwordModel = $event),
    label: _ctx.label,
    placeholder: _ctx.label ? '' : _ctx.placeholder ? _ctx.placeholder : _ctx.inputType === 'password' ? '********' : '--------'
  }, (0,vue_esm_bundler/* createSlots */.Nv)({
    append: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.passwordModel ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
      key: 0,
      flat: "",
      dense: _ctx.dense,
      round: "",
      size: "md",
      color: "primary-300",
      icon: _ctx.inputType == 'password' ? 'icon-eye' : 'icon-eye-off',
      class: "bg-none",
      ripple: false,
      onClick: _ctx.tooglePassword
    }, null, 8, ["dense", "icon", "onClick"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 2
  }, [_ctx.withicon ? {
    name: "prepend",
    fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      size: _ctx.dense ? '20px' : 'sm',
      name: "icon-lock-01",
      class: "hover-text-secondary"
    }, null, 8, ["size"])]),
    key: "0"
  } : undefined]), 1032, ["autofocus", "dense", "type", "modelValue", "label", "placeholder"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputPassword.vue?vue&type=template&id=f6c6b202

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPassword.vue?vue&type=script&lang=js

/* harmony default export */ const InputPasswordvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputPassword',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: null
    },
    withicon: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: true
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

/***/ 67488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InputPhoneNumber)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPhoneNumber.vue?vue&type=template&id=27cb3612

const _hoisted_1 = {
  class: "text-body2 q-pl-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "hide-bottom-space": "",
    mask: "(###) ### - ####",
    modelValue: _ctx.account.phone.number,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.account.phone.number = $event)
  }, {
    prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_select, {
      dense: "",
      "emit-value": "",
      borderless: "",
      "hide-bottom-space": "",
      "use-input": _ctx.allowSearch && _ctx.areaCodeSearch,
      class: "no-border no-box-shadow small-innersearch",
      modelValue: _ctx.account.phone.code,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.account.phone.code = $event),
      "display-value": `${_ctx.account.phone.code && _ctx.areaCodes?.[_ctx.account.phone.code] ? _ctx.areaCodes?.[_ctx.account.phone.code]?.label : 'Opt.'}`,
      options: _ctx.allowSearch && _ctx.areaCodeSearch ? _ctx.areaCodeOptions : _ctx.limitedAreaCodes,
      loading: _ctx.areaCodeOpt.loading,
      onFilter: _ctx.filterFn,
      onFocus: _cache[1] || (_cache[1] = $event => _ctx.areaCodeSearch = true),
      onBlur: _cache[2] || (_cache[2] = $event => _ctx.areaCodeSearch = false),
      onVirtualScroll: _ctx.scrollFn
    }, null, 8, ["use-input", "modelValue", "display-value", "options", "loading", "onFilter", "onVirtualScroll"]), (0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_1, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.account.phone.code ? '+' + _ctx.account.phone.code : ''), 1)]),
    _: 1
  }, 8, ["autofocus", "dense", "modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputPhoneNumber.vue?vue&type=template&id=27cb3612

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputPhoneNumber.vue?vue&type=script&lang=js




/* harmony default export */ const InputPhoneNumbervue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputPhoneNumber',
  emits: ['areaCodeChanged', 'numberChanged'],
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    areaCode: {
      type: [String, Number],
      default: 0
    },
    phoneNumber: {
      type: [String, Number],
      default: ''
    },
    allowSearch: {
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
  },
  data() {
    return {
      areaCodeOptions: [],
      account: {
        phone: {
          code: 0,
          number: '(555) 000 - 0001'
        }
      },
      areaCodeSearch: false,
      areaCodeOpt: {
        loading: false,
        pageSize: 50,
        nextPage: 2
      }
    };
  },
  mounted() {
    let country_calling_code = this.areaCode ? this.areaCode : (this.geolocation['country_calling_code'] || '').replace('+', '');
    this.account.phone = {
      code: country_calling_code,
      number: this.phoneNumber
    };
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['areaCodes']),
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['geolocation']),
    areaCodesArray() {
      return Object.values(this.areaCodes);
    },
    limitedAreaCodes() {
      return this.areaCodesArray.slice(0, this.areaCodeOpt?.pageSize * (this.areaCodeOpt?.nextPage - 1));
    },
    areaCodesLastPage() {
      return Math.ceil(this.areaCodesArray.length / this.areaCodeOpt?.pageSize);
    }
  },
  watch: {
    ['account.phone.code']: {
      async handler(val) {
        this.areaCodeSearch = false;
        this.$emit('areaCodeChanged', val);
      }
    },
    ['account.phone.number']: {
      async handler(val) {
        this.$emit('numberChanged', val);
      }
    }
  },
  methods: {
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.areaCodeOptions = this.areaCodesArray;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.areaCodeOptions = this.areaCodesArray.filter(v => {
          let res = v?.label?.toLowerCase().includes(needle);
          if (!res) res = v?.name?.toLowerCase().includes(needle);
          return res;
        });
      });
    },
    scrollFn({
      to,
      ref
    }) {
      const lastIndex = this.limitedAreaCodes.length - 1;
      if (this.areaCodeOpt.loading !== true && this.areaCodeOpt.nextPage < this.areaCodesLastPage && to === lastIndex) {
        this.areaCodeOpt.loading = true;
        setTimeout(() => {
          this.areaCodeOpt.nextPage++;
          (0,vue_esm_bundler/* nextTick */.Y3)(() => {
            ref.refresh();
            this.areaCodeOpt.loading = false;
          });
        }, 500);
      }
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/InputPhoneNumber.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/InputPhoneNumber.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InputPhoneNumbervue_type_script_lang_js, [['render',render]])

/* harmony default export */ const InputPhoneNumber = (__exports__);
;


runtime_auto_import_default()(InputPhoneNumbervue_type_script_lang_js, 'components', {QInput: QInput/* default */.Z,QSelect: QSelect/* default */.Z});


/***/ }),

/***/ 5403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InputTextField)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputTextField.vue?vue&type=template&id=56683a92

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    dense: _ctx.dense,
    outlined: "",
    autofocus: _ctx.autofocus,
    "hide-bottom-space": "",
    class: "full-width rounded text-body2 input-white",
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "prepend")]),
    append: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "append")]),
    _: 3
  }, 8, ["dense", "autofocus", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputTextField.vue?vue&type=template&id=56683a92

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputTextField.vue?vue&type=script&lang=js

/* harmony default export */ const InputTextFieldvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputTextField',
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
;// CONCATENATED MODULE: ./src/components/Helpers/InputTextField.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/InputTextField.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InputTextFieldvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const InputTextField = (__exports__);
;

runtime_auto_import_default()(InputTextFieldvue_type_script_lang_js, 'components', {QInput: QInput/* default */.Z});


/***/ }),

/***/ 97696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InputWebsite)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputWebsite.vue?vue&type=template&id=647fe9fa

const _hoisted_1 = {
  class: "text-body2 text-primary-500"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    autofocus: _ctx.autofocus,
    outlined: "",
    "hide-bottom-space": "",
    dense: _ctx.dense,
    modelValue: _ctx.internalModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.internalModel = $event),
    placeholder: "www.yourwebsite.com",
    rules: [val => _ctx.checker.input({
      value: val ? `https://${val}` : val,
      nomsg: true,
      type: 'url'
    }, 500, !_ctx.required)],
    class: (0,vue_esm_bundler/* normalizeClass */.C_)({
      ['input-split']: _ctx.split
    })
  }, {
    prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.prepend), 1), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
      vertical: "",
      class: "q-ml-sm"
    })]),
    _: 1
  }, 8, ["autofocus", "dense", "modelValue", "rules", "class"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/InputWebsite.vue?vue&type=template&id=647fe9fa

// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/InputWebsite.vue?vue&type=script&lang=js


/* harmony default export */ const InputWebsitevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'InputWebsite',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: true
    },
    prepend: {
      type: String,
      default: 'https://'
    },
    required: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      checker: functions.checker,
      internalModel: ''
    };
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

/***/ 9438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectBrandType)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectBrandType.vue?vue&type=template&id=d03f6098

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "emit-value": "",
    "hide-bottom-space": "",
    "option-value": "id",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.listBrandTypes,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
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
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.brandCategories[_ctx.selectModel]?.label || _ctx.placeholder), 3)]),
    _: 1
  }, 8, ["autofocus", "dense", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectBrandType.vue?vue&type=template&id=d03f6098

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectBrandType.vue?vue&type=script&lang=js



/* harmony default export */ const SelectBrandTypevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectBrandType',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select category'
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
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
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['brandCategories']),
    listBrandTypes() {
      return Object.values(this.brandCategories);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectBrandType.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
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
;// CONCATENATED MODULE: ./src/components/Helpers/SelectBrandType.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectBrandTypevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectBrandType = (__exports__);
;





runtime_auto_import_default()(SelectBrandTypevue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ }),

/***/ 70227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectCompanyType)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCompanyType.vue?vue&type=template&id=4e02fd8e

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "emit-value": "",
    "option-value": "id",
    "hide-bottom-space": "",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.listOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
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
  }, 8, ["autofocus", "dense", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCompanyType.vue?vue&type=template&id=4e02fd8e

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCompanyType.vue?vue&type=script&lang=js



/* harmony default export */ const SelectCompanyTypevue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectCompanyType',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select category'
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
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

/***/ 37056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectCountry)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCountry.vue?vue&type=template&id=76d58da3

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "use-input": "",
    "emit-value": "",
    "hide-bottom-space": "",
    "option-value": "name",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    onFilter: _ctx.filterFn,
    options: _ctx.filteredOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    onInputValue: _cache[1] || (_cache[1] = val => _ctx.inputModel = val),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
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
  }, 8, ["autofocus", "dense", "onFilter", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectCountry.vue?vue&type=template&id=76d58da3

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectCountry.vue?vue&type=script&lang=js



/* harmony default export */ const SelectCountryvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectCountry',
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select country'
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
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
    return {
      filteredOptions: (0,vue_esm_bundler/* ref */.iH)([])
    };
  },
  mounted() {
    if (this.initModel) this.selectModel = this.initModel;
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['allCountries']),
    currentCountryInfo() {
      let res = this.allCountries.filter(c => c.name === this.selectModel)[0];
      if (res) return res;
      res = this.allCountries.filter(c => c.name.startsWith(this.selectModel))[0];
      this.changeModel(res.name);
      return res || {};
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getCountryFlag']),
    changeModel(modelVal) {
      this.selectModel = modelVal;
    },
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
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

/***/ 41640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectEmployeeCount)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectEmployeeCount.vue?vue&type=template&id=07b6522c

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "emit-value": "",
    "hide-bottom-space": "",
    "option-value": "id",
    "option-label": "label",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: Object.values(_ctx.employeeCount),
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
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
    }, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.employeeCount[_ctx.selectModel]?.label || _ctx.placeholder), 3)]),
    _: 1
  }, 8, ["autofocus", "dense", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectEmployeeCount.vue?vue&type=template&id=07b6522c

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectEmployeeCount.vue?vue&type=script&lang=js



/* harmony default export */ const SelectEmployeeCountvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectEmployeeCount',
  emits: ['updated'],
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select'
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
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
    },
    selectModel: {
      async handler(val) {
        if (val !== this.initModel) this.$emit('updated', val);
      }
    }
  },
  mounted() {
    if (this.initModel) this.selectModel = this.initModel;
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(helpers/* default */.Z, ['employeeCount'])
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectEmployeeCount.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
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
;// CONCATENATED MODULE: ./src/components/Helpers/SelectEmployeeCount.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectEmployeeCountvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectEmployeeCount = (__exports__);
;





runtime_auto_import_default()(SelectEmployeeCountvue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ }),

/***/ 32548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectFont)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectFont.vue?vue&type=template&id=79891f69

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "use-input": "",
    multiple: "",
    "emit-value": "",
    "hide-bottom-space": "",
    "option-label": "family",
    "option-value": "family",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    onFilter: _ctx.filterFn,
    options: _ctx.filteredOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    ref: "selectFont",
    onInputValue: _cache[1] || (_cache[1] = val => _ctx.inputModel = val),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected && !_ctx.onlyEmitChanges || _ctx.onlyEmitChanges && _ctx.initModel.includes(scope.opt.family) ? 'text-secondary bg-accent' : 'text-primary', "hover-text-secondary hover-bg-accent"],
      onClick: scope.opt?.action
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.onlyEmitChanges && _ctx.initModel.includes(scope.opt.family) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        side: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-check",
          color: scope.selected && !_ctx.onlyEmitChanges || _ctx.onlyEmitChanges && _ctx.initModel.includes(scope.opt.family) ? 'secondary' : 'primary'
        }, null, 8, ["color"])]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)({
            [`gf-${scope.opt.family}`]: true
          })
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt?.family || scope.opt), 1)]),
          _: 2
        }, 1032, ["class"])]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1040, ["class", "onClick"])]),
    selected: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", {
      class: (0,vue_esm_bundler/* normalizeClass */.C_)([{
        'text-placeholder': !_ctx.selectModel?.family
      }, "row items-center q-gutter-x-sm"])
    }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      size: "xs",
      name: _ctx.formatPlatformIconSrc('Google Font')
    }, null, 8, ["name"]), (0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.inputModel ? '' : _ctx.onlyEmitChanges ? _ctx.initializing ? 'Loading google fonts...' : _ctx.placeholder : _ctx.selectModel.family || _ctx.placeholder), 1)], 2)]),
    _: 1
  }, 8, ["autofocus", "dense", "onFilter", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectFont.vue?vue&type=template&id=79891f69

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/helpers/index.js + 3 modules
var helpers = __webpack_require__(51976);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectFont.vue?vue&type=script&lang=js




/* harmony default export */ const SelectFontvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectFont',
  emits: ['updated'],
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select from Google Fonts'
    },
    initModel: {
      type: Object || Array,
      default: () => {}
    },
    onlyEmitChanges: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    initModel: {
      async handler(val) {
        if (val) this.selectModel = val;
        this.createStyle();
      },
      deep: true
    },
    selectModel: {
      async handler(val) {
        if (val) this.$emit('updated', val);
      }
    }
  },
  data() {
    return {
      selectModel: [],
      inputModel: '',
      initializing: true,
      fontList: []
    };
  },
  setup() {
    return {
      filteredOptions: (0,vue_esm_bundler/* ref */.iH)([])
    };
  },
  async mounted() {
    if (this.initModel) this.selectModel = this.initModel;
    const response = await this.getGoogleFonts('popularity', true);
    if (response.success) this.fontList = response.data?.items;
    this.createStyle();
    this.initializing = false;
  },
  computed: {
    allFonts() {
      return this.fontList.map(e => e.family);
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(helpers/* default */.Z, ['getGoogleFonts']),
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['formatPlatformIconSrc']),
    async createStyle() {
      const style = document.createElement('style');
      style.classList.add('GoogleFonts-Style');
      style.innerHTML = '';
      // const modelFamily = this.selectModel;
      for (const font of this.fontList) {
        // if (modelFamily.includes(font.family)) {
        style.innerHTML += `
          @font-face {
            font-family: '${font.family}';
            src: url('${font.files.regular || Object.values(font.files)[0]}');
          }
          .gf-${font.family?.replaceAll?.(' ', '_')} {
            font-family: '${font.family}'
          }`;
        // }
      }

      this.$refs['selectFont'].$el.appendChild(style);
    },
    filterFn(val, update, abort) {
      if (val === '') {
        update(() => {
          this.filteredOptions = this.fontList;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.filteredOptions = this.fontList.filter(v => JSON.stringify(v).toLowerCase().indexOf(needle) > -1);
      });
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/SelectFont.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
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
;// CONCATENATED MODULE: ./src/components/Helpers/SelectFont.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SelectFontvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SelectFont = (__exports__);
;





runtime_auto_import_default()(SelectFontvue_type_script_lang_js, 'components', {QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});


/***/ }),

/***/ 65034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SelectRoles)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectRoles.vue?vue&type=template&id=ff32152c

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_select, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    "emit-value": "",
    "hide-bottom-space": "",
    "option-value": "value",
    "option-label": "label",
    class: "rounded text-body2 input-white text-primary",
    "popup-content-class": "bg-white rounded-bottom",
    "input-class": "text-body1 letter-space-normal text-primary",
    options: _ctx.listOptions,
    modelValue: _ctx.selectModel,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectModel = $event),
    rules: [val => _ctx.required ? !!val || '' : true]
  }, {
    option: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      clickable: ""
    }, scope.itemProps, {
      class: [scope.selected ? 'bg-accent text-secondary' : 'text-primary', "hover-text-secondary hover-bg-accent"],
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
  }, 8, ["autofocus", "dense", "options", "modelValue", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/SelectRoles.vue?vue&type=template&id=ff32152c

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/SelectRoles.vue?vue&type=script&lang=js



/* harmony default export */ const SelectRolesvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SelectRoles',
  emits: ['updated'],
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select role'
    },
    initModel: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
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
    },
    selectModel: {
      async handler(val) {
        if (val !== this.initModel) this.$emit('updated', val);
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
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

/***/ 44799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TextArea1)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/TextArea1.vue?vue&type=template&id=1199861c

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_input, {
    autofocus: _ctx.autofocus,
    dense: _ctx.dense,
    outlined: "",
    rows: "15",
    type: "textarea",
    "hide-bottom-space": "",
    placeholder: _ctx.placeholder,
    class: "rounded text-body2 input-white",
    rules: [val => _ctx.required ? !!val || '' : true]
  }, null, 8, ["autofocus", "dense", "placeholder", "rules"]);
}
;// CONCATENATED MODULE: ./src/components/Helpers/TextArea1.vue?vue&type=template&id=1199861c

// EXTERNAL MODULE: ./src/mixins/index.js + 7 modules
var mixins = __webpack_require__(93458);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Helpers/TextArea1.vue?vue&type=script&lang=js


/* harmony default export */ const TextArea1vue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'TextArea1',
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
    },
    placeholder: {
      type: String,
      default: 'Write something...'
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Helpers/TextArea1.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Helpers/TextArea1.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TextArea1vue_type_script_lang_js, [['render',render]])

/* harmony default export */ const TextArea1 = (__exports__);
;

runtime_auto_import_default()(TextArea1vue_type_script_lang_js, 'components', {QInput: QInput/* default */.Z});


/***/ }),

/***/ 10450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TaskProjectList)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(69665);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Requests/TaskProjectList.vue?vue&type=template&id=4ad0af60


const _hoisted_1 = {
  class: "col-12 col-md-6"
};
const _hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "All Tasks", -1);
const _hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body1 font-medium"
}, "All Projects", -1);
const _hoisted_4 = {
  class: "col-12 col-md-6"
};
const _hoisted_5 = {
  class: "row q-col-gutter-md items-center justify-end text-right"
};
const _hoisted_6 = {
  class: "col-12 col-md-9"
};
const _hoisted_7 = {
  key: 0
};
const _hoisted_8 = {
  class: "bg-color absolute-top table-loader",
  style: {
    "top": "43px"
  }
};
const _hoisted_9 = {
  class: "text-body2 font-medium text-primary-500"
};
const _hoisted_10 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */._)("span", {
  class: "text-body2 font-medium text-transparent"
}, "Options", -1);
const _hoisted_11 = {
  class: "row justify-center items-center text-center"
};
const _hoisted_12 = {
  class: "text-right"
};
const _hoisted_13 = ["onClick"];
const _hoisted_14 = {
  class: "q-gutter-sm text-right"
};
const _hoisted_15 = {
  key: 0,
  class: "q-py-md row full-width items-center justify-center q-col-gutter-sm q-virtual-scroll--skip"
};
const _hoisted_16 = {
  class: "q-py-md row full-width items-center justify-between q-col-gutter-sm q-virtual-scroll--skip"
};
const _hoisted_17 = {
  class: "full-width text-center"
};
const _hoisted_18 = {
  class: "full-width row flex-center text-primary-500"
};
const _hoisted_19 = {
  key: 1,
  class: "text-body2 text-primary-500 font-medium"
};
const _hoisted_20 = {
  key: 2,
  class: "text-body2 text-primary-500 font-medium"
};
const _hoisted_21 = {
  key: 0,
  class: "full-width row flex-center text-primary-500 q-pt-sm"
};
const _hoisted_22 = {
  class: "q-pl-xs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn");
  const _component_q_separator = (0,vue_esm_bundler/* resolveComponent */.up)("q-separator");
  const _component_q_btn_group = (0,vue_esm_bundler/* resolveComponent */.up)("q-btn-group");
  const _component_q_icon = (0,vue_esm_bundler/* resolveComponent */.up)("q-icon");
  const _component_q_input = (0,vue_esm_bundler/* resolveComponent */.up)("q-input");
  const _component_q_item_label = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-label");
  const _component_q_item_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-item-section");
  const _component_q_item = (0,vue_esm_bundler/* resolveComponent */.up)("q-item");
  const _component_q_select = (0,vue_esm_bundler/* resolveComponent */.up)("q-select");
  const _component_q_card_section = (0,vue_esm_bundler/* resolveComponent */.up)("q-card-section");
  const _component_q_linear_progress = (0,vue_esm_bundler/* resolveComponent */.up)("q-linear-progress");
  const _component_q_th = (0,vue_esm_bundler/* resolveComponent */.up)("q-th");
  const _component_tooltip_pro = (0,vue_esm_bundler/* resolveComponent */.up)("tooltip-pro");
  const _component_q_tr = (0,vue_esm_bundler/* resolveComponent */.up)("q-tr");
  const _component_q_skeleton = (0,vue_esm_bundler/* resolveComponent */.up)("q-skeleton");
  const _component_q_td = (0,vue_esm_bundler/* resolveComponent */.up)("q-td");
  const _component_CardIconBox = (0,vue_esm_bundler/* resolveComponent */.up)("CardIconBox");
  const _component_q_badge = (0,vue_esm_bundler/* resolveComponent */.up)("q-badge");
  const _component_q_pagination = (0,vue_esm_bundler/* resolveComponent */.up)("q-pagination");
  const _component_q_table = (0,vue_esm_bundler/* resolveComponent */.up)("q-table");
  const _component_q_card = (0,vue_esm_bundler/* resolveComponent */.up)("q-card");
  return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    bordered: ""
  }, {
    default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "row q-col-gutter-md items-center justify-between card-padding-title"
    }, {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn_group, {
        spread: _ctx.$q.screen.sm || _ctx.$q.screen.lt.md,
        class: "rounded no-shadow border-add"
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          "no-caps": "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["hover-text-secondary", {
            'bg-accent': _ctx.tableTab === 'tasks'
          }]),
          color: _ctx.tableTab === 'tasks' ? 'secondary' : 'primary-600',
          onClick: _cache[0] || (_cache[0] = $event => _ctx.tableTab = 'tasks')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_2]),
          _: 1
        }, 8, ["color", "class"]), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
          vertical: ""
        }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          "no-caps": "",
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["hover-text-secondary", {
            'bg-accent': _ctx.tableTab === 'projects'
          }]),
          color: _ctx.tableTab === 'projects' ? 'secondary' : 'primary-600',
          onClick: _cache[1] || (_cache[1] = $event => _ctx.tableTab = 'projects')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
          _: 1
        }, 8, ["color", "class"])]),
        _: 1
      }, 8, ["spread"])]), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        modelValue: _ctx.searchQuery,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.searchQuery = $event),
        dense: "",
        outlined: "",
        clearable: "",
        debounce: "500",
        "input-class": "text-body1 font-medium text-primary",
        placeholder: "Search...",
        "clear-icon": "icon-x-close"
      }, {
        prepend: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "icon-search-lg",
          class: "hover-text-secondary"
        })]),
        _: 1
      }, 8, ["modelValue"])]),  false ? (0) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
      _: 1
    }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_table, {
      flat: "",
      bordered: "",
      "row-key": "id",
      filteredSortedRows: "",
      "binary-state-sort": "",
      rows: _ctx.orgTmpItems,
      columns: _ctx.columns,
      color: "primary",
      loading: _ctx.tableLoading,
      dense: _ctx.listTableDense,
      "rows-per-page-label": "Users per page",
      "no-results-label": "The filter didn't uncover any results.",
      "loading-label": "Getting data from the server.",
      "rows-per-page-options": [10, 20, 30, 50, 50, 0],
      style: {
        "max-height": "950px"
      },
      selection: "multiple",
      pagination: _ctx.pagination,
      "onUpdate:pagination": _cache[9] || (_cache[9] = $event => _ctx.pagination = $event),
      selected: _ctx.selectedFiles,
      "onUpdate:selected": _cache[10] || (_cache[10] = $event => _ctx.selectedFiles = $event),
      "visible-columns": _ctx.visibleColumns,
      onRequest: _ctx.onRequest
    }, {
      loading: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
        size: "2px",
        indeterminate: "",
        color: "secondary"
      })])]),
      header: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tr, {
        class: "bg-color",
        style: {
          "position": "sticky",
          "top": "0",
          "z-index": "2"
        }
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_th, {
          "auto-width": "",
          class: "cursor-pointer hover-text-secondary text-left",
          onClick: (0,vue_esm_bundler/* withModifiers */.iM)($event => scope.selected = !scope.selected, ["stop"])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            flat: "",
            round: "",
            size: "sm",
            name: scope.selected ? 'icon-check-square' : 'icon-square',
            color: scope.selected || _ctx.selectedFiles.length ? 'secondary' : 'primary-300'
          }, null, 8, ["name", "color"])]),
          _: 2
        }, 1032, ["onClick"]), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(scope.cols, (col, i) => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_th, {
            key: col.name,
            props: scope,
            "auto-width": i === 1 && i !== scope.cols.length - 1,
            style: (0,vue_esm_bundler/* normalizeStyle */.j5)(i === 0 ? 'padding-left: 0' : '')
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_9, [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(col.label) + " ", 1), col.name === 'brand' && _ctx.filter_brand_id && (!_ctx.brand_id || _ctx.brand_id !== _ctx.filter_brand_id) ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_btn, {
              key: 0,
              flat: "",
              round: "",
              size: "xs",
              icon: "icon-x-close",
              class: "hover-text-negative",
              onClick: _cache[4] || (_cache[4] = $event => _ctx.filter_brand_id = 0)
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_tooltip_pro, null, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)("Remove filter")]),
                _: 1
              })]),
              _: 1
            })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])]),
            _: 2
          }, 1032, ["props", "auto-width", "style"]);
        }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_th, {
          "auto-width": "",
          class: "text-right"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_hoisted_10]),
          _: 1
        })]),
        _: 2
      }, 1024)]),
      body: (0,vue_esm_bundler/* withCtx */.w5)(scope => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_tr, {
        props: scope,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["hover-bg-accent", {
          [scope.selected ? 'bg-accent' : 'bg-transparent']: true,
          ['no-pointer-events']: _ctx.tableLoading
        }])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [_ctx.tableLoading ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
          key: 0
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          class: "bg-transparent cursor-pointer text-primary hover-text-secondary"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
            type: "rect",
            size: "25px"
          })])]),
          _: 1
        }), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(scope.cols, (_r, i) => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_td, {
            key: _r.name || i,
            props: scope,
            class: (0,vue_esm_bundler/* normalizeClass */.C_)([scope.selected ? 'bg-accent' : 'bg-transparent', "cursor-pointer text-primary"]),
            style: (0,vue_esm_bundler/* normalizeStyle */.j5)(i === 0 ? 'padding-left: 0' : '')
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [i === 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
              key: 0,
              class: "text-body2 q-pa-none"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                avatar: "",
                style: {
                  "min-width": "unset"
                },
                class: "q-pr-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                  useSpinner: "",
                  style: {
                    "padding": "14px",
                    "max-width": "48px",
                    "max-height": "48px"
                  }
                })]),
                _: 1
              }), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["cursor-pointer", {
                  'font-medium': i === 0
                }])
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
                  type: "text",
                  width: `${150 + 10 * i}px`,
                  height: "30px"
                }, null, 8, ["width"])]),
                _: 2
              }, 1032, ["class"])]),
              _: 2
            }, 1024)) : _r.name === 'task_priority' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_skeleton, {
              key: 1,
              type: "text",
              width: "50px",
              height: "30px"
            })) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
              key: 2,
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 text-primary-500", {
                'font-medium': i === 0
              }])
            }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
              type: "text",
              width: "90%",
              height: "30px"
            })], 2))]),
            _: 2
          }, 1032, ["props", "class", "style"]);
        }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          class: "bg-transparent",
          style: {
            "padding-top": "18px",
            "padding-bottom": "18px"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_skeleton, {
            type: "rect",
            size: "25px"
          })])]),
          _: 1
        })], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
          key: 1
        }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)([scope.selected ? 'bg-accent' : 'bg-transparent', "cursor-pointer text-primary text-left hover-text-secondary"]),
          onClick: (0,vue_esm_bundler/* withModifiers */.iM)($event => scope.selected = !scope.selected, ["stop"])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            flat: "",
            round: "",
            size: "sm",
            name: scope.selected ? 'icon-check-square' : 'icon-square',
            color: scope.selected ? 'secondary' : 'primary-300'
          }, null, 8, ["name", "color"])]),
          _: 2
        }, 1032, ["class", "onClick"]), ((0,vue_esm_bundler/* openBlock */.wg)(true), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, null, (0,vue_esm_bundler/* renderList */.Ko)(scope.cols, (_r, i) => {
          return (0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_td, {
            key: _r.name || i,
            props: scope,
            class: (0,vue_esm_bundler/* normalizeClass */.C_)([scope.selected ? 'bg-accent' : 'bg-transparent', "cursor-pointer text-primary"]),
            style: (0,vue_esm_bundler/* normalizeStyle */.j5)(i === 0 ? 'padding-left: 0' : '')
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [i === 0 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
              key: 0,
              class: "text-body2 q-pa-none"
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                avatar: "",
                style: {
                  "min-width": "unset"
                },
                class: "q-pr-sm"
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
                  icon: (_ctx.tableTab === 'tasks' ? _ctx.taskDirectory[scope.row?.task_id]?.icon : _ctx.projectDirectory[scope.row?.project_id]?.icon) || 'icon-browser'
                }, null, 8, ["icon"])]),
                _: 2
              }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                class: (0,vue_esm_bundler/* normalizeClass */.C_)(["cursor-pointer", {
                  'font-medium': i === 0
                }]),
                onClick: $event => _ctx.$router.push(`/brands/${_ctx.filter_brand_id || scope.row.brand_id}/${_ctx.tableTab === 'tasks' ? 'task' : 'project'}/${scope.row?.id}`)
              }, {
                default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("span", null, (0,vue_esm_bundler/* toDisplayString */.zw)(_r.value), 1)]),
                _: 2
              }, 1032, ["class", "onClick"])]),
              _: 2
            }, 1024)) : _r.name === 'task_priority' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
              key: 1,
              class: (0,vue_esm_bundler/* normalizeClass */.C_)([`badge-${_r.value == 'urgent' ? 'negative' : _r.value == 'low' ? 'blue' : _r.value == 'medium' ? 'warning' : 'grey'}`, "badge"])
            }, {
              default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.capitalize(_r?.value || '')), 1)]),
              _: 2
            }, 1032, ["class"])) : _r.name === 'brand' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
              key: 2,
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 text-primary-500 cursor-pointer", {
                'font-medium': i === 0
              }]),
              onClick: $event => _ctx.filter_brand_id = scope.row.brand_id
            }, (0,vue_esm_bundler/* toDisplayString */.zw)(_r.value), 11, _hoisted_13)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", {
              key: 3,
              class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-body2 text-primary-500", {
                'font-medium': i === 0
              }])
            }, (0,vue_esm_bundler/* toDisplayString */.zw)(_r.value), 3))]),
            _: 2
          }, 1032, ["props", "class", "style"]);
        }), 128)), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(scope.selected ? 'bg-accent' : 'bg-transparent'),
          style: {
            "padding-top": "18px",
            "padding-bottom": "18px"
          }
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "sm",
            color: "primary-500",
            class: (0,vue_esm_bundler/* normalizeClass */.C_)({
              ['hover-text-negative']: !_ctx.tableLoading
            }),
            disable: _ctx.tableLoading,
            onClick: _cache[5] || (_cache[5] = (0,vue_esm_bundler/* withModifiers */.iM)(() => {}, ["prevent"]))
          }, {
            default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "icon-trash-01",
              size: "20px"
            })]),
            _: 1
          }, 8, ["class", "disable"])])]),
          _: 2
        }, 1032, ["class"])], 64))]),
        _: 2
      }, 1032, ["props", "class"])]),
      bottom: (0,vue_esm_bundler/* withCtx */.w5)(scope => [_ctx.$q.screen.lt.xs || _ctx.$q.screen.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_15, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_pagination, {
        flat: "",
        unelevated: "",
        "boundary-numbers": "",
        modelValue: _ctx.pagination.page,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.pagination.page = $event),
        disable: _ctx.tableLoading,
        color: "transparent",
        "text-color": "primary-500",
        "active-color": "primary-50",
        "active-text-color": "primary-700",
        max: scope.pagesNumber,
        "max-pages": 6
      }, null, 8, ["modelValue", "disable", "max"])])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_16, [(0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-left", _ctx.$q.screen.gt.xs ? 'col-2' : 'col-6'])
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        dense: "",
        outline: "",
        "no-caps": "",
        disable: _ctx.tableLoading || scope.isFirstPage,
        onClick: scope.prevPage,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-px-md slide-hover button-gm-outline-dark text-body1 font-medium button-sm", {
          [scope.isFirstPage ? 'text-primary-500' : 'text-primary']: true,
          ['hover-text-secondary']: !scope.isFirstPage
        }])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "20px",
          name: "icon-arrow-narrow-left",
          class: "q-pr-xs"
        }), (0,vue_esm_bundler/* createTextVNode */.Uk)(" Previous ")]),
        _: 2
      }, 1032, ["disable", "onClick", "class"])], 2), _ctx.$q.screen.gt.xs ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_pagination, {
        key: 0,
        flat: "",
        unelevated: "",
        "boundary-numbers": "",
        modelValue: _ctx.pagination.page,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.pagination.page = $event),
        disable: _ctx.tableLoading,
        color: "transparent",
        "text-color": "primary-500",
        "active-color": "primary-50",
        "active-text-color": "primary-700",
        max: scope.pagesNumber,
        "max-pages": 6
      }, null, 8, ["modelValue", "disable", "max"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), (0,vue_esm_bundler/* createElementVNode */._)("div", {
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["text-right", _ctx.$q.screen.gt.xs ? 'col-2' : 'col-6'])
      }, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        dense: "",
        outline: "",
        "no-caps": "",
        disable: _ctx.tableLoading || scope.isLastPage,
        onClick: scope.nextPage,
        class: (0,vue_esm_bundler/* normalizeClass */.C_)(["rounded q-px-md slide-hover button-gm-outline-dark text-body1 font-medium button-sm", {
          [scope.isLastPage ? 'text-primary-500' : 'text-primary']: true,
          ['hover-text-secondary']: !scope.isLastPage
        }])
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)(" Next "), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          size: "xs",
          name: "icon-arrow-narrow-right",
          class: "q-pl-xs"
        })]),
        _: 2
      }, 1032, ["disable", "onClick", "class"])], 2)])]),
      "no-data": (0,vue_esm_bundler/* withCtx */.w5)(({
        icon,
        message
      }) => [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_17, [(0,vue_esm_bundler/* createElementVNode */._)("div", _hoisted_18, [_ctx.tableLoading || _ctx.searchQuery ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
        key: 0,
        size: "sm",
        class: "q-pr-sm",
        color: _ctx.tableLoading ? 'secondary' : 'negative',
        name: _ctx.tableLoading ? 'icon-download-cloud-01' : _ctx.searchQuery ? 'icon-filter-funnel-01' : icon
      }, null, 8, ["color", "name"])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.tableLoading ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_19, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.searchQuery && !_ctx.tableLoading ? 'No tasks found.' : message), 1)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("span", _hoisted_20, (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.searchQuery && !_ctx.tableLoading ? 'No tasks found.' : `You have no ${_ctx.tableTab === 'tasks' ? 'tasks' : 'projects'} yet.`), 1))]), !_ctx.tableLoading && !_ctx.searchQuery ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)("div", _hoisted_21, [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        unelevated: "",
        class: "button-sm",
        color: "primary",
        onClick: _cache[8] || (_cache[8] = $event => _ctx.$root.toggleRequest(_ctx.tableTab === 'tasks' ? 'task' : 'project'))
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "icon-plus",
          size: "20px"
        }), (0,vue_esm_bundler/* createElementVNode */._)("span", _hoisted_22, "Add " + (0,vue_esm_bundler/* toDisplayString */.zw)(_ctx.tableTab === 'tasks' ? 'Task' : 'Project'), 1)]),
        _: 1
      })])) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)])]),
      _: 1
    }, 8, ["rows", "columns", "loading", "dense", "pagination", "selected", "visible-columns", "onRequest"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/Requests/TaskProjectList.vue?vue&type=template&id=4ad0af60

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js
var date = __webpack_require__(54170);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/debounce.js
var debounce = __webpack_require__(60899);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/format.js
var format = __webpack_require__(30321);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(16122);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Requests/TaskProjectList.vue?vue&type=script&lang=js






/* harmony default export */ const TaskProjectListvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'TaskProjectList',
  components: {
    CardIconBox: CardIconBox["default"]
  },
  data() {
    return {
      tableTab: 'tasks',
      capitalize: format["default"].capitalize,
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0,
        sortBy: 'updated_at',
        descending: true
      },
      tableLoading: false,
      listTableDense: true,
      selectedFiles: [],
      visibleColumns: [],
      orgTmpItems: [],
      onRequestDelayed: null,
      searchQuery: '',
      orgSelectedItems: [],
      filter_brand_id: 0
    };
  },
  props: {
    brand_id: {
      type: Number,
      default: 0
    }
  },
  async mounted() {
    this.visibleColumns = this.columns.map(c => c.name) // Get all the column names
    .filter(e => !['id', 'task_priority'].includes(e)); // Hide some columns initially
    if (this.brand_id) this.filter_brand_id = this.brand_id;
    this.onRequestDelayed = (0,debounce/* default */.Z)(this.onRequest, 1000);
    this.onRequest({
      pagination: this.pagination,
      filter: this.searchQuery
    });
  },
  computed: {
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['user', 'selectedOrgBrands']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['taskDirectory', 'taskDirectory_Categories', 'projectDirectory', 'projectDirectory_Categories']),
    isTask() {
      return this.tableTab === 'tasks';
    },
    columns() {
      return this.isTask ? [{
        name: 'title',
        required: true,
        label: 'Task Type',
        align: 'left',
        field: row => row.title,
        format: val => val,
        sortable: true
      }, {
        name: 'id',
        label: 'Id',
        align: 'left',
        field: row => row.id,
        format: val => val,
        sortable: true
        // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      }, {
        name: 'brand',
        label: 'Brand',
        align: 'left',
        field: row => row.brand,
        format: val => val?.brand_name || this.selectedOrgBrands?.[val]?.brand_name,
        sortable: false,
        sort: false
      }, {
        name: 'task_priority',
        label: 'Task Priority',
        align: 'left',
        field: row => row.id,
        format: val => this.getItemPriority(val),
        sortable: false
      }, {
        name: 'task_type_id',
        label: 'Category',
        align: 'left',
        field: row => row.task_type_id,
        format: val => Object.values(this.taskDirectory_Categories)?.filter(e => e.id === val)?.[0]?.title,
        sortable: true
        // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      }, {
        name: 'created_at',
        label: 'Created On',
        align: 'left',
        field: row => row.created_at || 1,
        format: val => `${date/* default.formatDate */.ZP.formatDate(val, 'MMM D, YYYY')}`,
        sortable: true
        // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      }, {
        name: 'requested_by_id',
        label: 'Created By',
        align: 'left',
        field: row => row.requestor?.id === this.user.id ? 'me' : `${row.requestor?.firstname} ${row.requestor?.lastname}`,
        format: val => val,
        sortable: true
        // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      }] : [{
        name: 'title',
        required: true,
        label: 'Project Name',
        align: 'left',
        field: row => row.title,
        format: val => val,
        sortable: true
      }, {
        name: 'id',
        label: 'Id',
        align: 'left',
        field: row => row.id,
        format: val => val,
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
      }, {
        name: 'created_at',
        label: 'Created On',
        align: 'left',
        field: row => row.created_at || 1,
        format: val => `${date/* default.formatDate */.ZP.formatDate(val, 'MMM D, YYYY')}`,
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
      }];
    }
  },
  watch: {
    brand_id: {
      async handler(val) {
        if (val) this.filter_brand_id = val;
      }
    },
    filter_brand_id: {
      async handler(val) {
        this.tableLoading = true;
        this.onRequest({
          pagination: this.pagination,
          filter: this.searchQuery
        });
      }
    },
    tableTab: {
      async handler(val) {
        this.tableLoading = true;
        this.onRequest({
          pagination: this.pagination,
          filter: this.searchQuery
        });
      }
    },
    tableTab: {
      async handler(val) {
        this.tableLoading = true;
        this.onRequest({
          pagination: this.pagination,
          filter: this.searchQuery
        });
      }
    },
    searchQuery: {
      async handler(val) {
        this.tableLoading = true;
        this.onRequest({
          pagination: this.pagination,
          filter: this.searchQuery
        });
      }
    },
    ['pagination.page']: {
      async handler(val) {
        this.tableLoading = true;
        this.onRequest({
          pagination: this.pagination,
          filter: this.searchQuery
        });
      }
    }
  },
  methods: {
    ...(0,pinia/* mapActions */.nv)(growmodo/* default */.Z, ['getTasks', 'getProjects']),
    getItemPriority(itemId) {
      const questionTypeInfo = (this.isTask ? this.getTaskInfo(itemId) : this.getProjectInfo(itemId)) || {};
      const itemInfo = this.getItemById(itemId);
      const dynamicQuestions = questionTypeInfo?.dynamic_questions || [];
      const dynamicAnswers = itemInfo?.dynamic_questions || [];
      const q_info = dynamicQuestions.filter(_ => _.title == 'Priority')?.[0];
      const ans_info = dynamicAnswers.filter(_ => _.id == q_info?.id)?.[0];
      const answer = ans_info?.['answer']?.[0];
      return answer?.alternative_answer || answer?.value;
    },
    getTaskInfo(taskId) {
      const taskInfo = this.getItemById(taskId);
      return this.taskDirectory[taskInfo.task_type_id];
    },
    getProjectInfo(projectId) {
      const projectInfo = this.getItemById(projectId);
      return this.projectDirectory[projectInfo.project_type_id];
    },
    getItemIndexById(id) {
      return this.orgSelectedItems.findIndex(e => e.id === id);
    },
    getItemById(id) {
      return this.orgSelectedItems[this.getItemIndexById(id)];
    },
    async onRequest(props) {
      this.tableLoading = true;
      const {
        page,
        rowsPerPage,
        sortBy,
        descending
      } = props.pagination;
      const filter = props.filter;

      // fetch data from "server"
      const returnedData = await this.fetchFromServer({
        brand_id: this.filter_brand_id || undefined,
        search: filter || undefined,
        per_page: rowsPerPage || -1,
        sort_by: sortBy || undefined,
        page: page || undefined,
        sort: descending ? 'DESC' : 'ASC'
      });

      // clear out existing data and add new
      this.orgTmpItems.splice(0, this.orgTmpItems.length, ...returnedData);

      // don't forget to update local pagination object
      if (this.pagination.page !== page) this.pagination.page = page;
      if (this.pagination.rowsPerPage !== rowsPerPage) this.pagination.rowsPerPage = rowsPerPage;
      if (this.pagination.sortBy !== sortBy) this.pagination.sortBy = sortBy;
      if (this.pagination.descending !== descending) this.pagination.descending = descending;

      // ...and turn of loading indicator
      this.tableLoading = false;
    },
    async fetchFromServer(query_props = {}) {
      const response = await this[this.isTask ? 'getTasks' : 'getProjects'](query_props);
      this.pagination.rowsNumber = response?.data?.total || 1;
      this.pagination.pagesNumber = response?.data?.last_page || 1;
      this.orgSelectedItems = response.data?.data || [];
      return this.orgSelectedItems;
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/Requests/TaskProjectList.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(11639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(44458);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(63190);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-group/QBtnGroup.js
var QBtnGroup = __webpack_require__(67236);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(68879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(50926);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(66611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(22857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(76749);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(33115);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 7 modules
var QTable = __webpack_require__(50113);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js
var QLinearProgress = __webpack_require__(8289);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__(31233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTh.js
var QTh = __webpack_require__(21682);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(67220);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/skeleton/QSkeleton.js
var QSkeleton = __webpack_require__(57133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(20990);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/virtual-scroll/QVirtualScroll.js + 1 modules
var QVirtualScroll = __webpack_require__(52482);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/pagination/QPagination.js
var QPagination = __webpack_require__(80996);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(69984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Requests/TaskProjectList.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TaskProjectListvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const TaskProjectList = (__exports__);
;




















runtime_auto_import_default()(TaskProjectListvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QBtnGroup: QBtnGroup/* default */.Z,QBtn: QBtn/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QSelect: QSelect/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QTable: QTable/* default */.Z,QLinearProgress: QLinearProgress/* default */.Z,QTr: QTr/* default */.Z,QTh: QTh/* default */.Z,QTd: QTd/* default */.Z,QSkeleton: QSkeleton/* default */.ZP,QBadge: QBadge/* default */.Z,QVirtualScroll: QVirtualScroll/* default */.Z,QPagination: QPagination/* default */.Z});


/***/ }),

/***/ 36095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CustomDropdown)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-bundler.js + 6 modules
var vue_esm_bundler = __webpack_require__(56646);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Search/CustomDropdown.vue?vue&type=template&id=49c5c1a9

const _hoisted_1 = {
  class: "text-center"
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
    "popup-content-class": "bg-white rounded-bottom q-px-md",
    "input-class": "text-h6 font-medium letter-space-normal text-primary-700",
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
          class: "text-body2 font-medium text-primary-500"
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.title), 1)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1032, ["to", "onClick"])) : scope.opt.showmore ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createElementBlock */.iD)(vue_esm_bundler/* Fragment */.HY, {
      key: 1
    }, [((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, {
      clickable: "",
      key: scope.itemProps.id + '_more',
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
    }, 1032, ["onClick"])), scope.index !== _ctx.filteredOptions.length - 1 ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_separator, {
      key: 0
    })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)], 64)) : ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item, (0,vue_esm_bundler/* mergeProps */.dG)({
      key: 2,
      clickable: "",
      to: scope.opt.url
    }, scope.itemProps, {
      class: ["text-body2 font-medium rounded bg-none text-primary hover-bg-accent", _ctx.selectedOrgIsPaused || !_ctx.testOnMaintenance(scope.opt) ? 'cursor-not-allowed' : 'hover-text-secondary greyscale'],
      key: scope.itemProps.id,
      onClick: (0,vue_esm_bundler/* withModifiers */.iM)(() => {
        if (_ctx.selectedOrgIsPaused) {
          _ctx.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: 'Your subscription is paused, please resume it first.'
          });
          return;
        }
        if (!_ctx.testOnMaintenance(scope.opt)) {
          _ctx.$q.notify({
            icon: 'icon-alert-triangle',
            iconColor: 'negative',
            message: 'Not available in maintenance plan.'
          });
          return;
        }
        this.$root.requestAction(scope.opt?.directoryType === 'tasks' ? 'task' : 'project', scope.opt);
      }, ["prevent"])
    }), {
      default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        side: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_CardIconBox, {
          icon: scope.opt?.icon || 'icon-browser',
          iconColor: !_ctx.selectedOrgIsPaused && _ctx.testOnMaintenance(scope.opt) ? 'secondary' : 'primary-500'
        }, null, 8, ["icon", "iconColor"])]),
        _: 2
      }, 1024), (0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(!_ctx.selectedOrgIsPaused && _ctx.testOnMaintenance(scope.opt) ? 'text-primary' : 'text-primary-500')
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.title), 1)]),
          _: 2
        }, 1032, ["class"])]),
        _: 2
      }, 1024), scope.opt.type ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
        key: 0,
        side: ""
      }, {
        default: (0,vue_esm_bundler/* withCtx */.w5)(() => [ true ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_badge, {
          key: 0,
          class: (0,vue_esm_bundler/* normalizeClass */.C_)(["badge", `badge-${!_ctx.selectedOrgIsPaused && _ctx.testOnMaintenance(scope.opt) ? 'blue' : 'grey'}`])
        }, {
          default: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createTextVNode */.Uk)((0,vue_esm_bundler/* toDisplayString */.zw)(scope.opt.type) + " ", 1), scope.opt.type == 'Search' ? ((0,vue_esm_bundler/* openBlock */.wg)(), (0,vue_esm_bundler/* createBlock */.j4)(_component_q_icon, {
            key: 0,
            size: "14px",
            name: "icon-corner-down-right",
            class: "text-primary-500 q-ml-xs"
          })) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 2
        }, 1032, ["class"])) : (0)]),
        _: 2
      }, 1024)) : (0,vue_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 2
    }, 1040, ["to", "class", "onClick"]))]),
    _: 2
  }, [!_ctx.show_button ? {
    name: "prepend",
    fn: (0,vue_esm_bundler/* withCtx */.w5)(() => [(0,vue_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
      name: "icon-search-lg",
      size: "sm",
      class: "text-primary-700 q-pa-xs hover-text-secondary"
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
;// CONCATENATED MODULE: ./src/components/Search/CustomDropdown.vue?vue&type=template&id=49c5c1a9

// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(11872);
// EXTERNAL MODULE: ./src/stores/growmodo/index.js + 3 modules
var growmodo = __webpack_require__(72393);
// EXTERNAL MODULE: ./src/stores/user/index.js + 3 modules
var user = __webpack_require__(33701);
// EXTERNAL MODULE: ./src/assets/scripts/functions.js + 1 modules
var functions = __webpack_require__(1966);
// EXTERNAL MODULE: ./src/components/Helpers/CardIconBox.vue + 4 modules
var CardIconBox = __webpack_require__(16122);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Search/CustomDropdown.vue?vue&type=script&lang=js






/* harmony default export */ const CustomDropdownvue_type_script_lang_js = ((0,vue_esm_bundler/* defineComponent */.aZ)({
  name: 'SearchDropdown',
  emits: ['searching'],
  components: {
    CardIconBox: CardIconBox["default"]
  },
  props: {
    show_button: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'What is your next request?'
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
    ...(0,pinia/* mapState */.rn)(user/* default */.Z, ['selectedOrgIsMaintenance', 'selectedOrgIsPaused']),
    ...(0,pinia/* mapState */.rn)(growmodo/* default */.Z, ['taskDirectory', 'projectDirectory', 'maintenanceTaskCatId']),
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
    isTask(item) {
      return item.directoryType === 'tasks';
    },
    isMaintenanceTask(task) {
      return this.isTask(task) && task?.tags?.includes?.(this.maintenanceTaskCatId);
    },
    testOnMaintenance(item) {
      if (this.selectedOrgIsMaintenance) {
        // Subscription is on Maintenance Plan
        if (!this.isMaintenanceTask(item)) return false;
      }
      return true;
    },
    updateSearch_Source() {
      if (!this.requestOptions || !this.requestOptions.length) {
        this.tasksList.forEach(e => e.directoryType = 'tasks');
        this.projectsList.forEach(e => e.directoryType = 'projects');
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
        //     icon: 'icon-search-lg',
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__(67887);
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
//# sourceMappingURL=chunk-common.95545bc9.js.map