import { join } from 'path';
const { skeleton } = require('@skeletonlabs/tw-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				monserrat: '"Monserrat", sans-serif'
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				preset: ['crimson']
			}
		}),
		require('flowbite/plugin')
	]
};
