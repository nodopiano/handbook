const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'np-black': {
                    DEFAULT: '#102027',
                    '50': '#78B6C8',
                    '100': '#6AADC2',
                    '200': '#4D9CB6',
                    '300': '#3F839B',
                    '400': '#346A7E',
                    '500': '#285161',
                    '600': '#1C3844',
                    '700': '#102027',
                    '800': '#060B0E',
                    '900': '#000000'
                },
                'np-gray': {
                    DEFAULT: '#D2D5D7',
                    '50': '#FFFFFF',
                    '100': '#F6F7F7',
                    '200': '#EDEEEF',
                    '300': '#E4E6E7',
                    '400': '#DBDDDF',
                    '500': '#D2D5D7',
                    '600': '#B4B9BD',
                    '700': '#979EA2',
                    '800': '#798288',
                    '900': '#5E656A',
                },
            },
            fontFamily: {
                'sans': [
                    'Rubik',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                ],
                'serif': [
                    'Bitter',
                    'ui-serif',
                    'serif',
                ],
            },
        }
    }
}
