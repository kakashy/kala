import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		files: {
			serviceWorker: 'src/service-worker'
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
