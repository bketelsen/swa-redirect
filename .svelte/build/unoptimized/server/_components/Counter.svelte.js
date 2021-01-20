import './Counter.svelte.css.proxy.js';
/* src/components/Counter.svelte generated by Svelte v3.31.2 */
import { create_ssr_component, escape } from "../_snowpack/pkg/svelte/internal.js";

const css = {
	code: "button.svelte-qxv3xi{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums}button.svelte-qxv3xi:focus{border:2px solid #ff3e00}button.svelte-qxv3xi:active{background-color:rgba(255, 62, 0, 0.2)}",
	map: "{\"version\":3,\"file\":\"Counter.svelte\",\"sources\":[\"Counter.svelte\"],\"sourcesContent\":[\"<script>\\n\\tlet count = 0;\\n\\n\\tconst increment = () => {\\n\\t\\tcount += 1;\\n\\t};\\n</script>\\n\\n<button on:click={increment}>\\n\\tClicks: {count}\\n</button>\\n\\n<style>\\n\\tbutton {\\n\\t\\tfont-family: inherit;\\n\\t\\tfont-size: inherit;\\n\\t\\tpadding: 1em 2em;\\n\\t\\tcolor: #ff3e00;\\n\\t\\tbackground-color: rgba(255, 62, 0, 0.1);\\n\\t\\tborder-radius: 2em;\\n\\t\\tborder: 2px solid rgba(255, 62, 0, 0);\\n\\t\\toutline: none;\\n\\t\\twidth: 200px;\\n\\t\\tfont-variant-numeric: tabular-nums;\\n\\t}\\n\\n\\tbutton:focus {\\n\\t\\tborder: 2px solid #ff3e00;\\n\\t}\\n\\n\\tbutton:active {\\n\\t\\tbackground-color: rgba(255, 62, 0, 0.2);\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAaC,MAAM,cAAC,CAAC,AACP,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,OAAO,CAClB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACrC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,oBAAoB,CAAE,YAAY,AACnC,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,AAC1B,CAAC,AAED,oBAAM,OAAO,AAAC,CAAC,AACd,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AACxC,CAAC\"}"
};

const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let count = 0;

	const increment = () => {
		count += 1;
	};

	$$result.css.add(css);

	return `<button class="${"svelte-qxv3xi"}">Clicks: ${escape(count)}
</button>`;
});

export default Counter;
//# sourceMappingURL=Counter.svelte.js.map