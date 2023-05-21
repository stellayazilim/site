import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.72a67b7f.mjs';
import { _ as _page0, a as _page1, b as _page2 } from './chunks/pages/all.ee4605c2.mjs';
/* empty css                                 *//* empty css                                 */import 'underscore';
/* empty css                                 *//* empty css                                 */
function check(Component) {
	return Component['render'] && Component['$$render'];
}

async function renderToStaticMarkup(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			`<astro-slot${key === 'default' ? '' : ` name="${key}"`}>${value}</astro-slot>`;
	}
	const { html } = Component.render(props, { $$slots: slots });
	return { html };
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/about.astro", _page1],["src/pages/soon.astro", _page2],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["/_astro/about.b8215d8f.css","/_astro/about.b983f0f6.css","/_astro/index.6adae6b0.css"],"scripts":[{"type":"external","value":"/_astro/hoisted.a12f3e3c.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/about.b8215d8f.css","/_astro/about.b983f0f6.css","/_astro/about.1f6f4452.css"],"scripts":[{"type":"external","value":"/_astro/hoisted.112f64bd.js"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["/_astro/about.b8215d8f.css"],"scripts":[],"routeData":{"route":"/soon","type":"page","pattern":"^\\/soon\\/?$","segments":[[{"content":"soon","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/soon.astro","pathname":"/soon","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/home/stella/projects/business_site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/stella/projects/business_site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/stella/projects/business_site/src/pages/soon.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","$components/misc/typewriter.svelte":"_astro/typewriter.66a436c8.js","/astro/hoisted.js?q=0":"_astro/hoisted.a12f3e3c.js","@astrojs/svelte/client.js":"_astro/client.c4e17359.js","/astro/hoisted.js?q=1":"_astro/hoisted.112f64bd.js","$components/common/button/misc/toggle.dark.mode.svelte":"_astro/toggle.dark.mode.46ed5ec3.js","$components/home/home.employee.section.svelte":"_astro/home.employee.section.2e0e7b9d.js","$components/home/home.about.section.svelte":"_astro/home.about.section.6be44a37.js","$components/home/home.porfolio.section.svelte":"_astro/home.porfolio.section.b1b2139e.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.b983f0f6.css","/_astro/about.1f6f4452.css","/_astro/index.6adae6b0.css","/_astro/about.b8215d8f.css","/STELLALOGO.png","/STELLAS.png","/ayroui.svg","/favicon.svg","/graygrids.svg","/image-1.jpg","/image-10.jpg","/image-11.jpg","/image-12.jpg","/image-2.jpg","/image-3.jpg","/image-4.jpg","/image-5.jpg","/image-6.jpg","/image-7.jpg","/image-8.jpg","/image-9.jpg","/lineicons.svg","/plainadmin.svg","/uideck.svg","/_astro/MainLayout.astro_astro_type_script_index_0_lang.ebcdb0b1.js","/_astro/client.c4e17359.js","/_astro/hoisted.112f64bd.js","/_astro/hoisted.a12f3e3c.js","/_astro/home.about.section.6be44a37.js","/_astro/home.employee.section.2e0e7b9d.js","/_astro/home.porfolio.section.b1b2139e.js","/_astro/index.57fc44e2.js","/_astro/index.c17c3841.js","/_astro/toggle.dark.mode.46ed5ec3.js","/_astro/typewriter.66a436c8.js","/js/flowbite.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
