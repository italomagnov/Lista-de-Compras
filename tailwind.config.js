/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#06071B',
            },
            fontFamily: {
                regular: 'Montserrat_400Regular',
                semibold: 'Montserrat_600SemiBold',
                bold: 'Montserrat_700Bold',
                extrabold: 'Montserrat_800ExtraBold',
            },
        },
    },
    plugins: [],
};
