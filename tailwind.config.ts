import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', contentPath(import.meta.url, 'svelte')],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				monserrat: '"Monserrat", sans-serif'
			},
			animation: {
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				orbit: 'orbit calc(var(--duration)*1s) linear infinite'
			},
			keyframes: {
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				}
			}
		}
	},

	plugins: [
		skeleton({
			themes: [themes.cerberus]
		}),
		typography
	]
} satisfies Config;
