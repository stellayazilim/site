/* empty css                           *//* empty css                           */import 'underscore';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, d as addAttribute, e as renderComponent, f as renderHead } from '../astro.72a67b7f.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$c = createAstro();
const $$Nav$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Nav$1;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="flex-1">
    <ul class="flex gap-6 font-semibold">
        ${renderSlot($$result, $$slots["default"])}
    </ul>
</nav>`;
}, "/home/stella/projects/business_site/src/components/static/nav.astro");

const $$Astro$b = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Nav;
  const pagePath = new URL(Astro2.request.url).pathname;
  const active = pagePath == Astro2.props.link || Astro2.props?.subMenu?.some((item) => item.link == pagePath);
  return renderTemplate`${maybeRenderHead($$result)}<li class="relative astro-H2LUCEWH">
    <a${addAttribute([[active && "active"], "astro-H2LUCEWH"], "class:list")}${addAttribute(Astro2.props.link, "href")}>${Astro2.props.text}    
       ${Astro2.props.subMenu && renderTemplate`<i class="fa fa-chevron-down astro-H2LUCEWH"></i>`}
    </a>
    ${Astro2.props.subMenu && renderTemplate`<ul class="absolute  w-60 astro-H2LUCEWH">
            ${Astro2.props.subMenu.map((item) => renderTemplate`<li class="astro-H2LUCEWH"> <a${addAttribute(item.link, "href")} class="astro-H2LUCEWH"> ${item.text} </a> </li>`)}
        </ul>`}
    
</li>`;
}, "/home/stella/projects/business_site/src/components/static/nav.item.astro");

const navData = [
  {
    text: "Anasayfa",
    link: "/"
  },
  {
    text: "Hakkimizda",
    link: "/about"
  },
  {
    text: "Urunler",
    link: "/products",
    subMenu: [{
      text: "kurumsal websitesi",
      link: "/kweb"
    }, {
      text: "kurumsal eposta",
      link: "/kurumsal_posta"
    }]
  },
  {
    text: "Hizmetler",
    link: "/services"
  }
];

const $$Astro$a = createAstro();
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Default;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(Astro2.props.type || "button", "type")} class="px-5 py-2 bg-blue-600 rounded-sm text-gray-200 font-semibold">
    ${renderSlot($$result, $$slots["default"])}
</button>`;
}, "/home/stella/projects/business_site/src/components/common/button/classic/md/default.astro");

const $$Astro$9 = createAstro();
const $$Dark$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Dark$1;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(Astro2.props.type || "button", "type")} class="px-5 py-2  hover:bg-gray-700 duration-200 bg-gray-800 rounded-sm text-gray-200 font-semibold">
    ${renderSlot($$result, $$slots["default"])}
</button>`;
}, "/home/stella/projects/business_site/src/components/common/button/classic/md/dark.primary.astro");

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="flex flex-row sticky z-10  px-14 h-28 items-center">

    <h1 class="flex text-4xl font-extrabold text-slate-300 items-center justify-start gap-2 w-60 py-4">
        <img src="/STELLAS.png" class="w-10" alt="">
        STELLA
    </h1>


    ${renderComponent($$result, "Nav", $$Nav$1, {}, { "default": ($$result2) => renderTemplate`${navData.map((item) => renderTemplate`${renderComponent($$result2, "NavItem", $$Nav, { ...item })}`)}` })}


    <div class="flex gap-4 items-center justify-end">
        ${renderComponent($$result, "ButtonDefault", $$Default, { "type": "submit" }, { "default": ($$result2) => renderTemplate` 
            Giris
        ` })}

        ${renderComponent($$result, "ButtonDarkPrimary", $$Dark$1, {}, { "default": ($$result2) => renderTemplate`
            Kayit
        ` })}

        ${renderComponent($$result, "ToggleDarkModeBtn", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "$components/common/button/misc/toggle.dark.mode.svelte", "client:component-export": "default" })}
    </div>
</header>`;
}, "/home/stella/projects/business_site/src/components/static/header.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<meta name="generator"', '>\n		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">\n		<link rel="stylesheet" href="node_modules/flowbite/dist/flowbite.min.css">\n		<link rel="stylesheet" href="node_modules/aos/dist/aos.css">\n		<title>', "</title>\n	", '</head>\n	<body class="flex flex-col bg-gray-900">\n		', "\n		", '\n		<script src="node_modules/flowbite/dist/flowbite.js"><\/script>\n\n		\n		\n	</body>\n</html>'])), addAttribute(Astro2.generator, "content"), Astro2.props.title, renderHead($$result), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "/home/stella/projects/business_site/src/layouts/MainLayout.astro");

const $$Astro$6 = createAstro();
const $$Dark = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Dark;
  return renderTemplate`${maybeRenderHead($$result)}<button data-aos="fade-up"${addAttribute(Astro2.props.type || "button", "type")}${addAttribute(["px-5 py-2 rounded-full text-gray-200 font-semibold", Astro2.props.bg], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</button>`;
}, "/home/stella/projects/business_site/src/components/common/button/rounded/md/dark.secondary.astro");

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}

