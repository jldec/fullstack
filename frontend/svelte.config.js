/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		target: '#svelte',
		adapter: adapter({}) // output pages into `build`
	}
};

export default config;
