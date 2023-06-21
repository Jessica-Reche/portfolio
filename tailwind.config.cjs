const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,react}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			mLg: '900px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: Object.assign({}, require('tailwindcss/colors'), {
				// Aquí puedes agregar tus colores personalizados
				obscure: '#191919',
				white: '#fff',
				violet: '#8E35F2',
				pinky: '#D89FFE',
				pinkligth: 'rgba(254,159,178,.56)',
			}),
		},
		fontFamily: {
			// Headings
			sans: ['Poppins', 'sans-serif'],
			// Base text
			monospace: ['Inconsolata', 'monospace'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
		},
		letterSpacing: {
			wide: '.025em',
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold',
				},
				li: {
					letterSpacing: theme('letterSpacing.wide'),
				},
			});
		}),
	],
};