/* src/components/misc/typewriter.svelte generated by Svelte v3.58.0 */

const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let visible = false;
	let { value = "" } = $$props;

	function toggle() {
		visible = !visible;
	}

	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0) $$bindings.toggle(toggle);

	return `${visible
	? `<span class="underline">${escape(value)}</span>`
	: ``}`;
});

const $$Astro$5 = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Feature;
  return renderTemplate`${maybeRenderHead($$result)}<div class="feature-card-item text-center">


    


    <span class="inline-flex p-6 bg-gray-800 rounded-full hover:bg-blue-700 duration-200 cursor-pointer">
     

        ${renderSlot($$result, $$slots["icon"])}
    </span>


    <h3 class="text-3xl font-bold pt-5 text-gray-200 w-96 mx-auto">
        ${Astro2.props.header}
    </h3>
   
    <p class="pt-5 text-gray-400  w-96 mx-auto">
        ${Astro2.props.text}


    </p>
</div>`;
}, "/home/stella/projects/business_site/src/components/cards/feature.card.astro");

const $$Astro$4 = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead($$result)}<div class="container mx-auto my-20 relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden rounded-lg h-[46rem] bg-default-dark-primary">
         <!-- Item 1 -->
     
        <!-- Item 2 -->
        <div class="hidden duration-200 ease-linear h-full" data-carousel-item>
            <div class="absolute flex justify-center items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full">

                    <div class="w-1/2 p-12"> 
                        <p class="text-3xl text-gray-500 leading-snug">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce condimentum sapien ac leo cursus dignissim. 
                            In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard
                        </p>
                        <h3 class="text-3xl font-semibold text-gray-200 mt-24">Deniyal Shifer</h3>
                        <span class=" text-gray-500 leading-snug">Founder @democompany.</span>
                    </div>
                    <div class="w-1/2 p-24">
                        <img src="/image-1.jpg" class="object-contain w-full" alt="">
                    </div>
            </div>

        </div> 

        <div class="hidden duration-200 ease-linear h-full" data-carousel-item>
            <div class="absolute flex justify-center items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full">

                    <div class="w-1/2 p-12"> 
                        <p class="text-3xl text-gray-500 leading-snug">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce condimentum sapien ac leo cursus dignissim. 
                            In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard
                        </p>
                        <h3 class="text-3xl font-semibold text-gray-200 mt-24">Deniyal Shifer</h3>
                        <span class=" text-gray-500 leading-snug">Founder @democompany.</span>
                    </div>
                    <div class="w-1/2 p-24">
                        <img src="/image-1.jpg" class="object-contain w-full" alt="">
                    </div>
            </div>

        </div> 
        <div class="hidden duration-200 ease-linear h-full" data-carousel-item>
            <div class="absolute flex justify-center items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full">

                    <div class="w-1/2 p-12"> 
                        <p class="text-3xl text-gray-500 leading-snug">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce condimentum sapien ac leo cursus dignissim. 
                            In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard
                        </p>
                        <h3 class="text-3xl font-semibold text-gray-200 mt-24">Deniyal Shifer</h3>
                        <span class=" text-gray-500 leading-snug">Founder @democompany.</span>
                    </div>
                    <div class="w-1/2 p-24">
                        <img src="/image-1.jpg" class="object-contain w-full" alt="">
                    </div>
            </div>

        </div> 
        <div class="hidden duration-200 ease-linear h-full" data-carousel-item>
            <div class="absolute flex justify-center items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full">

                    <div class="w-1/2 p-12"> 
                        <p class="text-3xl text-gray-500 leading-snug">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce condimentum sapien ac leo cursus dignissim. 
                            In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard
                        </p>
                        <h3 class="text-3xl font-semibold text-gray-200 mt-24">Deniyal Shifer</h3>
                        <span class=" text-gray-500 leading-snug">Founder @democompany.</span>
                    </div>
                    <div class="w-1/2 p-24">
                        <img src="/image-1.jpg" class="object-contain w-full" alt="">
                    </div>
            </div>

        </div> 
    </div>
    <!-- Slider controls -->

    <div class="absolute bottom-10 left-10 z-30 flex items-center justify-center">
        <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer 2 outline-none " data-carousel-prev>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer  outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
   
