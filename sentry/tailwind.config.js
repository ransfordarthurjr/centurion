/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{ts,scss,html}'],
    theme: {
        extend: {
            lineClamp: {
                8: '8',
                10: '10',
                12: '12',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
