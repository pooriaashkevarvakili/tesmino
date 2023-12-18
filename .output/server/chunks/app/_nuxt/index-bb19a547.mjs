import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './capture-81cf5a5f.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0$1 } from './hand-0-616b8f75.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div class="flex flex-col"><div class="mt-40 font-bold text-5xl"> learn <span style="${ssrRenderStyle({})}" class="border-change uppercase">edge</span> Cases </div><div class="w-6/12 mt-8 text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iure dolor, blanditiis optio sunt similique dicta laborum repellat aspernatur fugiat a itaque asperiores corporis vel voluptatibus provident nobis excepturi? Recusandae. </div><div class="mt-5"><input class="bg-white rounded-full border boder-white w-6/12 focus:boder-white p-5 hover:border-white" placeholder="what do you learn"><button class="bg-green-400 text-white w-36 h-10 text-2xl relative right-40 top-1 rounded-full"> search </button></div></div><div class="relative top-36"><img style="${ssrRenderStyle({ "width": "500px", "height": "300px" })}" class="mr-10"${ssrRenderAttr("src", _imports_0$2)}><div id="eyes" class="relative rounded-full bg-black w-24 h-24 -top-48 left-36"></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/eye.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_1 = "" + buildAssetsURL("hand-1.41dde312.png");
const _imports_2 = "" + buildAssetsURL("hand-2.592d34a5.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex top-10" }, _attrs))}><div><div class="mt-6"><div class="w-96 flex h-36 rounded-xl bg-white"><div class="flex"><div class="w-28 h-28 top-2 bg-yellow-200 relative left-4 rounded-full"></div><img id="hand" class="w-16 relative h-28 right-20 -top-4"${ssrRenderAttr("src", _imports_0$1)} alt=""><div><div class="text-black mt-10 relative right-2">Zeroth resum</div><div class="text-gray-400 relative right-2">Lorem ipsum 0th</div></div></div></div></div><div class="mt-5"><div class="w-96 flex h-36 rounded-xl bg-white"><div class="flex"><div class="w-28 h-28 top-2 bg-yellow-200 relative left-4 rounded-full"></div><img id="hand" class="w-16 relative h-28 right-20 -top-4"${ssrRenderAttr("src", _imports_1)} alt=""><div><div class="text-black mt-10 relative right-2">First resum</div><div class="text-gray-400 relative right-2">Lorem ipsum 1th</div></div></div></div></div><div class="mt-6"><div class="w-96 flex h-36 rounded-xl bg-white"><div class="flex"><div class="w-28 h-28 top-2 bg-yellow-200 relative left-4 rounded-full"></div><img id="hand" class="w-16 relative h-28 right-20 -top-4"${ssrRenderAttr("src", _imports_2)} alt=""><div><div class="text-black mt-10 relative right-2">Second resum</div><div class="text-gray-400 relative right-2">Lorem ipsum 2th</div></div></div></div></div></div><div class="flex flex-col ml-44 mt-36"><div class="text-black w-full flex text-2xl">choose knowleducation over <div class="relative -top-5 left-8 text-green-400">All</div><div style="${ssrRenderStyle({ "border": "23px solid #68d391", "clip-path": "polygon(50% 25%, 75% 75%, 25% 75%)" })}"></div> others </div><div class="w-5/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore totam vitae unde, fugiat illum delectus voluptatibus suscipit ratione quia iure ex deleniti quam maxime deserunt corrupti impedit quis praesentium!</div><div class="w-5/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore totam vitae unde, fugiat illum delectus voluptatibus suscipit ratione quia iure ex deleniti quam maxime deserunt corrupti impedit quis praesentium!</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hand.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  __name: "card",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-20" }, _attrs))}><div class="flex"><div class="font-bold text-4xl">Our Courses</div><div class="border border-t-0 -top-4 left-24 relative border-l-0 border-r-0 border-gray-200 w-9/12"></div></div><div class="grid grid-cols-3 relative top-5"><div>`);
      if (unref(loading) === false) {
        _push(`<div><div class="loading relative loading-bars loading-lg"></div></div>`);
      } else {
        _push(`<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-5/12 ml-36"${ssrRenderAttr("src", _imports_0$1)}><div class="px-6 py-4"><div class="font-bold text-xl mb-2">The Coldest Sunset</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span></div></div>`);
      }
      _push(`</div><div>`);
      if (unref(loading) === false) {
        _push(`<div><div class="loading relative loading-bars loading-lg"></div></div>`);
      } else {
        _push(`<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-5/12 ml-36"${ssrRenderAttr("src", _imports_0$1)}><div class="px-6 py-4"><div class="font-bold text-xl mb-2">The Coldest Sunset</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span></div></div>`);
      }
      _push(`</div><div>`);
      if (unref(loading) === false) {
        _push(`<div><div class="loading relative loading-bars loading-lg"></div></div>`);
      } else {
        _push(`<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-5/12 ml-36"${ssrRenderAttr("src", _imports_0$1)}><div class="px-6 py-4"><div class="font-bold text-xl mb-2">The Coldest Sunset</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span></div></div>`);
      }
      _push(`</div></div><div class="grid grid-cols-3 relative top-16"><div>`);
      if (unref(loading) === false) {
        _push(`<div><div class="loading relative loading-bars loading-lg"></div></div>`);
      } else {
        _push(`<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-5/12 ml-36"${ssrRenderAttr("src", _imports_0$1)}><div class="px-6 py-4"><div class="font-bold text-xl mb-2">The Coldest Sunset</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span></div></div>`);
      }
      _push(`</div><div>`);
      if (unref(loading) === false) {
        _push(`<div><div class="loading relative loading-bars loading-lg"></div></div>`);
      } else {
        _push(`<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-5/12 ml-36"${ssrRenderAttr("src", _imports_0$1)}><div class="px-6 py-4"><div class="font-bold text-xl mb-2">The Coldest Sunset</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span></div></div>`);
      }
      _push(`</div><div>`);
      if (unref(loading) === false) {
        _push(`<div><div class="loading relative loading-bars loading-lg"></div></div>`);
      } else {
        _push(`<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-5/12 ml-36"${ssrRenderAttr("src", _imports_0$1)}><div class="px-6 py-4"><div class="font-bold text-xl mb-2">The Coldest Sunset</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span></div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _imports_0 = "" + buildAssetsURL("contact.9cfabc1e.svg");
const _sfc_main$1 = {
  data() {
    return {
      inputValue: "",
      regexPattern: /(^\s*$)|(^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$)/,
      inputEmpty: /(^[\s]*$)/,
      messageTextArea: ""
    };
  },
  computed: {
    validationError() {
      return !this.regexPattern.test(this.inputValue);
    },
    validationEmpty() {
      return !this.inputEmpty.test(this.messageTextArea);
    }
  },
  methods: {
    validateInput() {
      if (this.validationError) {
        console.log("Invalid input! Please enter a valid value.");
        return;
      }
      console.log("Input is valid:", this.inputValue);
    },
    validateEmpty() {
      if (this.validationEmpty) {
        console.log("Invalid input! Please enter a valid value.");
        return;
      }
      console.log("Input is valid:", this.inputEmpty);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "box-shadow": "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px" },
    class: "w-11/12 rounded-sm mt-10 bg-gray-200 h-96 relative top-16"
  }, _attrs))}><div class="grid grid-cols-3"><div class="ml-24 relative top-5 flex-col"><div>full name</div><input class="border border-blue-400 w-full rounded-xl p-3"></div><div class="ml-24 flex-col"><form class="relative top-5"><div>email</div><input class="p-3 w-72 border rounded-xl border-blue-400 hover:border-yellow-400 focus:border-red-400"${ssrRenderAttr("value", $data.inputValue)}${ssrRenderAttr("pattern", $data.regexPattern)} type="text">`);
  if ($options.validationError) {
    _push(`<p class="text-red-400">email eshtebah</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form></div><img class="w-64 ml-24 relative top-8"${ssrRenderAttr("src", _imports_0)}></div><div class="flex -mt-36 flex-col ml-24"><div>message</div><textarea${ssrRenderAttr("pattern", $data.inputEmpty)} class="border border-blue-400 w-5/12" style="${ssrRenderStyle({ "height": "200px" })}">${ssrInterpolate($data.messageTextArea)}</textarea>`);
  if ($options.validationEmpty) {
    _push(`<p class="text-red-400">textarea empty</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_eye = __nuxt_component_0;
  const _component_hand = __nuxt_component_1;
  const _component_card = __nuxt_component_2;
  const _component_contact = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: { "margin-top": "-950px" },
    class: "ml-10"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_eye, null, null, _parent));
  _push(ssrRenderComponent(_component_hand, null, null, _parent));
  _push(ssrRenderComponent(_component_card, null, null, _parent));
  _push(ssrRenderComponent(_component_contact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-bb19a547.mjs.map