</div>`;
}, "/home/stella/projects/business_site/src/components/home/home.testimonial.section.astro");

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.request.url;
  return Astro2.redirect("/soon");
}, "/home/stella/projects/business_site/src/pages/index.astro");

const $$file$2 = "/home/stella/projects/business_site/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Anasayfa", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="w-full astro-KH7BTL4R">

		<section id="banner" class="astro-KH7BTL4R">
			<div class="h-28 w-full  astro-KH7BTL4R"></div>
			<div class="container w-full h-[41rem] mx-auto grid grid-cols-2 gap-24 astro-KH7BTL4R">
				<div class="flex justify-center items-center astro-KH7BTL4R">
					<div class="astro-KH7BTL4R">
						${renderComponent($$result2, "BtnRoundedDarkSecondary", $$Dark, { "bg": "bg-gray-800 ", "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate`
							<div class="flex items-center p-2 gap-4 astro-KH7BTL4R">
								<span class="block w-2 h-2 rounded-full bg-blue-500 astro-KH7BTL4R"></span>
								Tailwind Template for Startups
							</div>
						` })}
						<h2 class="text-6xl text-gray-300 font-bold mt-6 astro-KH7BTL4R">
							<div class="astro-KH7BTL4R">
								Digital Solutions for 
							</div>
							<div class="astro-KH7BTL4R">
								your ${renderComponent($$result2, "TypeWritter", Typewriter, { "client:load": true, "value": "company", "client:component-hydration": "load", "client:component-path": "$components/misc/typewriter.svelte", "client:component-export": "default", "class": "astro-KH7BTL4R" })}
							</div>

                        
							<div class="mt-6 flex items-center gap-12 astro-KH7BTL4R">
								${renderComponent($$result2, "BtnClassicMdPrimary", $$Default, { "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate` <span class="flex items-center gap-4 text-base astro-KH7BTL4R">Teklif birakin <i class="fa-solid fa-arrow-right astro-KH7BTL4R"></i></span>  ` })}

								<span class="flex text-base text-white fill-white stroke-white  astro-KH7BTL4R">
									<i class="fa-regular fa-triangle fa-rotate-90 astro-KH7BTL4R"></i> Nasil yapiyoruz
								</span>
							</div>
						</h2>
					</div>
				
				</div>

				<div class="h-full pt-24 astro-KH7BTL4R">
						<div class="relative h-full   astro-KH7BTL4R">
							<img src="/image-1.jpg" class="absolute left-0 bottom-0 z-10  shadow-xl shadow-gray-950 astro-KH7BTL4R" alt="">
							<img src="/image-2.jpg" class="absolute left-10  bottom-10  z-1 blur-10 shadow-lg shadow-gray-500  astro-KH7BTL4R">
						</div>
				</div>
			</div>
		</section> 

		<div class="h-[41rem]  astro-KH7BTL4R"></div>
		<div class="bg-gray-900 astro-KH7BTL4R">
			<svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg" class="astro-KH7BTL4R"><defs class="astro-KH7BTL4R"><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0" class="astro-KH7BTL4R"><stop stop-color="rgba(17, 23, 34, 1)" offset="0%" class="astro-KH7BTL4R"></stop><stop stop-color="rgba(17, 23, 34, 1)" offset="100%" class="astro-KH7BTL4R"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,80L480,80L960,0L1440,80L1920,20L2400,0L2880,40L3360,70L3840,0L4320,90L4800,50L5280,80L5760,10L6240,70L6720,50L7200,90L7680,0L8160,60L8640,60L9120,60L9600,90L10080,60L10560,80L11040,50L11520,10L11520,100L11040,100L10560,100L10080,100L9600,100L9120,100L8640,100L8160,100L7680,100L7200,100L6720,100L6240,100L5760,100L5280,100L4800,100L4320,100L3840,100L3360,100L2880,100L2400,100L1920,100L1440,100L960,100L480,100L0,100Z" class="astro-KH7BTL4R"></path></svg>
		</div>
		<section class="bg-gray-900 astro-KH7BTL4R">
	
		</section>
	</main>
` })}`;
}, "/home/stella/projects/business_site/src/pages/about.astro");

const $$file$1 = "/home/stella/projects/business_site/src/pages/about.astro";
const $$url$1 = "/about";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$SoonLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SoonLayout;
  return renderTemplate`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STELLA</title>
${renderHead($$result)}</head>
<body class="bg-default-dark-secondary bg-opacity-30 flex flex-col items-center justify-center h-screen">
    

    <img src="/STELLALOGO.png" alt="">
    ${renderSlot($$result, $$slots["default"])}

</body></html>`;
}, "/home/stella/projects/business_site/src/layouts/SoonLayout.astro");

const $$Astro = createAstro();
const $$Soon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Soon;
  return renderTemplate`${renderComponent($$result, "SoonLayout", $$SoonLayout, {}, { "default": ($$result2) => renderTemplate`
        ${maybeRenderHead($$result2)}<h2 class="text-default-primary font-semibold text-2xl">
            Çok yakında hizmetteyiz...
        </h2>

        <span>Beklemede kalın</span>
` })}`;
}, "/home/stella/projects/business_site/src/pages/soon.astro");

const $$file = "/home/stella/projects/business_site/src/pages/soon.astro";
const $$url = "/soon";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Soon,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const get = ({ redirect }) => {
};

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
