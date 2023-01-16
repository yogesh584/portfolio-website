/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            transitionTimingFunction: {
                "header-transition": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            },
            animation: {
                smoothDown: "smoothDown 2s infinite",
            },
            keyframes: {
                smoothDown: {
                    "0%": {
                        opacity: 1,
                        top: "0%",
                    },

                    "100%": {
                        opacity: 0,
                        top: "50%",
                    },
                },
            },
        },
    },
    plugins: [],
};
