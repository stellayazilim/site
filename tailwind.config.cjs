/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js",   "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
	theme: {
		extend: {
			colors: {
				default: {
					"dark-primary": "#111722",
					"dark-secondary": "#2e3759"
				}
			},
			backgroundImage: () => ({
				'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
				'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
				'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
				'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
			  })
		},
	},
	plugins: [require('flowbite/plugin')],

}	
 