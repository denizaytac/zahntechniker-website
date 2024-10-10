/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	variants: {
		extend: {
			display: ['responsive', 'group-hover', 'group-focus'],
		},
	},
}
