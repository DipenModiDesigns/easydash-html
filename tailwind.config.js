/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ["./**/*.{html,js,scss}", "./*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"primary": "#7e22ce",
				"secondary": "#9ca3af",
				"accent": "#14b8a6",
				"neutral": "#d1d5db",
				"base-10": "#161616",
				"info": "#38bdf8",
				"success": "#34d399",
				"warning": "#facc15",
				"error": "#ef4444",
			}
		},
	},
	plugins: [],
}

