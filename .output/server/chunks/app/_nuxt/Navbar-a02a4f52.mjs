import { _ as _export_sfc, d as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './capture-81cf5a5f.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0dcb7ee2><div class="bg-gray-200" id="app" data-v-0dcb7ee2><div class="${ssrRenderClass([{ "hidden-navbar": !$data.showNavbar }, "navbar ml-10 flex justify-between"])}" data-v-0dcb7ee2><div data-v-0dcb7ee2><div id="eyes" class="relative rounded-full left-7 bg-black w-4 h-4" data-v-0dcb7ee2></div><div data-v-0dcb7ee2><img style="${ssrRenderStyle({ "width": "40px", "height": "50px" })}"${ssrRenderAttr("src", _imports_0)} data-v-0dcb7ee2></div><div class="ml-3" data-v-0dcb7ee2>Knowledgeducation</div></div><div data-v-0dcb7ee2><ul class="flex space-x-5" data-v-0dcb7ee2><li class="text-gray-400" data-v-0dcb7ee2>courses</li><li class="text-gray-400" data-v-0dcb7ee2>contact us</li><li class="text-gray-400" data-v-0dcb7ee2>lorem</li></ul></div><div data-v-0dcb7ee2><button class="bg-green-400 text-white w-44 h-12 rounded-3xl" data-v-0dcb7ee2>Contact Us</button></div></div></div>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0dcb7ee2"]]);

export { Navbar as default };
//# sourceMappingURL=Navbar-a02a4f52.mjs.map
