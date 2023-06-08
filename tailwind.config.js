/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			main: ["Montserrat"],
			logo: ["Source Sans Pro"],
		},
		colors: {
			background: "#f41ef7e8",
			primary: "#D3D9EF",
			secondary: "#DBDEE9",
			contast: "#a3784d",
			message: "#0a0101",
		},
		extend: {},
	},
	plugins: [],
};
