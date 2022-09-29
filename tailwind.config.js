/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			black: "#0f172a",
			sky: "#f0f9ff",
			blue: "#1fb6ff",
			darkblue: "#1e40af",
			purple: "#7e5bef",
			pink: "#ff49db",
			orange: "#ff7849",
			green: "#13ce66",
			yellow: "#ffc82c",
			graydark: "#273444",
			gray: "#8492a6",
			graylight: "#d3dce6",
			white: "#f8fafc",
			red: "#b91c1c",
		},
		extend: {},
	},
	plugins: [],
};
