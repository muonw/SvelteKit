import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['node_modules']
		}
	}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		paths: {
			base: '',
		}
	}
};

export default config;
